import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

const index = allCharacters.findIndex((candidate) => candidate.id === "shiyax");
if (index < 0) {
  throw new Error("Run 1380 expected canonical ShiyaX owner; refusing to create a duplicate person.");
}

const shiya = allCharacters[index] as ExtendedCharacter;
const relationships = [...(shiya.relationships ?? [])];

upsertRelationship(
  relationships,
  "HamitteY",
  "Hami treats Shiya as somebody who belongs in the chaos and reliably generates it. When Shiya asks why so many Wall posts are about her, Hami answers the exact parent with `cuz u do dis`; later he tags her as `caught in 4k`, and when she misses a chaotic pocket he summons her with `u missed the chaos`. Shiya's answer — `I AM THE CHAOS` — is less a defense than acceptance of the room's diagnosis.",
  "I AM THE CHAOS",
  "/characters/hamittey",
);

upsertRelationship(
  relationships,
  "Ghoulie",
  "Shiya can spot Baby Lyssa / Ghoulie in the room and immediately turn that recognition into an enthusiastic social pull: `GHOULIE IN UL` followed by `YOU JOINING BB ?`. Ghoulie's `I-` / `MAYBE?` keeps the scene in peer-familiar territory; it shows excitement at her presence, not proof that Shiya admitted or recruited her.",
  "GHOULIE IN UL",
  "/characters/ghoulie",
);

allCharacters[index] = {
  ...shiya,
  logline:
    "Shiya knows exactly what the room is for and is still one of the reasons it needs rules. She can redirect wandering chatter to Whiskey, notice when an image looks edited, prosecute somebody with the `(edited)` marker, then become the defendant herself and reach for `All edits`, `Im innocent`, or the recurring weird-exit button. Hami eventually gives her the opening — `u missed the chaos` — and Shiya answers with the cleanest possible self-assessment: `I AM THE CHAOS`.",
  tags: appendUnique(shiya.tags, [
    "Wall etiquette",
    "Chaos participant",
    "Receipt literacy",
    "Prosecutor / defendant contradiction",
    "HamitteY",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(shiya.quotes, [
    "Take it to #🥃💬｜whiskey-room guys",
    "All edits",
    "Im innocent",
    "I AM THE CHAOS",
    "Yall need jesus bad",
    "Anyone hungy?",
  ]),
  claims: appendUnique(shiya.claims, [
    "Across surviving 2021 Wall material, Shiya repeatedly occupies both sides of the room's social machinery: she redirects general chatter toward Whiskey, carries and argues over receipts, gets publicly filed, and participates in the same chaos she occasionally helps contain.",
    "The contradiction is lived rather than titular. Shiya's repeated redirects show comfort enforcing channel etiquette conversationally, but they do not establish a Staff, Officer, moderator, or appointment chronology.",
    "Shiya and HamitteY have a recurring public-callout / chaos-familiarity lane: Hami answers her complaint about being frequent Wall material with `cuz u do dis`, later tags her as `caught in 4k`, and eventually tells her she missed the chaos; Shiya's exact answer is `I AM THE CHAOS`.",
    "Shiya repeatedly notices or weaponizes edit status inside Wall arguments: she calls one object an edit that looks real, later uses `All edits` as her own defense, and in a receipt-counter scene points directly at Discord's `(edited)` marker. That supports receipt literacy, not image-editing authorship.",
    "Petty Crimes: `:aworryWeirdExit:` functions like Shiya's recurring emergency exit after public heat; `Yall need jesus bad` / a later matching GIF forms a mock-moralizing reaction motif; and `im ron weasly` remains a one-off joke role rather than an alias.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "Shiya redirecting people to Whiskey is informal channel-etiquette behavior, not proof of formal moderation authority, Staff/Officer status, or appointment chronology.",
    "Shiya's `whos on my account?` / `Someone else was on my account` lines are recurring mock-defense language in Wall context unless independent account-security evidence says otherwise; do not report a literal compromise from the joke alone.",
    "Baby Lyssa = Ghoulie remains the controlling identity lock. Shiya's excited `YOU JOINING BB ?` supports familiarity and social pull, not proof that Shiya admitted, recruited, or appointed Ghoulie.",
    "Shiya↔HamitteY is comfortable public-chaos familiarity, not romance, family, exclusivity, or a ranked closeness claim.",
    "The reviewed Wall media stay attribution-bounded. POSTED BY does not establish MADE BY, CAPTURED BY, or FEATURING, and Shiya noticing an edit does not establish image-editing skill.",
    "`Yall need jesus bad` and the later Jesus GIF are mock-moralizing reaction language, not evidence of Shiya's religion.",
    "`im ron weasly` is a joke line, not an alias, identity bridge, or Harry Potter role canon.",
  ]),
} as ExtendedCharacter;

characterById.set("shiyax", allCharacters[index]);
