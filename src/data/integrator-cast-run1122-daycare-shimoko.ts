import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const shimokoIndex = allCharacters.findIndex((character) =>
  character.name.toLowerCase() === "queen shimoko" ||
  character.name.toLowerCase() === "shimoko" ||
  (character.aliases ?? []).some((alias) =>
    ["queen shimoko", "shimoko", "shimok05290"].includes(alias.toLowerCase()),
  ),
);

const relationship = {
  name: "Ricochet",
  note:
    "Shimoko can toss one ridiculous observation into the room and get an instant return serve. Her `Crab booty omgsh` is answered by Ricochet with `Pancake crab booty??`; the surviving beat is tiny, but it catches her social register cleanly: notice the silly detail, say it out loud, let somebody else make it worse.",
  href: "/characters/ricochet",
};

if (shimokoIndex >= 0) {
  const shimoko = allCharacters[shimokoIndex] as ExtendedCharacter;
  const relationships = [
    ...(shimoko.relationships ?? []).filter((item) => item.name.toLowerCase() !== "ricochet"),
    relationship,
  ];

  allCharacters[shimokoIndex] = {
    ...shimoko,
    logline:
      "Queen Shimoko has a small surviving footprint but a remarkably consistent entrance style: offer practical help, greet the room like everybody is already cute, then lock onto the dumbest available detail and help turn it into a bit. Warm helper energy, immediately compromised by crab booty.",
    tags: unique([
      ...(shimoko.tags ?? []),
      "Archive cast",
      "Warm helper",
      "Affectionate greetings",
      "Low-stakes room play",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(shimoko.quotes ?? []),
      "Good morning cutiess",
      "Crab booty omgsh:Laugh:",
      "Yes trink Redbull is the baby",
    ]),
    claims: unique([
      ...(shimoko.claims ?? []),
      "Stable account 825953265430691860 / username shimok05290 is Queen Shimoko in the reviewed Daycare handoff.",
      "Her direct Daycare ledger footprint is only one message, so the public weight stays small. Narrowly adjacent April-May 2021 UL material nevertheless repeats the same easy social moves: she offers help, greets people affectionately, and joins tiny absurd room bits without much ceremony.",
      "`Crab booty omgsh` is immediately answered by Ricochet with `Pancake crab booty??`, a compact example of Shimoko seeding low-stakes room play with one throwaway observation.",
    ]),
    antiFanon: unique([
      ...(shimoko.antiFanon ?? []),
      "`Ich kann ein bisschen` establishes only that Shimoko used a little German in that exchange. It does not establish nationality, background, or fluency.",
      "`If you need body I can help you` is retained only as practical in-game help language; the missing reply target/context does not support a more specific mechanical or personal interpretation.",
      "Export-time current-role arrays do not establish Shimoko's appointment chronology or historical office dates.",
    ]),
  } as ExtendedCharacter;

  characterById.set(allCharacters[shimokoIndex].id, allCharacters[shimokoIndex]);
} else {
  const shimoko: ExtendedCharacter = {
    id: "queen-shimoko",
    name: "Queen Shimoko",
    aliases: ["shimok05290"],
    billing: "legacy",
    role: "Archive-era supporting cast",
    era: "2021",
    logline:
      "Queen Shimoko has a small surviving footprint but a remarkably consistent entrance style: offer practical help, greet the room like everybody is already cute, then lock onto the dumbest available detail and help turn it into a bit. Warm helper energy, immediately compromised by crab booty.",
    tags: [
      "Archive cast",
      "Warm helper",
      "Affectionate greetings",
      "Low-stakes room play",
      "Petty Crimes",
    ],
    relationships: [relationship],
    quotes: [
      "Good morning cutiess",
      "Crab booty omgsh:Laugh:",
      "Yes trink Redbull is the baby",
    ],
    claims: [
      "Stable account 825953265430691860 / username shimok05290 is Queen Shimoko in the reviewed Daycare handoff.",
      "Her direct Daycare ledger footprint is only one message, so the public weight stays small. Narrowly adjacent April-May 2021 UL material nevertheless repeats the same easy social moves: she offers help, greets people affectionately, and joins tiny absurd room bits without much ceremony.",
      "`Crab booty omgsh` is immediately answered by Ricochet with `Pancake crab booty??`, a compact example of Shimoko seeding low-stakes room play with one throwaway observation.",
    ],
    antiFanon: [
      "`Ich kann ein bisschen` establishes only that Shimoko used a little German in that exchange. It does not establish nationality, background, or fluency.",
      "`If you need body I can help you` is retained only as practical in-game help language; the missing reply target/context does not support a more specific mechanical or personal interpretation.",
      "Export-time current-role arrays do not establish Shimoko's appointment chronology or historical office dates.",
    ],
  };

  allCharacters.push(shimoko);
  characterById.set(shimoko.id, shimoko);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(shimoko.id)) {
    archiveCastGroup.characterIds.push(shimoko.id);
  }
}
