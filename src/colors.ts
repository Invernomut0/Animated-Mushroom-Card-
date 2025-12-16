/**
 * Color definitions and utilities for Animated Mushroom Card
 */

export interface ColorDefinition {
  name: string;
  label: string;
  rgb: string;
}

export const COLORS: Record<string, ColorDefinition> = {
  red: { name: 'red', label: 'Red', rgb: '244, 67, 54' },
  pink: { name: 'pink', label: 'Pink', rgb: '233, 30, 99' },
  purple: { name: 'purple', label: 'Purple', rgb: '156, 39, 176' },
  'deep-purple': { name: 'deep-purple', label: 'Deep Purple', rgb: '103, 58, 183' },
  indigo: { name: 'indigo', label: 'Indigo', rgb: '63, 81, 181' },
  blue: { name: 'blue', label: 'Blue', rgb: '33, 150, 243' },
  'light-blue': { name: 'light-blue', label: 'Light Blue', rgb: '3, 169, 244' },
  cyan: { name: 'cyan', label: 'Cyan', rgb: '0, 188, 212' },
  teal: { name: 'teal', label: 'Teal', rgb: '0, 150, 136' },
  green: { name: 'green', label: 'Green', rgb: '76, 175, 80' },
  'light-green': { name: 'light-green', label: 'Light Green', rgb: '139, 195, 74' },
  lime: { name: 'lime', label: 'Lime', rgb: '205, 220, 57' },
  yellow: { name: 'yellow', label: 'Yellow', rgb: '255, 235, 59' },
  amber: { name: 'amber', label: 'Amber', rgb: '255, 193, 7' },
  orange: { name: 'orange', label: 'Orange', rgb: '255, 152, 0' },
  'deep-orange': { name: 'deep-orange', label: 'Deep Orange', rgb: '255, 87, 34' },
  brown: { name: 'brown', label: 'Brown', rgb: '121, 85, 72' },
  grey: { name: 'grey', label: 'Grey', rgb: '158, 158, 158' },
  'blue-grey': { name: 'blue-grey', label: 'Blue Grey', rgb: '96, 125, 139' },
  white: { name: 'white', label: 'White', rgb: '255, 255, 255' },
  disabled: { name: 'disabled', label: 'Disabled', rgb: '189, 189, 189' },
  state: { name: 'state', label: 'State Color', rgb: 'var(--rgb-state-entity)' },
};

export const COLOR_LIST = Object.keys(COLORS);

export function getColorRgb(colorName: string): string {
  const color = COLORS[colorName];
  if (color) {
    return color.rgb;
  }
  // Check if it's already an RGB value
  if (colorName.match(/^\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}$/)) {
    return colorName;
  }
  // Default to grey
  return COLORS.grey.rgb;
}

export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
  return COLORS.grey.rgb;
}
