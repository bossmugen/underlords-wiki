import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// Stable Discord account 694305194476830720 appears as Rosario17 / Yazaki in
// the reviewed Lobby + Wall packet. The stable account is the identity bridge;
// similar display names elsewhere are not.
if (!allCharacters.some((character) => character.id === "yazaki")) {
  const yazaki: ExtendedCharacter = {
    id: "yazaki",
    name: "Yazaki",
    aliases: ["Rosario17"],
    billing: "legacy",
    role: "Archive-era cast",
    era: "2020–2021",
    logline:
      "Yazaki is easy company without being infinitely available. She laughs through awkward little room moments, greets people plainly, joins jokes with warm reactions, and can decline a personal question without turning the whole conversation into a crisis. The useful contradiction is simple: socially open does not mean open access.",
    tags: [
      "Archive cast",
      "Main Lobby",
      "Wall",
      "Warm reactions",
      "Clear boundaries",
    ],
    relationships: [
      {
        name: "Mugen",
        note:
          "A December 2020 Wall exchange catches Yazaki in her natural register: Mugen posts a screenshot, Yazaki answers `Nice idea 😀😂`, then follows with more laughter. The image itself is unresolved, so the point is the social motion—she sees the premise, likes it, and joins in without needing a speech.",
      },
      {
        name: "Rooks",
        note:
          "When Rooks drops `I’m a child don’t judge me`, Yazaki answers about half a minute later with laughter and `Ok that nice to know 😄`. It is a small scene, but a useful one: her instinct is amused acceptance rather than making the other person squirm harder.",
      },
    ],
    quotes: [
      "Hello!",
      "Nice idea 😀😂",
      "Ahahahva. Ok that nice to know 😄",
    ],
    claims: [
      "Yazaki's doorway energy is notably low-friction. A misunderstanding over `IGN` briefly sends the conversation toward Instagram; once Gilli clarifies that she means the Dragon Raja name, Yazaki laughs, apologizes, and gives `Yazaki`. She is comfortable being a little embarrassed without making the room pay for it.",
      "Her friendliness has an edge to it in the best way: access is still hers to set. During onboarding, when the room asks for a personal detail she does not want to provide, she keeps the refusal light, holds it anyway, and remains socially present after the question is dropped. She does not need a dramatic exit in order for `no` to count.",
      "That same ease carries into Wall traffic: a plain `Hello!`, appreciative reactions, laughter, and quick replies. The footprint is still developing, but the voice is already recognizable—warm, concise, and perfectly capable of keeping something for herself.",
    ],
    antiFanon: [
      "Stable account 694305194476830720 is the identity bridge for Rosario17 / Yazaki in this reviewed packet. Do not infer additional identity bridges from similar names alone.",
      "Do not publish or infer Yazaki's age, age bracket, club, or reason for declining the onboarding question. Export-time/current role arrays are not appointment chronology and do not fill those gaps.",
      "Yazaki's soft refusal supports a person-level boundary read. It does not establish anxiety, a diagnosis, secrecy as a defining trait, or any specific motive for withholding the detail.",
      "The December 2020 Mugen screenshot was not visually inspected in this run. Keep POSTED BY separate from MADE BY, CAPTURED BY, and FEATURING, and do not describe the unseen image.",
      "A prior Whiskey pass has Woohyuk directly sharing a YouTube link to Yazaki, but no provenance-safe Yazaki response was recovered here. Keep that as a one-way media-sharing seam unless later material supplies reciprocity.",
      "The current Lobby threshold and first surfaced Wall line are surviving-record boundaries, not guaranteed absolute origins. Do not manufacture a join date or disappearance arc from them.",
      "This packet supports no formal UL role for Yazaki.",
    ],
  };

  allCharacters.push(yazaki);
  characterById.set("yazaki", yazaki);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("yazaki")) {
    archiveCastGroup.characterIds.push("yazaki");
  }
}
