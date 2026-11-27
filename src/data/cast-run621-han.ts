import { allCharacters } from "./cast";

// Run 621 closing Wall tail: Han's useful change is cumulative. The Media Director
// starts by caring whether a screenshot visibly means what people say it means,
// then becomes recurring Wall material himself. By October he notices the recurrence,
// performs mock self-censorship, and immediately makes the censorship more quotable.
const hanIndex = allCharacters.findIndex((character) => character.id === "han");
if (hanIndex >= 0) {
  const han = allCharacters[hanIndex];
  const relationships = [...(han.relationships ?? [])];

  const upsertRelationship = (next: { name: string; note: string; href?: string }) => {
    const index = relationships.findIndex((relationship) => relationship.name === next.name);
    if (index >= 0) relationships[index] = next;
    else relationships.push(next);
  };

  upsertRelationship({
    name: "Ren",
    note: "When Ren cross-posts a cropped Club-Only failure, Han immediately notices the provenance problem — nobody will know where it came from — then turns the failed crop fix into `time to change clubs`. The media instinct and the joke happen in the same breath.",
    href: "/characters/ren",
  });

  upsertRelationship({
    name: "Mugen",
    note: "Mugen answers Han's provenance policing with `My man's on top of it`, later tells him the Wall is both fame and shame, and laughs when Han nominates surviving another workday as a FAME moment. She repeatedly meets his attempt to define the Wall by feeding the joke back to him.",
    href: "/characters/mugen",
  });

  allCharacters[hanIndex] = {
    ...han,
    logline:
      "UL Media Director and filmmaker whose Wall career keeps reversing the camera: he cares whether screenshots actually support the claim, can still decide `Im lazy to crop`, notices his own name appearing too often, tries mock silence, and eventually proposes `Han's wall of shame fame` as the obvious administrative solution.",
    tags: [...new Set([...(han.tags ?? []), "Wall", "Fame/Shame", "Self-mythologizing", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(han.quotes ?? []),
      "Is it fame or shame lol",
      "I survived another day at work",
      "but im concerned about my name popping up in this channel pretty often",
      "im not saying anything\nCuz\nSoon u guys will need to rename this channel to Han's wall of shame fame",
    ])],
  };
}
