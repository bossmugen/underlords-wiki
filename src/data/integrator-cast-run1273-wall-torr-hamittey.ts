import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  next: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === next.name);
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 1273 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;
const torrRelationships = [...(torr.relationships ?? [])];

upsertRelationship(torrRelationships, {
  name: "Gilli",
  href: "/characters/gilli",
  note:
    "Gilli can summon Torr into Wall with a bare tag and Torr already knows the danger: `that can be taken out of context XD`. Within days he is openly blaming Gilli's `bad influence` for how often his own words become material. The joke works because Torr keeps talking anyway.",
});

upsertRelationship(torrRelationships, {
  name: "Rummy",
  href: "/characters/rummy",
  note:
    "When Torr is litigating that a deleted comment was `totally ambiguous`, he drags Rummy in as a witness with `right? ... hehehe`. Rummy answers by bonking the defense. It is a tiny scene, but it shows how easily Torr turns embarrassment into group participation instead of retreating.",
});

allCharacters[torrIndex] = {
  ...torr,
  tags: appendUnique(torr.tags, ["Failed deletion", "Receipt literacy", "Fast acclimation", "Bad influence defense"]),
  relationships: torrRelationships,
  quotes: appendUnique(torr.quotes, [
    "i tried to delete and they saved my completely ambiguous comment.",
    "totally ambiguous",
    "well. we don't have to take a screenshot and post it in wall of shame now",
    "that can be taken out of context XD",
    "XD i'm giving a lot of material with this stream",
    "i get on here a lot. i blame @New Account Gilli#3226 bad influence.",
  ]),
  claims: appendUnique(torr.claims, [
    "On 2022-10-23/24, the separate account `homethey_` (592243050722492424) posts a Wall attachment. Torr's next surviving Wall message directly mentions that account, calls them the `trouble maker`, and says `i tried to delete and they saved my completely ambiguous comment.` Torr immediately doubles down with `totally ambiguous` and keeps extending the joke. The useful person read is failed-deletion self-incrimination: Torr knows how the receipt machine works and still feeds it.",
    "By 2023-09-01 Torr can joke that `we don't have to take a screenshot and post it in wall of shame now` when the questionable material is already being said inside Wall. The recurring person read is procedural fluency with the room's evidence culture, not a formal archive role.",
    "Torr's surfaced September-October 2022 chronology shows unusually fast acclimation to Wall culture. On Sep. 24 he publicly narrates a nickname misunderstanding and corrects himself; four days later Gilli can summon him into Wall with a bare mention and Torr immediately says `that can be taken out of context XD`. By Oct. 5-6 he is joking that his stream is `giving a lot of material` and blaming Gilli's `bad influence`. The cumulative person read is mock embarrassment plus active continued material production: Torr learns the room's rules quickly and performs his defense inside them instead of disappearing.",
    "The late-October `totally ambiguous` defense also shows Torr recruiting Rummy into the joke as a witness. Rummy's bonk reaction keeps the scene in the same social register: Torr's protest is part of the entertainment, not an exit from it.",
  ]),
  antiFanon: appendUnique(torr.antiFanon, [
    "The 2022 attachment is confirmed POSTED BY account 592243050722492424 (`homethey_`). Torr's wording and message topology support a probable saved-copy referent only; MADE BY, CAPTURED BY, FEATURING, and exact visual contents remain unresolved.",
    "Do not merge account 592243050722492424 (`homethey_`) into canonical HamitteY/Wichita account 400116637266870273 (`hamittey`) merely because the names resemble each other. The identity bridge is explicitly unresolved and the canonical HamitteY dossier receives no Run 1273 relationship claim from this pocket.",
    "Torr's mock-prosecution language toward the separate `homethey_` account supports scene-specific receipt familiarity only. Do not inflate it into friendship rank, romance, kinship, or a blanket consent claim.",
    "The Daycare miner's 2026-09-17 09:02 handoff labels stable account 592243050722492424 as Tae in the Oct. 24 scene, while the current public identity rail stores the same stable account as `homethey_`. Keep that naming/identity bridge unresolved backstage; do not attach this receipt to a canonical Tae or HamitteY owner without a hard bridge.",
    "The Sep.-Oct. 2022 support route comes from Lobby and Wall, not direct Daycare dialogue. It can deepen Torr as a person without being relabeled as Daycare-native evidence.",
    "The screenshots around the Gilli / stream / deleted-comment scenes remain POSTED BY their posting accounts only. Torr's authored lines support his own context-collapse and self-produced-material read; they do not establish MADE BY, CAPTURED BY, or FEATURING.",
  ]),
} as ExtendedCharacter;
characterById.set("torr", allCharacters[torrIndex]);
