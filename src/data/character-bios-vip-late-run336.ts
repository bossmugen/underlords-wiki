import { lateVipCharacterBios } from "./character-bios-vip-late";

export const run336VipCharacterBios = {
  woosung: {
    ...lateVipCharacterBios.woosung,
    claims: [
      ...(lateVipCharacterBios.woosung.claims ?? []),
      {
        text: "On April 8, 2020, Sitama introduced herself in Lobby as `sitama from amaurot`; after Snow handled role/access setup, WOO authored `SITAMAAAAAA` and `HIIIII`, Sitama answered `HIIIIIIIIIIII WOOOOOOOOOOOO`, and WOO followed with `Hiiiiiii`.",
        evidence: "lobby",
        date: "2020-04-08",
      },
    ],
    canonNotes: [
      ...lateVipCharacterBios.woosung.canonNotes,
      "The Sitama/WOO recognition exchange strongly supports prior familiarity, but the surviving scene does not establish where they met or the origin date of that relationship.",
      "Sitama's direct `from amaurot` self-description supports Amaurot-side provenance in that doorway scene; it does not establish later UL membership or Staff appointment chronology.",
    ],
  },
};
