import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const stableId = "659305268684783628";
const index = allCharacters.findIndex((character) =>
  character.id === "darkasrai" ||
  character.name.toLowerCase() === "darkasrai" ||
  (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

const patch: ExtendedCharacter = {
  id: index >= 0 ? allCharacters[index].id : "darkasrai",
  name: "DarkAsrai",
  aliases: ["darkasrai"],
  billing: "guest",
  role: "Wall regular",
  era: "2021–2023+",
  logline:
    "DarkAsrai has the deeply UL-specific problem of recognizing the Wall trap in real time and still helping run it. Getting exposed earns a wheeze and a resigned `I knew id get in here`; losing the filing race earns `Beat me to it`, followed two minutes later by two screenshots of Dark's own. Repeat defendant, willing prosecutor, absolutely no lesson learned.",
  tags: ["Archive cast", "Wall", "Receipt economy", "Game banter", "Petty Crimes"],
  stableDiscordIds: [stableId],
  relationships: [
    {
      name: "phenomenal_lamb_14960",
      note:
        "Their surviving January 2023 exchange is direct reciprocal game-combat banter: Dark throws out `Bet wanna fight me XD`, phenomenal_lamb answers that it is going to be `very swuiShy`, and Dark follows with `Lets see how much i remember of the combat`. Comfortable challenge language, not a rank, romance label, or closeness hierarchy.",
    },
  ],
  quotes: [
    "I had a feeling this would happen",
    "I knew id get in here",
    "Its only going to get worse",
    "Beat me to it",
    "Bet wanna fight me XD",
    "Lets see how much i remember of the combat @phenomenal_lamb_14960",
  ],
  claims: [
    "Stable Discord account 659305268684783628 / darkasrai is DarkAsrai in the reviewed Wall material.",
    "Across surviving 2021–2023 Wall scenes DarkAsrai repeatedly recognizes exposure as predictable, laughs at it, and also actively files receipts. The useful cumulative contradiction is anticipatory defendant / resigned self-recognizer plus willing filer / receipt-race participant.",
    "DarkAsrai and phenomenal_lamb_14960 have a bounded reciprocal game-combat challenge exchange in January 2023. It supports teasing familiarity inside that scene without establishing governance, romance, or a ranked closeness claim.",
  ],
  antiFanon: [
    "The surviving 2021-08-06 to 2023-05-31 Wall span is a surviving archive boundary, not an origin, join date, departure date, or complete activity span.",
    "A 2021 BeaEder screenshot precedes DarkAsrai's `I had a feeling this would happen`, but the long gap and lack of Reply edge do not prove the image depicts or belongs to Dark.",
    "DarkAsrai POSTED the two April 5, 2023 screenshots recovered in the assigned Wall object. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved; timestamp-looking filenames are not certified capture chronology.",
    "A separate sexualized joke/allegation naming another person is not promoted into that person's sexual behavior, history, preference, or visual identity and is intentionally omitted from the public dossier.",
    "The phenomenal_lamb exchange is game-combat banter only and does not create a formal role or relationship label.",
  ],
};

if (index >= 0) {
  const current = allCharacters[index] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of patch.relationships ?? []) {
    const existing = relationships.findIndex((item) => item.name === relationship.name);
    if (existing >= 0) relationships[existing] = relationship;
    else relationships.push(relationship);
  }
  allCharacters[index] = {
    ...current,
    ...patch,
    aliases: unique([...(current.aliases ?? []), ...(patch.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(patch.tags ?? [])]),
    stableDiscordIds: unique([...(current.stableDiscordIds ?? []), ...(patch.stableDiscordIds ?? [])]),
    relationships,
    quotes: unique([...(current.quotes ?? []), ...(patch.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(patch.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(patch.antiFanon ?? [])]),
  } as ExtendedCharacter;
  characterById.set(allCharacters[index].id, allCharacters[index]);
} else {
  allCharacters.push(patch);
  characterById.set(patch.id, patch);
  const archiveCast = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCast && !archiveCast.characterIds.includes(patch.id)) archiveCast.characterIds.push(patch.id);
}
