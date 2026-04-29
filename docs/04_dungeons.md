# Dungeons — Map, Encounters & Loot

## Overview

A dungeon is a **tile-based map** generated before a run. Once a party enters, the run plays out with limited player input — you watch and can issue a retreat order, but heroes act on their own based on their stats, class abilities, and party composition.

This creates the tension: you prepared everything beforehand. Now hold your breath.

## Map Structure

### Tiles

Maps are composed of square tiles on a grid. Each tile has a **type**:

| Tile | Description |
|---|---|
| Floor | Passable, no effect |
| Wall | Impassable |
| Door | Passable after check (lockpick / force / key) |
| Trap | Hidden until spotted (DEX/INT check) |
| Treasure | Contains loot, may be guarded |
| Enemy Spawn | Contains an encounter |
| Boss Room | Contains the dungeon boss |
| Entry / Exit | Party start and escape points |
| Hazard | Environmental danger (pit, acid pool, collapsing ceiling) |
| Secret | Hidden passage, revealed by high WIS/INT |

### Rooms

Tiles are grouped into **rooms** of varying shapes and sizes. Room types:

- **Corridor** — narrow, single-file, ambush risk
- **Chamber** — open space, tactical options
- **Vault** — high loot, high security
- **Barracks** — dense enemy spawns
- **Boss Lair** — scripted encounter

### Map Sizes

| Size | Grid | Rooms | Typical Difficulty |
|---|---|---|---|
| Small | 100×100 | 4–8 | Tier 1–2 |
| Medium | 200×200 | 10–18 | Tier 2–3 |
| Large | 300×300 | 18–30 | Tier 3–4 |
| Mega | 50×500 | 30+ | Tier 4–5 |

## Dungeon Generator

The **Dungeon Creator** is an in-game tool (used to auto-generate contract locations)

### Generation Algorithm

1. Place Entry tile
2. Carve rooms using BSP (Binary Space Partitioning) or drunk-walk
3. Connect rooms with corridors (minimum spanning tree + loops for interest)
4. Place Exit at maximum distance from Entry
5. Populate rooms with encounters scaled to dungeon difficulty tier
6. Place traps, treasures, hazards according to dungeon theme
7. Place Boss Room on the critical path, near Exit

### Dungeon Themes

Theme affects tile art, enemy types, trap types, and loot tables:

| Theme | Enemies | Traps | Loot Focus |
|---|---|---|---|
| Crypt | Undead, cultists | Poison darts, cursed tiles | Jewellery, relics |
| Bandit Den | Humanoids, rogues | Alarm tripwires, pit traps | Coin, stolen goods |
| Beast Lair | Animals, monsters | None (raw danger) | Pelts, monster parts |
| Ruins | Constructs, spirits | Collapsing floors | Ancient artefacts |
| Sewer | Rats, thieves guild | Acid pools, flooding | Keys, documents |
| Dragon Hoard | Drakes, dragonkin | Fire vents, magical wards | Gold, legendary weapons |

## Encounters

### Enemy Stats

Enemies have simplified stats: HP, Attack, Defense, Initiative, Special Abilities.

Enemy difficulty is rated **CR (Challenge Rating)** 1–10, matching dungeon tier expectations.

### Combat Resolution

Combat is **automated and dice-based** (visible to the player as animated events on the map):

1. Initiative order determined (DEX modifier + d6 roll)
2. Each combatant attacks in order:
   - Roll d20 + relevant modifier vs. target's Defense
   - On hit: roll damage die + modifier
3. Special abilities trigger on specific conditions (flanking, low HP, etc.)
4. Round continues until one side flees or is eliminated
5. Heroes with low morale or HP may attempt to flee instead of fighting

The player sees this play out on the dungeon map in real-time (or accelerated). They cannot intervene except to **sound the retreat** — which triggers all living heroes to attempt to exit, possibly fighting their way out.

### Retreat

When the player orders a retreat:
- Heroes move toward Exit, fighting only if cornered
- Each hero rolls a DEX check to disengage from current combat
- Loot carried at retreat time is kept; loot not yet picked up is lost

## Loot

### Loot Rolls

Each treasure tile and enemy group has a **loot table** with weighted random rolls:

- Common (60%): coin, basic consumables
- Uncommon (25%): useful gear, mid-value items
- Rare (12%): good equipment, spell scrolls
- Legendary (3%): unique named items, story artefacts

Dungeon tier shifts the table weights upward.

### Loot Types

| Type | Examples | Notes |
|---|---|---|
| Coin | Gold pieces | Direct income |
| Equipment | Weapons, armour | Use or sell |
| Consumables | Potions, scrolls | Single-use in dungeon |
| Materials | Monster parts, ore | Sell or use in crafting |
| Artefacts | Ancient relics | High value, special buyers |
| Documents | Maps, contracts, blackmail | Quest items, unlock new contracts |
| Treasure Cards | Deeds, favours, secrets | Wild-card high value items |

## Fog of War

The dungeon map starts fully hidden (black). Rooms are revealed as heroes enter them. The player has a **live view** of the map as it is explored — this is the main visual of the game during a run.

## Party Composition in Dungeons

The player can assign as many heros as he wants to the dungeon.

The dungeon run outcome is heavily influenced by party composition:

- A Rogue in the party disarms traps before they trigger
- A Cleric heals between rooms (reduces injury risk)
- A Mage can open locked doors magically (skipping DEX checks)
- A Bard keeps morale up, reducing flee-chance
- A Ranger spots ambushes before the party walks in


## Post-Run Report

After a run ends (success, failure, or retreat) the player receives a **Run Report**:

- Rooms cleared, enemies defeated, traps triggered
- Loot recovered (itemised)
- Hero injuries or deaths
- XP earned per hero
- Estimated profit/loss vs. contract fee
