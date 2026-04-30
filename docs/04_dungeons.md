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

| Size | Grid | Rooms | Typical Difficulty |
|---|---|---|---|
| Small | 100×100 | 4–8 | Tier 1–2 |
| Medium | 200×200 | 10–18 | Tier 2–3 |
| Large | 300×300 | 18–30 | Tier 3–4 |
| Mega | 50×500 | 30+ | Tier 4–5 |

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
5. Populate rooms with encounters scaled to dungeon difficulty tier
6. Place traps, treasures, hazards according to dungeon theme
7. Place Boss Lair on the critical path, near Exit

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

## Encounters

### Enemy Stats

Enemies have simplified stats mirroring hero stats: HP, STR, DEX, SMA, WIT, Initiative pool, Special Abilities and an Armor rating.

Enemy difficulty is rated **CR (Challenge Rating)** 1–10. CR maps directly to approximate pool sizes:
- CR 1–2: pools of 2–3 dice (fodder)
- CR 3–5: pools of 4–6 dice (standard threat)
- CR 6–8: pools of 7–9 dice (dangerous)
- CR 9–10: pools of 10+ dice (boss-tier)

### Combat Resolution

Combat is **automated and dice-pool-based** (visible to the player as animated events on the map).

#### Initiative
Each combatant rolls their **DEX pool** at the start of combat. Net result determines turn order (highest net goes first; ties broken by raw DEX value).

#### Attack
Attacker rolls their relevant pool (**STR** for melee, **DEX** for ranged, **SMA** for spells) + possible bonuses
Defender roles their relevant pool (**WIT** or **SMA*) + possible bonuses
Outcome is determined by comparing Nets (Criticals double the net)

| Attacker net vs Defender net | Result |
|---|---|
| Attacker net > Defender net | Hit — damage = attacker net |
| Equal | Glancing blow — half damage |
| Defender net > Attacker net | Miss |

#### Damage & HP
Damage = **weapon base value + attacker's net hits** (×2 on a critical hit). 
Armor grants **Damage Reduction (DR)** — subtract DR from incoming damage before applying to HP.
Damage is always at least 1.

#### Special Abilities
Trigger on specific conditions: flanking (+1 die to attacker), low HP (below 30% triggers fear SMA check), enemy type bonuses (Undead ignore fear, Constructs immune to poison).

#### Round Flow
1. Roll initiative pools → sort turn order
2. Each combatant takes their turn in order (attack or special ability)
3. Heroes with Morale ≤ 25 must pass a **SMA pool check (net ≥ 1)** each round or attempt to flee
4. Round repeats until one side is eliminated or flees

The player watches this on the dungeon map. They cannot intervene except to **sound the retreat**.

### Retreat

When the player orders a retreat:
- Heroes move toward Exit, fighting only if cornered
- Each hero rolls a **DEX pool check (net ≥ 1)** to disengage from current combat; failure means one more attack is taken before they break free
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
- A Mage can open locked doors magically (skipping DEX pool checks, uses SMA pool instead with a bonus die)
- A Bard keeps morale up, reducing flee-chance
- A Ranger spots ambushes before the party walks in


## Post-Run Report

After a run ends (success, failure, or retreat) the player receives a **Run Report**:

- Rooms cleared, enemies defeated, traps triggered
- Loot recovered (itemised)
- Hero injuries or deaths
- XP earned per hero
- Estimated profit/loss vs. contract fee
