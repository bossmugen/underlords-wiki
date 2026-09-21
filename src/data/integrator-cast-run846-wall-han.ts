import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const hanIndex = allCharacters.findIndex((character) => character.id === "han");

if (hanIndex < 0) {
  throw new Error("Run 846 expected the canonical Han/Nai owner; refusing to create a duplicate.");
}

const han = allCharacters[hanIndex] as ExtendedCharacter;
const relationships = [...(han.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Mugen",
  note:
    "Han can ask `Is it fame or shame lol` inside a Wall pocket and Mugen can answer the exact question with `both uwu`. It is easy shared framing: neither needs to stop the joke to negotiate what category the embarrassment belongs to. Keep it as comfortable collaborative banter, not a closeness ranking or role claim.",
  href: "/characters/mugen",
});

upsertRelationship(relationships, {
  name: "Sou",
  note:
    "Sou can drop the entire premise as `protectbutt`; Han mechanically returns to that exact line about an hour later with `#PROTECTBUTT2021`. Han does not just recognize the bit — he upgrades it into a campaign slogan. Keep this as bounded callback-amplification / shared-bit fluency, not a relationship rank.",
});

upsertRelationship(relationships, {
  name: "ShiyaX",
  note:
    "On Oct. 19 Han posts a Wall receipt while directly summoning Cookie, ShiyaX, and Mugen. ShiyaX answers the local absurdity with `im ron weasly`; Han comes back with `Yes`, `LMAO`, and finally `DON'T COMPLAIN`. It is the same Wall reciprocity from the other side: Han can joke about being overexposed and still happily file somebody else when the opportunity arrives. Keep the lane as receipt-summons / absurdity-uptake familiarity, not a closeness ranking.",
  href: "/characters/shiyax",
});

allCharacters[hanIndex] = {
  ...han,
  aliases: unique([...(han.aliases ?? []), "Nai", "nai6965", "."]),
  logline:
    "UL Media Director and filmmaker who is perfectly willing to turn Wall exposure into publicity — `Im becoming famous ✨`, workday survival as a Fame moment, shame and fame collapsed into the same category — right up until he notices his name is appearing often enough that the room may need to become `Han's wall of shame fame`. Self-branding and self-consciousness get to coexist.",
  tags: unique([
    ...(han.tags ?? []),
    "Media Director",
    "Filmmaker",
    "Wall",
    "Fame",
    "Self-reframing",
    "Meta-commentary",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(han.quotes ?? []),
    "Im becoming famous ✨",
    "Is it fame or shame lol",
    "I survived another day at work",
    "It also stays here",
    "Im lazy to crop",
    "but im concerned about my name popping up in this channel pretty often",
    "Of course, its a shame fame wall",
    "Soon u guys will need to rename this channel to Han's wall of shame fame",
    "DON'T COMPLAIN",
    "#PROTECTBUTT2021",
    "Can anyone explain salt meme?",
  ]),
  claims: unique([
    ...(han.claims ?? []),
    "Across August–October 2021 Han repeatedly reframes Wall exposure as fame or a mixed `shame fame` category, while also directly saying he is concerned about how often his name is appearing there; the person-shaped contradiction is self-branding plus recurrence-awareness, not simple shamelessness or simple embarrassment.",
    "On 2021-08-24 Han asks `Is it fame or shame lol`; Mugen true-replies `both uwu`, a bounded shared-framing beat that does not establish hierarchy or exceptional closeness.",
    "On 2021-09-22 Han asks when the Wall last had a Fame moment, then offers `I survived another day at work` as one. In the same Fame/Shame discussion he posts an attachment with `It also stays here` / `Im lazy to crop`. He can care quite a lot about what the Wall category means while openly refusing unnecessary clerical polish on an informal filing.",
    "On 2021-10-12 Han tells his mom that he had apparently been walking on a broken toe for a week, then answers her `Are you dumb?` by reminding her she once walked on a broken leg for a month before realizing it. The useful texture is ordinary-life family humor about mutually terrible injury detection, not a medical or global recklessness claim.",
    "On 2021-10-13 Han true-replies to Sou's `protectbutt` with `#PROTECTBUTT2021` roughly an hour later. The delay makes the callback funnier rather than weaker: Han remembers the bit and returns with the sloganized version.",
    "By 2021-10-19 Han jokes that the room will soon need to become `Han's wall of shame fame`, then follows it with a walk-away emote; this extends the same self-aware Wall reputation rather than creating a separate episode.",
    "Later on 2021-10-19 Han himself posts a Wall attachment while directly tagging Cookie, ShiyaX, and Mugen. ShiyaX answers with `im ron weasly`; Han's tight local follow-up runs `Yes` → `LMAO` → `DON'T COMPLAIN`. That completes the useful contradiction: Han can narrate himself as the Wall's overexposed recurring defendant while actively feeding the same machine and summoning other people into it.",
    "Petty Crimes: litigating Fame versus Shame, declaring ordinary workday survival a Fame moment, admitting `Im lazy to crop`, predicting the Wall will eventually need his name in the title, walking on an apparently broken toe for a week before noticing, turning `protectbutt` into `#PROTECTBUTT2021`, telling a summoned Wall defendant `DON'T COMPLAIN`, and needing somebody to explain the salt meme.",
  ]),
  antiFanon: unique([
    ...(han.antiFanon ?? []),
    "Han/Nai/nai6965/`.` remain one canonical person and use he/him in current public canon. Source-local naming or miner prose does not create a second identity or override that lock.",
    "Han was never an Underlords Officer; current/export role arrays do not establish appointment chronology or explain these Wall jokes.",
    "Mugen's `both uwu` reply supports collaborative joke-framing only; it does not establish romance, family, rank, or a friendship hierarchy.",
    "`Im lazy to crop` belongs to one informal Wall filing and does not imply that Han is careless in his filmmaking, Media Director work, or every other edit.",
    "Han's broken-toe / mom's broken-leg anecdote is ordinary family humor from Han's own telling. Do not turn it into a diagnosis, a universal pain-tolerance claim, or a broad statement that either person is medically reckless.",
    "Sou's `protectbutt` → Han's `#PROTECTBUTT2021` supports one mechanically linked shared-bit callback, not exceptional closeness, romance, family, rank, or a formal campaign.",
    "Han's Oct. 19 filing establishes POSTED BY Han and local receipt-summons behavior. The uninspected pixels do not establish MADE BY, CAPTURED BY, visual subjects, or FEATURING claims.",
    "The adjacent Wall screenshots remain POSTED BY their actual filers unless maker, capturer, or subjects are independently established.",
  ]),
} as ExtendedCharacter;

characterById.set("han", allCharacters[hanIndex]);