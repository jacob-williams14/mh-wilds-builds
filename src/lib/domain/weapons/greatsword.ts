import type { WeaponData } from '../types';

export const greatsword: WeaponData = {
	builds: {
		// --- HR 50+ builds ---
		'lagi-rey-guts': {
			name: 'Lagi-Rey Guts Counter GS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'High-damage Guts build using three Gamma pieces and Lagi armor. Raw attack via Attack Boost and Agitator with comfort from Divine Blessing, Evade Extender, and Earplugs. Counter Charm III at HR50+; Appraised (Attack Boost 3 + Counterstrike 1) at HR100+.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Counter Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Attack Boost 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -7, water: 4, thunder: 13, ice: -8, dragon: -4 }
		},
		'lagizoh-crit-sleep': {
			name: 'LAgiZoh Crit Sleep GS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'High-damage AGI + WEX build that trades one level of Super Recovery for more affinity and Earplugs 2. Azure Bolt adds affinity and bonus thunder damage. Sleep Varianza opens bombing windows.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Numinous Greaves β',
				Charm: 'Exploiter Charm II (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Elemental Absorption 1', type: 'dmg' },
				{ name: 'Recovery Speed 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Super Recovery I', 'Azure Bolt I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: -8, water: 8, thunder: 11, ice: -2, dragon: -16 }
		},
		'fulgore-zoh-agitator': {
			name: 'Ful-Gore Zoh Agitator GS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Comfortable high-damage Agitator build. 2pc G. Fulgur β (Second Wind I) keeps Maximum Might active through a secondary stamina gauge; 2pc Gore β brings Black Eclipse; Earplugs 2 catches roar DPS windows.',
			armor: {
				Head: 'G. Fulgur Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Fulgur Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counter Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Attack Boost 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Ward of Wyveria', 'Second Wind I', 'Black Eclipse I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: -8, water: 6, thunder: 4, ice: -2, dragon: -10 }
		},
		'goreduna-comfort': {
			name: 'GoreDuna Comfort GS',
			source: 'Game8',
			tier: 'craftable',
			desc: 'Comfort and mobility first: Evade Window 3, Evade Extender, Quick Sheathe, Recovery Up, and Tool Specialist make dodging and repositioning easy while WEX, Antivirus, and Maximum Might keep damage respectable.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Gore Mail α',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Duna Wildcoil γ',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Mighty Charm III (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Agitator 2', type: 'dmg' },
				{ name: 'Attack Boost 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Evade Window 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Tool Specialist 2', type: 'comfort' },
				{ name: 'Recovery Up 1', type: 'comfort' }
			],
			setSkills: ['Protective Veil I', 'Guts (Tenacity)', 'Black Eclipse I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -6, water: 12, thunder: -4, ice: 1, dragon: -2 }
		},
		'dark-knight': {
			name: 'Dark Knight GS',
			source: 'Game8',
			tier: 'craftable',
			desc: "High-risk, high-reward: The Blackest Night puts you at 1 HP to activate Heroics while True Shadowbringer's Darkside drain keeps you in the threshold. Undead Redemption protects red HP. Demands strong monster knowledge.",
			armor: {
				Head: 'Bale Burgeonet α',
				Chest: 'Bale Cuirass α',
				Arms: 'Bale Gauntlets α',
				Waist: 'Bale Flanchard α',
				Legs: 'Bale Sollerets α',
				Charm: 'Grit Charm IV (HR50+) / Appraised (HR100+)'
			},
			skills: [
				{ name: 'Latent Power 5', type: 'dmg' },
				{ name: 'Resentment 5', type: 'dmg' },
				{ name: 'Heroics 4', type: 'dmg' },
				{ name: 'Dragon Attack 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Agitator 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Darkside 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Divine Blessing 3', type: 'comfort' },
				{ name: 'Quick Sheathe 2', type: 'comfort' }
			],
			setSkills: ['The Blackest Night'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) guards the low-HP playstyle.',
			res: { fire: 10, water: 0, thunder: -10, ice: 0, dragon: 15 }
		},

		// --- HR 100+ builds ---
		'bale-dahaad-gore': {
			name: 'Bale Dahaad Gore GS (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Triple set bonus via the Gogma Artian: Bale, Gore, and Dahaad bonuses plus Guts (Tenacity). Keeps Resentment and Dark Arts active through red health for both raw and elemental damage.',
			armor: {
				Head: 'Bale Burgeonet α',
				Chest: 'Dahaad Shardmail γ',
				Arms: 'Bale Gauntlets α',
				Waist: 'Dahaad Shardcoil γ',
				Legs: 'Gore Greaves β',
				Charm: 'Counter Charm III'
			},
			skills: [
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Resentment 3', type: 'dmg' },
				{ name: 'Latent Power 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Bind Resistance 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Black Eclipse I', 'Binding Counter I', 'Dark Arts'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -4, water: 7, thunder: -7, ice: 6, dragon: 3 }
		},
		'comfy-arkveld-gamma': {
			name: 'Comfy Arkveld Gamma GS',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Agi-Wex-MM damage with numerous comfort skills — Recovery Up 3, Earplugs 2, and Hasten Recovery keep HP and stamina topped up. Gogmazios weapon and vambraces plus Arkveld γ armor.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Arkvulcan Coil γ',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Elemental Absorption 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Flayer 1', type: 'dmg' },
				{ name: 'Recovery Up 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Hasten Recovery I', 'Second Wind I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 4, water: 3, thunder: -5, ice: 4, dragon: -11 }
		},
		'offense-arkveld-gamma': {
			name: 'Offense Focus Arkveld Gamma GS',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Trades some of the Comfy Arkveld Gamma comfort for even more damage — Bale Flanchard brings Dark Arts and Resentment into the same Agi-Wex-MM core.',
			armor: {
				Head: 'Arkvulcan Helm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Bale Flanchard α',
				Legs: 'Arkvulcan Greaves γ',
				Charm: 'Challenger Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Flayer 2', type: 'dmg' },
				{ name: 'Handicraft 2', type: 'dmg' },
				{ name: 'Resentment 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Earplugs 2', type: 'comfort' },
				{ name: 'Blight Resistance 1', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Dark Arts', 'Hasten Recovery I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: 7, water: -1, thunder: -4, ice: 4, dragon: -8 }
		},
		'gogmax-agi-wex': {
			name: 'GogMax Agi Wex GS (TU4)',
			source: 'Game8',
			tier: 'mixed',
			rank: 'hr100',
			desc: 'Gogma Artian (Affinity Focus) + Armor Transcending stack multiple set and group bonuses. Affinity ceiling 110%; Second Wind sustains Maximum Might and Super Recovery + Recovery Speed keep HP full.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Udra Miremail γ',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'G. Fulgur Coil β (Transcend)',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Appraised (WEX 1 + Handicraft 1) / Exploiter Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Handicraft 3', type: 'dmg' },
				{ name: 'Offensive Guard 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Recovery Speed 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Guts (Tenacity)', 'Second Wind I', 'Super Recovery I'],
			meal: 'Sild Garlic (Moxie) stacks with Guts (Tenacity) for double OHKO protection.',
			res: { fire: -3, water: 4, thunder: 1, ice: 1, dragon: -11 }
		},
		'bale-lords-soul': {
			name: "Bale + Lord's Soul + Bad Blood",
			source: 'Google Doc',
			tier: 'craftable',
			rank: 'hr100',
			desc: "True Shadowbringer's self-drain makes GS the only weapon that runs Resentment consistently — every charged slash benefits. 2pc Bale adds shockwaves, Bad Blood adds free damage. On par with an optimal Gogma set.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Udra Mirebraces γ',
				Waist: 'Bale Flanchard α',
				Legs: 'Bale Sollerets α',
				Charm: 'Power Charm III (Latent Power 3)'
			},
			skills: [
				{ name: 'Latent Power 5', type: 'dmg' },
				{ name: 'Resentment 5', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Darkside 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Recovery Speed 3', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", 'Bad Blood I', 'Soul of the Dark Knight (2pc)'],
			meal: "Wild Jerky in the pouch — Recovery Speed offsets Darkside's drain. Any Attack Up meal.",
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc screenshots omit resistances.
		},
		'dosha-bale': {
			name: "Dosha + Bale + Lord's Soul",
			source: 'Google Doc',
			tier: 'mixed',
			rank: 'hr100',
			desc: "Doshaguma's Might grants 10 raw for three minutes after an offset or power clash — a consistent, refreshable buff on top of the Gogma Artian's Soul of the Dark Knight + Lord's Soul roll. Consistently good.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Bale Gauntlets α',
				Waist: 'Doshaguma Coil β (Transcend)',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Agitator Lv. 3 Talisman'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Latent Power 2', type: 'dmg' },
				{ name: 'Peak Performance 2', type: 'dmg' },
				{ name: 'Resentment 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ["Lord's Soul", "Doshaguma's Might I", 'Soul of the Dark Knight I'],
			meal: "Sild Garlic (Moxie) stacks with Guts from Lord's Soul for double OHKO protection.",
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc screenshots omit resistances.
		},
		'crit-draw-gogma': {
			name: 'Critical Draw Gogma + Bale',
			source: 'Google Doc',
			tier: 'meta',
			rank: 'hr100',
			desc: 'Hit-and-run Crit Draw playstyle maxing every raw booster: Adrenaline Rush 5 + Peak Performance 5, with the Gogmapocalypse II shield extending Peak Performance uptime. Attack Infusion Gogma Artian; Evasion Mantle recommended.',
			armor: {
				Head: 'Gogmazios Helm α',
				Chest: 'Gogmazios Mail α',
				Arms: 'Gogmazios Vambraces α',
				Waist: 'Bale Flanchard α',
				Legs: 'Gogmazios Greaves α',
				Charm: 'Agitator Lv. 3 Talisman'
			},
			skills: [
				{ name: 'Adrenaline Rush 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Peak Performance 5', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Critical Boost 3', type: 'dmg' },
				{ name: 'Critical Draw 3', type: 'dmg' },
				{ name: 'Focus 3', type: 'dmg' },
				{ name: 'Elemental Absorption 2', type: 'dmg' },
				{ name: 'Maximum Might 2', type: 'dmg' },
				{ name: 'Resentment 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Handicraft 1', type: 'dmg' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Speed Eating 2', type: 'comfort' },
				{ name: 'Aquatic/Oilsilt Mobility 1', type: 'comfort' }
			],
			setSkills: ['Gogmapocalypse II', 'Soul of the Dark Knight I'],
			meal: 'Any Attack Up meal. Sild Garlic (Moxie) for anti-OHKO safety.',
			res: { fire: 0, water: 0, thunder: 0, ice: 0, dragon: 0, unverified: true } // Unverified placeholder totals — Google Doc screenshots omit resistances.
		}
	},
	artianWeapons: [
		{
			name: 'Varianza',
			variant: 'standard',
			steps: [
				'Craft with Sleep parts (Paralysis also works) — ③③③ slots',
				'Infusions: 3x Attack for max raw, or 1x Affinity + 2x Attack for balance',
				'Reinforce: 5x Attack +5',
				'Decos: Critical Jewel III + Focus/Handicraft + Guardian/Handicraft (plain Focus III / Guardian III also fine)'
			]
		},
		{
			name: 'Ostrak Oblivion',
			variant: 'gogma',
			steps: [
				'Convert your Varianza; the Focus cannot be rerolled — Affinity Focus for consistent damage, Attack Focus for the biggest TCS hits',
				"Reroll set + group skills until Soul of the Dark Knight + Lord's Soul (match the set bonus to your build)",
				'Reinforce: 2x Attack EX, 2x Attack III, 1x Sharpness/Ammo Boost EX (max 2 of the same level)',
				'Game8 Attack-Focus alternative: 3x Attack +5, Affinity +10 (EX), Sharpness +30'
			]
		}
	],
	weapons: [
		{
			element: 'Dragon',
			name: 'True Shadowbringer',
			info: 'Omega · Darkside 1 · Best craftable — enables Resentment',
			cls: 'dragon'
		},
		{
			element: 'Dragon',
			name: 'Blazing Veiah',
			info: 'Zoh Shia · White Sharpness · Whiteflame Torrent',
			cls: 'dragon'
		},
		{
			element: 'Thunder',
			name: 'High Lagia Blade',
			info: 'Lagiacrus · Fits Crit Boost 5 + Focus 3',
			cls: 'thunder'
		}
	],
	tips: [
		{
			title: 'True Charged Slash Loop',
			lines: [
				'Fast TCS combos are the core damage loop — Focus 3 is non-negotiable',
				'Use Offset Attacks whenever possible; charge them for the Follow-up Cross Slash',
				'On wounds, run the TCS-Perforate Loop for continuous big hits'
			]
		},
		{
			title: 'Tackle Through Everything',
			lines: [
				'Tackle through roars and attacks to keep combos going',
				'Hyper-armoring through a launch attack triggers Counterstrike (+25 raw)',
				'Perfect Guards activate Offensive Guard; Power Clashes trigger Binding Counter',
				'Rocksteady Mantle helps while learning the commitment windows'
			]
		},
		{
			title: 'Sleep Bombing',
			lines: [
				'Sleep Varianza / Ostrak Oblivion periodically puts monsters to sleep',
				'Plant Large or Mega Barrel Bombs and land a wake-up True Charged Slash',
				'Position so your TCS hits the monster before the bombs — use Focus Mode to aim'
			]
		}
	],
	flow: {
		hr50: {
			title: 'What kind of Greatsword hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max TCS Damage', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Forgiveness', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{ label: 'AGI + WEX crit with Sleep-bombing windows', value: 'lagizoh-crit-sleep' },
						{ label: 'Raw Attack Boost + Guts — tackle everything', value: 'lagi-rey-guts' },
						{ label: 'High-risk Heroics — stay at low HP, hit hardest', value: 'dark-knight' }
					]
				},
				balanced: {
					text: 'How do you want to keep damage flowing?',
					options: [
						{
							label: 'Second Wind + Earplugs — never drop Maximum Might',
							cssClass: 'balanced',
							value: 'fulgore-zoh-agitator'
						},
						{
							label: 'Guts + Divine Blessing safety net on a raw build',
							cssClass: 'balanced',
							value: 'lagi-rey-guts'
						}
					]
				},
				comfort: {
					text: 'What kind of forgiveness?',
					options: [
						{
							label: 'Evasion + mobility — dodge, reposition, retry',
							cssClass: 'comfort',
							value: 'goreduna-comfort'
						},
						{
							label: 'Roar-proof — Earplugs + a spare stamina bar',
							cssClass: 'comfort',
							value: 'fulgore-zoh-agitator'
						}
					]
				}
			}
		},
		hr100: {
			title: 'What kind of Greatsword hunter are you?',
			q1Text: "What's your top priority?",
			q1Options: [
				{ label: 'Max TCS Damage', value: 'damage' },
				{ label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
				{ label: 'Comfort & Forgiveness', cssClass: 'comfort', value: 'comfort' }
			],
			q2: {
				damage: {
					text: 'Which damage engine?',
					options: [
						{
							label: 'Triple set bonus — red-health Dark Arts + Resentment',
							value: 'bale-dahaad-gore'
						},
						{
							label: 'Resentment loops — True Shadowbringer self-drain',
							value: 'bale-lords-soul'
						},
						{
							label: 'Max WEX/AGI Arkveld γ — comfort traded for damage',
							value: 'offense-arkveld-gamma'
						}
					]
				},
				balanced: {
					text: 'Which balanced package?',
					options: [
						{
							label: 'Comfy Arkveld γ — AGI/WEX/MM + Recovery Up',
							cssClass: 'balanced',
							value: 'comfy-arkveld-gamma'
						},
						{
							label: 'GogMax — Gogma Artian + Transcend + Super Recovery',
							cssClass: 'balanced',
							value: 'gogmax-agi-wex'
						},
						{
							label: "Offset counters — Doshaguma's Might refreshable raw",
							cssClass: 'balanced',
							value: 'dosha-bale'
						}
					]
				},
				comfort: {
					text: 'How do you want to stay safe?',
					options: [
						{
							label: 'Recovery Up + Earplugs + Guts — sustain through hits',
							cssClass: 'comfort',
							value: 'comfy-arkveld-gamma'
						},
						{
							label: 'Crit Draw hit-and-run — sheathed mobility, big draw hits',
							cssClass: 'comfort',
							value: 'crit-draw-gogma'
						}
					]
				}
			}
		}
	},
	referenceKey: 'greatsword',
	sourcesText:
		'Game8 Greatsword Builds (TU4/v1.041) and the MH:Wilds GS Endgame Meta Sets Google Doc (Mathalos Nest). Google Doc builds do not list elemental resistances — those values are unverified placeholders.',
	display: {
		weaponListTitle: 'Non-Artian Greatswords',
		comfortTitle: 'Comfort Skills',
		weaponLayout: 'chip'
	}
};
