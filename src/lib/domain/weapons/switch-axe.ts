import type { WeaponData } from '../types';

export const switchAxe: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'counter-agi-raw': {
			name: 'Counterstrike Agitator Raw SA',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Zoh Shia (Numinous) crit build: ~75% affinity from Agitator, WEX, and Antivirus — near 100% with the right Artian rolls. Black Eclipse keeps Antivirus triggered and Super Recovery heals passively while Counter Rising Slash procs Counterstrike (+25 raw).',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'Gore Vambraces α',
				Waist: 'Gore Coil β',
				Legs: 'Numinous Greaves α',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Weakness Exploit 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Elemental Absorption 1', type: 'dmg' },
				{ name: 'Constitution 4', type: 'comfort' },
				{ name: 'Recovery Speed 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Super Recovery I'],
			meal: 'Meat base for +2 raw; Caprice Meal (Hi) adds random +15 raw windows.',
			res: { fire: -10, water: 12, thunder: 4, ice: 4, dragon: -14 }
		},
		'lagi-gore-agi': {
			name: 'Lagi Gore Agitator SA',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Aggressive general-purpose build leveraging Elemental Absorption and Counterstrike. Azure Bolt periodically deals bonus damage and adds affinity for Critical Boost 4; Rapid Morph and Evade Window keep it flowing.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Gore Mail β',
				Arms: 'Numinous Vambraces β',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Attack Boost 3', type: 'dmg' },
				{ name: 'Elemental Attack 3', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Elemental Absorption 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Rapid Morph 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Constitution 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Azure Bolt I'],
			meal: 'Meat base for +2 raw; Caprice Meal (Hi) adds random +15 raw windows.',
			res: { fire: -12, water: 12, thunder: 8, ice: 2, dragon: -10 }
		},
		'guts-counterstrike': {
			name: 'Guts Counterstrike SA',
			source: 'Game8',
			tier: 'craftable',
			desc: 'The Counterstrike Agitator core rebuilt around three gamma pieces for Guts (Tenacity): more raw, plus room for Earplugs and Divine Blessing. Comfortable high-raw counter play with a once-per-cart safety net.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Numinous Shroud β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Counter Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Weakness Exploit 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)'],
			meal: 'Moxie Meal (Sild Garlic) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: -6, water: 4, thunder: 11, ice: -7, dragon: -6 }
		},
		'regios-gore-comfy': {
			name: 'Regios Gore Comfy SA',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Comfy evasive build with high Adrenaline Rush uptime: Evade Window 4 and Evade Extender make dodging easy, every roll feeds +30 raw, then Full Release Slash at opportune moments.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Gore Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Regios Coil β',
				Legs: 'Regios Greaves β',
				Charm: 'Counter Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Adrenaline Rush 5', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Weakness Exploit 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Evade Window 4', type: 'comfort' },
				{ name: 'Rapid Morph 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ["Razor's Edge I", 'Black Eclipse I', 'Adrenaline'],
			meal: 'Tumbler Meal (Mud/Turbid Shrimp) adds dodge iframes to the evasion playstyle.',
			res: { fire: 4, water: 4, thunder: -4, ice: -3, dragon: -2 }
		},
		'evasive-earplugs': {
			name: 'Evasive Earplugs SA',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Comfy AGI-WEX mixed set maximizing Evade Extender 3 and Earplugs 3 with Constitution and Shock Absorber. Recommended for Full Release Slash spam — the move has hyperarmor during its animation.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Arkvulcan Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Arkvulcan Coil β',
				Legs: 'Dahaad Shardgreaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evade Extender 3', type: 'comfort' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Recovery Speed 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Hasten Recovery I'],
			meal: 'Meat base for +2 raw; Moxie Meal (Sild Garlic) for anti-cart safety.',
			res: { fire: -1, water: 2, thunder: 3, ice: -1, dragon: -11 }
		},
		'gore-4pc': {
			name: '4pc Gore FRS',
			source: 'Google Doc',
			tier: 'craftable',
			desc: "One of the doc's two top contenders. Full Release Slash gameplan with 4pc Gore: Black Eclipse II plus Antivirus turn self-frenzy into affinity. Never hits 100% affinity but average damage rivals the Agi/Max Might set, with free slots for comfort.",
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Gore Mail α',
				Arms: 'Gore Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counter Charm III'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Agitator 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evade Window 3', type: 'comfort' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse II', 'Adrenaline'],
			meal: 'Meat base for +2 raw; Caprice Meal (Hi) adds random +15 raw windows.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc set screenshots omit resistances.
		},
		'fulgur-agi-mm': {
			name: 'Agi/Max Might Raw',
			source: 'Google Doc',
			tier: 'craftable',
			desc: "The doc's strongest listed set. The 2pc Guardian Fulgur bonus (Second Wind) adds a stamina bar so Maximum Might barely drops, stacked on Agitator 5 and Counterstrike for near-permanent crits on every Full Release Slash.",
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Arkvulcan Mail β',
				Arms: 'G. Fulgur Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Weakness Exploit 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Second Wind I', 'Black Eclipse I'],
			meal: 'Meat base for +2 raw; Caprice Meal (Hi) adds random +15 raw windows.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc set screenshots omit resistances.
		},
		'comfy-mp': {
			name: 'Comfy MP Decimator',
			source: 'Google Doc',
			tier: 'craftable',
			desc: 'Non-Agitator multiplayer comfort: Decimator recovers 25 HP every wound you pop, Flayer 2 makes wounds appear faster, and WEX 5 keeps damage honest. Especially strong vs Guardians, whose special topple ends Rage Mode.',
			armor: {
				Head: 'G. Rathalos Helm β',
				Chest: 'Gore Mail α',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'G. Arkveld Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counter Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Decimator I', 'Ward of Wyveria', 'Black Eclipse I'],
			meal: 'Meat base for +2 raw; Tumbler Meal for extra dodge iframes in group hunts.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc set screenshots omit resistances.
		},

		// --- HR 100+ builds ---
		'mutual-hostility': {
			name: 'Mutual Hostility II Gogma SA (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Three Gogmazios pieces plus the Gogma Artian complete the 4pc Gogmapocalypse bonus: Mutual Hostility II raises elemental attack and grants a damage-absorbing barrier, with Guts (Tenacity) as the raw boost and cart insurance.',
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
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Peak Performance 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Razor Sharp 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Guts (Tenacity)', 'Thunderous Roar I'],
			meal: 'Moxie Meal (Sild Garlic) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: -12, water: 5, thunder: 8, ice: 3, dragon: -15 }
		},
		'arkveld-gamma-wex': {
			name: 'Arkveld Gamma WEX Agitator SA (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "High-sustain counter build: Hasten Recovery II heals the chip damage your counters absorb, rewarding TU4's buffed sword combos with relentless aggression. Light on comfort skills — land your counters to stay safe.",
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Arkvulcan Mail β',
				Arms: 'Arkvulcan Vambraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Flayer 4', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Blight Resistance 2', type: 'comfort' },
				{ name: 'Evade Extender 1', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Hasten Recovery II', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Moxie Meal (Sild Garlic) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: 0, water: 4, thunder: 5, ice: -2, dragon: -13 }
		},
		'gogma-lords-soul': {
			name: "Gogma Lord's Soul SA (TU4)",
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: "High-damage, general-purpose Lord's Soul build: maxed Agitator and WEX with Mutual Hostility, Bad Blood, and Second Wind stacked through Gogmazios pieces and the G. Fulgur Transcend helm.",
			armor: {
				Head: 'G. Fulgur Helm β (Transcend)',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Udra Mirecoil γ',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Power Prolonger 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Peak Performance 2', type: 'dmg' },
				{ name: 'Ambush 1', type: 'dmg' },
				{ name: 'Resentment 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Razor Sharp 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility I', 'Guts (Tenacity)', 'Bad Blood I', 'Second Wind I'],
			meal: 'Moxie Meal (Sild Garlic) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: 1, water: -3, thunder: 2, ice: 5, dragon: -12 }
		},
		'omega-resonance': {
			name: "Omega Lord's Soul SA (TU3)",
			source: 'Game8',
			tier: 'craftable',
			rank: 'hr100',
			desc: "Multiplayer-ideal Omega Resonance build: +20% affinity or +10 attack near allies pushes the AGI/WEX/MM core to a 120% affinity ceiling with Critical Boost 5 and Master's Touch. Divine Blessing and Quick Sheathe pad the comfort.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Omega Vambraces α',
				Waist: 'Omega Accessory α',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (Rapid Morph 3 + Agitator 1) / Challenger Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Rapid Morph 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Divine Blessing 2', type: 'comfort' },
				{ name: "Master's Touch 1", type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Resonance I', 'Guts (Tenacity)'],
			meal: 'Moxie Meal (Sild Garlic) stacks with Guts (Tenacity) for double cart protection.',
			res: { fire: 10, water: -2, thunder: -5, ice: 2, dragon: -4 }
		}
	},
	artianWeapons: [
		{
			name: 'Mundus Altus',
			variant: 'standard',
			steps: [
				'Craft with 3x Paralysis (or Blast) parts — auto Power Phial, ③③③ slots',
				'Production for raw builds: 2x Attack +5, 1x Affinity +5',
				'Reinforce: ~3x Affinity +5 + 2x Attack +5 (doc target: 15-20% affinity, +60 sharpness, rest attack)',
				'Decos: Critical Jewel III + Critical Jewel II + Power Prolonger/Handicraft (Crit Boost 5 + PP3)'
			]
		},
		{
			name: 'Wicked Regnum',
			variant: 'gogma',
			steps: [
				'Element Focus for elemental sets; Attack Focus for raw (offset its -5% affinity with one Affinity reinforcement)',
				"Reroll set + group skills: Gogmapocalypse + Lord's Soul (Mutual Hostility) or Arkveld's Hunger + Lord's Soul",
				'Reinforce for max attack — ideally 2x Attack Boost EX; ceiling is 2x Attack Boost III + 1x Sharpness Boost EX'
			]
		}
	],
	weapons: [
		{
			element: 'Dragon',
			name: 'Blazing Mahaiah',
			info: 'Zoh Shia · Power Phial · Whiteflame Torrent bonus damage',
			cls: 'dragon'
		},
		{
			element: 'Thunder',
			name: 'High Bolt Axe',
			info: 'Lagiacrus · Convert Thunder Res + Power Prolonger 2 · thunder matchups',
			cls: 'thunder'
		},
		{
			name: 'Baran Defiance',
			info: 'Seregios · 25% affinity · Bladescale Honing pairs with Adrenaline Rush',
			cls: 'raw'
		}
	],
	tips: [
		{
			title: 'Full Release Slash Loop',
			lines: [
				'FRS is the damage loop — charge the Amp Gauge in sword mode, spend it on FRS windows',
				'Power Prolonger 3 doubles Amped State from 45s to 90s: several FRS per amp window',
				'FRS has hyperarmor during its animation and keeps Counterstrike refreshed'
			]
		},
		{
			title: 'Counters and Offsets',
			lines: [
				'Offset Rising Slash (axe) and Counter Rising Slash (sword) proc Counterstrike: +25 raw for 45s',
				'Follow Counter Rising Slash with Heavensward to heavily charge the Amp Gauge',
				'Offsets run on a rising threshold — a flash without the topple still allows the Heavy Slam follow-up'
			]
		},
		{
			title: 'Openers and Mantles',
			lines: [
				'Open hunts with a Sneak Attack — free damage and instant Powered Axe (+10 raw in axe mode)',
				'Rocksteady Mantle keeps combos uninterrupted, and tanked hits still trigger Counterstrike',
				'Rapid Morph underperforms — run Power Prolonger; save Rapid Morph for fun morph-rhythm sets'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Switch Axe hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max FRS Burst', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Mobility', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which affinity engine powers your Full Release Slash?',
					options: [
						{ label: 'Gore 4pc frenzy — Black Eclipse II affinity', value: 'gore-4pc' },
						{
							label: 'Second Wind stamina — Agitator + Max Might uptime',
							value: 'fulgur-agi-mm'
						},
						{ label: 'Zoh Shia crit + Super Recovery sustain', value: 'counter-agi-raw' }
					]
				},
				balanced: {
					text: 'How do you want to keep the pressure on?',
					options: [
						{
							label: 'Guts + Earplugs safety on a raw counter core',
							cssClass: 'balanced',
							value: 'guts-counterstrike'
						},
						{
							label: 'Elemental Absorption counters — Lagi + Gore crit',
							cssClass: 'balanced',
							value: 'lagi-gore-agi'
						}
					]
				},
				comfort: {
					text: 'What kind of comfort?',
					options: [
						{
							label: 'Evade Extender + Earplugs — dodge and reposition',
							cssClass: 'comfort',
							value: 'evasive-earplugs'
						},
						{
							label: 'Adrenaline Rush — turn dodges into raw',
							cssClass: 'comfort',
							value: 'regios-gore-comfy'
						},
						{
							label: 'Multiplayer wound-healing — Decimator comfort',
							cssClass: 'comfort',
							value: 'comfy-mp'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Switch Axe hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max FRS Burst', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Mobility', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Gogmapocalypse 4pc — Mutual Hostility II barrier',
							value: 'mutual-hostility'
						},
						{
							label: 'Gogma all-rounder — max WEX/AGI with Bad Blood',
							value: 'gogma-lords-soul'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Counter-heal loops — Hasten Recovery II Arkveld γ',
							cssClass: 'balanced',
							value: 'arkveld-gamma-wex'
						},
						{
							label: 'Multiplayer Resonance — party affinity + Guts',
							cssClass: 'balanced',
							value: 'omega-resonance'
						}
					]
				},
				comfort: {
					text: 'How do you want to stay safe?',
					options: [
						{
							label: 'Heal as you counter — chip damage recovered',
							cssClass: 'comfort',
							value: 'arkveld-gamma-wex'
						},
						{
							label: 'Divine Blessing + Quick Sheathe multiplayer safety',
							cssClass: 'comfort',
							value: 'omega-resonance'
						}
					]
				}
			}
		}
	},
	referenceKey: 'switch-axe',
	sourcesText:
		"Game8 Switch Axe Builds (TU4/v1.041) and the Wilds Switch Axe 'Crit Meta is Dead BTW' Google Doc (Sasch). The doc is mid-update and pre-dates TU4 — Game8 is primary for HR100 builds — and its sets omit elemental resistances, recorded here as unverified placeholders.",
	display: {
		weaponListTitle: 'Non-Artian Switch Axes',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
