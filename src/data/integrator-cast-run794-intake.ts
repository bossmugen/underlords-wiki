import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationships = (
  current: NonNullable<Character["relationships"]>,
  additions: NonNullable<Character["relationships"]>,
) => {
  const relationships = [...current];
  for (const addition of additions) {
    const index = relationships.findIndex((relationship) => relationship.name === addition.name);
    if (index >= 0) {
      relationships[index] = {
        ...relationships[index],
        ...addition,
      };
    } else {
      relationships.push(addition);
    }
  }
  return relationships;
};

const upsertCharacter = (seed: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      aliases: unique([...(current.aliases ?? []), ...(seed.aliases ?? [])]),
      tags: unique([...(current.tags ?? []), ...(seed.tags ?? [])]),
      relationships: mergeRelationships(current.relationships ?? [], seed.relationships ?? []),
      quotes: unique([...(current.quotes ?? []), ...(seed.quotes ?? [])]),
      claims: unique([...(current.claims ?? []), ...(seed.claims ?? [])]),
      antiFanon: unique([...(current.antiFanon ?? []), ...(seed.antiFanon ?? [])]),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const canonical = allCharacters.find((character) => character.id === seed.id)!;
  characterById.set(seed.id, canonical);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

upsertCharacter({
  id: "mercy",
  name: "Mërcy",
  aliases: ["mercuryplanett", ".mercuryplanet"],
  billing: "legacy",
  role: "Archive-era cast",
  era: "2021–2023+",
  logline:
    "Low message count, high room fluency: Mërcy can compress an old social history into two sentences, then surface elsewhere with a cookie pitch, one mirrored 😌, and the confidence to let everybody else catch the joke without an explanatory memo.",
  tags: [
    "Archive cast",
    "Daycare",
    "Wall",
    "Prior-server familiarity",
    "Compressed self-introduction",
    "Low-verbiage bit fluency",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "LilSatan",
      note:
        "Instead of narrating a whole prehistory, Mërcy tags LilSatan with `Known me for awhile. Old server member 🖤`. In that moment LilSatan is the human shorthand for `I may be new here, but I am not a stranger`.",
    },
    {
      name: "N E L P H",
      note:
        "Mërcy drops a `Get your fresh box of cookies !` pitch at N E L P H, mirrors the answering 😌, and reacts as N E L P H extends the bit into `Support your local business`. The exchange barely needs words because both people already know how to keep the joke moving.",
    },
  ],
  quotes: [
    "Yeah, but I’ve worked w/ everyone before",
    "Known me for awhile. Old server member 🖤",
    "Valid 👍🏻",
    "Get your fresh box of cookies !",
    "😌",
  ],
  claims: [
    "Mërcy is anchored to stable account 906809263995908096; the same account is preserved across `mercuryplanett` and `.mercuryplanet` handle states.",
    "On 2023-01-07, when Shiro asks whether Mërcy is new, Mërcy answers `Yeah, but I’ve worked w/ everyone before`, then tags LilSatan with `Known me for awhile. Old server member 🖤`. The useful person read is compressed continuity: Mërcy can acknowledge being new to the immediate doorway without presenting herself as socially unknown.",
    "Later in the same Daycare sequence Mërcy answers a tagged person with `Valid 👍🏻`; it fits the same terse, socially fluent register without being promoted into a universal judgment about that person.",
    "The same stable account is active on Wall on 2021-11-19: Mërcy posts `Get your fresh box of cookies !` at N E L P H, mirrors N E L P H's 😌, and reacts after N E L P H continues the premise as `Support your local business`. The useful cumulative read is low-verbiage in-group fluency, not social absence.",
  ],
  antiFanon: [
    "Mërcy's statements about prior work and old-server familiarity are her own contemporaneous self-description. They do not by themselves reconstruct a formal UL role, appointment date, original join date, or complete prior-server chronology.",
    "`Known me for awhile` supports prior familiarity with LilSatan in Mërcy's own words; it does not establish family, romance, exclusivity, or a ranked closeness claim.",
    "The N E L P H cookie exchange supports playful familiarity in that scene, not a literal business, formal partnership, or ranked relationship. Mërcy's reaction is not authorship of N E L P H's line.",
    "Mërcy's 2021 Wall presence is surviving chronology, not an origin date.",
  ],
});

upsertCharacter({
  id: "lena",
  name: "Lena",
  aliases: ["Aelena", ".aelena"],
  billing: "legacy",
  role: "Archive-era Whiskey cast",
  era: "2020–2021+",
  logline:
    "Sharp eye, soft witness: Lena notices the tiny thing everybody else could have ignored — a room count, nail length, brutal Photoshop, a `moss friend`, an animal folding its feet under itself — and then has a habit of making somebody else look too.",
  tags: [
    "Archive cast",
    "Whiskey",
    "Sharp eye",
    "Soft witness",
    "Light correction",
    "Care radar",
    "Tiny-animal witness",
    "Nail calibration",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Mugen says nine people are viewing Whiskey; Lena quietly corrects the count with `I see 11`. A month later Mugen starts `whiskey is cool but` and Lena answers `no u`. Precision and tiny sentiment-boomerang teasing fit in the same lane.",
      href: "/characters/mugen",
    },
    {
      name: "Anthos",
      note:
        "When Anthos asks whether the room is sparing Hayden from having to watch clips, Lena TRUE-replies `awww`. She catches the care hidden inside the joke and labels it without forcing the scene to become sincere for five straight minutes.",
      href: "/characters/anthos",
    },
    {
      name: "Ansun",
      note:
        "Lena directly summons 颯太 and Ren for one tiny animal emergency — `HES SITTING ON HIS FEET` — rather than keeping the cute observation to herself. The gesture fits her broader habit of noticing a detail and immediately recruiting witnesses.",
    },
    {
      name: "Ren",
      note:
        "Lena tags Ren alongside 颯太 for `HES SITTING ON HIS FEET`; Ren answers the same scene with a cute-cat emote. It is a small shared-witness beat, not a closeness ranking.",
    },
  ],
  quotes: [
    "I see 11",
    "awww",
    "no u",
    "Hayden",
    "they photoshopped this poor cat’s face so bad",
    "HES SITTING ON HIS FEET",
    "Maybe a little shorter than these",
    "My little moss friend",
  ],
  claims: [
    "Lena is anchored to stable account 442167443272630273 / historical handle `.aelena`; this same account is already active in Whiskey by November 2020, before the later February 2021 Lobby intake scene.",
    "On 2020-11-14 Mugen writes that nine people are viewing Whiskey and Lena answers `I see 11`. The useful character beat is small-scale precision: Lena notices the room itself and corrects the count without making a production out of it.",
    "On 2020-11-24 Anthos asks whether the room is saving Hayden from having to watch clips; Lena TRUE-replies `awww`. The response reads the exchange as care and names the softness in one syllable.",
    "On 2020-12-22 Lena answers Mugen's `whiskey is cool but` with `no u`, keeping affection in the same compact, anti-speech register.",
    "On 2021-01-11, after a Whiskey sequence about bot commands, logs, and Renton's apology, Lena posts `Hayden`. It is retained as a quiet audience cue at a tonal seam, not as authorship, endorsement, or governance.",
    "March-April 2021 Whiskey deepens the same observational habit: Lena calibrates a preferred nail length against reference images, comments on badly Photoshopped animal media, calls something a `moss friend`, and repeatedly notices tiny living-thing behavior worth showing the room.",
    "On 2021-04-05 Lena directly tags 颯太 and Ren with `HES SITTING ON HIS FEET`; Ren posts a cute-cat emote in the same scene. Lena's action is the useful relationship beat: she summons specific people to witness the tiny moment instead of merely recording it.",
  ],
  antiFanon: [
    "The November 2020 Whiskey presence means the February 2021 Lobby intake cannot be treated as Lena's first surviving Discord/UL-room appearance. It still does not recover her original UL join date or explain why the later intake occurred.",
    "`awww` is a direct reply to Anthos in a care-shaped local scene; it does not establish exceptional closeness or a formal relationship category.",
    "The January 2021 `Hayden` tag is a local audience cue only. It does not prove endorsement, responsibility for the preceding bot/log sequence, or a governance role.",
    "The April 2-5 `baby` / `he` sequence is probably one recurring male pet and a cat is plausible from Ren's same-scene emote, but species and same-pet continuity are not hard-confirmed; the page therefore keeps the visible read at tiny-animal witness rather than manufacturing a pet dossier.",
    "The March `moss friend` referent and April `My new babies` referent remain unresolved. Private housing, dating, and third-party screenshot details stay backstage.",
    "Exact-ID q18 retrieval remains unreliable for negative classification in this source family; no reply rate, popularity score, or closeness metric is inferred from missing exact-ID results.",
  ],
});

const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) {
  throw new Error("Run 794 expected canonical Dean / Support Tech owner; refusing to create a duplicate Support Tech person.");
}

const dean = allCharacters[deanIndex] as ExtendedCharacter;
allCharacters[deanIndex] = {
  ...dean,
  aliases: unique([...(dean.aliases ?? []), "Support Tech", "supporttech900"]),
  tags: unique([
    ...(dean.tags ?? []),
    "Wall",
    "Screenshot Court",
    "Learned filer",
    "Mugen summons",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(dean.relationships ?? [], [
    {
      name: "Mugen",
      note:
        "As Support Tech, Dean's two surviving direct Wall filing pockets both pair the exhibit with Mugen almost immediately: in 2021 the attachment comes first and Mugen is summoned seconds later; in 2023 the order flips. The rhythm survives the gap because he has learned exactly whom to pull into the filing bit.",
      href: "/characters/mugen",
    },
  ]),
  quotes: unique([
    ...(dean.quotes ?? []),
    "Is this where you expose Peopl",
    "Me UH gOt EXpOsE WEE",
    "WhY U expOse Me",
  ]),
  claims: unique([
    ...(dean.claims ?? []),
    "Project canon resolves Dean in the recovered Wall export to stable Discord ID 770767336780070913 / username `supporttech900`, with the 2021 display nickname `Support Tech`; this Wall material belongs to Dean's existing owner rather than a separate Support Tech biography.",
    "In March 2021, under the Support Tech display name, Dean asks `Is this where you expose Peopl`; by April and June he is joking from the receiving end with `Me UH gOt EXpOsE WEE` and `WhY U expOse Me`.",
    "By 2021-06-26 Dean/Support Tech is the one posting a screenshot and summoning Mugen less than five seconds later. On 2023-03-23 he again pairs a Mugen summon with an attachment, this time in the opposite order. The useful change-over-time read is newcomer/defendant becoming a participant who operates the room's filing ritual personally.",
  ]),
  antiFanon: unique([
    ...(dean.antiFanon ?? []),
    "Support Tech is a display nickname of Dean for stable account 770767336780070913 / `supporttech900`, not a formal UL technical appointment inferred from the phrase.",
    "A separate Wall account, stable ID 451712961667006465 with username history `diamondwarriors` → `yeppers720`, also later displays `Support Tech`; shared display text does not bridge that account to Dean and its identity remains unresolved.",
    "The two Wall attachments from Dean/Support Tech are POSTED BY Dean only. Their pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING remain unresolved.",
    "The 2021-to-2023 Wall authorship gap is surviving source chronology, not proof that Dean left and returned to the server.",
    "The recurring Mugen summon supports filing-ritual familiarity, not hierarchy, romance, or a ranked closeness claim; the separately user-confirmed online mother/son relationship predates Dragon Raja and UL.",
  ]),
} as ExtendedCharacter;
characterById.set("dean", allCharacters[deanIndex]);
