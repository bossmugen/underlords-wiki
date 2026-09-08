import type { Episode } from "./wiki";
import { episodes as coreEpisodes, gags as coreGags } from "./wiki";
import "./canonicalize-cast";
import "./integrator-cast-run658-wall";
import "./integrator-cast-run661-wall";
import "./integrator-cast-run663-wall";
import "./integrator-cast-run664-wall";
import "./integrator-cast-run666-intake";
import "./integrator-cast-run668-daycare";
import "./integrator-cast-run668-wall-syv";
import "./integrator-cast-run670-wall";
import "./integrator-cast-run670-whiskey";
import "./integrator-cast-run670-core";
import "./integrator-cast-run671-intake";
import "./integrator-cast-run674-daycare";
import "./integrator-cast-run675-wall";
import "./integrator-cast-run678-wall";
import "./integrator-cast-run680-daycare";
import "./integrator-cast-run680-louvre";
import "./integrator-cast-run682-daycare";
import "./integrator-cast-run683-wall";
import "./integrator-cast-run687-daycare";

type LooseRecord = Record<string, unknown>;
type Gag = { id: string; name: string; logline: string };

const run661Gags: Gag[] = [
  {
    id: "wall-fame-moment",
    name: "The Wall Tries Fame",
    logline:
      "The room had been calling shame `fame` since 2020, but by September 2021 somebody finally asks for a genuinely positive `FAME moment`. Marian remembers Eos's proposal; Gilli immediately calls it their first; Marian says Eos has earned a fame award. The word was old. The wholesome category was the new joke.",
  },
];

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
  ...run661Gags,
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
