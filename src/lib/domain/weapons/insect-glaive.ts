import type { WeaponData } from '../types';

export const insectGlaive: WeaponData = {
	builds: {
		// --- HR 50–100 builds (pre-TU4) ---
		'zoh-frenzy': {
			name: 'Zoh Shia Frenzy',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Top non-Artian IG. 2pc Zoh Shia (Super Recovery) + 2pc Gore (Black Eclipse) + G. Arkveld arms. Con 5, Coalescence, Antivirus. Smooth ground combos.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Coalescence 2', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Recovery Speed 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Super Recovery I', 'Ward of Wyveria'],
			meal: 'Con 5 = free meal. Sild Garlic (Moxie) or Airy Egg.',
			res: { fire: -6, water: 10, thunder: 1, ice: 4, dragon: -14 }
		},
		// Retired from the live Game8 page (last modified 2026-03-10) — kept for
		// flow continuity; loadout unverifiable against current sources.
		'lords-soul-lagi': {
			name: "Lord's Soul Lagi",
			source: 'Game8',
			tier: 'craftable',
			desc: "Rey γ + Nu Udra γ + Lagiacrus. Lord's Soul = Guts + 5% ATK. WEX 5, Max Might 3, Evade Extender 2. Best damage-to-safety for hard content.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Lagiacrus Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Agitator 4', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) for double anti-OHKO with Guts.',
			res: { fire: -2, water: -2, thunder: 9, ice: -9, dragon: -4 }
		},
		'ful-zoh-comfort': {
			name: 'Ful-Zoh Comfort',
			source: 'Game8',
			tier: 'craftable',
			desc: '2pc G. Fulgur = extra stamina gauge + Second Wind. Great Max Might uptime. 2pc Numinous = Super Recovery. Smooth vaulting and dodging.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'G. Fulgur Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Numinous Overlay β',
				Legs: 'G. Fulgur Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Critical Eye 3', type: 'dmg' },
				{ name: 'Coalescence 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Constitution 4', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Super Recovery I', 'Second Wind I'],
			meal: 'Droolshroom (Black Belt Lo) with Con 4.',
			res: { fire: -6, water: 0, thunder: 12, ice: -9, dragon: -12 }
		},
		'rey-gore-mm': {
			name: 'Rey-Gore Agitator MM',
			source: 'Game8',
			tier: 'craftable',
			desc: '3pc Rey γ + 2pc Gore. Latent Power + Max Might rewards clean play. Guts (Tenacity) group skill as an OHKO safety net. For experienced players.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Gore Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Rey Sandcoil γ',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Latent Power 2', type: 'dmg' },
				{ name: 'Weakness Exploit 2', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Constitution 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Thunderous Roar I', 'Guts (Tenacity)'],
			meal: 'Droolshroom or Sild Garlic depending on Con level.',
			res: { fire: -4, water: 0, thunder: 10, ice: -5, dragon: -2 }
		},
		'lagia-gore': {
			name: 'Lagia-Gore Critical',
			source: 'Game8 / Icy Veins',
			tier: 'craftable',
			desc: 'Accessible starter endgame. 2pc Lagi + 2pc Gore. Easy farm, consistent crits. Azure Bolt gives free thunder procs.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' },
				{ name: 'Earplugs 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Azure Bolt I'],
			meal: 'Flexible — Sild Garlic or Airy Egg.',
			res: { fire: -12, water: 12, thunder: 8, ice: 2, dragon: -10 }
		},

		// --- HR 100+ builds (TU4) ---
		'arkveld-gore-affinity': {
			name: 'Arkveld-Gore Affinity',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: '100% affinity when WEX, Agitator, Max Might, and Antivirus are active. Consistent crit damage with Hasten Recovery and Second Wind for sustain.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'G. Fulgur Mail β',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gore Coil β',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Blight Resistance 2', type: 'comfort' }
			],
			setSkills: ['Hasten Recovery I', 'Black Eclipse I', 'Second Wind I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) for double anti-OHKO with Guts, or Droolshroom (Black Belt Lo) with Con 2.',
			res: { fire: -3, water: 5, thunder: -1, ice: 2, dragon: -14 }
		},
		'fulgur-odo-guts': {
			name: 'Fulgur-Odo Guts',
			source: 'Game8',
			tier: 'craftable',
			rank: 'hr100',
			desc: 'Raw and affinity build using Armor Transcendence. Divine Blessing 3 + Quick Sheathe 3 for comfort. Second Wind + Burst Boost + Ward of Wyveria synergy.',
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Udra Miremail γ',
				Arms: 'G. Ebony Braces β',
				Waist: 'G. Ebony Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (Crit Eye 1 + MM 1 + CS 1) / Mighty Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Critical Eye 2', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Second Wind I', 'Burst Boost I', 'Guts (Tenacity)', 'Ward of Wyveria'],
			meal: 'Sild Garlic (Moxie) for triple safety (Guts + Moxie + Divine Blessing).',
			res: { fire: -1, water: -7, thunder: -5, ice: -6, dragon: 6 }
		},
		'gogma-guts': {
			name: 'Gogmazios Guts',
			source: 'Game8',
			tier: 'meta',
			rank: 'hr100',
			desc: 'Elemental build centered on Mutual Hostility II for massive element damage and a temporary barrier. Strong and comfortable with Divine Blessing 3 and Earplugs 2.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Critical Element 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) for double anti-OHKO with Guts.',
			res: { fire: -7, water: 3, thunder: 4, ice: 7, dragon: -15 }
		},
		'max-raw': {
			name: 'Max Raw',
			source: 'Game8',
			tier: 'craftable',
			rank: 'hr100',
			desc: 'Pure raw damage with Attack Boost 5 and Razor Sharp 3 for sharpness. Divine Blessing 3 for safety. Solid against any monster regardless of element.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Udra Miremail γ',
				Arms: 'G. Ebony Braces β',
				Waist: 'Dahaad Shardcoil γ',
				Legs: 'G. Ebony Greaves β',
				Charm: 'Appraised (Attack Boost 3 + Agitator 1) / Challenger Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Agitator 4', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Bind Resistance 2', type: 'comfort' },
				{ name: 'Evade Extender 1', type: 'comfort' },
				{ name: 'Earplugs 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Burst Boost I', 'Azure Bolt I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) for double anti-OHKO, or Airy Egg (Caprice) for damage.',
			res: { fire: -5, water: -6, thunder: -1, ice: -2, dragon: 5 }
		},
		'fulgur-craftable': {
			name: 'Fulgur Craftable',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Fulgur 2pc bonus with Gogma gloves for Agi 5 and Burst. Latent Power compensates for affinity. Craftable charm, no weapon rolls needed. Maximum Might is overcapped (effective 3).',
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Rey Sandcoil γ',
				Legs: 'Dahaad Shardgreaves γ',
				Charm: 'Exploiter Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Latent Power 2', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Foray 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Earplugs 1', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", "Fulgur Anjanath's Will (Second Wind I)"],
			meal: 'Sild Garlic (Moxie) for Guts + Moxie double safety.',
			// Unverified placeholder totals — the Google Doc's Math Hunter panels
			// publish resistances only with meal buffs active; armor-only totals
			// are not published anywhere.
			res: { fire: -3, water: 2, thunder: -4, ice: -2, dragon: -1, unverified: true }
		},
		'gore-general': {
			name: 'Gore General',
			source: 'Google Doc',
			tier: 'craftable',
			rank: 'hr100',
			desc: "Go-to when Gore Magala's Tyranny is rolled on the Gogma weapon. Resentment 3 + Counterstrike 3 for strong damage. Requires weapon set bonus roll.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Udra Mirebraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Sororal Boots α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Resentment 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Partbreaker 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Earplugs 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I (weapon roll)', "Lord's Soul", "Nu Udra's Mutiny"],
			meal: 'Sild Garlic (Moxie) or Airy Egg (Caprice).',
			// Unverified placeholder totals — the Google Doc's Math Hunter panels
			// publish resistances only with meal buffs active; armor-only totals
			// are not published anywhere.
			res: { fire: -5, water: 4, thunder: 3, ice: -2, dragon: -8, unverified: true }
		},
		'lagia-craftable': {
			name: 'Lagia Craftable',
			source: 'Google Doc',
			tier: 'craftable',
			rank: 'hr100',
			desc: "Standard Lagia 2pc craftable with AT Arkveld helm. No weapon rolls needed. Solid baseline with Leviathan's Fury. Use old Lagia template if no AT Arkveld yet.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Azure Age Sleeve α',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Adrenaline Rush 1', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Blight Resistance 2', type: 'comfort' },
				{ name: 'Constitution 1', type: 'comfort' },
				{ name: 'Earplugs 1', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", "Leviathan's Fury", "Arkveld's Hunger"],
			meal: 'Sild Garlic (Moxie) or Airy Egg (Caprice).',
			// Unverified placeholder totals — the Google Doc's Math Hunter panels
			// publish resistances only with meal buffs active; armor-only totals
			// are not published anywhere.
			res: { fire: -5, water: 4, thunder: 2, ice: -4, dragon: -8, unverified: true }
		},
		resentment: {
			name: 'Resentment Craftable',
			source: 'Google Doc',
			tier: 'craftable',
			rank: 'hr100',
			desc: 'Lagia variant stacking Resentment 3 via Udra 2pc. Only needs 30% uptime to beat standard Lagia. Strongest craftable option with good Resentment uptime.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Udra Miregreaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Resentment 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Airborne 1', type: 'dmg' },
				{ name: 'Critical Eye 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' },
				{ name: 'Earplugs 1', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", "Leviathan's Fury", "Nu Udra's Mutiny"],
			meal: 'Sild Garlic (Moxie) or Airy Egg (Caprice).',
			// Unverified placeholder totals — the Google Doc's Math Hunter panels
			// publish resistances only with meal buffs active; armor-only totals
			// are not published anywhere.
			res: { fire: -8, water: 6, thunder: 5, ice: -3, dragon: -10, unverified: true }
		}
	},
	artianWeapons: [
		{
			name: 'Diprielcha',
			variant: 'standard',
			steps: [
				'Craft with 3 same-element parts (Attack infusion)',
				'Reinforce: target 2 Atk EX, 2 Atk III, 1 Sharpness EX',
				'Priority: Sharpness (1) > Attack > Affinity >>> Element',
				'At most 1 Affinity bonus or infusion — rest goes to Attack'
			]
		},
		{
			name: 'Limbo Llor',
			variant: 'gogma',
			steps: [
				'Element Focus for Gogma. Same reinforcement targets as standard',
				'Target: 2 Atk EX, 2 Atk III, 1 Sharpness EX',
				'IG is still generally a raw-focused weapon',
				"Active Skills: Gore Magala's Tyranny + Lord's Soul"
			]
		}
	],
	tips: [
		{
			title: 'Kinsects',
			lines: [
				'Foebeetle — best general pick (Kinsect Boost: Harvest Extract + Attack Boost: Weak Point Focus)',
				'Whispervesp — alternative trading triple-gather for top speed (Kinsect Boost: Fast Charge)',
				'Blunt kinsects preferred for KOs. Sever only gains a 1.1x kinsect attack multiplier'
			]
		}
	],
	weapons: [
		{
			element: 'Dragon',
			name: 'Blazing Katir',
			info: 'Zoh Shia · 150 · Whiteflame Torrent (50 flat dmg). Best non-Artian all-rounder.',
			cls: 'dragon'
		},
		{
			element: 'Thunder',
			name: 'Fractal Glaive Boltlagia',
			info: 'Lagiacrus · 300 · Focus 2, Convert Thunder Res.',
			cls: 'thunder'
		},
		{
			element: 'Dragon',
			name: 'Leumundsgift',
			info: 'Gore Magala · 200 · Coalescence 2. Frenzy synergy.',
			cls: 'dragon'
		},
		{
			name: 'Inspired Ywain',
			info: 'Seregios · 15% Aff · Bladescale Honing.',
			cls: 'raw'
		}
	],
	flow: {
		hr50: {
			title: 'How do you want your glaive to feel?',
			q1Text: 'What matters most to you?',
			q1Options: [
				{ label: 'High Damage Output', value: 'damage' },
				{ label: 'Smooth Flow & Mobility', cssClass: 'balanced', value: 'flow' },
				{ label: 'Safety & Survivability', cssClass: 'comfort', value: 'safety' }
			],
			q2: {
				damage: {
					text: "What's your damage philosophy?",
					options: [
						{
							label: 'Frenzy cycle (Antivirus + Coalescence + Con 5)',
							value: 'zoh-frenzy'
						},
						{
							label: "Lord's Soul + Guts (raw + safety net)",
							value: 'lords-soul-lagi'
						},
						{ label: 'Latent Power spikes (burst windows)', value: 'rey-gore-mm' }
					]
				},
				flow: {
					text: 'What kind of mobility?',
					options: [
						{
							label: 'Extra stamina + Second Wind (never run dry)',
							cssClass: 'balanced',
							value: 'ful-zoh-comfort'
						},
						{
							label: 'Evade Extender + clean Max Might',
							cssClass: 'balanced',
							value: 'lords-soul-lagi'
						},
						{
							label: 'Easy farm, consistent crits',
							cssClass: 'balanced',
							value: 'lagia-gore'
						}
					]
				},
				safety: {
					text: 'How much protection?',
					options: [
						{
							label: 'Guts + Moxie double safety',
							cssClass: 'comfort',
							value: 'lords-soul-lagi'
						},
						{
							label: 'Super Recovery + Second Wind sustain',
							cssClass: 'comfort',
							value: 'ful-zoh-comfort'
						},
						{
							label: 'Super Recovery + Con 5',
							cssClass: 'comfort',
							value: 'zoh-frenzy'
						}
					]
				}
			}
		},
		hr100: {
			title: 'How do you want your glaive to feel?',
			q1Text: 'What matters most to you?',
			q1Options: [
				{ label: 'Max Damage Output', value: 'damage' },
				{ label: 'Balanced Damage & Comfort', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Craftable & Accessible', cssClass: 'comfort', value: 'accessible' }
			],
			q2: {
				damage: {
					text: "What's your damage philosophy?",
					options: [
						{
							label: 'Gogma elemental (Mutual Hostility II barrier)',
							value: 'gogma-guts'
						},
						{
							label: '100% affinity (WEX + Agi + Max Might)',
							value: 'arkveld-gore-affinity'
						},
						{
							label: 'Gore weapon roll (Black Eclipse + Resentment)',
							value: 'gore-general'
						}
					]
				},
				balanced: {
					text: 'What kind of balance?',
					options: [
						{
							label: 'Transcendence (Divine Blessing + Quick Sheathe)',
							cssClass: 'balanced',
							value: 'fulgur-odo-guts'
						},
						{
							label: "Fulgur 2pc (Second Wind + Lord's Soul)",
							cssClass: 'balanced',
							value: 'fulgur-craftable'
						},
						{
							label: 'Max Raw (Attack Boost 5 + Razor Sharp)',
							cssClass: 'balanced',
							value: 'max-raw'
						}
					]
				},
				accessible: {
					text: 'Which craftable path?',
					options: [
						{
							label: 'Lagia 2pc (no weapon rolls needed)',
							cssClass: 'comfort',
							value: 'lagia-craftable'
						},
						{
							label: 'Resentment variant (30% uptime beats standard Lagia)',
							cssClass: 'comfort',
							value: 'resentment'
						}
					]
				}
			}
		}
	},
	referenceKey: 'ig',
	sourcesText:
		'Game8 IG Builds (TU4) and the Wilds IG Endgame Sets Google Doc (Qwas & Cerasium). Google Doc resistances are only published with meal buffs, so armor-only totals remain estimates. Includes Gogma/Artian builds.',
	display: {
		weaponListTitle: 'Non-Artian Insect Glaives',
		comfortTitle: 'Comfort / Mobility',
		weaponLayout: 'chip'
	}
};
