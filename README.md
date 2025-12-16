# 🍄 Animated Mushroom Card

[![HACS Badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/invernomut0/animated-mushroom-card)](https://github.com/invernomut0/animated-mushroom-card/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A beautiful, animated entity card for Home Assistant with Mushroom-style design. Features **50+ animations** and **20+ color presets** with an easy visual editor.

![Animated Mushroom Card Preview](docs/preview.gif)

## ✨ Features

- 🎨 **50+ Animations** - Breathing, pulsing, spinning, bouncing, glowing and specialized animations for fans, locks, doorbells, washing machines, and more
- 🌈 **20+ Color Presets** - Full Material Design color palette + custom hex colors
- 🍄 **Mushroom Style** - Clean, modern design matching the popular Mushroom cards
- ⚙️ **Visual Editor** - Easy configuration with dropdown menus for animations and colors
- 🔗 **State-Aware** - Animations automatically trigger based on entity state
- 📱 **Responsive** - Works great on all devices

## 📦 Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to **Frontend** → **Explore & Download Repositories**
3. Search for **"Animated Mushroom Card"**
4. Click **Download**
5. Restart Home Assistant
6. Clear browser cache

### Manual Installation

1. Download `animated-mushroom-card.js` from the [latest release](https://github.com/invernomut0/animated-mushroom-card/releases)
2. Copy it to `config/www/animated-mushroom-card.js`
3. Add the resource in your Lovelace dashboard:
   - Go to **Settings** → **Dashboards** → **Three dots menu** → **Resources**
   - Add resource: `/local/animated-mushroom-card.js` as JavaScript Module

Or add to `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/animated-mushroom-card.js
      type: module
```

## 🚀 Quick Start

Add a new card and select **"Animated Mushroom Card"** from the list, or use YAML:

```yaml
type: custom:animated-mushroom-card
entity: light.living_room
animation: breathe
icon_color: blue
```

## 🎬 Animation Categories

| Category | Animations |
|----------|------------|
| **🔄 General** | `none`, `breathe`, `pulse`, `shake`, `bounce`, `spin`, `ring-breathe`, `glow` |
| **🌡️ Climate** | `temp-cold`, `temp-warm`, `temp-hot`, `flame`, `ac`, `purifier`, `air-good`, `air-poor` |
| **💡 Lights** | `lamp`, `plug-on` |
| **🔒 Security** | `lock-secure`, `lock-open`, `motion`, `doorbell`, `door-open`, `siren` |
| **🔌 Appliances** | `fan-spin`, `fan-idle`, `washer`, `robot`, `printer`, `irrigation`, `disposal`, `pump` |
| **🎬 Media** | `tv`, `speaker`, `projector`, `controller` |
| **🌐 Network** | `wifi`, `server` |

## ⚙️ Configuration

### Visual Editor

The card includes a full visual editor with dropdown menus:

1. Add a new card to your dashboard
2. Search for "Animated Mushroom Card"
3. Use the visual editor to configure:
   - Select entity
   - Choose animation from categorized dropdown
   - Pick color from palette or enter custom hex
   - Configure tap/hold actions

### YAML Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **Required** | Entity ID to display |
| `name` | string | Entity name | Custom display name |
| `icon` | string | Entity icon | Custom icon (mdi format) |
| `icon_color` | string | `state` | Color preset name or hex code |
| `animation` | string | `breathe` | Animation type (see list above) |
| `animate_on_state` | string | Auto | State that triggers animation (e.g., `on`, `playing`) |
| `show_name` | boolean | `true` | Show entity name |
| `show_state` | boolean | `true` | Show entity state |
| `layout` | string | `horizontal` | Layout: `horizontal` or `vertical` |
| `tap_action` | object | `toggle` | Action on tap |
| `hold_action` | object | `more-info` | Action on hold |
| `fill_container` | boolean | `false` | Fill parent container |

### Color Options

**Presets:** `red`, `pink`, `purple`, `deep-purple`, `indigo`, `blue`, `light-blue`, `cyan`, `teal`, `green`, `light-green`, `lime`, `yellow`, `amber`, `orange`, `deep-orange`, `brown`, `grey`, `blue-grey`, `white`, `disabled`, `state`

**Custom:** Any hex color like `#FF5722`, `#4CAF50`, etc.

**State:** Use `state` to automatically color based on entity state.

## 📚 Examples

### Animated Light

```yaml
type: custom:animated-mushroom-card
entity: light.bedroom
animation: lamp
icon_color: amber
icon: mdi:lightbulb
name: Bedroom Light
```

### Temperature Sensor

```yaml
type: custom:animated-mushroom-card
entity: sensor.outdoor_temperature
animation: temp-warm
icon_color: orange
icon: mdi:thermometer
```

### Security Door Sensor

```yaml
type: custom:animated-mushroom-card
entity: binary_sensor.front_door
animation: door-open
animate_on_state: 'on'
icon_color: red
icon: mdi:door
```

### Ceiling Fan

```yaml
type: custom:animated-mushroom-card
entity: fan.ceiling_fan
animation: fan-spin
icon_color: cyan
icon: mdi:fan
```

### Robot Vacuum

```yaml
type: custom:animated-mushroom-card
entity: vacuum.robot
animation: robot
animate_on_state: cleaning
icon_color: green
```

### Media Player

```yaml
type: custom:animated-mushroom-card
entity: media_player.living_room
animation: speaker
animate_on_state: playing
icon_color: purple
```

### WiFi Status

```yaml
type: custom:animated-mushroom-card
entity: binary_sensor.internet_connection
animation: wifi
icon_color: blue
```

## 🏗️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/invernomut0/animated-mushroom-card.git
cd animated-mushroom-card

# Install dependencies
npm install

# Build
npm run build

# Development with watch mode
npm run watch
```

### Project Structure

```
src/
├── animated-mushroom-card.ts  # Main card component
├── editor.ts                   # Visual configuration editor
├── animations.ts               # Animation definitions
├── colors.ts                   # Color definitions
└── types.ts                    # TypeScript interfaces
```

### Testing

Copy the built `dist/animated-mushroom-card.js` to your Home Assistant `www` folder for testing.

## 🙏 Credits

- Animation styles inspired by [HA-Animated-cards](https://github.com/Jeremias42/HA-Animated-cards) by Jeremias42
- UI design inspired by [Lovelace Mushroom](https://github.com/piitaya/lovelace-mushroom) by piitaya

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 Support

- [Report a bug](https://github.com/invernomut0/animated-mushroom-card/issues/new?template=bug_report.md)
- [Request a feature](https://github.com/invernomut0/animated-mushroom-card/issues/new?template=feature_request.md)
- [Home Assistant Community](https://community.home-assistant.io/)
