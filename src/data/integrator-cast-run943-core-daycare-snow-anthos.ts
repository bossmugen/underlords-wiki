import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
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

const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) {
  throw new Error("Run 943 expected canonical Snow owner; refusing to recreate Snow from JAG drafting material");
}

const snow = allCharacters[snowIndex] as ExtendedCharacter;
const snowRelationships = [...(snow.relationships ?? [])];

upsertRelationship(snowRelationships, {
  name: "Mugen",
  note:
    "Snow's August 2020 JAG draft is elaborate enough to look like it wandered in from a courtroom, but the text itself keeps rejecting military theater and micromanagement. Five days later Mugen posts a simplified `ULCC For Dummies Edition` working draft and explicitly opens it to officer edits. The useful relationship beat is collaborative house-making: a detailed boundary system gets translated back into something the room can actually use, without turning Snow into Mugen's formal #2 or inventing an assignment chain the conversation never states.",
  href: "/characters/mugen",
});

allCharacters[snowIndex] = {
  ...snow,
  description:
    "Snow's governance brain is more human than the quasi-legal formatting makes it look. He can draft twenty-four numbered `Yeeting charges`, talk about impartiality, retaliation, privacy, officer abuse and obstruction, and still begin by saying UL is not military and should not micromanage people. The same draft tells members that real life comes first, new players deserve kindness, people should see their friends and get some sunshine, and the person on the other side of the screen has a life. Then Snow punctures his own legal register with `Mugens peaceful tea time`, a Dragon Raja child-endangerment joke, and finally `Be a decent human being.` The bureaucracy is elaborate; the point underneath it is remarkably plain.",
  logline:
    "Boundary nerd with an escape hatch back to ordinary humanity: Snow can build a miniature legal code, insist it is not military micromanagement, then end the whole thing at `Be a decent human being.`",
  tags: appendUnique(snow.tags, [
    "JAG",
    "Lived governance",
    "Anti-micromanagement",
    "Boundary setting",
    "Human-first rules",
  ]),
  relationships: snowRelationships,
  quotes: appendUnique(snow.quotes, [
    "Be a decent human being.",
    "Mugens peaceful tea time",
    "Be kind to new players. We were all new once.",
  ]),
  claims: appendUnique(snow.claims, [
    "In the August 7-8, 2020 JAG draft, Snow explicitly says UL is `in no way a military organization` and is not interested in `micromanagement`; he frames the code as an objective/impartial gauge rather than a license for arbitrary enforcement.",
    "Snow's same Club Conduct / JAG drafting lane repeatedly returns the rules to ordinary-human priorities: real life first, communication around absences, kindness to new players, time with family and friends, some sunshine, personal-account security, officer impartiality, privacy/consent, anti-retaliation and anti-obstruction boundaries, and a final catch-all beginning `Be a decent human being.`",
    "Snow's formal register repeatedly undercuts itself with house humor, including `Mugens peaceful tea time` inside the mutiny/sedition wording and `NEVERMIND thank you Dragon Raja for letting us endanger our kids and giving them guns.` after a numbered child-endangerment heading. The cumulative character read is bureaucratically elaborate but openly anti-micromanagement.",
    "On August 13, 2020 Mugen posts a simplified `ULCC For Dummies Edition` / `Word Vomit - ULCC Edition` working draft that all officers can edit. This supports a later collaborative simplification stage of the code, not a Snow-as-#2 hierarchy claim.",
  ]),
  antiFanon: appendUnique(snow.antiFanon, [
    "Snow is Mugs-confirmed NOT to have been UL's formal second-in-command / formal #2. The JAG drafting material deepens his rules/security/governance behavior; it does not create an Underboss appointment or reporting hierarchy.",
    "JAG's legal and military-flavored wording is a governance/rhetorical framework. Snow's own opening explicitly rejects UL being a military organization and rejects micromanagement.",
    "The August 2020 surviving JAG text is a working draft. Earliest surviving wording is not guaranteed origin, and individual draft clauses must not automatically be treated as permanently adopted policy.",
    "`Mugens peaceful tea time` is joke-inflected house language inside the draft, not a formal office or constitutional doctrine. `family` language in the conduct text remains community language, not biological kinship.",
  ]),
} as ExtendedCharacter;
characterById.set("snow", allCharacters[snowIndex]);

const anthosIndex = allCharacters.findIndex((character) => character.id === "anthos");
if (anthosIndex < 0) {
  throw new Error("Run 943 expected canonical Anthos owner; stable account 695394317921026121 must not become a duplicate character");
}

const anthos = allCharacters[anthosIndex] as ExtendedCharacter;
const anthosRelationships = [...(anthos.relationships ?? [])];

upsertRelationship(anthosRelationships, {
  name: "Tae",
  note:
    "Tae can throw `Shame on you anthos` into a Wall sequence and Anthos soon answers the same scene with `i'm not smart enough to know how to spell it 😎`. The records are not wired as a technical Reply, so the linkage stays contextual; socially, the important part is that Anthos is comfortable making herself the joke instead of defending a competence image.",
  href: "/characters/tae",
});

allCharacters[anthosIndex] = {
  ...anthos,
  description:
    "Anthos keeps getting funnier the more useful she turns out to be. The soft-host/casual-fixer lane already had doors, games, setup, reminders and social glue; Photo Submissions catches the fiddly visual version. In January 2021 she lays down an `Example Photos` divider, supplies the example bundle, then separates out `Official Submissions for photos`; in August she is back posting the example scaffold again. Meanwhile the Wall version of Anthos can say `i'm not smart enough to know how to spell it 😎` and let the sunglasses turn self-deprecation into swagger. She can quietly organize the room and loudly refuse to present herself as the responsible adult. Both are real Anthos.",
  logline:
    "Soft host, casual fixer, resident gremlin, and suspiciously competent event scaffolder: Anthos can organize everybody else's lane and then put on sunglasses to claim she cannot spell.",
  tags: appendUnique(anthos.tags, [
    "Photo Submissions",
    "Event scaffolding",
    "Visual organization",
    "Self-deprecating swagger",
    "Petty Crimes",
  ]),
  relationships: anthosRelationships,
  quotes: appendUnique(anthos.quotes, [
    "i'm not smart enough to know how to spell it 😎",
  ]),
  claims: appendUnique(anthos.claims, [
    "On January 6, 2021 Anthos structures Photo Submissions with an `Example Photos` divider, a five-attachment example bundle, and an `Official Submissions for photos` divider; on August 1 she repeats the `Example Photos` scaffold. The recurrence supports lived visual/event organization rather than a one-off formatting accident.",
    "In a February 2, 2021 Wall sequence Tae says `Shame on you anthos`; shortly afterward Anthos says `i'm not smart enough to know how to spell it 😎`. The records are not a technical Reply pair, but the same-scene self-deprecation fits Anthos's unserious presentation beside visibly competent connective work.",
    "The January example bundle drew four heart reactions from Gabu, Suzi/Mob/BAPE, Rosario/Yazaki and Anayss. The useful public read is that the material landed as communal event scaffolding; reaction presence is not a closeness ranking.",
  ]),
  antiFanon: appendUnique(anthos.antiFanon, [
    "Anthos uses she/her by Mugs-confirmed canon. Any source or miner wording that uses another pronoun does not override that lock.",
    "Photo Submissions attachments in this intake were not visually inspected. Anthos is confirmed as POSTED BY for the example bundle/scaffolding; do not upgrade those files to MADE BY, CAPTURED BY, or FEATURING without independent support.",
    "Photo-event scaffolding is lived behavior, not a formal Photo Director / Media Director appointment or appointment chronology.",
    "Tae's `Shame on you anthos` and Anthos's spelling line occur in the same Wall sequence but are not connected by Discord Reply metadata; treat the teasing connection contextually rather than as a mechanically confirmed reply edge.",
  ]),
} as ExtendedCharacter;
characterById.set("anthos", allCharacters[anthosIndex]);
