import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex < 0) {
  throw new Error("Run 1141 expected canonical Eos owner; refusing to manufacture a second Eos");
}

const eos = allCharacters[eosIndex] as ExtendedCharacter;

allCharacters[eosIndex] = {
  ...eos,
  tags: appendUnique(eos.tags, [
    "Soft room steering",
    "Invitation over reprimand",
  ]),
  quotes: appendUnique(eos.quotes, [
    "#🥃💬｜whiskey-room head heree",
    ":Raja_dino_heart: everyone talking there",
  ]),
  claims: appendUnique(eos.claims, [
    "On 2022-05-14, after general conversation spilled into the Wall, Eos redirected people with `#🥃💬｜whiskey-room head heree` and then `:Raja_dino_heart: everyone talking there`. Sye's explicit no-general-conversation reminder arrived about twenty-two minutes later. The useful character beat is Eos steering the room socially by invitation before the formal reminder, not holding or exercising a moderator title.",
    "The 2021-06-17 Marian/Eos receipt-war material in the latest Daycare handoff corroborates the already-public target-to-filer pattern: Eos protests being looked at, counter-posts within minutes, says Marian has been `sort of spared`, and declares `this is war`. It deepens the same receipt-shy / retaliatory contradiction rather than creating a separate incident owner.",
  ]),
  antiFanon: appendUnique(eos.antiFanon, [
    "Eos redirecting Wall chatter to Whiskey Room is lived social awareness, not evidence of a formal moderator appointment, authority tier, or role chronology.",
    "The 2022 redirect is an invitation-style room correction. Do not convert Sye's later explicit rule reminder into a claim that Eos was acting on Sye's behalf or under delegated authority.",
  ]),
} as ExtendedCharacter;

characterById.set("eos", allCharacters[eosIndex]);
