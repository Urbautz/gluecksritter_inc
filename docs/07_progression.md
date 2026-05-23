# Progression & Game Loop

## Time

The game runs on an **in-game calendar** (days). Time advances when:
- A dungeon run is in progress
- A hero is training
- A hero is recovering from injury
- The player clicks "End Day" manually

Days are proceeded by player choice, he can perform as many actions as he wants during a day.

## Company Level

The company's level is derived directly from its roster — it is **not set by the player and cannot be directly upgraded**.

> **Company Level = ⌊ average level of all currently hired heroes ⌋**
> (minimum 1 while at least one hero is on the roster)

This makes Company Level a living, self-correcting value. Hire stronger heroes and it rises. Lose heroes to death or dismissal and it drops. There is no cap — as the roster grows in experience, so does the company.

### Effect: Tavern Board

Heroes appearing on the Tavern Board are drawn from a level range centred on the current Company Level:

- **Minimum level shown:** max(1, Company Level − 3)
- **Maximum level shown:** Company Level + 8

A young company attracts young adventurers. A legendary company becomes a destination for experienced heroes looking for worthy employers.

### Effect: Dungeon Danger Level

Contracts and their dungeons are assigned a **Danger Level** (a number from 1 upward, matching enemy strength and loot value). The contract board draws from a range around the current Company Level:

- **Easy contracts:** Danger Level as low as max(1, Company Level − 20)
- **Standard contracts:** Danger Level near Company Level
- **Stretch contracts:** Danger Level up to Company Level + 20

This means the board always offers a mix: safe income, fair fights, and high-risk high-reward outliers. As the company grows more powerful, threats that once seemed impossible become the baseline.

## Hero Progression Tree (per class, example: Fighter)

```
Level  1: Base Attack
Level  2: [Power Strike] or [Shield Wall]
Level  3: +1 stat point bonus
Level  4: [Cleave] or [Taunt] or [Endure]
Level  5: Prestige choice — [Berserker] or [Guardian] (changes combat style)
Level  7: Secondary trait unlock
Level 10: Veteran passive (permanent, class-defining benefit)
Level 20: Master-tier ability
Level 30: Specialization deepens (third-tier trait)
Level 50: Legendary passive
Level 75: Mythic ability
Level 100: Apex ability (unique per prestige path)
```

There is no level cap. XP requirements scale steeply — the gap between levels grows with each tier, so high-level heroes represent years of in-game time and investment. Losing a Level 50+ hero is a catastrophic and essentially irreplaceable loss.

## Endgame

Once the company reaches **Company Level 50**, a **legacy mode** becomes available:
- Harder contracts, legendary dungeon chains
- Rival company becomes active antagonist
- Optional: retire the company at max wealth for a final score

There is no hard ending — the game continues as long as the player wants.
