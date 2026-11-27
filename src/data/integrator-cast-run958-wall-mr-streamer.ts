import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";
import "./integrator-cast-run964-wall-whiskey";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// Mr. Streamer is economical with words and generous with exhibits. The wider
// Wall slice turns the old source-credit pocket into a person-shaped pattern:
// he likes dropping the visual premise, letting everybody else panic about it,
// and staying socially inside the joke when the camera rotates back toward him.
if (!allCharacters.some((character) => character.id === "mr-streamer")) {
  const mrStreamer: ExtendedCharacter = {
    id: "mr-streamer",
    name: "Mr. Streamer",
    aliases: ["ulstreamer"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2021–2022",
    logline:
      "Mr. Streamer is a compact visual-punchline carrier: drop the image, add `1` or `hmm` if absolutely necessary, and let everyone else discover why they should be afraid. He can be the filer, the reaction target, or the person quietly adding `Via @DiStratus(Torr)` after the fact; the through-line is that he rarely over-explains a scene that the room is already willing to ruin for him.",
    tags: [
      "Archive cast",
      "Wall",
      "Visual punchlines",
      "Receipt relay",
      "Source credit",
      "Low-caption posting",
      "Tease-safe",
      "Provenance",
    ],
    relationships: [
      {
        name: "Torr",
        note:
          "On October 5, 2022 Mr. Streamer explicitly credits Torr while filing stream material to Wall; Torr later jokes that his stream is generating a lot of material. Their surviving connection here is source/relay familiarity, small and very legible.",
      },
      {
        name: "Alkey",
        note:
          "When Mr. Streamer files `wow amazing tits`, Alkey answers `Oh trust me they look amazing`; Streamer stays inside the bit with an emote and then `ill give it to you next time bby`. The exchange reads as easy public riffing, not a literal sexual or romantic claim.",
      },
      {
        name: "Mugen",
        note:
          "Mr. Streamer's low-caption filings repeatedly leave Mugen to verbalize the danger for the room. The cleanest version is an image captioned only `1`, followed immediately by Mugen's `I'm afraid to ask why number one.....` — exactly the kind of handoff his Wall style seems built for.",
        href: "/characters/mugen",
      },
    ],
    quotes: [
      "Via @DiStratus(Torr)",
      "wow amazing tits",
      "ill give it to you next time bby",
      "1",
      "hmm",
      "wut",
      "its shiya!",
    ],
    claims: [
      "Across September–November 2021, Mr. Streamer repeatedly posts images with either no prose or tiny captions such as `1`, `hmm`, `wut`, and `its shiya!`; Mugen, Alkey, Random, ShiyaX, oyiemaster, and Jumanji supply much of the surrounding verbal reaction. The cumulative read is low-caption visual-punchline carrier rather than silent bystander.",
      "The September 3, 2021 `wow amazing tits` pocket shows the camera can turn back toward Mr. Streamer without breaking the bit: Alkey escalates, Random adds `old man boobs`, and Streamer answers with an emote and `ill give it to you next time bby` instead of withdrawing from the teasing.",
      "A later filing is captioned only `1`; Mugen immediately replies `I'm afraid to ask why number one.....`. Another gets only `hmm` before somebody answers `Please don't fuck the pig`. Mr. Streamer's comedy often lives in how little setup he supplies before everyone else starts doing the work for him.",
      "On October 5, 2022 Mr. Streamer drops a screenshot, comes back 4.759 seconds later with `Via @DiStratus(Torr)`, then files a second screenshot a few minutes later. The sequence adds a different kind of economy: when provenance matters, the extra sentence he bothers to add is the useful one.",
      "Torr later says `XD i'm giving a lot of material with this stream`, making a Torr stream → Mr. Streamer → Wall route the likely shape of that 2022 pocket.",
      "The contradiction is the whole person read: he can look almost laconic while posting, but he is not socially absent. He repeatedly supplies the object that makes the room react, remains tease-safe when the joke points back at him, and sometimes returns specifically to preserve the source credit.",
    ],
    antiFanon: [
      "Mr. Streamer's image posts establish POSTED BY Mr. Streamer. The screenshots and joke captions do not by themselves identify the visual subject, photographer, maker, sexuality, relationship status, or any literal sexual act.",
      "The September 2021 sexualized captions and replies are public joke context. They are not evidence of literal romance, sex, orientation, or consent outside the bit.",
      "For the October 5, 2022 pocket, Torr is the probable upstream source because Mr. Streamer says `Via @DiStratus(Torr)` and Torr later names his stream as a source of Wall material. MADE BY, CAPTURED BY, FEATURING, and exact object-level authorship remain unresolved; the image binaries were not visually inspected.",
      "The Torr pocket supports bounded source/relay familiarity. It does not establish an off-Wall closeness tier, standing permission, or a broader formal role.",
    ],
  };

  allCharacters.push(mrStreamer);
  characterById.set("mr-streamer", mrStreamer);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("mr-streamer")) {
    archiveCastGroup.characterIds.push("mr-streamer");
  }
}
