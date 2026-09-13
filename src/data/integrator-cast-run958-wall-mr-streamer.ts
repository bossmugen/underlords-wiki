import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";
import "./integrator-cast-run964-wall-whiskey";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// A tiny Wall footprint can still be a coherent person footprint. Mr. Streamer
// barely narrates the exhibit; the one sentence he comes back to add is the
// provenance line that makes the whole receipt chain easier to understand.
if (!allCharacters.some((character) => character.id === "mr-streamer")) {
  const mrStreamer: ExtendedCharacter = {
    id: "mr-streamer",
    name: "Mr. Streamer",
    aliases: ["ulstreamer"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2022",
    logline:
      "Mr. Streamer is almost comically low-volume on Wall, but the extra sentence he bothers to add is exactly the useful one: `Via @DiStratus(Torr)`. He files the screenshots, labels the upstream source, and lets Torr's own stream confession explain why the receipts keep arriving.",
    tags: [
      "Archive cast",
      "Wall",
      "Receipt relay",
      "Source credit",
      "Provenance",
    ],
    relationships: [
      {
        name: "Torr",
        note:
          "On October 5, 2022 Mr. Streamer explicitly credits Torr while filing stream material to Wall; Torr later jokes that his stream is generating a lot of material. Their surviving connection here is source/relay familiarity, small and very legible.",
      },
    ],
    quotes: ["Via @DiStratus(Torr)"],
    claims: [
      "On October 5, 2022 Mr. Streamer drops a screenshot, comes back 4.759 seconds later with `Via @DiStratus(Torr)`, then files a second screenshot a few minutes later. The tiny sequence turns his sparse Wall presence into a specific habit: when he relays evidence, he bothers to say where it came from.",
      "Torr later says `XD i'm giving a lot of material with this stream`, making a Torr stream → Mr. Streamer → Wall route the likely shape of the pocket.",
      "The contradiction is the whole person read: almost no explanatory chatter, unusually deliberate source labeling. He behaves less like somebody trying to own the scene and more like the person quietly moving the exhibit into place with the credit still attached.",
    ],
    antiFanon: [
      "POSTED BY Mr. Streamer is confirmed for the two screenshot filings. Torr is the probable upstream source for the pocket because Mr. Streamer says `Via @DiStratus(Torr)` and Torr later names his stream as the source of Wall material. MADE BY, CAPTURED BY, FEATURING, and exact object-level authorship remain unresolved; the image binaries were not visually inspected.",
      "This pocket supports bounded source/relay familiarity with Torr. It does not establish an off-Wall closeness tier, standing permission, or a broader formal role.",
    ],
  };

  allCharacters.push(mrStreamer);
  characterById.set("mr-streamer", mrStreamer);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("mr-streamer")) {
    archiveCastGroup.characterIds.push("mr-streamer");
  }
}
