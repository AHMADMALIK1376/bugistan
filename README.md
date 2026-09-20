<div align="center">

<img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/icon.png" width="120" alt="Bugistan" />

# Bugistan

**Your errors and warnings become bugs crawling across the screen. Squash them with a slipper — or fix your code.**

*Error aya, cockroach bhaga!* 🩴

[![Install](https://img.shields.io/visual-studio-marketplace/v/ahmadmalik1376.bugistan?label=VS%20Code%20Marketplace&color=007ACC)](https://marketplace.visualstudio.com/items?itemName=ahmadmalik1376.bugistan)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/ahmadmalik1376.bugistan?color=44cc11)](https://marketplace.visualstudio.com/items?itemName=ahmadmalik1376.bugistan)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-cyber.png" width="820" alt="Bugistan running in the Cyber Grid environment, bugs crawling across a neon landscape" />

</div>

---

## The idea

Every error in your file spawns a bug. Every warning spawns a smaller one. They crawl
around, they flee from your cursor, and you can squash them — but **a bug whose error is
still in your code comes straight back**. The only way to clear the screen for good is to
fix the code.

It is a linter you can hit with a slipper.

## How to play

1. Open the **Bugistan** panel from the activity bar (🐛).
2. Errors 🔴 spawn big bugs, warnings 🟡 spawn smaller ones with a dashed yellow ring.
3. Move your slipper 🩴 around — the bugs panic and scatter.
4. Click one to squash it. **+10** for an error, **+5** for a warning, with a combo multiplier for fast kills.
5. Fix the underlying problem and it stops respawning.

Your score sits in the status bar and survives a restart.

## Eight environments, thirty-eight creatures

Every creature is drawn on a `<canvas>` in code — there is not a single image file in this
extension, and no network request either.

| | |
|---|---|
| <img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-grass.png" width="400" alt="Grass Field" /> **Grass Field** — ladybugs, grasshoppers, caterpillars | <img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-space.png" width="400" alt="Space" /> **Space** — aliens, robot bugs, space worms |
| <img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-ocean.png" width="400" alt="Ocean Deep" /> **Ocean Deep** — sharks, jellyfish, turtles | <img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-desert.png" width="400" alt="Desert Sand" /> **Desert Sand** — scarabs, silver ants, antlions |
| <img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-night.png" width="400" alt="Night Sky" /> **Night Sky** — fireflies, moths, glowworms | <img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-mud.png" width="400" alt="Mud Ground" /> **Mud Ground** — dragonflies, water scorpions, mole crickets |
| <img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-candy.png" width="400" alt="Candy Land" /> **Candy Land** — gummy bears, lollipops, donuts | <img src="https://raw.githubusercontent.com/AHMADMALIK1376/bugistan/main/media/screenshots/bug-cyber.png" width="400" alt="Cyber Grid" /> **Cyber Grid** — glitch bots, nano drones, virus bytes |

## What is in it

- 🎮 **Live diagnostics** — the swarm always matches the real errors and warnings in your active file
- ⚡ **Combo counter** for kill streaks
- 🔊 **Squish sounds synthesised with Web Audio** — no audio files, and the pitch climbs with your combo
- 🏆 **Persistent score** across restarts
- 💥 Squish particles, flee trails and panic rings
- 🐌 Four speeds, including `pakistani` — which is exactly as fast as it sounds

## Commands

| Command | What it does |
|---|---|
| `Bugistan: Start Bug Hunt 🐛` | Start spawning bugs from diagnostics |
| `Bugistan: Stop Bug Hunt 🛑` | Stop the hunt and show your final score |
| `Bugistan: Show Score 🏆` | Show your current score |
| `Bugistan: Reset Score 🔄` | Reset your score to zero |

## Settings

| Setting | Default | Description |
|---|---|---|
| `bugistan.enabled` | `true` | Start the bug hunt automatically on startup |
| `bugistan.bugSpeed` | `medium` | `slow`, `medium`, `fast`, or `pakistani` |
| `bugistan.maxBugs` | `5` | Maximum bugs on screen at once |
| `bugistan.soundEnabled` | `true` | Play squish sounds |

## Requirements

None. Bugistan reads VS Code's own diagnostics, so it works with whatever linters and
language servers you already have installed.

## Known issues

- Bugs are counted for the **active file only** — switching files respawns the swarm.

## Built with

TypeScript · VS Code Extension API · HTML5 Canvas · Web Audio API · webpack

No images, no audio files, no network requests — every creature, background and sound is
generated in code at run time.

## Contributing

Issues and pull requests are welcome at
[github.com/AHMADMALIK1376/bugistan](https://github.com/AHMADMALIK1376/bugistan).
New creatures are easy to add: drop a file into `src/bugs/<environment>/`.

## Author

**Muhammad Ahmad Malik** — Full-Stack AI Engineer
[Portfolio](https://portfolio-ahmadmalik-v698.vercel.app) ·
[GitHub](https://github.com/AHMADMALIK1376) ·
[LinkedIn](https://www.linkedin.com/in/ahmadmalik1376/)

## License

[MIT](LICENSE)

---

<div align="center"><b>Enjoy squashing.</b> 🩴🐛</div>
