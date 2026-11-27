import { lateVipCharacterBios } from "./character-bios-vip-late";

export const run265VipLateCharacterBios = {
  syv: {
    ...lateVipCharacterBios.syv,
    overview: [
      ...lateVipCharacterBios.syv.overview,
      "Core Rooms makes Syv's shyness more directional than global. She has already described wanting to talk to Gilli and lurking because she could not find the opening sentence. On February 2, 2023, Cit takes the social risk instead: `Ok don’t laugh`, followed by the confession that they have been pronouncing `Syveon` in a French accent. Syv immediately answers `LMAO I kinda want to hear that now`. When Cit says they might try it if everybody is together in VC, Syv sends three hype emotes. She can stall when the opening risk is hers and still become a very easy audience when somebody else risks harmless embarrassment."
    ],
    history: [
      ...lateVipCharacterBios.syv.history,
      { date: "February 2, 2023", title: "French Syveon gets an audience", text: "Cit opens with `Ok don’t laugh`, admits pronouncing `Syveon` in a French accent, and Syv answers `LMAO I kinda want to hear that now`. Cit says they might try it if everybody is in VC together; Syv responds with three hype emotes. The scene refines her social style without proving that Cit later performed the accent or that Syv stopped being shy elsewhere." }
    ],
    characterNotes: [
      ...lateVipCharacterBios.syv.characterNotes,
      { title: "Shy is directional", text: "Syv can have trouble finding her own opening sentence and still be quick to make somebody else's harmless awkwardness feel playable. With Cit, one nervous disclaimer gets laughter in the right direction and then three hype emotes instead of a higher embarrassment tax." }
    ],
    claims: [
      ...lateVipCharacterBios.syv.claims,
      { text: "On February 2, 2023, Cit prefaced a confession with `Ok don’t laugh`, said they pronounced `Syveon` in a French accent, and Syv answered `LMAO I kinda want to hear that now`; when Cit said they might try it if everyone were together in VC, Syv responded with three hype emotes.", evidence: "core-rooms", date: "2023-02-02" }
    ],
    canonNotes: [
      ...lateVipCharacterBios.syv.canonNotes,
      "The French-accent exchange does not establish that Cit actually performed it in VC, that Syv caused Cit's confidence, or that Syv became broadly extroverted. It supports a context-dependent social read only."
    ]
  }
} as const;
