import { bow } from './bow';
import { insectGlaive } from './insect-glaive';
import type { WeaponData } from './types';
export const weaponRegistry = [
	{ key: 'bow', label: 'Bow', data: bow },
	{ key: 'ig', label: 'Insect Glaive', data: insectGlaive }
] as const satisfies readonly { key: string; label: string; data: WeaponData }[];

export type WeaponKey = (typeof weaponRegistry)[number]['key'];

export const defaultWeaponKey: WeaponKey = weaponRegistry[0].key;

export const weaponTabs = weaponRegistry.map(({ key, label }) => ({ key, label }));

export const weaponData = Object.fromEntries(
	weaponRegistry.map(({ key, data }) => [key, data])
) as Record<WeaponKey, WeaponData>;
