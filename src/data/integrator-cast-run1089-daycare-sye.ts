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
    aliases: ["Life", "Syenitha", "Sadako", "sycessences", "ƐℲı˥"],
    billing: "legacy",
    role: "Caporegime / Game Officer · technical fixer",
    era: "2020–present",
    logline:
      "Sye is the person people can casually ping when the machinery is misbehaving: a Caporegime and Game Officer whose practical competence looks less like wizard theater and more like touching the system until it behaves, narrating the mess in public, noticing when Europe and the US have broken the Photoshoot clock in different weeks, and staying fully inside the room's normal banter while she fixes it.",
    tags: [
      "Caporegime",
      "Game Officer",
      "Technical fixer",
      "Event bots",
      "Photoshoot",
      "Daylight saving time",
      "Practical help",
      "Dry humor",
      "Daycare-era",
    ],
    relationships: [
      {
        name: "Snow",
        note:
          "Sye's 2020 config/debug pocket is explicitly framed as `just helping snow out`. The funny part is how little ceremony survives once the machinery starts fighting back: after seeing a 23-hour result she blurts `23 hours!!! What did snow do!!!`, then keeps troubleshooting. That supports working familiarity and practical collaboration, not a formal reporting line or appointment chronology.",
        href: "/characters/snow",
      },
      {
        name: "Gilli",
        note:
          "Gilli wanders into the middle of the 2020 bot work with a drink reaction; Sye says hi, explains she is helping Snow, then immediately answers `Share !` when Gilli says she is drinking for her. The repair session never becomes a sealed technical room. Competence and ordinary friend-room nonsense happen in the same breath.",
        href: "/characters/gilli",
      },
      {
        name: "Gabu",
        note:
          "By 2022 Gabu can route an event edit straight to Sye — `sye can you add pls?` — and get `Yes I can` about twenty seconds later. After the change, Sye thanks Gabu with a heart and Gabu comes back with `Tysmmm sye!!!`. The useful read is task trust: Sye is reliable enough to summon directly without turning the exchange into help-desk theater.",
        href: "/characters/gabu",
      },
    ],
    quotes: [
      "Hi gili just helping snow out",
      "Share !",
      "23 hours!!! What did snow do!!!",
      "Hmm there is two new schedule now... bot made me make a new one because I couldn’t access the first one ...",
      "Daylight savings: Since Europe and the US shifts timezone during different days, I will stop Photoshoot 1 hours earlier instead.",
      "Saber why no perm to make Saber do this",
      "Yes I can",
      "Thanks Gabu",
    ],
    claims: [
      "Life, Syenitha, Sadako, sycessences, and ƐℲı˥ are established Sye aliases in the project identity map; stable Discord account 488099199938986004 is Sye / sycessences in the reviewed technical material.",
      "Sye is user-confirmed as a Caporegime and Game Officer. Those formal titles are current/canonical role facts and are not backdated to earlier archive scenes unless appointment chronology is independently sourced.",
      "On 2020-09-22 Sye authored a sustained public configuration/debug sequence for the event bot, including config, init, create, edit, test, and event-list commands, while explicitly telling Gilli she was `just helping snow out`.",
      "In the same 2020 sequence Sye reacts to an unexpected 23-hour event result with `23 hours!!! What did snow do!!!` and explains that the bot forced a second schedule after she could not access the first one.",
      "On 2020-11-03 Sye publicly explained that Europe and the US were changing clocks on different days and said she would stop Photoshoot one hour earlier. The useful role texture is practical: she notices a recurring-event clock mismatch, explains the cause in plain language, and adjusts the human-facing schedule rather than treating the bot as magic.",
      "Around that 2020 Photoshoot timing work, Sye also tries Saber schedule commands and asks `Saber why no perm to make Saber do this`. The line preserves both halves of the scene: she knows what she is trying to change, and the system is explicitly telling her she does not have the needed permission at that moment.",
      "On 2022-04-05 Gabu directly asks Sye to add an event edit. Sye answers `Yes I can` roughly twenty seconds later; later bot output includes the requested event, and the exchange closes with mutual thanks / heart reactions.",
      "Across these pockets, people treat Sye as someone who can make practical bot/event changes, while the transcript keeps her trial-and-error visible. Her reliability reads as persistence and availability rather than a performance of technical perfection.",
    ],
    antiFanon: [
      "Do not split Life, Syenitha, Sadako, sycessences, or ƐℲı˥ into separate people, and do not merge Sye with the separate person Syv.",
      "Sye / sycessences is a person and Saber is the bot she is addressing. The November 2020 Photoshoot lines do not collapse them into one identity.",
      "Do not turn practical bot/config/Photoshoot timing work into a formal IT, administrator, developer, PR, Photoshoot-admin, or governance appointment. Sye's confirmed Caporegime and Game Officer roles stand on their own canon sources; export-time/current role arrays do not establish when she received them.",
      "`Saber why no perm to make Saber do this` is a permission-boundary receipt, not an ownership receipt. It does not establish that Sye created, owned, installed, or exclusively maintained Saber or any external bot/service.",
      "Helping Snow does not establish a formal hierarchy or reporting line between Sye and Snow.",
      "Bot-authored output is bot output, not Sye speech; SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct attribution classes.",
      "The 2023 music-bot endurance challenge is a separate evidence family. Do not merge its probable Jockie Music / Oolong Tea target with Saber, Carl-bot/Snowden, QOTD Bot, SAYE, or any other bot through adjacency or generic `broken bot` wording.",
    ],
  };

  allCharacters.push(sye);
  characterById.set(syeId, sye);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(syeId)) {
    archiveCastGroup.characterIds.push(syeId);
  }
}
