import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const existingIndex = allCharacters.findIndex(
  (candidate) => candidate.id === "abie" || candidate.name === "Abie",
);

const abie: ExtendedCharacter = existingIndex >= 0
  ? (allCharacters[existingIndex] as ExtendedCharacter)
  : {
      id: "abie",
      name: "Abie",
      billing: "legacy",
      role: "Archive-era Wall cast",
      era: "2021+",
      logline:
        "A microscopic Wall footprint with one extremely clear social instinct: when Mugen drags Abie into a bonus filing by name, the surviving answer is not a defense brief or an explanation. It is `😂😂😂`. Tiny sample, recognizable move — get summoned into the bit, laugh first.",
      tags: ["Archive cast", "Wall", "Low-volume", "Tease-safe", "Reaction-first", "Petty Crimes"],
      relationships: [
        {
          name: "Mugen",
          note:
            "Mugen directly singles Abie out with `Bonus: @Abie` and posts the adjacent receipt; Abie's only surviving authored Wall line in the pocket is `😂😂😂`. The useful relationship beat is bounded and simple: Mugen can pull her into the filing joke, and Abie's visible uptake is laughter rather than objection.",
          href: "/characters/mugen",
        },
      ],
      quotes: ["😂😂😂"],
      claims: [
        "Stable account 122551416349786112 anchors the surviving Abie Wall micro-footprint. In the current source slice, Mugen directly tags Abie with `Bonus:` immediately before posting a receipt, and Abie's sole surviving authored Wall message later in the same pocket is `😂😂😂`.",
        "The small but usable read is Wall-local: Abie appears tease-safe and laughter-first when directly pulled into the filing ritual. The dossier does not inflate two surviving occurrences into a broad personality diagnosis.",
      ],
      antiFanon: [
        "The adjacent image is visually uninspected. Mugen is POSTED BY only; CAPTURED BY, MADE BY, FEATURING, and the image subject remain unresolved.",
        "Abie's `😂😂😂` is adjacent participation rather than a structured Discord Reply, so the connection to the bonus filing is strong contextual framing, not reply-topology proof.",
        "One summons scene does not establish a closeness rank, formal role, recurring Wall habit, or anything about Abie's behavior outside this local teasing context.",
      ],
    };

if (existingIndex >= 0) allCharacters[existingIndex] = abie;
else allCharacters.push(abie);
characterById.set(abie.id, abie);
