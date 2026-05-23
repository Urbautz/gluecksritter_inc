# Dungeons — Map & Loot

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
| Trap | Hidden until spotted (DEX/SMA pool check) |
| Treasure | Contains loot, may be guarded |
| Enemy Spawn | Contains an encounter |
| Boss Room | Contains the dungeon boss |
| Entry / Exit | Party start and escape points |
| Hazard | Environmental danger (pit, acid pool, collapsing ceiling) |
| Secret | Hidden passage, revealed by high SMA |

### Rooms

Tiles are grouped into **rooms** of varying shapes and sizes. All themes share these abstract roles — concrete names vary by theme:

| Role | Function |
|---|---|
| Passage | Narrow connector, single-file movement, ambush risk |
| Chamber | Open space, tactical options |
| Vault | High loot, locked or guarded |
| Barracks | Dense enemy spawns |
| Boss Lair | Scripted encounter, always on the critical path |

### Map Sizes

| Size | Grid | Rooms | Typical Danger Level |
|---|---|---|---|
| Small | 100×100 | 4–8 | 1–25 |
| Medium | 200×200 | 10–18 | 10–50 |
| Large | 300×300 | 18–30 | 30–75 |
| Mega | 500×500 | 30+ | 50+ |

## Dungeon Generator

The **Dungeon Creator** is an in-game tool (used to auto-generate contract locations)

### Generation Algorithms

Each theme uses an algorithm suited to its spatial feel:

| Algorithm | How it works |
|---|---|
| BSP | Recursively splits space into rectangles; connects rooms with corridors. Structured, readable. |
| Drunk-walk + CA | Walker carves a winding path; cellular automata smooths it into organic caves. |
| Grid Tunnel | Regular grid of tunnels, rooms at intersections. Rigid and functional. |
| Hub-and-Spoke | Large central room, tunnels radiating outward to satellite chambers. |
| Scatter | Building footprints placed on canvas, connected by dirt paths. |

### Generation Steps

1. Place Entry tile
2. Run theme algorithm to carve rooms
3. Connect rooms (minimum spanning tree + extra loops for interest)
4. Place Exit at maximum distance from Entry
5. Populate rooms with encounters scaled to dungeon Danger Level
6. Place traps, treasures, hazards according to dungeon theme
7. Roll for Uber-Boss (5% chance): if triggered, replace Boss with Uber-Boss and mark dungeon as flagged
8. Place Boss Lair on the critical path, near Exit

### Dungeon Themes

#### Layout & Room Types

| Theme | Algorithm | Room Types |
|---|---|---|
| Crypt | BSP | Corridor, Burial Chamber, Ossuary, Boss Tomb |
| Bandit Den | BSP | Corridor, Guard Room, Common Room, Stash Room, Boss Chamber |
| Beast Lair | Drunk-walk + CA | Den Passage, Open Cave, Nesting Ground, Alpha Den |
| Ruins | BSP | Collapsed Hall, Open Hall, Sealed Chamber, Golem Workshop, Boss Sanctum |
| Sewer | Grid Tunnel | Tunnel, Junction, Cistern, Refuse Heap, Boss Chamber |
| Dragon Hoard | Hub-and-Spoke | Narrow Pass, Treasure Hall, Roost, Boss Lair |
| Forest | Drunk-walk + CA | Game Trail, Clearing, Druid Grove, Predator Den, Ancient Tree |
| Prison | Grid Tunnel | Cell Block, Guard Post, Armoury, Torture Chamber, Warden's Office |
| Fortress | BSP | Gatehouse, Barracks Hall, Great Hall, Armoury, Throne Room |
| Abandoned Village | Scatter | Street, Ruined House, Cellar, Town Square, Village Hall |

#### Content

| Theme | Enemies | Traps | Loot Focus |
|---|---|---|---|
| Crypt | Undead, cultists | Poison darts, cursed tiles | Jewellery, relics |
| Bandit Den | Humanoids, rogues | Alarm tripwires, pit traps | Coin, stolen goods |
| Beast Lair | Animals, monsters | None (raw danger) | Pelts, monster parts |
| Ruins | Constructs, spirits | Collapsing floors | Ancient artefacts |
| Sewer | Rats, thieves guild | Acid pools, flooding | Keys, documents |
| Dragon Hoard | Drakes, dragonkin | Fire vents, magical wards | Gold, legendary weapons |
| Forest | Druids, fey, beasts | Snares, pitfalls, poisoned thorns | Herbs, fey tokens, rare pelts |
| Prison | Guards, prisoners, corrupt warden | Barred doors, alarm bells | Weapons, confiscated gear, keys |
| Fortress | Soldiers, knights, mages | Arrow slits, portcullises, oil traps | Military gear, war chest, maps |
| Abandoned Village | Bandits, cultists, ghosts | Hidden cellars, cursed objects | Household valuables, hidden coin |

## Fog of War

The dungeon map starts fully hidden (black). Rooms are revealed as heroes enter them. The player has a **live view** of the map as it is explored — this is the main visual of the game during a run.

## Party Composition

The player can assign as many heroes as they want to the dungeon.

The dungeon run outcome is heavily influenced by party composition:

- A Rogue in the party disarms traps before they trigger
- A Cleric heals between rooms (reduces injury risk)
- A Mage can open locked doors magically (skipping DEX pool checks, uses SMA pool instead with a bonus die)
- A Bard keeps morale up, reducing flee-chance
- A Ranger spots ambushes before the party walks in

## Loot

### Loot Rolls

Each treasure tile and enemy group has a **loot table** with weighted random rolls:

- Common (60%): coin, basic consumables
- Uncommon (25%): useful gear, mid-value items
- Rare (12%): good equipment, spell scrolls
- Legendary (3%): unique named items, story artefacts

Dungeon Danger Level shifts the table weights upward — each 10 levels above 1 shifts 5% from Common to Uncommon and 2% from Uncommon to Rare. There is no floor — at very high Danger Levels, Common drops out entirely and even Legendary begins yielding to rarer tiers not on the base table (epic or mythic quality). The shift continues indefinitely as Danger Level rises.

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

## Post-Run Report

After a run ends (success, failure, or retreat) the player receives a **Run Report**:

- Rooms cleared, enemies defeated, traps triggered
- Loot recovered (itemised)
- Hero injuries or deaths
- XP earned per hero
- Estimated profit/loss vs. contract fee
