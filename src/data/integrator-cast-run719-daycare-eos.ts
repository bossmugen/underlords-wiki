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
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: `${current.note} ${relationship.note}`,
      href: current.href ?? relationship.href,
    };
  } else {
    relationships.push(relationship);
  }
};

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  const relationships = [...(eos.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Ricochet",
    note:
      "Rich can throw Eos almost no setup at all—`Looks at @Eos :BOP1:`, `I think it’s time to punish a panda`, later `I think that’s a job for panda`—and she catches the cue every time with `No comment`, `yep.... @Marian Kage cmere`, or `o, yes`. Their useful rhythm is shared context at low bandwidth: he assumes she knows the bit; she does.",
    href: "/characters/ricochet",
  });

  upsertRelationship(relationships, {
    name: "Rummy",
    note:
      "When Rummy roasts Eos's spelling, Eos first admits `IT WORSE ON MAH PHONE` and then, twelve seconds later, fires back `but lets not talk about *your* spelling`. The immediate context makes Rummy the probable target of the counterpunch even though that second line is not a structured Reply.",
    href: "/characters/rummy",
  });

  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Mugen and Eos do not need much runway. In Daycare, Eos arrives with `HELLO DAYCARE`; Mugen answers `EOS HI` less than a minute later and Eos comes back `HIIIII MUGS`. Four days later in b-lounge, Mugen can jump straight to `HI EOS ARE WE SAFE` and Eos answers within seconds: `HI MUGEN !!! YES WE ARE, FOR NOW😭`. Add the older corpse joke and the pattern is easy recognition across rooms, not a relationship rank: Mugen knows who just walked in, and Eos is comfortable answering at full volume.",
    href: "/characters/mugen",
  });

  extendRelationship(relationships, {
    name: "Gilli",
    note:
      "Whiskey adds the plain-spoken version of that affection: on Gilli's 2021 birthday Eos cycles through `chigli/gilli/chilli` and then calls Gilli `one of the most amazing persons i've met`, wishing them an amazing birthday or simply a good day. The joke names do not dilute the praise; they are how Eos packages it.",
    href: "/characters/gilli",
  });

  extendRelationship(relationships, {
    name: "Marian",
    note:
      "Late June Whiskey keeps selecting Marian as Eos's direct partner for tiny repeatable bits—`w/hug @Marian Kage`, another tagged hug command the next day, then `Maybe a 5th time it’ll be different` before a quick `thee u go`. The exact command premise is incomplete, but the recurrence makes the comfortable retry-and-continue rhythm visible outside a single Wall receipt.",
    href: "/characters/marian",
  });

  allCharacters[eosIndex] = {
    ...eos,
    logline:
      "Low-word, high-consequence regular: Eos can literally keep the mic muted and still stay socially in the room, understand a whole plan from one look, howl when the Wall catches her, then turn around and become the person with another receipt ready. She does not flood every room; when she chooses a contribution or a piece of affection, it lands.",
    tags: appendUnique(eos.tags, [
      "Shared-context shorthand",
      "Counter-roast",
      "Self-prosecution",
      "Receipt-dealer contradiction",
      "Caught-in-4K continuity",
      "Loud arrival",
      "Cross-room recognition",
      "Muted mic active room",
      "Selective participation",
      "Direct affection",
      "Ordinary life",
      "Computer science",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(eos.quotes, [
      "No comment:SpidySip:",
      "o, yes:Boi_huahua:",
      "IT WORSE ON MAH PHONE",
      "but lets not talk about *your* spelling",
      "so tired that i am a **dead corpse**:Cozy_Cry:",
      ":Molang_Sleep: this ded corpse always around for the taking",
      "gonna just put myself here and head out-",
      "i said dont look:HissMadExplosionPan:",
      "Take zhenyan :sippp:",
      "@Marian Kage you’ve been… sort of spared",
      "Debating on sending more",
      "The moment you pinged me I knew I was gonna get caught in 4k lmaooo",
      "I have a habit in finding people caught in 4k huh?",
      "Got him again",
      "HELLO DAYCARE",
      "HIIIII MUGS",
      "GN BABIESSS",
      "HI MUGEN !!! YES WE ARE, FOR NOW😭",
      "im keeping my ass on mute:yoda:",
      "if i have \"big brain\" ideas ill just say em XD",
      "Computer science. I almost done:tableflip_lnd:",
      "i really should cut my hair too... its stupid long:dead:",
      "o chigli/gilli/chilli/to one of the most amazing persons i've met",
    ]),
    claims: appendUnique(eos.claims, [
      "Across 2021-09-07, 2021-12-09, and 2022-09-05, Rich/Ricochet repeatedly cues Eos with minimal setup and she immediately co-signs the bit, supporting a recurring low-bandwidth shared-context rhythm.",
      "On 2022-12-15 Rummy mocks Eos's spelling; Eos self-owns with `IT WORSE ON MAH PHONE` and twelve seconds later counters `but lets not talk about *your* spelling`.",
      "On 2021-05-02 Eos calls herself a `dead corpse`; after Mugen and Gabu explicitly reply into the corpse joke, Eos returns with `this ded corpse always around for the taking` instead of retreating from the bit.",
      "On 2021-06-07 Eos self-starts a Wall post with `gonna just put myself here and head out-`, reinforcing a recurring mock-surrender / active-authorship pattern rather than a passive-only Wall-target role.",
      "On 2021-06-17 Eos answers Marian's Wall post with `i said dont look`, then about four minutes later posts an image herself with `Take zhenyan` and tells Marian `you’ve been… sort of spared`; this is a particularly clean target-to-filer pivot.",
      "On 2021-07-07, after Baby Lyssa reacts to the current material with `bruh` / `what did i just read`, Eos says `Debating on sending more`; Gilli answers `@Eos donit`. By December, Rich can simply tell Eos it is time to `punish a panda` and Eos directly replies by summoning Marian.",
      "The `caught in 4k` language is longitudinal rather than a one-night joke: on 2021-03-31 Eos says a ping made her know she was about to get caught; on 2021-07-15 she calls finding other people caught in 4k a habit; and on 2022-12-05 she is still filing another catch with `Got him again`. The durable contradiction is target and catcher at once.",
      "On 2021-09-23 Eos enters Daycare with `HELLO DAYCARE`; Mugen answers `EOS HI` 53.168 seconds later, and Eos returns `HIIIII MUGS`. Eos signs off the next day with `GN BABIESSS`, supporting a low-volume-but-audible social style rather than quiet disappearance.",
      "On 2021-09-27 in b-lounge, Mugen asks `HI EOS ARE WE SAFE`; Eos answers 12.672 seconds later, `HI MUGEN !!! YES WE ARE, FOR NOW😭`. Together with the Daycare hello, this supports quick cross-room recognition and familiar ease between them without manufacturing a closeness rank.",
      "On 2021-03-01 Eos says `im keeping my ass on mute` inside a dense reaction-heavy pocket, and the next night says that if she has `big brain` ideas she will just say them. The useful person read is muted audio without social disappearance: selective contribution, not quietness as absence.",
      "On 2021-04-29 Eos says `Computer science. I almost done`; the same ordinary-life pocket has her calling school fights weird and contrasting a fun, friend-heavy first-grade memory with an eighth-grade year full of drama and fights.",
      "On 2021-06-14 Eos directly tags Gilli with a birthday message that calls them `one of the most amazing persons i've met`, wrapped in playful Gilli-name mutations and a wish for an amazing birthday or simply a good day.",
      "Across 2021-06-27 through 2021-06-29, Eos repeatedly chooses Marian as the direct tag/partner for tiny hug-command and retry bits, adding a cross-room recurrence to their already-established teasing relationship.",
      "Eos also supplies small ordinary-life texture in Whiskey with `i really should cut my hair too... its stupid long`; it is a Petty Crimes-sized self-description, not a health or identity inference.",
    ]),
    antiFanon: appendUnique(eos.antiFanon, [
      "Rich/Eos co-signing is comfortable shared-context comedy, not romance or a formal enforcer role.",
      "Rummy is the probable referent of `your` in the spelling counterpunch from immediate context, but the second Eos line is not a structured Reply and is not upgraded to mechanical certainty.",
      "Eos's corpse language is joke/exhaustion language, not literal death or harm; Mugen/Gabu joining the bit does not establish romance or violence.",
      "The `dead_corpse.png`, `Untitled.png`, Marian's 2021-06-17 image, and Eos's `Take zhenyan` image are only attributed at POSTED BY level here unless another source independently establishes MADE BY / CAPTURED BY / FEATURING.",
      "Eos's `divorced` language in the July receipt pocket is UL joke/social language, not evidence of a legal marriage, sexuality, or real-world relationship status.",
      "Being repeatedly recruitable into Wall teasing is social reputation, not a formal Wall role, office, or governance authority.",
      "The recurring `caught in 4k` pattern is social reputation and joke behavior, not a formal moderation, surveillance, or archival role; unseen exhibits remain uninspected.",
      "These support receipts are Wall chronology used to deepen Eos; they are not relabeled as direct Daycare dialogue.",
      "The Daycare and b-lounge greeting pockets support recognition and familiar ease between Eos and Mugen, not a ranked intimacy claim. A separate Myno-mapped `Eos <3` account remains a different stable account and is not merged into this Eos dossier.",
      "`im keeping my ass on mute` is a choice inside one recovered social pocket, not evidence that Eos is shy, anxious, socially absent, or generally unwilling to speak in voice chat.",
      "The 2021 computer-science line supports current study/work context and an approaching finish in Eos's own wording; it does not establish a school, exact credential, later career, or a permanent professional identity.",
      "Eos's direct birthday praise for Gilli supports strong affection and peer regard, not a ranked `best friend` claim by itself.",
      "The late-June Marian tags and chat commands support repeated playful selection of the same partner; typed hug commands are not literal physical contact, romance, or a closeness leaderboard.",
    ]),
  } as ExtendedCharacter;

  characterById.set("eos", allCharacters[eosIndex]);
}
