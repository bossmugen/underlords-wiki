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

upsertRelationship(
  relationships,
  "Anayss",
  "Beckiie's earliest surfaced Wall pressure scene changes temperature almost immediately: Anayss welcomes her, then less than a minute later drops a public accusation into the room. Beckiie answers with emphatic denial and almost instantly starts joking about her own presumed fallout. The whiplash is useful social texture; the underlying claim remains unresolved.",
  "less than a minute later",
);

upsertRelationship(
  relationships,
  "Jaxton",
  "Jaxton laughs at Beckiie's predicament inside the same burst and Beckiie answers `ur a bum`. It is compact, pressure-tested banter: she is still rejecting the premise, but she is comfortable enough to swat back instead of dropping out of the room. That does not, by itself, establish a friendship ranking.",
  "pressure-tested banter",
);

allCharacters[beckiieIndex] = {
  ...beckiie,
  aliases: appendUnique(beckiie.aliases, ["beckiieboo"]),
  logline: appendOnce(
    appendOnce(
      beckiie.logline,
      "Off the Wall, the same comic volume has a practical spine: Beckiie can turn `wtf` into checking who else got disconnected and then `now imma email them and have them give me my dang mount` without missing a beat. On the Wall she says she doesn't say anything that gets her there, then keeps showing up with attachments anyway: barely verbal, still filing exhibits.",
      "give me my dang mount",
    ),
    "Her earliest surfaced Wall crisis has the same reflex at higher pressure: deny the premise at full volume, draft her own `welp it was fun being here for 2 days` obituary almost immediately, then keep arguing from inside the joke instead of surrendering the room to it.",
    "fun being here for 2 days",
  ),
  tags: appendUnique(beckiie.tags, [
    "Club Only",
    "Practical chaos",
    "Peer troubleshooting",
    "Media-first Wall filer",
    "Public-pressure humor",
    "Self-narrating defense",
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
    "welp it was fun being here for 2 days",
    "ur a bum",
  ]),
  claims: appendUnique(beckiie.claims, [
    "The stable username `beckiieboo` is Beckiie in the cited support-room material.",
    "On November 16, 2021 in Club Only, Beckiie asks the room whether anyone else lost server connection, compares live status with Mugen and Ren, then says she will email support about the interrupted pulls/mount issue.",
    "Across October 29, 2021, January 25, 2022, and February 6, 2022, every surfaced Beckiie-authored Wall post in this lane carries an attachment; the first and third are attachment-only, while the middle post pairs another attachment with `i feel like i don’t say anything that gets me here`. The cumulative pattern is low-verbiage but active participation: Beckiie may not think of herself as a Wall-worthy talker, but she still brings exhibits.",
    "On January 31, 2020, less than a minute after Anayss welcomed Beckiie, the room flips into a public accusation. Beckiie immediately rejects it, then pivots to `welp it was fun being here for 2 days`; when Jaxton laughs at the predicament, she answers `ur a bum`. The character read is the response pattern—hard denial plus rapid self-narrating humor under public pressure—not a verdict on the unresolved claim.",
  ]),
  antiFanon: appendUnique(beckiie.antiFanon, [
    "The Run 821 behavior expansion comes from same-stable-username Club Only support material, not reconstructed unseen Daycare dialogue.",
    "Expressive complaint language does not imply passivity or instability; the surviving scenes instead show frustration alongside practical action.",
    "Ren and Mugen are demonstrated peer-check contacts in these mundane scenes; do not turn that into a closeness ranking without broader relationship material.",
    "Beckiie's surfaced Wall attachments remain POSTED BY Beckiie only. Their visual contents are uninspected, so do not assign maker, capturer, depicted-subject, target, or self-shaming credit from the uploads alone.",
    "Default adjacency around Beckiie's Wall filings does not establish a recurring relationship lane; no new partner dynamic is promoted from those posts.",
    "The January 31, 2020 public accusation remains unresolved. Do not convert it into a factual misconduct claim, a moderation-history claim, or an attachment/screenshot provenance claim.",
    "Anayss's welcome-to-accusation whiplash and Jaxton's teasing are lived scene relationships, not proof of long-term closeness. Sir Shiro's attachment/reaction remains corroborative participation only unless independent material supplies a stronger edge.",
    "Jaxton stays Jaxton. Do not collapse Jaxton, Jaxson, or Jaxon from name similarity alone.",
  ]),
} as ExtendedCharacter;

characterById.set("beckiie", allCharacters[beckiieIndex]);
