import type { PublicCharacterBio } from "./character-page-data";
import { run608IntakeBios } from "./character-bios-run608-intake";

const noetherBase = run608IntakeBios.noether;

export const run608CanonBios: Record<string, PublicCharacterBio> = {
  noether: {
    ...noetherBase,
    dek: "Current Game Officer with two suspiciously compatible talents: turning fuzzy process into the next concrete action, and turning one dumb phrase into enough shared vocabulary to survive for years.",
    history: [
      {
        date: "Mar. 2020",
        title: "Apparently the person to tag is Noether",
        text: "A cluster of early task and onboarding questions keeps landing in Noether's lane. Forms get linked, vouches get routed, provisional mechanics get answered and, when the room asks who should be tagged, the answer lands on `well, its me`. The work is visible; an appointment date is not reverse-engineered from it."
      },
      ...(noetherBase.history ?? []).slice(1)
    ],
    roleNotes: [
      "Current primary shelf: Game Officers.",
      "Earlier process-room work shows lived responsibility without supplying an appointment date or moving Noether onto the current Sniper shelf."
    ],
    canonNotes: [
      ...(noetherBase.canonNotes ?? []),
      "Current public role: Game Officer. Historical work language does not override the corrected current roster."
    ]
  }
};
