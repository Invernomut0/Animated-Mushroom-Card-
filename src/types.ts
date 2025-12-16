/**
 * Type definitions for Animated Mushroom Card
 */

import { LovelaceCardConfig, ActionConfig } from 'custom-card-helpers';

export interface AnimatedMushroomCardConfig extends LovelaceCardConfig {
  entity: string;
  name?: string;
  icon?: string;
  icon_color?: string;
  animation?: string;
  animate_on_state?: string;
  show_state?: boolean;
  show_name?: boolean;
  layout?: 'horizontal' | 'vertical';
  fill_container?: boolean;
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  icon_type?: 'icon' | 'entity-picture' | 'none';
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export const DEFAULT_CONFIG: Partial<AnimatedMushroomCardConfig> = {
  animation: 'breathe',
  icon_color: 'state',
  show_state: true,
  show_name: true,
  layout: 'horizontal',
  fill_container: false,
  primary_info: 'name',
  secondary_info: 'state',
  icon_type: 'icon',
  tap_action: { action: 'toggle' },
  hold_action: { action: 'more-info' },
};
