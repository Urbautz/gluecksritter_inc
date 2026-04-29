# UI & Screens

## Screen Map

```
┌─────────────────────────────────────────────────────────────┐
│  Main Hub (HQ)                                              │
│  ┌───────────┐  ┌──────────────┐  ┌────────────────────┐   │
│  │  Roster   │  │  Contract    │  │  Dungeon Run View  │   │
│  │  Screen   │  │  Board       │  │  (live map)        │   │
│  └───────────┘  └──────────────┘  └────────────────────┘   │
│  ┌───────────┐  ┌──────────────┐  ┌────────────────────┐   │
│  │  Tavern   │  │  Inventory / │  │  Dungeon Creator   │   │
│  │  Board    │  │  Equipment   │  │  (editor)          │   │
│  └───────────┘  └──────────────┘  └────────────────────┘   │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Finance / Ledger                                     │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Main Hub (HQ)

The default view. Shows:
- Current Gold balance (always visible)
- Current date and time of day
- Active runs in progress (with status indicator)
- Alert badges on tabs with urgent items (payroll due, hero injured, new contract available)
- HQ tier visual — the background art upgrades with each tier

## Roster Screen

List of all hired heroes. Each row shows:
- Portrait, Name, Class, Level
- HP bar, Morale bar
- Current status (Ready / Training / On Mission / Recovering / Idle)
- Weekly wage

Clicking a hero opens their **Hero Detail Panel**:
- Full stats
- Equipment slots (drag-and-drop equip/unequip)
- Ethics profile (visible after hiring)
- Relationships and notes
- XP bar and level-up button (if XP threshold reached)
- "Fire" button (with morale penalty to remaining heroes if done publicly)
- "Assign Training" button

## Tavern Board

Scrollable list of available recruits. Each card shows:
- Name, Class, Level
- Asking weekly wage
- 1–2 visible personality traits (full ethics revealed after "Interview" or hire)
- "Hire" button

Board refreshes every 3 in-game days. A "Scout" upgrade (late-game) lets you request specific class types.

## Contract Board

Scrollable list of available contracts. Each card shows:
- Client name and type (icon)
- Contract name and brief description
- Difficulty tier (skull icons 1–5)
- Base fee in Gold
- Bonus conditions (if applicable)
- Time limit indicator (if applicable)
- "Accept" button → opens Party Assignment screen

### Party Assignment Screen (modal)

Opened when accepting a contract. Shows:
- Dungeon preview (theme, size, difficulty)
- Available heroes (not on mission, not recovering)
- Drag heroes into party slots (max 4)
- Party strength estimate vs. dungeon difficulty
- Projected earnings breakdown (fee + estimated loot − wages)
- "Deploy" button → starts the dungeon run

## Dungeon Run View

The main event screen. Shows:
- Dungeon map (tiles revealed as explored, fog of war)
- Hero tokens moving on the map
- Live combat events (dice rolls, damage numbers, status icons)
- Hero HP and morale bars along the bottom
- Event log (right side): running text log of everything happening
- **Retreat** button (always accessible, triggers group retreat)
- Speed controls: Normal / Fast / Very Fast

### Combat Animations (minimal)
- Tokens shake or flash on hit
- Death = token removed, small marker left
- Trap = screen flash + injury indicator

## Inventory / Equipment Screen

Two-panel view:
- Left: Stash of all unequipped items
- Right: Roster with equipment slots per hero

Drag items from stash to hero slots. Item tooltips show full stats and sell value. "Sell All Junk" button for fast cleanup.

## Finance / Ledger

Running transaction log. Filters: All / Income / Expenses / Payroll. Summary cards at top:
- Gold on hand
- Weekly burn rate (retainer sum)
- Projected balance in 7 days
- Total earned lifetime

## Dungeon Creator (Editor Mode)

Used for sandbox play or custom scenarios.

### Tools
- **Tile brush** — paint tile types onto grid
- **Room selector** — select and move/resize rooms
- **Enemy placer** — drag enemy tokens onto tiles, set patrol routes
- **Loot placer** — assign loot tier to treasure tiles
- **Theme picker** — sets global tileset and enemy pool
- **Validate** — checks for entry/exit, connectivity, minimum room count

### Output
The editor saves dungeons as JSON. They can be:
- Used directly as a custom contract
- Shared (export/import via file)
- Set as the template for a client's recurring contract

## Persistent UI Elements

Always visible regardless of screen:
- Gold balance
- Current date
- Active run count (with danger indicator if a run is struggling)
- Navigation tabs
