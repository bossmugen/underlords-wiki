import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

export function applyRun1592DaycareGhoulieCast(characters: Character[]): void {
  const stableId = "537786238665621504";
  const index = characters.findIndex(
    (character) =>
      character.id === "baby-lyssa" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) return;

  const lyssa = characters[index] as ArchiveCharacter;
  characters[index] = {
    ...lyssa,
    aliases: unique([...(lyssa.aliases ?? []), "Baby Lyssa", "BabyLyssa", "Ghoulie"]),
    stableDiscordIds: unique([...(lyssa.stableDiscordIds ?? []), stableId]),
    tags: unique([...(lyssa.tags ?? []), "Newcomer → room-native", "Channel geography"]),
    claims: unique([
      ...(lyssa.claims ?? []),
      "The already user-confirmed Baby Lyssa = Ghoulie identity bridge gains a direct surviving onboarding anchor: on March 4, 2021 stable account 537786238665621504 answers the Lobby intake as `Ghoulie | Ethereal | 18`.",
      "By June 2, 2021 the same account is comfortable enough with UL's social geography to point an ongoing bit toward Daycare and escalate the request with `PLEASE` / `PLEASEEEEE`. The useful change-over-time read is newcomer presenting as Ghoulie → socially embedded Lyssa who already knows where the nonsense belongs.",
    ]),
    antiFanon: unique([
      ...(lyssa.antiFanon ?? []),
      "The March 2021 onboarding line corroborates the already-resolved Baby Lyssa = Ghoulie identity; it is not a newly inferred bridge and does not establish a permanent club affiliation from the `Ethereal` answer.",
      "Knowing to route a bit toward Daycare does not make Lyssa the channel creator, moderator, owner, or holder of formal authority.",
      "The current source representation still does not expose the later direct Daycare body, so absence from that body cannot be inferred from retrieval limits.",
    ]),
  } as ArchiveCharacter;
}
