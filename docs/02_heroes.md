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

### Core Stats (1–10 scale)

Each stat is a **dice pool** — the number equals how many D10s are rolled for checks using that stat. A stat of 1 is barely functional; 10 is world-class.

| Stat | Dice pool used for |
|---|---|
| STR | Melee attacks, forcing doors, carrying capacity |
| DEX | Ranged attacks, initiative, dodge, trap-disarm, retreat |
| CON | Injury resistance, recovery speed; sets Max HP |
| SMA | Spell power, trap-detection, dungeon-reading, resist fear |
| CHA | Negotiation (lower retainer cost), party cohesion, morale recovery |

Stats start at 1–4 for Level 1 heroes and cap at 10. Each level-up grants 2 stat points to allocate freely.

**Equipment, skills, and morale state add or remove dice** from the pool before a roll — they never change the stat value itself.

### Dice Pool Resolution

All checks roll a pool of D10s:

| Face | Meaning |
|---|---|
| 7, 8, 9 | Hit (success) |
| 1, 2 | Failure (glitch) |
| 0 | Critical indicator |
| 3–6 | Neutral |

**Net = hits − failures.**  
**Critical success** = count(0s) > count(failures 1+2).  
**Critical failure** = count(0s) > count(hits 7+8+9).  
Both can trigger on the same roll if 0s dominate everything. A critical flag amplifies the outcome — the game decides what that means per context (bonus damage, spectacular trap, etc.).


### Derived Stats

- **Max HP** = CON × 3 + class base (scales with level via stat points)
- **Initiative** = DEX pool roll at start of combat (net determines turn order)
- **Carry capacity** = STR × 5 kg

### Morale (0–100)

Separate from combat stats. Represents willingness to work.

| Range | State | Effect |
|---|---|---|
| 81–100 | Motivated | +1 die to all combat pools, +10% XP gain |
| 51–80 | Content | No modifier |
| 26–50 | Disgruntled | −1 die to all pools; 1s and 2s both count as failures (glitches doubled) |
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
