import type { WeaponData } from './types';

export const insectGlaive: WeaponData = {
	builds: {
		'zoh-frenzy': {
			name: 'Zoh Shia Frenzy',
			stars: '★★★★★',
			source: 'Game8',
			desc: 'Top non-Artian IG. 2pc Zoh Shia (Super Recovery) + 2pc Gore (Black Eclipse) + G. Arkveld arms. Con 5, Coalescence, Antivirus. Smooth ground combos.',
			armor: {
				Head: 'Numinous Crown β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Arkveld Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Coalescence 2', type: 'dmg' },
				{ name: "Master's Touch 1", type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 5', type: 'comfort' },
				{ name: 'Recovery Speed 2', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Super Recovery I'],
			meal: 'Con 5 = free meal. Sild Garlic (Moxie) or Airy Egg.',
			res: { fire: -10, water: 14, thunder: -2, ice: 6, dragon: -10 }
		},
		'lords-soul-lagi': {
			name: "Lord's Soul Lagi",
			stars: '★★★★★',
			source: 'Game8',
			desc: "Newest build. Rey γ + Nu Udra γ + Lagiacrus. Lord's Soul = Guts + 5% ATK. WEX 5, Max Might 3, Evade Extender 2. Best damage-to-safety for hard content.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Udra Miremail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Lagiacrus Coil β',
				Legs: 'Lagiacrus Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Agitator 4', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Counterstrike 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Latent Power 1', type: 'dmg' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Stamina Surge 1', type: 'comfort' }
			],
			setSkills: ['Thunderous Roar I', 'Guts (Tenacity)', 'Azure Bolt I'],
			meal: 'Sild Garlic (Moxie) for double anti-OHKO with Guts.',
			res: { fire: -2, water: -2, thunder: 9, ice: -9, dragon: -4 }
		},
		'ful-zoh-comfort': {
			name: 'Ful-Zoh Comfort',
			stars: '★★★★',
			source: 'Game8',
			desc: 'G. Fulgur Anjanath = extra stamina gauge + Second Wind. Great Max Might uptime. Super Recovery. Smooth vaulting and dodging.',
			armor: {
				Head: 'G. Fulgur Anj. Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'G. Fulgur Anj. Vambraces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Constitution 3', type: 'comfort' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' }
			],
			setSkills: ['Second Wind I', 'Black Eclipse I', 'Super Recovery I'],
			meal: 'Droolshroom (Black Belt Lo) with Con 3.',
			res: { fire: -6, water: 8, thunder: 2, ice: 4, dragon: -8 }
		},
		'rey-gore-mm': {
			name: 'Rey-Gore Agitator MM',
			stars: '★★★★',
			source: 'Game8',
			desc: "3pc Rey γ + 2pc Gore. Latent Power + Max Might rewards clean play. Lord's Soul = Guts + 5% raw. For experienced players.",
			armor: {
				Head: 'Rey Sandhelm γ',
				Chest: 'Rey Sandmail γ',
				Arms: 'Rey Sandbraces γ',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Challenger Charm II'
			},
			skills: [
				{ name: 'Agitator 5', type: 'dmg' },
				{ name: 'Critical Boost 5', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Latent Power 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Evade Extender 2', type: 'comfort' },
				{ name: 'Stamina Surge 2', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Thunderous Roar I', 'Lord’s Soul'],
			meal: 'Droolshroom or Sild Garlic depending on Con level.',
			res: { fire: -4, water: -4, thunder: 10, ice: -7, dragon: -2 }
		},
		'lagia-gore': {
			name: 'Lagia-Gore Critical',
			stars: '★★★',
			source: 'Game8 / Icy Veins',
			desc: 'Accessible starter endgame. 2pc Lagi + 2pc Gore. Easy farm, consistent crits, SS3. Azure Bolt gives free thunder procs.',
			armor: {
				Head: 'Lagiacrus Helm β',
				Chest: 'Numinous Shroud β',
				Arms: 'Lagiacrus Braces β',
				Waist: 'Gore Coil β',
				Legs: 'Gore Greaves β',
				Charm: 'Exploiter Charm II'
			},
			skills: [
				{ name: 'Weakness Exploit 5', type: 'dmg' },
				{ name: 'Maximum Might 3', type: 'dmg' },
				{ name: 'Antivirus 3', type: 'dmg' },
				{ name: 'Agitator 3', type: 'dmg' },
				{ name: 'Burst 1', type: 'dmg' },
				{ name: 'Stamina Surge 3', type: 'comfort' }
			],
			setSkills: ['Black Eclipse I', 'Azure Bolt I'],
			meal: 'Flexible — Sild Garlic or Airy Egg.',
			res: { fire: -12, water: 11, thunder: 7, ice: 0, dragon: -9 }
		}
	},
	weapons: [
		{
			name: 'Blazing Katir',
			info: 'Zoh Shia · Dragon 150 · Whiteflame Torrent (50 flat dmg). Best all-rounder.'
		},
		{
			name: 'Fractal Glaive Boltlagia',
			info: 'Lagiacrus · Thunder 300 · Focus 2, Convert Thunder Res.'
		},
		{
			name: 'Leumundsgift',
			info: 'Gore Magala · Dragon 200 · Coalescence 2. Frenzy synergy.'
		},
		{
			name: 'Inspired Ywain',
			info: 'Seregios · No element · 15% Aff · Bladescale Honing.'
		}
	],
	flow: {
		title: 'How do you want your glaive to feel?',
		q1Text: 'What matters most to you?',
		q1Options: [
			{ label: 'High Damage Output', value: 'damage' },
			{ label: 'Smooth Flow & Mobility', cssClass: 'balanced', value: 'flow' },
			{ label: 'Safety & Survivability', cssClass: 'comfort', value: 'safety' }
		],
		q2: {
			damage: {
				text: "What's your damage philosophy?",
				options: [
					{
						label: 'Frenzy cycle (Antivirus + Coalescence + Con 5)',
						value: 'zoh-frenzy'
					},
					{ label: "Lord's Soul + Guts (raw + safety net)", value: 'lords-soul-lagi' },
					{ label: 'Latent Power spikes (burst windows)', value: 'rey-gore-mm' }
				]
			},
			flow: {
				text: 'What kind of mobility?',
				options: [
					{
						label: 'Extra stamina + Second Wind (never run dry)',
						cssClass: 'balanced',
						value: 'ful-zoh-comfort'
					},
					{
						label: 'Evade Extender + clean Max Might',
						cssClass: 'balanced',
						value: 'lords-soul-lagi'
					},
					{
						label: 'Easy farm, SS3, consistent crits',
						cssClass: 'balanced',
						value: 'lagia-gore'
					}
				]
			},
			safety: {
				text: 'How much protection?',
				options: [
					{ label: 'Guts + Moxie double safety', cssClass: 'comfort', value: 'lords-soul-lagi' },
					{
						label: 'Super Recovery + Second Wind sustain',
						cssClass: 'comfort',
						value: 'ful-zoh-comfort'
					},
					{ label: 'Super Recovery + Con 5', cssClass: 'comfort', value: 'zoh-frenzy' }
				]
			}
		}
	},
	sourcesText:
		'Game8 IG Builds (Dec 2025), Icy Veins (Dec 2025), Mobalytics (Jan 2026). No Artian/Gogma materials.',
	display: {
		weaponListTitle: 'Non-Artian Insect Glaives',
		comfortTitle: 'Comfort / Mobility',
		weaponLayout: 'detail'
	}
};
