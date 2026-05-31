import type { WeaponData } from '../types';

export const longSword: WeaponData = {
	builds: {
		// --- HR 50+ builds (mid-game) ---
		'max-critical': {
			name: 'Max Critical LS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Hit 100% affinity when Antivirus + Latent Power + Maximum Might are all active. Crimson Slash Combo Loops trigger Burst. Mighty Charm III for HR50+; Appraised charm unlocks MM 2 + Handicraft at HR100+.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gore Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Mighty Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Black Eclipse I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -5, water: 6, thunder: 3, ice: -2, dragon: -2 }
		},
		'seregios-gore': {
			name: 'Seregios-Gore LS',
			source: 'Game8',
			tier: 'craftable',
			desc: "Always-on raw via Counter Strike, Agitator, and Adrenaline Rush. Razor's Edge I from Seregios 2pc extends Adrenaline Rush uptime. Affinity ceiling 80% — stable and consistent without any activation conditions.",
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Regios Mail β',
				Arms: 'Regios Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ["Razor's Edge I", 'Black Eclipse I', 'Adrenaline'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: 1, water: 8, thunder: -4, ice: -1, dragon: -4 }
		},
		'agitator-guts': {
			name: 'Agitator-Guts LS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Stable affinity via Agitator, LP, WEX, and Maximum Might — 10%–100% ceiling. Stun Resistance 3 and Quick Sheathe give consistent comfort. Challenger Charm II for HR50+; Appraised charm at HR100+.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Rey Sandcoil γ',
				Legs: 'Rey Sandgreaves γ',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Latent Power 2', type: 'dmg' },
				{ name: 'Adrenaline Rush 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Thunderous Roar I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 0, water: -4, thunder: 13, ice: -9, dragon: -8 }
		},
		'lagi-rey-agitator': {
			name: 'LagiRey Agitator LS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Max raw + affinity package via Agitator, Latent Power, WEX, and Attack Boost. Speed Eating + Evade Extender for comfort. Exploiter Charm II for HR50+; Appraised charm unlocks Attack Boost 3 + Agitator 1 at HR100+.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -7, water: 4, thunder: 13, ice: -8, dragon: -4 }
		},
		'evasive-comfy': {
			name: 'Evasive Comfy LS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'AGI-WEX comfort build with Evade Extender, Divine Blessing, Ward of Wyveria, and Super Recovery I. Maintains full core damage via Agitator + WEX + Counterstrike. Suits any playstyle — hyperarmor attacks maximize Counterstrike value.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Numinous Overlay β',
				Legs: 'Arkvulcan Greaves β',
				Charm: 'Counter Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Critical Eye 3', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Convert Element 1', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Super Recovery I'],
			meal: 'Any Attack Up meal. Super Recovery I pairs well with healing-boosting food.',
			res: { fire: -2, water: 6, thunder: 4, ice: 0, dragon: -19 }
		},

		// --- HR 100+ builds (monster-specific) ---
		'anti-seregios': {
			name: 'Anti-Seregios LS',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Optimized for Seregios. Bleed Res 2 enables near-100% Resentment uptime — Sororal Earrings provide Resentment, and Seregios rarely inflicts bleed otherwise. Thunder element Headsman's Hamus. Skill levels partially unverified — verify in-game.",
			armor: {
				Head: 'Sororal Earrings α',
				Chest: 'Udra Miremail γ',
				Arms: 'Udra Mirebraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Agitator Lv. 3 Talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Flayer 1', type: 'dmg' }, // verify
				{ name: 'Quick Sheathe 3', type: 'comfort' }, // verify
				{ name: 'Bleeding Resistance 2', type: 'comfort' }
			],
			setSkills: ["Gore Magala's Tyranny", "Nu Udra's Medley"],
			meal: "Sild Garlic (Moxie) stacks with Guts from Lord's Soul for double OHKO protection.",
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true }
		},
		'anti-guardian': {
			name: 'Anti-Guardian Arkveld LS',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Optimized for Guardian Arkveld. WEX replaces Agitator because Guardian doesn't stay enraged — WEX has better uptime here. Arkvulcan 2pc provides Arkveld's Hunger. Dragon element Headsman's Hamus. Skill levels partially unverified — verify in-game.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Arkvulcan Vambraces γ',
				Waist: 'Rey Sandcoil γ',
				Legs: 'Gore Greaves β',
				Charm: '— (// verify)'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' }, // verify — may be 5
				{ name: 'Antivirus 3', type: 'dmg' }, // verify
				{ name: 'Counterstrike 3', type: 'dmg' }, // verify
				{ name: 'Maximum Might 3', type: 'dmg' }, // verify
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' } // verify
			],
			setSkills: ["Gore Magala's Tyranny", "Arkveld's Hunger"],
			meal: 'Any Attack Up meal.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true }
		},

		// --- HR 100+ builds ---
		'fulgur-lagi-guts': {
			name: 'Fulgur-Lagi Guts LS',
			source: 'Game8',
			tier: 'meta',
			rank: 'hr100',
			desc: 'Gogma Artian + Armor Transcendence pushes both Agitator and WEX to max. Azure Bolt I covers affinity, Second Wind sustains Maximum Might, Guts (Tenacity) handles survivability. Raw ceiling: 307. Affinity ceiling: 110%.',
			armor: {
				Head: 'G. Fulgur Helm β (Transcend)',
				Chest: 'Udra Miremail γ',
				Arms: 'G. Fulgur Vambraces β (Transcend)',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: "Appraised (Master's Touch 1 + Agitator 1)"
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Adaptability 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Stun Resistance 1', type: 'comfort' }
			],
			setSkills: ['Second Wind I', 'Azure Bolt I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 0, water: 0, thunder: -5, ice: -6, dragon: -5 }
		},
		'gogma-arkveld': {
			name: 'Gogma-Arkveld LS',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Four active set skills simultaneously — Guts + Mutual Hostility (raw + elemental) + Azure Bolt (affinity) + Hasten Recovery (healing). Challenger Charm III is craftable. Incredibly versatile across any hunt.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Gogmazios Mail α',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Blight Resistance 2', type: 'comfort' },
				{ name: 'Aquatic/Oilsilt Mobility 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility I', 'Hasten Recovery I', 'Azure Bolt I', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -7, water: 8, thunder: 2, ice: 5, dragon: -18 }
		},
		'lagi-guts-critical': {
			name: 'Lagi-Guts Critical LS',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Nu Udra chest replaces Latent Power with Counterstrike for higher-uptime affinity. Critical Eye via Appraised charm pushes to 100%+ without LP dependency. Affinity ceiling: 116%. Swap Speed Eating for Divine Blessing if preferred.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (Critical Eye 3 + Agitator 1)'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Critical Eye 4', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -2, water: 2, thunder: 9, ice: -4, dragon: -4 }
		},
		'gore-guts': {
			name: 'Gore/Guts LS',
			source: 'Google Doc',
			tier: 'meta',
			rank: 'hr100',
			desc: "General-purpose Gogmazios LS. Element matched to hunt via Headsman's Hamus. Requires Gore Magala's Tyranny rolled on the weapon. For AT Arkveld, use Dragon element and slot Dragon Resistance 3. Skill levels partially unverified — verify in-game.",
			armor: {
				Head: 'Sororal Earrings α',
				Chest: 'Udra Miremail γ',
				Arms: 'Arkvulcan Vambraces γ',
				Waist: 'Blango Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Exploiter Charm (WEX 3)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' }, // verify
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' } // verify
			],
			setSkills: ["Gore Magala's Tyranny", "Lord's Soul"],
			meal: "Sild Garlic (Moxie) stacks with Guts from Lord's Soul for double OHKO protection.",
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true }
		},
		'zoh-shia-ls': {
			name: 'Zoh Shia LS (Craftable)',
			source: 'Google Doc',
			tier: 'craftable',
			rank: 'hr100',
			desc: "Best craftable Long Sword while farming toward your first Gogmazios LS. Numinous 2pc (Guardian's Pulse) + Gore 2pc (Black Eclipse I). Counter Charm III for Counterstrike 3. Use element-matched craftable LS — e.g. Blazing Rafel for Dragon. Skill levels partially unverified — verify in-game.",
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counter Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' }, // verify
				{ name: 'Weakness Exploit 5', type: 'dmg' }, // verify
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Critical Boost 4', type: 'dmg' }, // verify
				{ name: "Master's Touch 1", type: 'dmg' }, // verify
				{ name: 'Antivirus 1', type: 'dmg' }, // verify
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ["Guardian's Pulse", 'Black Eclipse I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true }
		}
	},
	artianWeapons: [
		{
			name: 'Dimensius',
			variant: 'standard',
			steps: [
				'Craft with 3 same-element parts (Attack infusion)',
				'Reinforce: target Attack +5 ×3, Sharpness +30 ×2',
				'Weapon Decorations: Critical Jewel III, Critical Jewel II, Mastery Jewel',
				'Paralysis (Dimensius) as default; craft one per element you need and match to the monster'
			]
		},
		{
			name: "Headsman's Hamus",
			variant: 'gogma',
			steps: [
				'Attack Focus — takes −10% affinity; recover via 1 Affinity Boost EX reinforcement',
				'Target roll: 2 Attack EX, 2 Attack III, 1 Sharpness EX',
				'Any element type — match to the monster each hunt',
				"Set bonus: roll Gore Magala's Tyranny; Lord's Soul group skill activates automatically"
			]
		}
	],
	weapons: [
		{ element: 'Fire', name: 'Wyvern Blade "Lily"', info: 'Rathalos · Fire', cls: 'fire' },
		{ element: 'Water', name: 'Tamonowo', info: 'Craftable · Water', cls: 'water' },
		{ element: 'Thunder', name: "Heaven's Thunder", info: 'Lagiacrus · Thunder', cls: 'thunder' },
		{
			element: 'Dragon',
			name: 'Blazing Rafel',
			info: 'Craftable · Dragon · General-purpose fallback',
			cls: 'dragon'
		},
		{ element: 'Paralysis', name: 'Lala Ornithocton', info: 'Lala Barina · Paralysis', cls: 'raw' }
	],
	tips: [
		{
			title: 'Spirit Gauge & Crimson Slash Loops',
			lines: [
				'Perform Crimson Slash Combo Loops to maintain red Spirit Gauge and trigger Burst',
				'Helm Breaker requires a full red gauge — build into it via Foresight Slash or Spirit Thrust',
				'Red gauge provides a raw damage multiplier; never let it expire mid-hunt'
			]
		},
		{
			title: 'Quick Sheathe & Special Sheathe',
			lines: [
				'Quick Sheathe 3 is a staple — speeds up entry into Iai Slash and the Sacred Sheathe combo',
				'Use Special Sheathe to bait monster openings and chain into Iai Spirit Slash counters'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Long Sword hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Maximum Damage', value: 'damage' },
				{ label: 'Balanced (Damage + Comfort)', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Safety', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Hit 100% affinity — LP + Antivirus + Maximum Might',
							value: 'max-critical'
						},
						{
							label: "Always-on raw — Adrenaline Rush + Razor's Edge",
							value: 'seregios-gore'
						}
					]
				},
				balanced: {
					text: 'How do you want to play?',
					options: [
						{
							label: 'LP + WEX + Stun Resistance comfort',
							cssClass: 'balanced',
							value: 'agitator-guts'
						},
						{
							label: 'Max raw attack + Appraised talisman at HR100+',
							cssClass: 'balanced',
							value: 'lagi-rey-agitator'
						}
					]
				},
				comfort: {
					text: 'How do you prefer to stay safe?',
					options: [
						{
							label: 'Evasion + Divine Blessing + WEX — never get hit',
							cssClass: 'comfort',
							value: 'evasive-comfy'
						},
						{
							label: 'Stun Resistance + Guts + LP — tank through it',
							cssClass: 'comfort',
							value: 'agitator-guts'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Long Sword hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Maximum Damage', value: 'damage' },
				{ label: 'Versatile — any hunt, any monster', cssClass: 'balanced', value: 'versatile' },
				{ label: 'Specific Hunt', value: 'specific' }
			],
			q2: {
				specific: {
					text: 'Which monster?',
					options: [
						{
							label: 'Seregios — Bleed Res + Resentment uptime',
							value: 'anti-seregios'
						},
						{
							label: 'Guardian Arkveld — WEX over Agitator',
							value: 'anti-guardian'
						}
					]
				},
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Transcendence — max AGI + WEX, 110% affinity ceiling',
							value: 'fulgur-lagi-guts'
						},
						{
							label: 'Gore Tyranny — element-matched Gogmazios LS',
							value: 'gore-guts'
						}
					]
				},
				versatile: {
					text: 'What matters more on your hunts?',
					options: [
						{
							label: 'Four set skills — Guts + Mutual Hostility + Azure Bolt + Hasten Recovery',
							cssClass: 'balanced',
							value: 'gogma-arkveld'
						},
						{
							label: '100%+ affinity without Latent Power — any hunt',
							cssClass: 'balanced',
							value: 'lagi-guts-critical'
						},
						{
							label: 'Craftable — best option while farming Gogmazios LS',
							cssClass: 'comfort',
							value: 'zoh-shia-ls'
						}
					]
				}
			}
		}
	},
	referenceKey: 'long-sword',
	sourcesText:
		'Game8 Long Sword Builds (TU4) and MH Wilds Long Sword community Google Doc. Game8 resistance totals from screenshots. Google Doc skill levels partially unverified — verify in-game before treating as canonical.',
	display: {
		weaponListTitle: 'Craftable Long Swords',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
