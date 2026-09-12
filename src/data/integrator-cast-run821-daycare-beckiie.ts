import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

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

const beckiieIndex = allCharacters.findIndex((candidate) => candidate.id === "beckiie");
if (beckiieIndex < 0) {
  throw new Error("Run 821 expected the canonical Beckiie owner; refusing to create a second person.");
}

const beckiie = allCharacters[beckiieIndex] as ExtendedCharacter;
const relationships = [...(beckiie.relationships ?? [])];

upsertRelationship(
  relationships,
  "Ren",
  "In 2021 Ren lands inside two wonderfully ordinary Beckiie problems: first suggesting a book when she complains about still being awake, only for `my books are digital atm` to kill the electronics solution; later confirming that the Raja disconnect hit him too. It reads as easy peer troubleshooting, not a grand relationship claim.",
  "my books are digital atm",
  "/characters/ren",
);

upsertRelationship(
  relationships,
  "Mugen",
  "When Beckiie asks whether anybody else just lost connection to Raja, Mugen answers with her own live status and circles back once she gets kicked too. Beckiie uses the room—and Mugen inside it—as a quick reality check before deciding to email support about the interrupted pull/mount problem.",
  "quick reality check",
  "/characters/mugen",
);

allCharacters[beckiieIndex] = {
  ...beckiie,
  aliases: appendUnique(beckiie.aliases, ["beckiieboo"]),
  logline: appendOnce(
    beckiie.logline,
    "Off the Wall, the same comic volume has a practical spine: Beckiie can turn `wtf` into checking who else got disconnected and then `now imma email them and have them give me my dang mount` without missing a beat. On the Wall she says she doesn't say anything that gets her there, then keeps showing up with attachments anyway: barely verbal, still filing exhibits.",
    "give me my dang mount",
  ),
  tags: appendUnique(beckiie.tags, [
    "Club Only",
    "Practical chaos",
    "Peer troubleshooting",
    "Media-first Wall filer",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(beckiie.quotes, [
    "WHY AM I STILL UP AT 1240 AM?!?!?!",
    "my books are digital atm",
    "did anybody else just lose connection to server??",
    "wtf",
    "now imma email them and have them give me my dang mount",
    "i feel like i don’t say anything that gets me here",
  ]),
  claims: appendUnique(beckiie.claims, [
    "Stable Discord account 147865063938719744 / username `beckiieboo` is Beckiie in the cited support-room material.",
    "On October 29, 2021 in Club Only, Beckiie loudly wonders why she is still awake; after Ren suggests a book and fewer electronics, she answers `my books are digital atm`. One privacy-sensitive intermediary line is intentionally excluded and must not be used for health, diagnosis, or family-background inference.",
    "On November 16, 2021 in Club Only, Beckiie asks the room whether anyone else lost server connection, compares live status with Mugen and Ren, then says she will email support about the interrupted pulls/mount issue.",
    "Across October 29, 2021, January 25, 2022, and February 6, 2022, every surfaced Beckiie-authored Wall post in this lane carries an attachment; the first and third are attachment-only, while the middle post pairs another attachment with `i feel like i don’t say anything that gets me here`. The cumulative pattern is low-verbiage but active participation: Beckiie may not think of herself as a Wall-worthy talker, but she still brings exhibits.",
  ]),
  antiFanon: appendUnique(beckiie.antiFanon, [
    "The Run 821 behavior expansion comes from same-stable-ID Club Only support material, not reconstructed unseen Daycare dialogue.",
    "Expressive complaint language does not imply passivity, instability, or a medical condition; the surviving scenes instead show frustration alongside practical action.",
    "Ren and Mugen are demonstrated peer-check contacts in these mundane scenes; do not turn that into a closeness ranking without broader relationship material.",
    "Beckiie's surfaced Wall attachments remain POSTED BY Beckiie only. Their visual contents are uninspected, so do not assign maker, capturer, depicted-subject, target, or self-shaming credit from the uploads alone.",
    "Default adjacency around Beckiie's Wall filings does not establish a recurring relationship lane; no new partner dynamic is promoted from those posts.",
  ]),
} as ExtendedCharacter;

characterById.set("beckiie", allCharacters[beckiieIndex]);