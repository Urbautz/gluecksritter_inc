# Economy & Business Mechanics

## Currency

Single currency: **Gold (G)**. No sub-currencies — every transaction uses Gold.

## Income Sources

### Quest Contracts
The primary income stream. Clients pay a **contract fee** on completion.  
Contracts have:
- Fixed fee (guaranteed on success)
- Optional bonus conditions (e.g. "leave no witnesses", "recover artefact undamaged")
- A loot split clause: some clients want all loot, others don't care

### Loot Sales
Loot found in dungeons can be sold at:
- **Pawn shops** — instant cash, low price (50% market value)
- **Merchants** — takes 2–3 days, 80% market value
- **Private buyers** — takes time to find, 100–120% market value, sometimes asks for something back

### Guard Duty
Assign idle heroes to standing guard posts — merchant caravans, noble estates, city gates. No dungeon risk, steady but low pay.

- Income is low (below what a dungeon run would net)
- Raises **Public Reputation**
- **Morale declines** over time — heroes find the work boring and beneath them
- Heroes with high Greed (7+) resent the low pay faster; heroes with low Harm (0–2) tolerate it better
- Useful for: filling payroll gaps between contracts, recovering injured heroes who can't fight, softening your Public Rep after dirty jobs

### Training Fees (late game)
Once you have a high-level trainer on staff, you can charge other companies to use your training facilities. Passive income.

## Expenses

| Expense | Notes |
|---|---|
| Weekly retainer per hero | Fixed, due every 7 in-game days |
| Equipment purchase | One-time, per item |
| Training sessions | Per session, per hero |
| Office rent | Scales with tier of headquarters |
| Bribes | Some contracts or city permissions require them |
| Dungeon Maps | Buy Dungeon maps for high loot dungeons |

**Payroll is sacred.** Paying heroes late is the fastest way to tank morale.

## Contracts & Clients

Clients are NPCs with:
- A **type** (noble, cult, guild, criminal, city guard, etc.)
- A **reputation effect** — some clients improve your standing, others damage it if publicly known
- A **recurring status** — satisfied clients offer follow-up contracts; burned clients may never come back.

Contracts are visible on the **Contract Board**, similar to the Tavern Board. They refresh periodically and some are time-limited.

## Reputation

Two separate reputation tracks:

### Street Reputation (0–100)
How well-known and feared/respected you are in the underworld and adventurer community.  
- High: higher-tier contracts available, criminal and guild clients seek you out
- Low: ignored by serious clients, scraping for low-value jobs

### Public Reputation (0–100)
How legitimate you appear to authorities and nobility.  
- High: city permits cheaper, noble clients available, fewer legal hassles
- Low: guards may shake you down, certain contracts unavailable, possible crackdowns

### Hero Reputation (0–100)
How you are known as an employer among the adventuring community.  
- High: higher-level candidates and rare classes appear on the Tavern Board; heroes accept slightly lower wages to work for a company with a good name
- Low: only desperate or low-level candidates show up; skilled heroes avoid you

**Raised by:** heroes surviving runs, timely pay, successful missions, equipping heroes well.  
**Lowered by:** hero deaths, abandoning heroes in dungeons, chronic late pay, sending heroes on jobs that violate their ethics.

The three tracks often pull in different directions. Taking dirty work raises Street Rep and lowers Public Rep. Grinding heroes through deadly dungeons may earn Street Rep but destroys Hero Rep.

## Headquarters

You operate from a **base of operations** that can be upgraded:

| Tier | Name | Weekly Rent | Slots | Features |
|---|---|---|---|---|
| 1 | Tavern Backroom | 20G | 3 heroes | Notice board, stash |
| 2 | Warehouse | 60G | 8 heroes | Training dummy, small armoury |
| 3 | Guild Hall | 150G | 15 heroes | Full training room, clinic, quartermaster |
| 4 | Fortress | 400G | 30 heroes | Forge, library, dungeon portal (fast travel) |
| 5 | Grand Citadel | 1000G | 60 heroes | Alchemy lab, war room, arcane vault, recruiting office |
| 6 | Empire Seat | 2500G | 100 heroes | Legendary vault, faction embassy, arena training ground, master scholar |

**Slots** = maximum heroes on retainer at once.

## Equipment

Equipment is bought, looted, or crafted (late game). Every item has:
- A **slot** (see full slot list below)
- **Stat modifiers** — add or remove dice from stat pools before a roll
- A **durability** rating — degrades in dungeons, must be repaired or replaced
- **Stat requirements** — minimum values in one or more stats; equipping without meeting them imposes a penalty (see Unmet Requirements below)
- Optional **resistance/vulnerability** grants to one or more damage types

Equipment is an asset on your balance sheet. Losing a hero means losing their equipped items unless you retrieve them from the dungeon.

---

### Equipment Slots

A hero has the following equip slots, organised by body part. Layered slots (marked ⬓) have two tiers — inner and outer — both occupied independently.

```
HEAD
  └─ Helm                   helmet, hat, hood, coif, circlet

TORSO  ⬓ (two layers)
  ├─ Under-Armor             gambeson, chainmail shirt, padded vest
  └─ Armor                   breastplate, coat of plates, mage robe, cuirass

ARMS
  └─ Gloves                  gauntlets, leather gloves, bracers, fingerless mitts

LEGS  ⬓ (two layers)
  ├─ Under-Armor             arming hose, padded leggings, chainmail hose
  └─ Armor                   plate cuisses, scale chaps, hardened leather

FEET  ⬓ (two layers)
  ├─ Socks                   wool socks, iron-woven socks, enchanted socks
  └─ Boots                   leather boots, sabatons, soft shoes, iron-soled

BACK
  └─ Cloak                   travel cloak, mage mantle, shadow cape

WEAPONS  (two slots)
  ├─ Main Hand               one-handed sword, axe, mace, dagger, staff, bow¹
  └─ Off-Hand                shield, parrying dagger, arcane focus, lantern, bow¹
      ¹ Two-handed weapons (greatsword, longbow, great staff) occupy BOTH slots.

WAIST
  └─ Belt                    leather belt, war girdle, enchanted sash, chain belt

ACCESSORIES
  ├─ Amulet                  one slot — worn around the neck
  ├─ Earrings                two slots — one per ear
  └─ Rings                   up to 10 slots — one per finger, both hands

**Total item slots per hero: 19 base + up to 10 rings = up to 29 items at once.**

---

### Stat Requirements

Each item lists zero or more stat thresholds. A hero must meet **all** of them to equip the item normally.

| Requirement Type | Notation | Example Item |
|---|---|---|
| Minimum STR | `STR ≥ X` | Heavy plate cuirass: `STR ≥ 5` |
| Minimum DEX | `DEX ≥ X` | Elven recurve bow: `DEX ≥ 5` |
| Minimum CON | `CON ≥ X` | Torment Harness: `CON ≥ 4` |
| Minimum SMA | `SMA ≥ X` | Arcane focus crystal: `SMA ≥ 3` |
| Minimum WIT | `WIT ≥ X` | Assassin's ring: `WIT ≥ 4` |


### Armor Weight

Each armour piece has an **Armor Weight (AW)** value. A hero can equip armour as long as the **total AW across all armour slots does not exceed their Carry Capacity:**

> **Carry Capacity = CON + ⌊STR ÷ 2⌋**

(⌊ ⌋ = round down. STR 3 → +1, STR 4 → +2, STR 6 → +3, etc.)

The following slots count toward AW: **Helm, Torso Under-Armor, Torso Armor, Gloves, Belt, Legs Under-Armor, Legs Armor, Socks, Boots.** Weapons, accessories, cloaks, and tools do not count.

**Exceeding the cap is a hard block** — the item cannot be dropped into a slot that would push total AW over the limit. The piece bounces back to stash. This is distinct from stat requirements, which allow equipping at a penalty.

#### Armor Weight Reference

Better protection costs more AW. A silk robe costs 0; full gothic plate costs 4 per piece.

| Item | AW | Typical Slot |
|---|---|---|
| Cloth robe / canvas shirt | 0 | Torso Armor |
| Padded gambeson / arming doublet | 1 | Torso Under-Armor |
| Leather jerkin | 1 | Torso Armor |
| Chainmail shirt | 2 | Torso Under-Armor or Armor |
| Scale hauberk / coat of plates | 3 | Torso Armor |
| Half-plate breastplate | 3 | Torso Armor |
| Full plate cuirass | 4 | Torso Armor |
| Padded leggings / arming hose | 1 | Legs Under-Armor |
| Chainmail hose | 1 | Legs Under-Armor or Armor |
| Leather chaps / hardened leather | 1 | Legs Armor |
| Scale chaps | 2 | Legs Armor |
| Plate cuisses | 2 | Legs Armor |
| Full plate greaves | 3 | Legs Armor |
| Cloth hood / padded cap | 0 | Helm |
| Leather helmet | 0 | Helm |
| Chainmail coif | 1 | Helm |
| Great helm / closed visor | 1 | Helm |
| Titan helm | 2 | Helm |
| Leather gloves / bracers | 0 | Gloves |
| Iron gauntlets | 1 | Gloves |
| Plate gauntlets | 1 | Gloves |
| Socks (any) | 0 | Socks |
| Soft shoes / sandals | 0 | Boots |
| Leather boots | 0 | Boots |
| Iron-soled boots | 1 | Boots |
| Sabatons (full plate boots) | 1 | Boots |
| Leather belt / enchanted sash | 0 | Belt |
| War girdle / chain belt | 0 | Belt |
| Reinforced war belt | 1 | Belt |

A typical **fighter in half-plate** might wear: half-plate torso (3) + padded inner (1) + plate cuisses (2) + padded leggings (1) + great helm (1) = **8 AW** — exactly the capacity of a STR 6 / CON 5 hero.

A **mage in robes** wears: cloth robe (0) + padded inner (1) + cloth hood (0) = **1 AW** — well within their meagre 3 AW cap.

### Two-Handed Weapons

Any weapon tagged **two-handed** locks both weapon slots simultaneously:

- Main Hand shows the weapon.
- Off-Hand shows a greyed-out "Occupied by two-hander" notice.
- The hero cannot carry a shield, focus, or off-hand weapon while a two-hander is drawn.
- Two-handers typically carry higher damage dice bonuses and often have higher STR or DEX requirements than their one-handed equivalents.