import { allCharacters } from "./cast";

// Public editorial invariant for every character page and every future integrator pass.
// The archive is the camera; the biography is the life reconstructed from what it caught.
export const CHARACTER_BIOGRAPHY_POLICY = {
  primaryQuestion: "What happened when this person passed through Underlords?",
  archiveFirst: true,
  storyBeforeMetadata: true,
  requirements: [
    "Lead with the person's story, not rank, shelf, tags, stats, or a trait list.",
    "Build the person from archive scenes across time: relationships, recurring behavior, jokes, work, conflict, loyalty, reputation, turning points, absences, returns, and contradictions.",
    "Treat how other UL members speak to, react to, remember, tease, trust, fight with, or miss the person as biographical evidence when context supports it.",
    "Keep archive gaps visible. Earliest surviving is not origin; silence is not a personality change; missing evidence does not earn motives or interior states.",
    "User-confirmed canon may correct or complete archive gaps, but the surviving archive remains the main narrative spine.",
    "Keep aliases, current roles, era labels, tags, claims ledgers, and canon cautions as supporting reference material rather than substitutes for biography.",
    "When the archive is thin, publish a short bounded biography instead of filler profile prose.",
  ],
  integrationRule: "New person-specific archive evidence should normally enrich that person's biography before spawning duplicate metadata or a detached mini-dossier.",
} as const;

// Character biographies do not carry a structured relationship layer. Interpersonal
// scenes belong inside the life story where they actually happen; the separate Bonds
// surface keeps its own reference index.
for (const character of allCharacters) {
  delete (character as typeof character & { relationships?: unknown }).relationships;
}
