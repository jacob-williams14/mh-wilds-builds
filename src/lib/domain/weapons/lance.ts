import type { WeaponData } from '../types';

export const lance: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'lagi-duna-guts': {
			name: 'Lagi-Duna Guts Lance',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Highest-rated HR50 set: Guts, Agitator, and Azure Bolt on Gamma and Lagiacrus pieces for high raw attack. At HR100+ an Attack Boost Appraised talisman raises raw further while keeping Agitator 5.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Lagiacrus Mail β',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Duna Wildcoil γ',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Tool Specialist 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' }
			],
			setSkills: ['Protective Veil I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -8, water: 10, thunder: 6, ice: -5, dragon: -4 }
		},
		'zoh-gore-critical': {
			name: 'Zoh-Gore AGI-WEX Critical Lance',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Tanky, high-affinity crit build: Agitator 5, WEX, and Antivirus push affinity near 100% while Super Recovery passively heals chip damage — an impenetrable poke fortress. Constitution 5 covers guard stamina.',
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
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Divine Blessing 1', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Handicraft 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Super Recovery I', 'Ward of Wyveria'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: -6, water: 10, thunder: 1, ice: 4, dragon: -14 }
		},
		'ful-lagi-agi-wex': {
			name: 'Ful-Lagi AGI-WEX Lance',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Second Wind + Maximum Might keep crit uptime high on a spare stamina bar; Azure Bolt raises the affinity ceiling and converts Thunder Resistance into bonus damage. Swap Earplugs 2 for Counterstrike 2 for more raw.',
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Fulgur Vambraces α',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Lagiacrus Greaves β',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Handicraft 1', type: 'comfort' }
			],
			setSkills: ['Second Wind I', 'Azure Bolt I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: -10, water: 4, thunder: 14, ice: -8, dragon: -12 }
		},
		'zoh-comfy-tank': {
			name: '4x Zoh Shia Comfy Tank Lance',
			source: 'Game8',
			tier: 'craftable',
			desc: "The ironwall: 4pc Zoh Shia's Super Recovery II passively heals, Divine Blessing 3 and high elemental resistances blunt everything else, and Agitator 5 + WEX 5 keep the damage honest.",
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Numinous Overlay β',
				Legs: 'Numinous Greaves β',
				Charm: 'Any Element Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Counterstrike 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Elemental Absorption 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Element Resistance 3', type: 'comfort' },
				{ name: 'Recovery Speed 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Handicraft 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Super Recovery II'],
			meal: 'Any Defense Up or Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: -6, water: 8, thunder: 7, ice: 0, dragon: -20 }
		},
		fulgore: {
			name: 'FulGore Crit Lance',
			source: 'Google Doc',
			tier: 'craftable',
			desc: 'The doc\'s "current hotness": Gore 2pc Frenzy + Antivirus and WEX build to ~85% affinity from armor alone, while Fulgur 2pc\'s second stamina bar keeps Maximum Might live. No free comfort slots — pure aggression.',
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Arkvulcan Mail β',
				Arms: 'G. Fulgur Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Agitator 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: [
				"Fulgur Anjanath's Will I (Second Wind)",
				"Gore Magala's Tyranny I (Black Eclipse)"
			],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc screenshots omit resistance totals.
		},
		gorjin: {
			name: 'GorJin Clash Raw Lance',
			source: 'Google Doc',
			tier: 'craftable',
			desc: "Speedrun-leaning raw set: Resuscitate's +10 raw is always on thanks to Frenzy, and Jin Dahaad 2pc adds another +25 raw for a full minute after every Power Clash. Evade Window 3 rewards precise back-hops.",
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Gore Mail β',
				Arms: 'Dahaad Shardbraces β',
				Waist: 'Dahaad Shardcoil β',
				Legs: 'Dahaad Shardgreaves β',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evade Window 3', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' },
				{ name: 'Tremor Resistance 1', type: 'comfort' }
			],
			setSkills: ["Gore Magala's Tyranny I", "Jin Dahaad's Revolt I", "Lord's Fury I"],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc screenshots omit resistance totals.
		},

		// --- HR 100+ builds ---
		'agi-wex-flayer-guts': {
			name: 'AGI-WEX-Flayer Guts Lance',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Top-rated endgame build: 4pc Arkveld γ delivers Agitator 5, WEX 5, and Flayer 5 while the Gogma Artian brings Hasten Recovery II, Guts (Tenacity), and Black Eclipse I. Affinity overcaps 100% on top of Frenzy.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Arkvulcan Mail γ',
				Arms: 'Arkvulcan Vambraces γ',
				Waist: 'Gore Coil β',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Flayer 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Convert Element 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Recovery Up 3', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Blight Resistance 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: "Master's Touch 1", type: 'comfort' }
			],
			setSkills: ['Hasten Recovery II', 'Guts (Tenacity)', 'Black Eclipse I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 6, water: 3, thunder: -5, ice: 2, dragon: -13 }
		},
		'gogma-comfort': {
			name: 'AGI-WEX Gogma II Lance',
			source: 'Game8',
			tier: 'meta',
			rank: 'hr100',
			desc: 'Comfort-focused AGI-WEX build in 4pc Gogmazios α. Mutual Hostility II adds a protective barrier (and an elemental option), Hasten Recovery I heals as you poke, and Stun Resistance 3 + Recovery Up round out the comfort.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Gogmazios Mail α',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Recovery Up 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: "Master's Touch 1", type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Hasten Recovery I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: -14, water: 12, thunder: -1, ice: 12, dragon: -23 }
		},
		'fulgur-dahaad': {
			name: 'Fulgur-Dahaad Lance',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "High-damage Agitator 5 + Burst 5 build around AT Jin Dahaad's Binding Counter set bonus. Stacks Second Wind, Black Eclipse, and Guts via the Gogma Artian; Razor Sharp and Constitution keep the pokes flowing.",
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'G. Fulgur Vambraces β',
				Waist: 'Gore Coil α',
				Legs: 'Dahaad Shardgreaves γ',
				Charm: 'Chain Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Burst 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Weakness Exploit 3', type: 'dmg' },
				{ name: 'Foray 1', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Extender 1', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: 'Handicraft 1', type: 'comfort' }
			],
			setSkills: ['Second Wind I', 'Binding Counter I', 'Black Eclipse I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -10, water: 5, thunder: 1, ice: 0, dragon: -7 }
		},
		'binding-counter-guts': {
			name: 'Binding Counter Guts Lance',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'AGI-WEX build built around Binding Counter II (+50 raw after Power Clashes, pins, webs, or frostblight) with Guts as the safety net. Strongest into monsters that trigger clashes; Divine Blessing 3 softens the rest.',
			armor: {
				Head: 'Omega Ear Cuffs α',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Dahaad Shardcoil γ',
				Legs: 'Dahaad Shardgreaves γ',
				Charm: 'Mighty Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Foray 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Bind Resistance 2', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' },
				{ name: 'Guard 1', type: 'comfort' },
				{ name: "Master's Touch 1", type: 'comfort' }
			],
			setSkills: ['Binding Counter II', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -4, water: 6, thunder: -7, ice: 8, dragon: -9 }
		},
		'fulgur-lagi-guts': {
			name: 'Fulgur-Lagi Guts Lance',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Raw-affinity build pairing a Fulgur Anjanath's Will Gogma Artian with a Transcended G. Fulgur helm. The deepest guard kit of the endgame six: Guard 3 + Guard Up 3 + Divine Blessing 3 with Second Wind stamina and Guts.",
			armor: {
				Head: 'G. Fulgur Helm β (Transcend)',
				Chest: 'Udra Miremail γ',
				Arms: 'Lagiacrus Braces α',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: "Appraised (Master's Touch 1 + WEX 1) / Exploiter Charm II"
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Guard 3', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: "Master's Touch 1", type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Second Wind I', 'Azure Bolt I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -3, water: 3, thunder: 7, ice: -4, dragon: -6 }
		},
		'lagi-guts-critical': {
			name: 'Lagi-Guts Critical Lance',
			source: 'Game8',
			tier: 'craftable',
			rank: 'hr100',
			desc: 'Skip the Gogma grind: a standard Artian Skyscraper on fully craftable armor. The Nu Udra γ chest brings slots and Counterstrike 2, and the Critical Eye Appraised charm pushes the affinity ceiling to 116%.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (Critical Eye 3 + Agitator 1)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Critical Eye 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: "Master's Touch 1", type: 'comfort' },
				{ name: 'Handicraft 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -2, water: 2, thunder: 9, ice: -4, dragon: -4 }
		}
	},
	artianWeapons: [
		{
			name: 'Skyscraper',
			variant: 'standard',
			steps: [
				'Craft with Paralysis parts (Blast also fine) — ③③③ slots, 3x Attack infusion',
				'Reinforce: 4-5x Attack +5; fill the remainder with Sharpness +30',
				'Doc element variant: reinforce 4x Element + 1x Sharpness — craft one per element for matchups',
				'Decos: Guardian/Ironwall III + Critical III + Critical II (Offensive Guard and Critical Boost first)'
			]
		},
		{
			name: 'Aether Pike',
			variant: 'gogma',
			steps: [
				'Convert your Skyscraper; Attack Focus (-15% affinity — amend Affinity reinforces to counter it)',
				"Reroll the set skill to match your build: Gore Magala's Tyranny, Arkveld's Hunger, Jin Dahaad's Revolt, or Fulgur Anjanath's Will; group skill Lord's Soul",
				'Reinforce: 3x Attack +5, Affinity +10 (EX), Sharpness +30 — EX-grade Affinity is the top amendment priority',
				"Decos: Critical III + Mastery + Shield/Ironwall (Guard Up 3 + Master's Touch comfort package)"
			]
		}
	],
	weapons: [
		{
			element: 'Fire',
			name: 'Blazing Sital',
			info: 'Zoh Shia · Whiteflame Torrent · White Sharpness',
			cls: 'fire'
		},
		{
			element: 'Thunder',
			name: 'High Acrus Lance',
			info: 'Lagiacrus · Guard 2 · Feeds Azure Bolt via Convert Thunder Res',
			cls: 'thunder'
		},
		{
			element: 'Dragon',
			name: 'Fieberschild',
			info: "Gore Magala · Crit Element 3 · 20% affinity — doc's best crafted",
			cls: 'dragon'
		}
	],
	tips: [
		{
			title: 'Perfect Guard Loop',
			lines: [
				'Time blocks for Perfect Guard — it always triggers Offensive Guard (+15% raw and element at Lv 3, near-100% uptime)',
				"After a perfect block, don't counter immediately — check for a follow-up attack and block that too",
				'Reposition with Guard Dashes instead of sheathing'
			]
		},
		{
			title: 'Guard Skill Breakpoints',
			lines: [
				'Guard and Guard Up are weapon skills in Wilds — they compete with damage decos',
				'Perfect + Power Guard make them optional while progressing; the doc calls them a damage loss outside endgame unblockables',
				"Game8's TU4 Gogma builds fit Guard Up 3 + Guard back in via Shield/Ironwall jewels — run them to taste"
			]
		},
		{
			title: 'Poke Rotation',
			lines: [
				'Bread and butter: Mid Thrust x3 → Triple Poke (MMM TT); side-hop the first two thrusts for ~1% extra DPS',
				'Every combo is an animation commitment — keep them short enough to block the next attack',
				'Lance barely spends stamina on combos and blocks, so Maximum Might is sustainable — Second Wind makes it foolproof'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Lance hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Aggressive Counters', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Ironwall Comfort', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which counter engine?',
					options: [
						{ label: 'Frenzy crit rush — Gore + Fulgur, ~95% affinity', value: 'fulgore' },
						{ label: 'Power Clash raw — every clash refreshes +25 raw', value: 'gorjin' },
						{ label: 'Raw Guts — Agitator + Azure Bolt attack stacking', value: 'lagi-duna-guts' }
					]
				},
				balanced: {
					text: 'How do you want to keep the pokes flowing?',
					options: [
						{
							label: 'Crit fortress — Super Recovery heals the chip damage',
							cssClass: 'balanced',
							value: 'zoh-gore-critical'
						},
						{
							label: 'Second Wind stamina — Maximum Might crit uptime',
							cssClass: 'balanced',
							value: 'ful-lagi-agi-wex'
						}
					]
				},
				comfort: {
					text: 'What kind of unkillable?',
					options: [
						{
							label: '4pc Zoh Shia — passive healing, huge resistances',
							cssClass: 'comfort',
							value: 'zoh-comfy-tank'
						},
						{
							label: 'Tanky but deadly — Constitution 5 + Super Recovery',
							cssClass: 'comfort',
							value: 'zoh-gore-critical'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Lance hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Aggressive Counters', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Ironwall Comfort', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'AGI-WEX-Flayer — the top-rated all-rounder',
							value: 'agi-wex-flayer-guts'
						},
						{
							label: 'Binding Counter — +50 raw off Power Clashes and pins',
							value: 'binding-counter-guts'
						},
						{
							label: 'Agitator + Burst 5 — AT Dahaad set-bonus stack',
							value: 'fulgur-dahaad'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Second Wind + Azure Bolt — stamina, guard kit, and Guts',
							cssClass: 'balanced',
							value: 'fulgur-lagi-guts'
						},
						{
							label: 'Standard Artian — skip the Gogma grind, 116% ceiling',
							cssClass: 'balanced',
							value: 'lagi-guts-critical'
						}
					]
				},
				comfort: {
					text: 'How do you want to stay standing?',
					options: [
						{
							label: 'Gogma barrier — Mutual Hostility II + Hasten Recovery',
							cssClass: 'comfort',
							value: 'gogma-comfort'
						},
						{
							label: 'Full guard kit — Guard 3 + Guard Up 3 + Divine Blessing',
							cssClass: 'comfort',
							value: 'fulgur-lagi-guts'
						}
					]
				}
			}
		}
	},
	referenceKey: 'lance',
	sourcesText:
		'Game8 Lance Builds (TU4/v1.041; primary for HR100+) and the MH Wilds Base Game Progression and Endgame Lance Builds Google Doc (Syltphademus; pre-TU4 — mechanics, skill philosophy, and HR50-era sets). Google Doc builds do not list resistance totals — those values are unverified placeholders.',
	display: {
		weaponListTitle: 'Non-Artian Lances',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
