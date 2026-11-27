import { vipCharacterBios } from "./character-bios-vip";

export const run206VipCharacterBios = {
  woosung: {
    ...vipCharacterBios.woosung,
    overview: [
      ...vipCharacterBios.woosung.overview,
      "The May 2023 QOTD archive adds an important receiving-side correction to the care file. Woosung says that when she is struggling, the thing she wants is somebody else to reach out first; she also says she is usually the one making the effort to talk and carrying the conversation. That turns the familiar care-before-disclaimer pattern into a two-way character fact: Woo is practiced at initiating contact, and precisely because she is practiced at it, being sought out can make her feel like she does not have to hold the whole interaction up by herself.",
      "Her examples keep that need grounded in actual people rather than a personality slogan. She names Gilli as somebody who reaches out and makes her smile, Gabu as somebody whose reassurance helps people feel comfortable, and Cele as dependable while also pushing her toward independence. Those are different care verbs from different relationships. The useful through-line is not that Woo wants rescuing; it is that the person who habitually starts the conversation still notices when somebody else crosses the distance first."
    ],
    history: [
      ...vipCharacterBios.woosung.history,
      { date:"May 2023", title:"The initiator would also like to be initiated at, thank you", text:"In QOTD, Woo says she usually makes the effort to talk and carries the conversation, while somebody else reaching out can make her feel less like she has to do everything on her own. Gilli, Gabu, and Cele appear as distinct examples of people whose care lands in different ways. This is reciprocity texture, not a closeness ranking or a claim that Woo is always the sole social initiator." }
    ],
    characterNotes: [
      ...vipCharacterBios.woosung.characterNotes,
      { title:"Conversation Starter Has Filed for Reciprocal Service", text:"Woo's own wording makes the contradiction extremely clean: she is used to reaching out and carrying the conversation, and that is exactly why somebody else initiating matters. Independence and wanting to be met halfway are allowed to occupy the same woman without one cancelling the other." }
    ],
    claims: [
      ...(vipCharacterBios.woosung.claims ?? []),
      { text:"In May 2023 QOTD answers, Woosung said `Reaching out` mattered when she was struggling, explained `I usually make the effort to talk, and I carry the conversation`, and described someone else initiating as helping her feel that she did not need to do everything on her own; she separately named Gilli, Gabu, and Cele as people whose care or support lands in different ways.", evidence:"qotd", date:"2023-05" }
    ],
    relatedPeople: ["mugen","cele","gilli","gabu","moon","rich","nobu","snow","anthos"],
    canonNotes: [
      ...vipCharacterBios.woosung.canonNotes,
      "The May 2023 reciprocity material supports a desire to be reached for as well as a habit of initiating. It does not establish that Woosung always carries every conversation, that the named people are ranked by closeness, or that she depends on them for rescue.",
      "Cele and Woosung are real-life cousins by user-confirmed canon. Gilli and Gabu are relationship examples from Woosung's own answer; do not convert those examples into formal family or intimacy ranks."
    ]
  }
};
