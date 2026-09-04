import type { Episode } from "./wiki";
import { episodes as coreEpisodes, gags as coreGags } from "./wiki";
import "./canonicalize-cast";

type LooseRecord = Record<string, unknown>;
type Gag = { id: string; name: string; logline: string };

const episodeModules = import.meta.glob("./integrator-episodes*.ts", { eager: true }) as Record<string, LooseRecord>;
const gagModules = import.meta.glob("./integrator-gags*.ts", { eager: true }) as Record<string, LooseRecord>;

const integrationModulePriority = (path: string): number =>
  /\/integrator-(?:episodes|gags)\.ts$/.test(path) ? 0 : 1;

const arraysFrom = <T>(modules: Record<string, LooseRecord>, guard: (value: unknown) => value is T): T[] =>
  Object.entries(modules)
    .sort(([left], [right]) =>
      integrationModulePriority(left) - integrationModulePriority(right) || left.localeCompare(right),
    )
    .flatMap(([, module]) =>
      Object.values(module).flatMap((value) => (Array.isArray(value) ? value.filter(guard) : [])),
    );

const isEpisode = (value: unknown): value is Episode => {
  if (!value || typeof value !== "object") return false;
  const episode = value as Partial<Episode>;
  return Boolean(
    typeof episode.id === "string" &&
      typeof episode.title === "string" &&
      typeof episode.season === "string" &&
      typeof episode.logline === "string" &&
      Array.isArray(episode.cast),
  );
};

const isGag = (value: unknown): value is Gag => {
  if (!value || typeof value !== "object") return false;
  const gag = value as Partial<Gag>;
  return Boolean(typeof gag.id === "string" && typeof gag.name === "string" && typeof gag.logline === "string");
};

const dedupeById = <T extends { id: string }>(items: T[]): T[] => {
  const index = new Map<string, T>();
  for (const item of items) index.set(item.id, item);
  return [...index.values()];
};

export const allEpisodes = dedupeById([
  ...coreEpisodes,
  ...arraysFrom(episodeModules, isEpisode),
]);

export const allGags = dedupeById([
  ...coreGags,
  ...arraysFrom(gagModules, isGag),
]).map((gag) =>
  gag.id === "spelling-crimes"
    ? {
        ...gag,
        name: "UL Types Too Fast",
        logline:
          "Letters transpose, words disappear, sentences collide, autocorrect makes executive decisions, and the room understands anyway. The signature is typing velocity—not an inability to spell.",
      }
    : gag,
);

export const episodeFormat = (episode: Episode): "EPISODE" | "INCIDENT" =>
  /arc|episode|season|special|running|reunion|chronology/i.test(episode.kind) ? "EPISODE" : "INCIDENT";

export const episodesBySeason = (season: string): Episode[] =>
  allEpisodes.filter((episode) => episode.season === season);