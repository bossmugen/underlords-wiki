import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertCharacter = (candidate: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === candidate.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...candidate,
      aliases: [...new Set([...(current.aliases ?? []), ...(candidate.aliases ?? [])])],
      tags: [...new Set([...(current.tags ?? []), ...(candidate.tags ?? [])])],
      relationships: candidate.relationships ?? current.relationships,
      quotes: [...new Set([...(current.quotes ?? []), ...(candidate.quotes ?? [])])],
      claims: [...(current.claims ?? []), ...(candidate.claims ?? [])],
      antiFanon: [...(current.antiFanon ?? []), ...(candidate.antiFanon ?? [])],
    } as ExtendedCharacter;
  } else {
    allCharacters.push(candidate);
  }
  characterById.set(candidate.id, allCharacters.find((character) => character.id === candidate.id)!);
};

upsertCharacter({
  id: "sarabunny",
  name: "SaraBunny",
  aliases: ["foxcat"],
  billing: "legacy",
  role: "Archive-era Daycare / Wall cast",
  era: "2021–2022",
  logline:
    "Tiny footprint, excellent timing. SaraBunny rarely tries to take over a room; she notices whatever ritual is already happening, joins in with almost no verbal overhead, and apparently considers `Mooo :Cat_Sporkle:` a complete contribution to civic life.",
  tags: ["Archive cast", "Daycare", "Wall", "Low-word participation", "Petty Crimes"],
  quotes: ["so much moo", "Mooo :Cat_Sporkle:", "HAPPY NEW YEAR!"],
  claims: [
    "SaraBunny / foxcat is stable account 250001036251627520. The assigned Daycare ledger has eight surviving authored messages spanning 2021-06-16 through 2022-03-15.",
    "In Wall support material, Sara first comments `so much moo`, later joins the continuing cow/Cat_Sporkle room bit with `Mooo :Cat_Sporkle:`, and on New Year's Eve posts `HAPPY NEW YEAR!` followed five seconds later by a `happy` sticker.",
    "The repeated small pockets support a probable low-word / high-participation read: sparse posting without social detachment, especially when the room already has a shared ritual in motion.",
  ],
  antiFanon: [
    "Sara is not credited as the originator of the cow / Moo / Cat_Sporkle bit; she joins an already-running room ritual.",
    "The person read is intentionally bounded because the accessible sample is small and the strongest behavioral pockets come from Wall support material rather than recovered direct Daycare bodies.",
    "Export-time role arrays are not used to infer appointment chronology or a formal role here.",
  ],
});

upsertCharacter({
  id: "teri",
  name: "Teri",
  aliases: ["kinzokumissu"],
  billing: "legacy",
  role: "Late-era Wall cast",
  era: "2025",
  logline:
    "Six-minute reactivation, zero warm-up. Teri drops straight into the room's old joking grammar, objects to being called `cute`, upgrades the legally acceptable charge to `adorable`, and then gets briefly ambushed by the fact that 2020 was five years ago.",
  tags: ["Archive cast", "Wall", "Late-era reactivation", "Terminology lawyer", "Petty Crimes"],
  quotes: ["im not cute!", "im adorable! know your names!", "man, 2020...covid time", "its been 5 years"],
  claims: [
    "Teri / kinzokumissu is stable account 743618647737761832. All 13 surviving Teri-authored Wall messages in the reviewed export occur in one burst on 2025-05-06 lasting about six minutes.",
    "The cleanest same-burst beat is `im not cute!` followed 8.217 seconds later by `im adorable! know your names!`, supporting a bounded mock-defensive / self-upgrading humor read.",
    "The burst later pivots to `man, 2020...covid time` and `its been 5 years`, giving the reactivation a small participant-level time-shock without turning it into a grand nostalgia speech.",
  ],
  antiFanon: [
    "The targets of `traitor`, `dont you dare`, `beware`, and `potato` remain unresolved in this reviewed context, so no specific relationship is assigned from those lines.",
    "Wall-local authored sparsity is not treated as absence from UL generally.",
    "Export-time VIP / 18+ arrays are not used as appointment or status chronology.",
  ],
});
