import { deepWolfOfficerCharacterBios } from "./character-bios-officers-wolf-deep";

const base = deepWolfOfficerCharacterBios.wolfphenix;

export const run37WolfOfficerCharacterBios = {
  wolfphenix: {
    ...base,
    overview: [
      ...base.overview,
      "Run 37 adds a useful limit to the easy `Wolf preserves things` story. Wolf later resurfaces an old Haunted Night poster and Ren recognizes herself and Ansun in it. That is a clean retrieval scene: Wolf brings an old people-bearing artifact back into the room and the people inside it can recognize themselves. It does **not** make Wolf the original maker, photographer or editor. Retrieval is enough. The social object becomes alive again because somebody in the present can point at it and say, essentially, *that's us*.",
      "Then the late Dragon Raja file does something more interesting than simple nostalgia. In June 2025, when the old club's options are merger or full disband, Wolf favors ending it cleanly and calls that more `✨UL ting✨`. Read beside the poster archaeology, the distinction is surprisingly coherent: memory worth carrying forward is not the same thing as an institution worth keeping alive at any cost. Wolf seems perfectly willing to preserve the artifact that lets people recognize one another while also letting a dying game-club shell end if a merger would feel less recognizably UL than closure. That is a probable cultural read, not a constitutional doctrine, but the two scenes rhyme too well to flatten into `nostalgic officer`."
    ],
    history: [
      ...(base.history ?? []),
      {
        date: "2024",
        title: "The game-side role still has a live room",
        text: "Sye identifies Wolf as the in-game Dragon Raja President during the low-activity period. Later, Wolf welcomes Yassr into DR Game HQ and explains that the room is `for active in game officers`. These receipts ground real game-side responsibility in that period without backdating the original appointment from exporter metadata."
      },
      {
        date: "2025",
        title: "More ✨UL ting✨ means letting the old club end",
        text: "When a dying Dragon Raja club is weighing merger against full disband, Wolf favors full disband and calls it more `✨UL ting✨`. The line is useful because it comes from someone with deep founding-era and game-side continuity. Institutional survival is apparently not automatically the same thing as preserving UL. The exact surrounding alternatives stay bounded to this Raja decision; the quote is not a universal anti-merger rule."
      },
      {
        date: "Later archive recovery",
        title: "The Haunted Night poster comes back because people are still in it",
        text: "Wolf resurfaces an old Haunted Night poster; Ren recognizes herself and Ansun. Wolf is the later retriever/reposter. Original creation, photography and editing remain unresolved. The human point survives without those credits: an old artifact becomes useful again because living members can still find themselves inside it."
      }
    ],
    characterNotes: [
      ...(base.characterNotes ?? []),
      {
        title: "Preserve the people-bearing memory, not every shell",
        text: "The Haunted Night retrieval and the 2025 `more ✨UL ting✨` disband judgment suggest a useful distinction in Wolf's continuity instinct. She keeps resurfacing objects that help the room recognize itself, while the late Raja decision shows no obligation to keep an obsolete institutional container alive merely because it is old. Probable read: continuity lives more in recognizable people and memory than in preserving every legacy structure."
      }
    ],
    canonNotes: [
      ...(base.canonNotes ?? []),
      "Wolf's later Haunted Night retrieval proves later retrieval/reposting, not original authorship, photography, capture, or editing.",
      "The 2025 `more ✨UL ting✨` line supports Wolf's judgment in that specific disband-versus-merge context; it is not a formal UL constitutional rule.",
      "2024 game-side President / DR Game HQ evidence is period role/access context, not a retroactive appointment date."
    ]
  }
} as const;
