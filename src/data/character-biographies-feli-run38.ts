import type { CharacterNarrative } from "./character-biographies-narrative";
import { feliNarrativeCharacterBios } from "./character-biographies-feli";

const base = feliNarrativeCharacterBios.feli;

export const feliRun38NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  feli: {
    ...base,
    sections: [
      base.sections[0],
      {
        period: "September 29, 2020",
        title: "Two days in, the house is already trying to place him on the Tumbleweed",
        paragraphs: [
          "Two days after the surviving Lobby false start, Feli has already become family-map business. Ansun / Sota asks `is feli connected to mugs`. The surrounding messages are not vague kinship banter floating in space: Rookie says `I did check them`, Anthos tells the room `checks pins guys`, then states the task outright — `we r updating the UL family tumbleweed`. The archive never preserves the answer to Ansun's question. That missing answer matters. What survives is not a resolved family edge; it is the fact that Feli is already somebody the room thinks needs placing.",
          "That is a much better first-week character beat than pretending the Tumbleweed was a literal genealogy chart. The house had only just finished waiting for the correct Feli account to come through the door, and now people were asking where he connected to Mugen inside UL's ridiculous family-tree grammar. The social move is quick: a newcomer stops being merely a username to provision and becomes a person the group is trying to locate inside an existing web of jokes, loyalties, and familiar people. The family language is doing what UL family language often did best — turning belonging into a stupid diagram before anyone had the decency to finish onboarding.",
          "The exact edge stays unresolved. The surviving text does not tell us whether Feli was eventually drawn as Mugen's child, sibling, cousin, pet rock, tax dependent, or nothing at all; it does not prove any literal family relation, a formal role, or an accepted pinned-tree state. The safe read is simpler and more human: within days, Feli had become socially placement-worthy. Somebody was already asking where he fit in the story."
        ]
      },
      ...base.sections.slice(1),
    ],
    closing: [
      ...(base.closing ?? []),
      "The September 29 Tumbleweed scene adds one important thing to the false-start entrance without solving the missing biography for us: almost immediately after Mugen finally gets the right Feli through the door, the room starts asking where he connects to her on its absurd family map. The relation itself never resolves in the surviving record. The speed of the question does. Feli had already gone from expected arrival to somebody the house was trying to place among its people."
    ]
  }
};
