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

const noetherIndex = allCharacters.findIndex((character) => character.id === "noether");

if (noetherIndex < 0) {
  throw new Error("Run 744 expected the canonical Noether Game Officer owner; refusing to create a duplicate.");
}

const noether = allCharacters[noetherIndex] as ExtendedCharacter;
const relationships = [...(noether.relationships ?? [])];

upsertRelationship(relationships, {
  name: "HamitteY",
  note:
    "Their Wall grammar keeps returning to sugar and dessert. Noether can call Hami `unsugar hamihami`, object that a filing has lost the context, then spend the next half hour prosecuting Hami for allegedly hoarding desserts. Hami keeps answering the premise. The joke works because neither of them needs the other one to pretend this is serious before continuing it, and Noether eventually turns the fake dessert embargo into an actual strawberry-ice-cream solution.",
});

upsertRelationship(relationships, {
  name: "Anayss",
  note:
    "Anayss repeatedly pulls Noether and Hami into Wall filings and eventually thanks them for `so much material`. She also marks one of Noether's later appearances with `wb ❤️`. By then Noether is not merely getting caught in the room; her return is noticeable, and Anayss can summon the running problem by name and expect fresh content to happen.",
  href: "/characters/anayss",
});

upsertRelationship(relationships, {
  name: "Eos",
  note:
    "Eos volunteers `noe is very innocent`; Noether later true-replies to that exact line with `Im innocent , hamcito  dont believe in me`, and Eos backs the joke again. It is witness-for-the-defense energy inside a case Noether keeps helping generate.",
});

allCharacters[noetherIndex] = {
  ...noether,
  aliases: unique([...(noether.aliases ?? []), "noether88"]),
  logline:
    "Game Officer with a wonderfully technical relationship to nonsense: Noether wants the context preserved, the dessert categories defined, and the charge narrowed correctly — then immediately keeps the bit alive long enough to become part of the problem, up to making strawberry ice cream because Hami allegedly would not share dessert. The room notices her re-entries too: separate warm `welcome back` greetings make absence and return part of her social contour without turning the missing intervals into a fake chronology.",
  tags: unique([
    ...(noether.tags ?? []),
    "Wall",
    "Context lawyer",
    "Dessert prosecutor",
    "Food",
    "Ordinary life",
    "Return texture",
    "Dessert Embargo Response Plan",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(noether.quotes ?? []),
    "Unsugar hamihami:Cute_Blush:",
    "Someone want eat hami, i only said that , context pls",
    "Also hami doesnt share the desserts,",
    "you want all the desserts for yourself",
    "Listen man  share desserte:Yandere:",
    "I made strawberry ice cream, since you didn't share desserts:Cute_Blush:",
    "Yes, I do not judge preference in dessert, but hami is not a good option",
    "Im innocent , hamcito  dont believe in me",
  ]),
  claims: unique([
    ...(noether.claims ?? []),
    "Across recurring Wall pockets from 2021-11 through 2022-07, Noether and HamitteY repeatedly return to `unsugar` / dessert teasing, with Noether alternating between context-sensitive self-defense and active prosecution of Hami's alleged dessert hoarding.",
    "On 2022-02-03 Noether writes `Someone want eat hami, i only said that , context pls`, then continues the same scene by accusing Hami of not sharing desserts and later writes `I made strawberry ice cream, since you didn't share desserts:Cute_Blush:`. The useful contradiction is mock grievance / domestic softness: the complaint is theatrical, the follow-through is a mundane homemade-food act.",
    "By 2022-07-07 Eos calls Noether `very innocent`, Anayss thanks Noether and HamitteY for `so much material`, and Noether true-replies to Eos's defense with `Im innocent , hamcito  dont believe in me`; the innocence performance and repeat bit-feeding coexist in the same reputation pocket.",
    "Two separate surviving greetings mark Noether's re-entry warmly: Anayss writes `@Noether wb ❤️` on 2021-12-23 and Mugen writes `Welcome back noeee` on 2022-01-13. Together they support socially noticeable return texture, not an exact absence duration, quit event, or official return chronology.",
  ]),
  antiFanon: unique([
    ...(noether.antiFanon ?? []),
    "Noether remains the existing canonical Game Officer owner; this Wall material adds lived personality and relationships, not a new role or appointment chronology.",
    "`sugar daddy`, `eat hami`, dessert prosecution, and innocence language are room jokes in these receipts, not literal romance, sex, money, violence, cannibalism, or legal/governance roles.",
    "The strawberry-ice-cream fact comes from Noether's authored sentence. The associated image is POSTED BY Noether only; its pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING remain unresolved.",
    "The two `welcome back` greetings show that Noether's re-entry was noticed in those moments. They do not establish why she was away, how long she was gone, that she had quit, or a formal return date.",
    "Pooled Deleted User remains unresolved and is not merged into a named person from contextual similarity.",
  ]),
} as ExtendedCharacter;

characterById.set("noether", allCharacters[noetherIndex]);
