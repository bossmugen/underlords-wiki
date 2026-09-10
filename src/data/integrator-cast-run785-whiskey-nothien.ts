import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const relationships: NonNullable<Character["relationships"]> = [];
const upsertRelationship = (relationship: NonNullable<Character["relationships"]>[number]) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const nothienIndex = allCharacters.findIndex((character) => character.id === "nothien");
const existing = nothienIndex >= 0 ? (allCharacters[nothienIndex] as ExtendedCharacter) : undefined;
relationships.push(...(existing?.relationships ?? []));

upsertRelationship({
  name: "Mugen",
  note: "Nothien's 2020 departure scene leaves the door open in both directions: `I still have discord if you guys ever need someone to rant to or anything`; Mugen answers `You're welcome back anytime 🙂`. Care on the way out, return permission from the house; no closeness ranking required.",
  href: "/characters/mugen",
});
upsertRelationship({
  name: "Ren",
  note: "On the 2023 return Nothien self-files as `Underlords(?)`, `Member(?)`, `decently old`; Ren answers `NOTHIIIII`. Nothien is unsure how to label the formal category after the gap. Ren is not unsure who walked in.",
  href: "/characters/ren",
});
upsertRelationship({
  name: "Gilli",
  note: "Less than a minute after Nothien begs everyone not to check Whiskey for two minutes, Gilli posts `Nuuuuuu`. The timing makes same-scene peeking highly probable, but the surfaced object is not a technical Reply edge.",
  href: "/characters/gilli",
});

const next: ExtendedCharacter = {
  ...(existing ?? {
    id: "nothien",
    name: "Nothien",
    billing: "legacy" as const,
    role: "Archive-era UL member",
    era: "2020–2023+",
    logline: "",
  }),
  aliases: appendUnique(existing?.aliases, ["Noth", "northwards"]),
  logline:
    "Will start the fight before locating the fight, leave Dragon Raja without closing the human door, and apparently require a two-minute privacy curtain before posting the sincere part: Nothien can be practically direct, emotionally available, and deeply unwilling to be watched being earnest all at once.",
  tags: appendUnique(existing?.tags, [
    "Whiskey",
    "Club Only",
    "Lobby",
    "Return",
    "Practical care",
    "Two-minute embargo",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(existing?.quotes, [
    "NO ONE CHECK WHISKY ROOM FOR TWO MINUTES PLEASE",
    "Please",
    "I still have discord if you guys ever need someone to rant to or anything",
    "Nothien the... nugget?",
    "Nothien, Underlords(?), Member(?), decently old\nhello",
  ]),
  claims: appendUnique(existing?.claims, [
    "On April 6, 2020 Nothien asks Club Only not to check Whiskey for two minutes, repeats `Please`, then less than half a minute later posts the outward-facing care offer `I still have discord if you guys ever need someone to rant to or anything`. The staging supports sincere availability paired with comic embarrassment about being watched saying it.",
    "Gilli's `Nuuuuuu` and LilsatanSir's `Ok I did NOT see that last comment...` land inside the requested two-minute window. Timing and wording make same-scene peeking more likely than not, but neither surfaced message is a technical Reply to the Whiskey post.",
    "Mugen answers Nothien's open door with another one: `Thanks for the good times, Noth. You're welcome back anytime 🙂`.",
    "An April 4, 2020 Lobby message from the same stable account reads `Nothien the... nugget?` and receives three laughing reactions; it is earlier pinned server presence, not a join date.",
    "On the 2023 return the same account uses literal question marks around `Underlords(?)` and `Member(?)`; Ren responds with immediate name recognition instead of resolving the category.",
  ]),
  antiFanon: appendUnique(existing?.antiFanon, [
    "The two-minute-embargo scene supports embarrassment around visible earnestness in that scene; do not inflate it into global shyness, anxiety, or a diagnosis.",
    "Apr 4 is an earlier stable-ID server pin, not Nothien's join/origin date. Targeted failure to find an earlier Bouncer/onboarding object is not proof none existed.",
    "Gilli and LilsatanSir are probable same-scene reactions to the embargo/goodbye, not surfaced technical Discord Replies.",
    "The unresolved `stone one` immediately before the goodbye is not reconstructed into a game mechanic or object.",
    "The 2023 `Underlords(?)` / `Member(?)` wording retains Nothien's own uncertainty. Do not resolve historical status from exporter/current role arrays or turn the Lobby return into Dragon Raja roster re-entry.",
    "The departure and return beats support relationship behavior, not friendship/closeness rankings.",
  ]),
};

if (nothienIndex >= 0) allCharacters[nothienIndex] = next;
else allCharacters.push(next);
characterById.set("nothien", next);
