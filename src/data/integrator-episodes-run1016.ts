import type { Episode } from "./wiki";
import { integratedEpisodes } from "./integrator-episodes";
import "./integrator-cast-run1016-intake";

// Hard identity repair: an older mixed episode combined Meowk's March 13
// `i` / `saw` / `all` witness beat with Alkey's separate April height roast.
// Stable-account reconciliation now assigns the March beat to Meowk. Remove the
// contaminated mixed owner before publishing the corrected person-specific scene.
const contaminatedIndex = integratedEpisodes.findIndex((episode) => episode.id === "alkey-sees-all");
if (contaminatedIndex >= 0) integratedEpisodes.splice(contaminatedIndex, 1);

export const run1016Episodes: Episode[] = [
  {
    id: "meowk-sees-all",
    title: "Meowk Saw All",
    season: "2021",
    date: "March 13, 2021",
    kind: "Wall witness timing / three words become the whole prosecution",
    logline:
      "Ghoulie, then posting as Baby Lyssa, tries `you saw nothing`. Rooks immediately answers `I SAW IT`. Meowk makes the witness statement unnecessarily cinematic by sending `i` → `saw` → `all` as three separate messages across 1.725 seconds. The room does not need an explanation of what was allegedly seen; the pacing is the joke. It also fits the Meowk pattern that survives elsewhere: one tiny verdict when somebody else is in the hot seat, followed by extremely satisfying mock outrage when the camera turns back on Meowk.",
    cast: ["Meowk", "Ghoulie", "Rooks"],
  },
  {
    id: "snow-birthday-bets",
    title: "Snow's Birthday Becomes a Betting Market",
    season: "2020",
    date: "August 31, 2020",
    kind: "Birthday guessing / the room monetizes not knowing a date",
    logline:
      "Mugen opens with `hppy bday @Snow`. Snow answers `not yet but this month hehe ^_^`; Rooks immediately proposes saying happy birthday every day until they get it right. Snow offers one clue — `Libra I am very judgey cant you tell by now` — and Mugen responds by opening `@Snow's BIRTHDAY BETS`. The book is gloriously unreliable almost immediately: Mugen records Rooks on September 25, Rooks corrects her to the 26th, and Mugen goes `oh shiet` / `mb`. The ledger later gets an `@here` repost covering September 22 through October 22, while a separate announcement still throws out `HAPPY BIRTHDAY @Snow`. Snow also suggests a birthday page; Mugen says Anthos had already mentioned one and it was sitting on her forgotten list. Nobody gets Snow's actual date out of the surviving scene. What survives is better for UL history anyway: uncertainty becomes a recurring group bit, a public ledger, and one more excuse to ping the room.",
    cast: ["Snow", "Mugen", "Rooks", "Anthos"],
  },
];
