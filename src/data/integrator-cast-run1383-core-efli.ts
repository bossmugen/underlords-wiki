import "./integrator-cast-run1392-daycare-mimi";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const efliId = "efli";
const efliIndex = allCharacters.findIndex((character) => character.id === efliId);

const efliSeed: ExtendedCharacter = {
  id: efliId,
  name: "Efli",
  aliases: ["ƐℲı˥"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2020–2021+",
  logline:
    "Efli is competent in the annoying practical way that travels well: patient with joins and event plumbing, curious enough to chase metadata, and casually capable of revealing that their photography workflow lived in Lightroom before also informing the room that Firefox beats Brave for them personally.",
  tags: [
    "Archive cast",
    "Practical fixer",
    "Photography",
    "Lightroom",
    "Metadata / EXIF",
    "Firefox",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Saber",
      note:
        "Their surviving back-and-forth repeatedly puts Efli in practical-helper mode: join and invite problems get retries, checks, and follow-through instead of a shrug after the first error. It reads as lived usefulness, not a formal rank.",
    },
    {
      name: "emily",
      note:
        "A 2020 photo-browser detour turns into collaborative tool poking: emily discovers she can inspect EXIF information while Efli follows the metadata thread and answers from actual Lightroom experience. The exact browser page is unknown, but the ease of the exchange is not.",
    },
  ],
  quotes: [
    "I want to see the meta data",
    "Lightroom is pretty rad",
    "I literally did everything for photography inside it",
    "I use firefox personally",
    "not a huge fan of brave",
  ],
  claims: [
    "Efli's strongest recurring read is practical competence without résumé theater. Troubleshooting and event-plumbing material already put them in the person-who-keeps-going lane; the photo thread makes the same habit personal rather than purely operational.",
    "On September 24, 2020, a photo-browser conversation pivots from joking into EXIF curiosity. Efli asks to see the metadata, follows the camera-information discovery, calls Lightroom `pretty rad`, and says `I literally did everything for photography inside it`.",
    "A separate 2020 browser tangent adds an aggressively ordinary preference: `I use firefox personally` followed by `not a huge fan of brave`.",
    "The photography material expands Efli beyond server utility. They do not just know how to keep a workflow moving; they have enough direct photo-editing experience to recognize the tool conversation and casually disclose a Lightroom-heavy workflow.",
    "Petty Crimes: WILL TROUBLESHOOT YOUR JOIN PROBLEM, INSPECT THE METADATA, DO THE PHOTOGRAPHY WORK IN LIGHTROOM, AND THEN DROP A LOW-STAKES FIREFOX-OVER-BRAVE TAKE LIKE THIS IS ALL ONE DEPARTMENT.",
  ],
  antiFanon: [
    "The surviving troubleshooting and event-plumbing material does not establish a formal staff rank or appointment chronology.",
    "The September 2020 browser/social page is not safely identified as an Underlords-owned surface. Do not reconstruct the hidden page, photographed subject, or surrounding private context from the surviving lines.",
    "Efli's Lightroom line supports photography-workflow experience; it does not identify the photos, camera ownership, a client relationship, or a professional occupation.",
    "`not a huge fan of brave` is a browser preference, not hostility toward Brave users or a broader ideological claim.",
    "Keep the historical display form ƐℲı˥ attached to Efli's stable identity; similar-looking names are not an identity bridge on their own.",
  ],
};

if (efliIndex >= 0) {
  const current = allCharacters[efliIndex] as ExtendedCharacter;
  allCharacters[efliIndex] = {
    ...current,
    ...efliSeed,
    aliases: unique([...(current.aliases ?? []), ...(efliSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(efliSeed.tags ?? [])]),
    relationships: [...(current.relationships ?? []), ...(efliSeed.relationships ?? [])],
    quotes: unique([...(current.quotes ?? []), ...(efliSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(efliSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(efliSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(efliSeed);
}

characterById.set(efliId, allCharacters.find((character) => character.id === efliId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(efliId)) {
  archiveCastGroup.characterIds.push(efliId);
}
