import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const addArchiveCharacter = (character: ExtendedCharacter) => {
  const existingIndex = allCharacters.findIndex((current) => current.id === character.id);
  if (existingIndex < 0) allCharacters.push(character);
  characterById.set(character.id, allCharacters.find((current) => current.id === character.id)!);

  const archiveCast = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCast && !archiveCast.characterIds.includes(character.id)) archiveCast.characterIds.push(character.id);
};

addArchiveCharacter({
  id: "rotini",
  name: "RotiniLM",
  aliases: ["Rotini", "RotiniLM"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2022–2023+",
  logline:
    "Rotini has a useful anti-showoff streak: they will say `I can try`, admit where their cooking stops being impressive, remember only certain kinds of scratch pasta—and then volunteer to make mushroom pasta for everyone else despite not liking mushrooms themselves. Modest claim, practical follow-through.",
  tags: [
    "Archive cast",
    "Group planning",
    "Honest skill calibration",
    "Accommodating follow-through",
    "Easy affectionate play",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Eos",
      note:
        "A 2022 name-finding challenge turns into instant mock-grand affection: Rotini offers a new-best-friend reward, Eos solves the bit, and Rotini pays out `Take my love and friendship` while Eos answers in hearts and hugs. It is playful reciprocity, not a literal closeness ranking.",
    },
    {
      name: "Dayadream",
      note:
        "During a 2023 group-planning thread, Rotini notices that a useful menu should flag allergy information; Daya immediately says it will go in the shared sheet. It is a small, clean collaboration: Rotini spots a practical constraint and Daya folds it into the plan.",
    },
    {
      name: "Mugen",
      note:
        "Mugen asks Rotini for mushrooms with pasta. Rotini answers `I can try`, then expands the offer even while openly admitting mushrooms are not their own thing. The beat is accommodating participation, not proof of some grand caretaker role.",
    },
  ],
  quotes: [
    "I can try",
    "I don't like mushrooms so I can make you guys all the mushrooms you want",
    "I'm not too skilled at cooking but I'm not horrible at it",
    "I think I remember how to make pasta from scratch. But only certain pasta types",
    "I'll make you mushroom lovers some pasta with mushrooms",
    "List the allergies on the menu too if you can so we know :Cute_Blush:",
    "Anyone who can find my name will be my new best friend :Raja_Heart:",
    "Take my love and friendship",
  ],
  claims: [
    "RotiniLM is stable account 531215677978312716 in this intake; the public owner is anchored to that account rather than name similarity.",
    "In the July 22, 2023 group-planning thread, Rotini repeatedly narrows their own cooking claims—`I can try`, `not too skilled`, `I think I remember`, `only certain pasta types`—while continuing to volunteer for the work. The recurring mechanism is honest skill calibration plus participation, not expertise theater.",
    "Rotini explicitly says they do not like mushrooms, then offers to make mushroom pasta for the people who do. The useful ordinary-life detail is dislike-of-mushrooms paired with willingness to cook around other people's preferences.",
    "Rotini suggests listing allergy information on the menu; Dayadream formally replies that it will go in the shared sheet. Private individual dietary and health details from that real-world planning thread remain excluded.",
    "On May 13, 2022, Rotini turns a name-finding challenge into a mock-social prize: whoever finds the name can be the `new best friend`; after Eos answers, Rotini replies `Take my love and friendship` and the two continue with heart/hug emotes. The scene supports easy affectionate play, not a friendship hierarchy.",
  ],
  antiFanon: [
    "Do not infer professional or current cooking competence from Rotini's narrow self-descriptions; Rotini explicitly qualifies their skill.",
    "Do not invert the mushroom detail: Rotini explicitly says they do not like mushrooms.",
    "The planning thread contains private real-world logistics and individual dietary/health information. Those specifics stay private; only Rotini's planning behavior is retained here.",
    "The `new best friend` line is challenge banter and reciprocal affection, not a literal friendship ranking, romance claim, family claim, or exclusivity claim.",
    "Export-time role arrays are not appointment chronology and are not used here to create a formal Staff history.",
  ],
});

addArchiveCharacter({
  id: "nelph",
  name: "Nelph",
  aliases: ["nelph", "N E L P H"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2021+",
  logline:
    "Nelph is a low-volume receipt ambusher with unusually high social intent: one line can launch the prosecution, a silent image dump can make Shiya reach for an alibi, and even `it's an edit` merely gives Nelph the setup for `Caught you in 4K`. Minimal delivery; absolutely not passive.",
  tags: [
    "Archive cast",
    "Wall",
    "Receipt ambusher",
    "Deadpan mock-prosecution",
    "ShiyaX",
    "Absurd bit-building",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "ShiyaX",
      note:
        "Nelph and Shiya have a bounded but recurring mock-prosecution rhythm. Shiya explains that one filed image is an edit; Nelph answers `Caught you in 4K 📷` anyway, and a later Nelph filing gets Shiya's `hmm whos on my account ?` alibi. Context does not end the joke—it becomes the next move.",
    },
    {
      name: "Mercy",
      note:
        "Mercy tags Nelph into a cookie-sales bit, Nelph answers with `😌`, Mercy mirrors it, and Nelph soon upgrades the exchange into `Support your local business 😌`. The same-pocket rhythm is warm cooperative nonsense, without pretending default-message adjacency is structured Reply topology.",
    },
  ],
  quotes: [
    "Caught you in 4K 📷",
    "Support your local business 😌",
    "AKA me and koi",
  ],
  claims: [
    "Nelph is stable account 357270773443854346 / `nelph`, with exported nickname `N E L P H`; this owner is anchored to that account.",
    "On August 6, 2021, Nelph posts a one-line ShiyaX filing. Shiya formally replies that the image is an edit; Nelph formally replies `Caught you in 4K 📷`, and Shiya replies again with an exit emote. Nelph does not need the charge to survive contact with context in order to keep the mock-prosecution alive.",
    "On October 15, 2021, Nelph silently posts two images and then another image 42.200 seconds later; Shiya formally replies to the second filing with `hmm whos on my account ?`. The first two-attachment post is not assigned to Shiya merely by adjacency.",
    "In a November 2021 cookie-sales pocket, Nelph and Mercy mirror `😌` before Nelph escalates to `Support your local business 😌` and then `AKA me and koi`. `koi` remains unidentified; the character beat is Nelph's ability to turn tiny affect into a larger absurd premise.",
    "Across the small Wall sample, Nelph's recurring contradiction is low word count versus high-agency scene steering: the surviving posts disproportionately start, sharpen, or extend the bit rather than merely observe it.",
  ],
  antiFanon: [
    "All images in these Wall pockets remain POSTED BY the named uploader only. Their pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING remain unresolved.",
    "Shiya's statement that one image is an edit is Shiya's direct characterization of that artifact; it does not identify the editor or establish literal wrongdoing.",
    "The repeated Shiya account/alibi joke does not establish actual account compromise. It remains a running mock-alibi lane.",
    "The Nelph–Shiya rhythm supports comfortable reciprocal teasing, not romance, family, exclusivity, conflict, or a friendship rank.",
    "Mercy–Nelph is a probable same-pocket bit-building exchange, not fake structured Reply topology, and `koi` is not identified from nickname/context alone.",
  ],
});
