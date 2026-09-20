import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertCharacter = (allCharacters: Character[], next: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) =>
      character.id === next.id ||
      next.stableDiscordIds?.some((stableId) =>
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
      ),
  );

  if (index < 0) {
    allCharacters.push(next);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationshipMap = new Map(
    [...(current.relationships ?? []), ...(next.relationships ?? [])].map((relationship) => [relationship.name, relationship]),
  );

  allCharacters[index] = {
    ...current,
    ...next,
    // Stable-account matches deepen the existing canonical owner. They never rename its route
    // or replace an already-established formal role with a contextual room label.
    id: current.id,
    name: current.name,
    role: current.role,
    aliases: [...new Set([...(current.aliases ?? []), ...(next.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(next.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(next.stableDiscordIds ?? [])])],
    relationships: [...relationshipMap.values()],
    quotes: [...new Set([...(current.quotes ?? []), ...(next.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(next.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(next.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

export const applyRun1496 = (allCharacters: Character[]) => {
  // Chibiterasu / Chubi is owned by integrator-cast-run1496-core-chubi.ts so the Core return
  // material has one canonical structured owner instead of two near-duplicate mutation passes.

  // Whiskey hard identity repair: Nintendo / NintendoShitcube is Zoshaa, never a separate person.
  upsertCharacter(allCharacters, {
    id: "zoshaa",
    name: "Zoshaa",
    aliases: ["Nintendo", "NintendoShitcube", "nintendoshitcube_"],
    billing: "recurring",
    role: "Whiskey-era regular",
    era: "2020+",
    logline: "Cute-chaos register, dry high-context callbacks, and a habit of making old room history current again: Zoshaa can boredom-scroll a stack of old screenshots back into circulation, identify an old incident from half a setup, then remember the funniest possible detail without turning any of it into a formal archive job.",
    tags: ["Whiskey", "Callbacks", "Room memory", "Old-screenshot scavenger", "Receipt culture", "Petty Crimes"],
    stableDiscordIds: ["703429467082719344"],
    relationships: [
      {
        name: "Mugen",
        note: "Zoshaa, under the Nintendo name, can tell Mugen `you a fool` and `Go home` in the compact familiar register that runs through Whiskey. It reads as comfortable teasing, not literal dismissal or authority.",
      },
    ],
    quotes: [
      "That's usually the case",
      "you a fool",
      "Go home",
      "The keylogger one?",
      "Oh man I was hot. Cause I kept fuckin winning",
      "Scrolling through photos out of boredom, found a bunch of old ss lmao",
      "Throwback to snows emo, raining nude bush hours",
    ],
    claims: [
      "Stable Discord account 703429467082719344 is canonical Zoshaa; Nintendo / NintendoShitcube / nintendoshitcube_ are names on that same person, not a second cast member.",
      "Under the Nintendo display, Zoshaa repeatedly behaves as a high-context memory recirculator: an old incident can be identified from partial setup, and on 2020-10-30 boredom-scrolling produces a rapid twelve-image old-screenshot dump that immediately reactivates shared room memory.",
      "A 2020-11-04 `Throwback` line does the same thing deliberately: old Snow-era nonsense is pushed back into the present conversation and other people pick the premise up without a long explanation.",
      "The useful contradiction is offhand delivery / high social payload. Zoshaa presents the callback casually while the room treats the returned material as already meaningful.",
    ],
    antiFanon: [
      "NintendoShitcube / Nintendo is Zoshaa. Do not create, route, or count Nintendo as a separate person.",
      "Memory recirculation does not make Zoshaa an official archivist, prove that she saved everything, or establish authorship of the old screenshots.",
      "Old screenshot packets establish POSTED BY Zoshaa only. MADE BY, CAPTURED BY, and FEATURING remain unresolved unless another source resolves them.",
      "Whiskey retellings and Zoshaa's recognition do not make her the author or cause of every detail in somebody else's version of an old incident.",
      "No formal UL role should be inferred from this Whiskey material.",
    ],
  } as ArchiveCharacter);

  // Run 1496 intentionally does NOT publish the same-name t7morrow/249189... or Pride/387630...
  // bodies into existing public owners. The reviewed current handoffs anchor different stable accounts
  // for t7morrow (212165031293485056) and Pride (380825199836266497), and similar names alone are
  // not an identity bridge. Hold those bodies for explicit reconciliation instead of fusing people.
};
