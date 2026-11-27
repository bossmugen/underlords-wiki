import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Daycare longitudinal synthesis: Trebach's surviving footprint is concentrated in one
// room, but it is broad enough for a compact WIKI owner—practical help, easy social
// warmth, attention discomfort, creative-game habits, and a recurring instinct not to
// add weight to other people's plates. A later Lobby return adds a useful contradiction:
// socially remembered, perfectly willing to ask what a basic intake acronym means.
// MAIN deliberately waits for more cross-context breadth.
const trebachId = "trebach";
const trebachIndex = allCharacters.findIndex((character) => character.id === trebachId);

const trebachCharacter: ExtendedCharacter = {
  id: trebachId,
  name: "Trebach",
  aliases: ["SkeletonChair", "Slice"],
  billing: "legacy",
  role: "Daycare cast / practical helper",
  era: "2020–2022",
  logline:
    "Quietly useful and socially warm: Trebach can fix the annoying Tupper problem without making anybody feel stupid, flirt with the room as a joke, duck attention the second it lands too hard, worry about adding to somebody else's plate, and still stop a welcome-back form to ask what `IGN` means rather than bluffing through it.",
  tags: [
    "Archive cast",
    "Daycare",
    "Practical helper",
    "Attention-avoidant",
    "Low-ego",
    "Sims builder",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Their Daycare lane has both practical ease and a small care collision. In September 2020 Trebach offers to fix an old Tupper problem—`if you want i can help`, then `give me a few mins and i gotchu`—while matching Mugen's joking register instead of turning help into a lecture. In June 2021 Trebach says a removal bothered them but they did not want to add to anyone's already-full plate; Mugen answers `It matta ;^;`, refusing to let Trebach make their own hurt disposable.",
      href: "/characters/mugen",
    },
    {
      name: "Cely",
      note:
        "Cely gets an easy, affectionate friendship lane: check-ins, teasing, playful compliments, and the December 2020 attention pocket where Cely keeps asking about the birthday situation while Trebach goes `waaa` and admits `dont focus on me im not good with attention.` The warmth is real; the archive does not require turning casual affection into romance.",
    },
    {
      name: "Gilli",
      note:
        "When Trebach is back in the room in December 2020, Gilli simply says `It's good to have u back though.` It is a tiny line with useful weight: the return is noticed without making Trebach perform an explanation for the absence.",
      href: "/characters/gilli",
    },
    {
      name: "Ham",
      note:
        "Ham reads Trebach as `tee bark` in June 2021. Trebach says they had never even thought of it; when Cely asks whether they dislike `tee bark`, Trebach answers `i love it.` One pocket, one accepted stupid little name joke, no need to manufacture a larger nickname mythology.",
    },
    {
      name: "Dayadream",
      note:
        "In December 2022 Dayadream greets Trebach with an immediate `yooo welcome back` before asking for the intake fields. The useful part is the human recognition: Trebach is an old enough face to be remembered warmly even though the exact earlier-return mechanics stay unknown.",
    },
    {
      name: "Ren",
      note:
        "When Trebach stops the 2022 intake to ask `What is IGN?`, Ren answers the exact question—`In game name`—and Trebach immediately repairs the form with `Ohh - Trebach - Underlords - 28`. It is a tiny, frictionless help exchange: ask, translate, done.",
    },
  ],
  quotes: [
    "give me a few mins and i gotchu",
    "listening to music, talking to the sexy people in here",
    "dont focus on me im not good with attention",
    "everyone is so amazing and so cute",
    "i dont want to add to anyones plates is what i meannn",
    "What is IGN?",
    "Ohh - Trebach - Underlords - 28",
  ],
  claims: [
    "Trebach's helpfulness is low-ceremony. When Mugen says the old setup no longer works, Trebach offers to add it to Tupper, accepts the `oh fuck im old help` joke without condescension, and says they will handle it in a few minutes.",
    "The same person who can tell the room they are `talking to the sexy people in here` folds quickly under direct attention. In the December 2020 birthday-attention pocket, Trebach goes `waaa` and says `dont focus on me im not good with attention`, then later turns the warmth outward with `everyone is so amazing and so cute.`",
    "Trebach notices other people's small social landmarks too: the Daycare footprint includes direct late-birthday and birthday wishes rather than only reacting when attention lands on Trebach.",
    "A March 2021 Sims check-in gives the cleanest Petty Crimes material: Trebach had finished a house and its decorating, was working on an art room and building skills, and also reported a strip club that had gifted them 98k. The useful ordinary-life read is creative Sims building/decorating plus delighted participation in the game's absurd economy.",
    "The June 2021 removal conversation shows a recurring self-effacing edge. Trebach says they were never asked whether they wanted to leave, but immediately minimizes the problem because everyone seems to have a lot on their plates. The concern for other people's burdens is genuine enough that Mugen has to push back and say Trebach's own problem still matters.",
    "A December 2022 Lobby return adds a small but excellent contradiction: Dayadream recognizes Trebach with `welcome back`, while Trebach openly asks what `IGN` means. Ren translates the acronym, Trebach says `Ohh`, and immediately reposts the requested fields. Being remembered by the room does not require knowing every piece of game/server shorthand; Trebach is comfortable exposing a tiny knowledge gap and moving straight to the practical fix.",
  ],
  antiFanon: [
    "SkeletonChair and Slice are Trebach aliases resolved inside the stable-account Daycare slice; do not use similar names outside that bridge to merge unrelated people.",
    "`talking to the sexy people in here`, casual `love u`/`mwah` language, and other playful affection support social ease and friendship texture, not a literal romance or sexual relationship claim.",
    "`It's good to have u back though` establishes that Gilli noticed Trebach's return; it does not establish how long Trebach had been gone or why.",
    "The Sims art room, skills, strip club, and 98k belong to the game. Do not translate them into real-world work, money, or biography.",
    "The June 2021 removal exchange is lived social friction, not enough by itself to assign formal governance blame, disciplinary procedure, or an officer decision chain.",
    "The December 2022 `welcome back` establishes human recognition, not exact leave/rejoin mechanics or dates. MEE6's generic welcome is automation, not a first-arrival receipt.",
    "Trebach asking what `IGN` means is one public vocabulary gap, not evidence that Trebach was generally inexperienced, not a gamer, or unfamiliar with UL. The joke is old face / missing glossary entry, not incompetence.",
    "The assigned Daycare slice still has no authored Trebach body after 2021-06-18; the 2022 material comes from stable-ID Lobby chronology. Do not reconstruct the unseen 2023 Daycare body from it.",
    "Cely and Ham stay as Daycare display-name relationships here without WIKI hrefs; this pass does not infer an account-identity bridge from similar names or nearby public owners.",
  ],
};

if (trebachIndex >= 0) {
  const current = allCharacters[trebachIndex] as ExtendedCharacter;
  allCharacters[trebachIndex] = {
    ...current,
    ...trebachCharacter,
    aliases: unique([...(current.aliases ?? []), ...(trebachCharacter.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(trebachCharacter.tags ?? [])]),
    relationships: [...(current.relationships ?? []), ...(trebachCharacter.relationships ?? [])],
    quotes: unique([...(current.quotes ?? []), ...(trebachCharacter.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(trebachCharacter.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(trebachCharacter.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(trebachCharacter);
}

characterById.set(trebachId, allCharacters.find((character) => character.id === trebachId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(trebachId)) {
  archiveCastGroup.characterIds.push(trebachId);
}
