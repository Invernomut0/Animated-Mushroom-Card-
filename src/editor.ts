/**
 * Editor for Animated Mushroom Card
 * Provides visual configuration with dropdown menus for animations and colors
 */

import {
  LitElement,
  html,
  css,
  CSSResultGroup,
  TemplateResult,
  nothing,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  HomeAssistant,
  LovelaceCardEditor,
  fireEvent,
} from 'custom-card-helpers';

import { AnimatedMushroomCardConfig } from './types';
import { ANIMATIONS, ANIMATION_CATEGORIES, AnimationCategory } from './animations';
import { COLORS } from './colors';

@customElement('animated-mushroom-card-editor')
export class AnimatedMushroomCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: AnimatedMushroomCardConfig;

  public setConfig(config: AnimatedMushroomCardConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) {
      return;
    }
    
    const target = ev.target as any;
    const configValue = target.configValue;
    
    if (!configValue) {
      return;
    }

    let newValue: any;
    
    if (target.checked !== undefined) {
      newValue = target.checked;
    } else {
      newValue = ev.detail?.value ?? target.value;
    }

    if (newValue === '') {
      const newConfig = { ...this._config };
      delete (newConfig as any)[configValue];
      this._config = newConfig;
    } else {
      this._config = {
        ...this._config,
        [configValue]: newValue,
      };
    }

    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _getAnimationsByCategory(): Map<AnimationCategory, { value: string; label: string }[]> {
    const categoryMap = new Map<AnimationCategory, { value: string; label: string }[]>();
    
    for (const category of ANIMATION_CATEGORIES) {
      const animations = Object.values(ANIMATIONS)
        .filter(anim => anim.category === category)
        .map(anim => ({ value: anim.name, label: anim.label }));
      
      if (animations.length > 0) {
        categoryMap.set(category, animations);
      }
    }
    
    return categoryMap;
  }

  private _getColorOptions(): { value: string; label: string }[] {
    return Object.values(COLORS).map(color => ({
      value: color.name,
      label: color.label,
    }));
  }

  private _getCategoryLabel(category: AnimationCategory): string {
    const labels: Record<AnimationCategory, string> = {
      general: '🔄 General',
      climate: '🌡️ Climate',
      lights: '💡 Lights',
      security: '🔒 Security',
      appliances: '🔌 Appliances',
      sensors: '📡 Sensors',
      media: '🎬 Media',
      network: '🌐 Network',
    };
    return labels[category] || category;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const animationsByCategory = this._getAnimationsByCategory();
    const colorOptions = this._getColorOptions();

    return html`
      <div class="card-config">
        <!-- Entity Selector -->
        <div class="config-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity || ''}
            .label=${'Entity (Required)'}
            .required=${true}
            allow-custom-entity
            @value-changed=${(ev: CustomEvent) => {
              const newValue = ev.detail?.value;
              if (newValue !== undefined) {
                this._config = {
                  ...this._config,
                  entity: newValue,
                };
                fireEvent(this, 'config-changed', { config: this._config });
              }
            }}
          ></ha-entity-picker>
        </div>

        <!-- Name -->
        <div class="config-row">
          <ha-textfield
            .label=${'Name (Optional)'}
            .value=${this._config.name || ''}
            .configValue=${'name'}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <!-- Icon -->
        <div class="config-row">
          <ha-icon-picker
            .hass=${this.hass}
            .value=${this._config.icon || ''}
            .label=${'Icon (Optional)'}
            @value-changed=${(ev: CustomEvent) => {
              const newValue = ev.detail?.value;
              this._config = {
                ...this._config,
                icon: newValue || undefined,
              };
              fireEvent(this, 'config-changed', { config: this._config });
            }}
          ></ha-icon-picker>
        </div>

        <!-- Animation Dropdown with Categories -->
        <div class="config-row">
          <label class="section-label">Animation</label>
          <ha-select
            .value=${this._config.animation || 'breathe'}
            .configValue=${'animation'}
            @selected=${this._valueChanged}
            @closed=${(ev: Event) => ev.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${Array.from(animationsByCategory.entries()).map(([category, animations]) => html`
              <mwc-list-item disabled class="category-header">
                ${this._getCategoryLabel(category)}
              </mwc-list-item>
              ${animations.map(anim => html`
                <mwc-list-item .value=${anim.value}>
                  ${anim.label}
                </mwc-list-item>
              `)}
            `)}
          </ha-select>
        </div>

        <!-- Color Dropdown -->
        <div class="config-row">
          <label class="section-label">Icon Color</label>
          <ha-select
            .value=${this._config.icon_color || 'state'}
            .configValue=${'icon_color'}
            @selected=${this._valueChanged}
            @closed=${(ev: Event) => ev.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${colorOptions.map(color => html`
              <mwc-list-item .value=${color.value}>
                <span class="color-option">
                  <span 
                    class="color-preview" 
                    style="background-color: rgb(${COLORS[color.value]?.rgb || '158, 158, 158'})"
                  ></span>
                  ${color.label}
                </span>
              </mwc-list-item>
            `)}
          </ha-select>
        </div>

        <!-- Custom Hex Color -->
        <div class="config-row">
          <ha-textfield
            .label=${'Custom Color (Hex, e.g. #FF5722)'}
            .value=${this._config.icon_color?.startsWith('#') ? this._config.icon_color : ''}
            .configValue=${'icon_color'}
            @input=${this._valueChanged}
            placeholder="#FF5722"
          ></ha-textfield>
        </div>

        <!-- Animate On State -->
        <div class="config-row">
          <label class="section-label">Animate on State</label>
          <ha-select
            .value=${this._config.animate_on_state || ''}
            .configValue=${'animate_on_state'}
            @selected=${this._valueChanged}
            @closed=${(ev: Event) => ev.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="">Auto-detect (on, playing, home, open)</mwc-list-item>
            <mwc-list-item disabled class="category-header">Common States</mwc-list-item>
            <mwc-list-item value="on">On</mwc-list-item>
            <mwc-list-item value="off">Off</mwc-list-item>
            <mwc-list-item value="playing">Playing</mwc-list-item>
            <mwc-list-item value="paused">Paused</mwc-list-item>
            <mwc-list-item value="idle">Idle</mwc-list-item>
            <mwc-list-item disabled class="category-header">Presence</mwc-list-item>
            <mwc-list-item value="home">Home</mwc-list-item>
            <mwc-list-item value="not_home">Away</mwc-list-item>
            <mwc-list-item disabled class="category-header">Binary Sensors</mwc-list-item>
            <mwc-list-item value="open">Open</mwc-list-item>
            <mwc-list-item value="closed">Closed</mwc-list-item>
            <mwc-list-item value="locked">Locked</mwc-list-item>
            <mwc-list-item value="unlocked">Unlocked</mwc-list-item>
            <mwc-list-item value="detected">Detected</mwc-list-item>
            <mwc-list-item disabled class="category-header">Climate</mwc-list-item>
            <mwc-list-item value="heating">Heating</mwc-list-item>
            <mwc-list-item value="cooling">Cooling</mwc-list-item>
            <mwc-list-item value="heat_cool">Heat/Cool</mwc-list-item>
            <mwc-list-item disabled class="category-header">Vacuum</mwc-list-item>
            <mwc-list-item value="cleaning">Cleaning</mwc-list-item>
            <mwc-list-item value="docked">Docked</mwc-list-item>
            <mwc-list-item value="returning">Returning</mwc-list-item>
            <mwc-list-item disabled class="category-header">Media</mwc-list-item>
            <mwc-list-item value="standby">Standby</mwc-list-item>
            <mwc-list-item value="buffering">Buffering</mwc-list-item>
          </ha-select>
        </div>

        <!-- Layout -->
        <div class="config-row">
          <label class="section-label">Layout</label>
          <ha-select
            .value=${this._config.layout || 'horizontal'}
            .configValue=${'layout'}
            @selected=${this._valueChanged}
            @closed=${(ev: Event) => ev.stopPropagation()}
            fixedMenuPosition
          >
            <mwc-list-item value="horizontal">Horizontal</mwc-list-item>
            <mwc-list-item value="vertical">Vertical</mwc-list-item>
          </ha-select>
        </div>

        <!-- Toggles -->
        <div class="config-row switches">
          <ha-formfield label="Show Name">
            <ha-switch
              .checked=${this._config.show_name !== false}
              .configValue=${'show_name'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show State">
            <ha-switch
              .checked=${this._config.show_state !== false}
              .configValue=${'show_state'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Fill Container">
            <ha-switch
              .checked=${this._config.fill_container === true}
              .configValue=${'fill_container'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <!-- Actions Section -->
        <div class="config-section">
          <label class="section-title">Actions</label>
          
          <div class="config-row">
            <label class="section-label">Tap Action</label>
            <ha-select
              .value=${this._config.tap_action?.action || 'toggle'}
              .configValue=${'tap_action'}
              @selected=${(ev: CustomEvent) => {
                this._config = {
                  ...this._config,
                  tap_action: { action: (ev.target as any).value },
                };
                fireEvent(this, 'config-changed', { config: this._config });
              }}
              @closed=${(ev: Event) => ev.stopPropagation()}
              fixedMenuPosition
            >
              <mwc-list-item value="toggle">Toggle</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="call-service">Call Service</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">URL</mwc-list-item>
              <mwc-list-item value="none">None</mwc-list-item>
            </ha-select>
          </div>

          <div class="config-row">
            <label class="section-label">Hold Action</label>
            <ha-select
              .value=${this._config.hold_action?.action || 'more-info'}
              .configValue=${'hold_action'}
              @selected=${(ev: CustomEvent) => {
                this._config = {
                  ...this._config,
                  hold_action: { action: (ev.target as any).value },
                };
                fireEvent(this, 'config-changed', { config: this._config });
              }}
              @closed=${(ev: Event) => ev.stopPropagation()}
              fixedMenuPosition
            >
              <mwc-list-item value="toggle">Toggle</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="call-service">Call Service</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">URL</mwc-list-item>
              <mwc-list-item value="none">None</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
      }

      .config-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .config-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color);
      }

      .section-title {
        font-weight: 500;
        font-size: 14px;
        color: var(--primary-text-color);
        margin-bottom: 8px;
      }

      .section-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }

      ha-entity-picker,
      ha-textfield,
      ha-icon-picker,
      ha-select {
        width: 100%;
      }

      ha-select {
        --mdc-menu-max-height: 300px;
      }

      .switches {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }

      ha-formfield {
        margin-right: 16px;
      }

      .category-header {
        font-weight: 600;
        font-size: 12px;
        color: var(--primary-color);
        text-transform: uppercase;
        pointer-events: none;
        opacity: 0.8;
        margin-top: 8px;
      }

      .color-option {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .color-preview {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid var(--divider-color);
        flex-shrink: 0;
      }

      mwc-list-item {
        --mdc-list-side-padding: 16px;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-mushroom-card-editor': AnimatedMushroomCardEditor;
  }
}
