# Heroes — Mechanics

## Recruitment

Heroes are hired from the **Tavern Board** — a rotating pool of available candidates that refreshes every few in-game days. Each candidate has:

- A visible name, class, and level
- A visible asking wage (weekly retainer + quest cut %)
- A partially hidden profile (full stats revealed after hiring or with an "Interview" action that costs a small fee)

Starting heroes are always Level 1. Higher-level heroes can appear but cost significantly more and are rarer. The level and class range that appears on the board scales with your **Hero Reputation** — a company with a bad name only attracts the desperate.

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

## Races

Race is fixed at creation. It adjusts starting stats and grants one passive trait. Stat modifiers apply only to the starting values — level-up points are allocated freely regardless of race.

| Race | Stat Modifiers | Passive | Class Affinities |
|---|---|---|---|
| Human | — | +2 random attributes, -1 random attribute | All classes |
| Dwarf | +1 CON, +1 STR, −1 SMA | **Stoneborn** — bonus die to trap detection in underground themes (Crypt, Ruins, Sewer, Prison); immune to poison | Fighter, Cleric |
| Elf | +1 DEX, +1 SMA, −1 CON | **Keen Senses** — always detects ambushes before the party walks in; bonus die vs fear effects in Forest theme | Ranger, Mage |
| Half-Elf | +1 WIT | **Silver Tongue** — party morale losses from failed runs are reduced by 5 | Bard, Rogue |
| Gnome | +1 WIT, +1 DEX, −1 STR | **Tinkerer** — bonus die to trap disarm; automatically reveals Secret tiles when adjacent | Rogue, Mage |
| Half-Orc | +1 STR, +1 CON, −1 SMA, −1 WIT | **Sturdy** — 10% natural Damage Reduction | Fighter |

### Notes
- Stat modifiers can push a starting value below 1 (minimum 1 applies after modifiers).
- Race does not restrict class choice — it only nudges the stat spread and adds a niche.
- Half-Elf and Gnome have narrower modifiers; they trade raw power for utility.

## Stats

### Core Stats

Each stat is a **dice pool** — the number equals how many D20s are rolled for checks using that stat. A stat of 1 is barely functional; 10 is world-class, and veteran heroes can grow well beyond that.

| Stat | Dice pool used for |
|---|---|
| STR | Melee attacks, forcing doors, carrying capacity |
| DEX | Ranged attacks, initiative, trap-disarm, retreat |
| CON | Injury resistance, recovery speed; sets Max HP |
| SMA | Spell power, dungeon-reading, resist fear |
| WIT | Wits, evasion, trap-detection |

Stats start at 1–4 for Level 1 heroes. There is no upper cap — a hero who survives long enough and keeps gaining levels will develop stats far beyond the starting scale. Each level-up grants **2 stat points** to allocate freely across any stats.

**Equipment, skills, and morale state add or remove dice** from the pool before a roll — they never change the stat value itself.

For how dice pools are resolved (hits, failures, crits), see `06_fights.md`.

### Derived Stats

- **Max HP** = CON × 3 + class base (scales with level via stat points)
- **Initiative** = DEX pool roll at start of combat (net determines turn order)
- **Carry capacity** = CON + ⌊STR ÷ 2⌋ (in Armor Weight units)

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

There is no level cap. XP requirements scale steeply — early levels come quickly, but progress slows significantly past Level 50. A Level 100 hero is a living legend, vanishingly rare and commanding extraordinary wages.

### Wage Creep

With each level, a hero's expected retainer and quest-cut increase. A hero who is consistently underpaid loses morale. A hero who is overpaid is loyal but eats into margin. This is the central business tension.

## Damage Types & Resistances

Heroes deal damage of a specific **Damage Type** (see `06_fights.md` for the full list). They can also have **Resistances**, **Vulnerabilities**, or **Immunities** to incoming damage types, granted by class, equipment, or special abilities. Which class deals or resists which types is TBD.

## Injuries

Heroes can be **Wounded**, **Seriously Wounded**, or **Dead**.

- Wounded: out for 1–3 days, reduced stats until recovered
- Seriously Wounded: out for 1–2 weeks, requires healer or medicine (costs gold)
- Dead: gone. Equipment is recoverable from the dungeon.

Death is permanent. There is no resurrection.

## Relationships between Heroes

Heroes remember things:

- Heroes who survived a dungeon together gain a **Bond** (+morale when in same party)
- Heroes who witnessed a teammate die take a **Trauma** hit (morale penalty, possible fear of that dungeon type)

These are flavour-driven mechanical modifiers, not complex social graphs.
