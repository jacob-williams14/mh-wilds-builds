import { useState } from "react";

const sources = [
  {
    id: "compendium",
    name: "MH:GH Bow Compendium",
    type: "Community Doc",
    url: "https://docs.google.com/document/d/1i3qfZtagi5CFrIKdTlNM-DN2cMowdOwwkAVOWvMccUE/mobilebasic",
    weapons: ["Bow"],
    provides: ["Build hierarchy with % comparisons", "Stamina reduction math", "Meal setups", "Non-Artian weapon picks per element", "Gameplay mechanics & combos", "Skill breakdowns (Tetrad Shot, Counterstrike, etc)", "Matchup list"],
    quality: "Gold",
    notes: "Maintained by @p_chu & @ninjazenia on MH:GH Discord. Most authoritative Bow source. Use mobilebasic URL to fetch content. Images don't render — build data is in text/tables. TU4 updated."
  },
  {
    id: "game8-bow",
    name: "Game8 Bow Builds",
    url: "https://game8.co/games/Monster-Hunter-Wilds/archives/503042",
    type: "Wiki",
    weapons: ["Bow"],
    provides: ["Full armor loadouts with deco slots", "Skill summaries with buff breakdowns", "Elemental resistance totals", "Non-Artian weapon alternatives per element", "HR progression builds", "Appraised talisman suggestions"],
    quality: "Gold",
    notes: "Very detailed per-build. Includes stamina-focused builds (Sere-Gore, Max Evasion) that the Compendium doesn't cover. Resistance totals listed per build. Updated for TU4."
  },
  {
    id: "game8-ig",
    name: "Game8 Insect Glaive Builds",
    url: "https://game8.co/games/Monster-Hunter-Wilds/archives/502439",
    type: "Wiki",
    weapons: ["Insect Glaive"],
    provides: ["Full armor loadouts", "Skill summaries", "Non-Artian weapons (Blazing Katir, Boltlagia)", "Playstyle combos", "Kinsect recommendations"],
    quality: "Gold",
    notes: "Lord's Soul Lagi build is newest (Oct 2025). Zoh Shia Frenzy is top non-Artian. Blazing Katir consistently recommended as best craftable IG."
  },
  {
    id: "game8-armor",
    name: "Game8 Armor Set Pages",
    url: "https://game8.co/games/Monster-Hunter-Wilds/archives/500343",
    type: "Wiki",
    weapons: ["All"],
    provides: ["Per-piece defense and elemental resistance values", "Decoration slots", "Set bonuses", "Forging materials"],
    quality: "Gold",
    notes: "Individual pages per armor set (Gore β, Numinous β, Regios β, Rey Dau γ, etc). Use these to calculate mixed-set resistance totals. Alpha and Beta share same resistances."
  },
  {
    id: "fandom",
    name: "MH Fandom Wiki",
    url: "https://monsterhunter.fandom.com/",
    type: "Wiki",
    weapons: ["All"],
    provides: ["Full set resistance totals in one place", "Set/Group skill descriptions", "Per-piece stats"],
    quality: "Silver",
    notes: "Good for quickly grabbing full-set resistance totals (listed on each armor page). Sometimes returns 403 on fetch — may need search fallback."
  },
  {
    id: "icyveins",
    name: "Icy Veins MH Wilds",
    url: "https://www.icy-veins.com/monster-hunter-wilds/",
    type: "Guide Site",
    weapons: ["All"],
    provides: ["Per-weapon build guides", "Progression builds", "Skill priority lists", "Weapon-specific tips"],
    quality: "Silver",
    notes: "Good second opinion source. Sometimes disagrees with Game8/Compendium. Has guides for all 14 weapons. Updated for TU4 on most weapons."
  },
  {
    id: "mobalytics",
    name: "Mobalytics Endgame Meta",
    url: "https://mobalytics.gg/mhw/builds/",
    type: "Guide Site",
    weapons: ["All"],
    provides: ["Endgame meta builds per weapon", "Progression guides", "Community builds"],
    quality: "Silver",
    notes: "Has endgame meta pages for all weapons. Good for cross-referencing. Tends to focus on Artian/Gogma meta so need to filter for non-Artian."
  },
  {
    id: "echoespartone",
    name: "EchoesPartOne Meta Sets",
    url: "https://mhwssets.wordpress.com/",
    type: "Community",
    weapons: ["Insect Glaive", "Some others"],
    provides: ["Detailed meta analysis", "Skill priority rankings", "Talisman guidance", "Non-Artian alternative builds"],
    quality: "Gold",
    notes: "u/EchoesPartOne on Reddit. Very detailed IG meta analysis. May have pages for other weapons. Good for understanding WHY certain skills are prioritized."
  },
  {
    id: "mhgh-discord",
    name: "MH:GH Discord",
    url: "https://discord.gg/monsterhunter",
    type: "Community",
    weapons: ["All"],
    provides: ["Weapon-specific compendiums (check if they exist per weapon)", "Matchup lists", "Speedrun data"],
    quality: "Gold",
    notes: "The Bow Compendium came from here. Other weapons MAY have similar docs. Worth searching for '[weapon] compendium' in the discord or via Google."
  }
];

const weaponStatus = [
  { name: "Bow", status: "done", builds: 7, notes: "Compendium + Game8. Stamina-focused builds included." },
  { name: "Insect Glaive", status: "done", builds: 5, notes: "Game8 + Icy Veins + Mobalytics." },
  { name: "Dual Blades", status: "todo", builds: 0, notes: "Stamina-heavy like Bow. Constitution matters. Check for DB compendium." },
  { name: "Sword & Shield", status: "todo", builds: 0, notes: "Versatile. Item use while unsheathed. Elemental or raw viable." },
  { name: "Long Sword", status: "todo", builds: 0, notes: "Most popular weapon. Tons of build variety. Counter-focused." },
  { name: "Great Sword", status: "todo", builds: 0, notes: "Charge-focused. Simpler build priorities (raw + affinity + crit)." },
  { name: "Hammer", status: "todo", builds: 0, notes: "KO specialist. Charge attacks. Raw focused." },
  { name: "Hunting Horn", status: "todo", builds: 0, notes: "Support + DPS. Song buffs matter. Has its own compendium likely." },
  { name: "Lance", status: "todo", builds: 0, notes: "Guard-focused. Has mhlance.com as a dedicated source." },
  { name: "Gunlance", status: "todo", builds: 0, notes: "Shelling type matters. Complex build considerations." },
  { name: "Switch Axe", status: "todo", builds: 0, notes: "Phial type matters. Morph gauge management." },
  { name: "Charge Blade", status: "todo", builds: 0, notes: "Most complex weapon. Phial + guard + SAED. Icy Veins has good guide." },
  { name: "Light Bowgun", status: "todo", builds: 0, notes: "Ammo type focused. Very different build structure." },
  { name: "Heavy Bowgun", status: "todo", builds: 0, notes: "Ammo type focused. Shield mod or no shield." },
];

const constraints = [
  { label: "No Artian Materials", desc: "No regular Artian or Gogma Artian weapons. Craftable weapons only." },
  { label: "No Gogma Materials", desc: "No Gogmazios armor or weapon upgrades." },
  { label: "Feel Over DPS", desc: "Prioritize how the weapon feels (stamina flow, dodge windows, mobility) over theoretical damage." },
  { label: "HR 50+ Baseline", desc: "All builds target HR 50+ endgame. HR 100+ appraised talismans noted as optional upgrades." },
  { label: "Cite Sources", desc: "Every build must cite its source (Compendium, Game8, Icy Veins, etc)." },
  { label: "Elemental Resistances", desc: "Calculate mixed-set resistance totals. Show visual bars + verdict." },
  { label: "Meal Guidance", desc: "Include Constitution cap method and recommended food per build." },
];

const colors = { Gold: "#f0c040", Silver: "#a0a8b8", done: "#3dd68c", todo: "#7a7d8a" };

export default function KnowledgeBase() {
  const [tab, setTab] = useState("sources");
  
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-1" style={{ color: "#f0c040" }}>MH Wilds Build Selector — Project Knowledge Base</h1>
        <p className="text-gray-500 mb-6">Reference map for Claude Code sessions</p>
        
        <div className="flex gap-0 mb-8">
          {["sources", "weapons", "constraints", "architecture"].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-bold uppercase tracking-wider border transition-all ${
                tab === t ? "bg-gray-800 border-yellow-500 text-yellow-400" : "bg-gray-900 border-gray-700 text-gray-500 hover:text-gray-300"
              } ${t === "sources" ? "rounded-l-lg" : ""} ${t === "architecture" ? "rounded-r-lg" : ""}`}>
              {t}
            </button>
          ))}
        </div>

        {tab === "sources" && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm mb-4">Sources ranked by reliability. Gold = primary/authoritative. Silver = good for cross-referencing.</p>
            {sources.map(s => (
              <div key={s.id} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-lg font-bold" style={{ color: colors[s.quality] }}>{s.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded border" style={{ color: colors[s.quality], borderColor: colors[s.quality] + "40" }}>{s.quality}</span>
                  <span className="text-xs text-gray-500">{s.type}</span>
                  <span className="text-xs text-gray-600">Weapons: {s.weapons.join(", ")}</span>
                </div>
                <div className="text-xs text-blue-400 mb-3 break-all">{s.url}</div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {s.provides.map((p, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-300">{p}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{s.notes}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "weapons" && (
          <div className="space-y-3">
            <p className="text-gray-400 text-sm mb-4">Status of each weapon in the build selector. Done = in the app. Todo = needs research + build.</p>
            <div className="grid gap-3">
              {weaponStatus.map(w => (
                <div key={w.name} className={`bg-gray-900 border rounded-lg p-4 flex items-center gap-4 ${w.status === "done" ? "border-green-800" : "border-gray-800"}`}>
                  <div className="w-16 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: colors[w.status] }}>
                      {w.status === "done" ? "✓ Done" : "Todo"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-100">{w.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{w.notes}</div>
                  </div>
                  {w.status === "done" && (
                    <div className="text-xs text-green-400">{w.builds} builds</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "constraints" && (
          <div className="space-y-3">
            <p className="text-gray-400 text-sm mb-4">These constraints apply to every weapon and every build in the tool.</p>
            {constraints.map((c, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <div className="font-bold text-yellow-400 text-sm mb-1">{c.label}</div>
                <div className="text-sm text-gray-400">{c.desc}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "architecture" && (
          <div className="space-y-6">
            <p className="text-gray-400 text-sm mb-4">SvelteKit project structure. Each weapon is a data module; shared components handle rendering.</p>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="font-bold text-yellow-400 mb-3">SvelteKit Project Structure</div>
              <pre className="text-xs text-gray-300 leading-relaxed bg-gray-950 p-4 rounded overflow-x-auto">{`mhw-builds/
├── src/
│   ├── routes/
│   │   └── +page.svelte              # Main page — tabs + flow
│   ├── lib/
│   │   ├── components/
│   │   │   ├── WeaponTabs.svelte      # Tab bar
│   │   │   ├── FlowQuestion.svelte    # Reusable question node
│   │   │   ├── BuildResult.svelte     # Full result card
│   │   │   ├── ArmorGrid.svelte       # Armor pieces
│   │   │   ├── SkillTags.svelte       # Colored skill pills
│   │   │   ├── ResistanceBars.svelte  # Element bars + verdict
│   │   │   ├── WeaponList.svelte      # Weapon recommendations
│   │   │   └── MealBox.svelte         # Meal guidance
│   │   ├── data/
│   │   │   ├── types.ts               # TypeScript interfaces
│   │   │   ├── bow.ts                 # ← One file per weapon
│   │   │   ├── insect-glaive.ts
│   │   │   ├── [weapon].ts            # Future weapons
│   │   │   └── index.ts              # Re-exports all
│   │   ├── stores/
│   │   │   └── flow.ts                # Svelte stores
│   │   └── reference/
│   │       └── resistances.ts         # Armor resistance lookup
│   ├── app.css                        # Dark theme
│   └── app.html
├── sources/                           # Dev reference only
│   └── [weapon]-[source].md
└── PLAN.md`}</pre>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="font-bold text-yellow-400 mb-3">Adding a Weapon — Checklist</div>
              <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
                <li>Search for compendium: <span className="text-blue-400">"MH Wilds [weapon] compendium" site:docs.google.com</span></li>
                <li>Fetch Game8 builds page</li>
                <li>Cross-reference Icy Veins</li>
                <li>Identify 4-7 non-Artian builds (feel-first)</li>
                <li>Create <span className="text-blue-400">src/lib/data/[weapon].ts</span> matching types</li>
                <li>Calculate resistances from reference lookup</li>
                <li>Design 2-step flowchart questions</li>
                <li>Add export to <span className="text-blue-400">src/lib/data/index.ts</span></li>
                <li>Test all paths — components render automatically</li>
              </ol>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="font-bold text-yellow-400 mb-3">Key Components</div>
              <div className="overflow-x-auto">
                <table className="text-xs w-full">
                  <thead><tr className="text-gray-500 border-b border-gray-800">
                    <th className="text-left py-2 pr-4">Component</th>
                    <th className="text-left py-2 pr-4">Props</th>
                    <th className="text-left py-2">Job</th>
                  </tr></thead>
                  <tbody className="text-gray-300">
                    {[
                      ["WeaponTabs", "weapons[], active", "Tab bar, dispatches select"],
                      ["FlowQuestion", "step, text, options, state", "Question node with buttons"],
                      ["BuildResult", "build, weapons, weaponType", "Composes all sub-components"],
                      ["ResistanceBars", "res object", "5 bars + verdict (most reuse value)"],
                      ["SkillTags", "skills[], type", "Colored tag pills"],
                      ["ArmorGrid", "armor object", "2-col grid of pieces"],
                      ["WeaponList", "weapons[], layout", "Compact or wide weapon cards"],
                      ["MealBox", "text", "Gold-bordered note"]
                    ].map(([c, p, j], i) => (
                      <tr key={i} className="border-b border-gray-900">
                        <td className="py-2 pr-4 text-yellow-400 font-mono">{c}</td>
                        <td className="py-2 pr-4 text-gray-500">{p}</td>
                        <td className="py-2 text-gray-400">{j}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="font-bold text-yellow-400 mb-3">Svelte Store Design</div>
              <pre className="text-xs text-gray-300 leading-relaxed bg-gray-950 p-4 rounded overflow-x-auto">{`// src/lib/stores/flow.ts
import { writable } from 'svelte/store';

export const currentWeapon = writable('bow');
export const step1Answer = writable<string | null>(null);
export const step2Answer = writable<string | null>(null);

export function resetFlow() {
  step1Answer.set(null);
  step2Answer.set(null);
}

export function switchWeapon(weapon: string) {
  currentWeapon.set(weapon);
  resetFlow();
}`}</pre>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="font-bold text-yellow-400 mb-3">Flowchart Design Rules</div>
              <div className="text-sm text-gray-400 space-y-2">
                <p><strong className="text-gray-200">Step 1</strong> asks the weapon's core feel tradeoff (varies per weapon type).</p>
                <p><strong className="text-gray-200">Step 2</strong> narrows within that priority to a specific build.</p>
                <p><strong className="text-gray-200">Every path → exactly one build.</strong> Two steps is the sweet spot.</p>
                <p><strong className="text-gray-200">Per-weapon:</strong> Bow → stamina. IG → mobility. Lance → guard. DB → element. GS → charge windows. Design around what players actually debate.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
