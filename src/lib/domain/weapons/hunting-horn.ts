import type { WeaponData } from '../types';

export const huntingHorn: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'zoh-guts-peak': {
			name: 'Zoh Guts Peak HH',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Endgame raw build going all-in on Peak Performance with Guts (Tenacity). Echo Bubbles cannot crit, so raw stacking wins; Free Meal 3 keeps you at full HP for Peak Performance. Counter Charm III at HR50+; Appraised (Attack Boost 3 + Burst 1) at HR100+.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Duna Wildmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Numinous Overlay β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Counter Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Burst 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Adrenaline Rush 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Free Meal 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' }
			],
			setSkills: ['Super Recovery I', 'Protective Veil I', 'Guts (Tenacity)'],
			meal: 'Moxie (Hi) — the game consumes Moxie before Guts, so you keep both.',
			res: { fire: -6, water: 10, thunder: 2, ice: -3, dragon: -8 }
		},
		'rey-zoh-agitator': {
			name: 'Rey-Zoh Agitator Burst HH',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Pure raw: Agitator 5 + Burst 5 + Guts (Tenacity) from 3pc Rey Dau γ, with 2pc Zoh Shia for Super Recovery. Over 350 raw on Blazing Gariel with Self-Improvement and Attack Up (L) — scales every non-critting Echo move.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Numinous Shroud β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Numinous Overlay β',
				Legs: 'Rey Sandgreaves γ',
				Charm: 'Chain Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' }
			],
			setSkills: ['Super Recovery I', 'Thunderous Roar I', 'Guts (Tenacity)'],
			meal: 'Moxie (Hi) — stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -4, water: -2, thunder: 16, ice: -9, dragon: -8 }
		},
		'gore-lagi-bolt': {
			name: 'Gore-Lagi Frenzy Bolt HH',
			source: 'Game8',
			tier: 'craftable',
			desc: 'High-affinity Thunder build: Lagia Thunderpeal hits the 855 element cap via Convert Thunder Resistance, Thunder Attack 3, and the Elem Attack Boost melody. Earplugs, Evade Window, and Evade Extender keep it comfy.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Gore Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Thunder Attack 3', type: 'dmg' },
				{ name: 'Slugger 3', type: 'dmg' },
				{ name: 'Weakness Exploit 2', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evade Window 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Thunder Resistance 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Azure Bolt I'],
			meal: 'Any Attack Up meal. Moxie (Hi) for anti-OHKO safety.',
			res: { fire: -10, water: 8, thunder: 10, ice: -1, dragon: -6 }
		},
		'comfy-zoh-raw': {
			name: 'Comfy Zoh Raw HH',
			source: 'Game8',
			tier: 'craftable',
			desc: '4x Zoh Shia for Super Recovery II plus Evade Window 5, Divine Blessing 3, and Earplugs 2. Pairs with the healing-support Queen Chordmaker — the tanky pick that keeps the party (and you) topped up.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud α',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Numinous Overlay β',
				Legs: 'Numinous Greaves β',
				Charm: 'Evasion Charm IV (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Counterstrike 2', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Elemental Absorption 1', type: 'dmg' },
				{ name: 'Evade Window 5', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Recovery Speed 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Super Recovery II'],
			meal: 'Any Defense or Attack Up meal — Super Recovery covers sustain.',
			res: { fire: -6, water: 8, thunder: 7, ice: 0, dragon: -20 }
		},
		'odo-guts': {
			name: '2 OdoGuts Bridge Set',
			source: 'Google Doc',
			tier: 'craftable',
			desc: "The doc's mid post-game bridge to HR100: 2pc G. Ebony Odogaron (Burst Boost I) plus 3 Lord's Soul pieces for Guts and Protective Veil I. G. Resounding Galahad covers every matchup until your Artians are ready.",
			armor: {
				Head: 'G. Ebony Helm β',
				Chest: 'G. Ebony Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Duna Wildcoil γ',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Burst 4', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Counterstrike 2', type: 'dmg' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Flayer 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Tool Specialist 2', type: 'comfort' },
				{ name: 'Earplugs 1', type: 'comfort' }
			],
			setSkills: ['Burst Boost I', "Guts (Lord's Soul x3)", 'Protective Veil I'],
			meal: 'Moxie (Hi) — the game consumes Moxie before Guts, so you keep both.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc loadout images omit resistances.
		},

		// --- HR 100+ builds ---
		'agi-burst-gogma': {
			name: 'AGI-Burst Gogma II HH (v1.041)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'End-game raw stacking with Mutual Hostility II and Guts: max Burst, Agitator, and Attack Boost with loads of 1-slot decos for comfort. The 1-slot Adaptability sits in a 2-slot and can swap for Evade Extender.',
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Gogmazios Mail α',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Golden Age Charm / Appraised (Attack Boost 3 + Agitator 1)'
			},
			skills: [
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: "Mind's Eye 3", type: 'dmg' },
				{ name: 'Element/Status Attack 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Peak Performance 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Adaptability 2', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', "Lord's Soul"],
			meal: 'Moxie (Hi) — the game consumes Moxie before Guts, so you keep both.',
			res: { fire: -5, water: 5, thunder: -1, ice: 10, dragon: -18 }
		},
		'gog-burst-guts': {
			name: 'Gog Burst-Guts HH (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Raw-stacking Gogma Artian build with Burst Boost II (+18 raw while Burst is up) and Guts (+5% raw plus a cart save). Armor Transcendence on the G. Ebony pieces activates Ebony Odogaron's Power alongside Lord's Soul.",
			armor: {
				Head: 'G. Ebony Helm β (Transcend)',
				Chest: 'Udra Miremail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gogmazios Coil α',
				Legs: 'G. Ebony Greaves β (Transcend)',
				Charm: 'Appraised (Attack Boost 2 + Maximum Might 2) / Mighty Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Element/Status Attack 3', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Peak Performance 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Burst Boost II', 'Guts (Tenacity)'],
			meal: 'Moxie (Hi) — the game consumes Moxie before Guts, so you keep both.',
			res: { fire: -3, water: -9, thunder: 0, ice: -3, dragon: 3 }
		},
		'gogmapocalypse-guts': {
			name: 'Gogmapocalypse Guts HH (TU4)',
			source: 'Game8 + Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Hi-element set on a Gogmapocalypse + Lord's Soul Gogma Artian: Mutual Hostility II boosts element hard and the 4pc shield (75% HP, refreshing) stacks with Guts to make you nearly uncartable. The doc's 'Ele Stacking' meta set.",
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Appraised (Attack Boost 2 + Earplugs 2) / Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Element/Status Attack 3', type: 'dmg' },
				{ name: 'Counterstrike 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Resentment 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Bad Blood I', 'Guts (Tenacity)'],
			meal: 'Moxie (Hi) — the game consumes Moxie before Guts, so you keep both.',
			res: { fire: -2, water: 1, thunder: 0, ice: 11, dragon: -15 }
		},
		'lagi-guts-ele': {
			name: 'Lagi-Guts Raw-Ele HH (TU3)',
			source: 'Game8',
			tier: 'craftable',
			rank: 'hr100',
			desc: 'Maximizes raw and element with Guts (Tenacity) on a standard Artian — no Gogma grind needed. Extra slots and Counterstrike 2 from the Nu Udra γ chest push the ceiling; Earplugs 2 and Speed Eating 3 are swappable comfort.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Udra Miremail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (Attack Boost 3 + Burst 1) / Chain Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Burst 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Moxie (Hi) — the game consumes Moxie before Guts, so you keep both.',
			res: { fire: -2, water: 2, thunder: 9, ice: -4, dragon: -4 }
		},
		'hybrid-stacking': {
			name: 'Hybrid Stacking (General Use)',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "The doc's pick for most players: one comfy elemental set for every matchup, needing only one of Ebony Odogaron's Power or Lord's Soul on the Gogma Artian. Slightly behind the specialized sets for far lower investment.",
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces β',
				Waist: 'Gogmazios Coil α',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Resentment 1', type: 'dmg' },
				{ name: 'Adrenaline Rush 1', type: 'dmg' },
				{ name: 'Peak Performance 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' }
			],
			setSkills: ["Ebony Odogaron's Power", "Lord's Soul"],
			meal: 'Moxie (Hi) — the game consumes Moxie before Guts, so you keep both.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc loadout images omit resistances.
		},
		'dosha-raw-offset': {
			name: "Raw Offset — Doshaguma's Might",
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "The raw meta set: spam Single Encores and land an Offset every 2-3 minutes for a refreshable +25 raw from Doshaguma's Might on the Gogma Artian. Beats G. Resounding Galahad wherever raw is heavily favored.",
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'G. Doshaguma Braces β',
				Waist: 'Doshaguma Coil β',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Mighty Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Peak Performance 2', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Heroics 1', type: 'dmg' },
				{ name: 'Flayer 1', type: 'dmg' }
			],
			setSkills: ["Doshaguma's Might", "Lord's Soul"],
			meal: 'Moxie (Hi) — the game consumes Moxie before Guts, so you keep both.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc loadout images omit resistances.
		},
		'galahad-support': {
			name: 'Non-Gog Galahad Support',
			source: 'Google Doc',
			tier: 'craftable',
			rank: 'hr100',
			desc: "The ideal support horn set: G. Resounding Galahad's offensive songset, status-cleanse bubbles, and Sonic Barrier damage reduction — the doc's pick for keeping struggling teams (and Omega Planetes squads) alive. No Gogma armor.",
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'G. Ebony Braces β',
				Waist: 'G. Ebony Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Eye 3', type: 'dmg' },
				{ name: 'Horn Maestro 2', type: 'dmg' },
				{ name: 'Adrenaline Rush 1', type: 'dmg' },
				{ name: 'Flayer 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Divine Blessing 1', type: 'comfort' }
			],
			setSkills: ["Ebony Odogaron's Power I (2pc)"],
			meal: 'Moxie (Hi) or a Defense Up meal for support duty.',
			res: { fire: 5, water: -10, thunder: -7, ice: -2, dragon: 8 }
		}
	},
	artianWeapons: [
		{
			name: 'Omiltika',
			variant: 'standard',
			steps: [
				'Craft with 3x Attack parts + element infusion (Element +30, 3x Attack +5) — ③③③ slots',
				'Reinforce: 5x Attack +5 (all-Attack); base element rolls do nothing for Echo Waves',
				'Build one per element (Fire/Water/Dragon first for coverage); Paralysis for a status horn',
				'Decos: Sonorous/Attack or /KO Jwl III + Element/Handicraft (or Paralyzer III for status)'
			]
		},
		{
			name: 'Onyx Choros',
			variant: 'gogma',
			steps: [
				'Upgrade your Omiltika with Attack Focus (skills like Maximum Might offset the -15% affinity)',
				"Reroll set + group skills: Ebony Odogaron's Power (element) or Doshaguma's Might (raw/status), always with Lord's Soul; Gogmapocalypse for the hi-element shield set",
				'Reinforce: 2x Attack EX, 2x Attack III, 1x Sharpness EX (Game8 alt: 3x Attack +5, Affinity +10 EX, Sharpness +30)',
				'Its Elemental Melody songlist is the highest-DPS song combo in the game — songs cannot be changed'
			]
		}
	],
	weapons: [
		{
			element: 'Dragon',
			name: 'G. Resounding Galahad',
			info: 'Best craftable · Attack Up (L) + Extend All Melodies · Sonic Barrier support',
			cls: 'dragon'
		},
		{
			element: 'Fire',
			name: 'Blazing Gariel',
			info: 'Zoh Shia · Whiteflame Torrent · Health Regen bubble + Offset Melody',
			cls: 'fire'
		},
		{
			element: 'Thunder',
			name: 'Lagia Thunderpeal',
			info: 'Lagiacrus · Convert Thunder Res hits the 855 element cap · Offset Melody',
			cls: 'thunder'
		},
		{
			element: 'Ice',
			name: 'Precipice Kovira',
			info: 'Best craftable Ice per the community doc',
			cls: 'ice'
		},
		{
			name: 'Queen Chordmaker',
			info: 'Rathian · Melody of Life + Recovery Speed (L) · best healing support',
			cls: 'raw'
		}
	],
	tips: [
		{
			title: 'Song Rotation',
			lines: [
				'Queue Self-Improvement on approach, then attack/element buffs before utility',
				'Play one song at a time — always Encore immediately after a single Echo Wave',
				'Horn Maestro 2 is a mandatory tax: longer melodies, bigger and longer bubbles',
				'Keep Offset Melody ready to counter; end song queues with a dodge or Encore'
			]
		},
		{
			title: 'Echo Bubble Play',
			lines: [
				'Echo Bubble + Echo Wave spam is the core DPS loop — most of it cannot crit, so stack raw and element over affinity',
				'Focus Strike: Reverb interrupts attacks and refreshes bubble charges — take every wound',
				'Hilt Stab cancels Encore/Resounding recovery and baits counters'
			]
		},
		{
			title: 'Horn Swapping & Mantles',
			lines: [
				'Carry a swap horn (Great Bagpipe / Ajara-Jivaka for Attack Up (L) + Earplugs; G. Resounding Galahad extends all melodies) — swap only while running to the monster',
				'Corrupted Mantle for damage, Rocksteady to protect performances, Evasion with Adrenaline Rush sets',
				'Eat for Moxie (Hi): the game consumes Moxie before Guts, keeping both protections'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Hunting Horn hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Solo DPS', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Support & Comfort', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{ label: 'All-in Peak Performance raw with Guts', value: 'zoh-guts-peak' },
						{ label: 'Agitator + Burst raw — Rey Dau γ Guts core', value: 'rey-zoh-agitator' },
						{ label: 'Thunder element cap — Lagia Thunderpeal', value: 'gore-lagi-bolt' }
					]
				},
				balanced: {
					text: 'How do you want to balance damage and safety?',
					options: [
						{
							label: 'Burst Boost + Guts bridge set that carries to HR100',
							cssClass: 'balanced',
							value: 'odo-guts'
						},
						{
							label: 'Raw damage with Free Meal + Earplugs comfort',
							cssClass: 'balanced',
							value: 'zoh-guts-peak'
						}
					]
				},
				comfort: {
					text: 'How do you want to support the hunt?',
					options: [
						{
							label: 'Healing songs — Super Recovery + Evade Window tank',
							cssClass: 'comfort',
							value: 'comfy-zoh-raw'
						},
						{
							label: 'Galahad melody support with a Guts safety net',
							cssClass: 'comfort',
							value: 'odo-guts'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Hunting Horn hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Solo DPS', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Support & Comfort', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{ label: 'Raw stacking — Burst Boost II Gogma Artian', value: 'gog-burst-guts' },
						{ label: "Offset counters — Doshaguma's Might raw", value: 'dosha-raw-offset' },
						{
							label: 'Hi-element Echo Waves + Gogmapocalypse shield',
							value: 'gogmapocalypse-guts'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Hybrid stacking — one comfy set for every matchup',
							cssClass: 'balanced',
							value: 'hybrid-stacking'
						},
						{
							label: 'AGI-Burst comfort raw — loads of deco slots',
							cssClass: 'balanced',
							value: 'agi-burst-gogma'
						},
						{
							label: 'No Gogma grind — Lagi-Guts raw + element',
							cssClass: 'balanced',
							value: 'lagi-guts-ele'
						}
					]
				},
				comfort: {
					text: 'How do you want to support the hunt?',
					options: [
						{
							label: 'Buff support — Galahad songs + Sonic Barrier',
							cssClass: 'comfort',
							value: 'galahad-support'
						},
						{
							label: 'Near-immortal — Gogmapocalypse shield + Guts',
							cssClass: 'comfort',
							value: 'gogmapocalypse-guts'
						}
					]
				}
			}
		}
	},
	referenceKey: 'hunting-horn',
	sourcesText:
		'Game8 Hunting Horn Builds (TU4/v1.041) and "A Comprehensive Guide to Wilds Hunting Horn" Google Doc (Upgreid, AT Arkveld edition). Google Doc builds do not list elemental resistances — those values are unverified placeholders.',
	display: {
		weaponListTitle: 'Non-Artian Hunting Horns',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
