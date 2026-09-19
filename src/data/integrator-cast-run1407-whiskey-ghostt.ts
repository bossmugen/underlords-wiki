import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const id = "ghostt";
const index = allCharacters.findIndex((character) => character.id === id);
const previous = index >= 0 ? (allCharacters[index] as ExtendedCharacter) : undefined;

const relationships = [...(previous?.relationships ?? [])];
const upsertRelationship = (name: string, note: string, href?: string) => {
  const relationshipIndex = relationships.findIndex((relationship) => relationship.name === name);
  const nextRelationship = href ? { name, note, href } : { name, note };
  if (relationshipIndex >= 0) relationships[relationshipIndex] = nextRelationship;
  else relationships.push(nextRelationship);
};

upsertRelationship(
  "Gilli",
  "Gilli and Ghøstt can turn each other's wording into reusable public material. Ghøstt takes a disputed-looking `porpcorn` and declares the funny form correct now; months later, when Gilli apparently characterizes something Ghøstt says as an everyday habit, Ghøstt answers with two table flips instead of a serious defense. The recurring permission is verbal-habit comedy, not a closeness ranking.",
  "/characters/gilli",
);
upsertRelationship(
  "Jordayy",
  "Across direct H1 Whiskey rows, Jordayy repeatedly recognizes Ghøstt with stretched-out `ghooooost` / `GHOOOOOST` / `Isss ghost` callouts. That repetition makes Ghøstt a recognizable arrival-presence to Jordayy; the missing surrounding neighborhoods leave the exact trigger and Ghøstt's reciprocal side open.",
  "/characters/jordayy",
);
upsertRelationship(
  "Mugen",
  "Mugen can drop a lone `:Cursed:` and get `Bless your heart :hAhA:` back from Ghøstt as a direct reply. Elsewhere Ghøstt notices Ghoulie's Wall reputation and hands Mugen the setup for the rent joke. It is compact dry-teasing familiarity, not a relationship rank.",
  "/characters/mugen",
);

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id,
  name: "Ghøstt",
  aliases: unique([...(previous?.aliases ?? []), "Ghostt", "Ghøstt..", "ghostt.wicked"]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "315245494051930113"]),
  billing: previous?.billing ?? "legacy",
  role: "Staff",
  era: previous?.era ?? "2021+",
  logline:
    "Ghøstt treats correction like an opening bid. A mangled word can become canon instead of getting fixed, a peer can accuse him of saying something every day and receive table flips instead of a rebuttal, and a stretched-out `ghooooost` can apparently carry enough recognition to work on sight.",
  tags: unique([
    ...(previous?.tags ?? []),
    "Staff",
    "Archive cast",
    "Whiskey",
    "Wall",
    "Language mutation",
    "Verbal-habit comedy",
    "Dry teasing",
    "Recurring reputation",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(previous?.quotes ?? []),
    "No you had it right it’s porpcorn now lmfao",
    "Gilli really said I say this everyday",
    "Bless your heart :hAhA:",
    "Poor ghoulie she lives on the wall lmao",
    "I put so many hours in that game on playthroughs lol",
  ]),
  claims: unique([
    ...(previous?.claims ?? []),
    "Stable Discord account 315245494051930113 / source username `ghostt.wicked` is the reviewed Ghøstt owner for this packet; Ghostt remains a separate person from Ghoulie / Baby Lyssa.",
    "Current Staff is hard project canon for Ghøstt. This is a present-role filing only; the reviewed packet does not establish an appointment date or promotion chronology.",
    "Ghøstt's strongest current person mechanism is `too late, it's canon now`: low-stakes correction, verbal distortion, and peer reputation often become material to extend rather than records he urgently cleans up.",
    "On February 20, 2021, Ghøstt technically replies to Gilli's exact screenshot with `No you had it right it’s porpcorn now lmfao`; Gilli later protests `I DIDNT SAY IT LOL`. The humor is Ghøstt ratifying the disputed form as the new correct one.",
    "On September 10, 2021, Ghøstt writes `Gilli really said I say this everyday` and follows 15.305 seconds later with two table-flip emotes. The unidentified habit is left unidentified; the useful continuity is that Gilli can make Ghøstt's mannerisms public joke material and Ghøstt stays in the same comic register.",
    "Prior direct H1 Whiskey rows repeatedly show Jordayy recognizing Ghøstt with elongated versions of his name across independent months. This supports probable familiarity / recognizable arrival-presence while the missing surrounding neighborhoods leave the exact trigger and reciprocity unresolved.",
    "Ghøstt's surviving authored Wall voice is often compact, but compact is not faint: peers can apparently recognize recurring mannerisms around him without requiring long speeches. Do not flatten that into `quiet`.",
    "Ordinary-life texture: Ghøstt says he put many hours into repeated playthroughs of a game. The nearby broader discussion makes Mass Effect a plausible referent, but the surviving gap is too large to name the game confidently.",
    "Petty Crimes: PORPCORN IS CORRECT NOW. The offense is Ghøstt's decision that the funny form wins once correction has already entered the room.",
  ]),
  antiFanon: unique([
    ...(previous?.antiFanon ?? []),
    "Ghostt / Ghøstt is not Ghoulie / Baby Lyssa. Similar-looking ghost-language does not merge their identities.",
    "Ghøstt is current Staff under hard project canon. Do not infer when that appointment happened from export-time/current-role arrays or this room-local packet.",
    "The February 20 screenshot pixels are not independently inspectable in the current retrieval layer. Ghøstt's technical reply supports the word-game; do not claim the image visibly contains `porpcorn`.",
    "`Gilli really said I say this everyday` does not identify what `this` was. Keep the specific habit unresolved.",
    "The direct Ghøstt-authored prose advanced in this pass comes from Wall. Whiskey contributes the previously persisted Jordayy recognition lane and the attempted neighborhood recovery; do not relabel Wall-authored rows as Whiskey-authored scenes.",
    "Jordayy's repeated Ghost callouts support familiarity, not romance, a fixed greeting ritual, exclusivity, or a closeness rank. Ghøstt's reciprocal response remains under-recovered.",
    "The repeated-playthrough quote confirms heavy replay time in some game, not Mass Effect specifically. Do not promote the probable referent without the missing intermediate context.",
    "Any nearby attachment establishes only the supported posting/reply edge. POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING without separate support.",
  ]),
};

if (index >= 0) allCharacters[index] = next;
else allCharacters.push(next);
characterById.set(id, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(id)) {
  archiveCastGroup.characterIds.push(id);
}
