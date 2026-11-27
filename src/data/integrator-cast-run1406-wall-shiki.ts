import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex < 0) throw new Error("Run 1406 expected the canonical Shiki owner; refusing to create a Shk duplicate.");

const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
const relationships = [...(shiki.relationships ?? [])];
const upsertRelationship = (name: string, note: string, href?: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

upsertRelationship(
  "Ricochet",
  "Ricochet can carry a prior voice-chat memory straight toward Screenshot Court and Shiki immediately knows what is being threatened. `we still need to put what you said last night in here` gets `oof`, `im not going there`, then `shhh` and a shush GIF once Ricochet says the missing line happened in VC. The quote itself is gone; the lived relationship beat is that Ricochet remembers it and Shiki performs suppression instead of leaving the interaction.",
  "/characters/ricochet",
);
upsertRelationship(
  "Lilly",
  "Lilly can walk directly into Shiki's mock-hideout bit without needing the premise explained. After Shiki says he waits until everyone is in `sleep mode` so he can go to `jail chat`, Lilly offers `@Shk ill join you in jail bb`; Shiki eventually answers `jail ok` and continues the hiding joke. It is one-pocket warmth and comfortable bit participation, not literal jail, romance, or kinship.",
  "/characters/lilly",
);

const shikiNext: ExtendedCharacter = {
  ...shiki,
  stableDiscordIds: unique([...(shiki.stableDiscordIds ?? []), "229490989046169600"]),
  tags: unique([
    ...(shiki.tags ?? []),
    "Wall acclimation",
    "Audience-aware humor",
    "Mock evidence suppression",
    "Reaction GIFs",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(shiki.quotes ?? []),
    "when did wall of shame came??",
    "u all see nothing",
    "i wait til u all go sleep mode",
    "so i can go jail chat",
    "jail ok",
    "i always heat my spoon on fire",
  ]),
  claims: unique([
    ...(shiki.claims ?? []),
    "Current hard canon resolves Shiki = Shk = yuki1794, stable Discord account 229490989046169600. This Wall packet belongs to the existing Shiki owner and must not create a second Shk page or merge into ShiyaX.",
    "The surviving Wall shows a channel-local acclimation arc: on August 26, 2020 Shiki asks `when did wall of shame came??`; by November 19/30 and again March 16, 2021 he has a recurring `see nothing` / `u all see nothing` defense vocabulary. The useful change is from asking what the room is to developing his own mock-suppression routine inside it, not a join date or whole-life personality origin.",
    "Shiki's repeated Wall defense is audience-aware comedy rather than withdrawal. He uses shush and lurker GIFs, talks about waiting for everyone to enter `sleep mode`, and keeps negotiating where the bit can continue; the attempted hiding becomes part of the performance.",
    "A mundane August 2020 pocket gives Shiki unusually specific Petty Crimes texture: he worries that a metal spoon in a microwave should make it blow up, then later volunteers `i always heat my spoon on fire`. The second line remains a self-report whose literal extent cannot be certified from text alone.",
    "Rookie Cookie's `I always lurk` safely joins the same December 1 lurking riff, but Shiki's earlier plain-text `rook` is not a stable-ID mention and remains unresolved rather than an identity bridge.",
  ]),
  antiFanon: unique([
    ...(shiki.antiFanon ?? []),
    "Shiki = Shk = yuki1794 is hard project canon. Shiki is not ShiyaX, and Tomoe is not bridged to Shiki without separate support.",
    "The Wall acclimation sequence does not establish Shiki's Discord join date, the absolute origin of the Wall, or the first time he ever encountered its joke culture. Anthos's August 26 explanation remains a channel-local statement.",
    "`u all see nothing`, `shhh`, lurker GIFs, and jail-chat language are mock-evidence / room-humor vocabulary, not evidence of concealed real-world misconduct.",
    "The spoon/fire line is oddly specific authored self-report and is safe as Petty Crimes texture; do not infer injury, dangerous behavior, frequency, or a connection to an unrelated earlier image.",
    "The Ricochet callback does not recover the missing VC quote. Do not reconstruct what Shiki allegedly said from later reactions.",
    "Lilly's `bb`, `jail`, and Shiki's `kids` language remain social-bit language. Do not literalize romance, kinship, incarceration, or a formal safety appointment.",
    "For Mugen's March 16 attachment, POSTED BY Mugen is confirmed and Shiki is only a probable same-pocket respondent. MADE BY, CAPTURED BY, visual FEATURING, and the image contents remain unresolved because native pixels are unavailable.",
  ]),
};

allCharacters[shikiIndex] = shikiNext;
characterById.set("shiki", shikiNext);
