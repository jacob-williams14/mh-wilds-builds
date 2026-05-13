export type SkillType = 'dmg' | 'comfort';

export interface Resistances {
	fire: number;
	water: number;
	thunder: number;
	ice: number;
	dragon: number;
	unverified?: true;
}

export interface BuildSkill {
	name: string;
	type: SkillType;
}

export type ArmorTier = 'craftable' | 'mixed' | 'meta';

export type ArmorSlot = 'Head' | 'Chest' | 'Arms' | 'Waist' | 'Legs' | 'Charm';

export interface Build {
	name: string;
	source: string;
	desc: string;
	armor: Record<ArmorSlot, string>;
	skills: BuildSkill[];
	setSkills: string[];
	meal: string;
	res: Resistances;
	tier: ArmorTier;
	rank?: RankRange;
}

export interface WeaponOption {
	name: string;
	info: string;
	element?: string;
	cls?: string;
}

export interface ArtianWeapon {
	name: string;
	variant: 'standard' | 'gogma';
	steps: string[];
}

export interface FlowOption {
	label: string;
	cssClass?: 'balanced' | 'comfort';
	value: string;
}

export interface FlowStep {
	text: string;
	options: FlowOption[];
}

export interface FlowConfig {
	title: string;
	q1Text: string;
	q1Options: FlowOption[];
	q2: Record<string, FlowStep>;
}

export interface WeaponDisplay {
	weaponListTitle: string;
	comfortTitle: string;
	weaponLayout: 'chip' | 'detail';
}

export type RankRange = 'hr50' | 'hr100';

export interface WeaponTip {
	title: string;
	lines: string[];
}

export interface WeaponData {
	builds: Record<string, Build>;
	artianWeapons: ArtianWeapon[];
	weapons: WeaponOption[];
	tips?: WeaponTip[];
	flow: Record<RankRange, FlowConfig>;
	sourcesText: string;
	display: WeaponDisplay;
}
