import { lateVipCharacterBios } from "./character-bios-vip-late";

export const run336VipCharacterBios = {
  woosung: {
    ...lateVipCharacterBios.woosung,
    overview: [
      ...lateVipCharacterBios.woosung.overview,
      "One April 8 Lobby pocket adds a useful correction to any version of WOO that sounds merely low-output. Sitama introduces herself from Amaurot, finishes the boring role/access setup, and then WOO sees her: `SITAMAAAAAA`, followed three seconds later by `HIIIII`. Sitama returns `HIIIIIIIIIIII WOOOOOOOOOOOO`. Nobody stops to introduce them to each other. Whatever their exact prehistory was, recognition is already doing the work. WOO can be sparse when a prompt asks her to explain herself and still be the person who starts yelling when the right human walks through the door.",
    ],
    history: [
      ...lateVipCharacterBios.woosung.history,
      {
        date: "April 8, 2020",
        title: "SITAMAAAAAA",
        text: "After Sitama checks in from Amaurot and receives role/access help from Snow, WOO is the one who initiates the recognition burst: `SITAMAAAAAA`, then `HIIIII`. Sitama answers at matching volume with `HIIIIIIIIIIII WOOOOOOOOOOOO`, and WOO follows with `Hiiiiiii`. The exchange makes prior familiarity more likely than a first introduction without establishing where or when they first knew each other.",
      },
    ],
    characterNotes: [
      ...lateVipCharacterBios.woosung.characterNotes,
      {
        title: "Low-generative is not low-initiation",
        text: "WOO can give tiny answers when asked to narrate herself, then independently start a full-volume recognition scene when somebody familiar appears. The variable is the social trigger, not a global quietness setting.",
      },
    ],
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
