import { allCharacters, castGroups, characterById } from "./cast";
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

const nintendoId = "nintendoshitcube";
const existingIndex = allCharacters.findIndex(
  (character) => character.id === nintendoId || character.name === "NintendoShitcube",
);

const base: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: nintendoId,
        name: "NintendoShitcube",
        aliases: ["nintendoshitcube_"],
        billing: "legacy",
        role: "Archive-era UL member",
        era: "2020–2022",
        logline: "",
      };

const relationships = [...(base.relationships ?? [])];
upsertRelationship(relationships, {
  name: "Anayss",
  note: "Anayss can summon Nintendo straight into the room's `the c h i l d` joke and assumes their screaming belongs in the bit. Nintendo answers with `Screaming is what I do best😎😎😎` instead of correcting the premise. It is tease-and-feed fluency, not literal family language.",
  href: "/characters/anayss",
});
upsertRelationship(relationships, {
  name: "Snow",
  note: "About twenty-six minutes after Nintendo self-brands the screaming, Snow posts `~mutes the child~`. There is no encoded reply edge, so the continuation stays probable; as a room beat it reads like Nintendo supplies the noise and Snow supplies the imaginary mute button.",
  href: "/characters/snow",
});
upsertRelationship(relationships, {
  name: "RV",
  note: "RV is repeatedly close enough to the zorb/orb nonsense to answer it in reaction-language. That supports easy room-level fluency with Nintendo's style without turning adjacency into a ranked friendship claim.",
  href: "/characters/ren",
});

const nintendo: ExtendedCharacter = {
  ...base,
  id: nintendoId,
  name: "NintendoShitcube",
  aliases: appendUnique(base.aliases, ["nintendoshitcube_"]),
  billing: base.billing || "legacy",
  role: base.role || "Archive-era UL member",
  era: base.era || "2020–2022",
  logline:
    "A tiny surviving footprint with absolutely no interest in behaving tiny. Nintendo turns room nonsense into miniature performances—zorb balls, boiled-mayo domesticity, cartoon bravado, creature slander—and then helpfully confirms `Screaming is what I do best`. Low-volume account, maximum-volume persona.",
  tags: appendUnique(base.tags, [
    "Archive cast",
    "Daycare",
    "Wall",
    "Low-volume",
    "Theatrical",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(base.quotes, [
    "ᶠᵘᵏⁱⁿᵍ ᶻᵒʳᵇ ᵇᵃˡˡ",
    "I’d share a refreshing glass of boiled mayo with my orb any day ᵘ ʷ ᵘ",
    "Screaming is what I do best😎😎😎",
    "What a stupid looking animal, glad I’m not a bug with a long neck",
  ]),
  claims: appendUnique(base.claims, [
    "Stable account 703429467082719344 / `nintendoshitcube_` is NintendoShitcube in the reviewed support-room material.",
    "Nintendo's indexed direct Daycare ledger is thin at 35 messages from 2021-05-10 through 2022-04-13; the person-shaped synthesis here comes from the same stable account in Wall / Club-Only support material spanning 2020-09-20 through 2022-01-12.",
    "Across those support scenes Nintendo repeatedly uses exaggerated object/food language, mock-hostile bravado, and loud self-presentation; the cumulative read is low-volume participant versus deliberately high-volume persona.",
    "Anayss explicitly calls Nintendo `the c h i l d` and says Nintendo would help hide their whaling; Nintendo follows with `Screaming is what I do best😎😎😎`. Snow's later `~mutes the child~` is a probable contextual continuation, not an encoded reply.",
  ]),
  antiFanon: appendUnique(base.antiFanon, [
    "These personality scenes are same-ID support-room material and must not be rewritten as direct Daycare dialogue.",
    "`the child` is joke-role language only; it does not establish Nintendo's age, family relation, or governance category.",
    "Nintendo did not originate `boiled mayo`: Neffie has an earlier accessible Club-Only use on 2020-08-24.",
    "`I ain’t afraid to hit the elderly` is hyperbolic joke-language with unrecovered target/context, not a real-world violence claim.",
    "The referenced long-necked creature and attachment-only media remain unidentified unless the original object is inspected.",
    "Snow's `~mutes the child~` has no recovered direct-reply edge and must remain probable continuation rather than confirmed reply.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = nintendo;
else allCharacters.push(nintendo);

characterById.set(nintendoId, nintendo);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(nintendoId)) {
  archiveCastGroup.characterIds.push(nintendoId);
}
