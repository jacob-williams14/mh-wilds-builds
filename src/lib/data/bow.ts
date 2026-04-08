import type { WeaponData } from './types';

export const bow: WeaponData = {
	builds: {
		'gore-lagi': {
			name: '2pc Gore + 2pc Lagi',
			stars: '★★★★★',
			source: 'Compendium',
			desc: 'Top non-Artian Compendium build. Gore + Lagiacrus with Weakness Exploit, Coalescence, and Frenzy synergy. Requires Droolshroom (Black Belt Lo) with Constitution 3.',
			armor: {
				Head: 'Gore Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Gore Coil α',
				Legs: 'Lagiacrus Greaves β',
				Charm: 'Counterattack Charm'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 3', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Coalescence 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Speed Eating 1', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', "Leviathan's Fury"],
			meal: 'Droolshroom (Black Belt Lo) with Con 3. Meat +2 ATK.',
			// Unverified placeholder totals — Compendium screenshots omit resistances.
			res: { fire: -12, water: 11, thunder: 7, ice: 0, dragon: -9 }
		},
		'comfy-gore-lagi': {
			name: 'Comfy 2pc Gore + 2pc Lagi',
			stars: '★★★★★',
			source: 'Compendium',
			desc: 'Baseline comfort variant that does not need shrooms to function comfortably. Constitution 5 frees the meal slot for Moxie or Caprice.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Lagiacrus Mail β',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Gore Coil α',
				Legs: 'Gore Greaves β',
				Charm: 'Counterattack Charm'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' },
				{ name: 'Agitator 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Recovery Speed 1', type: 'comfort' }
			],
			setSkills: ["Leviathan's Fury", 'Black Eclipse I'],
			meal: 'Con 5 = free meal. Sild Garlic (Moxie) or Airy Egg (Caprice Hi, +15 ATK/10s every 3 min).',
			// Unverified placeholder totals — Compendium screenshots omit resistances.
			res: { fire: -12, water: 11, thunder: 7, ice: 0, dragon: -9 }
		},
		'gore-zoh': {
			name: '2pc Gore + 2pc Zoh',
			stars: '★★★★',
			source: 'Compendium',
			desc: '~1% better than Guts Comfort assuming 30% Counterstrike uptime. Trades Stamina Surge 3 and Guts for more damage. Requires Droolshroom (Black Belt Lo).',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'Gore Vambraces β',
				Waist: 'Gore Coil α',
				Legs: 'Mizutsune Greaves β',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Burst 2', type: 'dmg' },
				{ name: 'Recovery Speed 1', type: 'comfort' },
				{ name: 'Evade Window 1', type: 'comfort' },
				{ name: 'Adrenaline Rush 1', type: 'dmg' }
			],
			setSkills: ['Super Recovery I', 'Black Eclipse I'],
			meal: 'Droolshroom (Black Belt Lo) with Con 3. Meat +2 ATK.',
			// Unverified placeholder totals — Compendium screenshots omit resistances.
			res: { fire: -11, water: 13, thunder: 3, ice: 2, dragon: -11 }
		},
		'guts-comfort': {
			name: 'Guts Comfort',
			stars: '★★★★',
			source: 'Compendium',
			desc: '~1.7% better than 4pc Gore. Adds protection against one-shots through Guts besides Moxie. Evade Extender 2 is part of the package. Requires Delishroom (Black Belt Hi).',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Gore Mail β',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gore Coil α',
				Legs: 'Rey Sandgreaves γ',
				Charm: 'Counterattack Charm'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Stun Resistance 3', type: 'comfort' },
				{ name: 'Adrenaline Rush 3', type: 'dmg' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Constitution 2', type: 'comfort' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Agitator 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' }
			],
			setSkills: ['Black Eclipse I', "Rey Dau's Voltage", "Lord's Soul"],
			meal: 'Delishroom (Black Belt Hi) with Meat +2 ATK.',
			// Unverified placeholder totals — Compendium screenshots omit resistances.
			res: { fire: 6, water: 6, thunder: -12, ice: -8, dragon: 0 }
		},
		'sere-gore': {
			name: 'Sere-Gore Adrenaline',
			stars: '★★★★★',
			source: 'Game8',
			desc: 'Stamina-first damage. Constitution 5, Stamina Surge 3, and Adrenaline Rush 4 make perfect dodges both comfortable and rewarding.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Regios Mail β',
				Arms: 'Regios Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counterattack Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Adrenaline Rush 4', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' }
			],
			setSkills: ["Razor's Edge I", 'Black Eclipse I', 'Adrenaline'],
			meal: 'Con 5 = free meal. Sild Garlic (Moxie) or Airy Egg.',
			res: { fire: 2, water: 8, thunder: -6, ice: 0, dragon: -6 }
		},
		'zoh-gore-wex': {
			name: 'Zoh-Gore WEX',
			stars: '★★★★',
			source: 'Game8',
			desc: 'Affinity-focused endgame build using Weakness Exploit and Antivirus to drive Black Eclipse while keeping Constitution, Evade Window, and Stamina Surge for comfort.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Counterattack Charm III'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' },
				{ name: 'Evade Window 2', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' }
			],
			setSkills: ['Super Recovery I', 'Black Eclipse I'],
			meal: 'Droolshroom (Black Belt Lo) with Con 3.',
			res: { fire: -11, water: 12, thunder: 6, ice: 3, dragon: -12 }
		},
		'guts-sere': {
			name: 'Guts Seregios',
			stars: '★★★★',
			source: 'Game8',
			desc: 'Raw-leaning Bow build using Guts (Tenacity) and Razor’s Edge I for protection and damage, with Evade Window 5 and Constitution 5 for high comfort.',
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Regios Mail β',
				Arms: 'Duna Wildbraces γ',
				Waist: 'Regios Coil β',
				Legs: 'Duna Wildgreaves γ',
				Charm: 'Counterattack Charm III'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Evade Window 5', type: 'comfort' },
				{ name: 'Tool Specialist 3', type: 'comfort' },
				{ name: 'Quick Sheathe 3', type: 'comfort' },
				{ name: 'Adrenaline Rush 2', type: 'dmg' },
				{ name: 'Stamina Surge 2', type: 'comfort' },
				{ name: 'Maximum Might 1', type: 'dmg' },
				{ name: 'Weakness Exploit 1', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' }
			],
			setSkills: ["Razor's Edge I", 'Protective Veil I', 'Guts (Tenacity)'],
			meal: 'Con 5 = free meal. Sild Garlic or Specialty Sild Garlic if you want Moxie on top of Guts.',
			res: { fire: 6, water: 6, thunder: -8, ice: -7, dragon: 0 }
		},
		'max-evasion': {
			name: 'Max Evasion Comfort',
			stars: '★★★',
			source: 'Game8',
			desc: 'Max comfort. Evade Window 5, Constitution 5, and Stamina Surge 3 make dodging and uptime extremely smooth while Super Recovery provides passive sustain.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'Gore Vambraces α',
				Waist: 'Gore Coil α',
				Legs: 'Dahaad Shardgreaves β',
				Charm: 'Evasion Charm IV'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Weakness Exploit 2', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Evade Window 5', type: 'comfort' },
				{ name: 'Stamina Surge 3', type: 'comfort' },
				{ name: 'Recovery Speed 1', type: 'comfort' },
				{ name: 'Flinch Free 1', type: 'comfort' }
			],
			setSkills: ['Super Recovery I', 'Black Eclipse I'],
			meal: 'Con 5 = free meal. Sild Garlic (Moxie) or Airy Egg.',
			res: { fire: -11, water: 12, thunder: 1, ice: 6, dragon: -11 }
		}
	},
	weapons: [
		{
			element: 'Fire',
			name: 'Dark Filament',
			info: 'Rathalos · Power · Crit Boost 3',
			cls: 'fire'
		},
		{ element: 'Fire', name: 'Firetrail Leviora', info: 'Quematrice · Close-Range', cls: 'fire' },
		{ element: 'Water', name: "Bookwilthe's Punisher", info: 'Xu Wu · Power', cls: 'water' },
		{
			element: 'Thunder',
			name: 'High Voltsender',
			info: 'Lagiacrus · Close-Range · Tetrad Shot 2',
			cls: 'thunder'
		},
		{
			element: 'Ice',
			name: 'Singha Sharanga',
			info: 'Blangonga · Close-Range · Tetrad Shot 3',
			cls: 'ice'
		},
		{
			element: 'Dragon',
			name: 'Verzweiflung',
			info: 'Gore Magala · Power/Blast · Crit Element 3',
			cls: 'dragon'
		},
		{
			element: 'Dragon',
			name: 'G. Renowned Tristram',
			info: 'G. Arkveld · Close-Range',
			cls: 'dragon'
		},
		{ element: 'Dragon', name: 'Blazing Samira', info: 'Zoh Shia · Power', cls: 'dragon' }
	],
	flow: {
		title: 'What kind of bow hunter are you?',
		q1Text: "What's your top priority?",
		q1Options: [
			{ label: 'Maximum Damage', value: 'damage' },
			{ label: 'Balanced (Damage + Survivability)', cssClass: 'balanced', value: 'balanced' },
			{ label: 'Stamina & Dash Dancing', cssClass: 'comfort', value: 'stamina' },
			{ label: 'Max Comfort & Safety', cssClass: 'comfort', value: 'comfort' }
		],
		q2: {
			damage: {
				text: "What's your damage mechanic?",
				options: [
					{ label: 'Frenzy cycle (WEX + Coalescence)', value: 'gore-lagi' },
					{ label: 'Counterstrike (reward getting hit)', value: 'gore-zoh' },
					{ label: 'WEX + passive healing (Super Recovery)', value: 'zoh-gore-wex' }
				]
			},
			balanced: {
				text: 'How do you want to manage stamina?',
				options: [
					{
						label: 'Con 5 + Counterstrike, no food needed',
						cssClass: 'balanced',
						value: 'comfy-gore-lagi'
					},
					{
						label: 'Counterstrike + droolshroom (more raw)',
						cssClass: 'balanced',
						value: 'gore-zoh'
					},
					{
						label: 'WEX + Super Recovery (passive sustain)',
						cssClass: 'balanced',
						value: 'zoh-gore-wex'
					}
				]
			},
			stamina: {
				text: 'Do you also want damage from dodges?',
				options: [
					{ label: 'Yes — Adrenaline Rush 4 (dodges = damage)', value: 'sere-gore' },
					{
						label: 'No — Con 5 + Counterstrike, pure smooth flow',
						cssClass: 'balanced',
						value: 'comfy-gore-lagi'
					}
				]
			},
			comfort: {
				text: 'How much protection?',
				options: [
					{
						label: 'Guts + Evade Window 5 + Tool Specialist',
						cssClass: 'comfort',
						value: 'guts-sere'
					},
					{
						label: 'Guts + Lord’s Soul + Evade Extender',
						cssClass: 'comfort',
						value: 'guts-comfort'
					},
					{
						label: 'No Guts — EW 5 + Super Recovery + Max Agitator',
						cssClass: 'comfort',
						value: 'max-evasion'
					}
				]
			}
		}
	},
	sourcesText:
		'MH:GH Bow Compendium (@p_chu & @ninjazenia) and Game8 Bow Builds. Compendium resistance totals remain unverified until calculated from per-piece armor data. No Gogma builds included.'
};
