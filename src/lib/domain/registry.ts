import { bow } from './weapons/bow';
import { chargeBlade } from './weapons/charge-blade';
import { dualBlades } from './weapons/dual-blades';
import { greatsword } from './weapons/greatsword';
import { gunlance } from './weapons/gunlance';
import { hammer } from './weapons/hammer';
import { heavyBowgun } from './weapons/heavy-bowgun';
import { huntingHorn } from './weapons/hunting-horn';
import { insectGlaive } from './weapons/insect-glaive';
import { lance } from './weapons/lance';
import { lightBowgun } from './weapons/light-bowgun';
import { longSword } from './weapons/long-sword';
import { swordAndShield } from './weapons/sword-and-shield';
import { switchAxe } from './weapons/switch-axe';
import type { WeaponData } from './types';

export type WeaponTab = { key: string; label: string };
// In-game canonical weapon order (the order Wilds uses on its weapon-select
// screen). Veterans navigate this by muscle memory.
export const weaponRegistry = [
	{ key: 'gs', label: 'Greatsword', data: greatsword },
	{ key: 'ls', label: 'Long Sword', data: longSword },
	{ key: 'sns', label: 'Sword & Shield', data: swordAndShield },
	{ key: 'db', label: 'Dual Blades', data: dualBlades },
	{ key: 'hammer', label: 'Hammer', data: hammer },
	{ key: 'hh', label: 'Hunting Horn', data: huntingHorn },
	{ key: 'lance', label: 'Lance', data: lance },
	{ key: 'gl', label: 'Gunlance', data: gunlance },
	{ key: 'sa', label: 'Switch Axe', data: switchAxe },
	{ key: 'cb', label: 'Charge Blade', data: chargeBlade },
	{ key: 'ig', label: 'Insect Glaive', data: insectGlaive },
	{ key: 'lbg', label: 'Light Bowgun', data: lightBowgun },
	{ key: 'hbg', label: 'Heavy Bowgun', data: heavyBowgun },
	{ key: 'bow', label: 'Bow', data: bow }
] as const satisfies readonly { key: string; label: string; data: WeaponData }[];

export type WeaponKey = (typeof weaponRegistry)[number]['key'];

export const defaultWeaponKey: WeaponKey = weaponRegistry[0].key;

export const weaponTabs = weaponRegistry.map(({ key, label }) => ({ key, label }));

export const weaponData = Object.fromEntries(
	weaponRegistry.map(({ key, data }) => [key, data])
) as Record<WeaponKey, WeaponData>;
