import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const index = allCharacters.findIndex(
  (character) => character.id === "noether" || character.name === "Noether",
);
if (index < 0) {
  throw new Error("Run 985 follow-up expected canonical Noether owner; refusing to create a duplicate.");
}

const noether = allCharacters[index] as ExtendedCharacter;
const relationships = [...(noether.relationships ?? [])];
const anayssNote =
  "Noether later remembers Anayss as the person who picked her up when she was alone and had nowhere to go, let her into UL when she no longer wanted to play, and helped the game become enjoyable again while she found a place in the group. Anayss answers that retrospective with `TQM amiga`; Noether follows with `Tambien te quiero`, and later exchanges keep the same easy mutual praise and familiar tagging. It is a pickup-to-belonging friendship rhythm, not a formal recruiter appointment or closeness ranking.";
const existingAnayss = relationships.findIndex((relationship) => relationship.name === "Anayss");
if (existingAnayss >= 0) {
  const current = relationships[existingAnayss];
  relationships[existingAnayss] = {
    ...current,
    note: `${current.note} ${anayssNote}`,
    href: current.href ?? "/characters/anayss",
  };
} else {
  relationships.push({ name: "Anayss", note: anayssNote, href: "/characters/anayss" });
}

const updated: ExtendedCharacter = {
  ...noether,
  logline:
    "Game Officer with a technical relationship to nonsense and a surprisingly plain relationship to gratitude: Noether can litigate context, dessert categories, and birthday-role fairness, joke that her bunny has more energy than she does, then tell Anayss directly that being brought into UL helped playing feel enjoyable again. Recognition matters; once it arrives, she repairs quickly and gives warmth back.",
  tags: unique([
    ...(noether.tags ?? []),
    "Belonging",
    "Reciprocal warmth",
    "Self-deprecating humor",
    "Food and baking",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(noether.quotes ?? []),
    "That bunny have more energy than me",
    "Tambien te quiero",
  ]),
  claims: unique([
    ...(noether.claims ?? []),
    "In a February 2022 exact reply, Noether remembers Anayss picking her up when she was alone and had nowhere to go, letting her into UL when she no longer wanted to play, and says meeting the group made playing enjoyable again and helped her feel integrated. It is Noether's own retrospective belonging story, not an exact join-date certificate.",
    "Anayss answers that retrospective with `TQM amiga`; Noether follows with `Tambien te quiero`. In March Anayss describes Noether warmly, and Noether answers by joking that most of what she says is nonsense before returning praise. The recurring mechanism is self-deprecation beside unusually explicit gratitude and easy reciprocal affection.",
    "Across March through June 2022, Noether repeatedly circles breads, pizza, chocolate cake, focaccia, and small chocolate/lemon/apple-walnut cakes. The accumulation supports probable cooking/baking interest and food-sharing imagination as ordinary-life texture, not a professional-baker claim.",
    "Anayss's `@Noether wb ❤️` in December 2021 followed by familiar 2022 interaction supports warm continuity after a return marker. It does not establish how long Noether was away, why, or an exact return date.",
  ]),
  antiFanon: unique([
    ...(noether.antiFanon ?? []),
    "Noether's February 2022 retrospective about Anayss bringing her into UL is a belonging story, not automatic proof of an exact join date, permanent recruiter authority, appointment chronology, or a closeness leaderboard.",
    "Anayss's `TQM amiga` and Noether's `Tambien te quiero` are reciprocal friendship/affection language in this context and do not establish literal romance or sex.",
    "The recurring food text supports probable cooking/baking interest only. It does not establish professional skill, routine frequency, nationality, or a formal `love language`.",
    "Noether's April 2022 attachment remains uninspected; POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING without independent support.",
  ]),
};

allCharacters[index] = updated;
characterById.set(updated.id, updated);
