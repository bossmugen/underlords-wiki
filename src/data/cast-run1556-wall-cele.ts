import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const replaceRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => {
  const filtered = relationships.filter((relationship) => relationship.name !== incoming.name);
  return [...filtered, incoming];
};

/** Run 1556 late Wall tail: Cele's unread-badge prosecution. */
export function applyRun1556WallCeleCast(characters: Character[]): void {
  const stableId = "745353665149141144";
  const index = characters.findIndex(
    (character) =>
      character.id === "cele" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
  let relationships = [...(previous?.relationships ?? [])] as Relationship[];

  relationships = replaceRelationship(relationships, {
    name: "phenomenal_lamb",
    note:
      "Cele treats lamb's unread badge like a shared emergency; lamb answers with cheerful resistance. `906 MESSAGES` becomes `yse`, `Get rid of the red dot` gets `and noh-`, and Cele escalates to the joke threat that she will hack into the account and clear it herself. The scene is familiar notification-policing versus someone delighted to refuse, not evidence of actual account access or a ranked closeness claim.",
  });
  relationships = replaceRelationship(relationships, {
    name: "Moon",
    href: "/characters/moon",
    note:
      "Moon is one of the people who makes Cele's notification reputation explicit: after Cele prosecutes another giant unread count, Moon volunteers her to go lecture Rum, RV, and Uncle Rice too. That line matters less as a Cele↔Moon hierarchy and more as proof the room already knows exactly what Cele is like about red dots.",
  });
  relationships = replaceRelationship(relationships, {
    name: "Ricochet",
    href: "/characters/ricochet",
    note:
      "Ricochet intentionally accumulates unread notifications partly to compare totals with phenomenal_lamb; Cele's response is immediate disbelief that the red dots do not bother him. He turns the count into a challenge. She keeps trying to make the screen peaceful.",
  });

  const incoming: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "cele",
    name: previous?.name ?? "Cele",
    aliases: unique([...(previous?.aliases ?? []), "celeana"]),
    billing: previous?.billing ?? "guest",
    role: previous?.role ?? "Archive-era Wall cast",
    era: previous?.era ?? "2021+",
    logline:
      "Cele wants the screen clean and will make that everybody else's problem. Huge unread counts and red notification dots activate an immediate prosecution instinct: numbers get announced, offenders get addressed directly, and clearing the badge becomes a public-service project. The excellent contradiction is that the person demanding visual tidiness becomes typographically feral while doing it — all-caps, collisions, panic emotes, keyboard smash, absolute urgency. Peaceful screen; catastrophic sentence velocity.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Wall",
      "Notification prosecutor",
      "Unread-badge enemy",
      "Fast-typing chaos",
      "Peer-recognized bit",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "906 MESSAGES",
      "Get rid of the red dot",
      "I CANT",
      "TWO HIJDRED AND EITHERY FIVE",
      "WHT U GOTS SO KANY RED DOTS",
      "CHECK THE REDT DOT",
      "okay but like doesn’t it bOther u",
      "It seems so peaceful",
      "DON  T MANIGEST THAT",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "Stable Discord account 745353665149141144 / celeana is the reviewed Wall account published here as Cele.",
      "From November 2022 through March 2023, Cele repeatedly treats large unread counts and red notification dots as a social problem worth fixing, and other members begin treating that preference as recognizable enough to volunteer her to lecture additional offenders.",
      "Cele's keeper contradiction is visual notification tidiness ↔ activated fast-typing chaos: she wants a clean screen while her own messages become caps, collisions, emote panic, and keyboard smash under pressure.",
      "Moon's `Cel go lecture rum,rv and uncle Rice uwu` supports peer-recognized notification policing as reputation, not a formal role or authority.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "Cele's joke threat to hack into phenomenal_lamb's account is a joke in a notification-cleanup argument, not evidence of hacking, account access, credential access, or cyber behavior.",
      "Unread-badge intolerance is a taste/habit/social reputation only; do not turn it into OCD, compulsion, anxiety, or another health/diagnostic claim.",
      "Fast-typing collisions are velocity texture, not evidence that Cele or UL members are bad spellers.",
      "Moon volunteering Cele to lecture other offenders is reputation comedy, not a governance title, moderator power, or appointment.",
      "Screenshot reply context does not establish pixel content beyond what the messages themselves say; POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.",
    ]),
  };

  if (index >= 0) characters[index] = incoming;
  else characters.push(incoming);
}
