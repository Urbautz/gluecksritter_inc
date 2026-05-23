# Enemies

## Stats

Enemies have simplified stats mirroring hero stats: HP, STR, DEX, SMA, WIT, Initiative pool, Special Abilities, and an Armor rating.

## Enemy Strength

Enemies have no fixed level. Their **pool sizes scale directly with the dungeon's Danger Level (DL)**, making every encounter appropriate to its difficulty without a separate rating system. There is no cap.

### Pool Size by Enemy Type

| Enemy Type | Pool Size | Role |
|---|---|---|
| Fodder | ⌈DL ÷ 2⌉ | Weak pack enemies — dangerous in numbers, trivial alone |
| Standard | DL | The baseline threat in most rooms |
| Elite | ⌊DL × 1.5⌋ | Named variants, mini-lieutenants |
| Boss | DL × 2 | One per dungeon, on the critical path |
| Uber-Boss | ⌈DL × 3.5⌉ | Rare apex predator — see below |

Each enemy rolls **±1** around its calculated pool at spawn time, so no two dungeons of the same Danger Level feel identical.

## Special Abilities

Trigger on specific conditions. Examples:

- **Flanking** — +1 die to attacker when outnumbering defender
- **Low HP** — below 30% HP triggers a fear check (defender SMA pool, net ≥ 1)
- **Resistances & Immunities** — see `06_fights.md` for the full system

## Damage Types & Resistances

Enemies can have **Resistances**, **Vulnerabilities**, or **Immunities** to specific damage types. Which enemy types carry which is TBD. See `06_fights.md` for the damage type list and resistance mechanics.

## Uber-Bosses

An **Uber-Boss** is a rare apex predator — something that has grown far beyond what the dungeon was designed to contain. It replaces the regular Boss and cannot coexist with one.

**Spawn probability: 5%** per dungeon run, independent of Danger Level.

The dungeon generator signals an Uber-Boss **before the player deploys their party** — an ominous marker on the contract card and a warning in the dungeon preview. The player can decline and pick a different contract at no penalty.

### Uber-Boss Properties

- Pool size: ⌈DL × 3.5⌉
- At least **2 special abilities** drawn from the dungeon theme's pool
- **1 damage immunity**, rolled at dungeon generation (unknown to player until first hit)
- Drops a **guaranteed Legendary item** on kill, plus normal boss loot
- Grants **double XP** to all surviving heroes

Uber-Bosses are not designed to be reliably beatable at the current Company Level. They are a stretch target — a high-risk raid for a prepared, over-levelled party willing to gamble.
