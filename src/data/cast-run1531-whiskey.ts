import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];
const relabelEfi = (text: string) => text.replace(/Efi's/g, "Sye's").replace(/Efi’s/g, "Sye’s").replace(/\bEfi\b/g, "Sye");

function mergeRelationship(
  relationships: Array<{ name: string; note: string; href?: string }>,
  incoming: { name: string; note: string; href?: string },
): void {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index < 0) {
    relationships.push(incoming);
    return;
  }
  const current = relationships[index];
  const incomingNote = relabelEfi(incoming.note);
  relationships[index] = {
    name: current.name,
    note: current.note.includes(incomingNote) ? current.note : `${current.note} ${incomingNote}`,
    href: current.href ?? incoming.href,
  };
}

export function applyRun1531WhiskeyCast(characters: Character[]): void {
  const syeIndex = characters.findIndex(
    (character) => character.id === "sye" || (character as ArchiveCharacter).stableDiscordIds?.includes("488099199938986004"),
  );
  const efiIndex = characters.findIndex((character) => character.id === "efi");
  if (syeIndex < 0) return;

  const sye = characters[syeIndex] as ArchiveCharacter;
  const duplicateEfi = efiIndex >= 0 ? (characters[efiIndex] as ArchiveCharacter) : undefined;
  const relationships = [...(sye.relationships ?? [])];

  for (const relationship of duplicateEfi?.relationships ?? []) {
    mergeRelationship(relationships, { ...relationship, note: relabelEfi(relationship.note) });
  }

  mergeRelationship(relationships, {
    name: "Lilly",
    note: "Under Sye's archived Efi-era display, loud affection for Lilly repeatedly turns into practical worry instead of stopping at the declaration. In the October 9, 2020 pocket Sye clarifies that she means she loves Lilly more than everyone else loves Lilly, calls herself a `worry wort`, says the worry keeps her awake, accepts backup from the room, and then checks whether all that fussing might itself make Lilly mad. The person-shaped pattern is care with follow-through plus concern about how the care lands; it is not romance, family, relationship status, or a public health record.",
    href: "/characters/lilly",
  });
  mergeRelationship(relationships, {
    name: "Gilli",
    note: "When Sye worries aloud about Lilly, Gilli answers that she is simply looking out for her and that it is good. Sye accepts the reassurance instead of escalating the concern. It is a small peer-support lane, not a hierarchy or closeness ranking.",
    href: "/characters/gilli",
  });

  characters[syeIndex] = {
    ...sye,
    aliases: unique([...(sye.aliases ?? []), ...(duplicateEfi?.aliases ?? []), "sycessences", "ƐℲı˥ — sadako"]),
    stableDiscordIds: unique([...(sye.stableDiscordIds ?? []), ...(duplicateEfi?.stableDiscordIds ?? []), "488099199938986004"]),
    tags: unique([...(sye.tags ?? []), ...(duplicateEfi?.tags ?? []), "Care with follow-through", "Context keeper", "Long social memory", "Sleep-and-fatigue running gag", "Petty Crimes"]),
    relationships,
    quotes: unique([...(sye.quotes ?? []), ...(duplicateEfi?.quotes ?? []), "But I’m a worry wort! And that keeps me up !", "I feel like she’s going to get mad by all this?", "Go back to sleep ppl it’s Saturday", "I'm too tired to love too"]),
    claims: unique([
      ...(sye.claims ?? []),
      ...(duplicateEfi?.claims ?? []).map(relabelEfi),
      "Stable Discord account 488099199938986004 / sycessences / historical ƐℲı˥ display belongs to canonical Sye. Older WIKI layers accidentally split some of the same account's Whiskey material into a separate `Efi` cast entity; Run 1531 reconciles those receipts back into one person.",
      "Sye's October 2020 Lilly pocket sharpens an existing contradiction: she can be extremely loud about affection and still become practical, self-monitoring, and worried about overdoing the care once something feels serious.",
      "A small sleep/fatigue motif follows the same account across ordinary banter: `I didn’t sleep`, worry keeping her awake, telling everyone to go back to sleep because it is Saturday, and the edited surviving line `I'm too tired to love too`. It is Petty Crimes-sized recurring texture, not a diagnosis or a claim about chronic sleep problems.",
    ]),
    antiFanon: unique([
      ...(sye.antiFanon ?? []),
      ...(duplicateEfi?.antiFanon ?? []).map(relabelEfi),
      "`Efi` / `<3 Efi <3>` in the affected archive-era WIKI material is a historical display/name surface of the same stable Sye account, not a separate cast member. Do not resurrect a second Efi person from stable account 488099199938986004, sycessences, or ƐℲı˥.",
      "The Lilly care pocket supports affection, practical worry, and impact-checking only. Do not promote it to romance, sex, relationship status, literal family, diagnosis, or publication of private health specifics.",
      "The sleep/fatigue recurrence is ordinary self-report and joking texture. Do not infer insomnia, a sleep disorder, mental-health diagnosis, or a stable medical condition.",
    ]),
  } as ArchiveCharacter;

  if (efiIndex >= 0) characters.splice(efiIndex, 1);

  const tofuIndex = characters.findIndex((character) => character.id === "tofu");
  if (tofuIndex >= 0) {
    const tofu = characters[tofuIndex] as ArchiveCharacter;
    characters[tofuIndex] = {
      ...tofu,
      claims: unique([...(tofu.claims ?? []), "In Tofu's June 28, 2021 line about not uploading the `entire cc` on Discord, cross-archive wording from Gilli independently resolves `cc` as the in-game club chat. The useful correction is channel identity only; the exact omitted chat contents and any formal upload rule remain unresolved."]),
      antiFanon: unique([...(tofu.antiFanon ?? []), "In this Whiskey context, `cc` means the in-game club chat. Do not reinterpret it as a Discord channel, staff room, private-message thread, formal policy name, or proof of why a full chat dump was discouraged."]),
    } as ArchiveCharacter;
  }
}
