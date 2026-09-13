import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const existingIndex = allCharacters.findIndex(
  (candidate) => candidate.id === "dayadream" || candidate.name === "Dayadream",
);

const dayadream: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "dayadream",
        name: "Dayadream",
        billing: "legacy",
        role: "Archive-era event relay / rally voice",
        era: "2022–",
        logline:
          "Chaos with a clock on it. Dayadream can sound like the room is about to combust while still supplying the event name, exact time, prep cue, or next rendezvous — operationally precise and socially unserious in the same sentence.",
        tags: [
          "Archive cast",
          "Event relay",
          "Rally voice",
          "Timing",
          "Wall",
          "Petty Crimes",
        ],
        relationships: [],
        quotes: [],
      };

const next: ExtendedCharacter = {
  ...dayadream,
  role: dayadream.role || "Archive-era event relay / rally voice",
  era: dayadream.era || "2022–",
  logline:
    "Chaos with a clock on it. Dayadream can sound like the room is about to combust while still supplying the event name, exact time, prep cue, or next rendezvous — operationally precise and socially unserious in the same sentence.",
  tags: appendUnique(dayadream.tags, [
    "Archive cast",
    "Event relay",
    "Rally voice",
    "Timing",
    "Wall",
    "Petty Crimes",
  ]),
  relationships: [
    ...(dayadream.relationships ?? []).filter((relationship) => relationship.name !== "Mugen"),
    {
      name: "Mugen",
      href: "/characters/mugen",
      note:
        "A 2022 Wall chain turns Dayadream getting `caught in 4k` into a shared bit instead of a retreat. Mugen calls the screenshots one morning's worth and `1% of our total crackheadedness`; Dayadream answers by scheduling the next round for 1pm EST. Mugen, away in the mountains, tells Dayadream to send screenshots. It is a bounded receipts-and-chaos lane, with Dayadream actively feeding the joke.",
    },
  ],
  quotes: appendUnique(dayadream.quotes, [
    "the crackheadedness will continue today at 1pm est",
    "SSTAR OF CASSELLLLL UP RN RN @Staff",
    "@Staff **Dragon Breath** TONIGHT 20:30 SVT! Buff up and check those plans, be ready for BATTLEE!",
  ]),
  claims: appendUnique(dayadream.claims, [
    "On 2022-01-29 Dayadream replies that Mugen's attachment post caught Dayadream `in 4k`; after the room jokes about the volume of screenshots, Dayadream says `the crackheadedness will continue today at 1pm est`, and Mugen asks for screenshots while away.",
    "On 2022-08-21 and 2022-08-30 Dayadream posts separate urgent Star of Cassell `UP NOW` reminders to Staff.",
    "On 2022-09-04 Dayadream posts an edited Dragon Breath reminder with exact `20:30 SVT`, `Buff up`, a plan-check cue, and `be ready for BATTLEE!`.",
    "Across the Wall and Announcements material, the cumulative person read is event relay delivered as hype: Dayadream repeatedly carries practical activation/timing information without turning into a neutral system voice.",
    "Petty Crimes: `Scheduled Crackheadedness` — charge: putting chaos on the calendar.",
  ]),
  antiFanon: appendUnique(dayadream.antiFanon, [
    "Event reminders establish lived relay/rally behavior here; they do not establish event creation, event ownership, formal command authority, or appointment chronology.",
    "The attachment that Dayadream says caused the `caught in 4k` moment was not visually inspected. Preserve textual/reply behavior without describing what the image shows or assigning MADE BY, CAPTURED BY, or FEATURING attribution.",
    "Tenor/media links in the reminder lane are POSTED BY Dayadream only; do not infer that Dayadream made the media.",
    "Mugen asking Dayadream to send screenshots is one bounded relationship beat, not a closeness ranking or permanent reporting duty.",
    "Do not turn Star of Cassell or Dragon Breath reminders into a new standalone Episode without independent origin/organizer/outcome evidence.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
