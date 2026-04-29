# Heroes — Mechanics

## Recruitment

Heroes are hired from the **Tavern Board** — a rotating pool of available candidates that refreshes every few in-game days. Each candidate has:

- A visible name, class, and level
- A visible asking wage (weekly retainer + quest cut %)
- A partially hidden profile (full stats revealed after hiring or with an "Interview" action that costs a small fee)

Starting heroes are always Level 1. Higher-level heroes can appear but cost significantly more and are rarer. The level that appears also 

## Classes

| Class | Role | Notes |
|---|---|---|
| Fighter | Front-line tank/damage | Reliable, expensive, uninspired |
| Rogue | Scout, trap-disarm, ambush | High ceiling, unreliable morale |
| Mage | Area damage, utility spells | Fragile, very expensive to train |
| Cleric | Healing, undead control | Rare, hold strong moral opinions |
| Ranger | Ranged damage, tracking | Good in wilderness, weaker indoors |
| Bard | Morale buffer, face skills | Affects whole party morale |

More classes can be added as expansions.

## Stats

### Core Stats (D&D-style, 3–18 scale)

| Stat | Affects |
|---|---|
| STR | Melee damage, carrying capacity |
| DEX | Initiative, ranged accuracy, dodge, trap-disarm |
| CON | Max HP, injury recovery speed |
| SMA | Smarts, Spell power, dungeon-reading (avoids traps) |
| CHA | Negotiation, party cohesion |

### Derived Stats

- **Max HP** = CON modifier × level + class base
- **Initiative** = DEX modifier
- **Carry weight** = STR × 10 lbs

### Morale (0–100)

Separate from combat stats. Represents willingness to work.

| Range | State | Effect |
|---|---|---|
| 81–100 | Motivated | +10% combat rolls, +10% XP gain |
| 51–80 | Content | No modifier |
| 26–50 | Disgruntled | doubled critical failure risk |
| 11–25 | Bitter | May quit mid-dungeon, demands raise |
| 0–10 | Breaking | Will quit or betray party |

**Morale is raised by:** timely pay, successful runs, good equipment, rest days, bonuses, Bard party member.  
**Morale is lowered by:** late pay, failed/deadly runs, being sent on jobs below their ethics, injury, long idle periods.

## Ethics Profile

Each hero has a fixed **Ethics** score on two axes:

### Willingness to Do Harm (0–10)
- 0–2: Pacifist — will not attack humanoids, refuses assassination
- 3–5: Pragmatist — fights when necessary, dislikes wet work
- 6–8: Mercenary — accepts most contracts
- 9–10: Ruthless — no ethical objections, bonus morale on violent quests

### Greed (0–10)
- 0–2: Idealist — accepts low pay, but may leave for a "worthy cause"
- 3–5: Fair — expects market rate
- 6–8: Greedy — demands premium wages, bonus morale on high-pay quests
- 9–10: Extortionist — renegotiates after every successful run

> The combination of these two axes creates personality. A Ruthless Idealist is a dangerous fanatic. A Pacifist Extortionist is an annoying negotiator who refuses to fight.

## Leveling Up

Heroes gain **XP** from:
- Completing quests (base XP from dungeon difficulty)
- Training sessions (slower, costs gold)
- Surviving near-death (small bonus)

At each level up the player allocates **2 stat points** and the hero gains a **class ability** from a small tree.

### Wage Creep

With each level, a hero's expected retainer and quest-cut increase. A hero who is consistently underpaid loses morale. A hero who is overpaid is loyal but eats into margin. This is the central business tension.

## Injuries

Heroes can be **Wounded**, **Seriously Wounded**, or **Dead**.

- Wounded: out for 1–3 days, reduced stats until recovered
- Seriously Wounded: out for 1–2 weeks, requires healer or medicine (costs gold)
- Dead: gone. Equipment is recoverable from the dungeon.

Death is permanent. There is no resurrection.

## Relationships between Heros

Heroes remember things:

- Heroes who survived a dungeon together gain a **Bond** (+morale when in same party)
- Heroes who witnessed a teammate die take a **Trauma** hit (morale penalty, possible fear of that dungeon type)

These are flavour-driven mechanical modifiers, not complex social graphs.
