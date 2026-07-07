import type { WeaponData } from '../types';

export const gunlance: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'rey-zoh-guts': {
			name: 'Rey Dau Gamma-Zoh Shia GL',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Balanced raw shelling: Agitator 5 + Burst 5 with a near-permanent +5% attack from Guts (Tenacity). Zoh Shia pieces add Super Recovery passive healing and Earplugs 2 keeps long combos uninterrupted.',
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
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Offensive Guard 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Guard 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' }
			],
			setSkills: ['Super Recovery I', 'Thunderous Roar I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -4, water: -2, thunder: 16, ice: -9, dragon: -8 }
		},
		'zoh-duna-agitator': {
			name: 'Zoh-Duna Gamma Agitator Burst GL',
			source: 'Game8 + Google Doc',
			tier: 'craftable',
			desc: "All-arounder: Agitator, Burst, Counterstrike, and Guts with a comfort spread of Divine Blessing, Recovery Speed, and Tool Specialist. The community doc's HR51 set is the same armor with Rey Sandcoil γ at the waist for Lord's Soul instead of Protective Veil.",
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Duna Wildcoil γ',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Counter Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Guard 2', type: 'comfort' },
				{ name: 'Divine Blessing 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Recovery Speed 2', type: 'comfort' },
				{ name: 'Tool Specialist 2', type: 'comfort' }
			],
			setSkills: ['Super Recovery I', 'Protective Veil I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -6, water: 10, thunder: 2, ice: -3, dragon: -8 }
		},
		'lagi-rey-counterstrike': {
			name: 'Lagi-Rey Agitator Counterstrike GL',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Max raw via Appraised Talismans: Attack Boost 5, Offensive Guard, Agitator, and Counterstrike stack flat raw for shells while Latent Power, Maximum Might, and WEX add affinity to melee hits. Runs the Argenesis Artian.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Chain Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -7, water: 4, thunder: 13, ice: -8, dragon: -4 }
		},
		'omega-udra-burst': {
			name: 'Omega Udra Burst Agitator GL',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Multiplayer specialist: Omega Resonance grants +20% affinity and +10 raw near allies or Support Hunters, on top of maxed Agitator and Burst kept active by Guts (Tenacity) aggression.',
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Omega Vambraces α',
				Waist: 'Omega Accessory α',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Weakness Exploit 2', type: 'dmg' },
				{ name: 'Guard 3', type: 'comfort' },
				{ name: 'Focus 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Resonance I', 'Guts (Tenacity)', 'Bad Blood I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 15, water: -4, thunder: -9, ice: 6, dragon: -4 }
		},
		'sereygios-evade': {
			name: 'SeReyGios Evade GL',
			source: 'Game8',
			tier: 'craftable',
			desc: "Dodge instead of block: Adrenaline Rush 5 (+30 raw) extended by Seregios' Razor's Edge. Evade Window 4 and Evade Extender make hops generous; Constitution and Stamina Surge pay the stamina bill.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Regios Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Regios Coil β',
				Legs: 'Rey Sandgreaves γ',
				Charm: 'Counterattack Charm III'
			},
			skills: [
				{ name: 'Adrenaline Rush 5', type: 'dmg' },
				{ name: 'Agitator 4', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Offensive Guard 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Evade Window 4', type: 'comfort' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Guard 2', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', "Razor's Edge I", 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 8, water: -6, thunder: 6, ice: -13, dragon: 0 }
		},
		'comfy-healing': {
			name: 'Comfy Healing GL',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Comfort first: Earplugs 3 and Recovery Speed 3 with Super Recovery and Hasten Recovery set bonuses for constant passive healing. Agitator 5 and Counterstrike keep damage respectable.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Arkvulcan Mail β',
				Arms: 'Arkvulcan Vambraces β',
				Waist: 'Numinous Overlay β',
				Legs: 'Mizutsune Greaves β',
				Charm: 'Counter Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Burst 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Offensive Guard 2', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Convert Element 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Recovery Speed 3', type: 'comfort' },
				{ name: 'Guard 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Focus 1', type: 'comfort' }
			],
			setSkills: ['Super Recovery I', 'Hasten Recovery I', 'Diversion'],
			meal: 'Any Attack Up meal — the double heal-over-time already covers survivability.',
			res: { fire: 0, water: 6, thunder: -1, ice: 1, dragon: -15 }
		},

		// --- HR 100+ builds ---
		'max-burst-dahaad': {
			name: 'Max Burst Boost Dahaad Guts GL (TU4)',
			source: 'Game8 + Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'The consistent meta set: Transcended G. Ebony + Dahaad γ enables Burst Boost II (+18 raw while Burst is active), Binding Counter I, and Guts (Tenacity) at once. The community doc rates this Odo/Soul core the most consistent DPS.',
			armor: {
				Head: 'G. Ebony Helm α (Transcend)',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'G. Ebony Braces β (Transcend)',
				Waist: 'Dahaad Shardcoil γ',
				Legs: 'G. Ebony Greaves β (Transcend)',
				Charm: 'Appraised (Guard Up 2 + Counterstrike 2) / Counter Charm III'
			},
			skills: [
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Evade Extender 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Guard 2', type: 'comfort' },
				{ name: 'Guard Up 2', type: 'comfort' },
				{ name: 'Bind Resistance 2', type: 'comfort' },
				{ name: 'Speed Eating 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Burst Boost II', 'Binding Counter I', "Lord's Soul"],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -12, water: -5, thunder: -8, ice: -2, dragon: 10 }
		},
		'gogma-burst-boost': {
			name: 'Gogma Burst Boost GL (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Raw attack maxed: Attack Boost 5 from the Appraised charm plus Burst, Agitator, Peak Performance, Counterstrike, and Guts. Super Recovery + Recovery Speed 3 keep HP topped up between guards.',
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'G. Ebony Mail β (Transcend)',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gogmazios Coil α',
				Legs: 'Numinous Greaves β',
				Charm: 'Appraised (Attack Boost 3 + Agitator 1)'
			},
			skills: [
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Counterstrike 1', type: 'dmg' },
				{ name: 'Elemental Absorption 1', type: 'dmg' },
				{ name: 'Peak Performance 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Evade Extender 3', type: 'comfort' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Recovery Speed 3', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Burst Boost I', 'Super Recovery I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -3, water: -4, thunder: 4, ice: -1, dragon: -5 }
		},
		'peak-guarding-gogma': {
			name: 'Peak Guarding Gogma GL (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Guard fortress: Guard 3, Guard Up 3, Divine Blessing, and Super Recovery keep HP full so Peak Performance 4 stays active permanently. Offensive Guard turns every Perfect Guard into more raw.',
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Numinous Shroud β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gogmazios Coil α',
				Legs: 'G. Ebony Greaves β (Transcend)',
				Charm: 'Appraised (Artillery 3 + Agitator 1)'
			},
			skills: [
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 4', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Guard 3', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Evade Extender 3', type: 'comfort' },
				{ name: 'Recovery Speed 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Divine Blessing 1', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Burst Boost I', 'Super Recovery I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -3, water: -4, thunder: 4, ice: -1, dragon: -5 }
		},
		'odo-arkveld-wide': {
			name: 'Odo-Arkveld Wide Burst GL (1.041)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Wide-shelling variant (Element Focus Gogma): Burst Boost II damage with Flayer and Hasten Recovery healing back guard chip damage. Swap Earplugs/Evade Extender decos for Counterstrike if your guard game is tight.',
			armor: {
				Head: 'G. Ebony Helm β (Transcend)',
				Chest: 'G. Ebony Mail β (Transcend)',
				Arms: 'G. Ebony Braces β (Transcend)',
				Waist: 'Arkvulcan Coil γ',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Golden Age Charm (Artillery 3 + Agitator 1)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Elemental Absorption 3', type: 'dmg' },
				{ name: 'Flayer 3', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Focus 3', type: 'comfort' },
				{ name: 'Guard 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Blight Resistance 2', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Extender 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Hasten Recovery I', 'Burst Boost II', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -2, water: -9, thunder: -8, ice: -6, dragon: 6 }
		},
		'gog4-shield': {
			name: "Gog 4 Shield — Gogmapocalypse / Lord's Soul",
			source: 'Google Doc',
			tier: 'meta',
			rank: 'hr100',
			desc: "The doc's least-trade-offs set: 4pc Gogmapocalypse (counting the Gogma Artian) grants a 75 HP barrier on monster enrage and a 1.3x element modifier, letting Peak Performance 5 stay up through chip damage.",
			armor: {
				Head: 'Dahaad Shardhelm γ',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Appraised (Attack Boost 3 + Burst 1)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Foray 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Counterstrike 1', type: 'dmg' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' }
			],
			setSkills: ['Gogmapocalypse II', "Lord's Soul", "Jin Dahaad's Revolt I"],
			meal: "Sild Garlic (Moxie) — Lord's Soul cart protection plus Moxie doubles up.",
			res: { fire: -18, water: 13, thunder: -2, ice: 13, dragon: -17 }
		},
		'jin4-clash': {
			name: "Jin 4 Clash — Jin Dahaad's Revolt / Lord's Soul",
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "+50 raw from Jin Dahaad's Revolt II after power clashes, pins, and binds — technically the top damage roll in short hunts and clash-heavy matchups (Arkveld, Seregios) or frostblight spammers (Blangonga).",
			armor: {
				Head: 'Dahaad Shardhelm γ',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Dahaad Shardgreaves β',
				Charm: 'Appraised (Attack Boost 3 + Burst 1) / Burst Lv 3 talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Foray 2', type: 'dmg' },
				{ name: 'Load Shells 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Peak Performance 1', type: 'dmg' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' }
			],
			setSkills: ["Jin Dahaad's Revolt II", "Lord's Soul", 'Gogmapocalypse I'],
			meal: "Sild Garlic (Moxie) — Lord's Soul cart protection plus Moxie doubles up.",
			res: { fire: -17, water: 12, thunder: -3, ice: 12, dragon: -13 }
		}
	},
	artianWeapons: [
		{
			name: 'Argenesis',
			variant: 'standard',
			steps: [
				'Craft rarity 8 with 3x Attack infusion — the element sets shelling: Water/Thunder/Dragon = Long, Sleep/Ice/Fire = Normal, Blast/Para/Poison = Wide',
				'Reinforce: 5x Attack +5 is ideal (~1/1024) — settle for 3-4 Attack rolls; 1 Sharpness roll is fine for Burst Fire loops',
				'Decos: Artillery Jewel III【3】 + Magazine/Attack + Guardian/Ironwall'
			]
		},
		{
			name: 'Auguring Omen',
			variant: 'gogma',
			steps: [
				'Convert your Argenesis with Attack Focus: +10 raw and Normal shelling — best overall since shells cannot crit (Element Focus = Wide for shell-hop matchups; Affinity Focus/Long is dead)',
				"Reroll set + group skills until Lord's Soul plus the set skill your build needs: Ebony Odogaron's Power, Zoh Shia's Pulse, Gogmapocalypse, or Jin Dahaad's Revolt",
				'Reinforce: 2x Attack EX + 2x Attack III + one more (max 2 per level); bonuses rise after Amendment',
				'Even low-rolled Gogma Artians outclass all craftables — match element to the monster'
			]
		}
	],
	weapons: [
		{
			element: 'Dragon',
			name: 'G. Lawful Bors',
			info: 'G. Arkveld · Wide shelling · Guard 2 · Best craftable',
			cls: 'dragon'
		},
		{
			name: 'Riotous Gunlance',
			info: 'Seregios · Normal shelling · 25% affinity · Bladescale Honing for the evade build',
			cls: 'raw'
		}
	],
	tips: [
		{
			title: 'Shelling Types',
			lines: [
				'Normal > Wide >> Long — shells ignore hitzones and cannot crit, so stack raw',
				'Artillery 3 and Load Shells 2 are non-negotiable on every build',
				'Keep one Wide gunlance for shell-hop matchups: Omega Planetes, AT Jin Dahaad, AT Arkveld'
			]
		},
		{
			title: 'Wyrmstake Full Blast Loop',
			lines: [
				'Wide-Sweep into Wyrmstake Full Blast to stack Burst 5 fast',
				"Alternate Wyrmstake Full Blast, Burst Fire Combo, and Wyvern's Fire by opening length",
				"Fire Wyvern's Fire on cooldown — it is your biggest hit; Focus speeds its recharge"
			]
		},
		{
			title: 'Guard Skills',
			lines: [
				'Perfect Guards and Guard Points trigger Offensive Guard (+15% raw at Lv 3)',
				'Multi Wyrmstake Full Blast Guard Points are NOT Perfect Guards — bring Guard 2+ or get knocked out of the move',
				'Guard Up lets you Perfect Block normally unblockable attacks; or skip blocking entirely with the Adrenaline Rush evade build'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Gunlance hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Shelling Burst', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Guard', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Appraised-charm raw stack — Attack Boost 5 + Counterstrike',
							value: 'lagi-rey-counterstrike'
						},
						{
							label: 'Multiplayer Resonance — affinity when allies are near',
							value: 'omega-udra-burst'
						},
						{
							label: "Dodge, don't block — Adrenaline Rush evade lancing",
							value: 'sereygios-evade'
						}
					]
				},
				balanced: {
					text: 'How should damage and safety split?',
					options: [
						{
							label: 'Guts + Super Recovery raw core with Earplugs',
							cssClass: 'balanced',
							value: 'rey-zoh-guts'
						},
						{
							label: 'Agitator/Burst spread with Divine Blessing comfort',
							cssClass: 'balanced',
							value: 'zoh-duna-agitator'
						}
					]
				},
				comfort: {
					text: 'What kind of comfort?',
					options: [
						{
							label: 'Constant healing — Super + Hasten Recovery, Earplugs 3',
							cssClass: 'comfort',
							value: 'comfy-healing'
						},
						{
							label: 'Evade comfort — hop through attacks instead of eating chip',
							cssClass: 'comfort',
							value: 'sereygios-evade'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Gunlance hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Shelling Burst', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Guard', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Burst Boost II + Binding Counter — the consistent meta',
							value: 'max-burst-dahaad'
						},
						{
							label: 'Max raw — Attack Boost 5 Gogma stack',
							value: 'gogma-burst-boost'
						},
						{
							label: "Power-clash spikes — Jin Dahaad's Revolt +50 raw",
							value: 'jin4-clash'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Wide shelling + Flayer + Hasten Recovery healing',
							cssClass: 'balanced',
							value: 'odo-arkveld-wide'
						},
						{
							label: 'Peak Performance held by guarding — damage while defended',
							cssClass: 'balanced',
							value: 'peak-guarding-gogma'
						}
					]
				},
				comfort: {
					text: 'How do you want to stay safe?',
					options: [
						{
							label: 'Guard fortress — Guard Up 3 + Super Recovery',
							cssClass: 'comfort',
							value: 'peak-guarding-gogma'
						},
						{
							label: '4pc Gogma shield barrier — comfort with meta damage',
							cssClass: 'comfort',
							value: 'gog4-shield'
						}
					]
				}
			}
		}
	},
	referenceKey: 'gunlance',
	sourcesText:
		'Game8 Gunlance Builds (TU4/v1.041) and the Wilds Gunlance Guide (TU4) Google Doc by Lemon, NotDio & tokendoor. Game8 resistances come from its Build Details pages; Google Doc resistances are read from its setbuilder build cards.',
	display: {
		weaponListTitle: 'Non-Artian Gunlances',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
