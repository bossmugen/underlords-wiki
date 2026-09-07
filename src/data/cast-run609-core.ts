import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const addIfMissing = (character: Character) => {
  if (!allCharacters.some((candidate) => candidate.id === character.id)) allCharacters.push(character);
};

// Run 609 — Core Rooms / Lobby. Julian's surviving doorway scene is small but
// person-shaped: the theatrical entrance and practical receptiveness happen in
// the same breath. Sensitive demographic onboarding detail stays backstage.
addIfMissing({
  id: "julian",
  name: "Julian",
  billing: "guest",
  role: "Lobby-era cast",
  era: "2020",
  logline:
    "Julian arrives at full volume — `HEY GIRLIES!`, `muah`, the whole entrance — but the performance is not avoidance: when Gilli explains how the room works, Julian answers `period period, noted` and actually takes the note.",
  tags: ["Lobby", "2020", "Camp entrance", "Socially eager", "Petty Crimes"],
  relationships: [
    {
      name: "Gilli",
      note: "Gilli meets Julian's theatrical arrival with practical room orientation; Julian keeps the same register while answering `period period, noted`. The useful contrast is that the camp entrance and the willingness to listen are the same person, not competing versions of Julian.",
      href: "/characters/gilli",
    },
    {
      name: "Ren",
      note: "Ren gives Julian a direct welcome later in the same doorway cluster and Julian answers warmly rather than dropping the entrance bit once the room starts talking back.",
      href: "/characters/ren",
    },
    {
      name: "Mugen",
      note: "Mugen also welcomes Julian directly; Julian reciprocates, making the arrival feel socially eager rather than like a one-line performance thrown into an empty room.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "HEY GIRLIES! its ya girl fenty, hoppin on with the undalords girlies and wanna get to know yall! muah",
    "period period, noted",
  ],
  claims: [
    "On April 16, 2020 Julian opens in the Lobby with a deliberately theatrical greeting, receives practical orientation from Gilli, and explicitly acknowledges it before later reciprocal welcomes with Ren and Mugen.",
  ],
  antiFanon: [
    "`ya girl fenty` is performed wording in the entrance, not a separate identity claim.",
    "Sensitive demographic self-report from the onboarding sequence is intentionally excluded from public derivative copy.",
    "The nearby video is POSTED BY Julian only; maker, capturer and depicted subjects are not inferred from the post.",
  ],
});
