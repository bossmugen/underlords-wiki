import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run50NarrativeCharacterBios } from "./character-biographies-run50";
import { run50ExtendedNarrativeCharacterBios } from "./character-biographies-run50-extended";

function append(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

export const run52NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  gilli: append(run50NarrativeCharacterBios.gilli, {
    period: "June 2021",
    title: "Put eight hearts around the ban rule and call it hospitality",
    paragraphs: [
      "The Underlords Kahoot is a very Gilli kind of administrative object: cute, loud, competitive, and absolutely not confused about procedure. The public announcement promises prizes, true/false and quick questions `to see if you really know your club`, and first-come limited slots. Then the velvet rope appears. One attempt. Use your IGN. The crew list gets checked. No alts. Duplicate names get warned, and a second warning means no future games. Gilli's version of making rules approachable is apparently to surround the whole thing with hype and hearts without weakening a single consequence.",
      "Leadership had planned the Kahoot collectively, so Gilli does not get rewritten as its sole inventor. Her part is cleaner and more character-shaped anyway: she is the public operator/announcer who turns a potentially fussy knowledge quiz into something people can understand quickly enough to actually join. The rules are strict because the event needs them. The delivery is friendly because *people* need that.",
      "It also fits her recurring interest in turning UL itself into something the group can play with. This is not trivia for trivia's sake; the stated point is whether you really know your club. The house has accumulated enough shared language, people, habits, and lore that self-knowledge can now become a game board. Gilli helps make the bureaucracy usable and the mythology playable at the same time."
    ]
  }),

  ren: append(run50NarrativeCharacterBios.ren, {
    period: "2022",
    title: "Officer work looks like hosting, not standing on the balcony",
    paragraphs: [
      "Mugen's February Officers Challenge announcement names that month's first dare as `hosted by @RΣN`. The actual dare payload is not preserved cleanly enough to pretend we know Ren's hosting style from that event alone, but the role is useful because it turns `Officer` into a verb. Ren is not merely wearing the title in a roster. She is one of the people taking a house program and carrying an installment of it for everybody else.",
      "That sits neatly beside the parts of Ren everybody remembers more easily — the screenshots, old stories, names, gifts, and instant retrieval. Her social memory is not passive collecting. It repeatedly becomes something other people can use: an old receipt, a remembered preference, a hosted challenge, the answer to `do we still have that?`. Ren's version of continuity often looks like having the next object ready before the room realizes it has asked for one."
    ]
  }),

  moon: append(run50NarrativeCharacterBios.moon, {
    period: "2021",
    title: "She does not need to start the game to become part of the steering committee",
    paragraphs: [
      "Moon describes one stretch of game life with `I only play when someone asks me to`, which is a useful correction to any version of her that turns every social room into a personal project. Sometimes her participation is responsive. Somebody asks; Moon appears. The initiative can belong to somebody else without making her socially passive once she is there.",
      "Once activated, however, the commentary arrives at full Moon volume. `YOU KEEP SENDING US ALL THE WRONG WAY` is followed later by `I— @everyone gone wrong this round 🤣`, with Kao jumping into the laughter. That combination is more revealing than a generic `likes group games` tag. Moon can be low-ceremony about *starting* the activity and extremely involved in the room once the activity exists: show up because somebody asked, notice the collective failure immediately, and make the failure part of the fun before anyone has time to be embarrassed about it.",
      "It is the same social instinct that later makes her good at noticing whether a branch feels alive. Presence matters to Moon, but she does not always need to be the person who creates the occasion. Sometimes the contribution is simply answering the summons and then yelling accurate things about everybody's terrible sense of direction."
    ]
  }),

  "qin-mu": append(run50ExtendedNarrativeCharacterBios["qin-mu"], {
    period: "2021",
    title: "The missing goes both ways",
    paragraphs: [
      "Qin-Mu's later `I need a guild lol I miss you guys` return has an earlier echo that makes the attachment feel reciprocal rather than one-sided nostalgia. In 2021 he posts game media with `I miss you guys`. Mugen answers, `I have missed you Qin`, and Qin comes back with `I have missed everyone and you too mugi`.",
      "The exchange is almost aggressively uncomplicated. Nobody needs a formal reunion speech, explanation for the gap, or proof that every person in the room occupied the same level of closeness. Qin says he misses the group; Mugen answers him personally; he widens the affection back to everyone and then returns it to her. The important social fact is mutual recognition after absence. He is not merely someone who remembers UL later. UL remembers him back.",
      "That makes the 2025 Where Winds Meet search feel less like a sudden rediscovery. A new game gives him a practical reason to look for the old name again, but the emotional route was already legible years earlier: disappear from the immediate room, miss the people, come back talking as if the missing itself is understood."
    ]
  })
};
