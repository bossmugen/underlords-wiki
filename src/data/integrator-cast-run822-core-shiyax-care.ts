import { wikiPages } from "./content";

const shiya = wikiPages.find((page) => page.type === "Cast" && page.id === "shiyax");

if (shiya) {
  shiya.focus = "Cast · early era · Whiskey doorway · social chaos · Screenshot Court";
  shiya.logline =
    "Yaya can redirect a room, proudly declare `I AM THE CHAOS`, become a theatrical Wall defendant, and still notice the instant a joke might have landed on something real. His chaos is social, not careless.";

  shiya.summary = [
    "ShiyaX—usually Shiya, and Yaya in the older social texture—is one of the early-room characters whose personality shows up most clearly in transitions. He does not need a long speech to change the room's shape. In one Daycare pocket, when the conversation starts spilling across channels, Shiya simply sends everyone toward Whiskey. Then, before the room fully moves, he checks whether Baby Lyssa is joining. The useful part is the sequence: first solve the logistics, then make sure the person comes with them. He can sound bossy because the sentence is small; the follow-up makes it warmer.",
    "This is the same person who answers Hami's `u missed the chaos` with `I AM THE CHAOS`. The line works because Shiya is not merely being described by everybody else; he is actively feeding the reputation himself. Hami learns that blaming Shiya is reusable social shorthand, and Shiya keeps making the joke easier to reuse.",
    "Kiro brings out the defendant version of the same energy. When Kiro announces that Shiya is going on the Wall of Shame, Shiya erupts into `STOPPPPPPP` and `KIRO IS MEAN TO ME T_____________________T`. Kiro's answer is essentially malicious typesetting: he stretches the filing out across `is going` / `to` / `wall` / `of` / `shame`. Shiya's protest reads as participation in the bit rather than actual distance. He is outraged in exactly the way that gives Kiro more material.",
    "Shiya's chaos also has a brake pedal. In one Daycare exchange, the tone turns hard enough that he stops performing for the room and checks Mia directly: `u good mia?` comes before `did that really happen to you?`. That order is the tell. Curiosity waits behind the person. The same Shiya who can proudly declare himself the chaos is still tracking whether somebody on the other side of the joke is actually okay.",
    "Mio gets a different register out of him: affectionate shorthand with enough ease to survive a sharp joke. Mio can call Shiya `Bby` and `best of friends`, then threaten to share all his secrets. The mock-blackmail lands inside affection, not instead of it. Elsewhere Shiya dreams that dance practice destroys the floor three times and comes away most impressed by how hard the imaginary workers are grinding. Taken together, the contradiction is the point: practical, ridiculous, theatrical, and still paying attention to people."
  ];

  shiya.tags = [
    "Member House",
    "Yaya",
    "Room Redirector",
    "I AM THE CHAOS",
    "Screenshot Court Defendant",
    "Whiskey Doorway",
    "Person Before Spectacle"
  ];

  shiya.relationships = [
    {
      name: "Baby Lyssa",
      href: "/characters/baby-lyssa",
      note: "Shiya can bark out the move to Whiskey and then immediately check whether Baby Lyssa is coming too. The logistics land first; the social check follows right behind."
    },
    {
      name: "Hami",
      note: "Hami repeatedly treats Shiya as a reusable chaos suspect. Shiya helps by literally declaring `I AM THE CHAOS`, turning blame into a shared piece of shorthand rather than a one-off accusation."
    },
    {
      name: "Kiro",
      note: "Kiro files him; Shiya performs defendant outrage; Kiro keeps going. `KIRO IS MEAN TO ME` functions less like a relationship rupture than like permission for the joke to acquire another five messages."
    },
    {
      name: "Mia",
      note: "When a Daycare story stops sounding purely funny, Shiya checks Mia herself before chasing the story: `u good mia?` first, then `did that really happen to you?`. The useful thing is the priority, not the private details of what Mia was talking about."
    },
    {
      name: "Mio",
      note: "Mio can call Shiya `Bby` and `best of friends`, then swing straight into mock-blackmail about sharing his secrets. Affection and sharp teasing live comfortably in the same register; `best` is Mio's wording here, not an exclusive friendship ranking."
    }
  ];

  shiya.episodes = [
    {
      title: "The Whiskey doorway",
      summary:
        "When Daycare starts overflowing, Shiya redirects the room toward Whiskey and then checks whether Baby Lyssa is joining. It is tiny operating behavior, but revealing: he fixes the traffic problem without losing the person in the move.",
      refs: ["Daycare 2021-03-08"]
    },
    {
      title: "Defendant versus dramatic pagination",
      summary:
        "Kiro announces a Wall filing; Shiya answers with `STOPPPPPPP` and `KIRO IS MEAN TO ME`; Kiro retaliates by dragging `is going / to / wall / of / shame` across separate messages. The filing becomes the tease.",
      refs: ["Wall 2020-08-23"]
    },
    {
      title: "Person before spectacle",
      summary:
        "A hard turn in Daycare makes Shiya drop the performance long enough to ask Mia whether she is okay and whether the story really happened. He checks the person before interrogating the premise, then lets the room move on without turning her private context into entertainment.",
      refs: ["Daycare 2020-11-03"]
    }
  ];

  shiya.gags = [
    "Calling himself `I AM THE CHAOS` and then behaving as though everybody else weaponizing that statement is an injustice.",
    "Becoming dramatically persecuted the moment Screenshot Court notices him.",
    "Dreaming that dance practice destroys the floor three times, then being most impressed by the imaginary workers replacing it."
  ];

  shiya.quotes = [
    "Take it to #...whiskey-room guys",
    "i invited lyssa is she coming",
    "I AM THE CHAOS",
    "STOPPPPPPP",
    "KIRO IS MEAN TO ME T_____________________T",
    "u good mia?",
    "did that really happen to you?",
    "I was more impressed like, damn they're working hard XD"
  ];

  shiya.claims = [
    "Run 822 keeps ShiyaX/Yaya anchored to stable Discord account 341219730025349130 (`shiyax97`) across the Daycare and Wall source families used here.",
    "A 2021-03-08 Daycare sequence shows Shiya redirecting the spilling conversation to the Whiskey room and then asking whether Baby Lyssa is coming.",
    "A separate Hami exchange preserves Shiya answering `u missed the chaos` with `I AM THE CHAOS`; the line is treated as self-fed reputation, not a formal role.",
    "An exact Wall chain on 2020-08-23 shows Kiro announcing the filing, Shiya responding `OMG`, `STOPPPPPPP`, and `KIRO IS MEAN TO ME T_____________________T`, then Kiro stretching the filing through `is going` / `to` / `wall` / `of` / `shame`.",
    "On 2020-11-03 Shiya asks Mia `u good mia?` and then `did that really happen to you?`; the public character value is Shiya's check-in sequence, not Mia's private or sensitive context.",
    "A separate exchange has Mio call Shiya `Bby` and `best of friends` before joking about sharing his secrets; the wording supports lived affection plus teasing, not exclusivity or a literal threat.",
    "A Shiya-authored dream account has dance practice repeatedly breaking the floor; his punchline is admiration for how hard the imaginary workers are working.",
    "`Member House` remains an affiliation/role label only; these excerpts do not establish its appointment chronology.",
    "The Kiro exchange is read as reciprocal teasing because Shiya continues participating in the Wall bit; it is not promoted to literal hostility.",
    "No identity bridge is inferred for Kiro beyond the stable account attached to Kiro's own Wall posts."
  ];

  shiya.antiFanon = [
    "Do not turn `I AM THE CHAOS` into governance, rank, or evidence that every later mess belongs to Shiya.",
    "Do not turn `KIRO IS MEAN TO ME` into literal hostility without support beyond the reciprocal Wall bit.",
    "Do not publish or reconstruct Mia's private/sensitive circumstances from the 2020-11-03 check-in; Shiya's behavior is the relevant public material.",
    "Do not turn Mio's `best of friends` wording into an exclusive friendship ranking or the secrets joke into a literal threat.",
    "Do not infer Shiya's exact Member House appointment date from later/current role arrays.",
    "Do not add private/safety-sensitive details or infer identities from similar display names."
  ];
}
