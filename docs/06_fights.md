# Fights — Combat Resolution

Combat is **automated and dice-pool-based** (visible to the player as animated events on the map). The player watches but cannot intervene except to **sound the retreat**.

## Dice Pool Resolution

All checks roll a pool of D20s:

| Face | Meaning |
|---|---|
| 20 | 2 hits |
| 18, 19 | 1 hit |
| 2 | 1 failure |
| 1 | 2 failures |
| 10 | Crit die — rolled separately as a D10 |
| 3–9, 11–17 | Neutral |

**Net = hits − failures.** Tens do not contribute to the net.

**Critical check:** each 10 is rerolled as a D10. Tally the high rolls (≥ 6) and low rolls (≤ 5).
- **Critical success** = high count × 4 > hits
- **Critical failure** = low count × 4 > failures

Both can trigger on the same roll. A critical amplifies the outcome (bonus damage, spectacular trap, etc.).

## Initiative

Each combatant rolls their **DEX pool** at the start of combat. Net result determines turn order (highest net goes first; ties broken by raw DEX value).

## Attack

Attacker rolls their relevant pool (**STR** for melee, **DEX** for ranged, **SMA** for spells) + possible bonuses.
Defender rolls the pool of the **attribute targeted by the attack's Damage Type** (see below) + possible bonuses.
Outcome is determined by comparing Nets (Criticals double the net).

| Attacker net vs Defender net | Result |
|---|---|
| Attacker net > Defender net | Hit — damage = attacker net |
| Equal | Glancing blow — half damage |
| Defender net > Attacker net | Miss |

## Damage & HP

Damage = **weapon base value + attacker's net hits** (×2 on a critical hit).
Armor grants **Damage Reduction (DR)** — subtract DR from incoming damage before applying to HP.
Damage is always at least 1.

Every attack has a **Damage Type**. DR interacts with damage types via resistances and vulnerabilities.

## Damage Types

The **Damage Type** of an attack determines which of the defender's attribute pools is rolled to resist it.

**Physical**

| Type | Description | Defending Attribute |
|---|---|---|
| Smash | Blunt force, crushing impact | CON |
| Stab | Piercing, puncture wounds | DEX |
| Slash | Cutting, lacerations | STR |

**Elemental**

| Type | Description | Defending Attribute |
|---|---|---|
| Fire | Heat, burns, ignition | CON |
| Frost | Cold, freezing, ice shards | STR |
| Lightning | Electrical shock, thunder | DEX |
| Acid | Corrosive, dissolving flesh and armour | WIT |
| Poison | Venom, toxins, disease | CON |

**Magical**

| Type | Description | Defending Attribute |
|---|---|---|
| Arcane | Raw magical force | SMA |
| Necrotic | Death energy, life drain | SMA |
| Radiant | Divine light, holy energy | SMA |
| Psychic | Mental assault, induced terror | WIT |

## Resistances & Vulnerabilities

Combatants (heroes and enemies alike) can have **Resistances**, **Vulnerabilities**, or **Immunities** to specific damage types.

| Modifier | Effect |
|---|---|
| Resistant | DR is doubled against this damage type |
| Vulnerable | DR is halved against this damage type; minimum damage is 2 (not 1) |
| Immune | No damage taken from this type |

## Round Flow

1. Roll initiative pools → sort turn order
2. Each combatant takes their turn in order (attack or special ability)
3. Heroes with Morale ≤ 25 must pass a **SMA pool check (net ≥ 1)** each round or attempt to flee
4. Round repeats until one side is eliminated or flees

## Retreat

When the player orders a retreat:

- Heroes move toward Exit, fighting only if cornered
- Each hero rolls a **DEX pool check (net ≥ 1)** to disengage from current combat; failure means one more attack is taken before they break free
- Loot carried at retreat time is kept; loot not yet picked up is lost
