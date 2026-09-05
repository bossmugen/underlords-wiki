import "./hard-canon-run413";

// Public editorial invariant for every character page and every future integrator pass.
// The archive supplies the receipts. The visible biography is about the person.
export const CHARACTER_BIOGRAPHY_POLICY = {
  primaryQuestion: "Who is this person, what are they like, how do they move through Underlords, and what makes them unmistakably them?",
  archiveFirst: true,
  personFirst: true,
  eventsAreSupportingScenes: true,
  storyBeforeMetadata: true,
  labels: {
    people: "Strippers",
    relationships: "Known Associates",
    aliases: "Also Answers To",
    quotes: "Mouth Crimes",
    visuals: "Mugshots",
    miscellany: "Petty Crimes",
    sources: "Show Receipts",
  },
  requirements: [
    "Lead with the person: temperament, social style, reputation, recurring behavior, relationships, habits, tastes, contradictions, and how they change over time.",
    "Use archive events as supporting scenes that reveal character; do not let chronology or receipt order become the default biography structure.",
    "Several receipts pointing to the same trait or relationship pattern should normally become one synthesized character read.",
    "Write relationships as lived behavior: who notices absences, checks in, teases, trusts, argues, remembers preferences, gets dragged into jokes, or keeps returning to the same person.",
    "Keep structured Known Associates links available as navigation; do not delete them merely because the narrative biography also carries relationship meaning.",
    "Make formal roles legible through behavior rather than resume bullets.",
    "Prefer person-shaped section titles about behavior, contradiction, relationship patterns, reputation, or change over year labels and event names.",
    "Keep provenance, confidence grades, source-method caveats, anti-fanon housekeeping, and technical attribution limits in Show Receipts or The Basement unless uncertainty materially changes the story.",
    "Do not use visible archive-report formulations such as evidence shows, archive proves, this receipt establishes, what this does not prove, or repeated source-boundary disclaimers.",
    "Use Petty Crimes, never Trivia, for small habits, tastes, hobbies, odd details, recurring phrases, tiny humiliations, and miscellaneous person-level lore.",
    "Keep hard rails hard: user canon, resolved identities, privacy, explicit contradictions, attribution boundaries, and genuinely unresolved conflicts still control publication.",
    "When material is thin, publish a short specific biography instead of filler or a receipt dump.",
    "Treat archive silence as archive silence. Use first spotted, last surviving appearance, or the archive goes quiet unless a real join/leave event is confirmed.",
  ],
  integrationRule: "New person-specific material should normally be folded into an existing trait, relationship, contradiction, character arc, or Petty Crimes section; use an Episode when the event itself is the better owner.",
} as const;
