import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertCharacter = (allCharacters: Character[], next: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) =>
      character.id === next.id ||
      next.stableDiscordIds?.some((stableId) =>
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
      ),
  );

  if (index < 0) {
    allCharacters.push(next);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationshipMap = new Map(
    [...(current.relationships ?? []), ...(next.relationships ?? [])].map((relationship) => [relationship.name, relationship]),
  );

  allCharacters[index] = {
    ...current,
    ...next,
    // Stable-account matches deepen the existing canonical owner. They never rename its route
    // or replace an already-established formal role with a contextual room label.
    id: current.id,
    name: current.name,
    role: current.role,
    aliases: [...new Set([...(current.aliases ?? []), ...(next.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(next.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(next.stableDiscordIds ?? [])])],
    relationships: [...relationshipMap.values()],
    quotes: [...new Set([...(current.quotes ?? []), ...(next.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(next.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(next.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

export const applyRun1496 = (allCharacters: Character[]) => {
  // Chibiterasu / Chubi is owned by integrator-cast-run1496-core-chubi.ts so the Core return
  // material has one canonical structured owner instead of two near-duplicate mutation passes.

  // Whiskey hard identity repair: Nintendo / NintendoShitcube is Zoshaa, never a separate person.
  upsertCharacter(allCharacters, {
    id: "zoshaa",
    name: "Zoshaa",
    aliases: ["Nintendo", "NintendoShitcube", "nintendoshitcube_"],
    billing: "recurring",
    role: "Whiskey-era regular",
    era: "2020+",
    logline: "Cute-chaos register, dry high-context callbacks, and a habit of making old room history current again: Zoshaa can boredom-scroll a stack of old screenshots back into circulation, identify an old incident from half a setup, then remember the funniest possible detail without turning any of it into a formal archive job.",
    tags: ["Whiskey", "Callbacks", "Room memory", "Old-screenshot scavenger", "Receipt culture", "Petty Crimes"],
    stableDiscordIds: ["703429467082719344"],
    relationships: [
      {
        name: "Mugen",
        note: "Zoshaa, under the Nintendo name, can tell Mugen `you a fool` and `Go home` in the compact familiar register that runs through Whiskey. It reads as comfortable teasing, not literal dismissal or authority.",
      },
    ],
    quotes: [
      "That's usually the case",
      "you a fool",
      "Go home",
      "The keylogger one?",
      "Oh man I was hot. Cause I kept fuckin winning",
      "Scrolling through photos out of boredom, found a bunch of old ss lmao",
      "Throwback to snows emo, raining nude bush hours",
    ],
    claims: [
      "Stable Discord account 703429467082719344 is canonical Zoshaa; Nintendo / NintendoShitcube / nintendoshitcube_ are names on that same person, not a second cast member.",
      "Under the Nintendo display, Zoshaa repeatedly behaves as a high-context memory recirculator: an old incident can be identified from partial setup, and on 2020-10-30 boredom-scrolling produces a rapid twelve-image old-screenshot dump that immediately reactivates shared room memory.",
      "A 2020-11-04 `Throwback` line does the same thing deliberately: old Snow-era nonsense is pushed back into the present conversation and other people pick the premise up without a long explanation.",
      "The useful contradiction is offhand delivery / high social payload. Zoshaa presents the callback casually while the room treats the returned material as already meaningful.",
    ],
    antiFanon: [
      "NintendoShitcube / Nintendo is Zoshaa. Do not create, route, or count Nintendo as a separate person.",
      "Memory recirculation does not make Zoshaa an official archivist, prove that she saved everything, or establish authorship of the old screenshots.",
      "Old screenshot packets establish POSTED BY Zoshaa only. MADE BY, CAPTURED BY, and FEATURING remain unresolved unless another source resolves them.",
      "Whiskey retellings and Zoshaa's recognition do not make her the author or cause of every detail in somebody else's version of an old incident.",
      "No formal UL role should be inferred from this Whiskey material.",
    ],
  } as ArchiveCharacter);

  // Run 1496 intentionally does NOT publish the same-name t7morrow/249189... or Pride/387630...
  // bodies into existing public owners. The reviewed current handoffs anchor different stable accounts
  // for t7morrow (212165031293485056) and Pride (380825199836266497), and similar names alone are
  // not an identity bridge. Hold those bodies for explicit reconciliation instead of fusing people.

  // Run 1497 Daycare + Wall: Shiya's receipts are funny because the resistance is selective.
  // He can demand deletion, deploy fake alibis, or go completely silent while everybody else piles on;
  // the deeper pattern is a practiced defendant who still values the social payoff enough to stay in the bit.
  upsertCharacter(allCharacters, {
    id: "shiyax",
    name: "ShiyaX",
    aliases: ["Shiya", "shiyax", "Polo G"],
    billing: "recurring",
    role: "Archive-era Daycare / Wall regular",
    era: "2020–2023+",
    logline: "Deadpan Screenshot Court regular with an oddly precise sense of when to argue and when to let the room hang him in peace: Shiya can demand deletion, blame another person for using his account, accept that Wall is a `small inconvenience`, then admit the point of half the nonsense is making Mugen laugh.",
    tags: [
      "Daycare",
      "Wall",
      "Selective rebuttal",
      "Receipt fatalism",
      "Counter-filing",
      "Room routing",
      "Wardrobe experimentation",
      "Petty Crimes",
    ],
    stableDiscordIds: ["341219730025349130"],
    relationships: [
      {
        name: "Ren",
        note: "Ren is Shiya's strongest recurring receipt foil in the reviewed Wall material: she can catch him, call out the meow, remind the room how unhinged he sounds, or resurrect old material and get an immediate practiced defense. The frequency supports receipt-rival familiarity, not a formal role or closeness rank.",
        href: "/characters/ren",
      },
      {
        name: "Mugen",
        note: "Mugen repeatedly teases Shiya, keeps receipts he would rather delete, and also gets the softer admission underneath the theater: when she says `hes doing anything`, Shiya answers `Making you smile` / `Take the win`; she replies that he did that all night. Their lane is long-running tease-and-laugh fluency, not authority or romance.",
        href: "/characters/mugen",
      },
      {
        name: "Caleb",
        note: "When Caleb says he could have left Shiya out of a receipt, Shiya answers `Thanks beb` and `Good to know someone has my back`. The gratitude is useful because it shows the defendant routine is not emotional indifference; being spared or defended registers immediately.",
      },
      {
        name: "Baby Lyssa",
        note: "Lyssa / Ghoulie is part of Shiya's recurring receipt-pressure environment and earlier GTA co-play. Keep the relationship at familiar public-bit / co-play texture rather than turning receipt volume into a closeness hierarchy.",
        href: "/characters/baby-lyssa",
      },
    ],
    quotes: [
      "They must all me deleted!",
      "Good to know someone has my back",
      "Wall is the highest compliment? Tragic",
      "ONCE",
      "Making you smile",
      "This can stay",
      "Actually it's fine... I can be me",
    ],
    claims: [
      "Stable Discord account 341219730025349130 is ShiyaX / Shiya in the reviewed Daycare and Wall material; the historical `Polo G` display belongs to the same account and is not a second person.",
      "Shiya's Screenshot Court response is selective rather than uniformly defensive: some receipts get deletion demands or fake-alibi theater, some get silence while the room laughs, and at least one later post gets the explicit verdict `This can stay`.",
      "Daycare shows that being defended matters to him: after Caleb says he could have left Shiya out, Shiya answers `Thanks beb` and `Good to know someone has my back`.",
      "Wall turns the same mechanism into long-form familiarity. Shiya calls Wall a `small inconvenience`, asks whether the `highest compliment` framing is `Tragic`, repeats the meow after being publicly called out for it, and later answers Mugen's teasing with `Making you smile` / `Take the win`.",
      "Shiya's wardrobe is a recurring ordinary-life motif across 2020 posts: he talks about finally finding motivation to clean it up, trying to `manify` it with new clothes, and later asking Ren about a favorite YSL dress. The safest public read is experimentation and active taste, not gender or sexuality inference.",
    ],
    antiFanon: [
      "Shiya's fake account-compromise defenses are joke theater, not evidence of real hacking, credential sharing, or security incidents.",
      "`shiya papa` and other joke-family language are not literal family relationships.",
      "Wardrobe posts support taste and experimentation only. Do not infer gender identity, sexuality, transition history, or private biography from clothing choices.",
      "Receipt frequency and room-routing lines do not create an Officer, Staff, moderator, archivist, or governance title.",
      "POSTED BY / caught in a receipt does not establish who made, captured, or appears in unseen media.",
    ],
  } as ArchiveCharacter);

  // Run 1497 Whiskey: Ricochet does not simply remember or post old material; he re-opens it.
  // The same person who notices a reaction or remembers a VC line often becomes the instigator who
  // calls the relevant people back into the joke. That is social memory in motion, not an archivist title.
  upsertCharacter(allCharacters, {
    id: "ricochet",
    name: "Ricochet",
    aliases: ["dragonrichard"],
    billing: "recurring",
    role: "VIP",
    era: "2020+",
    logline: "Dry commentator and live-memory bridge: Ricochet can notice one passive trace, decide the moment is not dead yet, and turn it back into a shared scene by filing the receipt, tagging the person, or dragging yesterday's VC nonsense into today's room.",
    tags: [
      "Whiskey",
      "Wall",
      "Live-memory bridge",
      "Receipt activator",
      "Observer to instigator",
      "Direct summons",
      "Callbacks",
      "Petty Crimes",
    ],
    stableDiscordIds: ["459696170759880745"],
    relationships: [
      {
        name: "Shk",
        note: "Ricochet is comfortable insisting that something Shk said in VC the previous night still belongs on Wall; Shk answers with `oof`, `im not going there`, then `shhh`. One strong receipt-preservation / mock-suppression scene, not a universal consent rule or closeness rank.",
      },
      {
        name: "RV / RΣN",
        note: "Ricochet can post a receipt, directly summon RV into the premise, and get an immediate `YES`. The useful lane is public-bit fluency: the tag is enough to restart the joke without a long setup.",
      },
      {
        name: "Tofu / Cookie",
        note: "Ricochet notices Cookie apparently liking/reacting to something, builds a new bit from that passive signal, then directly calls Tofu and Cookie in; Tofu supplies the remembered backstory. This is collaborative callback fluency, not literal sexual history from the joke wording.",
      },
    ],
    quotes: [
      "we still need to put what you said last night in here",
      "it was in vc and im still dieing from it",
      "I see kuki liking that",
    ],
    claims: [
      "Stable Discord account 459696170759880745 is Ricochet / dragonrichard and remains a separate person from Rich / DragonRich.",
      "Across independent 2020–2021 scenes, Ricochet repeatedly converts an ephemeral or passive trace into active room material: a prior-night VC line becomes proposed Wall material, a posted image becomes a direct summons to RV, and Cookie's apparent like/reaction becomes the seed for a new callback that pulls Tofu and Cookie into the premise.",
      "The useful contradiction is observer → instigator. Ricochet often begins by noticing or remembering, then becomes the person who pushes the observation back into circulation.",
      "This recurring behavior supports a live-memory / receipt-activation read, not an official archivist or historian role.",
    ],
    antiFanon: [
      "Ricochet / dragonrichard is not Rich / DragonRich. Never merge their histories.",
      "The missing prior-night VC wording in the Shk scene must not be reconstructed.",
      "`kink` joke wording in the RV receipt does not establish literal sexual preference or history.",
      "For the image receipt, only POSTED BY Ricochet is established; MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
      "The 2021-10-18 caption is represented only by its final surviving edited text.",
      "Live-memory / receipt activation is a social behavior, not a formal archive, governance, or staff appointment.",
    ],
  } as ArchiveCharacter);
};
