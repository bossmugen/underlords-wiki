import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const gilliIndex = allCharacters.findIndex(
  (character) => character.id === "gilli" || character.name === "Gilli",
);
if (gilliIndex < 0) {
  throw new Error("Run 913 expected the canonical Gilli owner; refusing to create a duplicate.");
}

const gilli = allCharacters[gilliIndex] as ExtendedCharacter;
const staleOperatorAntiFanon =
  "The reason the stream account carried `Gilli#8635` is unresolved. Do not infer ownership, operator identity, credentials, a transfer/handoff, or who renamed it.";

allCharacters[gilliIndex] = {
  ...gilli,
  tags: unique([
    ...(gilli.tags ?? []),
    "Stream-account operator scene",
    "VC audio chaos",
  ]),
  quotes: unique([
    ...(gilli.quotes ?? []),
    "I bought the full version and I was paying around with it @Eos",
  ]),
  claims: unique([
    ...(gilli.claims ?? []),
    "A May 18, 2021 VC scene finally gives the separate stream account a time-bounded human operator. Eos unmutes and asks `why u have that on gilli`; Anayss reacts to `That voice thooooo`; stable account `615878920583249920` answers in first person that it bought the full version and was playing with it. In this specific scene, Gilli is the person actively speaking/operating through the account even though the account remains structurally distinct from human Gilli's stable Discord account.",
    "The room's response makes the audio experiment physical without naming software the archive cannot identify: Anthos immediately deafens and Sway says his headphones had to adjust. Gilli's technical/creative tinkering here lands as something other people can literally hear before anybody can reliably name the tool.",
  ]),
  antiFanon: unique([
    ...(gilli.antiFanon ?? []).filter((item) => item !== staleOperatorAntiFanon),
    "The May 2021 VC scene supports Gilli as the active speaker/operator behind stable account `615878920583249920` in that moment. It does not turn `615...` into human Gilli's identity, prove sole or permanent ownership/access, establish continuous custody from 2020 onward, identify credentials, or prove who later operated `ulstreamer`.",
    "The audible effect/software remains unidentified. Do not promote guesses such as Voicemod into canon without direct evidence.",
  ]),
} as ExtendedCharacter;

characterById.set(allCharacters[gilliIndex].id, allCharacters[gilliIndex]);
