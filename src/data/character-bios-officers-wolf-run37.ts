import { deepWolfOfficerCharacterBios } from "./character-bios-officers-wolf-deep";

const base = deepWolfOfficerCharacterBios.wolfphenix;

export const run37WolfOfficerCharacterBios = {
  wolfphenix: {
    ...base,
    overview: [
      ...base.overview,
      "Run 37 adds a useful limit to the easy `Wolf preserves things` story. Wolf later resurfaces an old Haunted Night poster and Ren recognizes herself and Ansun in it. That is a clean retrieval scene: Wolf brings an old people-bearing artifact back into the room and the people inside it can recognize themselves. It does **not** make Wolf the original maker, photographer or editor. Retrieval is enough. The social object becomes alive again because somebody in the present can point at it and say, essentially, *that's us*.",
      "Then the late Dragon Raja file does something more interesting than simple nostalgia. In June 2025, when the old club's options are merger or full disband, Wolf favors ending it cleanly and calls that more `✨UL ting✨`. Read beside the poster archaeology, the distinction is surprisingly coherent: memory worth carrying forward is not the same thing as an institution worth keeping alive at any cost. Wolf seems perfectly willing to preserve the artifact that lets people recognize one another while also letting a dying game-club shell end if a merger would feel less recognizably UL than closure. That is a probable cultural read, not a constitutional doctrine, but the two scenes rhyme too well to flatten into `nostalgic officer`.",
      "Wall gives that quiet-duty reputation a much dumber everyday form: Wolf keeps getting framed as the person who supports. In one old game-side pocket Wolf simply says `am heals`; Tsumi answers by calling Wolf the `best death healer`. Years later Bailey is still telling Wolf `you heal, ok?` and then `Yess thats my healer`. The exact game class is not the point and stays unresolved. The social reflex is more durable: when Gilli abruptly says `@WhiteWolf Walk my dog`, Wolf's first answer is `I can do that`—and only then comes `*kicks dog*`. Help first, sabotage the dignity second. Even Wolf's self-preservation jokes fit the same contradiction: useful enough to be somebody's healer, unserious enough to insist `Ey im not dying first` once the room starts killing everybody.",
      "The Wall also catches a version of Wolf that disappears if somebody counts only authored messages. She reacts to a ShiyaX filing months before her first surviving Wall line, and reaction piles keep carrying her account more than a year after her last surviving authored line. In the middle, the room casually invokes `wolfie` as shared shorthand while Wolf herself contributes two `Fat_Wheeze`s and lets everybody else do the prose. That gap is the character beat: Wolf can be nearly silent in the text column and still remain a recognizable gallery regular. Low authorship is not low presence when people notice you arriving, use your nickname without explanation, and keep finding your laugh in the room after your own sentences have gone quiet."
    ],
    history: [
      ...(base.history ?? []),
      {
        date: "2021–2023",
        title: "The gallery seat stays occupied after the text box goes quiet",
        text: "Wolf's recovered Wall reactions begin before her first surviving authored Wall line and continue more than a year after her last. A 2022 cluster makes the social meaning legible: Anayss notices what she thinks is Wolf coming online, the room uses `wolfie` as an understood comparison, and Wolf's own contribution is only two `Fat_Wheeze` emojis. The pattern supports durable reaction-native presence and recognizability, not a friendship ranking or a claim that every serialized reaction object is a separate scene."
      },
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
        title: "Near-silent author, durable gallery regular",
        text: "Wolf's Wall footprint is much larger socially than it looks in authored prose. Reactions survive on both sides of her small direct-message window, and peers use `wolfie` shorthand while she often answers with emotes rather than explanation. The useful contradiction is quiet text production versus persistent, recognizable audience presence."
      },
      {
        title: "Preserve the people-bearing memory, not every shell",
        text: "The Haunted Night retrieval and the 2025 `more ✨UL ting✨` disband judgment suggest a useful distinction in Wolf's continuity instinct. She keeps resurfacing objects that help the room recognize itself, while the late Raja decision shows no obligation to keep an obsolete institutional container alive merely because it is old. Probable read: continuity lives more in recognizable people and memory than in preserving every legacy structure."
      },
      {
        title: "Support instinct, immediately vandalized",
        text: "Recurring healer language and the Gilli dog-walking exchange land on the same Wolf mechanism from opposite directions. Wolf is easy to cast as support because the practical yes comes quickly; the joke arrives just as quickly to stop usefulness from turning into solemnity. `I can do that` becoming `*kicks dog*` is basically the operating system in two messages."
      }
    ],
    canonNotes: [
      ...(base.canonNotes ?? []),
      "Wolf's Wall reaction persistence supports continued participation and recognizability; reaction counts are not separate scenes, friendship rankings, or importance scores.",
      "Wolf's later Haunted Night retrieval proves later retrieval/reposting, not original authorship, photography, capture, or editing.",
      "The 2025 `more ✨UL ting✨` line supports Wolf's judgment in that specific disband-versus-merge context; it is not a formal UL constitutional rule.",
      "2024 game-side President / DR Game HQ evidence is period role/access context, not a retroactive appointment date.",
      "Recurring `am heals` / `my healer` language supports lived support texture; it does not by itself establish a fixed game class, formal assignment, or leadership role."
    ]
  }
} as const;
