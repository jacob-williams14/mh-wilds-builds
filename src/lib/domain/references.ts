export type SourceType = 'google-doc' | 'game-wiki' | 'video' | 'community';

export interface Source {
	name: string;
	url: string;
	type: SourceType;
	author?: string;
	note?: string;
}

export interface WeaponSources {
	key: string;
	weapon: string;
	sources: Source[];
}

export const generalSources: Source[] = [];

export const weaponSources: WeaponSources[] = [
	{
		key: 'bow',
		weapon: 'Bow',
		sources: [
			{
				name: 'MH:Wilds Bow Compendium',
				url: 'https://docs.google.com/document/d/1i3qfZtagi5CFrIKdTlNM-DN2cMowdOwwkAVOWvMccUE/edit?tab=t.0#heading=h.5ibwvdpj59d5',
				type: 'google-doc',
				author: '@p_chu & @ninjazenia',
				note: 'Primary source. Elemental builds, comfort picks, Artian crafting. Resistance totals unverified.'
			},
			{
				name: 'Best Bow Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/503042',
				type: 'game-wiki',
				note: "HR 100+ meta builds including Gore Lord's Soul and Gogma-Gore."
			}
		]
	},
	{
		key: 'ig',
		weapon: 'Insect Glaive',
		sources: [
			{
				name: 'Wilds IG Endgame Sets + Info',
				url: 'https://docs.google.com/document/d/1Ep2Al6Liw-P8G78x0Q-t6Y3boKPtNRftJJSOgC_47UU/edit?tab=t.0#heading=h.6lpjl4d8a98k',
				type: 'google-doc',
				note: 'Community guide. Artian crafting, kinsect recommendations, build philosophy. Resistance totals unverified.'
			},
			{
				name: 'Best Insect Glaive Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/502439#hm_917',
				type: 'game-wiki',
				note: 'TU4 meta builds and HR 50-100 options. Primary source for loadouts.'
			}
		]
	},
	{
		key: 'long-sword',
		weapon: 'Long Sword',
		sources: [
			{
				name: 'MH Wilds Longsword Guide',
				url: 'https://docs.google.com/document/d/1tt7GZ6XtPe68GvlafxTriKUVt8LeLFVAUNkWb6FMnQM/edit?tab=t.0#heading=h.mcr268emzqkd',
				type: 'google-doc',
				note: 'Crimson Loop rotation, Spirit Gauge mechanics, Tier 1/2 skill priorities, and endgame builds.'
			},
			{
				name: 'Best Long Sword Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500762',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'dual-blades',
		weapon: 'Dual Blades',
		sources: [
			{
				name: 'Monster Hunter Wilds Dual Blades Guide & Set Compilation',
				url: 'https://docs.google.com/document/d/1X68k4cL2Lo9R4nqsbpTsFvA6Z74L1RafAteXKiWguxc/edit?tab=t.0#heading=h.8mg3iisgosa',
				type: 'google-doc'
			},
			{
				name: 'Best Dual Blades Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500764',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'greatsword',
		weapon: 'Greatsword',
		sources: [
			{
				name: 'MH Wilds Greatsword Guide',
				url: 'https://docs.google.com/document/d/1A5wxQRX87Z0Kf_EXWc4G62w3ePoFLtkMpXly_x0ARVY/edit?tab=t.0',
				type: 'google-doc'
			},
			{
				name: 'Best Greatsword Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500761',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'hammer',
		weapon: 'Hammer',
		sources: [
			{
				name: 'Hammer Whylds Meta — Crit Dead FR',
				url: 'https://docs.google.com/document/d/1WvtCnCNEKsJ9Orsv8icdxjHqKer2-4aAZaNktEyipbo/edit?tab=t.0#heading=h.7z85wgxye5qp',
				type: 'google-doc'
			},
			{
				name: 'Best Hammer Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500765',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'hunting-horn',
		weapon: 'Hunting Horn',
		sources: [
			{
				name: 'MH Wilds Hunting Horn Guide',
				url: 'https://docs.google.com/document/d/1MK8dawS-pH-6lvlHYFYV5QmEXtohyEiJPlJM9L2Gy5A/edit?tab=t.yhif4tlh3rul#heading=h.cr41zhjnqr47',
				type: 'google-doc'
			},
			{
				name: 'Best Hunting Horn Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500766',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'lance',
		weapon: 'Lance',
		sources: [
			{
				name: 'MH Wilds Base Game Progression and Endgame Lance Builds',
				url: 'https://docs.google.com/document/d/1iQmKTmU-HrYWkvN2gkjU2XciZvKFf-okeYjxQgqUqeU/edit?tab=t.0',
				type: 'google-doc'
			},
			{
				name: 'Best Lance Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500767',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'gunlance',
		weapon: 'Gunlance',
		sources: [
			{
				name: 'Wilds Gunlance Guide (TU4)',
				url: 'https://docs.google.com/document/d/1vAn8fTDPXB4OZg6GEKXOuDjB22NCiCMhx70OMauzX70/edit?tab=t.fowg29h8tmk3#heading=h.k9apcwwdnar1',
				type: 'google-doc'
			},
			{
				name: 'Best Gunlance Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500768',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'switch-axe',
		weapon: 'Switch Axe',
		sources: [
			{
				name: 'Wilds Switch Axe — Crit Meta is Dead BTW Guide',
				url: 'https://docs.google.com/document/d/1yr784vDAYbBKFQ4jaIisUwdp3ShlG5ofUgRUnb5gRIY/edit?tab=t.0#heading=h.18rxqnrl5yb0',
				type: 'google-doc'
			},
			{
				name: 'Best Switch Axe Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500769',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'charge-blade',
		weapon: 'Charge Blade',
		sources: [
			{
				name: 'MH Wilds Charge Blade Guide',
				url: 'https://docs.google.com/document/d/1I9XKBQZLpG0159yPOs2zvPS7wwrzaEPtiMkBfzGzibQ/edit?tab=t.rjxtaz4bqmvp',
				type: 'google-doc'
			},
			{
				name: 'Best Charge Blade Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500770',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'sword-and-shield',
		weapon: 'Sword and Shield',
		sources: [
			{
				name: 'SnS Wilds FAQ + Progression Guide',
				url: 'https://docs.google.com/document/d/1M0m8cdEEq0HlaQ7pgwWx5O8xPQUuI-etrHudR3HcgYQ/edit?tab=t.0#heading=h.mi3ba3lxo6pr',
				type: 'google-doc'
			},
			{
				name: 'Best Sword and Shield Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500763',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'light-bowgun',
		weapon: 'Light Bowgun',
		sources: [
			{
				name: 'MH Wilds Light Bowgun Guide',
				url: 'https://docs.google.com/document/d/1Mm7rOM0V7VLsOHlXW5zO8uD5ht5rhlVeVNLn3cdDXy8/edit?tab=t.1f6f5y5a8obs#heading=h.endzlz39o1ne',
				type: 'google-doc'
			},
			{
				name: 'Best Light Bowgun Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500772',
				type: 'game-wiki'
			}
		]
	},
	{
		key: 'heavy-bowgun',
		weapon: 'Heavy Bowgun',
		sources: [
			{
				name: 'MH Wilds Heavy Bowgun Guide',
				url: 'https://docs.google.com/document/d/17atnsKzYrQlEy_70Z2zzlEBJrN3OtiTYurKCHzMLIn8/edit?tab=t.0#heading=h.l9b9tufw3w12',
				type: 'google-doc'
			},
			{
				name: 'Best Heavy Bowgun Builds for High Rank — Game8',
				url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/500773',
				type: 'game-wiki'
			}
		]
	}
];
