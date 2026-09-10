import { wikiPages } from "./content";

const shiya = wikiPages.find((page) => page.type === "Cast" && page.id === "shiyax");

if (shiya) {
  shiya.focus = "Cast · early era · Whiskey doorway · social chaos · Screenshot Court";
  shiya.logline =
    "Yaya can redirect a room, proudly declare `I AM THE CHAOS`, become a theatrical Wall defendant, and still notice the instant a joke might have landed on something real. His chaos is social, not careless.";

  const careSummary =
    "Shiya's chaos has a brake pedal. In one Daycare exchange, the tone turns hard enough that he stops performing for the room and checks Mia directly: `u good mia?` comes before `did that really happen to you?`. That order is the tell. Curiosity waits behind the person. The same Shiya who can proudly declare `I AM THE CHAOS` is still tracking whether somebody on the other side of the joke is actually okay.";
  const dreamSummary =
    "His silliness can get extremely physical even when nothing is actually happening. In one dream he is trying to practice a dance while the floor keeps breaking and getting replaced; his takeaway is not panic but admiration for how hard the imaginary workers are grinding. It is a tiny, ridiculous glimpse of the same brain: chaos arrives, Shiya notices the people doing the work.";

  if (!shiya.summary.includes(careSummary)) shiya.summary.push(careSummary);
  if (!shiya.summary.includes(dreamSummary)) shiya.summary.push(dreamSummary);

  for (const tag of ["Person Before Spectacle", "Mio"] as const) {
    if (!shiya.tags.includes(tag)) shiya.tags.push(tag);
  }

  const relationshipNames = new Set(shiya.relationships.map((relationship) => relationship.name));
  if (!relationshipNames.has("Mia")) {
    shiya.relationships.push({
      name: "Mia",
      note: "When a Daycare story stops sounding purely funny, Shiya checks Mia herself before chasing the story: `u good mia?` first, then `did that really happen to you?`. The useful thing is the priority, not the private details of what Mia was talking about.",
    });
  }
  if (!relationshipNames.has("Mio")) {
    shiya.relationships.push({
      name: "Mio",
      note: "Mio can call Shiya `Bby` and `best of friends`, then swing straight into mock-blackmail about sharing his secrets. Affection and sharp teasing live comfortably in the same register; `best` is Mio's wording here, not an exclusive friendship ranking.",
    });
  }

  if (!shiya.episodes.some((episode) => episode.title === "Person before spectacle")) {
    shiya.episodes.push({
      title: "Person before spectacle",
      summary:
        "A hard turn in Daycare makes Shiya drop the performance long enough to ask Mia whether she is okay and whether the story really happened. He checks the person before interrogating the premise, then lets the room move on without turning her private context into entertainment.",
      refs: ["Daycare 2020-11-03"],
    });
  }

  const dreamGag =
    "Dreaming that dance practice destroys the floor three times, then being most impressed by the imaginary workers replacing it.";
  if (!shiya.gags.includes(dreamGag)) shiya.gags.push(dreamGag);

  for (const quote of [
    "u good mia?",
    "did that really happen to you?",
    "I was more impressed like, damn they're working hard XD",
  ]) {
    if (!shiya.quotes.includes(quote)) shiya.quotes.push(quote);
  }

  const claims = [
    "Run 822 keeps the new Daycare material anchored to ShiyaX stable Discord account 341219730025349130 (`shiyax97`), the same identity already used by the canonical ShiyaX/Yaya owner.",
    "On 2020-11-03 Shiya asks Mia `u good mia?` and then `did that really happen to you?`; the public character value is Shiya's check-in sequence, not Mia's private or sensitive context.",
    "A separate exchange has Mio call Shiya `Bby` and `best of friends` before joking about sharing his secrets; the wording supports lived affection plus teasing, not exclusivity or a literal threat.",
    "A Shiya-authored dream account has dance practice repeatedly breaking the floor; his punchline is admiration for how hard the imaginary workers are working.",
    "The exact historical onset of Shiya's `Member House` affiliation remains unresolved; current/later role arrays are not appointment chronology.",
  ];
  for (const claim of claims) {
    if (!shiya.claims.includes(claim)) shiya.claims.push(claim);
  }

  const rails = [
    "Do not publish or reconstruct Mia's private/sensitive circumstances from the 2020-11-03 check-in; Shiya's behavior is the relevant public material.",
    "Do not turn Mio's `best of friends` wording into an exclusive friendship ranking or the secrets joke into a literal threat.",
    "Do not infer Shiya's exact Member House appointment date from current or export-time role arrays.",
  ];
  for (const rail of rails) {
    if (!shiya.antiFanon.includes(rail)) shiya.antiFanon.push(rail);
  }
}
