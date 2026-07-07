import type { WeaponData } from '../types';

export const dualBlades: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'zoh-gore-agitator': {
			name: 'Zoh Gore Agitator Burst DB',
			source: 'Game8',
			tier: 'craftable',
			desc: 'High elemental damage without Weakness Exploit — hit anywhere, no positioning worries. Super Recovery (Zoh Shia 2pc) regenerates HP to max so you rarely stop to heal. Elemental Tiltkreise; swap element per hunt.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'Gore Vambraces α',
				Waist: 'Numinous Overlay β',
				Legs: 'Mizutsune Greaves β',
				Charm: 'Chain Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Super Recovery I'],
			meal: 'Any Attack Up meal.',
			res: { fire: -8, water: 12, thunder: -1, ice: 5, dragon: -11 }
		},
		'regios-gore-agitator': {
			name: 'Regios Gore Agitator Burst DB',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Aggressive, balanced elemental Burst-Agitator build. Regios pieces improve Adrenaline Rush uptime — dodging rewards you with raw — while max Razor Sharp and Focus keep the blades spinning.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'Regios Vambraces β',
				Waist: 'Regios Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counterattack Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 4', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Marathon Runner 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ["Razor's Edge I", 'Black Eclipse I', 'Adrenaline'],
			meal: 'Any Attack Up meal.',
			res: { fire: 2, water: 8, thunder: -6, ice: 0, dragon: -6 }
		},
		'regios-lords-soul': {
			name: "Regios Lord's Soul Raw DB",
			source: 'Game8',
			tier: 'craftable',
			desc: "Raw-attack Tiltkreise with Adrenaline Rush 5 uptime — skip the per-element grind entirely. Lord's Soul grants +5% attack and a Guts safety net so you can stay aggressive.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Regios Coil β',
				Legs: 'Regios Greaves β',
				Charm: 'Counterattack Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Adrenaline Rush 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Marathon Runner 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Constitution 1', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', "Razor's Edge I", 'Guts (Tenacity)'],
			meal: 'Any Attack Up meal.',
			res: { fire: 8, water: -6, thunder: 6, ice: -13, dragon: 0 }
		},
		'sere-gore-comfy': {
			name: 'Seregios Gore Comfy DB',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Evasive comfort build: Evade Window 4 makes keeping Demon Boost Mode and Adrenaline Rush 5 active easy, while Marathon Runner 3 and Constitution 2 handle the stamina bill.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Gore Mail β',
				Arms: 'Regios Vambraces β',
				Waist: 'Regios Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counterattack Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Adrenaline Rush 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Evade Window 4', type: 'comfort' },
				{ name: 'Marathon Runner 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' }
			],
			setSkills: ["Razor's Edge I", 'Black Eclipse I', 'Adrenaline'],
			meal: 'Any Attack Up meal.',
			res: { fire: 2, water: 8, thunder: -6, ice: 0, dragon: -6 }
		},
		'focus-wex-comfy': {
			name: 'Focus WEX Comfy DB',
			source: 'Game8',
			tier: 'craftable',
			desc: "Comfy Focus build for easy Demon Gauge management: trades some elemental damage for Divine Blessing 3, Evade Window 3, and Master's Touch, with WEX 5 affinity carrying the damage.",
			armor: {
				Head: 'Arkvulcan Helm β',
				Chest: 'Arkvulcan Mail β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Convert Element 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Evade Window 3', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Hasten Recovery I', 'Black Eclipse I'],
			meal: 'Any Attack Up meal.',
			res: { fire: 2, water: 6, thunder: -5, ice: 4, dragon: -12 }
		},
		'lagi-gore-wex': {
			name: 'Lagi-Gore WEX Elemental DB',
			source: 'Google Doc',
			tier: 'craftable',
			desc: "The community doc's HR50-100 workhorse: one Gore/Lagiacrus/Regios shell for every element — craft a Tiltkreise per element and swap. WEX 5 + Critical Boost crit core with Gore Magala's Tyranny.",
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Lagiacrus Mail β',
				Arms: 'Regios Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Lagiacrus Greaves β',
				Charm: 'Critical Eye Lv 3 talisman (Counterattack Charm III fallback)'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Critical Eye 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Critical Element 1', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ["Gore Magala's Tyranny", "Leviathan's Fury", 'Scale Layering'],
			meal: "Hot Azuz Cuisine (shown on the doc's calculator panels).",
			res: { fire: 4, water: 20, thunder: 13, ice: 10, dragon: 4 }
		},

		// --- HR 100+ builds ---
		'arkveld-gammapocalypse': {
			name: 'Arkveld Gammapocalypse DB (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Aggressive TU4 flagship: Mutual Hostility II boosts element while enraged and Guts (Tenacity) covers your carts. Maxed Agitator + WEX with both stamina skills maxed — swap the Eternal Cusp element per hunt.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Gogmazios Mail α',
				Arms: 'Arkvulcan Vambraces γ',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Adrenaline Rush 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: 'Marathon Runner 3', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Dragon Resistance 3', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Guts (Tenacity)', 'Hasten Recovery I'],
			meal: 'Any Attack Up meal.',
			res: { fire: -8, water: 9, thunder: -2, ice: 9, dragon: -21 }
		},
		'gog-lords-soul': {
			name: "Gog Lord's Soul DB (TU4)",
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'The comfort-leaning TU4 elemental set: Guts (Tenacity) safety net, Adrenaline Rush 5 + Agitator 5, and Marathon Runner 3 + Stamina Surge 3 so Demon Mode never runs dry.',
			armor: {
				Head: 'Dahaad Shardhelm γ',
				Chest: 'Gogmazios Mail α',
				Arms: 'Dahaad Shardbraces γ',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Adrenaline Rush 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Foray 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Marathon Runner 3', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Guts (Tenacity)', 'Binding Counter I'],
			meal: 'Any Attack Up meal.',
			res: { fire: -18, water: 13, thunder: -2, ice: 13, dragon: -17 }
		},
		'udra-regios-lords-soul': {
			name: "Udra-Regios Lord's Soul DB",
			source: 'Game8',
			tier: 'craftable',
			rank: 'hr100',
			desc: 'No-Gogma-grind HR100 raw build: three Nu Udra γ pieces bring Guts (Tenacity), Constitution 5 solves stamina outright, and Adrenaline Rush 5 rewards aggressive dodging. Standard Tiltkreise, no Gogma weapon needed.',
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Regios Vambraces β',
				Waist: 'Udra Mirecoil γ',
				Legs: 'Regios Greaves β',
				Charm: 'Appraised (Attack Boost 3 + Agitator 1) / Marathon Charm III'
			},
			skills: [
				{ name: 'Adrenaline Rush 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Agitator 4', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Ambush 1', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' }
			],
			setSkills: ["Razor's Edge I", 'Guts (Tenacity)', 'Bad Blood I'],
			meal: 'Any Attack Up meal.',
			res: { fire: 23, water: -12, thunder: -6, ice: -1, dragon: 0 }
		},
		'eternal-cusp-endgame': {
			name: 'Eternal Cusp Endgame (per element)',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Team Leviathan's meta shell: identical armor for all five elements — build one Eternal Cusp per element (Element Focus, Gore Magala's Tyranny + Lord's Soul) and swap to match the monster. WEX 5 / Critical Boost crit core.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Gogmazios Mail β',
				Arms: 'Arkvulcan Vambraces γ',
				Waist: 'Sororal Coil α',
				Legs: 'Gogmazios Greaves β',
				Charm: 'Critical Eye Lv 3 talisman (Counterattack Charm III fallback)'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Burst 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Critical Eye 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: 'Peak Performance 2', type: 'dmg' },
				{ name: 'Agitator 1', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", "Arkveld's Hunger", 'Gogmapocalypse', "Gore Magala's Tyranny"],
			meal: "Hot Azuz Cuisine (shown on the doc's calculator panels).",
			res: { fire: 10, water: 17, thunder: 9, ice: 17, dragon: -3 }
		},
		'minds-eye-raw': {
			name: "Mind's Eye Raw DB",
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Raw-leaning variant for matchups with poor hit zones: Mind's Eye 3 adds x1.3 raw on any hit zone 44 and below — Gore Magala, Gravios, Arkveld wings. Agitator 5 + Burst 4 carry when element falls flat.",
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Gogmazios Mail α',
				Arms: 'Sororal Vambraces α',
				Waist: 'Dahaad Shardcoil γ',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Critical Eye Lv 3 talisman (Counterattack Charm III fallback)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Critical Eye 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: "Mind's Eye 3", type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Peak Performance 2', type: 'dmg' },
				{ name: 'Razor Sharp 2', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Partbreaker 1', type: 'dmg' },
				{ name: 'Bind Resistance 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Evade Extender 1', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", 'Gogmapocalypse', "Gore Magala's Tyranny"],
			meal: "Hot Azuz Cuisine (shown on the doc's calculator panels).",
			res: { fire: 8, water: 15, thunder: 10, ice: 20, dragon: 2 }
		},
		'second-wind-mm': {
			name: 'Second Wind Max Might DB',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "High-skill ceiling: G. Fulgur's Second Wind grants a bonus stamina bar that keeps Maximum Might 3 active through the Archdemon 'corrupted combo'. Needs ~70% MM uptime to beat the standard sets — highest payoff in the doc.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Gogmazios Mail β',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Rathalos Coil β',
				Legs: 'Dahaad Shardgreaves γ',
				Charm: 'Critical Eye Lv 3 talisman (Counterattack Charm III fallback)'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Adrenaline Rush 4', type: 'dmg' },
				{ name: 'Critical Boost 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Critical Eye 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Agitator 1', type: 'dmg' },
				{ name: 'Foray 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Speed Eating 2', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", "Fulgur Anjanath's Will", 'Gogmapocalypse', "Rathalos's Flare"],
			meal: 'Hot Azuz Cuisine; stamina-cap food and Dash Juice ease Maximum Might uptime.',
			res: { fire: 4, water: 19, thunder: 6, ice: 19, dragon: -7 }
		}
	},
	artianWeapons: [
		{
			name: 'Tiltkreise',
			variant: 'standard',
			steps: [
				'Elemental: 3x Affinity infusion; reinforce 4x Element +20 + Sharpness +30 — craft one per element you hunt',
				'Raw: 3x Attack infusion; reinforce 4x Attack +5 + Sharpness +30',
				'Elemental decos: Crit Elem/[Element] + Focus/[Element] + Rzr Sharp/[Element] Jwl [3]',
				'Raw decos: Critical Jewel III + Rzr Sharp/Handicraft + Focus/Handicraft [3]',
				'Doc HR50-100 shortcut: 2x Attack + 1x Sharpness reinforcements is enough — save the Oricalcite'
			]
		},
		{
			name: 'Eternal Cusp',
			variant: 'gogma',
			steps: [
				'Always take Element Focus — Attack and Affinity Focus are net DPS losses for DB',
				"Reroll until Gore Magala's Tyranny + Lord's Soul (doc meta); Game8 runs Gogmapocalypse + Lord's Soul",
				'Reinforce: Attack Boost EX + 2x Affinity Boost EX (doc) or 2x Element Boost EX (Game8)',
				'Craft one per element — the endgame armor shell is identical, only the weapon swaps'
			]
		}
	],
	weapons: [
		{
			element: 'Fire',
			name: 'Wyvern Sentinels',
			info: "Master's Touch innate · slot Critical Jewel III",
			cls: 'fire'
		},
		{
			element: 'Water',
			name: 'Evening Dusk',
			info: 'Best water pick · slot Rzr Sharp/Handicraft',
			cls: 'water'
		},
		{
			element: 'Water',
			name: 'Master Sabers',
			info: 'Focus 3 · comfort alternative',
			cls: 'water'
		},
		{
			element: 'Thunder',
			name: 'Fulgurtwins Guardiana',
			info: 'Best thunder pick on every Game8 list',
			cls: 'thunder'
		},
		{
			element: 'Ice',
			name: 'Precipice Ulokiem',
			info: 'Best ice pick · slot Rzr Sharp/Handicraft',
			cls: 'ice'
		},
		{
			element: 'Dragon',
			name: 'Hungerklauen',
			info: 'Best dragon pick · slot Rzr Sharp/Handicraft',
			cls: 'dragon'
		},
		{
			element: 'Dragon',
			name: 'Inspired Ywain',
			info: 'Focus 3 · comfort alternative',
			cls: 'dragon'
		},
		{
			name: 'Terrible Twins',
			info: "Bladescale Honing · best raw pick for Lord's Soul builds",
			cls: 'raw'
		}
	],
	tips: [
		{
			title: 'Element Matchups',
			lines: [
				'DB damage lives in matching element to the monster — Fire covers the most targets',
				'The endgame armor shell is identical across elements: swap the weapon, not the armor',
				'Water: Gravios is the easiest matchup · Dragon: Arkveld, Zoh Shia, the Raths',
				'Jin Dahaad is raw-favoured outside the head/iceplates — bring raw skills or swap mid-fight'
			]
		},
		{
			title: 'Stamina Management',
			lines: [
				'Constitution, Marathon Runner, and Stamina Surge are the comfort skills that matter',
				'Adrenaline Rush triggers on the same dodges as Perfect Dodge — Evade Window feeds both',
				'Dash Juice and stamina-cap food keep Demon Mode running without skill investment',
				'Power Prolonger extends Demon Boost Mode; Focus refills the Demon Gauge faster'
			]
		},
		{
			title: 'Sharpness (Wear & Tear)',
			lines: [
				'Every DB move has its own sharpness cost — Blade Dance wears the least',
				'The doc builds to a 330-hit minimum; Razor Sharp or Master’s Touch get you there',
				'Protective Polish is a valid substitute playstyle if you prefer it'
			]
		},
		{
			title: 'Corrupted Mantle',
			lines: [
				'Still the biggest DB damage boost: raw + affinity ramp, extra hits, faster Demon Gauge',
				'Evasion Mantle is worth considering for longer fights',
				'Mantles toggle without sheathing — hold and press to swap mid-combo'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Dual Blades hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Elemental DPS', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Stamina', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'How dedicated are you to the element grind?',
					options: [
						{
							label: 'One armor shell, one Tiltkreise per element — swap per hunt',
							value: 'lagi-gore-wex'
						},
						{
							label: 'No-WEX element — hit anywhere, Super Recovery sustain',
							value: 'zoh-gore-agitator'
						},
						{
							label: 'Skip elements entirely — raw Adrenaline Rush',
							value: 'regios-lords-soul'
						}
					]
				},
				balanced: {
					text: 'How do you want to keep damage flowing?',
					options: [
						{
							label: 'Burst + Agitator element with dodge-reward uptime',
							cssClass: 'balanced',
							value: 'regios-gore-agitator'
						},
						{
							label: "Raw Lord's Soul — Guts safety while staying aggressive",
							cssClass: 'balanced',
							value: 'regios-lords-soul'
						}
					]
				},
				comfort: {
					text: 'What kind of comfort?',
					options: [
						{
							label: 'Evade Window 4 + Marathon Runner — dodge everything',
							cssClass: 'comfort',
							value: 'sere-gore-comfy'
						},
						{
							label: 'Divine Blessing + easy gauge — soften every mistake',
							cssClass: 'comfort',
							value: 'focus-wex-comfy'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Dual Blades hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Elemental DPS', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Stamina', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Full meta Eternal Cusp — one shell, swap element per hunt',
							value: 'eternal-cusp-endgame'
						},
						{
							label: 'Mutual Hostility aggression with a Guts safety net',
							value: 'arkveld-gammapocalypse'
						},
						{
							label: 'Maximum Might + Second Wind — highest skill ceiling',
							value: 'second-wind-mm'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: "Mind's Eye raw — great when hit zones are bad",
							cssClass: 'balanced',
							value: 'minds-eye-raw'
						},
						{
							label: 'Skip the Gogma grind — craftable Udra-Regios raw',
							cssClass: 'balanced',
							value: 'udra-regios-lords-soul'
						}
					]
				},
				comfort: {
					text: 'How do you want to stay comfortable?',
					options: [
						{
							label: 'Guts + maxed stamina skills — Demon Mode never runs dry',
							cssClass: 'comfort',
							value: 'gog-lords-soul'
						},
						{
							label: 'Constitution 5 + Guts on craftable armor',
							cssClass: 'comfort',
							value: 'udra-regios-lords-soul'
						}
					]
				}
			}
		}
	},
	referenceKey: 'dual-blades',
	sourcesText:
		'Game8 Dual Blades Builds (TU4) and the Team Leviathan "MH Wilds Dual Blades Guide & Set Compilation" Google Doc (v1.041). Doc resistance totals are read from its Math Hunter calculator panels; per-element doc sets are collapsed into representative builds.',
	display: {
		weaponListTitle: 'Non-Artian Dual Blades',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
