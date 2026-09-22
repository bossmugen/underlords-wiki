import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const upsert = ({
  preferredId,
  stableId,
  names,
  build,
}: {
  preferredId: string;
  stableId: string;
  names: string[];
  build: (previous: ExtendedCharacter | undefined, resolvedId: string) => ExtendedCharacter;
}) => {
  const existingIndex = allCharacters.findIndex(
    (character) =>
      character.id === preferredId ||
      names.includes(character.name) ||
      (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
  const resolvedId = previous?.id ?? preferredId;
  const next = build(previous, resolvedId);

  if (existingIndex >= 0) allCharacters[existingIndex] = next;
  else allCharacters.push(next);
  characterById.set(resolvedId, next);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(resolvedId)) {
    archiveCastGroup.characterIds.push(resolvedId);
  }
};

upsert({
  preferredId: "mimi",
  stableId: "783389804079349800",
  names: ["Mimi", "Opalite Honey", "༯"],
  build: (previous, resolvedId) => ({
    ...(previous ?? {}),
    id: resolvedId,
    name: previous?.name ?? "Mimi",
    aliases: unique([...(previous?.aliases ?? []), "Opalite Honey", "༯"]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "783389804079349800"]),
    billing: previous?.billing ?? "legacy",
    role: previous?.role ?? "AI-art tinkerer · peer helper",
    era: previous?.era ?? "2022–2023+",
    logline:
      "Mimi learns by poking at the machinery until the trick becomes reusable, then turns around and explains the same machinery to somebody else. In the AI-art rooms she moves from asking why prompt terms are there at all to keeping seeds, building a mental prompt library, testing light and white hair, helping friends with ControlNet and render direction, and casually offering to turn their pictures into generated art. Her taste leans dark; her curiosity leans practical.",
    tags: appendUnique(previous?.tags, [
      "Archive cast",
      "Louvre",
      "AI art",
      "Prompt tinkering",
      "Peer helper",
      "Workflow brain",
      "Dark-image taste",
      "Petty Crimes",
    ]),
    relationships: [
      ...(previous?.relationships ?? []).filter(
        (relationship) => !["Fye", "RyvanDusios"].includes(relationship.name),
      ),
      {
        name: "Fye",
        note: "By 2023 Mimi is no longer only asking AI-art questions; she is helping Fye troubleshoot ControlNet and lighting. The useful thing is the reversal from learner to the person with a practical answer, without pretending she became anybody's formal instructor.",
      },
      {
        name: "RyvanDusios",
        note: "Mimi trades practical render and 3D-workflow advice with RyvanDusios, including lighting/prompt language and tool suggestions such as Daz Studio, Cascadeur, and Blender. She is also perfectly willing to say where her own lane stops: she does not do 3D animation.",
      },
    ],
    quotes: appendUnique(previous?.quotes, [
      "Send me a pic and i can turn you into one",
      "I like mine dark bwhaha.",
      "i don't do 3d animation",
    ]),
    claims: appendUnique(previous?.claims, [
      "Stable Discord account 783389804079349800 is Mimi / Opalite Honey / ༯. It is not Mia (stable account 439871089498062859).",
      "Across the reviewed November 2022 through 2023 Louvre/AI-art material, Mimi develops from an active question-asker into a practical peer helper: she asks about style references and prompt mechanics, tests lighting and hair, keeps seeds for repeatable reruns, and later helps others with ControlNet, render direction, and adjacent 3D tools.",
      "Mimi explicitly says she likes her generated images dark, supporting a bounded moody/dark-image taste rather than a universal style rule.",
      "Mimi's repeated interest in prompt libraries, retained seeds, reusable wording, and tool/workflow handoffs gives her a practical repeatability streak: she wants the trick to be usable again, not merely lucky once.",
    ]),
    antiFanon: appendUnique(previous?.antiFanon, [
      "Mimi is not Mia. Do not bridge stable account 783389804079349800 to Mia / stable account 439871089498062859 from similar display names or miner shorthand.",
      "Practical room guidance — including telling someone not to put NSFW text into the AI room and pointing toward the NSFW thread — is boundary awareness, not proof of Staff/moderator appointment or chronology.",
      "Ren's hypothetical Geralt/Pennywise Tavern AI examples are Ren's examples; do not convert them into Mimi's bots, chats, or personal roleplay canon.",
      "A specific self-referential image line may establish Mimi as the subject of that exact item only. Keep POSTED BY / MADE BY / CAPTURED BY / FEATURING separate for adjacent media.",
      "`I like mine dark` is a taste statement in context, not a claim that all of Mimi's art is dark or that she rejects other styles.",
    ]),
  }),
});

upsert({
  preferredId: "zhenxi",
  stableId: "521090075023884290",
  names: ["Zhēnxī", "Zhenxi"],
  build: (previous, resolvedId) => ({
    ...(previous ?? {}),
    id: resolvedId,
    name: previous?.name ?? "Zhēnxī",
    aliases: unique([...(previous?.aliases ?? []), "Zhenxi"]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "521090075023884290"]),
    billing: previous?.billing ?? "legacy",
    role: previous?.role ?? "Wall regular · dry consensus-checker",
    era: previous?.era ?? "2020–2021+",
    logline:
      "Zhēnxī can spend a long stretch as reaction-level presence and then enter the prose record with exactly one sentence that either checks whether the room is serious or makes the absurdity worse. Her Wall voice is dry, blunt, and economical: `did she really`, `all 3 are pretty bad`, then—when the material deserves it—something as cursed as `now he has 6 assholes.`",
    tags: appendUnique(previous?.tags, [
      "Archive cast",
      "Wall",
      "Dry humor",
      "Consensus checks",
      "Reaction regular",
      "Presentation brain",
      "Petty Crimes",
    ]),
    relationships: [
      ...(previous?.relationships ?? []).filter((relationship) => relationship.name !== "Rai"),
      {
        name: "Rai",
        note: "When Rai changes presentation, Zhēnxī's contribution is tiny and practical: the newer symbol/display name is easier to find. It is a small glimpse of the same directness she brings to Wall jokes, applied to discoverability instead of prosecution.",
      },
    ],
    quotes: appendUnique(previous?.quotes, [
      "all 3 are pretty bad",
      "now he has 6 assholes.",
      "wheres the pregnant sonic",
      "did she really",
      "ok yea shes pretty bad too.",
    ]),
    claims: appendUnique(previous?.claims, [
      "Stable Discord account 521090075023884290 is Zhēnxī in the reviewed Wall handoff.",
      "Zhēnxī's recurring Wall mechanism is selective escalation: substantial stretches of reaction-level participation are punctuated by short prose when she wants to verify the premise, register a blunt judgment, or sharpen the joke with one absurd line.",
      "A small presentation/discoverability exchange with Rai shows that the directness is not limited to jokes; Zhēnxī can also give a simple practical read without turning it into a speech.",
    ]),
    antiFanon: appendUnique(previous?.antiFanon, [
      "Reaction-parent dates are participation floors, not exact reaction timestamps.",
      "Wall escalation language is comedy unless independently established otherwise; do not literalize joke quantities or bodily claims.",
      "Media near Zhēnxī's reactions or comments does not establish maker, capturer, or subject attribution.",
      "Do not promote one practical display-name comment into a formal design, moderation, or accessibility role.",
    ]),
  }),
});

upsert({
  preferredId: "ghostt",
  stableId: "221019150500970496",
  names: ["Ghostt", "Christmas Ghostt"],
  build: (previous, resolvedId) => ({
    ...(previous ?? {}),
    id: resolvedId,
    name: previous?.name ?? "Ghostt",
    aliases: unique([...(previous?.aliases ?? []), "Christmas Ghostt"]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "221019150500970496"]),
    billing: previous?.billing ?? "legacy",
    role: previous?.role ?? "Wall regular · dry self-own",
    era: previous?.era ?? "2020–2021+",
    logline:
      "Ghostt treats being caught, quoted, or put on the Wall like an extremely minor inconvenience in the life of a very important celebrity. `Im just so famous` becomes funnier every time the room catches him skimming context or remembers another old receipt; when Mugen says he is busted, Ghostt's defense is simply `Sad.` Even his panic is compressed enough to sound deadpan.",
    tags: appendUnique(previous?.tags, [
      "Archive cast",
      "Wall",
      "Dry humor",
      "Faux fame",
      "Clipped admissions",
      "Aesthetic jabs",
      "Sleep-check peers",
      "Petty Crimes",
    ]),
    relationships: [
      ...(previous?.relationships ?? []).filter((relationship) => relationship.name !== "Mugen"),
      {
        name: "Mugen",
        note: "Mugen can catch Ghostt skimming or missing context and call it immediately; Ghostt's answer to being busted is the microscopic `Sad.` The exchange works because he does not need a defense speech—the room already has the joke and he is willing to be the defendant for one beat.",
      },
    ],
    quotes: appendUnique(previous?.quotes, [
      "Im just so famous",
      "Sad.",
      "looks like this was made in microsoft paint.",
      "I’ll sleep for a week.",
      "I really did",
    ]),
    claims: appendUnique(previous?.claims, [
      "Stable Discord account 221019150500970496 is Ghostt / Christmas Ghostt in the reviewed Wall material.",
      "Ghostt repeatedly turns Wall inclusion and being caught in context mistakes into a faux-celebrity self-joke: `Im just so famous`, `I was on the wall`, and later `I'm famous` recur as self-aware deflection rather than status claims.",
      "His delivery is characteristically compact. He can admit he skimmed with `I really did`, answer being busted with `Sad.`, or puncture an image with a Microsoft Paint comparison without building a whole performance around it.",
      "Peers notice Ghostt's sleep habits enough to tell him to sleep or refer back to having discussed it before; Ghostt answers in the same dry register, including `I’ll sleep for a week.` This supports a small recurring care/check-in pattern without turning sleep banter into medical biography.",
      "The `Christmas Ghostt` presentation and `I like it for christmas` line support seasonal self-presentation as a tiny preference, not a separate identity.",
    ]),
    antiFanon: appendUnique(previous?.antiFanon, [
      "Ghostt's `famous` lines are a Wall/self-own running gag, not evidence of real-world celebrity or public notoriety.",
      "The Microsoft Paint line is an aesthetic jab, not evidence that Ghostt made, edited, captured, or knows the provenance of the image.",
      "Peer sleep reminders and Ghostt's `sleep for a week` joke do not establish a diagnosis, chronic condition, or broader health claim.",
      "The creator of the Christmas-themed media/item remains unresolved unless separately attributed; Ghostt liking it does not establish authorship.",
    ]),
  }),
});
