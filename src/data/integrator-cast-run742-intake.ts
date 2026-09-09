import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  next: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === next.name);
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Daycare/support-source synthesis: Sye's technical competence matters because people
// can actually hand her the stupid machinery with almost no ceremony. The visible
// annoyance stays in the character instead of being polished out of the helper role.
const syeIndex = allCharacters.findIndex((character) => character.id === "sye");
if (syeIndex < 0) {
  throw new Error("Run 742 expected the existing canonical Sye Cast owner; refusing to create a duplicate.");
}

const sye = allCharacters[syeIndex] as ExtendedCharacter;
const syeRelationships = [...(sye.relationships ?? [])];
upsertRelationship(syeRelationships, {
  name: "Snow",
  note:
    "Sye can describe a scheduler session as `just helping snow out`, discover a twenty-three-hour mess with `What did snow do!!!`, and keep fixing it until Snow comes back with `awesome thanks Syen`. A year later Sye still remembers the workaround she got Snow to use. Their useful texture is recurring working familiarity, not appointment chronology.",
  href: "/characters/snow",
});
upsertRelationship(syeRelationships, {
  name: "Gabu",
  note:
    "Gabu can send `sye can you add pls?` and get `Yes I can` twenty seconds later. In the daylight-savings exchange, Gabu accepts Sye's explanation with `That's smart` / `tysmm bb`; Sye closes `Np`. Practical trust, direct summons and warm low-friction handoffs all fit in the same lane.",
  href: "/characters/gabu",
});

allCharacters[syeIndex] = {
  ...sye,
  logline:
    "The person people hand the stupid machinery to: schedules, daylight saving, bot weirdness and tiny edits. Sye can troubleshoot in public, yell `23 hours!!! What did snow do!!!`, keep fixing anyway, and answer direct asks fast enough that competence mostly feels like availability rather than a performance of authority.",
  tags: unique([
    ...(sye.tags ?? []),
    "Saber",
    "Systems fixer",
    "Low-friction help",
    "Public troubleshooting",
    "Daycare",
  ]),
  relationships: syeRelationships,
  quotes: unique([
    ...(sye.quotes ?? []),
    "Hi gili just helping snow out",
    "23 hours!!! What did snow do!!!",
    "Yes I can",
    "maybe we should remove Snowden bot from this channel ? i wonder if its interfering",
  ]),
  claims: unique([
    ...(sye.claims ?? []),
    "Across 2020-2023 Saber-control support receipts, Sye repeatedly works inside scheduling problems rather than merely commenting on them: live configuration/testing for Snow, a daylight-savings workaround explained to Gabu, a direct Gabu request accepted in twenty seconds, and a tentative Snowden-interference hypothesis.",
    "Sye's larger direct Daycare footprint and already-established 2025 `ask anyway may know` helper reflex make the systems work part of a longer practical-helper pattern rather than a one-bot specialty.",
  ]),
  antiFanon: unique([
    ...(sye.antiFanon ?? []),
    "Sye helping Snow with Saber does not establish exclusive bot ownership, a formal maintainer succession, or appointment chronology.",
    "Gabu's `tysmm bb` and later heart-heavy thanks are warm social language inside practical work; they are not romance evidence or a closeness ranking.",
    "Sye's January 2023 Snowden line is a diagnostic hypothesis, not proof that Snowden was interfering or that Snowden/Carl-bot was the unidentified bot Mugen later said UL broke.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[syeIndex].id, allCharacters[syeIndex]);

// Core Rooms broad sample: Cas is thin, but the same specific humor mechanism repeats
// across separate practical game problems. Keep it as a compact WIKI owner rather than
// inflating three September scenes into a MAIN biography or a fake Incident page.
const casId = "cas";
if (!allCharacters.some((character) => character.id === casId)) {
  const cas: ExtendedCharacter = {
    id: casId,
    name: "Cas",
    aliases: ["thekirinsdream"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2020–",
    logline:
      "When Dragon Raja behaves stupidly, Cas starts writing lore around the malfunction before the troubleshooting is even finished: an abandoned first character squats on the preferred username, a bugged planter becomes an unofficial familiar, and a missed merge reward turns into an NPC basically saying `too late bro we're already together`.",
    tags: [
      "Archive cast",
      "2020",
      "Dragon Raja",
      "Game-friction storyteller",
      "Troubleshooting",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Mugen",
        note:
          "Cas brings in the planter-box glitch; Mugen gives the boring useful answer first — restart — then later normalizes the absurdity with his own screen-glitch memory and the fact that other people had seen the planter problem. Fix first, laugh about the machinery second.",
        href: "/characters/mugen",
      },
    ],
    quotes: [
      "Sup im potency bc my usual username as seen here is taken by my first character i abandoned",
      "i think this planter box is part of my character now",
      "it follows me every time i teleport",
      "can i still get that or is the npc like its too late bro we're already together",
    ],
    claims: [
      "On 2020-09-17 Cas self-identifies the current in-game name as `Potency` because the preferred username is still occupied by a first character Cas says was abandoned.",
      "On 2020-09-18 a real planter-box character-select glitch stops being only a bug report in Cas's wording and becomes `part of my character now` because it follows on teleport.",
      "On 2020-09-25 Cas asks a real server-merge reward question while imagining the NPC failure state as `its too late bro we're already together`, repeating the same practical-question / unserious-worldbuilding habit.",
    ],
    antiFanon: [
      "`Potency` is a self-stated 2020 in-game name for that doorway moment, not a permanent/current-name claim.",
      "The planter is explicitly a glitch in the source. Do not turn `Planter Box Familiar` into an intentional cosmetic, literal pet, permanent character feature, or planter preference.",
      "`poofed briefly` describes one short absence around a missed reward; it does not establish chronic disappearance or inactivity.",
      "The imagined NPC sentence is Cas's comic framing, not actual Dragon Raja dialogue.",
    ],
  };

  allCharacters.push(cas);
  characterById.set(casId, cas);
  const archiveCast = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCast && !archiveCast.characterIds.includes(casId)) archiveCast.characterIds.push(casId);
}

// Wall deepener: Spicy already has a canonical WIKI owner from the earlier Whiskey
// pass. Fold the defendant-theater / archive-memory contradiction into that person;
// do not create Josh II or a standalone Wall episode.
const spicyIndex = allCharacters.findIndex((character) => character.id === "spicy-hotpot");
if (spicyIndex < 0) {
  throw new Error("Run 742 expected the existing canonical Spicy Hotpot Cast owner; refusing to create a duplicate.");
}

const spicy = allCharacters[spicyIndex] as ExtendedCharacter;
const spicyRelationships = [...(spicy.relationships ?? [])];
upsertRelationship(spicyRelationships, {
  name: "Gilli",
  note:
    "Gilli recognizes `JOSH` before his surviving doorway self-introduction, later files and tags him, and can mock-call for exile while also wheezing at the crime. Spicy remembers that Gilli probably put him on the Wall `ages ago`, true-replies to the old filing with `I knew it`, then eventually sends her mention 28 times in one message. They do not merely remember old evidence; they deliberately become new evidence for each other.",
  href: "/characters/gilli",
});
upsertRelationship(spicyRelationships, {
  name: "Ren",
  note:
    "Spicy starts the boiled-mayo inquiry, answers Ren's `Are you interested?` with one dry `no`, posts the textual `stop-get-some-help` Tenor URL, and gets Ren's true-reply `*make me*`. Boundary stated, bit very much not over.",
  href: "/characters/ren",
});

allCharacters[spicyIndex] = {
  ...spicy,
  logline:
    "Formal outsider who learned UL's house grammar alarmingly fast: age-threshold procedure answered with height and citizenship, hydration nag-care, and Wall defendant theater where the guy saying `??????` / `What did I do` can also find the old receipt, say `I knew it`, then ping Gilli 28 times because apparently evidence prevention was never the plan.",
  tags: unique([
    ...(spicy.tags ?? []),
    "Mock defendant",
    "Receipt memory",
    "Button pusher",
  ]),
  relationships: spicyRelationships,
  quotes: unique([
    ...(spicy.quotes ?? []),
    "??????",
    "What did I do",
    "I knew it",
  ]),
  claims: unique([
    ...(spicy.claims ?? []),
    "Spicy's tiny 2021 Wall footprint repeatedly pairs active nuisance-making with mock-bewildered defendant language. The strongest contradiction arrives when `??????` / `What did I do` coexist with a true-reply to an older filing and `I knew it`.",
  ]),
  antiFanon: unique([
    ...(spicy.antiFanon ?? []),
    "Gilli's `SOME EXILE HIM` after Spicy's 28-ping barrage is joke/social language, not governance, moderation, or actual removal.",
    "The April and May Wall images remain visually uninspected; keep them POSTED BY their authors and do not infer subject, maker, capturer, or featured people from the text sequence.",
    "Wall-local `Josh` recognition is compatible with the already-established Joshx doorway identity, but this overlay does not create a new person or use name similarity as an independent identity bridge.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[spicyIndex].id, allCharacters[spicyIndex]);
