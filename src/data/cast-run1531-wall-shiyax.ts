import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];

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
  relationships[index] = {
    name: current.name,
    note: current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`,
    href: current.href ?? incoming.href,
  };
}

/** Run 1531 late Wall tail: ShiyaX direct-authored prehistory + response rhythm. */
export function applyRun1531WallShiyaCast(characters: Character[]): void {
  const index = characters.findIndex(
    (character) =>
      character.id === "shiyax" ||
      (character as ArchiveCharacter & { stableDiscordIds?: string[] }).stableDiscordIds?.includes("341219730025349130"),
  );
  if (index < 0) return;

  const shiya = characters[index] as ArchiveCharacter;
  const relationships = [...(shiya.relationships ?? [])];

  mergeRelationship(relationships, {
    name: "Ren",
    note: "Ren can put an old exhibit directly in front of Shiya and get an immediate human-sized reaction instead of a formal defense. In a July 23, 2020 Wall pocket, Ren posts the attachment, Mugen answers `FACTS`, and Shiya lands on `ouchies`. The timing makes Shiya's defendant routine feel reciprocal: he is not merely being archived from a distance; he is present enough to take the hit and feed the room back.",
    href: "/characters/ren",
  });
  mergeRelationship(relationships, {
    name: "Mugen",
    note: "Mugen's short counterpunches are part of Shiya's Wall rhythm. She can answer an exhibit with `FACTS`, or later answer Shiya's `i can be me` with a flat `no`; Shiya's side of the bit works because he keeps responding rather than treating the filing as a one-way attack. Their receipt banter reads as comfortable pushback, not literal hostility.",
    href: "/characters/mugen",
  });

  characters[index] = {
    ...shiya,
    tags: unique([...(shiya.tags ?? []), "Self-declared chaos", "Receipt defendant who feeds the bit", "Escalation wordplay"]),
    relationships,
    quotes: unique([...(shiya.quotes ?? []), "I AM THE CHAOS", "ouchies"]),
    claims: unique([
      ...(shiya.claims ?? []),
      "A surviving July 9, 2020 Wall reply has Shiya declaring `I AM THE CHAOS`. It is useful prehistory for his later self-chaos rhetoric, not an origin certificate for the joke or phrase.",
      "Shiya's July 23, 2020 Ren/Mugen exchange shows the receipt-defendant mechanism already working as a three-person rhythm: exhibit, `FACTS`, `ouchies`. He often protests or counterpunches, but he also supplies the room with the reaction that lets the bit keep moving.",
      "The December 20, 2021 `WEED` / `GHEE` / `CHEESE` / `TREES` pocket works as cumulative one-upmanship. The joke is the group escalating the same sound/shape rather than four unrelated random lines.",
    ]),
    antiFanon: unique([
      ...(shiya.antiFanon ?? []),
      "`I AM THE CHAOS` is the earliest surviving direct-authored Shiya Wall wording currently recovered for this self-chaos lane; earliest surviving is not the same thing as first-ever use or origin.",
      "Wall attachments involving Shiya establish only the speaker/poster/reply relationships encoded in the surviving record. Do not upgrade them to MADE BY, CAPTURED BY, or FEATURING without direct support.",
    ]),
  } as ArchiveCharacter;
}
