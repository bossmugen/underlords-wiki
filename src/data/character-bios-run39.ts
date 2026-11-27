import { characterBios } from "./character-bios";
import { deepAnsunOfficerCharacterBios } from "./character-bios-officers-ansun-deep";
import { lateRetiredOfficerCharacterBios } from "./character-bios-retired-late";
import { deepArchiveCharacterBios } from "./character-bios-archive-deep";
import { vipCharacterBios } from "./character-bios-vip";
import { lateVipCharacterBios } from "./character-bios-vip-late";
import { newCharacterBios } from "./character-bios-new";

export const run39CharacterBios = {
  ...newCharacterBios,

  rich: {
    ...vipCharacterBios.rich,
    dek: "DragonRich, former Amaurot leader, UL VIP, and the neighboring-club boss who was already building rooms bigger than one club before Amaurot later merged under UL.",
    overview: [
      "Rich / DragonRich is the former leader of Amaurot and a durable UL VIP. His old rank belongs to another club, not the Underlords command tree. The cleanest surviving character beat is appropriately infrastructural: in April 2020 Mugen identifies DragonRich as Amaurot Leader while advertising an S10-wide channel he created for anyone interested.",
      "That is a small but useful read on how Rich moved through the server. He was not only guarding one roster; he was willing to make a room above the club boundary. Amaurot later merged under UL, but the old Amaurot title stays where it belongs and does not become a retroactive UL Officer appointment."
    ],
    history: [
      { date: "April 2020", title: "A room above club boundaries", text: "Mugen identifies DragonRich as Amaurot Leader and advertises an S10-wide channel he created for anyone interested. It establishes cross-server infrastructure without claiming the channel caused the later merger." },
      { date: "Later", title: "Amaurot merges under UL", text: "The merger is user-confirmed canon. Rich remains filed as VIP; external leadership history is not rewritten as a UL command career." }
    ],
    characterNotes: [
      { title: "Build the bigger room", text: "The safest person-level throughline is simple: Rich enters UL history already thinking beyond one club's walls. The S10 channel is a concrete act of bridge-building, not a ceremonial title." }
    ],
    roleNotes: ["Primary shelf: VIP.", "Former Amaurot leader; external-club context only."],
    claims: [
      { text: "On April 12, 2020, Mugen identified DragonRich as Amaurot Leader and advertised an S10-wide channel he created.", evidence: "archive-confirmed", date: "2020-04-12" },
      { text: "Amaurot later merged under UL.", evidence: "user-confirmed", date: "later" }
    ],
    canonNotes: [
      "Rich = DragonRich. Ricochet / `dragonrichard` is unresolved and must remain separate unless a direct bridge appears.",
      "Do not assign Wall/couch/Fight Club/`Richard's Corpse` material labeled Rich/Ricochet to DragonRich while that identity split remains unresolved.",
      "Rich's Amaurot leadership is external-club context and does not create a UL Officer or Director appointment.",
      "The S10 channel proves cross-server infrastructure, not the cause or date of the later Amaurot → UL merger."
    ]
  },

  woosung: {
    ...lateVipCharacterBios.woosung,
    overview: [
      ...lateVipCharacterBios.woosung.overview,
      "Woosung does not need sharpness and affection to arrive in separate paragraphs. On the same September 2020 night she can fire `eli kill @ANTHOS`, let the bot perform its melodrama, and about twenty-four seconds later throw a love/party GIF into the room. In December she compresses Mugen into the impossible family label `mugs is my daddy granny`. Years later, when given a serious first-person prompt, she describes Mugen as a close friend and older-sister-like guide. The joke language and the ordinary relationship description do not compete; they show how little connective tissue Woo needs when the relationship context is already shared."
    ],
    history: [
      ...lateVipCharacterBios.woosung.history,
      { date: "December 15, 2020", title: "Mugs is my daddy granny", text: "Woosung gives Mugen one deliberately impossible fake-family label. It belongs beside Woo's later description of Mugen as close friend and older-sister-like guide, not in a literal family tree." }
    ],
    characterNotes: [
      ...lateVipCharacterBios.woosung.characterNotes,
      { title: "High tonal range, very little transition paperwork", text: "Mock murder can become a love GIF in seconds; practical care can become an argument about whether she is soft; `daddy granny` can later sit beside a straightforward older-sister-like description. Woo trusts the room to understand the switch without narrating it for them." },
      { title: "Daddy granny is a joke-family masterpiece", text: "Two incompatible generations, one Mugs. Excellent UL grammar. Zero biological information." }
    ],
    claims: [
      ...(lateVipCharacterBios.woosung.claims ?? []),
      { text: "On December 15, 2020, Woosung wrote `mugs is my daddy granny` in Whiskey. The phrase is fictive-family comedy, not literal genealogy, romance, or relationship rank.", evidence: "whiskey", date: "2020-12-15" }
    ],
    canonNotes: [
      ...(lateVipCharacterBios.woosung.canonNotes ?? []),
      "`mugs is my daddy granny` is joke-family language. Woo's later first-person description of Mugen as close friend / older-sister-like guide is the clearer ordinary relationship account."
    ]
  },

  kiro: {
    ...lateRetiredOfficerCharacterBios.kiro,
    overview: [
      ...lateRetiredOfficerCharacterBios.kiro.overview,
      "The alias chaos makes a useful contrast with how Kiro treats somebody else's uncertainty. In 2022, when a Whiskey participant admits they are socially anxious and mostly lurk, Kiro does not turn the confession into a project or a diagnosis. He answers `we dont bite`, calls the room `your extended family`, and praises them for speaking up. Later that year he adds, `If you ever need someone to talk to, we always have your back`. The man who can answer a correct identification of himself with `Who's kiro` gets remarkably straightforward when somebody else needs the room to feel less difficult to enter."
    ],
    history: [
      ...(lateRetiredOfficerCharacterBios.kiro.history ?? []),
      { date: "2022", title: "The identity goblin lowers somebody else's entry barrier", text: "A socially anxious Whiskey participant says they mostly lurk. Kiro answers `we dont bite`, calls UL `your extended family`, and praises them for speaking up. In November he separately says, `If you ever need someone to talk to, we always have your back`. It is ordinary peer care, not a therapist or formal support role." }
    ],
    characterNotes: [
      ...(lateRetiredOfficerCharacterBios.kiro.characterNotes ?? []),
      { title: "Confusing about himself, clarifying for you", text: "Kiro's own alias file is intentionally hostile to easy identification; his response to another person's uncertainty is the opposite. The joke gets aimed inward. The reassurance gets aimed outward." }
    ]
  },

  ansun: {
    ...deepAnsunOfficerCharacterBios.ansun,
    overview: [
      ...deepAnsunOfficerCharacterBios.ansun.overview,
      "A June 2021 oral-history scene gives Ansun's early incorporation an unusually small human hinge. He remembers trying to fish underneath a girls' picture day and repeatedly diving so he would not photobomb while they changed outfits and took pictures; he later folds that encounter into how he got `picked up`. The scene does not prove that tact caused the friendship, but it fits the later Ansun file beautifully: before he becomes one of the loudest explainers in the house, one surviving memory of being noticed begins with him deliberately making himself less intrusive."
    ],
    history: [
      ...(deepAnsunOfficerCharacterBios.ansun.history ?? []),
      { date: "June 25, 2021", title: "Picture day, from underneath", text: "Ansun remembers fishing underneath the girls' picture day and repeatedly diving so he would not photobomb while they changed outfits and took pictures. He includes the encounter in the story of how he was `picked up`. The archive keeps the social texture without pretending this one act was the sole cause of his incorporation." },
      { date: "February 26, 2023", title: "Gut read is not proof", text: "In preserved Officers VC side-text, Ansun explicitly separates what feels true from what the surviving evidence actually proves while reconstructing a dispute. The audio itself is not preserved, so the wiki does not manufacture the missing argument." }
    ],
    characterNotes: [
      ...(deepAnsunOfficerCharacterBios.ansun.characterNotes ?? []),
      { title: "Extrovert volume, selective footprint", text: "Ansun later jokes that most of his extroversion is online. The picture-day memory adds a useful counterweight: being socially vivid does not mean he is incapable of noticing when the considerate move is to get out of somebody else's frame." }
    ]
  },

  han: {
    ...characterBios.han,
    overview: [
      ...characterBios.han.overview,
      "Late 2021 gives the Media Director an extremely Han-shaped ending that refuses to stay ended. After his Family entry in Photo Submissions, he says it is `probably gonna be the last submission for me`. Twenty-two days later he returns with Winter and `still have something left hehe`. Nothing in the archive requires a dramatic explanation. He said probably, apparently discovered one remaining creative itch, and came back with one more thing."
    ],
    history: [
      ...(characterBios.han.history ?? []),
      { date: "November 15 → December 7, 2021", title: "Probably the last submission. Anyway—", text: "After the Family entry Han says it is `probably gonna be the last submission for me`. Twenty-two days later the Winter entry arrives with `still have something left hehe`. The five official late-year entries are Popstar, NightLife, Scary, Family, and Winter; this dossier does not invent visual details for uninspected assets." }
    ],
    characterNotes: [
      ...(characterBios.han.characterNotes ?? []),
      { title: "Probably is doing a lot of work", text: "Han does not stage a retirement and reverse it. He leaves himself one tiny grammatical escape hatch — `probably` — then walks back through it three weeks later because apparently the media dude did, in fact, still have something left." }
    ]
  },

  rummy: {
    ...characterBios.rummy,
    overview: [
      ...characterBios.rummy.overview,
      "Rummy's spelling eventually becomes recognizable enough to function like house voiceprint comedy. Panda tells her to stop `infecting people with your bad spelling`; Moon places herself and Rummy inside the same typo ecosystem; by 2026 Oyasumi can dismiss an imitation with `You can tell the message is fake by the normal spelling. Def not rummy`. The joke is not that Rummy is uniquely incapable of spelling — Rummy herself says nobody in UL has good spelling. The joke is that her particular damage has become legible at a glance."
    ],
    characterNotes: [
      ...(characterBios.rummy.characterNotes ?? []),
      { title: "Normal spelling is suspicious", text: "By 2026 the room can joke that correctly spelled prose is evidence something is not Rummy. Her typos have crossed from individual mistake into recognizable voice signature — basically biometric authentication, if UL had designed biometrics during a gas leak." }
    ]
  },

  aeshleen: {
    ...deepArchiveCharacterBios.aeshleen,
    overview: [
      ...deepArchiveCharacterBios.aeshleen.overview,
      "The old Aesh speedrun legend now has a stopwatch. MEE6 welcomes her in Lobby at 04:11:56; Mugen assigns roles at 04:13:41 already calling her `aesh van gogb`; at 04:14:42 Mugen is welcoming her to the Wall as `GOGB`. That is 2m45.648s from automated welcome to Wall, and barely 1m00.723s from role assignment to evidence room. A month later Ren is still asking whether Aesh holds the record. The house was apparently capable of processing a visitor faster than most people can finish deciding on an avatar.",
      "The same minute resolves the nickname's logic without pretending it resolves the nickname's birth. After Aesh jokes about cutting an ear from sadness, Mugen answers `i'll buy your painting pls dont cut`; the next day Aesh true-replies, `that's why mugen calls me aesh van gogb`. Van Gogh is therefore not a curator's guess. But Mugen had already used `aesh van gogb` before the ear/painting exchange, so the joke is demonstrated here, not born here."
    ],
    history: [
      ...(deepArchiveCharacterBios.aeshleen.history ?? []),
      { date: "April 24, 2021", title: "2 minutes, 45.648 seconds to the Wall", text: "MEE6 welcomes Aesh at 04:11:56.698; Aesh identifies herself as Council / S9 and a friend of Mugen and HamitteY; Mugen assigns roles at 04:13:41.623; the Wall welcome lands at 04:14:42.346. This is Discord/Lobby arrival timing, not proof that Aesh joined the in-game UL club." },
      { date: "April 24–25, 2021", title: "Aesh van gogb explains itself", text: "Aesh makes a Van Gogh ear joke; Mugen answers `i'll buy your painting pls dont cut`; the next day Aesh says that is why Mugen calls her `aesh van gogb`. Because Mugen used the nickname several minutes earlier, this exchange explains the wordplay but does not prove origin." }
    ],
    characterNotes: [
      ...(deepArchiveCharacterBios.aeshleen.characterNotes ?? []),
      { title: "Benchmark, now with an actual clock", text: "The later room remembers Aesh as the speedrun standard. The recovered entry sequence finally gives the legend a number: roughly 2m46s from automated Lobby welcome to Mugen welcoming her into the Wall." },
      { title: "Van gogb, not Van Gogh origin story", text: "Aesh herself supplies the ear/painting logic. Chronology supplies the brake: the nickname is already in Mugen's mouth before that exchange, so the actual first use remains somewhere earlier." }
    ],
    claims: [
      ...(deepArchiveCharacterBios.aeshleen.claims ?? []),
      { text: "On April 24, 2021, 2m45.648s elapsed between MEE6's Lobby welcome for Aeshleen and Mugen's Wall welcome; Mugen's role assignment occurred 1m00.723s before the Wall welcome.", evidence: "lobby + wall", date: "2021-04-24" },
      { text: "Mugen used `aesh van gogb` before Aeshleen's ear joke; Aeshleen later explicitly explained the Van Gogh ear logic, so the joke's meaning is resolved while its origin remains earlier.", evidence: "lobby + wall", date: "2021-04-24 → 2021-04-25" }
    ],
    canonNotes: [
      ...(deepArchiveCharacterBios.aeshleen.canonNotes ?? []),
      "The recovered stopwatch is for Discord/Lobby arrival to Wall filing. Aeshleen introduced herself as Council / S9 and a friend of Mugen and HamitteY; do not rewrite this sequence as an in-game UL membership join.",
      "The Van Gogh exchange is joke context. Do not turn the ear line into a real self-harm event."
    ]
  }
};
