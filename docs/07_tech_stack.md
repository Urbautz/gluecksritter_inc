# Technical Stack

## Principles

- **No build step required** for development — runs directly from the file system or a simple static server
- **No framework lock-in** for the core game logic — pure TypeScript compiled to a single bundle
- **localStorage** for save state; no backend required
- Modular: dungeon generator, combat resolver, and economy engine are independent modules with clean interfaces

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Language | TypeScript | Type safety for complex game state |
| Bundler | Vite | Fast HMR, zero-config TS support |
| Rendering | Canvas 2D (native) | Dungeon map rendering without a heavy lib |
| UI | Vanilla HTML + CSS | Roster, boards, ledger — no framework needed |
| State | Plain objects + event bus | No Redux/MobX overhead; game loop owns state |
| Persistence | localStorage (JSON) | Simple, no backend |
| Testing | Vitest | Fast, same config as Vite |

## Module Structure

```
src/
  core/
    dice.ts          — D10 pool roller, RollResult type, seeded PRNG wrapper
    hero.ts          — Hero class, stat calculations, leveling
    dungeon.ts       — Dungeon data model (tiles, rooms, entities)
    generator.ts     — Procedural dungeon generation
    combat.ts        — Automated combat resolution (pool vs pool)
    economy.ts       — Gold, payroll, contracts, loot sales
    time.ts          — Game clock, day advancement
    events.ts        — Random narrative events
  ui/
    canvas.ts        — Dungeon map renderer (Canvas 2D)
    roster.ts        — Roster screen DOM logic
    contractBoard.ts — Contract board DOM logic
    tavernBoard.ts   — Tavern board DOM logic
    inventory.ts     — Drag-and-drop equipment UI
    ledger.ts        — Finance screen
  data/
    classes.ts       — Class definitions, ability trees
    enemies.ts       — Enemy templates and loot tables
    items.ts         — Equipment and item catalogue
    contracts.ts     — Pre-authored contract templates (Tier 1–3)
    events.ts        — Narrative event catalogue
  state/
    gameState.ts     — Central game state object
    save.ts          — Serialize/deserialize to localStorage
  main.ts            — Entry point, bootstraps game
index.html
```

## Save Format

Game state is serialized to JSON and stored in `localStorage` under key `gluecksritter_save`. The save includes:

- Company metadata (name, gold, reputation, tier, date)
- Full hero roster (stats, equipment refs, relationships, XP)
- Active contracts and runs
- Inventory / stash
- HQ tier and unlocked features
- Transaction log (last 100 entries)

Save is written after every significant action (end of day, run completion, hire/fire).

## Dungeon Map Format

Dungeons are stored as JSON:

```json
{
  "id": "dungeon_001",
  "theme": "crypt",
  "width": 20,
  "height": 20,
  "tiles": [ ... ],
  "rooms": [ { "id": "r1", "type": "chamber", "x": 2, "y": 2, "w": 5, "h": 4 } ],
  "entities": [
    { "type": "enemy", "templateId": "skeleton_warrior", "x": 5, "y": 3 },
    { "type": "treasure", "tier": 2, "x": 8, "y": 3 }
  ],
  "entry": { "x": 0, "y": 10 },
  "exit": { "x": 19, "y": 10 }
}
```

Tiles array is a flat `width × height` array of tile type IDs.

## Rendering Approach

The dungeon map is rendered on a `<canvas>` element:
- Each tile is drawn as a coloured rectangle + optional icon sprite
- Hero and enemy tokens are simple coloured circles with a letter initial
- Fog of war = tiles not yet visited are drawn as black
- Animations are CSS transitions overlaid on the canvas (HP bars, floating numbers)

The rest of the UI (roster, boards, inventory, ledger) is standard HTML/CSS — no canvas needed there.

## Dice Pool System

All checks use a **D10 pool** resolved by `src/core/dice.ts`:

```
rollPool(poolSize: number, rng): RollResult
```

```ts
type RollResult = {
  dice: number[];        // raw face values (0–9)
  hits: number;          // count of 7/8/9
  failures: number;      // count of 1/2
  net: number;           // hits - failures
  nines: number;         // count of 9s
  ones: number;          // count of 1s
  zeros: number;          // count of 0s
  isCritSuccess: boolean; // zeros > failures
  isCritFailure: boolean; // zeros > hits
}
```

Pool size for a check = hero stat + equipment dice bonus ± morale modifier.  
Difficulty is expressed as a **target net** (e.g. a Tier 2 trap requires net ≥ 2 on DEX to disarm cleanly).

## Random Number Generation

All dice rolls use a seeded PRNG (xoshiro128**) so that:
- A run can be replayed deterministically from its seed (for debugging)
- Seeds can optionally be displayed to the player (fun/fairness transparency)

The PRNG instance is passed explicitly into every `rollPool` call — no global state.

## Development Milestones

| Milestone | Deliverable |
|---|---|
| M1 | Hero data model + roster UI |
| M2 | Economy engine + contract board |
| M3 | Dungeon generator + map renderer |
| M4 | Combat resolver + live dungeon run view |
| M5 | Full game loop (all systems connected) |
| M6 | Polish, balance, narrative events |
| M7 | Dungeon editor (sandbox mode) |
