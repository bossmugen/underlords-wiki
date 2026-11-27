import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Stable account 454708201615523871 is already resolved project-wide as
// canonical Woosung / WOO (see the existing Run 777 identity guard). This
// suffix deepens that owner; it does not create a second WOO.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) {
  throw new Error("Run 1008 expected canonical Woosung / WOO; refusing to create a duplicate owner.");
}

const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
allCharacters[woosungIndex] = {
  ...woosung,
  tags: appendUnique(woosung.tags, [
    "Candid appreciator",
    "Tactile group affection",
    "Room-memory",
    "Petty Crimes",
  ]),
  quotes: appendUnique(woosung.quotes, [
    "Sometimes I look at people and I’ll just be amazed at how pretty or handsome they are",
    "Like there’s some pretty motherfuckers man",
    "Yeah back in the days taco Tuesday was a thing",
    "*wraps my gigantic arms around cher and noether*",
  ]),
  claims: appendUnique(woosung.claims, [
    "A February 2021 Off-Topic pocket gives WOO a bluntly appreciative register: she says she sometimes looks at people and is amazed by how pretty or handsome they are, then compresses the sentiment to `there’s some pretty motherfuckers man`. It fits the larger pattern of dry economy without making her emotionally withholding.",
    "In July 2021 WOO remembers `back in the days taco Tuesday was a thing` while talking about how the server had changed. The useful read is room-memory and attention to continuity, not a precise membership census or an origin claim for Taco Tuesday.",
    "A May 2022 Members pocket makes WOO's social physicality explicit in joke-stage-direction form: rubbing Gilli's back, calling for 2am, and wrapping `gigantic arms` around Cher and Noether. The cumulative pattern is theatrical group affection rather than a romance or sex claim.",
  ]),
  antiFanon: appendUnique(woosung.antiFanon, [
    "Stable account 454708201615523871 is already resolved project-wide as Woosung / WOO; do not split it into a new WOO owner or merge it with Woohyuk.",
    "WOO's May 2022 touch-stage-directions are social/joke language. They do not establish romance, sex, exclusivity, or literal-family relationships with Gilli, 2am, Cher, or Noether.",
    "WOO's July 2021 comments about purging and old server habits are participant memory. Do not turn them into exact membership totals, formal purge chronology, or an origin certificate for Taco Tuesday.",
  ]),
} as ExtendedCharacter;
characterById.set("woosung", allCharacters[woosungIndex]);

// Stable account 754128584498610178 is Hic / HicUUOOOOGH (`etharzii`).
// Keep this person separate from Marian / Panda (stable account
// 356954091198480404). The newer Lobby receipts deepen Hic's existing owner;
// similar animal-coded nickname language is not an identity bridge.
const hicIndex = allCharacters.findIndex(
  (character) => character.id === "hicuuoooogh" || character.name === "HicUUOOOOGH",
);
if (hicIndex < 0) {
  throw new Error("Run 1008/1013 expected canonical HicUUOOOOGH owner; refusing to create a duplicate character.");
}

const hic = allCharacters[hicIndex] as ExtendedCharacter;
const hicRelationships = [...(hic.relationships ?? [])];
upsertRelationship(hicRelationships, {
  name: "Ren",
  note:
    "Hic's retreat language never quite survives contact with other people. In March 2021 they announce `back into the basement I go`, then immediately ask how everyone is and what Mercy is thinking. By September the same instinct is aimed directly at Ren: `are you okay now btw`, relief when she says yes, `why did you leave smh`, and—when asked what happens in UnderLords—`spending time with Ren lmao`. It reads as easy companionship and active noticing, not exclusivity or a reconstructed leave/rejoin timeline.",
  href: "/characters/ren",
});
upsertRelationship(hicRelationships, {
  name: "Mugen",
  note:
    "Mugen greets Hic as `gummy bear`, then eight days later opens with `You know the drill`. When Hic says they lost the copied intake material, Mugen does not make them reconstruct it: `Issok i found it, welcome back gummieeees`, followed by a Reply pointing straight back to Hic's older message. The familiarity is practical—remember the person, retrieve the old context, keep them moving.",
  href: "/characters/mugen",
});

allCharacters[hicIndex] = {
  ...hic,
  tags: appendUnique(hic.tags, [
    "Retreat-and-check-in contradiction",
    "Notices departures",
    "Easy companionship",
    "Remembered return",
    "Gummy bear",
  ]),
  relationships: hicRelationships,
  quotes: appendUnique(hic.quotes, [
    "back into the basement I go",
    "how is everyone?",
    "whatchu thinking about mercy",
    "are you okay now btw",
    "why did you leave smh",
    "spending time with Ren lmao",
    "Helloooo",
    "Waaaaiitt i had to copy paste them, i lost it:EmoJi_NoSleep:",
  ]),
  claims: appendUnique(hic.claims, [
    "A March 2021 sequence makes Hic's social contradiction unusually clean: `back into the basement I go` is followed almost immediately by checking how everyone is, asking Mercy what she is thinking about, and asking why she does not like it there. Retreat is part of the persona; curiosity about people keeps puncturing it.",
    "In September 2021 Hic asks whether Ren is okay, answers `that’s good` when she says yes, later asks why she left, and jokes that what happens in UnderLords is `spending time with Ren lmao`. Together the beats support attentive, comfortable companionship without creating a formal relationship label.",
    "An earlier March pocket already has Hic greeting Sin and asking how they are. The repetition strengthens a person-level pattern: even when Hic presents themself as someone disappearing into the basement, they routinely reopen the door by checking on somebody.",
    "Hic's 2022 Lobby return gives the belonging arc an outside witness: Mugen reuses `gummy bear`, assumes Hic knows the routine, and when Hic loses the copied intake material she retrieves Hic's older message and mechanically points back to it. The person is remembered even when the paperwork is not.",
  ]),
  antiFanon: appendUnique(hic.antiFanon, [
    "`back into the basement I go` is self-deprecating retreat language, not evidence of literal confinement, a disappearance period, or a mental-health diagnosis.",
    "Hic asking Ren why she left does not establish why Ren left, how long she was gone, or exact server leave/rejoin chronology.",
    "`spending time with Ren lmao` supports easy companionship in context; it does not establish romance, exclusivity, or a closeness ranking.",
    "The CVS-context `yeah` in this source is not employment evidence and must not be used to infer Hic's workplace.",
    "Repeated MEE6 Lobby welcomes do not establish exact join/leave chronology. `welcome back` is social framing, not an absence-length record.",
    "`gummy bear` is Mugen's observed nickname language for Hic on two Lobby dates; do not turn it into a formal title, family relation, or a bridge to Marian / Panda.",
  ]),
} as ExtendedCharacter;
characterById.set("hicuuoooogh", allCharacters[hicIndex]);

// Marian = Panda is user-confirmed canon and independently stable-account backed
// at 356954091198480404 / mariankage. This is NOT the Hic account above.
const pandaIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaIndex < 0) {
  throw new Error("Run 1013 expected canonical Marian / Panda owner; refusing to create a duplicate character.");
}

const panda = allCharacters[pandaIndex] as ExtendedCharacter;
const pandaRelationships = [...(panda.relationships ?? [])];
upsertRelationship(pandaRelationships, {
  name: "Ren",
  note:
    "Marian first protests the whole grounding premise—`WHY AM I GOUNDED???? I'M OLDER THEN YOU`—then less than a day later tags Ren with her own upgrade: `you should just name me the Eternally Grounded Panda`. Ren is not being installed as literal disciplinarian here; Marian is inviting somebody already inside the joke to help formalize her self-authored mascot lore.",
  href: "/characters/ren",
});
upsertRelationship(pandaRelationships, {
  name: "Ricochet",
  note:
    "Marian publicly credits Ricochet with getting her Cheesecake Factory, decorates the report with `:PandaPERFECTION:`, then immediately adds `(but no cheesecake)`. It is a concrete food-provision care beat delivered in exactly Marian's register: appreciation first, comic audit second.",
  href: "/characters/ricochet",
});
upsertRelationship(pandaRelationships, {
  name: "Eos",
  note:
    "Eos and Marian have a request-and-review rhythm: `You asked for it` can bring Marian back with `FUCK`; `@Marian Kage look now` gets an immediate `:PandaPERFECTION:` verdict. The unseen images stay unseen. What survives is the ease of asking, calling the other person back, and expecting a reaction.",
  href: "/characters/eos",
});

allCharacters[pandaIndex] = {
  ...panda,
  aliases: appendUnique(panda.aliases, ["Marian Kage", "LeMarionette"]),
  logline:
    "Historical Staff member who turns being managed into material. Marian can loudly object to the grounding bit, then come back less than a day later proposing `Eternally Grounded Panda` herself; months later she has carried the mascot into another game and is `livin the panda dream`. Protest and self-mythology are both part of the act.",
  tags: appendUnique(panda.tags, [
    "Whiskey",
    "Wall",
    "Self-authored mascot lore",
    "Protest-and-appropriate",
    "Panda dream",
    "Petty Crimes",
  ]),
  relationships: pandaRelationships,
  quotes: appendUnique(panda.quotes, [
    "WHAT. WHY AM I GOUNDED???? I'M OLDER THEN YOU :HissSpinMadPan: :HissSpinMadPan: :HissSpinMadPan:",
    "@RΣN you should just name me the Eternally Grounded Panda. ate a box of mac & cheese for lunch and i am soooo fucked up right now :CrackPanda_Stupid:",
    "@Ricochet got me my Cheesecake Factory :PandaPERFECTION: (but no cheesecake)",
    "livin the panda dream",
  ]),
  claims: appendUnique(panda.claims, [
    "Marian's Panda persona is not merely something other people stick on her. In May 2021 she protests being grounded, then less than a day later proposes `Eternally Grounded Panda` herself. The useful contradiction is that she can object to the premise while making the character more durable than anybody else could.",
    "By October 2021 the mascot has escaped Whiskey entirely: Marian reports that her Wizard101 character now has panda ears, panda clothes and a panda mount, ending with `livin the panda dream`. The self-presentation travels across games rather than staying one-room teasing.",
    "Ordinary-life details land inside the same comic register: mac-and-cheese regret shares a sentence with `Eternally Grounded Panda`, while Ricochet getting Cheesecake Factory receives sincere public credit plus the immediate parenthetical complaint that there was no cheesecake.",
  ]),
  antiFanon: appendUnique(panda.antiFanon, [
    "Marian = Panda is user-confirmed canon and stable-account backed. Do not merge Marian / Panda with Hic / HicUUOOOOGH, whose stable account is different.",
    "`Eternally Grounded Panda` is Marian's joke self-mythology, not a formal role, governance title, literal discipline arrangement, or appointment chronology.",
    "The exact grounding actor and precipitating event remain unresolved in this lane; do not manufacture them from the title joke.",
    "Sou's later `panda caretaker` wording for Eos is joke language, not literal medical/family/caretaking status.",
    "The Eos/Marian attachment exchanges are relationship texture only. Uninspected media does not establish who made, captured, or appears in the images.",
  ]),
} as ExtendedCharacter;
characterById.set("panda", allCharacters[pandaIndex]);
