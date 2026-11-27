import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const illienIndex = allCharacters.findIndex((character) => character.id === "illien");

const illienCharacter: Character = {
  id: "illien",
  name: "Illien",
  aliases: ["Euros", "eurosabraxas"],
  billing: "legacy",
  role: "Officer & Archive Cast",
  era: "2020+",
  logline:
    "Warm, useful, and refreshingly unwilling to bluff omniscience. Illien can deliberately keep his own chatter down so he does not add noise, answer when summoned, welcome a newcomer, admit he still gets lost, recruit people who know the map better, and then clock back into real life with `see you later loves ❤️`.",
  tags: [
    "Officer",
    "Low-interference participation",
    "Newcomer care",
    "Honest limits",
    "Warm exits",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "When Illien explains that he is staying quiet so he will not distract people, Mugen lightly rejects the premise: `they can distract themselves just fine illien`. The small pushback matters because it lets him take up space without turning the moment into a lecture or a rank performance.",
      href: "/characters/mugen",
    },
    {
      name: "Ansun",
      note:
        "While welcoming Allenne, Illien asks Ansun/Sou and Anthos to help with the tour because he still gets lost. He does not wait to be an expert before helping and does not pretend expertise once he is helping; he calls backup.",
      href: "/characters/ansun",
    },
    {
      name: "Anthos",
      note:
        "Illien recruits Anthos as practical tour backup, and a later work-boundary exit stays openly affectionate: Illien leaves with `see you later loves ❤️`; Anthos answers `work hard bb ❤️`.",
      href: "/characters/anthos",
    },
    {
      name: "Gilli",
      note:
        "Gilli can directly summon Euros and get an answer within seconds. The surviving June 2020 scene is small but clean: Illien is already listening, just deliberately trying not to add distraction.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "I'm not talking just to avoid distracting you 🙂",
    "would you guys help me with the tour? I still get a bit lost here LMAO XD",
    "Back to work for me then, see you later loves ❤️",
  ],
  claims: [
    "In June 2020 Illien explicitly says he is not talking because he wants to avoid distracting people; this is active restraint in one scene, not inference from message volume.",
    "In August 2020 he welcomes Allenne, then asks Ansun/Sou and Anthos to help with the tour because he still gets lost, combining initiative with an unusually casual admission that somebody else knows the map better.",
    "Later that month a Discord ping pulls him out of work long enough to hear an escape-room proposal; after approving it, he returns to work with `see you later loves ❤️`.",
  ],
  antiFanon: [
    "The June scene supports deliberate low-interference behavior in context; it does not establish a globally quiet, shy, private, or passive personality.",
    "Asking Ansun/Sou and Anthos for tour help is lived collaboration, not appointment chronology, hierarchy, or proof that Illien formally owned onboarding.",
    "The sender of Illien's August 27 ping remains unresolved; do not assign that summons to Gilli by adjacency.",
    "Rookie Cookie's later `critique me` line is not proven to target Illien, so no creative-critic role is claimed from temporal proximity.",
    "The current Louvre/Athenaeum assignment contains no indexed Illien media posts; that does not make him a non-artist, observer-only, minimalist, or `the quiet one`.",
  ],
};

if (illienIndex >= 0) {
  const illien = allCharacters[illienIndex];
  allCharacters[illienIndex] = {
    ...illien,
    ...illienCharacter,
    aliases: [...new Set([...(illien.aliases ?? []), ...(illienCharacter.aliases ?? [])])],
    tags: [...new Set([...(illien.tags ?? []), ...(illienCharacter.tags ?? [])])],
    quotes: [...new Set([...(illien.quotes ?? []), ...(illienCharacter.quotes ?? [])])],
    claims: [...(illien.claims ?? []), ...(illienCharacter.claims ?? [])],
    antiFanon: [...(illien.antiFanon ?? []), ...(illienCharacter.antiFanon ?? [])],
  };
} else {
  allCharacters.push(illienCharacter);
}

characterById.set("illien", allCharacters.find((character) => character.id === "illien")!);
