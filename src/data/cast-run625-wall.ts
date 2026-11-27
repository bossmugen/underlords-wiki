import "./canonicalize-cast";
import { allCharacters, characterById } from "./cast";

// Run 625 — Wall. Core already sharpened Illien's systems-reader side. This pass
// adds the other half of the same person: context sticks, incomplete evidence
// bothers him, and both instincts are liable to become jokes in public.
const illienIndex = allCharacters.findIndex((character) => character.id === "illien");
if (illienIndex >= 0) {
  const illien = allCharacters[illienIndex];
  const relationships = [...(illien.relationships ?? [])];

  const upsertRelationship = (name: string, note: string, href?: string) => {
    const index = relationships.findIndex((relationship) => relationship.name === name);
    const next = href ? { name, note, href } : { name, note };
    if (index >= 0) relationships[index] = next;
    else relationships.push(next);
  };

  upsertRelationship(
    "Anthos",
    "Illien can turn Anthos into `Queenk` off one scrap of wordplay, keep the tangent moving through `tacocat` / `racecar`, and later file an uninspected Wall image as `One from our Qweenk`. Low-setup teasing and evidence-room familiarity; the upload does not establish who made or appears in the image.",
    "/characters/anthos",
  );
  upsertRelationship(
    "RV",
    "Ren says she has a screenshot that makes somebody look like a psycho; Illien immediately upgrades his own curiosity to `We want to see that one`. Weeks later he true-replies to Ren's old `We do be licking each other tho` with `You mean like...CATS` and turns the room into an undercover-cat conspiracy. Easy context reuse, not romance canon.",
    "/characters/ren",
  );
  upsertRelationship(
    "Pride",
    "A current GIF reminds Illien of repeatedly reading `we've lost Pride's body` on Club Only; Pride instantly answers that the old day still makes him laugh. It is a shared-memory callback with the origin still unresolved, not proof that Illien created the original line.",
    "/characters/pride",
  );

  const quotes = [...new Set([
    ...(illien.quotes ?? []),
    "We want to see that one",
    "Please post the rest then @Mugen",
    "You mean like...CATS",
    "Meowone shall know",
  ])];

  allCharacters[illienIndex] = {
    ...illien,
    logline:
      "Early Officer who reads systems for thresholds and hidden costs, remembers old callbacks well enough to reactivate them, and treats the suggestion of missing evidence as a request for discovery. Dry about broken machinery; extremely unserious about courtroom standards.",
    tags: [...new Set([...(illien.tags ?? []), "Wall", "Callback memory", "Receipt escalation", "Petty Crimes"])],
    relationships,
    quotes,
  };
  characterById.set("illien", allCharacters[illienIndex]);
}
