/**
 * Animated Mushroom Card
 * A Mushroom-style animated entity card for Home Assistant
 * Inspired by HA-Animated-cards by Anashost
 * 
 * @author invernomut0
 * @license MIT
 */

import {
  LitElement,
  html,
  css,
  CSSResultGroup,
  PropertyValues,
  TemplateResult,
  nothing,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Directive, directive, DirectiveParameters, ElementPart } from 'lit/directive.js';
import {
  HomeAssistant,
  hasAction,
  handleAction,
  LovelaceCard,
  LovelaceCardEditor,
  computeStateDisplay,
  stateIcon,
  computeDomain,
  ActionHandlerEvent,
} from 'custom-card-helpers';

import { AnimatedMushroomCardConfig, DEFAULT_CONFIG } from './types';
import { ANIMATIONS, AnimationDefinition } from './animations';
import { COLORS, getColorRgb, hexToRgb } from './colors';

// ========== Custom Action Handler Directive ==========
interface ActionHandlerOptions {
  hasHold?: boolean;
  hasDoubleClick?: boolean;
}

class ActionHandlerDirective extends Directive {
  private element!: HTMLElement;
  private holdTimer?: ReturnType<typeof setTimeout>;
  private held = false;
  private dblClickTimeout?: ReturnType<typeof setTimeout>;

  render(_options: ActionHandlerOptions) {
    return nothing;
  }

  update(part: ElementPart, [options]: DirectiveParameters<this>) {
    const element = part.element as HTMLElement;
    if (this.element !== element) {
      this.element = element;
      this.setupListeners(options);
    }
    return nothing;
  }

  private setupListeners(options: ActionHandlerOptions): void {
    const handleStart = (ev: Event) => {
      this.held = false;
      if (options.hasHold) {
        this.holdTimer = setTimeout(() => {
          this.held = true;
          this.fireEvent('hold');
        }, 500);
      }
    };

    const handleEnd = (ev: Event) => {
      if (this.holdTimer) {
        clearTimeout(this.holdTimer);
        this.holdTimer = undefined;
      }
      if (this.held) {
        this.held = false;
        return;
      }
      
      if (options.hasDoubleClick) {
        if (this.dblClickTimeout) {
          clearTimeout(this.dblClickTimeout);
          this.dblClickTimeout = undefined;
          this.fireEvent('double_tap');
        } else {
          this.dblClickTimeout = setTimeout(() => {
            this.dblClickTimeout = undefined;
            this.fireEvent('tap');
          }, 250);
        }
      } else {
        this.fireEvent('tap');
      }
    };

    const handleCancel = () => {
      if (this.holdTimer) {
        clearTimeout(this.holdTimer);
        this.holdTimer = undefined;
      }
      this.held = false;
    };

    // Touch events
    this.element.addEventListener('touchstart', handleStart, { passive: true });
    this.element.addEventListener('touchend', handleEnd);
    this.element.addEventListener('touchcancel', handleCancel);

    // Mouse events
    this.element.addEventListener('mousedown', handleStart);
    this.element.addEventListener('mouseup', handleEnd);
    this.element.addEventListener('mouseleave', handleCancel);

    // Prevent context menu on long press
    this.element.addEventListener('contextmenu', (ev) => {
      if (options.hasHold) {
        ev.preventDefault();
      }
    });
  }

  private fireEvent(action: string): void {
    const event = new CustomEvent<{ action: string }>('action', {
      bubbles: true,
      composed: true,
      detail: { action },
    });
    this.element.dispatchEvent(event);
  }
}

const actionHandler = directive(ActionHandlerDirective);

// ========== Card Registration ==========
const CARD_VERSION = '1.0.0';

console.info(
  `%c ANIMATED-MUSHROOM-CARD %c v${CARD_VERSION} `,
  'color: white; background: #7c4dff; font-weight: bold;',
  'color: #7c4dff; background: white; font-weight: bold;'
);

// Register the card with Home Assistant
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'animated-mushroom-card',
  name: 'Animated Mushroom Card',
  description: 'A Mushroom-style animated entity card with customizable animations and colors',
  preview: true,
  documentationURL: 'https://github.com/invernomut0/animated-mushroom-card',
});

@customElement('animated-mushroom-card')
export class AnimatedMushroomCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: AnimatedMushroomCardConfig;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./editor');
    return document.createElement('animated-mushroom-card-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(hass: HomeAssistant): AnimatedMushroomCardConfig {
    const entities = Object.keys(hass.states);
    const entity = entities.find(e => computeDomain(e) === 'light') || entities[0];
    return {
      type: 'custom:animated-mushroom-card',
      entity: entity,
      animation: 'breathe',
      icon_color: 'amber',
    };
  }

  public setConfig(config: AnimatedMushroomCardConfig): void {
    if (!config.entity) {
      throw new Error('You must define an entity');
    }
    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
  }

  public getCardSize(): number {
    return 1;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config')) {
      return true;
    }
    if (changedProps.has('hass') && this._config) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (oldHass) {
        const entity = this._config.entity;
        return oldHass.states[entity] !== this.hass.states[entity];
      }
    }
    return true;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this._config && ev.detail.action) {
      handleAction(this, this.hass, this._config, ev.detail.action);
    }
  }

  private _isEntityActive(): boolean {
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return false;
    const state = stateObj.state;
    return ['on', 'playing', 'home', 'open', 'unlocked', 'active', 'heating', 'cooling', 'cleaning'].includes(state);
  }

  private _getColorRgb(): string {
    const stateObj = this.hass.states[this._config.entity];
    
    // Se l'entità è spenta/inattiva, restituisci grigio
    if (!this._isEntityActive()) {
      return COLORS.disabled.rgb;
    }

    const colorConfig = this._config.icon_color || 'state';
    
    if (colorConfig === 'state') {
      // Use entity state color
      if (stateObj) {
        const domain = computeDomain(this._config.entity);
        const state = stateObj.state;
        
        // Map common states to colors
        if (state === 'on' || state === 'home' || state === 'playing') {
          return COLORS.amber.rgb;
        }
        if (state === 'unavailable' || state === 'unknown') {
          return COLORS.disabled.rgb;
        }
        // For lights with rgb_color attribute
        if (domain === 'light' && stateObj.attributes.rgb_color) {
          const rgb = stateObj.attributes.rgb_color;
          return `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
        }
      }
      return COLORS.amber.rgb;
    }
    
    // Check if it's a hex color
    if (colorConfig.startsWith('#')) {
      return hexToRgb(colorConfig);
    }
    
    return getColorRgb(colorConfig);
  }

  private _shouldAnimate(): boolean {
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return false;

    const animateOnState = this._config.animate_on_state;
    
    if (!animateOnState) {
      // Default behavior: animate when entity is "active"
      const state = stateObj.state;
      return ['on', 'playing', 'home', 'open', 'unlocked', 'active'].includes(state);
    }
    
    // Check if current state matches animate_on_state
    return stateObj.state === animateOnState;
  }

  private _getAnimation(): AnimationDefinition {
    const animationName = this._config.animation || 'breathe';
    return ANIMATIONS[animationName] || ANIMATIONS.breathe;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) {
      return nothing;
    }

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html`
        <ha-card>
          <div class="warning">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;
    }

    const name = this._config.name || stateObj.attributes.friendly_name || this._config.entity;
    const icon = this._config.icon || stateIcon(stateObj);
    const state = computeStateDisplay(this.hass.localize, stateObj, this.hass.locale);
    const isActive = this._shouldAnimate();
    const animation = this._getAnimation();
    const colorRgb = this._getColorRgb();

    const layout = this._config.layout || 'horizontal';
    const showName = this._config.show_name !== false;
    const showState = this._config.show_state !== false;

    const cardClasses = {
      'fill-container': this._config.fill_container === true,
    };

    const iconContainerClasses = {
      'icon-container': true,
      'animating': isActive && animation.name !== 'none',
    };

    const shapeClasses = {
      'shape': true,
      'active': isActive,
    };

    // Build animation styles
    const animationStyles: Record<string, string> = {
      '--rgb-icon-color': colorRgb,
    };

    if (isActive && animation.name !== 'none') {
      animationStyles['--shape-animation'] = animation.shapeAnimation;
      if (animation.beforeAnimation) {
        animationStyles['--before-animation'] = animation.beforeAnimation;
      }
      if (animation.afterAnimation) {
        animationStyles['--after-animation'] = animation.afterAnimation;
      }
    }

    return html`
      <ha-card 
        class=${classMap(cardClasses)}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
          hasHold: hasAction(this._config.hold_action),
          hasDoubleClick: hasAction(this._config.double_tap_action),
        })}
        tabindex="0"
      >
        <style>
          ${animation.keyframes}
        </style>
        <div class="card-content ${layout}">
          <div 
            class=${classMap(iconContainerClasses)}
            style=${styleMap(animationStyles)}
          >
            <div class=${classMap(shapeClasses)}>
              <ha-icon .icon=${icon}></ha-icon>
            </div>
          </div>
          <div class="info">
            ${showName ? html`<span class="name">${name}</span>` : nothing}
            ${showState ? html`<span class="state">${state}</span>` : nothing}
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        --icon-size: 42px;
        --shape-size: 42px;
        --shape-border-radius: 50%;
        --card-padding: 12px;
      }

      ha-card {
        height: 100%;
        box-sizing: border-box;
        padding: var(--card-padding);
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        outline: none;
        transition: transform 180ms ease-in-out, box-shadow 180ms ease-in-out;
      }

      ha-card:hover {
        transform: scale(1.02);
      }

      ha-card.fill-container {
        height: 100%;
      }

      .card-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .card-content.horizontal {
        flex-direction: row;
      }

      .card-content.vertical {
        flex-direction: column;
        text-align: center;
      }

      .icon-container {
        position: relative;
        flex-shrink: 0;
      }

      .shape {
        position: relative;
        width: var(--shape-size);
        height: var(--shape-size);
        border-radius: var(--shape-border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(var(--rgb-icon-color), 0.2);
        transition: background-color 280ms ease-in-out;
        transform-origin: center center;
      }

      .shape.active {
        background-color: rgba(var(--rgb-icon-color), 0.25);
      }

      .animating .shape {
        animation: var(--shape-animation, none);
      }

      .shape::before,
      .shape::after {
        content: '';
        position: absolute;
        inset: -4px;
        border-radius: inherit;
        pointer-events: none;
      }

      .animating .shape::before {
        animation: var(--before-animation, none);
      }

      .animating .shape::after {
        animation: var(--after-animation, none);
      }

      .shape ha-icon {
        --mdc-icon-size: 24px;
        color: rgb(var(--rgb-icon-color));
        transition: color 280ms ease-in-out;
      }

      .info {
        display: flex;
        flex-direction: column;
        min-width: 0;
        flex: 1;
      }

      .card-content.vertical .info {
        align-items: center;
      }

      .name {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.2;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .state {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.2;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 2px;
      }

      .warning {
        padding: 16px;
        color: var(--error-color);
        text-align: center;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-mushroom-card': AnimatedMushroomCard;
  }
}
