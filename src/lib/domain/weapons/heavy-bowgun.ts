import type { WeaponData } from '../types';

export const heavyBowgun: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'gore-zoh-elemental': {
			name: '4x Gore-Zoh AGI Elemental HBG',
			source: 'Game8',
			tier: 'craftable',
			desc: 'High-damage Agitator build for elemental ammo. 4 pieces of Gore β power Black Eclipse II (+10 raw while Frenzied, +15 when cured) while Coalescence and Critical Element pump your element. Corrupted Mantle recommended.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Gore Mail β',
				Arms: 'Gore Vambraces β',
				Waist: 'Numinous Overlay β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Tetrad Shot 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Ballistics 1', type: 'dmg' },
				{ name: 'Evade Window 4', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse II', 'Adrenaline'],
			meal: 'Any Attack Up meal.',
			res: { fire: -10, water: 14, thunder: -2, ice: 8, dragon: -8 }
		},
		'fulgur-gore-spread': {
			name: 'Fulgur-Gore Spread HBG',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Spread shotgun on the Seregios Insurrection Cannon: Bladescale Loading and Evading Reload refill your clip every hop, so you shoot point blank without stopping to reload. Black Eclipse boosts affinity; Second Wind keeps Maximum Might up.',
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Gore Mail β',
				Arms: 'G. Fulgur Vambraces β',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Attack Boost 5', type: 'dmg' },
				{ name: 'Agitator 4', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Ballistics 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Bladescale Loading 1', type: 'dmg' },
				{ name: 'Evading Reload 1', type: 'dmg' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Divine Blessing 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Second Wind I'],
			meal: 'Any Attack Up meal.',
			res: { fire: -9, water: 6, thunder: 6, ice: -3, dragon: -8 }
		},
		'lagi-rey-sniper': {
			name: 'Lagi-Rey Thunder Sniper HBG',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Max Thunder damage from afar on the Thunderblitz Cannon. Convert Thunder Resistance turns Thunder Res 33 into more Thunder Attack while Latent Power, Maximum Might, and Azure Bolt stack affinity to 110%. Precise Jewels extend sniping range.',
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
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Ballistics 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Tetrad Shot 3', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Convert Thunder Resistance 1', type: 'dmg' },
				{ name: 'Evade Extender 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Thunder Resistance 3', type: 'comfort' },
				{ name: 'Divine Blessing 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Any Attack Up meal.',
			res: { fire: -7, water: 4, thunder: 33, ice: -8, dragon: -4 }
		},
		'reygoreduna-pierce': {
			name: 'ReyGoreDuna Max Frenzy HBG',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Pierce build for any monster: Antivirus, Agitator, WEX, and Maximum Might push affinity up to 152% on the Mountainous Roar, with Guts and solid evade comfort. Swap to the Insurrection Cannon for a Spread variant.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Gore Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gore Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Challenger Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Slicked Blade 3', type: 'dmg' },
				{ name: 'Opening Shot 2', type: 'dmg' },
				{ name: 'Tetrad Shot 2', type: 'dmg' },
				{ name: 'Piercing Shots 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Black Eclipse I'],
			meal: 'Any Attack Up meal.',
			res: { fire: -5, water: 6, thunder: 3, ice: -2, dragon: -2 }
		},
		'comfy-elemental': {
			name: 'Comfy Elemental HBG',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Survivability-first elemental build: Earplugs 3, Evade Extender, and Super Recovery keep you shooting while Agitator, Coalescence, and Critical Element provide enough damage for endgame.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Numinous Overlay β',
				Legs: 'Gore Greaves β',
				Charm: 'Mighty Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Tetrad Shot 3', type: 'dmg' },
				{ name: 'Special Ammo Boost 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' },
				{ name: 'Adaptability 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Super Recovery I'],
			meal: 'Any Attack Up meal.',
			res: { fire: -8, water: 8, thunder: 6, ice: 1, dragon: -10 }
		},
		'odoguts-gravios': {
			name: 'OdoGuts Gravios Wyvernblast',
			source: 'Google Doc',
			tier: 'craftable',
			desc: "Shield-tank Wyvernblast on the Gravios gun: Lord's Soul grants +5% attack and once-per-life one-shot protection while Guard Up 3 and auto-block let you facetank. Stack raw with Peak Performance and Artillery for huge blast damage.",
			armor: {
				Head: 'Duna Wildhelm γ',
				Chest: 'G. Ebony Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Duna Wildcoil γ',
				Legs: 'G. Ebony Greaves β',
				Charm: 'Agitator Lv 2 Talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Special Ammo Boost 2', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Guard Up 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Tool Specialist 2', type: 'comfort' },
				{ name: 'Divine Blessing 1', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", "Ebony Odogaron's Power I", "Uth Duna's Cover I"],
			meal: 'Village food buff (+5 raw) assumed, plus Mega Demondrug and Might Seed.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc builder screenshots omit resistances.
		},

		// --- HR 100+ builds ---
		'hybrid-eleblast': {
			name: 'Hybrid Elemental + Wyvernblast',
			source: 'Google Doc',
			tier: 'meta',
			rank: 'hr100',
			desc: 'Top of the TU4.5 meta: shoot elemental ammo until an opening, then unload Wyvernblast for its huge damage peaks. 4pc Gogmazios keeps Peak Performance rolling and the Gogmapocalypse shield makes it forgiving. Needs a Special Ammo Boost 2 talisman.',
			armor: {
				Head: 'Gogmazios Helm α',
				Chest: 'Gogmazios Mail α',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Gore Coil β',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Special Ammo Boost Lv 2 Talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Coalescence 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Special Ammo Boost 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Elemental Absorption 2', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Opening Shot 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' }
			],
			setSkills: ['Gogmapocalypse II', "Gore Magala's Tyranny I"],
			meal: 'Village food buff (+5 raw), Mega Demondrug, Might Seed, and Demon Powder assumed.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc builder screenshots omit resistances.
		},
		'pure-spread': {
			name: 'Pure Spread (Seregios)',
			source: 'Google Doc',
			tier: 'craftable',
			rank: 'hr100',
			desc: 'Mobile hop-and-shoot raw build. Bladescale Loading is so strong the Seregios gun beats even Gogma Artians for Spread — every dodge reloads and buffs your next shots. The only HBG playstyle that loves the Evasion Mantle.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'G. Fulgur Mail β',
				Arms: 'G. Fulgur Vambraces β',
				Waist: 'Dahaad Shardcoil γ',
				Legs: 'Dahaad Shardgreaves γ',
				Charm: 'Adrenaline Rush Lv 3 Talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 4', type: 'dmg' },
				{ name: 'Adrenaline Rush 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Ballistics 2', type: 'dmg' },
				{ name: 'Bladescale Loading 1', type: 'dmg' },
				{ name: 'Evading Reload 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Foray 1', type: 'dmg' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Bind Resistance 2', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", "Fulgur Anjanath's Will I", "Jin Dahaad's Revolt I"],
			meal: 'Azuz Meal (Tumbler Hi) — acts as 3 extra points of Evade Window.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc builder screenshots omit resistances.
		},
		wyvernblast: {
			name: 'Wyvernblast Specialist',
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "The highest-DPS, highest-skill HBG playstyle — trounces Spread against Arkveld. Demands precise positioning, perfect guards, and focus-strike aim while crouched. Paralysis Gogma Artian with Ebony Odogaron's Power; Counterstrike pays out when you do get hit.",
			armor: {
				Head: 'Duna Wildhelm γ',
				Chest: 'G. Ebony Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gogmazios Coil α',
				Legs: 'G. Ebony Greaves β',
				Charm: 'Agitator Lv 3 Talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Artillery 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Special Ammo Boost 2', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Ballistics 1', type: 'dmg' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Divine Blessing 1', type: 'comfort' }
			],
			setSkills: ["Ebony Odogaron's Power II", "Lord's Soul"],
			meal: 'Azuz Meal (Tumbler Hi) — with Evade Window 2 acts as effective EW5.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc builder screenshots omit resistances.
		},
		'crit-ele-gog': {
			name: 'Crit Elemental Gog HBG',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Gogma Artian plus Armor Transcending stacks WEX 5, Agitator 5, and Maximum Might for up to 107% affinity on elemental ammo. Burst Boost extends Burst and Second Wind keeps Maximum Might active; Quick Sheathe and Earplugs round out comfort.',
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
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Ballistics 3', type: 'dmg' },
				{ name: 'Critical Element 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Tetrad Shot 3', type: 'dmg' },
				{ name: 'Attack Boost 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Earplugs 1', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Burst Boost I', 'Guts (Tenacity)', 'Second Wind I'],
			meal: 'Any Attack Up meal.',
			res: { fire: -9, water: -1, thunder: -3, ice: -4, dragon: 3 }
		},
		'gore-pierce': {
			name: 'Gore General-Purpose Pierce HBG',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'One gun for every hunt: Pierce ammo on a Paralysis Gogma Artian kills anything without elemental prep. Guard 3, Offensive Guard, Divine Blessing 3, and Guts make it a comfortable shield-backed loadout.',
			armor: {
				Head: 'Sororal Earrings α',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Golden Age Charm (Attack Boost 3 + Divine Blessing 3)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Opening Shot 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Guard 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse II', 'Guts (Tenacity)'],
			meal: 'Any Attack Up meal.',
			res: { fire: -3, water: 7, thunder: 2, ice: 4, dragon: 0 }
		},
		'gogma-guts-elemental': {
			name: 'Gogmapocalypse Guts Elemental HBG',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Mutual Hostility II supercharges elemental bowgunning while Guts (Tenacity) survives one lethal hit — double protection with a Moxie meal. Peak Performance 5 and Agitator 5 carry the damage; several Lv2 slots leave room to customize.',
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
				{ name: 'Ballistics 3', type: 'dmg' },
				{ name: 'Tetrad Shot 3', type: 'dmg' },
				{ name: 'Element Attack 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Earplugs 3', type: 'comfort' },
				{ name: 'Speed Eating 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Shock Absorber 1', type: 'comfort' }
			],
			setSkills: ['Mutual Hostility II', 'Guts (Tenacity)'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -16, water: 15, thunder: -4, ice: 11, dragon: -16 }
		}
	},
	artianWeapons: [
		{
			name: 'Greifen',
			variant: 'standard',
			steps: [
				'Craft with 3 same-element rarity 8 Attack Infusion parts — ③③③ slots (Thunder uses Paralysis parts, Ice uses Sleep parts for CC ammo)',
				'Reinforce: 3x Attack +5, 2x Capacity Boost +1 — capacity first; savescum by forging a junk Artian to reveal the reinforcement seed',
				'Decos: Element Attack 3 + Critical Element 3 + Opening Shot via hybrid jewels (e.g. Opener/Blaze, Crit Elem/Blaze)',
				'Mods: Elemental Ammo Powder + Ignition Mode Upgrade; craft one per element'
			]
		},
		{
			name: 'Trembling Hels',
			variant: 'gogma',
			steps: [
				'Convert your Greifen; the Focus cannot be rerolled — Element Focus keeps 8 elemental ammo and neutral affinity, Attack Focus (+10 raw) for Wyvernblast and Hybrid builds',
				"Reroll set + group skills until Gogmapocalypse or Gore Magala's Tyranny + Lord's Soul (Ebony Odogaron's Power for Wyvernblast)",
				'Reinforce: 3x Attack +5, 2x Capacity Boost EX — two Sharpness/Ammo Boost EX pushes elemental ammo capacity to 10',
				'Gogma elemental guns beat craftables by over 20% DPS (Google Doc)'
			]
		}
	],
	weapons: [
		{
			name: 'Insurrection Cannon',
			info: 'Seregios · Bladescale Loading + Evading Reload · Spread shotgun of choice',
			cls: 'raw'
		},
		{
			name: 'Mountainous Roar',
			info: 'Mizutsune · Pierce Lv 3, 6-shot clip · Slicked Blade 3',
			cls: 'raw'
		},
		{
			name: 'Gravios Gigahowl',
			info: 'Gravios · Spread + big Ignition gauge · HR50 Wyvernblast pick',
			cls: 'raw'
		},
		{
			element: 'Fire',
			name: 'Blazing Mitran',
			info: 'Zoh Shia · Best craftable Fire · Whiteflame Torrent',
			cls: 'fire'
		},
		{
			element: 'Water',
			name: 'Dalgap-of-the-Waves',
			info: 'Uth Duna · Best craftable Water · Double Elemental Boost Magazine',
			cls: 'water'
		},
		{
			element: 'Thunder',
			name: 'Thunderblitz Cannon',
			info: 'Lagiacrus · Tetrad Shot 2 + Convert Thunder Res · Best craftable Thunder',
			cls: 'thunder'
		},
		{
			element: 'Ice',
			name: 'Steel Assault',
			info: 'Ore · Best craftable Ice',
			cls: 'ice'
		}
	],
	tips: [
		{
			title: 'Shield & Guarding',
			lines: [
				'HBG auto-blocks while unsheathed — manually block for Perfect Guards, which negate stamina use and trigger Offensive Guard on builds that run it',
				"Guard Up handles unblockables like Arkveld's grab and Zoh Shia's fire breath",
				'You cannot passive-block while crouched in Wyvernblast — perfect guards only'
			]
		},
		{
			title: 'Ignition Mode',
			lines: [
				'Wyvernblast is the highest-DPS special ammo but locks you crouched in place; Wyvernheart is longer range and more comfortable after its TU4 buffs',
				'Recharge Ignition gauge with charged Ignition Mode focus strikes (and Wyverncounters on clash-friendly builds)',
				'Always run the Ignition Mode Upgrade mod for +15% special ammo damage'
			]
		},
		{
			title: 'Ammo & Mods',
			lines: [
				'Match your Ammo Powder / Magazine mods to the ammo you actually fire',
				'Spread generates the most Ignition gauge — hop after every shot to handle recoil; Ballistics 2 lets Spread hit point-blank',
				'Fire Pierce along the monster’s longest axis and stay at Critical Distance (orange crosshair) for full damage'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Heavy Bowgun hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Ammo DPS', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Shielded Comfort', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which ammo engine?',
					options: [
						{
							label: 'Spread shotgun — hop, auto-reload, point blank',
							value: 'fulgur-gore-spread'
						},
						{ label: 'Elemental crits — 4pc Gore Frenzy engine', value: 'gore-zoh-elemental' },
						{ label: 'Thunder sniper — pick weak spots from afar', value: 'lagi-rey-sniper' }
					]
				},
				balanced: {
					text: 'How do you want to keep damage flowing?',
					options: [
						{
							label: 'Pierce everything — one gun for any monster',
							cssClass: 'balanced',
							value: 'reygoreduna-pierce'
						},
						{
							label: 'Elemental with Earplugs and evades built in',
							cssClass: 'balanced',
							value: 'comfy-elemental'
						}
					]
				},
				comfort: {
					text: 'What kind of safety net?',
					options: [
						{
							label: 'Comfy elemental — Earplugs 3 + Super Recovery',
							cssClass: 'comfort',
							value: 'comfy-elemental'
						},
						{
							label: "Shield facetank — Guard Up + Lord's Soul Wyvernblast",
							cssClass: 'comfort',
							value: 'odoguts-gravios'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Heavy Bowgun hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max Ammo DPS', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Shielded Comfort', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which max-damage engine?',
					options: [
						{ label: 'Hybrid Ele + Wyvernblast — the TU4.5 meta pick', value: 'hybrid-eleblast' },
						{ label: 'Wyvernblast mastery — highest ceiling, hardest', value: 'wyvernblast' },
						{ label: 'Seregios Spread — mobile hop-and-shoot raw', value: 'pure-spread' }
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Crit elemental Gogma — WEX 5 with comfort slots',
							cssClass: 'balanced',
							value: 'crit-ele-gog'
						},
						{
							label: 'General-purpose Pierce — no elemental prep',
							cssClass: 'balanced',
							value: 'gore-pierce'
						}
					]
				},
				comfort: {
					text: 'How do you want to stay safe?',
					options: [
						{
							label: 'Guts + Mutual Hostility — double one-shot protection',
							cssClass: 'comfort',
							value: 'gogma-guts-elemental'
						},
						{
							label: 'Guard + Divine Blessing — shield-backed Pierce',
							cssClass: 'comfort',
							value: 'gore-pierce'
						}
					]
				}
			}
		}
	},
	referenceKey: 'heavy-bowgun',
	sourcesText:
		'Game8 Heavy Bowgun Builds (TU4, May 2026) and the MH Wilds Heavy Bowgun Guide Google Doc (MHGH community, v1.4.5/TU4.5). Google Doc builds do not list elemental resistances — those values are unverified placeholders.',
	display: {
		weaponListTitle: 'Non-Artian Heavy Bowguns',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
