import "./integrator-cast-run1521-wall-aesh";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & { stableDiscordIds?: string[]; claims?: string[]; antiFanon?: string[] };
const stableId = "533675875238150164";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "suzi" ||
    character.name === "Suzi" ||
    character.aliases?.some((alias) => ["Mob", "BAPE", "Mob | BAPE", "mob_bape"].includes(alias)) ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);
const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
const unique = <T>(items: T[]): T[] => [...new Set(items)];
const add = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id: previous?.id ?? "suzi",
  name: previous?.name ?? "Suzi",
  aliases: add(previous?.aliases, ["Suzi", "Mob", "BAPE", "Mob | BAPE", "mob_bape"]),
  stableDiscordIds: add(previous?.stableDiscordIds, [stableId]),
  billing: previous?.billing ?? "legacy",
  role: previous?.role ?? "Archive-era Whiskey cast",
  era: previous?.era ?? "2020–2021+",
  logline:
    "Suzi has the dangerous kind of curiosity that makes a room premise feel like an invitation. She can joke about trying to win the Wall, volunteer her own receipts, apparently turn a cursed food trend into field research, and still notice fast when somebody inside the joke needs softness instead of another punchline.",
  tags: add(previous?.tags, [
    "Whiskey",
    "Archive cast",
    "Participatory curiosity",
    "Enters the bit",
    "Wall of Shame",
    "Self-filing",
    "Quick softener",
    "Baby Lyssa",
    "ShiyaX",
    "Petty Crimes",
  ]),
  relationships: [
    ...(previous?.relationships ?? []).filter(
      (relationship) => !["Baby Lyssa", "RV", "ShiyaX"].includes(relationship.name),
    ),
    {
      name: "Baby Lyssa",
      note: "Lyssa repeatedly becomes the horrified reviewer of Suzi's nonsense. In the July 2021 food pocket she goes from `HELP` to `what IS THIS CATASTROPHE` while Suzi keeps explaining from inside the disaster; in August she brings another wording problem directly to Suzi and they argue it out laughing. Their lane is catastrophe review plus amused defense, not one-way exposure.",
    },
    {
      name: "RV",
      note: "A body-joke pocket turns the second RV calls himself a spaghetti noodle: Suzi moves immediately from joking to `Aww it's okay` and `I still wuv you`, and RV answers warmly. She can stay inside the bit while still noticing when the person needs reassurance.",
    },
    {
      name: "ShiyaX",
      note: "When Shiya says `im not even online wtf`, Suzi answers with a GIF, `I'm coming for ya!!!!`, and a direct summon; Shiya replies with mock crying. It reads as easy mock-pursuit fluency, not actual conflict.",
    },
  ],
  quotes: add(previous?.quotes, [
    "Trying to win the wall of shame awards",
    "Since were sharing",
    "I HAD TO TRY IT LMAOOOO",
    "I still wuv you",
    "I’m coming for ya!!!!",
    "I’m not even gonna dignify that",
  ]),
  claims: add(previous?.claims, [
    "Stable Discord account 533675875238150164 / mob_bape / Mob | BAPE is Suzi by hard user-confirmed identity mapping.",
    "Across 2020–2021 Suzi repeatedly treats a room premise as something to enter rather than merely observe: she jokes about trying to win Wall awards, volunteers current receipts, answers an Anayss-linked premise with `I HAD TO TRY IT LMAOOOO`, and brings questionable experiments back to the room for live review.",
    "The July 2, 2021 mustard-watermelon linkage is strong enough to treat Suzi physically trying the trend as probable, not visually confirmed: her posted video was not pixel-inspected, while the surrounding sequence includes `Me this afternoon`, Lyssa googling who puts mustard on watermelon, and Suzi pointing to more examples.",
    "Suzi's joking register can soften quickly around the person: when RV's body joke turns self-deprecating, she immediately reassures him rather than continuing to escalate.",
    "Mugen's June 14, 2020 `heey suzi welcome back!` supports familiar return texture only; it does not establish an exact absence or rejoin chronology.",
  ]),
  antiFanon: add(previous?.antiFanon, [
    "Mob / BAPE / Mob | BAPE are locked Suzi aliases; do not reopen that identity bridge or merge similarly named people by name alone.",
    "Suzi POSTED the media where stated. MADE BY, CAPTURED BY, and FEATURING remain separate unless independently resolved.",
    "The mustard-watermelon physical trial is probable from surrounding text, not visually confirmed because the video pixels were not inspected.",
    "The RV reassurance exchange is affectionate social care, not romance canon.",
    "The ShiyaX pursuit language is mock play, not evidence of conflict.",
    "The earliest surviving Suzi rows in this route are source boundaries, not origin dates.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
