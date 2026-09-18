import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationships = (
  current: Character["relationships"] | undefined,
  additions: NonNullable<Character["relationships"]>,
) => {
  const merged = [...(current ?? [])];
  for (const addition of additions) {
    const index = merged.findIndex((relationship) => relationship.name === addition.name);
    if (index >= 0) merged[index] = { ...merged[index], ...addition };
    else merged.push(addition);
  }
  return merged;
};

// Daycare/lobby: current hard identity canon assigns stable account
// 783389804079349800 / opalite.honey to Mimi, not Mia. The miner's
// `Mia` label is stale, so the social-steward arc deepens Mimi only.
const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) {
  throw new Error("Run 1299 expected the canonical Mimi owner; refusing to propagate the stale Mia bridge.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const mimiNext: ExtendedCharacter = {
  ...mimi,
  description:
    "Mimi is easy to mistake for the soft one right up until she is holding the folder. She calls Gilli a jewel between heart emotes, blushes when Dayadream calls her UL's honorary sweetheart, and is also perfectly happy to feed the Wall herself. That warmth becomes practical, too: she first appears on the receiving end of a newcomer handoff, then later becomes one of the people greeting newcomers, laying out safety rules, pointing them toward the server map and Whiskey, and getting them settled. Soft is not passive here. Mimi can be affectionate, procedural, and delighted by communal nonsense in the same breath.",
  logline:
    "Affectionate sweetheart with a filing habit and a steward streak: Mimi can blush at praise, drop a Wall packet, then turn around and make sure the next newcomer knows the rules and where everybody actually hangs out.",
  tags: unique([
    ...(mimi.tags ?? []),
    "Newcomer steward",
    "Warm procedure",
    "Lobby routing",
  ]),
  quotes: unique([
    ...(mimi.quotes ?? []),
    "Hii Welcome!!",
    "Thank you role has been assigned!",
  ]),
  claims: unique([
    ...(mimi.claims ?? []),
    "Stable account 783389804079349800 / `opalite.honey` is the canonical Mimi / Opalite Honey owner. A 2022–2024 lobby sequence gives that owner a clean recipient-to-steward arc: Mimi first receives Kiro's greeting and Gabu's biodata / server-tour / Whiskey routing, then repeatedly performs the same kind of welcome work herself across 2023–2024.",
    "Mimi's later welcome messages pair warmth with practical procedure. She can open with `Hii Welcome!!` or a cute `hi hi!`, then immediately give minor-safety guidance, the no-drama / DM rule, biodata and server-tour links, and the Whiskey main-chat route. In February 2024 she also says `Thank you role has been assigned!` before the usual welcome guidance. The lived behavior supports social stewardship without requiring a formal title chronology.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "The Run 1299 Daycare handoff labels stable account 783389804079349800 as Mia. Current hard canon assigns that account to Mimi / Opalite Honey, while Mia remains a separate person. The stale miner label is corrected at integration time and must not recreate Mia = Mimi.",
    "Repeated newcomer guidance and one `role has been assigned` line show lived welcome/routing behavior; they do not establish the date of any Staff or Officer appointment, prove Mimi authored the reusable template, or let export-time roles backdate governance chronology.",
    "Mimi's historical minor-status self-intro is intentionally not reproduced in public character copy. Later safety guidance does not justify guessing that her own earlier status caused or motivated the work.",
  ]),
};
allCharacters[mimiIndex] = mimiNext;
characterById.set("mimi", mimiNext);

// Louvre 2020: Ren's excitement repeatedly has an implementation reflex.
const renIndex = allCharacters.findIndex((character) => character.id === "ren");
if (renIndex < 0) {
  throw new Error("Run 1299 expected the canonical Ren / RV owner; refusing to create a duplicate.");
}

const ren = allCharacters[renIndex] as ExtendedCharacter;
const renNext: ExtendedCharacter = {
  ...ren,
  logline:
    "Ren is a social index with an implementation reflex: she remembers people and old bits, makes prompts legible with examples, and can hear one useful idea, volunteer herself for the recurring work before the thought has finished arriving, and then type like the deadline started thirty seconds ago.",
  tags: unique([
    ...(ren.tags ?? []),
    "Implementation reflex",
    "Self-assigned poster homework",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(ren.relationships, [
    {
      name: "Anthos",
      note:
        "In a 2020 Louvre exchange Anthos looks at the creative material under discussion and suggests using it for recruitment. Ren immediately supplies cadence and labor: she can change the poster daily, share it daily, and apparently needs to get to work right now. It is one clean idea-to-implementation handoff, useful as collaborative texture without turning them into a permanent strategist/implementer duo.",
      href: "/characters/anthos",
    },
  ]),
  quotes: unique([
    ...(ren.quotes ?? []),
    "I CAN CHANGE THE POSTER DAILY SND SHARE IT DAILY OMG",
    "I NEED TO GET TO W O R K",
  ]),
  claims: unique([
    ...(ren.claims ?? []),
    "On July 31, 2020, Anthos suggests using the creative material under discussion for recruitment; Ren immediately volunteers `I CAN CHANGE THE POSTER DAILY SND SHARE IT DAILY OMG` and `I NEED TO GET TO W O R K`. The useful person read is excitement turning straight into a concrete recurring task, an earlier maker/implementation seed than her later Photoshoot example-image work.",
  ]),
  antiFanon: unique([
    ...(ren.antiFanon ?? []),
    "Ren volunteers a daily poster routine in the 2020 Louvre scene, but exact follow-through on changing or sharing a poster every day is not recovered. Do not promote the volunteered plan into a completed daily schedule.",
    "The Louvre exchange does not assign MADE BY credit for any nearby poster object and does not create a formal media or recruitment appointment for Ren or Anthos.",
  ]),
};
allCharacters[renIndex] = renNext;
characterById.set("ren", renNext);

// Whiskey/Wall packet: keep this exact account distinct from similarly named
// Cookie/Kuki owners. The stable ID and exact display handle are the bridge.
const cookiesAliases = ["juicy.cookie", "🍬Cookies and 🧃Juicebox"];
const cookiesExistingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "cookies-and-juicebox" ||
    character.name === "Cookies and Juicebox" ||
    (character.aliases ?? []).some((alias) => cookiesAliases.includes(alias)),
);

const cookiesCurrent =
  cookiesExistingIndex >= 0 ? (allCharacters[cookiesExistingIndex] as ExtendedCharacter) : undefined;
const cookiesNext: ExtendedCharacter = {
  ...(cookiesCurrent ?? {}),
  id: cookiesCurrent?.id ?? "cookies-and-juicebox",
  name: cookiesCurrent?.name ?? "Cookies and Juicebox",
  aliases: unique([...(cookiesCurrent?.aliases ?? []), ...cookiesAliases]),
  billing: cookiesCurrent?.billing ?? "legacy",
  role: cookiesCurrent?.role ?? "Archive-era social cast",
  era: cookiesCurrent?.era ?? "2020–",
  description:
    "Cookies and Juicebox is extremely comfortable living on both sides of Screenshot Court. Mugen can expose the night shift and Cookies answers with mock outrage; Tofu can put Cookies on blast and get `its not how it looks like` / `i swear`; a few weeks earlier Cookies is the one filing Tofu's bee-spam nonsense. The important part is the reciprocity. Cookies does not stay trapped in the role of target. Once the room establishes the joke, she reacts, riffs, posts back, and helps keep the machine running.",
  logline:
    "Wall defendant who keeps becoming a co-author: Cookies reacts theatrically when the receipts turn toward her, then cheerfully turns around and files somebody else.",
  tags: unique([
    ...(cookiesCurrent?.tags ?? []),
    "Archive cast",
    "Wall",
    "Screenshot Court",
    "Reciprocal teasing",
    "Target becomes co-author",
    "Fast callbacks",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(cookiesCurrent?.relationships, [
    {
      name: "Tofu",
      note:
        "Their Wall lane is reciprocal enough to reverse direction cleanly. Cookies posts a screenshot and says someone really did spam her with bees; Tofu immediately yells `PUTTING ME ON BLAST!` and promises to do it again. Later Tofu posts back at Cookies with `IS A COCHINO!`, and Cookies runs straight into `its not how it looks like` / `i swear`. The texture is mutual teasing and comfort with being each other's material, not a romance or sexual-history claim.",
      href: "/characters/tofu",
    },
    {
      name: "Mugen",
      note:
        "When Mugen drops a five-image night-shift packet and calls out `WHAT'S GOOD NIGHT SHIIIIFT`, Cookies answers `dang Boss, gotta expose us like that XD`. The line is mock protest, but it also shows how quickly Cookies can accept the room's frame and play inside it.",
      href: "/characters/mugen",
    },
  ]),
  quotes: unique([
    ...(cookiesCurrent?.quotes ?? []),
    "dang Boss, gotta expose us like that XD",
    "the new profile cult has begun",
    "I REFUSE",
    "wasnt kidding when she said gonna spam me with bees",
    "its not how it looks like",
    "i swear",
    "Rummy moments xD",
  ]),
  claims: unique([
    ...(cookiesCurrent?.claims ?? []),
    "Stable Discord account 249351359290277890 is `juicy.cookie`, displayed in the reviewed material as `🍬Cookies and 🧃Juicebox`. That exact stable account anchors this owner; it is not merged with similarly named Cookie/Kuki people.",
    "The surviving threshold is September 29, 2020, when MEE6 welcomes Cookies and Cookies answers `yellow`; that is a surviving Discord threshold, not an absolute UL origin or recruiter record.",
    "Across 2021 Wall scenes Cookies repeatedly moves between target and contributor. She mock-protests Mugen's night-shift exposure, answers Bailey's ghost joke with a Ghostbusters GIF, refuses Ren's `JOIN US` profile-cult pitch, puts probable Tofu bee-spam on blast, and later becomes the subject of Tofu's own filing. The cumulative pattern is participation through reaction, callback, and reciprocal filing rather than a one-way victim role.",
    "Cookies remains directly present in later Wall samples too, including `i remember horse-kun` and `Rummy moments xD` in 2022. Those rows establish later presence without claiming continuous activity.",
  ]),
  antiFanon: unique([
    ...(cookiesCurrent?.antiFanon ?? []),
    "Do not merge stable account 249351359290277890 / `juicy.cookie` with other Cookie, Kuki, Rookie Cookie, or similarly named owners without an explicit identity bridge.",
    "Wall attachments in this packet retain recorded POSTED BY attribution only. MADE BY, CAPTURED BY, FEATURING, and unseen visual contents remain unresolved unless separately established.",
    "Tofu's `COCHINO` accusation is peer-language inside a teasing scene and does not establish literal sexual conduct. Bailey's ghost exchange is one bounded scene, not a closeness ranking.",
    "MEE6's September 2020 welcome is the earliest surviving threshold in this packet, not proof of absolute origin, recruitment, or role chronology.",
  ]),
};

if (cookiesExistingIndex >= 0) allCharacters[cookiesExistingIndex] = cookiesNext;
else allCharacters.push(cookiesNext);
characterById.set(cookiesNext.id, cookiesNext);
