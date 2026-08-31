import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { ghosttNarrativeCharacterBios } from "./character-biographies-ghostt";

function beforeSection(base: CharacterNarrative, beforeTitle: string, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title === beforeTitle);
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index)],
  };
}

export const run43NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  new: {
    intro: [
      "New / Newmal is an Underlords member whose public record looks deceptively small if you only count the creative and game rooms where he happens to surface. His own explanation is much better: `Even if I don't appear often I still think I'm a part of UL.` New is one of the clearest people in the archive for separating visibility from belonging. He can vanish for a while, drift into another game, let Raja idle in the background, and still describe the same ridiculous social house as family.",
      "His route into that house also starts before the surviving UL room trail. GenGrey was a long-running online-game friend who introduced New to Mugs; Mugs then introduced him to Dean. That social chain is confirmed from New's own retrospective. It does not tell us who pressed an in-game admit button or when formal UL membership began, and this page does not pretend it does. What it gives us is the human route: one old game friend leads to another person, who leads to another person, and eventually the network becomes the place New says he cannot really imagine leaving unless he is made to feel unwanted."
    ],
    sections: [
      {
        period: "March 2023",
        title: "Even if I don't appear often",
        paragraphs: [
          "Asked what would make him stay in, leave, or come back to UL, New says he does not think he can `necessarily leave` because he is `bound by family bond`. Then he names the exact trap a thin archive can create: `Even if I don't appear often I still think I'm a part of UL.` He repeats the boundary from another angle. The thing that could actually break the attachment is not missing a login streak; it is being made to feel unwanted.",
          "The return answer is half confession, half self-defense through cartoon imagery. `Stepsis Mugs` might drag him back, or he might come wandering home like a `lost puppy` that chased a car and suddenly understood the consequences of its own terrible decision. Then he lands on `a home I didn't ever imagine would be a home.` New cannot simply say the place matters. He has to make himself the idiot dog first. The joke keeps the sentence from becoming greeting-card sludge; it does not make the sentence less sincere.",
          "He also explicitly separates UL from Dragon Raja: the fun can continue `whether in raja or not`, and he still wants the conversations even when he is not playing. That makes his low-volume room history much easier to read. Silence in one channel is not, in New's own model, the same thing as leaving the people."
        ]
      },
      {
        period: "March 2023",
        title: "Gen introduced me to Mugs who then introduced me to Dean",
        paragraphs: [
          "Later that month New tags Gen / GenGrey and calls her a `day 1` online-game companion and one of his longest close online friends. They bounced through other game communities and anime talk together, and New describes Gen introducing him to wider circles of mutuals as `random crackheads` setting off a `massive online meet of a new generation of crazy peeps`.",
          "Then he gives the clean chain: `Gen introduced me to Mugs who then introduced me to Dean.` Gen is therefore not merely another familiar name appearing beside New years later. She is a confirmed social bridge in his own account. The likely larger read is that Gen brought New into the wider network that became or contained his UL life. That remains a social-introduction story, not a forged formal recruitment receipt."
        ]
      },
      {
        period: "March 2023",
        title: "Raja is running. New is probably getting snacks.",
        paragraphs: [
          "New's ordinary Raja routine is almost aggressively unserious: launch the game, click a random quest without knowing what it is, throw red packets into chat, finish dailies, get snacks, chat in club, then probably go AFK for anime or another game. The verbs around the game are maintenance verbs. The warmer part of the sentence starts when snacks and people enter it.",
          "A week later he describes his own `random hiatus moments` and says his motivation is `To be involved in UL and his tumbleweed family.` Tumbleweed was already house language; New's line matters because he places himself inside it. Disappearing for stretches is not something he narrates as exile. It is already folded into the stupid family vocabulary he uses for staying connected.",
          "Small taste receipts keep him from turning into one giant continuity thesis. In the same month he lists anime, games, music, working out, cutting hair, dancing, friends and family, and `Trying to do something artsy`; says Bibim Gooksoo and Thai iced tea belong on the food list; and nominates a one-hour DBZ Abridged Saiyan Saga loop because it can `calm you down while pumping you up`. None of these are identity pillars. They are just the drawer full of normal human junk a real biography should have."
        ]
      },
      {
        period: "April 2026",
        title: "The next game does not have to become the next home",
        paragraphs: [
          "Where Winds Meet gives New a small later coda. The surviving assigned scene says, in safe paraphrase, that he liked the look of the game and its combat but could not keep at it or focus on it. Without the 2023 self-account, that could look like another member failing to migrate into the next game.",
          "New had already rejected that model years earlier. Games can rotate. He can go AFK. He can take another hiatus. UL can still be home `whether in raja or not`. WWM therefore does not need to rescue or replace anything. It gets to be a game New thought looked cool, played for a while, and maybe did not stick with. The house was somewhere else already."
        ]
      }
    ],
    closing: [
      "New's archive is a useful warning against confusing message volume with social weight. Four assigned creative/game-room messages made him look peripheral. New's own words say the opposite camera angle is the right one: he can be absent from view and still feel attached, because the belonging lives in people and acceptance rather than one game's activity bar.",
      "The best line in the file is still the simplest one: `a home I didn't ever imagine would be a home.` New immediately surrounds that feeling with lost puppies, random crackheads, snacks, hiatuses and Tumbleweed. Which is probably why the line survives sounding like him instead of sounding like the wiki wrote it for him."
    ]
  },

  zoshaa: {
    intro: [
      "Zoshaa is a Platelet and recurring UL character whose own origin story comes with a before-and-after label she supplied herself. At the beginning, she barely remembers talking. Later, apparently, she screams a lot and calls Snow old. The movement between those two versions matters more than a generic trait like `outgoing`, because Zoshaa remembers exactly who helped make the room feel less one-sided while she was still quiet.",
      "The door itself is now clean: `Started when Luna invited me to join.` Luna is the confirmed inviter. The next name Zoshaa singles out is Ren, not as a formal recruiter or mentor, but because Ren was one of the few people Zoshaa remembers talking to her early. The relationship is small in title and large in memory. When you barely remember talking, the voices that came toward you are the ones you remember later."
    ],
    sections: [
      {
        period: "Early UL / remembered in February 2022",
        title: "Luna opens the door; Ren is one of the first voices she remembers",
        paragraphs: [
          "Asked how she got into Underlords, Zoshaa says it plainly: `Started when Luna invited me to join`. The archive still does not supply the exact admission date, so her earliest surviving Louvre appearance remains an archive boundary rather than a fake join anniversary.",
          "Then the answer gets more human. `I didn’t really remember talking a lot at first.` Zoshaa says she came to appreciate the Officers, `especially Ren because she was one of few people I remembered talking to me at the beginning.` That does not turn Ren into an official sponsor. It gives her a better role in this particular biography: one of the people who bothered to speak across the quiet before Zoshaa had become fully comfortable taking up room herself."
        ]
      },
      {
        period: "February 2022",
        title: "She says something sincere and immediately tries to escape through the wall",
        paragraphs: [
          "After admitting Luna invited her in and Ren stood out early, Zoshaa appears to realize she has accidentally written feelings in public. Her solution is `That’s it never gonna reread my response byeee.` Then, after theatrically fleeing her own earnestness, she sneaks the punchline back into the message under strikethrough: `And now I scream a lot and call Snow old`.",
          "The formatting is part of the character beat. Sincere paragraph, emergency `byeee`, then the clown version peeking back through the door. The later screaming is Zoshaa's own description of the change. Calling Snow old reads as familiar teasing because she presents it as the ridiculous endpoint of getting comfortable, not as a grievance."
        ]
      },
      {
        period: "March 22, 2022",
        title: "The louder version is already making Snow litigate his own ears",
        paragraphs: [
          "WHOMSTF supplies a clean little middle scene. The challenge passes from player to player; Zoshaa gets the turn and describes somebody as `Catboy`, `Broke`, and a character who always wears glasses. Mugen guesses Snow. Correct. Snow immediately objects to the indictment: `HOW AM I BROKE`, then `and its DOG EARS`. Ansun points out the whaling problem in Snow's financial defense; Snow concedes `ok well mostly` and then notices, apparently in real time, `also I didnt realize I really do always wear glasses`.",
          "The scene is exactly the kind of comfortable social noise Zoshaa's retrospective was talking about. She is no longer standing at the edge wondering who will talk to her. She is defining Snow in three accusations and making him argue with his own character design. The clue is not objective biography — `broke` is clearly part of the roast — but the ease is real. By then Zoshaa can hand the room a caricature and trust Snow to fight back from inside the joke."
        ]
      }
    ],
    closing: [
      "Zoshaa's beginning therefore has a very clean social shape without needing a grand recruitment myth. Luna invites her. Zoshaa barely talks. Ren is one of the few early people she remembers speaking to her. Later Zoshaa's own proof that the room has become hers is that she is loud enough to heckle Snow recreationally.",
      "The assigned Louvre and Other Games body still has more middle to recover, especially the media-heavy creative side. But the direction is no longer missing. Zoshaa supplied it herself: didn't talk much. Now she screams."
    ]
  },

  ghostt: beforeSection(ghosttNarrativeCharacterBios.ghostt, "Later years / current file", {
    period: "January–February 2022",
    title: "Work uniform, MrBallen, and the conspiracy-theory lane",
    paragraphs: [
      "QOTD catches Ghostt outside screenshot court long enough to add two ordinary details. Asked about usual clothing, Ghostt says the ideal answer looks something like an attached image, `but since I work all the time it’s usually my uniform`. The picture is not visually inspected and the job is not named, so the wiki gets exactly what the sentence earns: work often puts Ghostt in a uniform. No profession, employer, schedule, or industry materializes from the word `uniform` by wishful thinking.",
      "A week later Gilli asks which YouTube channel people watch most. Ghostt answers `Mr ballen or conspiracy theories`. That is a much better taste receipt than trying to reverse-engineer personality from the Wall. The concise delivery is the same, but now the subject is just what ends up on the screen. MrBallen and conspiracy-theory content sit comfortably beside the older `It’s a conspiracy` joke without turning the joke into proof that every conspiracy line was a sincere belief.",
      "The pairing also rounds out the archive's picture of Ghostt nicely. The Wall mostly catches the person after attention has landed — shrug, sip, compact defense. QOTD catches the quieter furniture around that life: work clothes, something strange playing on YouTube, then back to the room. It is not a giant revelation. It is exactly the kind of normal detail that keeps a recurring character from becoming six reaction emotes in a trench coat."
    ],
  }),
};
