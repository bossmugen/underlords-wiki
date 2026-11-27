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
  (candidate) => candidate.id === "vanness" || candidate.name === "Vanness",
);

const vanness: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "vanness",
        name: "Vanness",
        billing: "legacy",
        role: "Archive-era Wall regular",
        era: "2021+",
        logline:
          "Vanness cares about who actually owns the disaster. If he thinks the blame is wrong, he will redirect it immediately. If he thinks the failure is his, he can be much harsher on himself than the room has even asked for: filing his own Wall case, requesting `Shame me`, then staying long enough to explain exactly how the merge went to hell.",
        tags: [
          "Archive cast",
          "Wall of Shame/Fame",
          "Selective accountability",
          "Self-prosecution",
          "Game mishaps",
          "Petty Crimes",
        ],
        relationships: [],
        quotes: [],
      };

const next: ExtendedCharacter = {
  ...vanness,
  role: vanness.role || "Archive-era Wall regular",
  era: vanness.era || "2021+",
  logline:
    "Vanness cares about who actually owns the disaster. If he thinks the blame is wrong, he will redirect it immediately. If he thinks the failure is his, he can be much harsher on himself than the room has even asked for: filing his own Wall case, requesting `Shame me`, then staying long enough to explain exactly how the merge went to hell.",
  tags: appendUnique(vanness.tags, [
    "Archive cast",
    "Wall of Shame/Fame",
    "Selective accountability",
    "Self-prosecution",
    "Game mishaps",
    "Petty Crimes",
  ]),
  relationships: [
    ...(vanness.relationships ?? []).filter(
      (relationship) => !["Ren", "Candy", "Gilli"].includes(relationship.name),
    ),
    {
      name: "Ren",
      href: "/characters/ren",
      note:
        "When Vanness files himself for losing five orange dracs, Ren exact-replies `hoW-`. Hours later Vanness exact-replies back with the technical autopsy: four failed merges in a row, with the last two orange items merging into one. Ren does not need to drag the confession out of him; he keeps the case open himself.",
    },
    {
      name: "Candy",
      note:
        "Candy exact-replies `Wad00` to Vanness's self-file and follows with a crying-cat reaction. The surviving beat reads as immediate peer uptake of a disaster Vanness has already volunteered for public sentencing.",
    },
    {
      name: "Gilli",
      note:
        "An early Gilli account exact-replies to Vanness's `Shame me` parent with a reaction emote. Keep that as direct uptake of the self-file without turning the account-history question into an identity shortcut or a closeness ranking.",
    },
  ],
  quotes: appendUnique(vanness.quotes, [
    "Im putting myself in wall of shame for losing 5 orange dracs for merge. Shame me:CatCry:",
    "Im too sad to play anymore:Cursed:",
    "I failed merge 4 times in a row, and the last 2 orange merged into 1:Raja_cat_frustrates:",
    "my luck is💩",
    "ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:",
  ]),
  claims: appendUnique(vanness.claims, [
    "Stable account 714781719357554718 anchors this Vanness material.",
    "The useful contradiction is selective accountability rather than generic evasiveness: Vanness can redirect an external accusation when he thinks attribution is wrong, yet on 2021-08-10 he voluntarily files himself on the Wall for losing five orange dracs and explicitly asks the room to `Shame me`.",
    "Gilli, Candy, and Ren each exact-reply to the self-file parent. Ren's `hoW-` receives a later exact reply from Vanness explaining four failed merges and the final two orange items becoming one.",
    "Vanness remains in the exchange after the embarrassment. He supplies the mechanics, adds `my luck is💩`, and turns a bad game outcome into communal entertainment instead of disappearing from the scene.",
    "Petty Crimes: self-nominating for Wall prosecution, `Shame me`, becoming too sad to play, four failed merges, the final two orange items becoming one, and a self-issued diagnosis that his luck is poop.",
  ]),
  antiFanon: appendUnique(vanness.antiFanon, [
    "Vanness's earlier `ITS GABU WHO SUCKED IT DRY, NOT MEEE` line preserves Vanness's defense wording only. It is not independent evidence that Gabu did what Vanness said.",
    "Peer exact replies establish immediate participation around the self-file; they do not establish closeness rankings or relationship hierarchy.",
    "The Aug. 10 sequence deepens one person-level contradiction and Petty Crimes lane. Do not split it into a duplicate standalone Episode merely because several replies survive.",
    "`my luck is💩` is comic self-commentary after the failed merges, not a literal durable claim about Vanness's luck.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
