# Compendium Bow General Info — Reference

Source: MH:GH Bow Compendium (@p_chu & @ninjazenia)
Extracted from screenshots on 2026-04-08.

This document captures non-build-specific bow information that should eventually live in an informational section of the app.

---

## 1. Recommended Meal Setups

### Ration
- **Meat** — Always choose meat for +2 Attack.

### Additional Ingredients

| Ingredient | Food Skill | When to Eat | Effect |
|---|---|---|---|
| Droolshroom | Black Belt (Lo) | If your build has Constitution 3 | Stamina reduction cap via food |
| Delishroom | Black Belt (Hi) | If your build has Constitution 2 | Stamina reduction cap via food |
| Sild Garlic | Moxie (Lo) | If your build has Constitution 5 | Stops one-shots by leaving you at 1 HP |
| Specialty Sild Garlic | Moxie (Hi) | If your build has Constitution 5 | Stops one-shots and heals you a bit |
| Fluffy Egg | Caprice (Lo) | If your build has Constitution 5 | +7 Attack for 10 seconds, every 3 minutes |
| Airy Egg | Caprice (Hi) | If your build has Constitution 5 | +15 Attack for 10 seconds, every 3 minutes |

### Finishing Touches
| Ingredient | When to Use | Effect |
|---|---|---|
| Monster Chili | Don't want to bother with hot/cool drinks | Temperature immunity |
| Jeweled Mullet Roe | Fighting in a wet area | +3 Attack when wet |

### Key Takeaway
Builds with Constitution 5 free your meal slot — you can eat for Moxie (survival) or Caprice (damage). Builds with Constitution 2-3 need to eat for Black Belt (Droolshroom/Delishroom) to reach the stamina reduction cap.

---

## 2. Capping Stamina Reduction

The stamina bar is the single most important resource for Bow. There are 6 equivalent ways to reach the stamina reduction cap:

| Combination | Notes |
|---|---|
| Constitution 5 | No food/consumable needed. Frees meal slot. |
| Constitution 4 + Dash Juice | Consumable dependency. |
| Constitution 3 + Black Belt (Lo) | Eat Droolshroom. Most common for damage builds. |
| Constitution 2 + Dash Juice + Black Belt (Lo) | Double dependency. |
| Constitution 2 + Black Belt (Hi) | Eat Delishroom. |
| Constitution 1 + Dash Juice + Black Belt (Hi) | Maximum external dependency. |

### Abbreviations
- Cons = Constitution (skill)
- DJ = Dash Juice (consumable)
- BBLo = Black Belt (Lo) from Droolshroom (food)
- BBHi = Black Belt (Hi) from Delishroom (food)

### Key Takeaway
Constitution 5 is the easiest path — purely from jewels, no food/consumable dependency. The Compendium notes this is very easy to achieve with current meta sets. Lower Constitution levels trade jewel slots for food/consumable requirements.

---

## 3. Crafting the Ideal Artian Bow

### Weapon: Angelbein

The Artian crafting system has 8 customizable stats:
- **3 Infusions** (from parts): can be Affinity or Attack
- **5 Reinforcements** (from upgrading): can be Affinity, Attack, or Element

### Ideal Stat Spread
- **Production Bonus**: Element +20, Attack +5, Attack +5, Attack +5
- **Reinforcement Bonus**: Attack +5, Attack +5, Attack +5, Attack +5, Attack +5
- **Element Type**: Any (craft one per element you need)

### Odds
- 5× Attack Reinforcement: **1 in 231** (0.43%)
- Credits to @via.kreatv1 for the probability calculator

### Practical Advice
- Any deviation on reinforcements is weaker but perfectly acceptable — the difference is extremely marginal.
- "If you don't care enough to min-max, just craft and use the G. Doshaguma bow."
- A linked probability calculator exists for computing odds of specific Artian rolls.

### Game8 Comparison
Game8's Angelbein recommendation differs slightly — they suggest 3× Affinity +5 reinforcements + 2× Element +30 reinforcements instead of 5× Attack. The Compendium's all-Attack approach prioritizes raw damage, while Game8's version trades some raw for more consistent crits and elemental damage.

---

## 4. Non-Artian Bow Options (Alternative Bows)

"Dedicated to those who are looking for alternative bows that are not restricted to being Artian and/or close-range coating. These bows are weaker than the meta, but are easier and faster to get."

| Element | Weapon Tree | Bow Name | Coating |
|---|---|---|---|
| Fire | Quematrice | Firetrail Leviora | Close-Range |
| Fire | Rathalos | Dark Filament | Power |
| Water | Xu Wu | Bookwilthe's Punisher | Power |
| Ice | Blangonga | Singha Sharanga | Close-Range |
| Thunder | Lagiacrus | High Voltsender | Close-Range |
| Thunder | Artian | Angelbein | Power |
| Dragon | G. Arkveld | G. Renowned Tristram | Close-Range |
| Dragon | Zoh Shia | Blazing Samira | Power |

### Comparison with Game8 Weapon Recs
Game8 recommends 4 non-Artian bows: Dark Filament (Fire), High Voltsender (Thunder), Singha Sharanga (Ice), Verzweiflung (Dragon).

Key differences from the Compendium list:
- **Verzweiflung** (Gore Magala, Dragon) appears in Game8 but not in the Compendium's non-Artian list. The Compendium lists G. Renowned Tristram and Blazing Samira for Dragon instead.
- The Compendium includes **Firetrail Leviora** (Fire, Close-Range) and **Bookwilthe's Punisher** (Water, Power) which Game8 doesn't list.
- The Compendium includes **Blazing Samira** (Zoh Shia, Dragon, Power) which Game8 doesn't list.
- Both agree on **Dark Filament**, **High Voltsender**, and **Singha Sharanga**.

### Coating Context
- **Power Coating** = stronger damage boost, preferred when available
- **Close-Range Coating** = requires staying closer to the monster, weaker boost but more universally available
- Bows with Power Coating are generally preferred; Close-Range bows are viable alternatives

---

## App UI Mapping Notes

These four sections could be presented in the app as:

1. **"Bow Guide" tab or panel** alongside the weapon tabs — a dedicated informational section that isn't build-specific
2. **Expandable info cards** within the current flow — e.g. a "Meal Setup" card that dynamically shows relevant meals based on the selected build's Constitution level
3. **A reference sidebar or modal** accessible from any build result — "How do I cap stamina?" / "Which bow should I use?" / "How do I craft the Artian bow?"

The meal data is especially useful per-build since the correct meal depends on the build's Constitution level. The stamina cap and Artian crafting info are more static reference content. The bow options table is useful as a "swap guide" shown alongside or below the weapon recommendations in each build result.
