import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const syeId = "sye";

if (!allCharacters.some((character) => character.id === syeId)) {
  const sye: ExtendedCharacter = {
    id: syeId,
    name: "Sye",
    aliases: ["sycessences"],
    billing: "legacy",
    role: "Archive-era event-bot helper / technical fixer",
    era: "2020–2022",
    logline:
      "Sye is the person people can casually ping when the event machinery is misbehaving. He moves from config commands to `Share !` without putting on an expertise costume: useful first, mildly horrified by whatever Snow has done to the schedule second, and still fully inside the room's normal banter while he fixes it.",
    tags: [
      "Archive cast",
      "Technical fixer",
      "Event bots",
      "Practical help",
      "Dry humor",
      "Daycare-era",
    ],
    relationships: [
      {
        name: "Snow",
        note:
          "Sye's 2020 config/debug pocket is explicitly framed as `just helping snow out`. The funny part is how little ceremony survives once the machinery starts fighting back: after seeing a 23-hour result he blurts `23 hours!!! What did snow do!!!`, then keeps troubleshooting. That supports working familiarity and practical collaboration, not a formal reporting line or appointment chronology.",
        href: "/characters/snow",
      },
      {
        name: "Gilli",
        note:
          "Gilli wanders into the middle of the 2020 bot work with a drink reaction; Sye says hi, explains he is helping Snow, then immediately answers `Share !` when Gilli says she is drinking for him. The repair session never becomes a sealed technical room. Competence and ordinary friend-room nonsense happen in the same breath.",
        href: "/characters/gilli",
      },
      {
        name: "Gabu",
        note:
          "By 2022 Gabu can route an event edit straight to Sye — `sye can you add pls?` — and get `Yes I can` about twenty seconds later. After the change, Sye thanks Gabu with a heart and Gabu comes back with `Tysmmm sye!!!`. The useful read is trust in Sye as a reliable fixer, expressed without turning the exchange into help-desk theater.",
        href: "/characters/gabu",
      },
    ],
    quotes: [
      "Hi gili just helping snow out",
      "Share !",
      "23 hours!!! What did snow do!!!",
      "Hmm there is two new schedule now... bot made me make a new one because I couldn’t access the first one ...",
      "Yes I can",
      "Thanks Gabu",
    ],
    claims: [
      "Stable Discord account 488099199938986004 is Sye / sycessences in the reviewed event-bot material.",
      "On 2020-09-22 Sye authored a sustained public configuration/debug sequence for the event bot, including config, init, create, edit, test, and event-list commands, while explicitly telling Gilli he was `just helping snow out`.",
      "In the same 2020 sequence Sye reacts to an unexpected 23-hour event result with `23 hours!!! What did snow do!!!` and explains that the bot forced a second schedule after he could not access the first one.",
      "On 2022-04-05 Gabu directly asks Sye to add an event edit. Sye answers `Yes I can` roughly twenty seconds later; later bot output includes the requested event, and the exchange closes with mutual thanks / heart reactions.",
      "Across these pockets, people treat Sye as someone who can make practical bot/event changes and Sye handles the work inside ordinary social flow rather than with formal authority performance.",
    ],
    antiFanon: [
      "Do not turn practical bot/config work into a formal IT, administrator, developer, or governance appointment unless a direct appointment source establishes one.",
      "The 2020 sequence does not establish that Sye created, owned, or exclusively maintained Saber or any external bot/service.",
      "Helping Snow does not establish a formal hierarchy or reporting line between Sye and Snow.",
      "Export-time/current role arrays do not establish appointment chronology.",
      "Bot-authored output is bot output, not Sye speech; SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct attribution classes.",
      "The later 2023 music-bot-breaking challenge is a separate evidence family and should not be folded into Sye's technical role without a direct participation bridge.",
    ],
  };

  allCharacters.push(sye);
  characterById.set(syeId, sye);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(syeId)) {
    archiveCastGroup.characterIds.push(syeId);
  }
}
