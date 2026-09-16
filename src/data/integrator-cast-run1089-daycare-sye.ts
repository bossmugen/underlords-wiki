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
    aliases: ["Life", "Syenitha", "Synetha", "Sadako", "sycessences", "ƐℲı˥"],
    billing: "legacy",
    role: "Caporegime / Game Officer · room shepherd and technical fixer",
    era: "2020–present",
    logline:
      "Sye first appears at UL's threshold as a movie guest invited by Snow; later she becomes one of the people standing on the other side of that threshold, welcoming newcomers, giving them the tour, explaining where to go next, and still dropping into bot/event machinery when something needs fixing. The through-line is care becoming procedure without losing the very human `worry wort` underneath it.",
    tags: [
      "Caporegime",
      "Game Officer",
      "Room shepherd",
      "Technical fixer",
      "Newcomer care",
      "Event bots",
      "Photoshoot",
      "Daylight saving time",
      "Practical help",
      "Dry humor",
      "Daycare-era",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Snow",
        note:
          "Sye's 2020 story begins with Snow at both ends of the doorway. She introduces herself as `Synetha from Aether` and says Snow invited her for the movie; weeks later her public config/debug pocket is explicitly framed as `just helping snow out`. The useful progression is social rather than hierarchical: she arrives because someone brought her in, then is soon helping keep the room's machinery moving. None of this dates a formal appointment or reporting line.",
        href: "/characters/snow",
      },
      {
        name: "Lilly",
        note:
          "One month after arriving, Sye's caretaker streak is already loud enough to become the scene. She makes an exaggerated claim on Lilly, immediately widens the affection back out to the room, then admits `But I’m a worry wort! And that keeps me up !`. The room answers with collective protectiveness and Sye visibly accepts the reassurance. The important thing is not the literal wording of `Mine`; it is how quickly bravado gives way to plain concern.",
        href: "/characters/lilly",
      },
      {
        name: "Gilli",
        note:
          "Gilli appears in two very different Sye registers. In the 2020 bot-work pocket, she wanders in with drink chatter; Sye says hi, explains she is helping Snow, then immediately answers `Share !` when Gilli says she is drinking for her. In the earlier worry-wort scene, Gilli helps turn Sye's concern into a communal `we've got her` response. Practical work and ordinary affection keep sharing the same room.",
        href: "/characters/gilli",
      },
      {
        name: "Gabu",
        note:
          "By 2022 Gabu can route an event edit straight to Sye — `sye can you add pls?` — and get `Yes I can` about twenty seconds later. After the change, Sye thanks Gabu with a heart and Gabu comes back with `Tysmmm sye!!!`. The useful read is task trust: Sye is reliable enough to summon directly without turning the exchange into help-desk theater.",
        href: "/characters/gabu",
      },
      {
        name: "Newcomers",
        note:
          "By 2022–23 Sye is repeatedly doing for later arrivals what the room once did for her: welcome first, then tour, biodata, rules, main-chat directions, and a clear explanation of what happens next. In May 2023 she explicitly says an officer will come by later to assign roles. That line is almost the whole Sye contradiction in miniature: she is confident enough to shepherd the room and careful enough not to pretend authority she is not exercising in that moment.",
      },
    ],
    quotes: [
      "Hello! This is Synetha from Aether! I was invited by Snow for the movie",
      "DW I love y’all too!",
      "But I’m a worry wort! And that keeps me up !",
      "Hi gili just helping snow out",
      "Share !",
      "23 hours!!! What did snow do!!!",
      "Hmm there is two new schedule now... bot made me make a new one because I couldn’t access the first one ...",
      "Daylight savings: Since Europe and the US shifts timezone during different days, I will stop Photoshoot 1 hours earlier instead.",
      "Saber why no perm to make Saber do this",
      "Yes I can",
      "Thanks Gabu",
      "Welcome to Underloads!!",
      "An officer will come by shortly to assign you your roles. Thank you!",
    ],
    claims: [
      "Life, Syenitha, Sadako, sycessences, and ƐℲı˥ are established Sye aliases in the project identity map; stable Discord account 488099199938986004 is Sye / sycessences in the reviewed material. `Synetha from Aether` is a same-account historical self-identification at her 2020 Lobby arrival.",
      "Sye is user-confirmed as a Caporegime and Game Officer. Those formal titles are current/canonical role facts and are not backdated to earlier archive scenes unless appointment chronology is independently sourced.",
      "Sye first surfaces in the reviewed Lobby chronology on 2020-09-06 as `Synetha from Aether`, explicitly saying Snow invited her for the movie. By 2022–23, the same person repeatedly welcomes later arrivals and routes them through the tour, biodata, rules, and main chat. That supports a longitudinal visitor → caretaker → room-shepherd read rather than a stack of disconnected welcome messages.",
      "A 2020 Wall pocket gives Sye's social engine in her own words: after exaggerated affectionate banter around Lilly she widens the affection to the room and says `But I’m a worry wort! And that keeps me up !`. The public character read is emotionally explicit protectiveness and worry, without exposing another person's private health information or turning joke-claiming language into literal romance.",
      "On 2023-05-01 Sye welcomes and navigates a newcomer while explicitly saying `An officer will come by shortly to assign you your roles. Thank you!`; Mugen later posts that roles were assigned. The scene shows lived room-shepherding plus boundary awareness, not proof that Sye personally assigned those roles or a source for appointment chronology.",
      "On 2020-09-22 Sye authored a sustained public configuration/debug sequence for the event bot, including config, init, create, edit, test, and event-list commands, while explicitly telling Gilli she was `just helping snow out`.",
      "During that September 2020 repair session, one Saber schedule existed in the morning. When Sye could not access the expected schedule channel, Saber told her to run `!init`; the result was a second schedule. Sye immediately noticed the duplicate, explained that the bot had made her create a new one because she could not access the first, then deleted one the same afternoon and confirmed the calendar had returned to a single lane.",
      "The accidental September 2020 duplicate gave Sye hands-on exposure to Saber's multi-schedule behavior before her November proposal for a separate schedule `just for the time change`. That chronology makes the later idea less abstract, but the surviving material does not say she consciously reused the September incident.",
      "In the same 2020 sequence Sye reacts to an unexpected 23-hour event result with `23 hours!!! What did snow do!!!` and explains that the bot forced a second schedule after she could not access the first one.",
      "On 2020-11-03 Sye publicly explained that Europe and the US were changing clocks on different days and said she would stop Photoshoot one hour earlier. The useful role texture is practical: she notices a recurring-event clock mismatch, explains the cause in plain language, and adjusts the human-facing schedule rather than treating the bot as magic.",
      "Around that 2020 Photoshoot timing work, Sye also tries Saber schedule commands and asks `Saber why no perm to make Saber do this`. The line preserves both halves of the scene: she knows what she is trying to change, and the system is explicitly telling her she does not have the needed permission at that moment.",
      "On 2022-04-05 Gabu directly asks Sye to add an event edit. Sye answers `Yes I can` roughly twenty seconds later; later bot output includes the requested event, and the exchange closes with mutual thanks / heart reactions.",
      "Across these pockets, people treat Sye as someone who can make practical bot/event changes, while the transcript keeps her trial-and-error visible. Her reliability reads as persistence and availability rather than a performance of technical perfection.",
      "`Welcome to Underloads!!` is preserved as one fast-typing Petty Crimes beat inside an otherwise competent newcomer handoff. It is velocity texture, not a claim that Sye cannot spell.",
    ],
    antiFanon: [
      "Do not split Life, Syenitha, Synetha, Sadako, sycessences, or ƐℲı˥ into separate people, and do not merge Sye with the separate person Syv. `Synetha from Aether` is a historical self-name/context, not a command to replace Sye's canonical display name everywhere.",
      "Sye's exaggerated `Mine` language around Lilly is affectionate room language, not proof of literal romance, sex, ownership, or biological family. Keep the public read on protectiveness and worry rather than exposing private health detail about another person.",
      "Sye / sycessences is a person and Saber is the bot she is addressing. The November 2020 Photoshoot lines do not collapse them into one identity.",
      "Do not turn practical bot/config/Photoshoot timing work or newcomer navigation into a formal IT, administrator, developer, PR, Photoshoot-admin, onboarding-admin, or governance appointment. Sye's confirmed Caporegime and Game Officer roles stand on their own canon sources; export-time/current role arrays do not establish when she received them.",
      "The September 22, 2020 two-schedule state was accidental troubleshooting debris and was cleaned up the same day. Do not call it deliberate parallel adoption, a seasonal schedule architecture, or proof that Sye's later daylight-saving proposal was consciously derived from it. The earliest surviving deliberate operational parallel Saber use currently proven remains August 2021.",
      "`Saber why no perm to make Saber do this` is a permission-boundary receipt, not an ownership receipt. It does not establish that Sye created, owned, installed, or exclusively maintained Saber or any external bot/service.",
      "Helping Snow does not establish a formal hierarchy or reporting line between Sye and Snow.",
      "The May 2023 newcomer handoff explicitly defers role assignment to `An officer`; do not infer that Sye personally assigned roles in that scene, and do not infer appointment chronology from current/export-time role arrays.",
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
