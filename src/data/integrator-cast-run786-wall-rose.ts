import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const rose = allCharacters.find((character) => character.id === "rose") as ExtendedCharacter | undefined;

if (rose) {
  rose.tags = appendUnique(rose.tags, [
    "Wall",
    "Knowing defendant",
    "Comic defense attorney",
    "Receipt ritual",
    "Receipt staging",
    "Target summons",
    "Context checker",
    "Compact roast chorus",
    "Volunteer prosecutor",
    "Visual participation",
    "Petty Crimes",
  ]);

  rose.quotes = appendUnique(rose.quotes, [
    "He hit me first",
    "Its his fault",
    "Oh great theres people shorter than me :Cat_Drool:",
    "Yea Mugen is very sus",
    "She corrupting me help",
    "SHORTZ",
    "didnt ask",
    "Beat me to it",
    "Anna sends feet pics",
  ]);

  if (!rose.logline.includes("He hit me first")) {
    rose.logline = `${rose.logline} Getting filed can flip her straight into comic defense—\`He hit me first\`, then \`Its his fault\` barely two seconds later—without actually making her leave the joke.`;
  }
  if (!rose.logline.includes("Beat me to it")) {
    rose.logline = `${rose.logline} She can also lose the filing race by seconds, say \`Beat me to it\`, and then add two screenshots of her own. Rose does not merely survive Screenshot Court; sometimes she is annoyed somebody else reached the prosecution table first.`;
  }

  const mugenIndex = (rose.relationships ?? []).findIndex((relationship) => relationship.name === "Mugen");
  const mugenNote =
    "When Mugen drops a Wall exhibit on her, Rose's reflex is not wounded retreat but instant comic lawyering: `He hit me first`, followed barely two seconds later by `Its his fault`. The speed matters; she knows the ritual well enough to start arguing the case while still feeding it. In later Wall exchanges she is just as willing to turn the joke back toward Mugen—`Yea Mugen is very sus`, then `She corrupting me help`—so the filing ritual reads as something Rose can actively play from both sides rather than a thing that only happens to her.";

  if (mugenIndex >= 0) {
    const current = rose.relationships![mugenIndex];
    if (!current.note.includes("Yea Mugen is very sus")) {
      rose.relationships![mugenIndex] = {
        ...current,
        note: current.note.includes("He hit me first")
          ? `${current.note} In later Wall exchanges Rose is just as willing to turn the joke back toward Mugen—\`Yea Mugen is very sus\`, then \`She corrupting me help\`—so the filing ritual reads as something Rose can actively play from both sides rather than a thing that only happens to her.`
          : `${current.note} ${mugenNote}`,
      };
    }
  } else {
    rose.relationships = [
      ...(rose.relationships ?? []),
      {
        name: "Mugen",
        note: mugenNote,
        href: "/characters/mugen",
      },
    ];
  }

  const rummyIndex = (rose.relationships ?? []).findIndex((relationship) => relationship.name === "Rummy");
  const rummyNote =
    "Rose and Rummy recur in two different kinds of public chaos. January 2023 has Rose challenging her into game-combat banter; by March and April, Rose is also summoning Rummy straight into screenshot filings and getting immediate theatrical horror back. Rose can apparently trust one tag to make Rummy understand the premise. That is recurring reciprocal bit-fluency, not literal violence, romance, or a closeness ranking.";

  if (rummyIndex >= 0) {
    rose.relationships![rummyIndex] = {
      ...rose.relationships![rummyIndex],
      note: rummyNote,
      href: "/characters/rummy",
    };
  } else {
    rose.relationships = [
      ...(rose.relationships ?? []),
      {
        name: "Rummy",
        note: rummyNote,
        href: "/characters/rummy",
      },
    ];
  }

  rose.claims = appendUnique(rose.claims, [
    "In the March 8, 2023 Wall pocket, Mugen posts an image and DarkAsrai/Rose answers `He hit me first`; 1.984 seconds later Rose follows with `Its his fault`. The scene supports reflexive comic blame transfer and comfortable participation in the Wall ritual.",
    "On April 16, 2023 Rose writes `Oh great theres people shorter than me :Cat_Drool:`. It is useful short-person-joke texture but does not establish Rose's exact height or anybody else's.",
    "The April 5, 2023 `Beat me to it` line is followed by two additional screenshots from Rose herself. That sharpens the older filing-race read into active Screenshot Court participation: Rose can be the defendant, the receipt courier, and the person adding exhibits when somebody else reaches the prosecution table first.",
    "In the later DarkAsrai/Rose Wall suffix, Rose returns after hours, asks for context, and then falls directly back into compact roast and blame-play. The context check is part of knowing participation, not evidence that she is withdrawing from the room's joke grammar.",
    "Rose's `Yea Mugen is very sus` / `She corrupting me help` sequence flips comic blame toward Mugen. It is familiar adversarial play inside the Wall ritual, not a literal coercion or corruption allegation.",
    "Rose's `SHORTZ` toward Xuseio/Cyle belongs to the room's familiar short-person teasing. It does not establish anyone's exact height, a relationship rank, or durable hostility.",
    "Rose's `didnt ask` toward Aster is a situational blunt jab in the recovered Wall pocket, not enough by itself to define an ongoing feud or personality-wide hostility.",
    "A quick Rose/Rain roast echo in the recovered suffix shows Rose comfortable joining a compact chorus when somebody else opens the lane; it is useful interaction texture, not a closeness score.",
    "The reviewed Daycare handoff gives Rose a visually economical social style as well as the verbal one already public: short reactions, screenshots, and compact lines can carry the room bit without requiring a speech. This deepens her existing Staff / recruiting / retention history rather than replacing it.",
    "On March 13, 2023 Rose posts two screenshots around the caption `Anna sends feet pics`, then directly summons Rummy/phenomenal_lamb into the aftermath; Rummy answers within seconds with theatrical horror and flight. On April 3 Rose again posts a screenshot while directly summoning Rummy and Cele, and both rapidly feed the bit. The recurrence supports receipt staging plus target/audience summons as a social habit rather than a one-off filing.",
    "Across January, March, and April 2023, Rose and Rummy move easily between game-combat teasing and receipt-summons theater. The useful relationship read is repeated reciprocal bit-fluency: Rose can challenge or tag Rummy with almost no setup and expect immediate uptake.",
  ]);

  rose.antiFanon = appendUnique(rose.antiFanon, [
    "`He hit me first` / `Its his fault` is comic defense inside a Wall exchange, not evidence of literal violence, victimhood, or a serious accusation.",
    "`Oh great theres people shorter than me` is a joke about relative height, not a source for exact measurements.",
    "Mugen's March 8 image is POSTED BY Mugen only unless separate media inspection resolves MADE BY, CAPTURED BY, or FEATURING.",
    "The joking `Noo they taste like chicken XD` line stays a joke; do not literalize it into food preference, harm, or cannibalism lore.",
    "`Yea Mugen is very sus` / `She corrupting me help` is joking blame-transfer; do not turn it into literal coercion, corruption, abuse, or a serious allegation.",
    "`SHORTZ`, `didnt ask`, and quick roast echoes are situational social-play texture. Do not use them to invent exact height, permanent hostility, or relationship ranking.",
    "DarkAsrai / darkasrai belong to the canonical Rose owner. Stable account 659305268684783628 in the reviewed Daycare handoff does not create a second DarkAsrai person or justify an invented account-migration chronology.",
    "Rose's ferris-wheel media and the two screenshots in the reviewed Daycare handoff are POSTED BY Rose only. Do not upgrade them to MADE BY, CAPTURED BY, or FEATURING without independent attribution.",
    "The one-emote ShiyaX revival/callback is room-level interaction texture only; it does not establish a friendship tier, romance, family relation, or special dyad.",
    "`Beat me to it` plus the two screenshots supports comfortable participation in the room's public-embarrassment filing ritual. It does not make Screenshot Court a formal governance process or establish the underlying screenshot subjects from uninspected media.",
    "Mixed response-circle or q18 counts are recurrence/context tools only; do not convert them into popularity, intimacy, or friendship rankings.",
    "`Anna` is only a probable local Rose referent for Rummy/phenomenal_lamb in the reviewed January–March pockets. Do not publish it as a global alias or identity bridge without stronger support.",
    "`Anna sends feet pics` is Rose's caption, not verified visual content. The attached screenshots are POSTED BY Rose only; MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
    "Repeated screenshot summons support recurring public-bit familiarity with Rummy, not literal sex, violence, romance, or a ranked relationship tier.",
  ]);

  characterById.set("rose", rose);
}