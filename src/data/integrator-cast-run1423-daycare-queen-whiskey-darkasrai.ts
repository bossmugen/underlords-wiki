import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Run 1423 Daycare: Queen Elsa / Vuvnel gets a compact real-person owner without
// pretending three months of low-volume material are a sweeping biography.
{
  const id = "queen-elsa";
  const index = allCharacters.findIndex((character) => character.id === id);
  const previous = index >= 0 ? (allCharacters[index] as ExtendedCharacter) : undefined;
  const relationships = [...(previous?.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Mugen",
    "Queen self-introduces as Vuvnel / Underlords and Mugen answers `hey nel! one sec while i assign your roles`. The useful texture is immediate recognition plus practical onboarding: Mugen knows the short name and handles the door without turning the scene into ceremony. It does not establish Queen's original join date.",
    "/characters/mugen",
  );
  upsertRelationship(
    relationships,
    "Anayss",
    "Anayss joins Mugen in heart-reacting to Queen's Vuvnel introduction. That is a small welcome/recognition beat, not enough for a closeness rank or a claim that Anayss handled the onboarding.",
    "/characters/anayss",
  );
  upsertRelationship(
    relationships,
    "DyingFox",
    "Queen slips directly into Daycare ritual language with `w/feed`; DyingFox returns `W/hug`. The exchange is tiny, reciprocal, and socially fluent — enough to show Queen participating in the room rather than merely appearing on a roster.",
    "/characters/dyingfox",
  );

  const next: ExtendedCharacter = {
    ...(previous ?? {}),
    id,
    name: "Queen Elsa",
    aliases: unique([...(previous?.aliases ?? []), "Vuvnel", "Nel"]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "1004857598169858138"]),
    billing: previous?.billing ?? "legacy",
    role: previous?.role ?? "Archive-era UL member",
    era: previous?.era ?? "2023+",
    logline:
      "A low-volume 2023 member whose little surviving arc still has shape: Vuvnel arrives already identifying herself with Underlords, gets recognized and routed in without ceremony, answers a game question from current experience, then wanders into Daycare and learns the local language well enough to `w/feed` DyingFox and get a hug back.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Archive cast",
      "2023",
      "Lobby",
      "Daycare",
      "Onboarding",
      "Game chatter",
      "Daycare ritual",
    ]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "yes im playing the new class its really good",
      "w/feed @DyingFox(Gilli's Pond)",
    ]),
    claims: appendUnique(previous?.claims, [
      "Stable Discord account 1004857598169858138 is the reviewed Queen Elsa / Vuvnel / Nel owner in the current packet; the bridge is same-account continuity, not name resemblance.",
      "By January 4, 2023, the account directly self-identifies as Vuvnel and Underlords; Mugen immediately replies using `nel` and says she will assign roles. This establishes scene-local member self-identification and lived onboarding, not an original admission date or appointment chronology.",
      "On February 27 Queen answers a current-game class question from direct experience, and on March 19 she uses Daycare's `w/feed` ritual with DyingFox, who returns `W/hug`.",
      "The safe short arc is recognized/onboarded arrival → practical game participant → Daycare ritual participant. The surviving volume is too small for broad temperament claims.",
    ]),
    antiFanon: appendUnique(previous?.antiFanon, [
      "January 4, 2023 is a reviewed status floor, not Queen's proven join date, recruitment origin, or role-appointment date.",
      "Mugen's `assign your roles` describes a local onboarding action. Do not infer rank or promotion chronology from export-time role arrays.",
      "The source introduction includes an age field, but that forensic detail is intentionally omitted from public character copy because it adds nothing necessary to the person story.",
      "The DyingFox feed/hug exchange is Daycare ritual play, not literal feeding, caretaking, romance, family, or a closeness hierarchy.",
    ]),
  };

  if (index >= 0) allCharacters[index] = next;
  else allCharacters.push(next);
  characterById.set(id, next);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(id)) archiveCastGroup.characterIds.push(id);
}

// Run 1423 Whiskey longitudinal synthesis: DarkAsrai's receipt habit is not only
// prosecution. They are also the person making sure an absent room can get the replay.
{
  const id = "darkasrai";
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) throw new Error("Run 1423 expected canonical DarkAsrai owner `darkasrai`");

  const dark = allCharacters[index] as ExtendedCharacter;
  const relationships = [...(dark.relationships ?? [])];

  upsertRelationship(
    relationships,
    "ShiyaX",
    "DarkAsrai can ping ShiyaX with an exaggerated `:ANIspank:`; ShiyaX technically replies with the weird-exit emote and Dark laughs. A later `Exposed` pocket probably contains another DarkAsrai media contribution, but only the first interaction is hard-linked. The durable read is repeated public-joke / teasing comfort, not literal violence, romance, or a closeness rank.",
    "/characters/shiyax",
  );
  upsertRelationship(
    relationships,
    "Aizzy",
    "DarkAsrai's Photo Submissions caption `Posing with @Aizzy on the ferris wheel` preserves an ordinary shared in-game moment instead of an embarrassing receipt. It adds a modest shared-photo lane and shows the documenting instinct is not exclusively prosecutorial; who made or captured the image remains unresolved.",
  );

  allCharacters[index] = {
    ...dark,
    logline:
      "Receipt stockpiler, competitive filer, willing defendant — and apparently the unofficial replay department. DarkAsrai can be inside the joke, notice when Screenshot Court rotates toward them, then package a screenshot and video with `For those who missed this` so absence is no defense against seeing what happened.",
    tags: appendUnique(dark.tags, [
      "Photo Submissions",
      "Replay department",
      "Documentarian",
      "ShiyaX",
      "Aizzy",
    ]),
    relationships,
    quotes: appendUnique(dark.quotes, [
      "For those who missed this",
      ":ANIspank:",
      "Posing with @Aizzy on the ferris wheel",
    ]),
    claims: appendUnique(dark.claims, [
      "DarkAsrai's cumulative filing habit extends beyond embarrassment receipts: on September 22, 2021 they post a screenshot and MP4, then 15.039 seconds later add `For those who missed this`. The clean person read is instigator / documentarian — participant and replay distributor at once.",
      "Repeated DarkAsrai-authored Photo Submissions posts through October 2021 and the final edited caption `Posing with @Aizzy on the ferris wheel` show the documenting impulse also covers ordinary shared in-game moments.",
      "A direct August 6, 2021 ShiyaX tease has a technical reply chain and DarkAsrai laugh; a later ShiyaX `Exposed` sequence has probable DarkAsrai media context but no equally hard link, so the relationship is filed as developing public-teasing comfort rather than a stronger rank.",
      "Petty Crimes: FOR THOSE WHO MISSED THIS — attendance is apparently optional; DarkAsrai can still arrange the replay afterward.",
    ]),
    antiFanon: appendUnique(dark.antiFanon, [
      "The September 22 screenshot/video subject remains unresolved in the current handoff. `For those who missed this` supports replay-distribution behavior, not a public claim about what the media visibly depicts.",
      "DarkAsrai's Aizzy caption establishes a shared in-game photo moment and POSTED BY DarkAsrai. MADE BY, CAPTURED BY, and FEATURING beyond the explicit caption remain separate unless independently supported.",
      "The later ShiyaX `Exposed` media bridge is contextual rather than a technical reply edge. Keep it probable and do not turn it into a stronger relationship claim.",
      "Current/export Staff role is not appointment chronology and is not used here as personality evidence.",
    ]),
  } as ExtendedCharacter;

  characterById.set(id, allCharacters[index]);
}
