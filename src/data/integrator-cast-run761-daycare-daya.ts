import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 761 expected the canonical Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;

allCharacters[dayaIndex] = {
  ...daya,
  logline:
    "Pit Boss and Recruiter whose front-door competence is unusually ego-light: Daya can finish the job herself, but when somebody else has to do the next step she simply says so, fills the waiting time with something useful, and keeps the newcomer moving instead of making staff uncertainty their problem.",
  tags: unique([
    ...(daya.tags ?? []),
    "Lobby",
    "Onboarding",
    "Wayfinding",
    "Handoffs",
    "Lived role",
    "Competence without mystique",
  ]),
  quotes: unique([
    ...(daya.quotes ?? []),
    "gonna wait for one of the other officers to get your role assigned after you input your ign and age, but then youll be set",
    "welcome fang! give us a little minute to assign roles",
    "in the mean time, server map is #🎫｜ul-discord-tour , feel free to post an intro here #👠｜biodata , and vieew #📏｜club-rules  before proceding",
    "role assigned!",
    "yooo welcome back @Trebach (Gilli's Pizza Dough) !! state your ign club and age so we can assign u role :Milk_Love:",
  ]),
  claims: unique([
    ...(daya.claims ?? []),
    "In August 2022, Daya repeatedly turns role-assignment delays into visible handoffs instead of dead air. She tells one newcomer that `one of the other officers` will finish the assignment and tells FANG to give them a minute, then uses the wait to point toward the server map, biodata, and rules.",
    "The handoff is not a cover for helplessness. Three days after the FANG exchange, Daya herself closes another intake loop with `role assigned!`. Her useful contradiction is authority without omnipotence theater: she can finish some work and is perfectly comfortable saying when somebody else needs to finish the next piece.",
    "By December 2022 the same procedural habit can carry recognition too. Daya greets Trebach with `yooo welcome back` before asking for the information needed for role assignment. The machinery stays practical, but the person coming through the door is not reduced to a form submission.",
    "Together with Daya's 2023 troubleshooting scenes, the 2022 Lobby material makes the longer pattern clearer: orient, name the dependency, give the next usable step, and keep ownership of the newcomer experience even when the technical action belongs to somebody else.",
  ]),
  antiFanon: unique([
    ...(daya.antiFanon ?? []),
    "The August-December 2022 Lobby scenes show Daya doing intake work and sometimes completing role assignment; they do not establish appointment chronology, universal role-grant permissions, or rank over the unnamed `other officers` she references.",
    "Daya's `welcome back` to Trebach supports recognition and a warmer re-entry tone, not a closeness ranking or a separately established friendship claim.",
    "The quoted 2022 dialogue is Lobby support-source material. Daya's independent Daycare footprint is established elsewhere, but these exact lines are not relabelled as Daycare speech.",
  ]),
} as ExtendedCharacter;

characterById.set("daya", allCharacters[dayaIndex]);
