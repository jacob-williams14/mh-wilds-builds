export type SkillType = 'dmg' | 'comfort';

export interface Resistances {
	fire: number;
	water: number;
	thunder: number;
	ice: number;
	dragon: number;
}

export interface BuildSkill {
	name: string;
	type: SkillType;
}

export interface Build {
	name: string;
	stars: string;
	source: string;
	desc: string;
	armor: Record<string, string>;
	skills: BuildSkill[];
	setSkills: string[];
	meal: string;
	res: Resistances;
}

export interface WeaponOption {
	name: string;
	info: string;
	element?: string;
	cls?: string;
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

export interface WeaponData {
	builds: Record<string, Build>;
	weapons: WeaponOption[];
	flow: FlowConfig;
	sourcesText: string;
}
