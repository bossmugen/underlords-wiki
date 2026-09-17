import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const baileyId = "bailey-babe";
const baileyIndex = allCharacters.findIndex((character) => character.id === baileyId);

const baileySeed: ExtendedCharacter = {
  id: baileyId,
  name: "Bailey_Babe",
  aliases: ["tripwire1419"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2021+",
  logline:
    "Bailey is good at leaving the awkward middle visible. She can admit she forgot something, laugh while somebody tries to expose her, announce that she is going to sleep, tell everybody not to bother her, and twenty-five seconds later ask someone to take her phone away. The useful pattern is not generic chaos: low-stakes embarrassment and failed exits become shared comedy instead of a reason to disappear.",
  tags: [
    "Archive cast",
    "Lobby",
    "Wall of Shame/Fame",
    "Self-own",
    "Failed exits",
    "Kuki riff",
    "Gilli procedural handoff",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Kuki",
      note:
        "Bailey twice picks Kuki — then appearing as Cookies/Juicebox — as the audience for the sleep/ghost nonsense. `who needs sleep` turns into `I’m a ghost 👻`; Kuki stays inside the premise and answers with a Ghostbusters GIF thirty-three seconds later. It is a small, comfortable same-scene riff, not a closeness ranking.",
      href: "/characters/kuki",
    },
    {
      name: "Gilli",
      note:
        "Bailey openly says `I forgot to do that Sowwy`, follows with `Tipp 17`, and Gilli later answers `@Bailey_Babe gotcha in hun`. The exact forgotten task is still unclear, but the interaction is easy and practical: Bailey admits the lapse instead of bluffing through it, and Gilli handles whatever needs handling without visible escalation.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "I forgot to do that Sowwy",
    "You really trying to expose us lmao",
    "who needs sleep",
    "Someone take my phone away pls",
  ],
  claims: [
    "Across several April 2021 scenes, Bailey repeatedly lets peers watch the revision happen: she admits a forgotten task, stays laughing inside an exposure bit, and publicly changes course from `who needs sleep` to actually going to sleep before immediately proving she is still on her phone. The cumulative read is self-aware public lapse / self-owning participation, not a generic `chaotic` label.",
    "After a pooled Deleted User posts an image and tags Bailey, she does not retreat from the scene. She reacts with eyes and laughter, asks when the pictures were taken, and says `You really trying to expose us lmao`. Her wording supports her perception of the bit; it does not identify the image maker, capturer, or depicted people.",
    "Bailey directly selects Kuki/Cookies-Juicebox for the sleep and ghost riff. Kuki's Ghostbusters GIF lands 33.870 seconds after `I’m a ghost 👻`; the timing supports same-scene participation even though no technical reply edge survives.",
    "Petty Crimes: Someone Take My Phone Away. `who needs sleep` becomes `Altho I actually am going to sleep rn` 103.084 seconds later; `Don’t bother me lmao` becomes `Someone take my phone away pls` 25.199 seconds later. One compact self-own, not four separate personality diagnoses.",
  ],
  antiFanon: [
    "Bailey's April 11, 2021 automated welcome is a surviving Discord threshold, not guaranteed origin, recruitment source, or formal join chronology.",
    "Do not infer Bailey's role or appointment chronology from export-time/current role arrays.",
    "The April 21 exposure attachment is POSTED BY a pooled Deleted User. MADE BY, CAPTURED BY, FEATURING, and the image contents remain unresolved because the pixels were not inspected.",
    "Bailey's `when did you take those lmao` and `trying to expose us` are reaction language, not independent media provenance.",
    "Current retrieval surfaces Lobby/Wall material containing Whiskey links rather than Bailey-authored direct Whiskey rows. That is a source-routing limit, not evidence that Bailey was absent from Whiskey.",
    "Do not reduce Bailey to irresponsible, attention-seeking, bad at sleeping, or globally chaotic from these low-stakes self-own scenes.",
  ],
};

if (baileyIndex >= 0) {
  const current = allCharacters[baileyIndex] as ExtendedCharacter;
  allCharacters[baileyIndex] = {
    ...current,
    ...baileySeed,
    aliases: unique([...(current.aliases ?? []), ...(baileySeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(baileySeed.tags ?? [])]),
    relationships: [...(current.relationships ?? []), ...(baileySeed.relationships ?? [])],
    quotes: unique([...(current.quotes ?? []), ...(baileySeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(baileySeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(baileySeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(baileySeed);
}

characterById.set(baileyId, allCharacters.find((character) => character.id === baileyId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(baileyId)) {
  archiveCastGroup.characterIds.push(baileyId);
}
