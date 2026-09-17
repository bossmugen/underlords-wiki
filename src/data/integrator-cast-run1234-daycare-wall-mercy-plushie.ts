import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const requireCharacter = (id: string, label: string): [number, ExtendedCharacter] => {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) {
    throw new Error(`Run 1234 expected canonical ${label}; refusing to manufacture a duplicate.`);
  }
  return [index, allCharacters[index] as ExtendedCharacter];
};

const [mercyIndex, mercy] = requireCharacter("mercy", "Mërcy");
const nextMercy: ExtendedCharacter = {
  ...mercy,
  era: "2020–2025+",
  tags: unique([
    ...(mercy.tags ?? []),
    "Mock defense counsel",
    "Proportionality jokes",
    "Room-wide heckling",
    "Returner humor",
  ]),
  quotes: unique([
    ...(mercy.quotes ?? []),
    "Can we please deal with Thark by the sense of real punishment instead of doing this :C he didn't even do anything bad to be coerced into playing Dragon Ball Legends",
    "This whole server is one recurring screw up",
  ]),
  claims: unique([
    ...(mercy.claims ?? []),
    "An August 2020 Wall pocket catches Mërcy arguing that Thark does not deserve the room's proposed Dragon Ball Legends punishment and asking for a `real punishment` instead. The useful person beat is the mock proportionality instinct: she can defend somebody inside the joke without stepping outside the joke, turning the room's own premise back on itself.",
    "When Mërcy reappears in Daycare on 2020-08-22, the comeback line is `This whole server is one recurring screw up`. It gives her returner humor the same little bite as the Wall defense-counsel beat: re-entry itself becomes an opportunity to heckle the whole room, and the insult works because she is plainly participating in the thing she is insulting.",
    "Taken with her later helper/care material, the older 2020 scenes sharpen a useful contradiction: Mërcy can be practical, encouraging and welcoming while also being perfectly willing to prosecute the server's nonsense from inside the defendant box.",
  ]),
  antiFanon: unique([
    ...(mercy.antiFanon ?? []),
    "The Thark exchange is mock punishment / defense-counsel comedy. It does not establish a moderator, disciplinarian, advocate, legal, governance, or enforcement role for Mërcy, nor literal punishment or coercion outside the game joke.",
    "`This whole server is one recurring screw up` is a return-line joke and room-wide heckle, not a factual claim about server incidents, Mërcy's departure history, or a precise rejoin chronology.",
  ]),
};
allCharacters[mercyIndex] = nextMercy;
characterById.set(nextMercy.id, nextMercy);

const [plushieIndex, plushie] = requireCharacter("plushie", "Plushie");
const nextPlushie: ExtendedCharacter = {
  ...plushie,
  role: "Archive-era Wall / Daycare cast",
  era: "2020–2023",
  tags: unique([
    ...(plushie.tags ?? []),
    "Daycare",
    "Backscroll archaeology",
    "Attachment resurrection",
    "Shared-bit fluency",
  ]),
  quotes: unique([
    ...(plushie.quotes ?? []),
    "Idk what possessed shin to send this",
  ]),
  claims: unique([
    ...(plushie.claims ?? []),
    "Plushie's surviving footprint does not stop with the 2020 Wall orientation scene. In April 2023, under `plushiesex`, Plushie digs up an attachment-only Daycare post from `sʜɪɴxny` that is one day short of seven months old and revives it with `Idk what possessed shin to send this`. The old post becomes fresh room material because Plushie decides it deserves another hearing.",
    "That later Daycare beat extends the same fast-premise uptake seen in Plushie's 2020 Wall scene into a different habit: deep-backscroll archaeology. Plushie does not need to own the original object to make it socially active again; finding it, resurfacing it and supplying the reaction is enough to restart the bit.",
  ]),
  antiFanon: unique([
    ...(plushie.antiFanon ?? []),
    "The 2023 Daycare attachment remains visually uninspected. It is POSTED BY `sʜɪɴxny`; Plushie's later resurrection does not establish MADE BY, CAPTURED BY, FEATURING, exact subject matter, or a special relationship with the original poster.",
    "The nearly seven-month delay supports backscroll resurrection as a behavior in this scene, not a claim that Plushie routinely searched the entire server history or originated Daycare's archaeology culture.",
  ]),
};
allCharacters[plushieIndex] = nextPlushie;
characterById.set(nextPlushie.id, nextPlushie);
