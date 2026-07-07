import type { WeaponData } from '../types';

export const chargeBlade: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'zoh-wex-agitator': {
			name: 'Zoh Shia WEX Agitator CB',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Raw Savage Axe build with 90-110% potential affinity from Agitator, WEX, Antivirus, and Maximum Might. Offensive Guard, Guard, and Rapid Morph reward a reactive Perfect Guard playstyle; Super Recovery I sustains HP.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Rapid Morph 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 4', type: 'comfort' },
				{ name: 'Recovery Speed 3', type: 'comfort' },
				{ name: 'Guard 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Super Recovery I', 'Ward of Wyveria'],
			meal: 'Meat base (+2 raw); Black Belt (Hi) eases stamina for Maximum Might uptime.',
			res: { fire: -6, water: 10, thunder: 1, ice: 4, dragon: -14 }
		},
		'lords-soul-agitator': {
			name: "Lord's Soul Agitator CB",
			source: 'Game8',
			tier: 'craftable',
			desc: "Balanced build with Lord's Soul's consistent +5% attack until Guts triggers. Constitution 5 encourages block-and-punish rewarded by Offensive Guard; Latent Power is boosted by Thunderous Roar.",
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
				{ name: 'Critical Boost 4', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Razor Sharp 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: -7, water: 4, thunder: 13, ice: -8, dragon: -4 }
		},
		'guts-mixed': {
			name: 'Guts Mixed CB',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Mixed Gamma + Gore set taking both the raw boost from Guts (Tenacity) and the affinity from Black Eclipse. Evade Extender, Constitution, and Quick Sheathe keep it comfortable.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Gore Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gore Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Rapid Morph 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Guard 2', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Black Eclipse I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: -5, water: 6, thunder: 3, ice: -2, dragon: -2 }
		},
		'rey-dau-latent-burst': {
			name: 'Rey Dau Latent Power Burst CB',
			source: 'Game8',
			tier: 'craftable',
			desc: 'All-in affinity Savage Axe build: 4pc Rey Dau γ activates Thunderous Roar II to supercharge Latent Power 5, and Burst 5 procs easily in Savage Axe Mode. Trades comfort skills for offense.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Rey Sandcoil γ',
				Legs: 'Mizutsune Greaves β',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Latent Power 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar II', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: 0, water: -6, thunder: 13, ice: -11, dragon: -1 }
		},
		'zoh-comfort': {
			name: '4x Zoh Shia Comfort CB',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Agitator-WEX build with 4pc Zoh Shia for Super Recovery II passive healing; Recovery Speed and Divine Blessing 3 smooth out mistakes while the core damage skills stay intact.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Numinous Overlay β',
				Legs: 'Numinous Greaves β',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Rapid Morph 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Counterstrike 1', type: 'dmg' },
				{ name: 'Elemental Absorption 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Guard 2', type: 'comfort' },
				{ name: 'Recovery Speed 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Super Recovery II'],
			meal: 'Meat base (+2 raw); Moxie Meal (Sild Garlic) prevents one cart.',
			res: { fire: -6, water: 8, thunder: 7, ice: 0, dragon: -20 }
		},
		'gore-zoh-craftable': {
			name: '4pc Gore Zoh Shia CB',
			source: 'Google Doc',
			tier: 'craftable',
			desc: 'The best general-use craftable set: 4pc Gore (Black Eclipse II) plus Zoh Shia chest with the craftable Blazing Yirmiya — no Artian RNG needed. Use it to farm toward your first Gogmazios Charge Blade.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'Gore Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Weakness Exploit 2', type: 'dmg' },
				{ name: 'Whiteflame Torrent 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse II (4pc Gore)', 'Adrenaline (Scale Layering)'],
			meal: 'Meat base (+2 raw); Black Belt (Hi) eases stamina for Maximum Might uptime.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc images omit resistances.
		},

		// --- HR 100+ builds ---
		'gog-lords-soul': {
			name: "Gog Lord's Soul CB (TU4)",
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "High elemental damage with the Gogma Artian's Gogmapocalypse and Lord's Soul. Guts (Tenacity) survives one lethal hit, Mutual Hostility II adds elemental damage and a barrier, and Divine Blessing 3 softens the rest.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Gogmazios Mail α',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Power Prolonger 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' },
				{ name: 'Guard Up 1', type: 'comfort' }
			],
			setSkills: [
				'Gogmapocalypse',
				"Lord's Soul",
				'Mutual Hostility II',
				'Guts (Tenacity)',
				'Thunderous Roar I'
			],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: -12, water: 5, thunder: 8, ice: 3, dragon: -15 }
		},
		'gog-elemental-aed': {
			name: 'Gog Magala Elemental CB (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "AED-focused all-in elemental build: TU4's raised element cap plus Burst 5, Coalescence 3, and Elemental Absorption make phials hit tremendously hard. No Guard or Offensive Guard — pure aggression.",
			armor: {
				Head: 'Gogmazios Helm α',
				Chest: 'Gogmazios Mail α',
				Arms: 'Gore Vambraces β',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gore Greaves β',
				Charm: 'Convert Charm II'
			},
			skills: [
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Convert Element 2', type: 'dmg' },
				{ name: 'Elemental Absorption 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'comfort' },
				{ name: 'Fire Resistance 3', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Constitution 1', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' },
				{ name: 'Guard Up 1', type: 'comfort' }
			],
			setSkills: ['Gogmapocalypse', 'Mutual Hostility II', 'Black Eclipse I'],
			meal: 'Meat base (+2 raw); Caprice Meal (Hi) for random +15 raw bursts.',
			res: { fire: -16, water: 15, thunder: -2, ice: 13, dragon: -17 }
		},
		'arkveld-savage-axe': {
			name: 'Arkveld Gamma Savage Axe CB (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Game8's comfy Lord's Soul build for Savage Axe players: high affinity with Critical Boost 3, plus Earplugs 2, Evade Extender 2, and Hasten Recovery to stay aggressive. Runs the raw Attack Focus Gogma Artian.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'Arkvulcan Vambraces γ',
				Waist: 'Sororal Coil α',
				Legs: 'Orion Boots α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Dragon Resistance 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: [
				"Gore Magala's Tyranny",
				'Hasten Recovery I',
				'Guts (Tenacity)',
				'Black Eclipse I'
			],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: 6, water: 4, thunder: -1, ice: 7, dragon: 17 }
		},
		'omega-lords-soul': {
			name: "Omega Lord's Soul CB",
			source: 'Game8',
			tier: 'craftable',
			rank: 'hr100',
			desc: 'Multiplayer-minded: Omega Resonance grants +20% affinity or +10 attack when hunting with others. Maximum Might, Latent Power, and Agitator stack up to 135% affinity on the standard Artian.',
			armor: {
				Head: 'Omega Ear Cuffs α',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Omega Accessory α',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (Attack Boost 3 + WEX 1) / Counter Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Weakness Exploit 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Resonance I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: 5, water: 0, thunder: -1, ice: -2, dragon: -4 }
		},
		'ele-savage-axe': {
			name: 'Elemental Savage Axe (Doc Meta)',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'The doc\'s flagship TU4 set: "Elemental Savage Axe is king, beating raw in all matchups except Arkveld." Gogmapocalypse II plus Burst 5 and Coalescence; craft one Element Focus Promised Abyss per element.',
			armor: {
				Head: 'Sororal Earrings α',
				Chest: 'Gore Mail β',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Agitator Lv. 3 Talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Element Attack 3 (match monster)', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Rapid Morph 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Flayer 1', type: 'dmg' },
				{ name: 'Evade Window 2', type: 'comfort' }
			],
			setSkills: ['Gogmapocalypse II', "Gore Magala's Tyranny I"],
			meal: 'Meat base (+2 raw); Black Belt (Hi) eases stamina for Maximum Might uptime.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc images omit resistances.
		},
		'ele-saed': {
			name: 'Elemental SAED (Doc Meta)',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Max-element SAED set stacking several element sources to hold the elemental cap; Focus 3 speeds charging and Earplugs 2 ignores roars. For Dragon matchups the doc swaps toward Convert Element 3.',
			armor: {
				Head: 'Gogmazios Helm α',
				Chest: 'Gogmazios Mail β',
				Arms: 'G. Rathalos Vambraces β',
				Waist: 'Gogmazios Coil β',
				Legs: 'Mizutsune Greaves α',
				Charm: 'Agitator Lv. 3 Talisman'
			},
			skills: [
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Agitator 4', type: 'dmg' },
				{ name: 'Peak Performance 4', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Element Attack 3 (match monster)', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Elemental Absorption 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Aquatic/Oilsilt Mobility 1', type: 'comfort' }
			],
			setSkills: ['Gogmapocalypse II', "Mizutsune's Prowess I", "Rathalos's Flare I"],
			meal: 'Meat base (+2 raw); Caprice Meal (Hi) for random +15 raw bursts.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc images omit resistances.
		}
	},
	artianWeapons: [
		{
			name: 'Chrono Gear',
			variant: 'standard',
			steps: [
				'Craft with 3x Paralysis parts (Attack infusion x3; matching parts add Elemental Attack +30)',
				'Reinforce: 4x Attack +5, 1x Sharpness +30',
				'Decos: Guardian/Handicraft + Quickswitch/Ironwall + Magazine/Ironwall; crit builds swap in Critical Jewel III'
			]
		},
		{
			name: 'Promised Abyss',
			variant: 'gogma',
			steps: [
				'Convert your Chrono Gear after slaying Gogmazios — reinforcements reroll afterwards, so initial rolls do not matter',
				'Element (Savage Axe/SAED): 3x element infusion + Element Focus; reroll to 2x Element Boost EX, 2x Element Boost II, 1x Sharpness/Ammo EX — craft one per element',
				'Raw (vs Arkveld): 3x Blast or Paralysis infusion + Attack Focus; 2x Attack EX, 1x Attack III, 2x Sharpness/Ammo EX',
				"Set skill: Gogmapocalypse for element; Gore Magala's Tyranny or Jin Dahaad's Revolt for raw"
			]
		}
	],
	weapons: [
		{
			element: 'Dragon',
			name: 'Blazing Yirmiya',
			info: 'Zoh Shia · Whiteflame Torrent · Best craftable',
			cls: 'dragon'
		},
		{
			name: 'Rebellious Charger',
			info: 'Seregios · 25% Affinity · Bladescale Honing',
			cls: 'raw'
		},
		{
			element: 'Water',
			name: 'Final Fieldblade',
			info: 'Best craftable water (doc)',
			cls: 'water'
		},
		{
			element: 'Thunder',
			name: 'Lagia Storm I',
			info: 'Lagiacrus · Best craftable thunder (doc)',
			cls: 'thunder'
		},
		{
			element: 'Paralysis',
			name: 'Lala Eumenophor',
			info: 'Lala Barina · Best craftable paralysis (doc)',
			cls: 'raw'
		}
	],
	tips: [
		{
			title: 'Savage Axe vs SAED',
			lines: [
				'Elemental Savage Axe is the TU4 king — it beats raw in every matchup except Arkveld',
				'SAED got buffed: phials hit harder after AED/AEDF, so burst builds are viable again',
				'Raw Savage Axe prefers the ED loop; elemental Savage Axe prefers the AED loop'
			]
		},
		{
			title: 'Guard Points & Perfect Guards',
			lines: [
				'Perfect Guard is a subset of Guard Point — both trigger Offensive Guard',
				'Exit Axe Mode via Elemental Roundslash to guard-point an incoming attack',
				'A Perfect Guard grants instant Savage Axe activation — play reactively'
			]
		},
		{
			title: 'Phial Management',
			lines: [
				'Load Shells 2 overcharges phials with red charge — always worth running',
				'Each overcharged phial adds 12s of Shield Charge, up to 180s total',
				'Charge shield fast by cancelling AED into Elemental Roundslash'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Charge Blade hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Phial Damage', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Guard Points', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Savage Axe Burst — Latent Power affinity spikes',
							value: 'rey-dau-latent-burst'
						},
						{
							label: 'Best craftable — 4pc Gore crit, farm toward Gogma',
							value: 'gore-zoh-craftable'
						},
						{
							label: 'AGI + WEX raw with Perfect Guard rewards',
							value: 'zoh-wex-agitator'
						}
					]
				},
				balanced: {
					text: 'How do you want to keep damage flowing?',
					options: [
						{
							label: "Lord's Soul + Constitution — block and punish",
							cssClass: 'balanced',
							value: 'lords-soul-agitator'
						},
						{
							label: 'Guts + Black Eclipse — safety net with crit',
							cssClass: 'balanced',
							value: 'guts-mixed'
						}
					]
				},
				comfort: {
					text: 'What kind of forgiveness?',
					options: [
						{
							label: 'Guard-point reactive — Offensive Guard + Guard 2',
							cssClass: 'comfort',
							value: 'zoh-wex-agitator'
						},
						{
							label: 'Passive healing — 4pc Zoh Shia Super Recovery',
							cssClass: 'comfort',
							value: 'zoh-comfort'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Charge Blade hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Phial Damage', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Guard Points', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Savage Axe or SAED?',
					options: [
						{
							label: 'Elemental Savage Axe — the TU4 king (doc meta)',
							value: 'ele-savage-axe'
						},
						{
							label: 'Elemental SAED — max-element burst phials',
							value: 'ele-saed'
						},
						{
							label: "Raw Savage Axe — Lord's Soul crit (best vs Arkveld)",
							value: 'arkveld-savage-axe'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Guts + Gogmapocalypse elemental all-rounder',
							cssClass: 'balanced',
							value: 'gog-lords-soul'
						},
						{
							label: 'AED loop — Burst 5 + Coalescence aggression',
							cssClass: 'balanced',
							value: 'gog-elemental-aed'
						},
						{
							label: 'Multiplayer — Omega Resonance affinity share',
							cssClass: 'balanced',
							value: 'omega-lords-soul'
						}
					]
				},
				comfort: {
					text: 'How do you want to stay safe?',
					options: [
						{
							label: 'Comfy Savage Axe — Earplugs + Hasten Recovery + Guts',
							cssClass: 'comfort',
							value: 'arkveld-savage-axe'
						},
						{
							label: 'Divine Blessing + Guts on the elemental meta',
							cssClass: 'comfort',
							value: 'gog-lords-soul'
						}
					]
				}
			}
		}
	},
	referenceKey: 'charge-blade',
	sourcesText:
		'Game8 Charge Blade Builds (TU4/v1.041) and the MH Wilds Charge Blade Guide Google Doc (timmy & jerrynt, TU4.5). Google Doc builds do not list elemental resistances — those values are unverified placeholders.',
	display: {
		weaponListTitle: 'Non-Artian Charge Blades',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
