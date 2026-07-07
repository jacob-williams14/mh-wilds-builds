import type { WeaponData } from '../types';

export const hammer: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'guts-counter': {
			name: 'AGI-WEX Guts Counter Hammer',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Maxes Agitator, Weakness Exploit, and Counterstrike while Gamma pieces bring Guts (Tenacity) — hyper-armor through hits and punish with offsets. The HR100+ Appraised Talisman adds Attack Boost plus Razor Sharp/Handicraft sharpness management.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Numinous Shroud α',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -6, water: 4, thunder: 11, ice: -7, dragon: -6 }
		},
		'ful-gore-crit': {
			name: 'Ful-Gore Critical Hammer',
			source: 'Game8',
			tier: 'craftable',
			desc: 'High-affinity crit machine: 2pc G. Fulgur β (Second Wind I) keeps Maximum Might running, 2pc Gore β adds Black Eclipse frenzy affinity — ceiling around 110%. Swap in Counter Charm III for offset-focused play at the cost of WEX levels.',
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Fulgur Vambraces α',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Second Wind I'],
			meal: 'Any Attack Up meal. Caprice Meal (Airy Egg) adds random +15 raw bursts.',
			res: { fire: -8, water: 6, thunder: 4, ice: -2, dragon: -10 }
		},
		'ful-zoh-lagi': {
			name: 'Ful-Zoh-Lagi Hammer',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Offense-leaning comfort: Earplugs, Constitution, Super Recovery, and Second Wind wrapped around Agitator 5 and WEX. Counterstrike is maxed to cash in on the TU2 offset buff every time you upswing through an attack.',
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Fulgur Vambraces α',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Numinous Greaves α',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Elemental Absorption 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' }
			],
			setSkills: ['Super Recovery I', 'Second Wind I'],
			meal: 'Any Attack Up meal. Tumbler Meal (Mud/Turbid Shrimp) adds dodge i-frames.',
			res: { fire: -9, water: 4, thunder: 12, ice: -7, dragon: -14 }
		},
		'rey-fulgur': {
			name: 'Rey-Fulgur Hammer',
			source: 'Game8',
			tier: 'craftable',
			desc: '3pc Rey Dau γ brings Thunderous Roar I and Guts (Tenacity); 2pc G. Fulgur β adds Second Wind for stamina. WEX 5 + Maximum Might 3 + Latent Power 2 can hit the 100% affinity cap with a raw safety net underneath.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'G. Fulgur Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Rey Sandcoil γ',
				Legs: 'G. Fulgur Greaves β',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Latent Power 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Second Wind I', 'Thunderous Roar I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -2, water: -8, thunder: 16, ice: -15, dragon: -4 }
		},
		'comfort-evasion': {
			name: 'Comfort AGI-WEX Evasion Hammer',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Charged Step-spam hit-and-run: AGI 5 + WEX 5 damage core under maximized Constitution, Evade Extender, and Evade Window. Trade Shockproof + 2 Physique decos for 3x Protection if you want Divine Blessing 3 instead.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Arkvulcan Coil β',
				Legs: 'Dahaad Shardgreaves β',
				Charm: 'Evasion Charm IV (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Evade Window 3', type: 'comfort' },
				{ name: 'Evade Extender 3', type: 'comfort' },
				{ name: 'Recovery Speed 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Super Recovery I'],
			meal: 'Tumbler Meal (Mud/Turbid Shrimp) adds i-frames to an already dodgy build.',
			res: { fire: -3, water: 6, thunder: 1, ice: 2, dragon: -16 }
		},
		'gore-evade-window': {
			name: 'Release Meta Gore Set',
			source: 'Google Doc',
			tier: 'craftable',
			desc: 'The doc\'s "crit dead" raw set: 4pc Gore for Black Eclipse II frenzy affinity, WEX 5, and Evade Window 3, with five flex Lv1 comfort slots. Gameplan: focus the head and lock the monster down as much as possible.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Gore Mail α',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Evade Window 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse II', 'Adrenaline (Scale Layering)'],
			meal: 'Meat base (+2 raw); Caprice Meal (Airy Egg) adds random +15 raw bursts.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc panels omit resistances.
		},

		// --- HR 100+ builds ---
		'dosha-gogma': {
			name: 'Dosha Gogma Guts Hammer (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Game8's top TU4 build: AT Arkveld helm with Gogmazios and Doshaguma pieces stacks Powerhouse, Second Wind, Mutual Hostility, and Guts on an Attack Boost 5 + AGI/WEX core. Gogma Artian with Fulgur Anjanath's Will.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Doshaguma Coil β (Transcend)',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Golden Age Charm (Appraised: Attack Boost 3 + Agitator 1)'
			},
			skills: [
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Charge Up 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Peak Performance 2', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility I', 'Second Wind I', 'Powerhouse I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -4, water: 4, thunder: -2, ice: 6, dragon: -9 }
		},
		'gogma-hostility': {
			name: 'AGI-WEX Gogma II Hammer (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Comfort-oriented Gogma build: Mutual Hostility II grants a temporary barrier while Second Wind manages stamina, all with Agitator and Weakness Exploit still maxed plus Earplugs and Divine Blessing underneath.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'G. Fulgur Mail β (Transcend)',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Charge Up 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Second Wind I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: -11, water: 8, thunder: 1, ice: 6, dragon: -20 }
		},
		'gogma-lagi': {
			name: 'Gogma-Lagi AGI-WEX Hammer (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Gogma Artian (Leviathan's Fury roll) plus Armor Transcending stacks Guts, Second Wind, and Azure Bolt affinity onto an Attack Boost 5 + Agitator 5 core, with Quick Sheathe and Evade Extender keeping you mobile.",
			armor: {
				Head: 'G. Fulgur Helm β (Transcend)',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (Attack Boost 3 + WEX 1) / Exploiter Charm II'
			},
			skills: [
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Charge Up 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Second Wind I', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -4, water: 4, thunder: 3, ice: 0, dragon: -9 }
		},
		'doshath-guts': {
			name: 'Doshath Guts',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "The doc's strongest set: Latent Power 5 + Agitator 5 raw with five set/group bonuses at once — Guts, Second Wind, Thunderous Roar, Mutual Hostility, and Powerhouse. Gogma Artian rolled with Lord's Soul + Doshaguma's Might.",
			armor: {
				Head: 'G. Fulgur Helm β (Transcend)',
				Chest: 'Rey Sandmail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Rey Sandcoil γ',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Counter Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Latent Power 5', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Peak Performance 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Earplugs 2', type: 'comfort' }
			],
			setSkills: [
				'Guts (Tenacity)',
				'Second Wind I',
				'Thunderous Roar I',
				'Mutual Hostility I',
				'Powerhouse I'
			],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc panels omit resistances.
		},
		'fulgore-guts': {
			name: 'Fulgore Guts',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "The doc's raw alternative: trades Latent Power for Gore frenzy affinity and Jin Dahaad's Binding Counter, keeping Guts and Second Wind. The ArkFulgore variant swaps to Arkvulcan γ pieces with Hasten Recovery if you dislike this spread.",
			armor: {
				Head: 'G. Fulgur Helm β (Transcend)',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gore Coil α',
				Legs: 'Dahaad Shardgreaves γ',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Foray 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Second Wind I', 'Binding Counter I', 'Black Eclipse I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc panels omit resistances.
		},
		'ful-scorcher': {
			name: 'FulScorcher',
			source: 'Google Doc',
			tier: 'meta',
			rank: 'hr100',
			desc: 'Element set for element-weak monsters: 4pc Gogmazios with G. Rathalos helm stacks Scorcher I and Mutual Hostility II on a fire-rolled Gogma Artian. Heavily focuses the triangle combo — skip Big Bang and spin attacks.',
			armor: {
				Head: 'G. Rathalos Helm β (Transcend)',
				Chest: 'Gogmazios Mail β',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Fire Attack 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Aquatic/Oilsilt Mobility 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Scorcher I', 'Second Wind I'],
			meal: 'Any Attack Up meal. Caprice Meal (Airy Egg) adds random +15 raw bursts.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc panels omit resistances.
		}
	},
	artianWeapons: [
		{
			name: 'Moteurvankel',
			variant: 'standard',
			steps: [
				'Craft with Blast parts (Paralysis also great) — ③③③ slots',
				'Reinforce: 3x Attack +5, 1x Affinity +5, 1x Sharpness +30 (doc: any Attack/Element mix plus Sharpness; dodge Affinity rolls)',
				'Decos: Critical Jewel III + Mastery + a Focus/Handicraft or Rzr Sharp/Handicraft hybrid',
				'Swap Rzr Sharp/Handicraft for Grinder/Attack to hit Attack Boost 5 if sharpness is covered'
			]
		},
		{
			name: 'Bound Admonition',
			variant: 'gogma',
			steps: [
				'Convert with Attack Focus (-15% affinity — amend reinforcements toward Affinity to offset)',
				"Reroll set + group skills to match your build: Fulgur Anjanath's Will, Gogmapocalypse, or Leviathan's Fury + Lord's Soul",
				'Reinforce: 3x Attack +5, Affinity +10 (EX — high priority), Sharpness +30',
				"Doc: roll on Attack and don't sweat Lord's Soul — the main set-bonus skill matters most"
			]
		}
	],
	weapons: [
		{
			element: 'Dragon',
			name: 'Blazing Uria',
			info: 'Zoh Shia · Whiteflame Torrent 1 · White Sharpness · Best non-Artian raw',
			cls: 'dragon'
		},
		{
			element: 'Paralysis',
			name: 'Binder Mace',
			info: '250 Paralysis · Stamina Thief 3 · Exhaust + KO lockdown',
			cls: 'raw'
		}
	],
	tips: [
		{
			title: 'Head Uptime Beats Slugger',
			lines: [
				'Hammer lives on the head — Weakness Exploit is always free affinity',
				'Skip Slugger and Charge Up: stun skills only speed up KOs, not add them, and can exhaust your KOs early',
				'Skip Flayer too — wounds have a per-part cooldown and you mostly hit one part'
			]
		},
		{
			title: 'Offset Attacks (TU2 Buff)',
			lines: [
				'Every move with "Upswing" in its name can offset — fish with Side Smash combos at the head',
				'A successful offset unlocks Follow-up Spin and the huge Follow-up Spinslam',
				'Offsets and power clashes trigger Counterstrike (+25 raw) — most builds max it'
			]
		},
		{
			title: 'Stamina & Maximum Might',
			lines: [
				'The Overhead Smash combo costs no stamina, so Maximum Might stays up',
				'Second Wind adds a spare stamina bar for Charging Step and charges',
				'Mantles: Corrupted for damage windows; Evasion (or Frenzy) for dodge-heavy play'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Hammer hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Impact Damage', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Forgiveness', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Head-lock KO pressure — Counterstrike offsets + Guts raw',
							value: 'guts-counter'
						},
						{
							label: 'Crit machine — frenzy affinity, ~110% ceiling',
							value: 'ful-gore-crit'
						}
					]
				},
				balanced: {
					text: 'How do you want to keep damage flowing?',
					options: [
						{
							label: 'Affinity cap + Guts and Thunderous Roar safety net',
							cssClass: 'balanced',
							value: 'rey-fulgur'
						},
						{
							label: 'Earplugs + Super Recovery on an AGI/WEX core',
							cssClass: 'balanced',
							value: 'ful-zoh-lagi'
						}
					]
				},
				comfort: {
					text: 'What kind of forgiveness?',
					options: [
						{
							label: 'Charged Step evasion — dodge, reposition, retry',
							cssClass: 'comfort',
							value: 'comfort-evasion'
						},
						{
							label: 'Evade Window frenzy raw with flex comfort slots',
							cssClass: 'comfort',
							value: 'gore-evade-window'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Hammer hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Impact Damage', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Forgiveness', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Powerhouse offsets — AT Arkveld + Gogma raw',
							value: 'dosha-gogma'
						},
						{
							label: "Latent Power 5 — the doc's strongest raw set",
							value: 'doshath-guts'
						},
						{
							label: 'Elemental triangle combos — fire Scorcher Gogma',
							value: 'ful-scorcher'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Attack Boost 5 + Guts with Azure Bolt affinity',
							cssClass: 'balanced',
							value: 'gogma-lagi'
						},
						{
							label: 'Frenzy + Binding Counter — Gore and Dahaad raw',
							cssClass: 'balanced',
							value: 'fulgore-guts'
						}
					]
				},
				comfort: {
					text: 'How do you want to stay safe?',
					options: [
						{
							label: 'Mutual Hostility II barrier + Earplugs + Divine Blessing',
							cssClass: 'comfort',
							value: 'gogma-hostility'
						},
						{
							label: 'Quick Sheathe + Evade Extender on a Guts core',
							cssClass: 'comfort',
							value: 'gogma-lagi'
						}
					]
				}
			}
		}
	},
	referenceKey: 'hammer',
	sourcesText:
		'Game8 Hammer Builds (TU4/v1.041) and the "Hammer Whylds Meta — Crit Dead FR" Google Doc. The doc\'s changelog stops at TU2 (its meta sets are Gogma-era) and its builds do not list elemental resistances — those values are unverified placeholders.',
	display: {
		weaponListTitle: 'Non-Artian Hammers',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
