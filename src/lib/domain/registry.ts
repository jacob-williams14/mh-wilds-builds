import { bow } from './weapons/bow';
import { insectGlaive } from './weapons/insect-glaive';
import { longSword } from './weapons/long-sword';
import type { WeaponData } from './types';

export type WeaponTab = { key: string; label: string };
export const weaponRegistry = [
	{ key: 'bow', label: 'Bow', data: bow },
	{ key: 'ig', label: 'Insect Glaive', data: insectGlaive },
	{ key: 'ls', label: 'Long Sword', data: longSword }
] as const satisfies readonly { key: string; label: string; data: WeaponData }[];

export type WeaponKey = (typeof weaponRegistry)[number]['key'];

export const defaultWeaponKey: WeaponKey = weaponRegistry[0].key;

export const weaponTabs = weaponRegistry.map(({ key, label }) => ({ key, label }));

export const weaponData = Object.fromEntries(
	weaponRegistry.map(({ key, data }) => [key, data])
) as Record<WeaponKey, WeaponData>;
