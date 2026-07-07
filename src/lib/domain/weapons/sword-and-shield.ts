import type { WeaponData } from '../types';

export const swordAndShield: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'max-crit-rey-gore': {
			name: 'Max Critical Rey Gore SnS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'With Agitator, Latent Power, Antivirus, and Maximum Might all active, armor skills alone provide 95% affinity — freeing Artian reinforcements for raw attack. Burst boosts raw and elemental damage while Constitution and Stamina Surge manage stamina.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Elemental Attack 3 (match weapon)', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'comfort' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Thunderous Roar I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -4, water: 0, thunder: 10, ice: -5, dragon: -2 }
		},
		'synthetic-shield': {
			name: 'Synthetic Shield Team Buffer',
			source: 'Game8',
			tier: 'craftable',
			desc: "Four Omega pieces activate Omega Resonance (affinity and attack scale with distance to allies) on top of True Omega's Sword's innate Guard Up 3 + Synthetic Shield — every Perfect Guard grants +45 Defense to you and your allies. Best in multiplayer.",
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Omega Suit α',
				Arms: 'Omega Vambraces α',
				Waist: 'Omega Accessory α',
				Legs: 'Omega Boots α',
				Charm: 'Appraised (Stun Resistance 3, HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Partbreaker 3', type: 'dmg' },
				{ name: 'Offensive Guard 2', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'comfort' },
				{ name: 'Guard 3', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Divine Blessing 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Synthetic Shield 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Resonance II'],
			meal: 'Any Attack Up or Defense Up meal — the build shrugs off chip damage through Perfect Guards.',
			res: { fire: 9, water: 2, thunder: -8, ice: 7, dragon: -10 }
		},
		'self-heal-comfy': {
			name: 'Self-Heal Comfy SnS',
			source: 'Game8',
			tier: 'craftable',
			desc: "Regenerates plenty of health over a hunt via Zoh Shia's and Arkveld's regen set bonuses plus Recovery Speed and Recovery Up, with Divine Blessing 3 covering whiffed Perfect Guards. Still maxes Agitator, Weakness Exploit, Offensive Guard, and Maximum Might.",
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Arkvulcan Mail β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Arkvulcan Coil β',
				Legs: 'Numinous Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Counterstrike 1', type: 'dmg' },
				{ name: 'Elemental Absorption 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'comfort' },
				{ name: 'Handicraft 2', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Recovery Speed 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Recovery Up 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Super Recovery I', 'Hasten Recovery I'],
			meal: 'Any Attack Up meal — the regen set bonuses keep HP topped up without Moxie.',
			res: { fire: 2, water: 4, thunder: 1, ice: 0, dragon: -18 }
		},
		'lagi-rey': {
			name: 'Lagi-Rey Raw Thunder SnS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Raw and Thunder damage with decent affinity — Agitator, Counterstrike, Maximum Might, and Latent Power can all activate simultaneously for a big raw boost. Attack Boost 4 on the weapon; +13 Thunder Res exploitable via High Lagia Sword.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'comfort' },
				{ name: 'Handicraft 2', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Thunder Resistance 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -7, water: 4, thunder: 13, ice: -8, dragon: -4 }
		},

		// --- HR 100+ builds ---
		'gog-guts-elemental': {
			name: 'Gog-Guts Elemental SnS (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Endgame elemental build around Mutual Hostility II and Guts (Tenacity) — improved elemental damage plus a temporary damage-nullifying barrier. Challenger Charm III maximizes decoration space; swap the element jewel to match the monster.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Elemental Attack 3 (match weapon)', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Critical Element 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -7, water: 3, thunder: 4, ice: 7, dragon: -15 }
		},
		'arkveld-gamma-agitator': {
			name: 'Arkveld Gamma Agitator SnS (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "General-purpose endgame build with Lord's Soul on the Gogma Artian. High damage uptime from maxed Agitator, Weakness Exploit, and Flayer plus Hasten Recovery II, wrapped in comfort — Guard, Razor Sharp, Earplugs, and Blight Resistance.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'G. Ebony Mail β',
				Arms: 'Arkvulcan Vambraces γ',
				Waist: 'Arkvulcan Coil γ',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Flayer 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Elemental Attack 3 (match weapon)', type: 'dmg' },
				{ name: 'Elemental Absorption 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'comfort' },
				{ name: 'Guard 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Blight Resistance 2', type: 'comfort' },
				{ name: 'Dragon Resistance 3 (swap per matchup)', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Hasten Recovery II', 'Guts (Tenacity)', 'Burst Boost I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 6, water: -3, thunder: -6, ice: -2, dragon: -8 }
		},
		'gog-guts-wide-range': {
			name: 'Gog-Guts Wide-Range Support SnS (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Endgame support build on the Mutual Hostility II + Guts core, maximizing Wide-Range with Speed Eating and Free Meal — your items heal the whole hunt. Best in multiplayer; an Appraised charm frees room for Divine Blessing.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Gogmazios Mail α',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Dahaad Shardcoil γ',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Appraised (Crit Eye 3 + Wide-Range 4, HR100+) / Exploiter Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 4', type: 'dmg' },
				{ name: 'Elemental Attack 3 (match weapon)', type: 'dmg' },
				{ name: 'Critical Eye 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Weakness Exploit 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Peak Performance 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Wide-Range 5', type: 'comfort' },
				{ name: 'Free Meal 3', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Divine Blessing 2', type: 'comfort' },
				{ name: 'Bind Resistance 2', type: 'comfort' },
				{ name: 'Handicraft 1', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' },
				{ name: 'Aquatic/Oilsilt Mobility 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', "Lord's Soul"],
			meal: 'Any Attack Up meal — Speed Eating + Free Meal make mid-fight item use nearly free.',
			res: { fire: -15, water: 9, thunder: 3, ice: 8, dragon: -16 }
		},
		'lagi-odo-guts': {
			name: 'Lagi-Odo Guts SnS (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'AGI-WEX build using the Gogma Artian and Armor Transcendence to activate three group/set skills at once — Azure Bolt I, Burst Boost I, and Guts (Tenacity). Affinity swings from 0 to 120% with Azure Bolt; Divine Blessing and Shock Absorber add comfort.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'G. Ebony Braces β (Transcend)',
				Waist: 'Lagiacrus Coil α',
				Legs: 'Lagiacrus Greaves β',
				Charm: 'Challenger Charm II / Appraised (Agitator 1 + extras)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' },
				{ name: 'Aquatic/Oilsilt Mobility 1', type: 'comfort' }
			],
			setSkills: ['Azure Bolt I', 'Burst Boost I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -3, water: -5, thunder: 10, ice: -6, dragon: 0 }
		}
	},
	artianWeapons: [
		{
			name: 'Verdoloto',
			variant: 'standard',
			steps: [
				'Craft with ③③③ parts, element matched to the monster — one per element you need',
				'Raw variant: 3x Attack Infusion; reinforce 4x Attack +5 + Sharpness +30 (Lagi-Rey swaps two Attack for 2x Element +30)',
				'Element variant (Self-Heal Comfy): Element +20 production bonus + 3x Affinity +5; reinforce 4x Element +30 + Sharpness +30',
				'Decos: Critical Jewel III + Guardian/Handicraft + an elemental hybrid jewel (plain Guardian III works without hybrids)'
			]
		},
		{
			name: 'Kyrie Verd',
			variant: 'gogma',
			steps: [
				'The Focus cannot be rerolled — Attack Focus for most builds (offset its -15% affinity with an Affinity +10 EX roll), Element Focus for Arkveld Gamma Agitator',
				"Reroll set + group skills to match the build: Gogmapocalypse + Lord's Soul (both Gog-Guts builds), Ebony Odogaron's Power + Lord's Soul (Lagi-Odo) or + any group skill (Arkveld Gamma)",
				'Reinforce (Attack Focus): 3x Attack +5, Affinity +10 (EX), Sharpness +30 — EX-grade Affinity is high priority',
				'Decos: Critical Jewel III + an element/Ironwall hybrid + Shield/Ironwall — swap the element jewel per matchup'
			]
		}
	],
	weapons: [
		{
			element: 'Fire',
			name: 'Corona',
			info: 'ATK 280 · 250 Fire · Crit Boost 3 + Crit Element innate',
			cls: 'fire'
		},
		{
			element: 'Water',
			name: 'Sandsea Katduva',
			info: 'ATK 294 · 200 Water · Offensive Guard 3 innate',
			cls: 'water'
		},
		{
			element: 'Thunder',
			name: 'High Lagia Sword',
			info: 'ATK 308 · 300 Thunder · Converts Thunder Res to damage',
			cls: 'thunder'
		},
		{
			element: 'Ice',
			name: 'Precipice Mateptro',
			info: 'ATK 294 · Massive 350 Ice element',
			cls: 'ice'
		},
		{
			element: 'Dragon',
			name: 'Jäger-Ankh',
			info: 'ATK 294 · 200 Dragon · Crit Element 3 + great sharpness',
			cls: 'dragon'
		},
		{
			name: "True Omega's Sword",
			info: 'ATK 308 · Raw · Guard Up 3 + Synthetic Shield innate',
			cls: 'raw'
		}
	],
	tips: [
		{
			title: 'Perfect Rush Rules',
			lines: [
				'Perfect Rush is only worth it if you finish the full combo: PR III → Scaling Slash → Falling Bash or Plunging Thrust — never end on Spinning Reaper or Charged Chop',
				'Save it for guaranteed windows: knockdowns, stuns, flashes, and traps (Backstep → Leaping Slash starts the chain)',
				'For shorter openings, the Lateral Slash → Return Stroke → Spinning Rising Slash chain is the highest-damage standing combo'
			]
		},
		{
			title: 'Perfect Guard First',
			lines: [
				'Open hunts with a Perfect Guard (activates Offensive Guard and nullifies the roar) or a Sneak Attack',
				'Use Backstep instead of blocking for hits too risky to Perfect Guard',
				'Weave in Shield Bashes (Shield Attack → Shield Bash → Hard Basher) to rack up stun and save sharpness',
				'Corrupted Mantle is the top damage mantle — but it drains HP while you are not attacking'
			]
		},
		{
			title: 'Element Strategy',
			lines: [
				'Stick to raw while progressing to limit crafting; switch to matched elements at endgame',
				'Dragon is a serviceable default in many matchups (within ~1% on Arkveld weapons)',
				"Critical Boost 3 always; then pick Offensive Guard or Master's Touch — deco budget rarely fits both"
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Sword & Shield hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Rush Damage', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Utility', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which crit engine?',
					options: [
						{
							label: '95% affinity from armor alone — Agitator + Latent Power',
							value: 'max-crit-rey-gore'
						},
						{
							label: 'Raw Attack Boost + Thunder — Counterstrike stacking',
							value: 'lagi-rey'
						}
					]
				},
				balanced: {
					text: 'How do you want to keep damage flowing?',
					options: [
						{
							label: 'Self-healing that still maxes Agitator + WEX',
							cssClass: 'balanced',
							value: 'self-heal-comfy'
						},
						{
							label: 'Raw crit with Divine Blessing + Quick Sheathe safety',
							cssClass: 'balanced',
							value: 'lagi-rey'
						}
					]
				},
				comfort: {
					text: 'What kind of utility?',
					options: [
						{
							label: 'Regen everything — Super Recovery + Recovery Speed',
							cssClass: 'comfort',
							value: 'self-heal-comfy'
						},
						{
							label: 'Team buffer — Perfect Guards shield your allies',
							cssClass: 'comfort',
							value: 'synthetic-shield'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Sword & Shield hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Rush Damage', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Utility', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Elemental crit + Mutual Hostility damage barrier',
							value: 'gog-guts-elemental'
						},
						{
							label: 'Affinity past 100% — AGI/WEX with Azure Bolt',
							value: 'lagi-odo-guts'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: "All-rounder — Flayer, Razor Sharp, Earplugs, Lord's Soul",
							cssClass: 'balanced',
							value: 'arkveld-gamma-agitator'
						},
						{
							label: 'Guts barrier + Divine Blessing on the elemental core',
							cssClass: 'balanced',
							value: 'gog-guts-elemental'
						}
					]
				},
				comfort: {
					text: 'How do you want to support the hunt?',
					options: [
						{
							label: 'Heal the squad — Wide-Range 5 + Speed Eating + Free Meal',
							cssClass: 'comfort',
							value: 'gog-guts-wide-range'
						},
						{
							label: 'Comfort damage — Earplugs, Blight Res, Hasten Recovery',
							cssClass: 'comfort',
							value: 'arkveld-gamma-agitator'
						}
					]
				}
			}
		}
	},
	referenceKey: 'sword-and-shield',
	sourcesText:
		'Game8 Sword and Shield Builds (TU4/v1.041, all loadouts and resistances) and the SnS Wilds FAQ + Progression Guide Google Doc (Visby1, BK, et al.) for mechanics and combo guidance — the doc is pre-TU4 and its endgame section defers to an external meta doc, so no doc loadouts are included.',
	display: {
		weaponListTitle: 'Non-Artian Sword & Shields',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
