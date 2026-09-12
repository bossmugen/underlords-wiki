import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const queenIndex = allCharacters.findIndex((character) => character.id === "queen-shimoko");
if (queenIndex < 0) {
  throw new Error("Run 940 expected canonical Queen Shimoko; refusing to create a duplicate owner.");
}

const queen = allCharacters[queenIndex] as ExtendedCharacter;
const queenRelationships = [...(queen.relationships ?? [])];
upsertRelationship(queenRelationships, {
  name: "Mugen",
  note:
    "Queen describes joining despite not really playing Underlords because Mugs kept bugging her about it. The useful part is the familiar insistence: the social pull mattered enough to beat her lack of interest in the game itself. It supports comfortable persistence and affiliation, not a romance, family label, exclusivity claim, or precise recruitment chronology.",
  href: "/characters/mugen",
});

allCharacters[queenIndex] = {
  ...queen,
  aliases: appendUnique(queen.aliases, ["Queen Shimoko", "Shimoko", "queen_shimoko"]),
  role: "Archive-era UL member",
  era: "2020–2023+",
  logline:
    "Queen Shimoko is easygoing enough to join a game community while openly admitting the game itself was not the draw. Her surviving voice is calm, cooperative, lightly self-deprecating and very ordinary in the best way: spaghetti, cozy games, a serious AoE4 preference, an Elden Ring farming loop, and the occasional `head empty` day when the brain has simply clocked out.",
  tags: appendUnique(queen.tags, [
    "Archive cast",
    "Easygoing",
    "Social-first membership",
    "Age of Empires IV",
    "Elden Ring",
    "Minecraft",
    "Animal Crossing",
    "Stardew Valley",
    "Spaghetti",
    "Petty Crimes",
  ]),
  relationships: queenRelationships,
  quotes: appendUnique(queen.quotes, [
    "I LOVE AOE4",
    "Maybe Elden ring is starting to wear off lol",
    "🧠 head empty; refusing to work right now",
  ]),
  claims: appendUnique(queen.claims, [
    "Across her own profile and later public chat, Queen's game tastes are unusually concrete: Minecraft, Animal Crossing, Stardew Valley and especially Age of Empires IV all appear in her first-person material, while a 2023 Wall pocket catches her temporarily cooling on Elden Ring before expecting to return to rune farming and loot.",
    "Queen's ordinary-life texture stays small and recognizable rather than role-shaped: spaghetti is a frequent go-to food, and one June 2023 brain-off moment is compressed into `🧠 head empty; refusing to work right now`.",
    "In a February 2023 Daycare exchange, Queen says she only joined because Mugs kept bugging her even though she did not really play Underlords. That makes social affiliation part of the character story without converting Mugen's persistence into a formal recruitment mechanism or a closeness ranking.",
  ]),
  antiFanon: appendUnique(queen.antiFanon, [
    "`Keeper of Knowledge` appears in a 2022 welcome/profile payload as playful nickname-style language. It is not a formal UL governance title, appointment, rank, or proof of authority.",
    "Queen Shimoko has no established structural connection to the August 2022 `new guild icon` bit. The attachment remains POSTED BY Zoshaa; Ren supplies the guild-icon joke. Do not bridge Queen into that media lane by proximity or theme.",
    "Queen's February 2023 `Mugs kept bugging me` join story supports familiar social persistence, not romance, literal family, exclusivity, or an exact invitation/rejoin chronology.",
    "Her Elden Ring comments describe a temporary shift in attention, not a permanent quit date or exhaustive gaming chronology.",
  ]),
} as ExtendedCharacter;
characterById.set("queen-shimoko", allCharacters[queenIndex]);

const jasIndex = allCharacters.findIndex((character) => character.id === "jas");
if (jasIndex < 0) {
  throw new Error("Run 940 expected canonical Jas / king_jas; refusing to create a duplicate owner.");
}

const jas = allCharacters[jasIndex] as ExtendedCharacter;
const jasRelationships = [...(jas.relationships ?? [])];
upsertRelationship(jasRelationships, {
  name: "Mugen",
  note:
    "Jas and Mugen have enough repeated room history that teasing can run with almost no setup: Jas calls her `boss`, the pair get folded into recurring no-solo jokes, and their older mock-courtly `Messire` / `Milady` register can carry something as mundane as a poutine request. The useful constant is easy continuation and reciprocal roasting, not a command-rank inference or a romance read.",
  href: "/characters/mugen",
});
upsertRelationship(jasRelationships, {
  name: "Ren",
  note:
    "Ren can tell Jas to wake up at 4 a.m. and get `Never` / `Back to bed`, then later challenge the recurring therapist joke with `Remind me why you're my therapist again??` Jas answers `Because you make bad decisions` and follows with `someone has to help`. Their lane is familiar, dry and mutually playable; affectionate wording around it stays friendly/teasing unless stronger evidence says otherwise.",
  href: "/characters/ren",
});

allCharacters[jasIndex] = {
  ...jas,
  logline:
    "Jas pairs actual institutional history with a deeply unceremonious everyday voice. He can be precise about everybody else's receipts, fragment one thought across several messages, roast himself as mediocre at a game he still enjoyed, argue Blink-182/BCR distinctions, complain about carpet and rice, and answer Ren's fake-therapist summons like this nonsense has office hours.",
  tags: appendUnique(jas.tags, [
    "Dry humor",
    "Self-deprecation",
    "ARK",
    "Blink-182",
    "Box Car Racer",
    "Dragon Ball",
    "Everyday gripes",
    "Petty Crimes",
  ]),
  relationships: jasRelationships,
  quotes: appendUnique(jas.quotes, [
    "I was still terrible, but it was fun",
    "Because you make bad decisions",
    "someone has to help",
    "I really dragged the whole average down that year",
    "Can I just say how much I hate having carpet. Like wife. Why.",
  ]),
  claims: appendUnique(jas.claims, [
    "Jas's self-deprecation is recurrent rather than ornamental. He can remember being bad at something while still calling it fun, place himself around the middle of the pack in Underlords, and joke that he dragged an average down instead of polishing the result into a competence performance.",
    "His taste and ordinary-life scraps make the older Wall/fake-family material feel more like one person: ARK, Dragon Ball and Johto references, enough Blink-182 / Box Car Racer familiarity to correct a song attribution, Scrabble/dictionary play, hatred of carpet, impatience with how long proper white rice takes, hunger, workout/chiropractor soreness and one specifically bounded four-hour-sleep complaint.",
    "A bounded 2020 Wall slice shows Jas repeatedly in conversation with Mugen, Sighn, Nyght, Ren, Chiquita, Ghoulie, Gilli and Ghostt. Those counts support recurring room familiarity, not a closeness leaderboard.",
  ]),
  antiFanon: appendUnique(jas.antiFanon, [
    "2020 joke lines calling Jas `PR officer`, putting him `in charge of public relationships`, or pairing Mugen as `HR officer` with a `VP of therapy undergoing therapy` bit are joke roles. They do not create or date formal UL offices, ranks, or appointment chronology.",
    "Six February 2021 Message Search hits remain textually useful but do not have a safe stable-ID map from the pre-resolved inventory. Do not fold them into Jas's biography unless another canonical source independently resolves the identity.",
    "Four Jas-authored Wall rows contain attachments or embeds. Unless the media itself is independently inspected, attribution stays POSTED BY Jas rather than MADE BY, CAPTURED BY, or FEATURING Jas.",
    "No authored Jas rows in the inspected 2022/2023 Wall streams is a bounded source absence only. It does not establish a disappearance from UL, inactivity everywhere, or a departure date.",
    "Ren/Jas therapist language and affectionate phrasing are recurring social jokes and familiarity, not evidence of a professional therapy relationship, romance, family status, or exclusivity.",
  ]),
} as ExtendedCharacter;
characterById.set("jas", allCharacters[jasIndex]);
