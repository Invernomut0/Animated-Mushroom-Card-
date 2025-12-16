# Animated Mushroom Card

A beautiful, animated entity card for Home Assistant with Mushroom-style design.

## Features

- 🎨 **50+ Animations** - Breathing, pulsing, spinning, bouncing, glowing and many more
- 🌈 **20+ Color Presets** - Full Material Design color palette  
- 🍄 **Mushroom Style** - Clean, modern design matching the popular Mushroom cards
- ⚙️ **Visual Editor** - Easy configuration with dropdown menus
- 🔗 **State-Aware** - Animations trigger based on entity state
- 📱 **Responsive** - Works great on all devices

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to "Frontend" → "Explore & Download Repositories"
3. Search for "Animated Mushroom Card"
4. Click "Download"
5. Restart Home Assistant

### Manual Installation

1. Download `animated-mushroom-card.js` from the latest release
2. Copy it to `config/www/animated-mushroom-card.js`
3. Add the resource in your Lovelace configuration:

```yaml
resources:
  - url: /local/animated-mushroom-card.js
    type: module
```

## Usage

Add a card with type `custom:animated-mushroom-card`:

```yaml
type: custom:animated-mushroom-card
entity: light.living_room
animation: breathe
icon_color: blue
```

## Animation Categories

### General
- `none` - No animation
- `breathe` - Gentle breathing effect
- `pulse` - Quick pulse
- `shake` - Side to side shake
- `bounce` - Up and down bounce
- `spin` - Full rotation
- `glow` - Glowing effect

### Climate
- `temp-cold` - Cold temperature indicator
- `temp-warm` - Warm temperature indicator  
- `temp-hot` - Hot temperature indicator
- `flame` - Fire/heating animation
- `ac` - Air conditioning animation
- `purifier` - Air purifier animation
- `air-good` / `air-poor` - Air quality indicators

### Lights
- `lamp` - Lamp glow effect
- `plug-on` - Power plug indicator

### Security
- `lock-secure` - Locked animation
- `lock-open` - Unlocked animation
- `motion` - Motion sensor animation
- `doorbell` - Doorbell ring animation
- `door-open` - Door open animation
- `siren` - Alarm siren animation

### Appliances
- `fan-spin` - Fan running animation
- `fan-idle` - Fan idle animation
- `washer` - Washing machine animation
- `robot` - Robot vacuum animation
- `printer` - Printer animation
- `irrigation` - Irrigation/sprinkler animation
- `disposal` - Garbage disposal animation
- `pump` - Pump animation

### Media
- `tv` - TV/Screen animation
- `speaker` - Speaker playing animation
- `projector` - Projector animation
- `controller` - Game controller animation

### Network
- `wifi` - WiFi signal animation
- `server` - Server activity animation

## Configuration Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `entity` | string | **Required** | Entity ID to display |
| `name` | string | Entity name | Custom name |
| `icon` | string | Entity icon | Custom icon |
| `icon_color` | string | `state` | Color name or hex code |
| `animation` | string | `breathe` | Animation type |
| `animate_on_state` | string | Auto | State that triggers animation |
| `show_name` | boolean | `true` | Show entity name |
| `show_state` | boolean | `true` | Show entity state |
| `layout` | string | `horizontal` | Card layout |
| `tap_action` | object | `toggle` | Action on tap |
| `hold_action` | object | `more-info` | Action on hold |
| `fill_container` | boolean | `false` | Fill parent container |

## Color Options

`red`, `pink`, `purple`, `deep-purple`, `indigo`, `blue`, `light-blue`, `cyan`, `teal`, `green`, `light-green`, `lime`, `yellow`, `amber`, `orange`, `deep-orange`, `brown`, `grey`, `blue-grey`, `white`, `disabled`, `state`

Or use any hex color: `#FF5722`, `#4CAF50`, etc.

## Examples

### Animated Light Card

```yaml
type: custom:animated-mushroom-card
entity: light.bedroom
animation: lamp
icon_color: amber
icon: mdi:lightbulb
```

### Climate Sensor

```yaml
type: custom:animated-mushroom-card
entity: sensor.temperature
animation: temp-warm
icon_color: orange
```

### Security Door Sensor

```yaml
type: custom:animated-mushroom-card
entity: binary_sensor.front_door
animation: door-open
animate_on_state: 'on'
icon_color: red
```

### Fan Control

```yaml
type: custom:animated-mushroom-card
entity: fan.ceiling_fan
animation: fan-spin
icon_color: cyan
```

## Credits

- Animation styles inspired by [HA-Animated-cards](https://github.com/Jeremias42/HA-Animated-cards)
- UI design inspired by [Lovelace Mushroom](https://github.com/piitaya/lovelace-mushroom)

## License

MIT License
