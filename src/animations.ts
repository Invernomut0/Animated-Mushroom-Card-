/**
 * Animation definitions for Animated Mushroom Card
 * Inspired by HA-Animated-cards by Anashost
 */

export interface AnimationDefinition {
  name: string;
  label: string;
  category: string;
  keyframes: string;
  shapeAnimation: string;
  beforeAnimation?: string;
  afterAnimation?: string;
}

export const ANIMATION_CATEGORIES = [
  'general',
  'climate',
  'lights',
  'security',
  'appliances',
  'sensors',
  'media',
  'network',
] as const;

export type AnimationCategory = typeof ANIMATION_CATEGORIES[number];

export const ANIMATIONS: Record<string, AnimationDefinition> = {
  // ========== GENERAL ==========
  none: {
    name: 'none',
    label: 'None',
    category: 'general',
    keyframes: '',
    shapeAnimation: 'none',
  },
  breathe: {
    name: 'breathe',
    label: 'Breathe',
    category: 'general',
    keyframes: `
      @keyframes breathe {
        0%   { transform: scale(1); opacity: 0.85; }
        50%  { transform: scale(1.12); opacity: 1; }
        100% { transform: scale(1); opacity: 0.85; }
      }
      @keyframes breathe-glow {
        0% { box-shadow: 0 0 8px 2px rgba(var(--rgb-icon-color), 0.3); }
        50% { box-shadow: 0 0 20px 8px rgba(var(--rgb-icon-color), 0.6); }
        100% { box-shadow: 0 0 8px 2px rgba(var(--rgb-icon-color), 0.3); }
      }
    `,
    shapeAnimation: 'breathe 2s ease-in-out infinite',
    beforeAnimation: 'breathe-glow 2s ease-in-out infinite',
  },
  pulse: {
    name: 'pulse',
    label: 'Pulse',
    category: 'general',
    keyframes: `
      @keyframes pulse {
        0%   { transform: scale(1); }
        50%  { transform: scale(1.15); }
        100% { transform: scale(1); }
      }
      @keyframes pulse-ring {
        0% { box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.8); }
        70% { box-shadow: 0 0 0 15px rgba(var(--rgb-icon-color), 0); }
        100% { box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0); }
      }
    `,
    shapeAnimation: 'pulse 1.2s ease-in-out infinite',
    beforeAnimation: 'pulse-ring 1.2s ease-out infinite',
  },
  shake: {
    name: 'shake',
    label: 'Shake',
    category: 'general',
    keyframes: `
      @keyframes shake {
        0%, 100% { transform: translateX(0) rotate(0); }
        15% { transform: translateX(-4px) rotate(-3deg); }
        30% { transform: translateX(4px) rotate(3deg); }
        45% { transform: translateX(-3px) rotate(-2deg); }
        60% { transform: translateX(3px) rotate(2deg); }
        75% { transform: translateX(-2px) rotate(-1deg); }
        90% { transform: translateX(2px) rotate(1deg); }
      }
      @keyframes shake-glow {
        0%, 100% { box-shadow: 0 0 5px 2px rgba(var(--rgb-icon-color), 0.4); }
        50% { box-shadow: 0 0 15px 5px rgba(var(--rgb-icon-color), 0.7); }
      }
    `,
    shapeAnimation: 'shake 0.6s ease-in-out infinite',
    beforeAnimation: 'shake-glow 0.6s ease-in-out infinite',
  },
  bounce: {
    name: 'bounce',
    label: 'Bounce',
    category: 'general',
    keyframes: `
      @keyframes bounce {
        0%, 100% { transform: translateY(0) scale(1); }
        30% { transform: translateY(-12px) scale(0.95); }
        50% { transform: translateY(0) scale(1.05); }
        70% { transform: translateY(-6px) scale(0.98); }
      }
      @keyframes bounce-shadow {
        0%, 100% { box-shadow: 0 5px 10px -5px rgba(0,0,0,0.3); }
        30% { box-shadow: 0 15px 20px -5px rgba(0,0,0,0.15); }
        50% { box-shadow: 0 2px 5px -2px rgba(0,0,0,0.4); }
      }
    `,
    shapeAnimation: 'bounce 1s ease-in-out infinite',
    afterAnimation: 'bounce-shadow 1s ease-in-out infinite',
  },
  spin: {
    name: 'spin',
    label: 'Spin',
    category: 'general',
    keyframes: `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes spin-trail {
        0% { box-shadow: -8px 0 12px -4px rgba(var(--rgb-icon-color), 0.6); }
        25% { box-shadow: 0 -8px 12px -4px rgba(var(--rgb-icon-color), 0.6); }
        50% { box-shadow: 8px 0 12px -4px rgba(var(--rgb-icon-color), 0.6); }
        75% { box-shadow: 0 8px 12px -4px rgba(var(--rgb-icon-color), 0.6); }
        100% { box-shadow: -8px 0 12px -4px rgba(var(--rgb-icon-color), 0.6); }
      }
    `,
    shapeAnimation: 'spin 1.5s linear infinite',
    beforeAnimation: 'spin-trail 1.5s linear infinite',
  },

  // ========== RING/GLOW ULTRA ==========
  'ring-breathe': {
    name: 'ring-breathe',
    label: 'Ring Breathe',
    category: 'general',
    keyframes: `
      @keyframes ring-breathe {
        0%   { box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.9); }
        50%  { box-shadow: 0 0 0 12px rgba(var(--rgb-icon-color), 0.3); }
        100% { box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0); }
      }
      @keyframes ring-inner {
        0%, 100% { box-shadow: inset 0 0 8px rgba(var(--rgb-icon-color), 0.4); }
        50% { box-shadow: inset 0 0 15px rgba(var(--rgb-icon-color), 0.6); }
      }
    `,
    shapeAnimation: 'ring-breathe 1.8s ease-out infinite',
    afterAnimation: 'ring-inner 1.8s ease-out infinite',
  },
  glow: {
    name: 'glow',
    label: 'Ultra Glow',
    category: 'general',
    keyframes: `
      @keyframes ultra-glow {
        0% {
          box-shadow: 0 0 15px 5px rgba(var(--rgb-icon-color), 0.7),
                      0 0 30px 12px rgba(var(--rgb-icon-color), 0.4),
                      0 0 50px 20px rgba(var(--rgb-icon-color), 0.2);
        }
        50% {
          box-shadow: 0 0 25px 10px rgba(var(--rgb-icon-color), 1),
                      0 0 50px 20px rgba(var(--rgb-icon-color), 0.6),
                      0 0 80px 35px rgba(var(--rgb-icon-color), 0.3);
        }
        100% {
          box-shadow: 0 0 15px 5px rgba(var(--rgb-icon-color), 0.7),
                      0 0 30px 12px rgba(var(--rgb-icon-color), 0.4),
                      0 0 50px 20px rgba(var(--rgb-icon-color), 0.2);
        }
      }
      @keyframes ultra-glow-halo {
        0%, 100% { 
          box-shadow: 0 0 100px 40px rgba(var(--rgb-icon-color), 0.15);
          opacity: 0.8;
        }
        50% { 
          box-shadow: 0 0 150px 60px rgba(var(--rgb-icon-color), 0.25);
          opacity: 1;
        }
      }
    `,
    shapeAnimation: 'ultra-glow 2.5s ease-in-out infinite',
    afterAnimation: 'ultra-glow-halo 2.5s ease-in-out infinite',
  },
  'neon-pulse': {
    name: 'neon-pulse',
    label: 'Neon Pulse',
    category: 'general',
    keyframes: `
      @keyframes neon-pulse {
        0%, 100% {
          box-shadow: 0 0 5px rgba(var(--rgb-icon-color), 0.8),
                      0 0 10px rgba(var(--rgb-icon-color), 0.6),
                      0 0 20px rgba(var(--rgb-icon-color), 0.4),
                      inset 0 0 5px rgba(var(--rgb-icon-color), 0.3);
          filter: brightness(1);
        }
        50% {
          box-shadow: 0 0 10px rgba(var(--rgb-icon-color), 1),
                      0 0 25px rgba(var(--rgb-icon-color), 0.8),
                      0 0 50px rgba(var(--rgb-icon-color), 0.5),
                      inset 0 0 10px rgba(var(--rgb-icon-color), 0.5);
          filter: brightness(1.3);
        }
      }
    `,
    shapeAnimation: 'neon-pulse 1.5s ease-in-out infinite',
  },
  'rainbow-cycle': {
    name: 'rainbow-cycle',
    label: 'Rainbow Cycle',
    category: 'general',
    keyframes: `
      @keyframes rainbow-cycle {
        0% { filter: hue-rotate(0deg); box-shadow: 0 0 20px 5px rgba(255,0,0,0.5); }
        16% { filter: hue-rotate(60deg); box-shadow: 0 0 20px 5px rgba(255,255,0,0.5); }
        33% { filter: hue-rotate(120deg); box-shadow: 0 0 20px 5px rgba(0,255,0,0.5); }
        50% { filter: hue-rotate(180deg); box-shadow: 0 0 20px 5px rgba(0,255,255,0.5); }
        66% { filter: hue-rotate(240deg); box-shadow: 0 0 20px 5px rgba(0,0,255,0.5); }
        83% { filter: hue-rotate(300deg); box-shadow: 0 0 20px 5px rgba(255,0,255,0.5); }
        100% { filter: hue-rotate(360deg); box-shadow: 0 0 20px 5px rgba(255,0,0,0.5); }
      }
    `,
    shapeAnimation: 'rainbow-cycle 4s linear infinite',
  },

  // ========== PLUG/POWER ULTRA ==========
  'plug-on': {
    name: 'plug-on',
    label: 'Plug On',
    category: 'appliances',
    keyframes: `
      @keyframes plug-on {
        0%   { transform: scale(1); }
        25%  { transform: scale(1.08) translateY(-2px); }
        50%  { transform: scale(1.12) translateY(-3px); }
        75%  { transform: scale(1.06) translateY(-1px); }
        100% { transform: scale(1); }
      }
      @keyframes plug-glow {
        0% {
          box-shadow: 0 0 15px 5px rgba(var(--rgb-icon-color), 0.7),
                      0 0 30px 12px rgba(var(--rgb-icon-color), 0.4);
        }
        50% {
          box-shadow: 0 0 25px 10px rgba(var(--rgb-icon-color), 1),
                      0 0 50px 20px rgba(var(--rgb-icon-color), 0.6);
        }
        100% {
          box-shadow: 0 0 15px 5px rgba(var(--rgb-icon-color), 0.7),
                      0 0 30px 12px rgba(var(--rgb-icon-color), 0.4);
        }
      }
      @keyframes plug-arcs {
        0% {
          box-shadow: -12px -8px 0 -4px rgba(var(--rgb-icon-color), 0.0),
                       14px 6px 0 -4px rgba(var(--rgb-icon-color), 0.0);
        }
        25% {
          box-shadow: -12px -8px 0 -4px rgba(var(--rgb-icon-color), 0.9),
                       14px 6px 0 -4px rgba(var(--rgb-icon-color), 0.5);
        }
        50% {
          box-shadow: -8px 4px 0 -4px rgba(var(--rgb-icon-color), 0.4),
                      12px -10px 0 -4px rgba(var(--rgb-icon-color), 0.8);
        }
        75% {
          box-shadow: -10px -6px 0 -4px rgba(var(--rgb-icon-color), 0.7),
                       10px 8px 0 -4px rgba(var(--rgb-icon-color), 0.5);
        }
        100% {
          box-shadow: -12px -8px 0 -4px rgba(var(--rgb-icon-color), 0.0),
                       14px 6px 0 -4px rgba(var(--rgb-icon-color), 0.0);
        }
      }
    `,
    shapeAnimation: 'plug-on 2.5s ease-in-out infinite',
    beforeAnimation: 'plug-glow 2.5s ease-in-out infinite',
    afterAnimation: 'plug-arcs 2.5s linear infinite',
  },

  // ========== FAN ULTRA ==========
  'fan-spin': {
    name: 'fan-spin',
    label: 'Fan Spin',
    category: 'climate',
    keyframes: `
      @keyframes fan-spin {
        0% { 
          transform: rotate(0deg) scale(1); 
          filter: drop-shadow(0 0 5px rgba(var(--rgb-icon-color), 0.9)); 
        }
        20% { transform: rotate(72deg) scale(1.04); }
        40% { transform: rotate(144deg) scale(1.08); }
        60% { transform: rotate(216deg) scale(1.04); }
        80% { transform: rotate(288deg) scale(1.02); }
        100% { 
          transform: rotate(360deg) scale(1); 
          filter: drop-shadow(0 0 8px rgba(var(--rgb-icon-color), 1)); 
        }
      }
      @keyframes fan-warp {
        0% {
          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.8),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.3);
        }
        40% {
          box-shadow: 0 0 0 10px rgba(var(--rgb-icon-color), 0.5),
                      0 0 30px 8px rgba(var(--rgb-icon-color), 0.3);
        }
        100% {
          box-shadow: 0 0 0 20px rgba(var(--rgb-icon-color), 0.0),
                      0 0 50px 15px rgba(var(--rgb-icon-color), 0.0);
        }
      }
      @keyframes fan-stream {
        0% {
          box-shadow: 25px 0 20px -12px rgba(var(--rgb-icon-color), 0),
                      -25px 0 20px -12px rgba(var(--rgb-icon-color), 0);
        }
        50% {
          box-shadow: 30px 0 25px -10px rgba(var(--rgb-icon-color), 0.7),
                      -30px 0 25px -10px rgba(var(--rgb-icon-color), 0.5);
        }
        100% {
          box-shadow: 25px 0 20px -12px rgba(var(--rgb-icon-color), 0),
                      -25px 0 20px -12px rgba(var(--rgb-icon-color), 0);
        }
      }
    `,
    shapeAnimation: 'fan-spin 0.8s linear infinite',
    beforeAnimation: 'fan-warp 1.4s ease-in-out infinite',
    afterAnimation: 'fan-stream 1.6s ease-in-out infinite',
  },
  'fan-idle': {
    name: 'fan-idle',
    label: 'Fan Idle',
    category: 'climate',
    keyframes: `
      @keyframes fan-idle {
        0%   { transform: rotate(-6deg); }
        50%  { transform: rotate(6deg); }
        100% { transform: rotate(-6deg); }
      }
    `,
    shapeAnimation: 'fan-idle 2.4s ease-in-out infinite',
  },

  // ========== LOCK/SECURITY ==========
  'lock-secure': {
    name: 'lock-secure',
    label: 'Lock Secure',
    category: 'security',
    keyframes: `
      @keyframes lock-secure {
        0%   { transform: rotate(0deg) scale(1); }
        15%  { transform: rotate(-12deg) scale(1.02); }
        30%  { transform: rotate(2deg) scale(1.03); }
        40%  { transform: rotate(0deg) scale(1); }
        100% { transform: rotate(0deg) scale(1); }
      }
      @keyframes lock-glow {
        0% {
          box-shadow: 0 0 25px 8px rgba(var(--rgb-icon-color), 1),
                      0 0 55px 18px rgba(var(--rgb-icon-color), 0.7),
                      0 0 95px 35px rgba(var(--rgb-icon-color), 0.45);
        }
        50% {
          box-shadow: 0 0 35px 12px rgba(var(--rgb-icon-color), 1),
                      0 0 70px 25px rgba(var(--rgb-icon-color), 0.8),
                      0 0 120px 45px rgba(var(--rgb-icon-color), 0.5);
        }
        100% {
          box-shadow: 0 0 25px 8px rgba(var(--rgb-icon-color), 1),
                      0 0 55px 18px rgba(var(--rgb-icon-color), 0.7),
                      0 0 95px 35px rgba(var(--rgb-icon-color), 0.45);
        }
      }
    `,
    shapeAnimation: 'lock-secure 2s ease-in-out infinite',
    beforeAnimation: 'lock-glow 2.2s ease-in-out infinite',
  },
  'lock-open': {
    name: 'lock-open',
    label: 'Lock Open',
    category: 'security',
    keyframes: `
      @keyframes lock-open {
        0%   { transform: rotate(10deg); }
        50%  { transform: rotate(18deg); }
        100% { transform: rotate(10deg); }
      }
    `,
    shapeAnimation: 'lock-open 1.5s ease-in-out infinite',
  },

  // ========== DOORBELL ==========
  doorbell: {
    name: 'doorbell',
    label: 'Doorbell Ring',
    category: 'security',
    keyframes: `
      @keyframes doorbell-ring {
        0% {
          transform: scale(1.05);
          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 1),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.8),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.4);
        }
        30% {
          transform: scale(0.95);
          box-shadow: 0 0 0 8px rgba(var(--rgb-icon-color), 0.6),
                      0 0 0 16px rgba(var(--rgb-icon-color), 0.3),
                      0 0 0 24px rgba(var(--rgb-icon-color), 0.1);
        }
        100% {
          transform: scale(1.05);
          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0);
        }
      }
    `,
    shapeAnimation: 'doorbell-ring 0.9s ease-out infinite',
  },

  // ========== FLAME/FIRE ==========
  flame: {
    name: 'flame',
    label: 'Flame',
    category: 'climate',
    keyframes: `
      @keyframes flame-core {
        0%   { transform: translateY(0) scale(1); filter: brightness(1.1) hue-rotate(0deg); }
        12%  { transform: translateY(-2px) scale(1.05); filter: brightness(1.4) hue-rotate(-10deg); }
        25%  { transform: translateY(1px) scale(0.98); filter: brightness(0.9) hue-rotate(8deg); }
        40%  { transform: translateY(-3px) scale(1.07); filter: brightness(1.5) hue-rotate(-18deg); }
        55%  { transform: translateY(0) scale(1.02); filter: brightness(1.2) hue-rotate(10deg); }
        70%  { transform: translateY(-1px) scale(1.04); filter: brightness(1.35) hue-rotate(-6deg); }
        85%  { transform: translateY(2px) scale(0.97); filter: brightness(0.95) hue-rotate(6deg); }
        100% { transform: translateY(0) scale(1); filter: brightness(1.1) hue-rotate(0deg); }
      }
      @keyframes flame-layers {
        0% {
          box-shadow: 0 0 14px 8px rgba(var(--rgb-icon-color), 0.8),
                      0 -10px 28px 4px rgba(255, 200, 0, 0.6);
        }
        50% {
          box-shadow: 0 0 18px 12px rgba(var(--rgb-icon-color), 1),
                      0 -14px 35px 8px rgba(255, 220, 0, 0.8);
        }
        100% {
          box-shadow: 0 0 14px 8px rgba(var(--rgb-icon-color), 0.8),
                      0 -10px 28px 4px rgba(255, 200, 0, 0.6);
        }
      }
      @keyframes ember-pulse {
        0% {
          box-shadow: 0 0 30px 10px rgba(var(--rgb-icon-color), 0.25),
                      0 0 60px 20px rgba(255, 120, 0, 0.15);
        }
        50% {
          box-shadow: 0 0 50px 18px rgba(var(--rgb-icon-color), 0.5),
                      0 0 90px 35px rgba(255, 150, 0, 0.25);
        }
        100% {
          box-shadow: 0 0 30px 10px rgba(var(--rgb-icon-color), 0.25),
                      0 0 60px 20px rgba(255, 120, 0, 0.15);
        }
      }
    `,
    shapeAnimation: 'flame-core 1.4s ease-in-out infinite',
    beforeAnimation: 'flame-layers 1.8s ease-in-out infinite',
    afterAnimation: 'ember-pulse 2.4s ease-in-out infinite',
  },

  // ========== WASHING MACHINE ==========
  washer: {
    name: 'washer',
    label: 'Washer Spin',
    category: 'appliances',
    keyframes: `
      @keyframes wash-cycle {
        0%   { transform: translateY(0) rotate(-8deg) scale(1); box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.5); }
        20%  { transform: translateY(-3px) rotate(8deg) scale(1.02); box-shadow: 0 0 8px 4px rgba(var(--rgb-icon-color), 0.3); }
        40%  { transform: translateY(2px) rotate(-6deg) scale(1.01); }
        60%  { transform: translateY(-2px) rotate(6deg) scale(1.02); }
        80%  { transform: translateY(1px) rotate(-4deg) scale(1.01); }
        100% { transform: translateY(0) rotate(-8deg) scale(1); box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.2); }
      }
      @keyframes washer-chaos {
        0% { transform: rotate(0deg) scale(1); }
        15%  { transform: rotate(18deg) translate(1px, -1px) scale(1.02); }
        30%  { transform: rotate(60deg) translate(-2px, 2px) scale(0.98); }
        45%  { transform: rotate(120deg) translate(3px, -2px) scale(1.03); }
        60%  { transform: rotate(190deg) translate(-1px, 3px) scale(0.97); }
        75%  { transform: rotate(260deg) translate(1px, -3px) scale(1.04); }
        90%  { transform: rotate(330deg) translate(-2px, 1px) scale(1.01); }
        100% { transform: rotate(360deg) translate(0, 0) scale(1); }
      }
    `,
    shapeAnimation: 'wash-cycle 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
  },

  // ========== ROBOT VACUUM ==========
  robot: {
    name: 'robot',
    label: 'Robot Vacuum',
    category: 'appliances',
    keyframes: `
      @keyframes robo-path {
        0%   { transform: translate(0, 0) scale(1); }
        10%  { transform: translate(6px, -2px) rotate(8deg) scale(0.98); }
        20%  { transform: translate(10px, 4px) rotate(-6deg) scale(1); }
        30%  { transform: translate(4px, 8px) rotate(-14deg) scale(1.02); }
        40%  { transform: translate(-6px, 10px) rotate(4deg) scale(0.98); }
        50%  { transform: translate(-10px, 2px) rotate(16deg) scale(1.03); }
        60%  { transform: translate(-6px, -6px) rotate(-8deg) scale(1); }
        70%  { transform: translate(2px, -10px) rotate(10deg) scale(0.97); }
        80%  { transform: translate(8px, -6px) rotate(-6deg) scale(1.02); }
        90%  { transform: translate(4px, -2px) rotate(4deg) scale(1.01); }
        100% { transform: translate(0, 0) rotate(0deg) scale(1); }
      }
      @keyframes robo-dock {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-2px); }
        100% { transform: translateY(0); }
      }
    `,
    shapeAnimation: 'robo-path 3.4s linear infinite',
  },

  // ========== TV ULTRA RGB ==========
  tv: {
    name: 'tv',
    label: 'TV RGB',
    category: 'media',
    keyframes: `
      @keyframes tv-rgb {
        0%   { 
          filter: hue-rotate(0deg) brightness(1.1); 
          box-shadow: 0 0 20px 8px rgba(var(--rgb-icon-color), 0.8),
                      0 0 40px 15px rgba(var(--rgb-icon-color), 0.4); 
        }
        33%  { 
          filter: hue-rotate(120deg) brightness(1.3); 
          box-shadow: 0 0 30px 12px rgba(var(--rgb-icon-color), 1),
                      0 0 60px 25px rgba(var(--rgb-icon-color), 0.6); 
        }
        66%  { 
          filter: hue-rotate(240deg) brightness(1.2); 
          box-shadow: 0 0 25px 10px rgba(var(--rgb-icon-color), 0.9),
                      0 0 50px 20px rgba(var(--rgb-icon-color), 0.5); 
        }
        100% { 
          filter: hue-rotate(360deg) brightness(1.1); 
          box-shadow: 0 0 20px 8px rgba(var(--rgb-icon-color), 0.8),
                      0 0 40px 15px rgba(var(--rgb-icon-color), 0.4); 
        }
      }
      @keyframes tv-flicker {
        0%, 100% { opacity: 1; }
        92% { opacity: 1; }
        93% { opacity: 0.8; }
        94% { opacity: 1; }
        95% { opacity: 0.7; }
        96% { opacity: 1; }
      }
      @keyframes tv-ambient {
        0% {
          box-shadow: -30px 0 40px -20px rgba(255, 100, 100, 0.4),
                       30px 0 40px -20px rgba(100, 100, 255, 0.4);
        }
        33% {
          box-shadow: -30px 0 40px -20px rgba(100, 255, 100, 0.5),
                       30px 0 40px -20px rgba(255, 100, 100, 0.5);
        }
        66% {
          box-shadow: -30px 0 40px -20px rgba(100, 100, 255, 0.5),
                       30px 0 40px -20px rgba(100, 255, 100, 0.5);
        }
        100% {
          box-shadow: -30px 0 40px -20px rgba(255, 100, 100, 0.4),
                       30px 0 40px -20px rgba(100, 100, 255, 0.4);
        }
      }
    `,
    shapeAnimation: 'tv-rgb 2s linear infinite, tv-flicker 4s linear infinite',
    afterAnimation: 'tv-ambient 3s linear infinite',
  },

  // ========== SPEAKER ULTRA BASS ==========
  speaker: {
    name: 'speaker',
    label: 'Speaker Pulse',
    category: 'media',
    keyframes: `
      @keyframes speaker-main {
        0%   { transform: scale(1); }
        10%  { transform: scale(1.12); }
        20%  { transform: scale(1.04); }
        30%  { transform: scale(1.10); }
        50%  { transform: scale(1.06); }
        70%  { transform: scale(1.08); }
        100% { transform: scale(1); }
      }
      @keyframes speaker-bars {
        0% {
          box-shadow: -12px 8px 0 -5px rgba(var(--rgb-icon-color), 0.4),
                      0 4px 0 -5px rgba(var(--rgb-icon-color), 0.6),
                      12px 8px 0 -5px rgba(var(--rgb-icon-color), 0.4);
        }
        25% {
          box-shadow: -14px -2px 0 -4px rgba(var(--rgb-icon-color), 1),
                      0 -8px 0 -3px rgba(var(--rgb-icon-color), 1),
                      14px -2px 0 -4px rgba(var(--rgb-icon-color), 1);
        }
        50% {
          box-shadow: -10px 4px 0 -5px rgba(var(--rgb-icon-color), 0.8),
                      0 -2px 0 -4px rgba(var(--rgb-icon-color), 0.9),
                      10px 4px 0 -5px rgba(var(--rgb-icon-color), 0.8);
        }
        75% {
          box-shadow: -14px -4px 0 -4px rgba(var(--rgb-icon-color), 0.9),
                      0 -10px 0 -3px rgba(var(--rgb-icon-color), 1),
                      14px -4px 0 -4px rgba(var(--rgb-icon-color), 0.9);
        }
        100% {
          box-shadow: -12px 8px 0 -5px rgba(var(--rgb-icon-color), 0.4),
                      0 4px 0 -5px rgba(var(--rgb-icon-color), 0.6),
                      12px 8px 0 -5px rgba(var(--rgb-icon-color), 0.4);
        }
      }
      @keyframes bass-wave {
        0% { 
          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.9),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.6),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.3); 
        }
        100% { 
          box-shadow: 0 0 0 15px rgba(var(--rgb-icon-color), 0),
                      0 0 0 30px rgba(var(--rgb-icon-color), 0),
                      0 0 0 45px rgba(var(--rgb-icon-color), 0); 
        }
      }
    `,
    shapeAnimation: 'speaker-main 0.5s ease-in-out infinite',
    beforeAnimation: 'speaker-bars 0.5s ease-in-out infinite',
    afterAnimation: 'bass-wave 1s ease-out infinite',
  },

  // ========== WIFI/ROUTER ULTRA ==========
  wifi: {
    name: 'wifi',
    label: 'WiFi Waves',
    category: 'network',
    keyframes: `
      @keyframes wifi-waves {
        0% {
          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 1),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.7),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.4),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.2);
        }
        25% {
          box-shadow: 0 0 0 5px rgba(var(--rgb-icon-color), 0.7),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.7),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.4),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.2);
        }
        50% {
          box-shadow: 0 0 0 10px rgba(var(--rgb-icon-color), 0.4),
                      0 0 0 5px rgba(var(--rgb-icon-color), 0.6),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.4),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.2);
        }
        75% {
          box-shadow: 0 0 0 15px rgba(var(--rgb-icon-color), 0.1),
                      0 0 0 10px rgba(var(--rgb-icon-color), 0.35),
                      0 0 0 5px rgba(var(--rgb-icon-color), 0.5),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.2);
        }
        100% {
          box-shadow: 0 0 0 20px rgba(var(--rgb-icon-color), 0),
                      0 0 0 15px rgba(var(--rgb-icon-color), 0),
                      0 0 0 10px rgba(var(--rgb-icon-color), 0),
                      0 0 0 5px rgba(var(--rgb-icon-color), 0);
        }
      }
      @keyframes wifi-data {
        0%, 100% {
          filter: brightness(1);
        }
        50% {
          filter: brightness(1.3);
        }
      }
      @keyframes wifi-signal {
        0% {
          box-shadow: 0 -10px 20px -15px rgba(var(--rgb-icon-color), 0);
        }
        50% {
          box-shadow: 0 -15px 30px -10px rgba(var(--rgb-icon-color), 0.8);
        }
        100% {
          box-shadow: 0 -10px 20px -15px rgba(var(--rgb-icon-color), 0);
        }
      }
    `,
    shapeAnimation: 'wifi-waves 1.5s ease-out infinite, wifi-data 2s ease-in-out infinite',
    afterAnimation: 'wifi-signal 1.5s ease-in-out infinite',
  },

  // ========== MOTION SENSOR ULTRA ==========
  motion: {
    name: 'motion',
    label: 'Motion Sensor',
    category: 'sensors',
    keyframes: `
      @keyframes motion-active {
        0%   { transform: scale(1); filter: brightness(1); }
        25%  { transform: scale(1.08); filter: brightness(1.2); }
        50%  { transform: scale(1.04); filter: brightness(1.1); }
        75%  { transform: scale(1.10); filter: brightness(1.25); }
        100% { transform: scale(1); filter: brightness(1); }
      }
      @keyframes motion-cone {
        0% { 
          box-shadow: 0 -25px 20px -18px rgba(var(--rgb-icon-color), 0.0),
                      -15px -20px 15px -15px rgba(var(--rgb-icon-color), 0.0),
                      15px -20px 15px -15px rgba(var(--rgb-icon-color), 0.0);
        }
        25% { 
          box-shadow: 12px -22px 18px -16px rgba(var(--rgb-icon-color), 0.6),
                      -8px -18px 15px -14px rgba(var(--rgb-icon-color), 0.3),
                      20px -15px 12px -12px rgba(var(--rgb-icon-color), 0.4);
        }
        50% { 
          box-shadow: 0 -28px 22px -14px rgba(var(--rgb-icon-color), 0.9),
                      -18px -22px 18px -14px rgba(var(--rgb-icon-color), 0.5),
                      18px -22px 18px -14px rgba(var(--rgb-icon-color), 0.5);
        }
        75% { 
          box-shadow: -12px -22px 18px -16px rgba(var(--rgb-icon-color), 0.6),
                      8px -18px 15px -14px rgba(var(--rgb-icon-color), 0.3),
                      -20px -15px 12px -12px rgba(var(--rgb-icon-color), 0.4);
        }
        100% { 
          box-shadow: 0 -25px 20px -18px rgba(var(--rgb-icon-color), 0.0),
                      -15px -20px 15px -15px rgba(var(--rgb-icon-color), 0.0),
                      15px -20px 15px -15px rgba(var(--rgb-icon-color), 0.0);
        }
      }
      @keyframes motion-pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 1),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.7),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.4);
        }
        100% {
          box-shadow: 0 0 0 12px rgba(var(--rgb-icon-color), 0),
                      0 0 0 24px rgba(var(--rgb-icon-color), 0),
                      0 0 0 36px rgba(var(--rgb-icon-color), 0);
        }
      }
    `,
    shapeAnimation: 'motion-active 0.8s ease-in-out infinite',
    beforeAnimation: 'motion-cone 1.2s linear infinite',
    afterAnimation: 'motion-pulse 1s ease-out infinite',
  },

  // ========== LAMP/LIGHT ULTRA ==========
  lamp: {
    name: 'lamp',
    label: 'Lamp Glow',
    category: 'lights',
    keyframes: `
      @keyframes lamp-glow {
        0% { 
          filter: brightness(1) saturate(1); 
          box-shadow: 0 0 10px 4px rgba(var(--rgb-icon-color), 0.7),
                      0 0 25px 10px rgba(var(--rgb-icon-color), 0.4); 
        }
        15% { 
          filter: brightness(1.4) saturate(1.2); 
          box-shadow: 0 0 20px 8px rgba(var(--rgb-icon-color), 1),
                      0 0 45px 18px rgba(var(--rgb-icon-color), 0.6); 
        }
        25% { 
          filter: brightness(0.85) saturate(0.9); 
          box-shadow: 0 0 5px 2px rgba(var(--rgb-icon-color), 0.4),
                      0 0 15px 6px rgba(var(--rgb-icon-color), 0.2); 
        }
        40% { 
          filter: brightness(1.5) saturate(1.25); 
          box-shadow: 0 0 25px 10px rgba(var(--rgb-icon-color), 1),
                      0 0 55px 22px rgba(var(--rgb-icon-color), 0.7); 
        }
        60% { 
          filter: brightness(1.2) saturate(1.1); 
          box-shadow: 0 0 15px 6px rgba(var(--rgb-icon-color), 0.85),
                      0 0 35px 14px rgba(var(--rgb-icon-color), 0.5); 
        }
        80% { 
          filter: brightness(1.1) saturate(1.05); 
          box-shadow: 0 0 12px 5px rgba(var(--rgb-icon-color), 0.75),
                      0 0 30px 12px rgba(var(--rgb-icon-color), 0.4); 
        }
        100% { 
          filter: brightness(1) saturate(1); 
          box-shadow: 0 0 10px 4px rgba(var(--rgb-icon-color), 0.7),
                      0 0 25px 10px rgba(var(--rgb-icon-color), 0.4); 
        }
      }
      @keyframes lamp-rays {
        0% {
          box-shadow: 0 -30px 25px -20px rgba(var(--rgb-icon-color), 0.3),
                      -25px -15px 20px -18px rgba(var(--rgb-icon-color), 0.2),
                      25px -15px 20px -18px rgba(var(--rgb-icon-color), 0.2);
        }
        50% {
          box-shadow: 0 -40px 35px -18px rgba(var(--rgb-icon-color), 0.6),
                      -35px -20px 30px -15px rgba(var(--rgb-icon-color), 0.4),
                      35px -20px 30px -15px rgba(var(--rgb-icon-color), 0.4);
        }
        100% {
          box-shadow: 0 -30px 25px -20px rgba(var(--rgb-icon-color), 0.3),
                      -25px -15px 20px -18px rgba(var(--rgb-icon-color), 0.2),
                      25px -15px 20px -18px rgba(var(--rgb-icon-color), 0.2);
        }
      }
    `,
    shapeAnimation: 'lamp-glow 1.8s ease-in-out infinite',
    afterAnimation: 'lamp-rays 2s ease-in-out infinite',
  },

  // ========== 3D PRINTER ==========
  printer: {
    name: 'printer',
    label: '3D Printer',
    category: 'appliances',
    keyframes: `
      @keyframes printer-sequence {
        0%   { transform: translate(-5px, 4px) scale(0.96); }
        15%  { transform: translate(5px, 4px) scale(0.96); }
        16%  { transform: translate(5px, 2px) scale(0.98); }
        30%  { transform: translate(-5px, 2px) scale(0.98); }
        31%  { transform: translate(-5px, 0px) scale(1); }
        45%  { transform: translate(5px, 0px) scale(1); }
        46%  { transform: translate(5px, -2px) scale(1.02); }
        60%  { transform: translate(-5px, -2px) scale(1.02); }
        75%  { transform: translate(0, -4px) scale(1.04); }
        100% { transform: translate(0, 0) scale(1); }
      }
    `,
    shapeAnimation: 'printer-sequence 2.3s linear infinite',
  },

  // ========== IRRIGATION ==========
  irrigation: {
    name: 'irrigation',
    label: 'Irrigation',
    category: 'appliances',
    keyframes: `
      @keyframes irrig-ultra {
        0%   { transform: translateY(0) scale(1); }
        25%  { transform: translateY(-2px) scale(1.02); }
        50%  { transform: translateY(-4px) scale(1.03); }
        75%  { transform: translateY(-2px) scale(1.02); }
        100% { transform: translateY(0) scale(1); }
      }
      @keyframes irrig-heads {
        0% {
          box-shadow: -10px 10px 0 0 rgba(var(--rgb-icon-color), 0),
                      0 10px 0 0 rgba(var(--rgb-icon-color), 0),
                      10px 10px 0 0 rgba(var(--rgb-icon-color), 0);
        }
        50% {
          box-shadow: -10px 20px 0 0 rgba(var(--rgb-icon-color), 0.6),
                      0 25px 0 0 rgba(var(--rgb-icon-color), 0.8),
                      10px 20px 0 0 rgba(var(--rgb-icon-color), 0.6);
        }
        100% {
          box-shadow: -10px 30px 0 0 rgba(var(--rgb-icon-color), 0),
                      0 35px 0 0 rgba(var(--rgb-icon-color), 0),
                      10px 30px 0 0 rgba(var(--rgb-icon-color), 0);
        }
      }
    `,
    shapeAnimation: 'irrig-ultra 1.5s ease-in-out infinite',
    beforeAnimation: 'irrig-heads 1.6s ease-out infinite',
  },

  // ========== PROJECTOR ==========
  projector: {
    name: 'projector',
    label: 'Projector',
    category: 'media',
    keyframes: `
      @keyframes proj-ultra {
        0%   { transform: translateX(0) scale(1); }
        25%  { transform: translateX(1px) scale(1.02); }
        50%  { transform: translateX(0) scale(1.03); }
        75%  { transform: translateX(-1px) scale(1.02); }
        100% { transform: translateX(0) scale(1); }
      }
      @keyframes proj-beam {
        0% { opacity: 0.7; filter: blur(1px); transform: scaleX(1) scaleY(1); }
        50% { opacity: 1; filter: blur(0.5px); transform: scaleX(1.15) scaleY(1.05); }
        100% { opacity: 0.7; filter: blur(1px); transform: scaleX(1) scaleY(1); }
      }
    `,
    shapeAnimation: 'proj-ultra 1.5s ease-in-out infinite',
    beforeAnimation: 'proj-beam 1.7s ease-in-out infinite',
  },

  // ========== CONTROLLER/GAMING ==========
  controller: {
    name: 'controller',
    label: 'Controller',
    category: 'media',
    keyframes: `
      @keyframes controller-rumble {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(-2px, 1px) rotate(-3deg); }
        50% { transform: translate(2px, -1px) rotate(3deg); }
        75% { transform: translate(-1px, 2px) rotate(-1deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
      }
      @keyframes controller-glow {
        0% {
          box-shadow: 0 0 30px 10px rgba(var(--rgb-icon-color), 1),
                      0 0 70px 22px rgba(var(--rgb-icon-color), 0.7),
                      0 0 120px 42px rgba(var(--rgb-icon-color), 0.5);
        }
        50% {
          box-shadow: 0 0 40px 15px rgba(var(--rgb-icon-color), 1),
                      0 0 90px 30px rgba(var(--rgb-icon-color), 0.8),
                      0 0 150px 55px rgba(var(--rgb-icon-color), 0.6);
        }
        100% {
          box-shadow: 0 0 30px 10px rgba(var(--rgb-icon-color), 1),
                      0 0 70px 22px rgba(var(--rgb-icon-color), 0.7),
                      0 0 120px 42px rgba(var(--rgb-icon-color), 0.5);
        }
      }
    `,
    shapeAnimation: 'controller-rumble 0.3s ease-in-out infinite',
    beforeAnimation: 'controller-glow 2s ease-in-out infinite',
  },

  // ========== TEMPERATURE SENSORS ==========
  'temp-cold': {
    name: 'temp-cold',
    label: 'Temperature Cold',
    category: 'sensors',
    keyframes: `
      @keyframes temp-cold-breathe {
        0%   { transform: scale(0.96); }
        50%  { transform: scale(1.03); }
        100% { transform: scale(0.96); }
      }
      @keyframes temp-cold-glow {
        0% { box-shadow: 0 0 20px 0 rgba(80,180,255, 0.6), 0 0 34px 6px rgba(80,180,255, 0.55); }
        50% { box-shadow: 0 0 30px 4px rgba(80,180,255, 0.95), 0 0 50px 10px rgba(80,180,255, 0.85); }
        100% { box-shadow: 0 0 20px 0 rgba(80,180,255, 0.6), 0 0 34px 6px rgba(80,180,255, 0.55); }
      }
    `,
    shapeAnimation: 'temp-cold-breathe 3.8s ease-in-out infinite',
    beforeAnimation: 'temp-cold-glow 3.4s ease-in-out infinite',
  },
  'temp-warm': {
    name: 'temp-warm',
    label: 'Temperature Warm',
    category: 'sensors',
    keyframes: `
      @keyframes temp-warm-pulse {
        0%   { transform: scale(1); }
        50%  { transform: scale(1.07); }
        100% { transform: scale(1); }
      }
      @keyframes temp-warm-glow {
        0% { box-shadow: 0 0 22px 0 rgba(255,140,40, 0.65), 0 0 36px 6px rgba(255,140,40, 0.7); }
        50% { box-shadow: 0 0 34px 6px rgba(255,140,40, 1), 0 0 58px 14px rgba(255,140,40, 0.9); }
        100% { box-shadow: 0 0 22px 0 rgba(255,140,40, 0.65), 0 0 36px 6px rgba(255,140,40, 0.7); }
      }
    `,
    shapeAnimation: 'temp-warm-pulse 2.4s ease-in-out infinite',
    beforeAnimation: 'temp-warm-glow 2.2s ease-in-out infinite',
  },
  'temp-hot': {
    name: 'temp-hot',
    label: 'Temperature Hot',
    category: 'sensors',
    keyframes: `
      @keyframes temp-hot-shimmer {
        0%   { transform: scale(1); filter: blur(0); }
        50%  { transform: scale(1.08); filter: blur(0.6px); }
        100% { transform: scale(1); filter: blur(0); }
      }
      @keyframes temp-hot-glow {
        0% { box-shadow: 0 0 24px 0 rgba(255,40,40, 0.7), 0 0 40px 8px rgba(255,40,40, 0.75); }
        50% { box-shadow: 0 0 38px 8px rgba(255,40,40, 1), 0 0 68px 18px rgba(255,40,40, 0.95); }
        100% { box-shadow: 0 0 24px 0 rgba(255,40,40, 0.7), 0 0 40px 8px rgba(255,40,40, 0.75); }
      }
    `,
    shapeAnimation: 'temp-hot-shimmer 2s ease-in-out infinite',
    beforeAnimation: 'temp-hot-glow 1.8s ease-in-out infinite',
  },

  // ========== AIR QUALITY ==========
  'air-good': {
    name: 'air-good',
    label: 'Air Quality Good',
    category: 'sensors',
    keyframes: `
      @keyframes aq-good-breathe {
        0%   { transform: scale(0.98); }
        50%  { transform: scale(1.04); }
        100% { transform: scale(0.98); }
      }
      @keyframes aq-good-glow {
        0% { box-shadow: 0 0 18px 0 rgba(40,200,120, 0.55), 0 0 30px 4px rgba(40,200,120, 0.6); }
        50% { box-shadow: 0 0 24px 4px rgba(40,200,120, 0.9), 0 0 40px 10px rgba(40,200,120, 0.85); }
        100% { box-shadow: 0 0 18px 0 rgba(40,200,120, 0.55), 0 0 30px 4px rgba(40,200,120, 0.6); }
      }
    `,
    shapeAnimation: 'aq-good-breathe 3.2s ease-in-out infinite',
    beforeAnimation: 'aq-good-glow 2.9s ease-in-out infinite',
  },
  'air-poor': {
    name: 'air-poor',
    label: 'Air Quality Poor',
    category: 'sensors',
    keyframes: `
      @keyframes aq-poor-pulse {
        0%   { transform: scale(0.99); }
        50%  { transform: scale(1.06); }
        100% { transform: scale(0.99); }
      }
      @keyframes aq-poor-glow {
        0% { box-shadow: 0 0 22px 0 rgba(255,170,60, 0.65), 0 0 34px 4px rgba(255,170,60, 0.75); }
        50% { box-shadow: 0 0 30px 4px rgba(255,170,60, 1), 0 0 50px 12px rgba(255,170,60, 0.9); }
        100% { box-shadow: 0 0 22px 0 rgba(255,170,60, 0.65), 0 0 34px 4px rgba(255,170,60, 0.75); }
      }
    `,
    shapeAnimation: 'aq-poor-pulse 2.8s ease-in-out infinite',
    beforeAnimation: 'aq-poor-glow 2.5s ease-in-out infinite',
  },

  // ========== DOOR ==========
  'door-open': {
    name: 'door-open',
    label: 'Door Open',
    category: 'security',
    keyframes: `
      @keyframes door-soft-open {
        0%   { transform: rotate(0deg); }
        40%  { transform: rotate(-9deg); }
        70%  { transform: rotate(-6deg); }
        100% { transform: rotate(0deg); }
      }
      @keyframes door-soft-glow {
        0% {
          box-shadow: 0 0 20px 0 rgba(244, 67, 54, 0.7),
                      0 0 40px 6px rgba(244, 67, 54, 0.6),
                      0 0 80px 14px rgba(244, 67, 54, 0.4);
        }
        50% {
          box-shadow: 0 0 30px 4px rgba(244, 67, 54, 0.9),
                      0 0 60px 12px rgba(244, 67, 54, 0.75),
                      0 0 100px 20px rgba(244, 67, 54, 0.5);
        }
        100% {
          box-shadow: 0 0 20px 0 rgba(244, 67, 54, 0.7),
                      0 0 40px 6px rgba(244, 67, 54, 0.6),
                      0 0 80px 14px rgba(244, 67, 54, 0.4);
        }
      }
    `,
    shapeAnimation: 'door-soft-open 1.7s ease-in-out infinite',
    beforeAnimation: 'door-soft-glow 2.5s ease-in-out infinite',
  },

  // ========== SIREN ALERT ULTRA ==========
  siren: {
    name: 'siren',
    label: 'Siren Alert',
    category: 'security',
    keyframes: `
      @keyframes siren-alert {
        0% { 
          transform: scale(1) rotate(0deg); 
          box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.9),
                      0 0 20px 5px rgba(255, 0, 0, 0.5); 
          filter: hue-rotate(0deg);
        }
        10% { 
          transform: scale(1.15) rotate(-8deg); 
          box-shadow: 0 0 30px 15px rgba(255, 0, 0, 1),
                      0 0 60px 25px rgba(255, 0, 0, 0.6); 
          filter: hue-rotate(-20deg);
        }
        20% { 
          transform: scale(1) rotate(8deg); 
          box-shadow: 0 0 0 0 rgba(255, 100, 0, 0),
                      0 0 15px 5px rgba(255, 100, 0, 0.4); 
          filter: hue-rotate(20deg);
        }
        30% { 
          transform: scale(1.15) rotate(-8deg); 
          box-shadow: 0 0 30px 15px rgba(255, 50, 0, 1),
                      0 0 60px 25px rgba(255, 50, 0, 0.6); 
          filter: hue-rotate(-10deg);
        }
        40% { 
          transform: scale(1) rotate(0deg); 
          box-shadow: 0 0 0 0 rgba(255, 0, 0, 0),
                      0 0 10px 3px rgba(255, 0, 0, 0.3); 
          filter: hue-rotate(0deg);
        }
        100% { 
          transform: scale(1) rotate(0deg); 
          box-shadow: 0 0 0 0 rgba(255, 0, 0, 0),
                      0 0 10px 3px rgba(255, 0, 0, 0.3); 
          filter: hue-rotate(0deg);
        }
      }
      @keyframes siren-flash {
        0%, 100% { 
          background: radial-gradient(circle, rgba(255,0,0,0.3) 0%, transparent 70%);
        }
        25% { 
          background: radial-gradient(circle, rgba(255,100,0,0.5) 0%, transparent 70%);
        }
        50% { 
          background: radial-gradient(circle, rgba(255,0,0,0.6) 0%, transparent 70%);
        }
        75% { 
          background: radial-gradient(circle, rgba(255,50,0,0.5) 0%, transparent 70%);
        }
      }
    `,
    shapeAnimation: 'siren-alert 0.8s ease-in-out infinite',
    beforeAnimation: 'siren-flash 0.4s linear infinite',
  },

  // ========== DISPOSAL/GARBAGE ==========
  disposal: {
    name: 'disposal',
    label: 'Garbage Disposal',
    category: 'appliances',
    keyframes: `
      @keyframes disposal-shake {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        10% { transform: translate(-2px, 1px) rotate(-2deg); }
        20% { transform: translate(2px, -1px) rotate(2deg); }
        30% { transform: translate(-1px, 2px) rotate(-1deg); }
        40% { transform: translate(1px, -2px) rotate(1deg); }
        50% { transform: translate(-2px, -1px) rotate(-2deg); }
        60% { transform: translate(2px, 1px) rotate(2deg); }
        70% { transform: translate(-1px, -2px) rotate(-1deg); }
        80% { transform: translate(1px, 2px) rotate(1deg); }
        90% { transform: translate(-2px, 0px) rotate(0deg); }
      }
      @keyframes disposal-pulse {
        0% { box-shadow: inset 0 0 0 0 rgba(var(--rgb-icon-color), 0.4); }
        50% { box-shadow: inset 0 0 10px 4px rgba(var(--rgb-icon-color), 0.6); }
        100% { box-shadow: inset 0 0 0 0 rgba(var(--rgb-icon-color), 0.4); }
      }
    `,
    shapeAnimation: 'disposal-shake 0.3s ease-in-out infinite',
    afterAnimation: 'disposal-pulse 1.5s ease-in-out infinite',
  },

  // ========== PUMP ==========
  pump: {
    name: 'pump',
    label: 'Water Pump',
    category: 'appliances',
    keyframes: `
      @keyframes pump-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes pump-shake {
        0% { transform: translate(0.5px, 0.5px); }
        100% { transform: translate(-0.5px, -0.5px); }
      }
      @keyframes pump-ripple {
        0% { transform: scale(1); opacity: 0.8; border-width: 2px; }
        100% { transform: scale(2.5); opacity: 0; border-width: 0px; }
      }
    `,
    shapeAnimation: 'pump-shake 0.1s ease-in-out infinite alternate',
    afterAnimation: 'pump-ripple 1.5s ease-out infinite',
  },

  // ========== AIR PURIFIER ==========
  purifier: {
    name: 'purifier',
    label: 'Air Purifier',
    category: 'climate',
    keyframes: `
      @keyframes air-ripple {
        0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.4); }
        100% { transform: scale(2.5); opacity: 0; box-shadow: 0 0 20px 20px rgba(var(--rgb-icon-color), 0); }
      }
      @keyframes motor-breath {
        0%   { transform: scale(1); }
        50%  { transform: scale(0.95); opacity: 0.9; }
        100% { transform: scale(1); }
      }
    `,
    shapeAnimation: 'motor-breath 3s ease-in-out infinite',
    beforeAnimation: 'air-ripple 2s infinite ease-out',
  },

  // ========== PC/SERVER ==========
  server: {
    name: 'server',
    label: 'Server Activity',
    category: 'network',
    keyframes: `
      @keyframes hdd-blink {
        0%   { opacity: 0; }
        25%  { opacity: 1; }
        50%  { opacity: 0; }
        75%  { opacity: 1; }
        90%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes network-pulse {
        0% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.03); opacity: 0.6; }
        100% { transform: scale(1); opacity: 0.3; }
      }
    `,
    shapeAnimation: 'network-pulse 1.5s ease-in-out infinite',
    beforeAnimation: 'hdd-blink 0.5s steps(2, start) infinite',
  },

  // ========== AC UNIT ULTRA ==========
  ac: {
    name: 'ac',
    label: 'AC Unit',
    category: 'climate',
    keyframes: `
      @keyframes ac-flow {
        0% { transform: translateY(0) scale(1); }
        30% { transform: translateY(-4px) scale(1.02); }
        60% { transform: translateY(-2px) scale(1.01); }
        100% { transform: translateY(0) scale(1); }
      }
      @keyframes ac-cold {
        0% { 
          box-shadow: 0 15px 20px -8px rgba(100, 200, 255, 0.7),
                      0 25px 35px -12px rgba(100, 200, 255, 0.4);
        }
        50% { 
          box-shadow: 0 20px 30px -6px rgba(100, 200, 255, 1),
                      0 35px 50px -10px rgba(100, 200, 255, 0.6);
        }
        100% { 
          box-shadow: 0 15px 20px -8px rgba(100, 200, 255, 0.7),
                      0 25px 35px -12px rgba(100, 200, 255, 0.4);
        }
      }
      @keyframes ac-particles {
        0% {
          box-shadow: -8px 12px 0 -4px rgba(200, 230, 255, 0),
                      0 15px 0 -4px rgba(200, 230, 255, 0),
                      8px 12px 0 -4px rgba(200, 230, 255, 0);
        }
        30% {
          box-shadow: -12px 22px 0 -3px rgba(200, 230, 255, 0.8),
                      0 28px 0 -3px rgba(200, 230, 255, 1),
                      12px 22px 0 -3px rgba(200, 230, 255, 0.8);
        }
        100% {
          box-shadow: -18px 40px 0 -4px rgba(200, 230, 255, 0),
                      0 48px 0 -4px rgba(200, 230, 255, 0),
                      18px 40px 0 -4px rgba(200, 230, 255, 0);
        }
      }
    `,
    shapeAnimation: 'ac-flow 2s ease-in-out infinite',
    beforeAnimation: 'ac-cold 2s ease-in-out infinite',
    afterAnimation: 'ac-particles 1.5s ease-out infinite',
  },

  // ========== LIGHTNING BOLT ==========
  lightning: {
    name: 'lightning',
    label: 'Lightning Bolt',
    category: 'general',
    keyframes: `
      @keyframes lightning-strike {
        0%, 100% { 
          transform: scale(1); 
          filter: brightness(1); 
          opacity: 1;
        }
        2% { 
          transform: scale(1.3); 
          filter: brightness(2.5); 
          opacity: 1;
        }
        4% { 
          transform: scale(1); 
          filter: brightness(0.8); 
          opacity: 0.7;
        }
        6% { 
          transform: scale(1.2); 
          filter: brightness(2); 
          opacity: 1;
        }
        10% { 
          transform: scale(1); 
          filter: brightness(1); 
          opacity: 1;
        }
      }
      @keyframes lightning-glow {
        0%, 100% { 
          box-shadow: 0 0 10px 5px rgba(var(--rgb-icon-color), 0.4),
                      0 0 20px 10px rgba(var(--rgb-icon-color), 0.2);
        }
        3% { 
          box-shadow: 0 0 40px 20px rgba(var(--rgb-icon-color), 1),
                      0 0 80px 40px rgba(var(--rgb-icon-color), 0.6),
                      0 0 120px 60px rgba(255, 255, 200, 0.3);
        }
        6% { 
          box-shadow: 0 0 30px 15px rgba(var(--rgb-icon-color), 0.8),
                      0 0 60px 30px rgba(var(--rgb-icon-color), 0.4);
        }
      }
    `,
    shapeAnimation: 'lightning-strike 3s ease-in-out infinite',
    beforeAnimation: 'lightning-glow 3s ease-in-out infinite',
  },

  // ========== HEARTBEAT ==========
  heartbeat: {
    name: 'heartbeat',
    label: 'Heartbeat',
    category: 'general',
    keyframes: `
      @keyframes heartbeat {
        0% { transform: scale(1); }
        14% { transform: scale(1.2); }
        28% { transform: scale(1); }
        42% { transform: scale(1.15); }
        70% { transform: scale(1); }
      }
      @keyframes heartbeat-glow {
        0% { 
          box-shadow: 0 0 10px 5px rgba(var(--rgb-icon-color), 0.5),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.3);
        }
        14% { 
          box-shadow: 0 0 25px 12px rgba(var(--rgb-icon-color), 1),
                      0 0 50px 25px rgba(var(--rgb-icon-color), 0.5);
        }
        28% { 
          box-shadow: 0 0 10px 5px rgba(var(--rgb-icon-color), 0.5),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.3);
        }
        42% { 
          box-shadow: 0 0 20px 10px rgba(var(--rgb-icon-color), 0.9),
                      0 0 40px 20px rgba(var(--rgb-icon-color), 0.4);
        }
        70% { 
          box-shadow: 0 0 10px 5px rgba(var(--rgb-icon-color), 0.5),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.3);
        }
      }
    `,
    shapeAnimation: 'heartbeat 1.2s ease-in-out infinite',
    beforeAnimation: 'heartbeat-glow 1.2s ease-in-out infinite',
  },

  // ========== DISCO ==========
  disco: {
    name: 'disco',
    label: 'Disco Party',
    category: 'lights',
    keyframes: `
      @keyframes disco-spin {
        0% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(90deg) scale(1.1); }
        50% { transform: rotate(180deg) scale(1); }
        75% { transform: rotate(270deg) scale(1.1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes disco-colors {
        0% { 
          filter: hue-rotate(0deg) brightness(1.2);
          box-shadow: 0 0 30px 15px rgba(255, 0, 0, 0.8),
                      0 0 60px 30px rgba(255, 0, 0, 0.4);
        }
        25% { 
          filter: hue-rotate(90deg) brightness(1.4);
          box-shadow: 0 0 35px 18px rgba(0, 255, 0, 0.9),
                      0 0 70px 35px rgba(0, 255, 0, 0.5);
        }
        50% { 
          filter: hue-rotate(180deg) brightness(1.3);
          box-shadow: 0 0 30px 15px rgba(0, 0, 255, 0.8),
                      0 0 60px 30px rgba(0, 0, 255, 0.4);
        }
        75% { 
          filter: hue-rotate(270deg) brightness(1.4);
          box-shadow: 0 0 35px 18px rgba(255, 0, 255, 0.9),
                      0 0 70px 35px rgba(255, 0, 255, 0.5);
        }
        100% { 
          filter: hue-rotate(360deg) brightness(1.2);
          box-shadow: 0 0 30px 15px rgba(255, 0, 0, 0.8),
                      0 0 60px 30px rgba(255, 0, 0, 0.4);
        }
      }
      @keyframes disco-rays {
        0%, 100% {
          box-shadow: 40px 0 30px -20px rgba(255, 0, 0, 0.5),
                      -40px 0 30px -20px rgba(0, 255, 0, 0.5),
                      0 40px 30px -20px rgba(0, 0, 255, 0.5),
                      0 -40px 30px -20px rgba(255, 255, 0, 0.5);
        }
        50% {
          box-shadow: 50px 20px 40px -15px rgba(0, 255, 255, 0.7),
                      -50px -20px 40px -15px rgba(255, 0, 255, 0.7),
                      20px 50px 40px -15px rgba(255, 128, 0, 0.7),
                      -20px -50px 40px -15px rgba(128, 255, 0, 0.7);
        }
      }
    `,
    shapeAnimation: 'disco-spin 2s linear infinite',
    beforeAnimation: 'disco-colors 2s linear infinite',
    afterAnimation: 'disco-rays 1s linear infinite',
  },

  // ========== ENERGY FLOW ==========
  energy: {
    name: 'energy',
    label: 'Energy Flow',
    category: 'sensors',
    keyframes: `
      @keyframes energy-flow {
        0% { 
          transform: scale(1); 
          filter: brightness(1);
        }
        50% { 
          transform: scale(1.08); 
          filter: brightness(1.3);
        }
        100% { 
          transform: scale(1); 
          filter: brightness(1);
        }
      }
      @keyframes energy-rings {
        0% {
          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.8),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.6),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.4),
                      0 0 0 0 rgba(var(--rgb-icon-color), 0.2);
        }
        100% {
          box-shadow: 0 0 0 8px rgba(var(--rgb-icon-color), 0),
                      0 0 0 16px rgba(var(--rgb-icon-color), 0),
                      0 0 0 24px rgba(var(--rgb-icon-color), 0),
                      0 0 0 32px rgba(var(--rgb-icon-color), 0);
        }
      }
      @keyframes energy-core {
        0%, 100% {
          box-shadow: 0 0 15px 8px rgba(var(--rgb-icon-color), 0.8),
                      0 0 30px 15px rgba(var(--rgb-icon-color), 0.4),
                      inset 0 0 10px 5px rgba(var(--rgb-icon-color), 0.3);
        }
        50% {
          box-shadow: 0 0 25px 12px rgba(var(--rgb-icon-color), 1),
                      0 0 50px 25px rgba(var(--rgb-icon-color), 0.6),
                      inset 0 0 15px 8px rgba(var(--rgb-icon-color), 0.5);
        }
      }
    `,
    shapeAnimation: 'energy-flow 1.5s ease-in-out infinite',
    beforeAnimation: 'energy-core 1.5s ease-in-out infinite',
    afterAnimation: 'energy-rings 1s linear infinite',
  },
};

export const ANIMATION_LIST = Object.keys(ANIMATIONS);

export function getAnimationsByCategory(category: AnimationCategory): AnimationDefinition[] {
  return Object.values(ANIMATIONS).filter(anim => anim.category === category);
}

export function getAllAnimations(): AnimationDefinition[] {
  return Object.values(ANIMATIONS);
}
