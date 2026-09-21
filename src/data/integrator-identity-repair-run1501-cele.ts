import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const canonical = characterById.get("cele") as ExtendedCharacter | undefined;
const legacy = characterById.get("celeee") as ExtendedCharacter | undefined;

const mergeRelationships = (
  current: NonNullable<Character["relationships"]> = [],
  incoming: NonNullable<Character["relationships"]> = [],
): NonNullable<Character["relationships"]> => {
  const seen = new Set<string>();
  return [...current, ...incoming].filter((relationship) => {
    const key = `${relationship.name}\u0000${relationship.note}\u0000${relationship.href ?? ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

if (canonical) {
  const relationships = mergeRelationships(canonical.relationships, legacy?.relationships);
  relationships.push({
    name: "Rummy",
    note:
      "Cele and Rummy can trade the Wall's defendant/prosecutor positions without breaking the social rhythm. The Finderella pocket has Rummy exposing Cele and Cele answering in keyboard-smash outrage while staying in the bit; by March 2023 Cele is the one posting two attachments at Rummy, tagging her with `:R_damn:`, then answering the protest with `:CaughtIn4K:`. Their height banter runs on the same comfortable embarrassment-teasing lane. It is reciprocal receipt play, not a closeness rank or evidence of actual height.",
    href: "/characters/rummy",
  });

  Object.assign(canonical, {
    name: "Cele",
    billing: "recurring",
    role: "Platelet",
    era: "2020–",
    logline:
      "A high-reactivity Screenshot Court defendant with a strangely tidy streak: Cele can keyboard-smash through being exposed, return fire later, and tolerate social chaos much more easily than a red notification dot she thinks somebody should have cleared already.",
    aliases: unique([
      ...(canonical.aliases ?? []),
      ...(legacy?.aliases ?? []),
      "Celeana",
      "Celeee",
      "Celery",
      "Celeee❦(Gilli's Pie)",
      "celeyster",
    ]),
    tags: unique([
      ...(canonical.tags ?? []),
      ...(legacy?.tags ?? []),
      "Platelet",
      "Wall",
      "Receipt filer",
      "Theatrical defendant",
      "Notification-badge completionist",
      "Reciprocal exposure",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([
      ...(canonical.stableDiscordIds ?? []),
      ...(legacy?.stableDiscordIds ?? []),
      "745353665149141144",
      "310986721121337344",
    ]),
    relationships: mergeRelationships(relationships),
    quotes: unique([
      ...(canonical.quotes ?? []),
      ...(legacy?.quotes ?? []),
      "GOODBYE",
      "RLY BE EXPOSNING M LIKE THAT",
      "Get rid of the red dot :Cute_catAHHHH:",
      "CHECK THE REDT DOT",
      "okay but like doesn’t it bOther u:Cursed: :Cursed: :Cursed:",
      ":CaughtIn4K:",
      "I thought the prince was just The Prince:Fat_Wheeze:",
    ]),
    claims: unique([
      ...(canonical.claims ?? []),
      ...(legacy?.claims ?? []),
      "Cele / Celeana / Celeee / Celery are one canonical person. The reviewed Whiskey and Wall material preserves two source-account histories under that one public Cele owner rather than separate cast pages.",
      "Across late 2022 and March 2023, Cele repeatedly notices unread-count / red-notification clutter and urges other people to clear it. The recurring contrast is socially chaotic defendant and filer ↔ mundane interface-order completionist.",
      "Cele does not leave Screenshot Court after being exposed. The Finderella pocket turns embarrassment into participation; later she reverses roles and files Rummy herself with `:CaughtIn4K:` after Rummy protests.",
      "Petty Crimes: Cele can withstand public clowning more gracefully than somebody else's red notification badge.",
    ]),
    antiFanon: unique([
      ...(canonical.antiFanon ?? []),
      ...(legacy?.antiFanon ?? []),
      "Cele's canonical public shelf is Platelet. Do not replace it with a generic archive-cast label or infer appointment chronology from export-time/current role arrays.",
      "Cele's `I will literally hack into ur acct and do it for u` is obvious joking escalation inside the notification-cleanup bit, not evidence of real hacking, intent, or cyber activity.",
      "Cele↔Rummy height banter does not establish either person's actual height or measurements.",
      "Cele's typo storms are fast-typing / high-arousal social style, not evidence that she cannot spell.",
      "For uninspected media, POSTED BY stays distinct from MADE BY, CAPTURED BY, and visual FEATURING.",
    ]),
  } satisfies Partial<ExtendedCharacter>);

  for (let index = allCharacters.length - 1; index >= 0; index -= 1) {
    if (allCharacters[index].id === "celeee") allCharacters.splice(index, 1);
  }
  for (const group of castGroups) {
    group.characterIds = group.characterIds.filter((id) => id !== "celeee");
  }

  characterById.set("cele", canonical);
  // Compatibility lookup only. The public cast list has one Cele owner, under canonical id `cele`.
  characterById.set("celeee", canonical);
}
