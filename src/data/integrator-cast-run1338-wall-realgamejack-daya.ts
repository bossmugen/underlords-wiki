import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const jackIndex = allCharacters.findIndex((character) => character.id === "realgamejack");
if (jackIndex < 0) {
  throw new Error("Run 1338 expected the canonical RealGameJack owner; refusing to create a duplicate.");
}

const jack = allCharacters[jackIndex] as ExtendedCharacter;
const jackNext: ExtendedCharacter = {
  ...jack,
  description:
    "Jack knows exactly what kind of room the Wall is. When Ely complains that everything said in public gets posted, Jack answers `We are the same` — less a protest than instant recognition that he, too, lives in Screenshot Court's blast radius. That fits the Jack who later recruits Mugen to file his own material and keeps asking why the paperwork has not cleared yet. His other specialty is compression: `:idiot:` when a thread has become too stupid for prose, repeated `:nocomment:` when the object itself has already done enough damage. He can be defendant, volunteer filer, and deadpan audience without changing personality. The joke usually lands hardest when Jack refuses to over-explain it.",
  logline:
    "Archive-aware Wall straight man with a self-filing habit: Jack knows the room can catch him, sometimes helps it along himself, and can reduce an entire reaction to `:idiot:` or `:nocomment:` when prose would only make things worse.",
  tags: unique([
    ...(jack.tags ?? []),
    "Screenshot Court",
    "Archive-aware",
    "Compressed reactions",
    "Self-filing",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(jack.quotes ?? []),
    "We are the same",
    ":idiot:",
    ":nocomment:",
  ]),
  claims: unique([
    ...(jack.claims ?? []),
    "Stable account 450297689966788619 / RealGameJack explicitly answers Ely's January 2, 2021 complaint that public messages keep getting posted with `We are the same`, supporting a participant-side awareness that Jack can occupy the same Wall defendant position.",
    "Jack's 2021 Wall reactions are often deliberately compressed. `:idiot:` appears inside one thread, while a November 5 sequence repeats `:nocomment:` / emoji-only responses over roughly a minute. Read together with his later self-filing behavior, the recurring mechanism is not silence but letting one compact reaction carry the social meaning.",
    "Jack reposts Lyssa's May 28, 2022 `new family member` collage inside an established joke-family register. It is useful as proof that he understands and participates in the format, not as literal kinship information.",
  ]),
  antiFanon: unique([
    ...(jack.antiFanon ?? []),
    "Jack's `:idiot:` and `:nocomment:` reactions are affect beats, not identity evidence for the people or media around them.",
    "The `new family member` collage remains joke-family language. Do not convert it into biological, legal, adoptive, romantic, or household kinship.",
    "Media in the reviewed Wall packet remains attribution-bounded. POSTED BY Jack does not establish MADE BY, CAPTURED BY, or FEATURING Jack unless a separate source says so.",
  ]),
};
allCharacters[jackIndex] = jackNext;
characterById.set("realgamejack", jackNext);

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 1338 expected the canonical Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const dayaNext: ExtendedCharacter = {
  ...daya,
  tags: unique([
    ...(daya.tags ?? []),
    "Digital reading",
    "Low-friction logistics",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(daya.quotes ?? []),
    "Basically am too lazy to torrent a ebook",
  ]),
  claims: unique([
    ...(daya.claims ?? []),
    "Daya's old `title + free` search habit is broader than one manga gag. In July 2021 she says she reads books on her computer when she cannot get them physically; in September she says she is `too lazy to torrent a ebook`. The recurring preference is low-friction digital access, not devotion to one specific site or format.",
    "The practical reading habit fits Daya's broader social economy: she is comfortable using the shortest workable route, while her Wall presence often does the same thing conversationally by dropping a strange artifact with minimal explanation and letting the room perform the reaction.",
  ]),
  antiFanon: unique([
    ...(daya.antiFanon ?? []),
    "Daya's browser-first / computer-reading habit establishes ordinary reading logistics only. It does not establish piracy expertise, technical skill, finances, location, sexuality, or the contents of unrelated media she posts.",
    "Daya's Wall attachments remain POSTED BY Daya unless separately sourced; do not promote adjacency into MADE BY, CAPTURED BY, or FEATURING.",
  ]),
};
allCharacters[dayaIndex] = dayaNext;
characterById.set("daya", dayaNext);
