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
import "./integrator-cast-run688-core-wall";
import "./integrator-cast-run690-wall";
import "./integrator-cast-run690-wall-aesh";
import "./integrator-cast-run690-daycare";
import "./integrator-cast-run692-intake";
import "./integrator-cast-run694-wall";
import "./integrator-cast-run694-wall-moon";
import "./integrator-cast-run697-daycare-wall";
import "./integrator-cast-run698-core";
import "./integrator-cast-run700-wall";
import "./integrator-cast-run700-wall-torr";
import "./integrator-cast-run701-daycare";
import "./integrator-cast-run702-wall";
import "./integrator-cast-run704-intake";
import "./integrator-cast-run705-wall-snow";
import "./integrator-cast-run706-daycare";
import "./integrator-cast-run706-intake";
import "./integrator-cast-run708-daycare";
import "./integrator-cast-run708-wall-zhenxi";
import "./integrator-cast-run708-louvre";
import "./integrator-cast-run711-daycare";
import "./integrator-cast-run712-wall";
import "./integrator-cast-run714-intake";
import "./integrator-cast-run716-daycare-torr";
import "./integrator-cast-run716-whiskey-spicy";
import "./integrator-cast-run719-wall-usama";
import "./integrator-cast-run719-daycare-eos";
import "./integrator-cast-run720-intake";
import "./integrator-cast-run720-tail";
import "./integrator-cast-run722-intake";
import "./integrator-cast-run728-wall";
import "./integrator-cast-run730-core";
import "./integrator-cast-run734-intake";
import "./integrator-cast-run736-whiskey-t7morrow";
import "./integrator-cast-run738-daycare-alaina";
import "./integrator-cast-run742-intake";
import "./integrator-cast-run744-wall-noether";
import "./integrator-cast-run746-core-marsello";
import "./integrator-cast-run746-wall";
import "./integrator-cast-run748-intake";
import "./integrator-cast-run749-wall-alkey";
import "./integrator-cast-run752-intake";
import "./integrator-cast-run757-daycare-mugen";
import "./integrator-cast-run760-wall-vanness";
import "./integrator-cast-run760-daycare-daya";
import "./integrator-cast-run761-daycare-daya";
import "./integrator-cast-run763-wall-candy";
import "./integrator-cast-run763-daycare-tofu";
import "./integrator-cast-run763-wall-torr";
import "./integrator-cast-run767-intake";
import "./integrator-cast-run767-wall-bea";
import "./integrator-cast-run771-core-degen-rat";
import "./integrator-cast-run775-wall-rookie-cookie-uwu";
import "./integrator-cast-run777-daycare-woosung";
import "./integrator-cast-run777-wall-booba";
import "./integrator-cast-run780-wall-woosung";
import "./integrator-cast-run781-whiskey-anthos";
import "./integrator-cast-run782-intake";
import "./integrator-cast-run783-daycare-keon";
import "./integrator-cast-run783-wall-marsy";
import "./integrator-cast-run785-daycare-rose";
import "./integrator-cast-run785-louvre-hishiro";
import "./integrator-cast-run785-whiskey-nothien";
import "./integrator-cast-run786-wall-rose";
import "./integrator-cast-run787-daycare-torr";
import "./integrator-cast-run788-wall-hamittey";
import "./integrator-cast-run790-wall-ibwoy";
import "./integrator-cast-run790-wall-tonytonychopper";
import "./integrator-cast-run791-daycare-gabu";
import "./integrator-cast-run794-intake";
import "./integrator-cast-run798-wall-bishop-daycare-candy";
import "./integrator-cast-run801-intake";
import "./integrator-cast-run802-intake";
import "./integrator-identity-repair-run802";
import "./integrator-cast-run806-wall-yochan";
import "./integrator-cast-run807-late-wall-momo-mimi";
import "./integrator-cast-run807-core-daya";
import "./integrator-cast-run807-core-birthdays";
import "./integrator-cast-run821-daycare-beckiie";
import "./integrator-cast-run821-core-shiyax";
import "./integrator-cast-run822-core-shiyax-care";
import "./integrator-cast-run824-daycare-sarabunny";
import "./integrator-cast-run826-daycare-nintendo";
import "./integrator-cast-run826-core-hic-alkey";
import "./integrator-cast-run836-core-wall";
import "./integrator-cast-run840-daycare";
import "./integrator-identity-repair-run843-alkey-meowk";
import "./integrator-cast-run846-wall-han";
import "./integrator-cast-run852-wall-danny";
import "./integrator-cast-run852-daycare-saiyura";
import "./integrator-cast-run855-intake";
import "./integrator-cast-run860-intake";

type LooseRecord = Record<string, unknown>;
type Gag = { id: string; name: string; logline: string };

const run661Gags: Gag[] = [
  {
    id: "wall-fame-moment",
    name: "The Wall Tries Fame",
    logline:
      "The room is already calling shame `fame` in 2020. By March 13, 2021, Ren posts an image and says `*wall of fame*` eleven seconds later inside the same uninterrupted Ghoulie protest pocket—close enough to read as a probable Fame filing, even without a stored reply edge. June 16 gives the harder version: two images directly captioned `No shame here, only fame and cuteness`. By September, Nai can ask when the last `FAME moment` was and nominate `I survived another day at work`; in a separate September 22 memory check, Gilli and Marian remember Eos's proposal-language filing as their first Fame moment and basically the rare exception to a room that was usually Shame. That is participant memory, not an origin certificate, and the proposal wording stays inside the joke rather than becoming a literal engagement claim. The word was old; the positive category kept becoming more explicit and memorable.",
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
