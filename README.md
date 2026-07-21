# 🐛 Bugistan

> **Error aya, cockroach bhaga! Kill bugs with a slipper!** 🩴

Bugistan turns the errors and warnings in your code into living, crawling bugs — and hands you a slipper to squash them with. But there's a catch: as long as the error still exists in your code, the bug keeps coming back. The only way to truly clear the screen is to **fix your code**.

## How it works

1. Open the **Bugistan** panel from the activity bar (🐛 icon).
2. Every **error** 🔴 in your active file spawns a big bug. Every **warning** 🟡 spawns a smaller one (marked with a dashed yellow ring).
3. Move your slipper cursor 🩴 around — bugs will panic and flee from it.
4. **Click a bug to squash it.** Splat! +10 points for errors, +5 for warnings, with a combo multiplier for quick kills.
5. Squashed bugs **respawn while the error still exists**. Fix the code and they're gone for good.

Your total score lives in the status bar (`🐛 score 🩴`) and is saved between sessions.

## Features

- 🎮 **Live diagnostics game** — bug count always mirrors the real errors/warnings in your active file
- 🌍 **6 themed environments**, each with its own hand-drawn creatures (no image assets, all canvas):
  - 🪵 **Mud Ground** — dragonflies, water scorpions, mole crickets…
  - 🌿 **Grass Field** — ladybugs, grasshoppers, caterpillars…
  - 🌙 **Night Sky** — fireflies, moths, glowworms…
  - 🏜️ **Desert Sand** — scarabs, silver ants, antlions…
  - 🌊 **Ocean Deep** — sharks, jellyfish, turtles…
  - 🚀 **Space** — aliens, UFOs, space worms…
- ⚡ **Combo counter** for kill streaks
- 🔊 **Squish sound effects** — synthesized live with Web Audio (no audio files), pitch rises with your combo; mute anytime with the 🔊 button
- 🏆 **Persistent score** across VS Code restarts
- 💥 Squish particles, flee trails, panic rings — the works

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
| `bugistan.bugSpeed` | `medium` | Bug speed: `slow`, `medium`, `fast`, or `pakistani` (very, very fast) |
| `bugistan.maxBugs` | `5` | Maximum number of bugs on screen at once |
| `bugistan.soundEnabled` | `true` | Play squish sound effects when killing bugs |

## Requirements

None. Bugistan uses VS Code's built-in diagnostics, so it works with whatever linters and language servers you already have.

## Known Issues

- Bugs are counted for the **active file only** — switching files respawns the swarm.

## Release Notes

### 1.0.0

Initial release: 6 themes, ~38 creatures, combo system, persistent score.

**Enjoy squashing!** 🩴🐛
