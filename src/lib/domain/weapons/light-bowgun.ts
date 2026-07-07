import type { WeaponData } from '../types';

export const lightBowgun: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'black-eclipse': {
			name: 'Black Eclipse 2.0 LBG',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Rapid-fire Pierce at mid-range with the Zoh Shia gun. Black Eclipse II + Antivirus stack up to 70% affinity on top of Agitator and Maximum Might. Reactive playstyle: hold Critical Distance and dodge only when necessary.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'Gore Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Constitution 4', type: 'comfort' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Burst 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Ballistics 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Slugger 1', type: 'dmg' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse II', 'Adrenaline'],
			meal: 'Any Attack Up meal. Corrupted Mantle for more affinity and raw.',
			res: { fire: -10, water: 14, thunder: -2, ice: 8, dragon: -8 }
		},
		'lagi-rey-thunder': {
			name: 'Lagi-Rey Agitator Thunder LBG',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Max Thunder damage with the Lagiacrus gun: Convert Thunder Resistance turns Thunder Res 33 into Thunder Attack while Agitator, Latent Power, Maximum Might, and Azure Bolt stack raw and affinity for rapid-fire Thunder volleys.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Chain Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Thunder Attack 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Tetrad Shot 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Thunder Resistance 3', type: 'comfort' },
				{ name: 'Convert Thunder Resistance 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evade Extender 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Divine Blessing 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) stacks with Guts (Tenacity).',
			res: { fire: -7, water: 4, thunder: 33, ice: -8, dragon: -4 }
		},
		'evasion-spread': {
			name: 'Evasion Spread LBG',
			source: 'Game8',
			tier: 'craftable',
			desc: "Seregios Rebel Stopper Spread build: Evading Reload cancels Spread recoil while Nu Udra γ boosts raw. Adrenaline Rush and Razor's Edge reward active dodging; several free 1-slots for Divine Blessing or resistances.",
			armor: {
				Head: 'Udra Mirehelm γ',
				Chest: 'Regios Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Duna Wildcoil γ',
				Legs: 'Regios Greaves β',
				Charm: 'Counterattack Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Adrenaline Rush 3', type: 'dmg' },
				{ name: 'Burst 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Ballistics 2', type: 'dmg' },
				{ name: 'Opening Shot 2', type: 'dmg' },
				{ name: 'Spread/Power Shots 1', type: 'dmg' },
				{ name: 'Bladescale Loading 1', type: 'dmg' },
				{ name: 'Evading Reload 1', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Tool Specialist 2', type: 'comfort' }
			],
			setSkills: ["Razor's Edge I", 'Guts (Tenacity)'],
			meal: 'Azuz meal for Tumbler Meal (Hi) — big evasion boost. Corrupted Mantle.',
			res: { fire: 12, water: -2, thunder: -5, ice: -6, dragon: 0 }
		},
		'sere-gore-burst-step': {
			name: 'Sere-Gore Burst Step LBG',
			source: 'Game8',
			tier: 'craftable',
			desc: "High-risk, high-reward Pierce Burst Step build: stay close and dodge through attacks to keep Adrenaline Rush 5 active (extended by Razor's Edge). Out-damages Black Eclipse when you keep the buff up — punishing when you don't.",
			armor: {
				Head: 'Regios Helm β',
				Chest: 'Gore Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Regios Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counterattack Charm III'
			},
			skills: [
				{ name: 'Adrenaline Rush 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Ballistics 2', type: 'dmg' },
				{ name: 'Piercing Shots 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Slugger 1', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Evade Window 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Bleeding Resistance 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ["Razor's Edge I", 'Black Eclipse I', 'Adrenaline'],
			meal: 'Any Attack Up meal. Azuz Tumbler meal helps the dodge-heavy loop.',
			res: { fire: 4, water: 4, thunder: -4, ice: -3, dragon: -2 }
		},
		'fulgrey-burst-step': {
			name: 'FulgRey Crit Burst Step LBG',
			source: 'Game8',
			tier: 'craftable',
			desc: "Burst Step without the stamina anxiety: Second Wind's extra stamina bar keeps Maximum Might active through the stamina-heavy Burst Step combo while Agitator, Adrenaline Rush, and Latent Power stack affinity.",
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'G. Fulgur Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Counterattack Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Adrenaline Rush 4', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Ballistics 2', type: 'dmg' },
				{ name: 'Piercing Shots 1', type: 'dmg' },
				{ name: 'Slugger 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Second Wind I', 'Guts (Tenacity)'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) stacks with Guts (Tenacity).',
			res: { fire: -3, water: -2, thunder: 9, ice: -12, dragon: -4 }
		},
		'comfy-elemental': {
			name: 'Comfy Elemental LBG',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Survivability-first elemental build on a standard Artian gun: Evade Extender 3, Earplugs, Stun Resistance, Super Recovery, and Guts keep you standing while Agitator, Maximum Might, and Critical Element keep damage respectable.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Numinous Shroud β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Numinous Overlay β',
				Legs: 'Rey Sandgreaves γ',
				Charm: 'Earplugs Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Tetrad Shot 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evade Extender 3', type: 'comfort' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Super Recovery I', 'Guts (Tenacity)'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) doubles the anti-cart safety.',
			res: { fire: -4, water: -2, thunder: 16, ice: -9, dragon: -8 }
		},

		// --- HR 100+ builds ---
		'gogma-guts-elemental': {
			name: 'Gogmapocalypse Guts Elemental LBG',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Elemental rapid fire on the Gogma Artian with Mutual Hostility II as the damage engine and Guts (Tenacity) as the safety net. Agitator 5 + Peak Performance 5 with plenty of Lv2 slots left to customize.',
			armor: {
				Head: 'Duna Wildhelm γ',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gogmazios Coil α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Appraised (Attack Boost 3)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Tetrad Shot 1', type: 'dmg' },
				{ name: 'Ballistics 1', type: 'dmg' },
				{ name: 'Rapid Fire Up 1', type: 'dmg' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Guts (Tenacity)'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) stacks with Guts (Tenacity).',
			res: { fire: -16, water: 15, thunder: -4, ice: 11, dragon: -16 }
		},
		'crit-elemental-gog': {
			name: 'Crit Elemental Gog LBG',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Gogma Artian + Armor Transcending stack Burst Boost and Second Wind onto a WEX 5 / Agitator 5 crit core. Element Focus adds elemental ammo capacity; two Sharpness/Ammo Boost EX rolls reach 10 rapid-fire shots.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'G. Ebony Mail β (Transcend)',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'G. Ebony Coil β (Transcend)',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (Attack Boost 1 + Agitator 1)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Ballistics 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Tetrad Shot 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Earplugs 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Burst Boost I', 'Guts (Tenacity)', 'Second Wind I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) stacks with Guts (Tenacity).',
			res: { fire: -9, water: -1, thunder: -3, ice: -4, dragon: 3 }
		},
		'gore-normal': {
			name: 'Gore General-Purpose Normal LBG',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Rapid-fired Normal Ammo on an Attack Focus Gogma Artian — damages any monster with zero elemental ammo juggling. Black Eclipse II and Antivirus feed affinity; Speed Eating and Item Prolonger are free swap slots.',
			armor: {
				Head: 'Sororal Earrings α',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gore Coil α',
				Legs: 'Gore Greaves β',
				Charm: 'Golden Age Charm (Attack Boost 3 + Agitator 1)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Ballistics 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Normal Shots 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Item Prolonger 3', type: 'comfort' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse II', 'Guts (Tenacity)'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) stacks with Guts (Tenacity).',
			res: { fire: -3, water: 7, thunder: 2, ice: 4, dragon: 0 }
		},
		'meta-elemental': {
			name: 'Doc Meta Elemental (Gogmapocalypse)',
			source: 'Google Doc',
			tier: 'meta',
			rank: 'hr100',
			desc: 'The top of the Wilds meta: 4pc Gogmazios with Gogmapocalypse II and Peak Performance 5 behind an Element Focus Gogma Artian. Elemental Absorption procs off Adrenaline Rush i-frames. Run two identical guns for a gauge refresh.',
			armor: {
				Head: 'Gogmazios Helm α',
				Chest: 'Gogmazios Mail α',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gore Coil β',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Agitator Lv. 3 Talisman (god roll: Opening Shot 2 + Coalescence 2)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Elemental Absorption 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Opening Shot 1', type: 'dmg' },
				{ name: 'Ballistics 1', type: 'dmg' },
				{ name: 'Rapid Fire Up 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Aquatic/Oilsilt Mobility 1', type: 'comfort' }
			],
			setSkills: ['Gogmapocalypse II', "Gore Magala's Tyranny I"],
			meal: 'Village food buff (+5 raw) with Mega Demondrug, Might Seed, Demon Powder.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc images omit resistances.
		},
		'meta-raw': {
			name: 'Doc Meta Raw (Normal / Pierce)',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "One armor set, two raw playstyles: Normal (highest raw DPS, easy) or Pierce (Burst Step chaining, extremely mobile) on a Paralysis Gogma Artian with Gore Magala's Tyranny + Lord's Soul. Swap the ammo powder and weapon decos.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'G. Rathalos Vambraces β',
				Waist: 'Sororal Coil α (god roll: Gore Coil β)',
				Legs: 'Rathalos Greaves β',
				Charm: 'Agitator Lv. 3 Talisman (god roll: Ballistics 2 + Tetrad Shot 1 + Agitator 1)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Ballistics 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' }
			],
			setSkills: ["Gore Magala's Tyranny I", "Rathalos's Flare I", "Lord's Soul"],
			meal: 'Village food buff (+5 raw) with Mega Demondrug, Might Seed, Demon Powder.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc images omit resistances.
		},
		'meta-spread': {
			name: 'Doc Meta Spread (Bladescale)',
			source: 'Google Doc',
			tier: 'craftable',
			rank: 'hr100',
			desc: "Skill-expression Spread on the Seregios Rebel Stopper: Bladescale Loading grants three 40%-boosted shots per dodge, so aggressive evading is the whole game plan. Fulgur Anjanath's Will + Jin Dahaad's Revolt back the crit core.",
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'G. Fulgur Mail β',
				Arms: 'G. Fulgur Vambraces β',
				Waist: 'Dahaad Shardcoil γ',
				Legs: 'Dahaad Shardgreaves γ',
				Charm: 'Adrenaline Rush Lv. 3 Talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 4', type: 'dmg' },
				{ name: 'Adrenaline Rush 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Ballistics 2', type: 'dmg' },
				{ name: 'Bladescale Loading 1', type: 'dmg' },
				{ name: 'Foray 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evading Reload 1', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Bind Resistance 2', type: 'comfort' }
			],
			setSkills: ["Fulgur Anjanath's Will I", "Jin Dahaad's Revolt I", "Lord's Soul"],
			meal: 'Azuz Meal (Tumbler Hi) — worth roughly three points of Evade Window.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc images omit resistances.
		}
	},
	artianWeapons: [
		{
			name: 'Animilater',
			variant: 'standard',
			steps: [
				'Forge with 3 same-element rarity 8 parts, all Attack Infusion (1 Tube + 2 Devices)',
				'Reinforce: target 3x Attack +5 and 2x Capacity Boost +1 — Capacity is the priority',
				'Rolls are seeded at forge time — forge with junk parts to preview, reload if bad',
				'Decos: Opener/element + Crit Element/element + Focus/element 【3】s; craft one per element',
				'Mods: Elemental Ammo Powder + Rapid Fire Magazine'
			]
		},
		{
			name: 'Bethorned Agony',
			variant: 'gogma',
			steps: [
				'Element Focus for elemental ammo capacity; Attack Focus (+10 raw) for the Normal build (use Paralysis parts)',
				"Reroll set + group skills — doc targets Gore Magala's Tyranny + Lord's Soul; Game8 also runs Gogmapocalypse or Fulgur Anjanath's Will",
				'Reinforce: 3x Attack +5 with EX Amends, plus 2x Sharpness/Ammo Boost EX for 10-shot rapid fire with the Rapid Fire Magazine mod',
				'Mods: Elemental Ammo Powder + Special Ammo Magazine (2x Adhesive) or Rapid Fire Magazine'
			]
		}
	],
	weapons: [
		{
			name: 'Szelatya Clairgun',
			info: 'Zoh Shia · Rapid-fire Pierce/Thunder · Opening Shot 2',
			cls: 'raw'
		},
		{
			name: 'Rebel Stopper',
			info: 'Seregios · 20% affinity · Evading Reload Spread',
			cls: 'raw'
		},
		{
			element: 'Thunder',
			name: 'Thundacrus Rex',
			info: 'Lagiacrus · Convert Thunder Res · Rapid-fire Thunder',
			cls: 'thunder'
		},
		{
			element: 'Fire',
			name: 'Blazing Kaiah',
			info: 'Zoh Shia · Whiteflame Torrent · Best craftable Fire',
			cls: 'fire'
		},
		{
			element: 'Water',
			name: 'Nifl Mist',
			info: 'Mizutsune · Slicked Blade 3 · Best craftable Water',
			cls: 'water'
		},
		{
			element: 'Ice',
			name: 'Tail Catapult',
			info: 'Blangonga · 230 raw · Opening Shot 3 · Best craftable Ice',
			cls: 'ice'
		}
	],
	tips: [
		{
			title: 'Rapid Fire Uptime',
			lines: [
				'Rapid Fire Mode is a massive damage increase — protecting the gauge is priority one',
				'Place Adhesive Ammo when the gauge drops to ~50%, then shoot it for a big gauge refund',
				'Detonate 2-3 adjacent wounds with a charged Focus Strike for burst damage plus gauge',
				'Carry two identical guns: each has its own full gauge and Adhesive charges'
			]
		},
		{
			title: 'Positioning & Critical Distance',
			lines: [
				'Fire only when the crosshair is orange — outside Critical Distance ammo loses 50-90% damage',
				'Ballistics extends Critical Distance; 2 points enable point-blank Spread',
				'Burst Step through roars and attacks instead of rolling (except on Spread builds)'
			]
		},
		{
			title: 'Bowgun Mods',
			lines: [
				'Powder mods add +1 ammo level; Magazine mods add +1 capacity — set them per build',
				'Special Ammo Magazine doubles Adhesive charges; Rapid Fire Magazine adds RF capacity',
				'Corrupted Mantle after or halfway through an RF gauge boosts affinity, raw, and charge rate'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Light Bowgun hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Ammo DPS', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Support', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which ammo type?',
					options: [
						{ label: 'Rapid-fire Thunder — max elemental volleys', value: 'lagi-rey-thunder' },
						{
							label: 'Pierce Burst Steps — dodge into Adrenaline Rush 5',
							value: 'sere-gore-burst-step'
						},
						{ label: 'Pierce at range — Black Eclipse 70% affinity', value: 'black-eclipse' }
					]
				},
				balanced: {
					text: 'How do you want to keep damage flowing?',
					options: [
						{
							label: 'Second Wind stamina bar — Burst Step without dropping Maximum Might',
							cssClass: 'balanced',
							value: 'fulgrey-burst-step'
						},
						{
							label: 'Steady mid-range crits — Gore set + rapid-fire Pierce',
							cssClass: 'balanced',
							value: 'black-eclipse'
						}
					]
				},
				comfort: {
					text: 'What kind of comfort?',
					options: [
						{
							label: 'Earplugs + Super Recovery + Guts on elemental ammo',
							cssClass: 'comfort',
							value: 'comfy-elemental'
						},
						{
							label: 'Evade everything — Seregios Spread with Evading Reload',
							cssClass: 'comfort',
							value: 'evasion-spread'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Light Bowgun hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Ammo DPS', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Support', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which ammo type?',
					options: [
						{
							label: 'Elemental — 4pc Gogmazios meta, top DPS in the game',
							value: 'meta-elemental'
						},
						{ label: 'Raw Normal or Pierce — one set, two playstyles', value: 'meta-raw' },
						{
							label: 'Elemental crit — WEX 5 + Transcend set bonuses',
							value: 'crit-elemental-gog'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Mutual Hostility elemental with Guts safety net',
							cssClass: 'balanced',
							value: 'gogma-guts-elemental'
						},
						{
							label: 'General-purpose Normal — no elemental ammo juggling',
							cssClass: 'balanced',
							value: 'gore-normal'
						}
					]
				},
				comfort: {
					text: 'What kind of comfort?',
					options: [
						{
							label: 'Comfy Normal — Speed Eating, Earplugs, free swap slots',
							cssClass: 'comfort',
							value: 'gore-normal'
						},
						{
							label: 'Mobile Spread — Bladescale dodging and Tumbler meals',
							cssClass: 'comfort',
							value: 'meta-spread'
						}
					]
				}
			}
		}
	},
	referenceKey: 'light-bowgun',
	sourcesText:
		'Game8 Light Bowgun Builds (TU4/v1.041) and the Comprehensive Guide: LBG in Wilds Google Doc (v1.4.5, TU4.5). Google Doc builds do not list elemental resistances — those values are unverified placeholders.',
	display: {
		weaponListTitle: 'Non-Artian Light Bowguns',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
