# UI & Screens

## Design Language

The visual style is a **medieval blackboard** — every screen looks like it was chalked or scratched onto a dark slate surface. Backgrounds are dark grey-green (chalkboard texture). All text uses a **handwritten chalk-style font** — legible but rough-edged, like someone wrote it in a hurry. UI panels resemble pinned parchment notes, chalk-outlined boxes, or nailed-up wooden boards. Icons are simple line drawings, not polished sprites.

Colour palette is deliberately limited: chalk white and cream for primary text, dull gold for money figures, muted red for danger/injury, muted green for positive states. Nothing glows or pulses unless a situation is urgent.

### Top Menu Bar

Always visible at the top of the screen. Contains the main navigation:

```
[ Roster ]  [ Tavern ]  [ Contracts ]  [ Inventory ]  [ Ledger ]  [ Dungeon Creator ]
```

Active screen is underlined like a chalk mark. Alert badges (small red numerals) appear on tabs with pending actions.

### Continue to Next Day Button

A large, prominent button anchored to the top-right of every screen. Advances the game clock by one in-game day — triggers payroll checks, morale ticks, contract expirations, hero recovery, and guard-duty income. Styled like a torn piece of parchment with the label **"Next Day →"** in bold handwritten text. Pulses faintly when payroll is due or another time-sensitive event is pending.

---

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
- Reputation strip: Street Rep / Public Rep / Hero Rep shown as three small bars (0–100)

## Roster Screen

List of all hired heroes. Each row shows:
- Portrait, Name, Class, Level
- HP bar, Morale bar
- Current status (Ready / Training / On Mission / On Guard Duty / Recovering / Idle)
- Weekly wage

Clicking a hero opens their **Hero Detail Panel**:
- Full stats: STR / DEX / CON / SMA / WIT (each shows pool size and any active modifiers)
- Equipment slots (drag-and-drop equip/unequip)
- Ethics profile (visible after hiring) — Willingness to Do Harm and Greed axes
- Class abilities (unlocked at each level-up)
- Relationships and notes
- XP bar and level-up button (if XP threshold reached; allocate 2 stat points)
- "Fire" button (with morale penalty to remaining heroes if done publicly)
- "Assign Training" button
- "Assign Guard Duty" button (available when hero is Idle or Ready)

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
- Drag heroes into party slots (no hard cap — more heroes means higher wages but greater survivability)
- Party strength estimate vs. dungeon difficulty
- Projected earnings breakdown (fee + estimated loot − wages)
- "Deploy" button → starts the dungeon run

## Dungeon Run View

The main event screen. Shows:
- Dungeon map (tiles revealed as explored, fog of war)
- Hero tokens moving on the map
- Live combat events (D20 pool rolls with hits/failures/crits shown, damage numbers, status icons)
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

Running transaction log. Filters: All / Income / Expenses / Payroll / Guard Duty. Summary cards at top:
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
- **Theme picker** — sets global tileset and enemy pool (10 themes: Crypt, Bandit Den, Beast Lair, Ruins, Sewer, Dragon Hoard, Forest, Prison, Fortress, Abandoned Village)
- **Validate** — checks for entry/exit, connectivity, minimum room count

### Output
The editor saves dungeons as JSON. They can be:
- Used directly as a custom contract
- Shared (export/import via file)
- Set as the template for a client's recurring contract

## Tutorial System

The tutorial runs inside the real game — no sandbox mode, no separate save. Decisions made during the tutorial persist. The player can dismiss it at any time via a small **"Skip Tutorial"** link in the corner.

### Presentation Style

Tutorial hints appear as **chalk scrawl overlaid on the blackboard** — hand-drawn arrows pointing at UI elements, short notes in a slightly different (rougher) font, as if a gruff veteran guild master is leaning over your shoulder and scratching comments onto the board. A dismiss cross in the corner of each note lets the player close the current hint early.

Hints do not block interaction. The player can click anything while a hint is visible — the tutorial simply checks whether the expected action was taken and advances when it was.

### Step-by-Step Flow

#### Day 0 — Founding (one-time intro)

Triggered on first launch only, before the first day begins.

1. **Company name prompt** — plain text input, styled as a form pinned to the board. Pre-filled with a random fantasy name the player can overwrite.
2. **Opening note** — a short chalk-scrawled message from the guild registrar: *"New venture. Tavern Backroom, 20 Gold. Don't spend it all on ale."* Sets the tone without a wall of text.
3. Tutorial arrow points to the **Tavern Board** tab. Step advances when the player clicks it.

#### Day 1 — First Hire

4. On the Tavern Board, a chalk circle highlights one of the available recruits (the cheapest Fighter). Note reads: *"Someone has to carry the torch."* Step advances when any hero is hired.
5. After the hire, arrow points to the **Contracts** tab. Note: *"No income without a job."*

#### Day 1 — First Contract

6. On the Contract Board, the lowest-difficulty contract is circled in chalk. Note shows the fee and a skull rating reminder. Step advances when the player clicks **Accept**.
7. In the Party Assignment modal, arrow points to the hero list. Note: *"Drag them into the party. All of them, ideally."* Step advances when **Deploy** is clicked.

#### Day 2 — First Dungeon Run

8. Dungeon Run View opens. A brief note explains the **event log** on the right and the **Retreat** button. Note fades automatically after 10 seconds or on dismiss.
9. After the run ends (success or retreat), the **Run Report** is shown. No tutorial step needed — the report is self-explanatory. A single note points to the **Ledger** tab: *"See where the money went."*

#### Day 3 — Payroll Warning

10. When the player clicks **Next Day →** and payroll is within 2 days, a chalk note appears next to the button: *"Payday coming. Heroes remember."* Points at the Ledger's weekly burn rate figure.
11. After the first successful payroll, the tutorial ends. A final note: *"You know enough to ruin yourself. Good luck."* Tutorial state is marked complete and no further hints appear.

### Hint Suppression

Once a player has performed an action once, its tutorial hint never reappears — even after loading a save. Completed hint IDs are stored in the save file. If the player skips the tutorial entirely, all hints are marked complete immediately.

---

## Persistent UI Elements

Always visible regardless of screen:
- Gold balance
- Current date
- Active run count (with danger indicator if a run is struggling)
- Navigation tabs
