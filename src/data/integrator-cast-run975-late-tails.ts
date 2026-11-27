import "./integrator-cast-run801-intake";
import "./integrator-identity-repair-run802";
import "./integrator-cast-run807-late-wall-momo-mimi";
import "./integrator-cast-run936-core-dwr";
import "./integrator-cast-run934-daycare-wall-woosung-yumi";
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

const dwrIndex = allCharacters.findIndex((character) => character.id === "drink-water-reminder");
if (dwrIndex < 0) {
  throw new Error("Run 975 expected canonical Drink water reminder; refusing to create a duplicate owner.");
}

const dwr = allCharacters[dwrIndex] as ExtendedCharacter;
allCharacters[dwrIndex] = {
  ...dwr,
  aliases: unique([...(dwr.aliases ?? []), "whoamii_9"]),
  logline:
    "Drink water reminder is unusually comfortable saying when something does not make sense and then immediately asking what useful move comes next. That same low-ego pragmatism shows up behind the curtain: in 2021 they were quietly maintaining the Photoshoot reminder machine—opening prompts, judge deadlines, closing/results notices, schedule fixes and a reusable command recipe—while still being perfectly willing to say `I'm sorry kinda lost` when they were the one who needed the missing piece.",
  tags: unique([
    ...(dwr.tags ?? []),
    "Photoshoot operations",
    "Reminder plumbing",
    "Event communications",
  ]),
  quotes: unique([
    ...(dwr.quotes ?? []),
    "the first successful year of our photoshoot event!",
  ]),
  claims: unique([
    ...(dwr.claims ?? []),
    "Across August–December 2021, stable account 407706805918105602 / whoamii_9 repeatedly configures Photoshoot reminders in `saber_control`: opening and example-picture prompts, judge deadlines, closing/results notices, channel and schedule tests, corrections, and finally a pinned reusable `Photoshoot Event commands` recipe. The person-level read is practical maintenance work, not a title inferred from an export-time role array.",
    "On December 6, 2021, whoamii_9 publicly opens the Winter Photoshoot and calls it `the first successful year of our photoshoot event!`, adding useful continuity between the event machinery they maintained and the public-facing cycle.",
    "The confirmation/error messages produced after those commands are authored by Saber, not by Drink water reminder. DWR is the human configuring and maintaining the reminder setup; the bot speaks for itself.",
  ]),
  antiFanon: unique([
    ...(dwr.antiFanon ?? []),
    "The Photoshoot command trail establishes repeated event-comms maintenance in practice; it does not establish a formal Marketing/PR appointment, appointment date, exclusive Photoshoot ownership, birthday-organizer authority, or VC-host authority.",
    "Saber bot confirmations and errors remain Saber-authored output. Do not quote them as Drink water reminder's prose merely because DWR issued the preceding command.",
  ]),
} as ExtendedCharacter;
characterById.set("drink-water-reminder", allCharacters[dwrIndex]);

const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) {
  throw new Error("Run 975 expected canonical Woosung / WOO; refusing to create a duplicate owner.");
}

const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
const woosungRelationships = [...(woosung.relationships ?? [])];
upsertRelationship(woosungRelationships, {
  name: "Anthos",
  note:
    "A 2020 Club Only pocket shows their shared-bit rhythm at full speed: Anthos sends `eli hug @WOO`; WOO fires back `eli kill @Anthos`; Anthos answers `YAH WOO` / `LOVE ME`; WOO stays in the bit with a rainbow reaction and, after a `glomp`, a love-themed GIF. Minutes later she summons `ANTHOS` again so she can loudly announce her new Genshin simp: `KAEYA`, `BLUE DUDE`. A later callback where Anthos quotes WOO's `cool i exist` fits the same familiarity. Mock-hostility can flip into affection and back without either person needing to explain the register; none of it establishes romance.",
  href: "/characters/anthos",
});

allCharacters[woosungIndex] = {
  ...woosung,
  logline:
    "Former ScarletMoon leader, VIP and permanent Platelet who can introduce herself with `Hi Woosung.....idk what else` and then, given the right person or bit, go from mock-kill to rainbow to love GIF to a room-volume `KAEYA / BLUE DUDE` announcement at conversational sprint speed. Woosung can be dry and compressed or spectacularly easy to receipt; by 2023 she knows exactly how much material she generates and still does not become quieter.",
  tags: unique([
    ...(woosung.tags ?? []),
    "High-output social improviser",
    "Affectionate whiplash",
    "Genshin",
    "Kaeya",
  ]),
  relationships: woosungRelationships,
  quotes: unique([
    ...(woosung.quotes ?? []),
    "I found someone to simp",
    "KAEYA",
    "BLUE DUDE",
  ]),
  claims: unique([
    ...(woosung.claims ?? []),
    "On September 30, 2020, Anthos's `eli hug @WOO` becomes WOO's `eli kill @Anthos`, Anthos's `YAH WOO` / `LOVE ME`, WOO's rainbow response, an Anthos `glomp`, and WOO's love-themed GIF. The sequence is useful as rapid shared-bit grammar: mock-hostility turns affectionate in seconds without either person dropping out of the joke.",
    "Minutes later WOO calls `ANTHOS`, announces `I found someone to simp`, immediately clarifies `in genshin`, and names `KAEYA` / `BLUE DUDE`. It is small but excellent Petty Crimes texture: when Woosung discovers a fictional favorite, the room hears about it at full volume.",
    "The 2020 Anthos pocket and the 2023 line `I need to not talk sm I got so much stuff on the hall of shame` belong to one longitudinal contradiction: Woosung is expressive enough to manufacture her own receipt supply, self-aware enough to recognize the pattern, and still socially herself rather than becoming cautious.",
  ]),
  antiFanon: unique([
    ...(woosung.antiFanon ?? []),
    "Woosung's `I found someone to simp` explicitly resolves to the fictional Genshin character Kaeya. Do not turn it into romance with Anthos or another UL member.",
    "The `eli hug` / `eli kill` / `LOVE ME` / `glomp` / love-GIF sequence is social play and shared-bit fluency, not literal violence, romance, sex, or a relationship ranking. Bot/action output remains distinct from human-authored prose.",
  ]),
} as ExtendedCharacter;
characterById.set("woosung", allCharacters[woosungIndex]);
