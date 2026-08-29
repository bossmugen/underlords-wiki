import type { Episode } from "./wiki";

export const whiskeyIntegratedEpisodes: Episode[] = [
  {
    id: "lilly-effie-garlic-eggplant",
    title: "Effie Puts the Eggplant Recipe Through QA",
    season: "2020",
    date: "December 6, 2020",
    kind: "Whiskey ordinary-life handoff / a recipe request becomes a tiny verification pipeline",
    logline: "Effie opens by saying `@Lilly👽 wanted a recipe for Garlic Eggplant/Eggplant garlic sauce.` Her father's version is sized for roughly two weeks, so she scales it down; without eggplant on hand to test the whole dish, she tastes the sauce, checks the reduced version with her father, reports `The sauce seems to taste right, and my father said it would work`, and sends Lilly a Google Doc. Lilly's original request is not preserved, so the request is peer-reported by Effie; Effie's scaling, tasting, checking, and documentation are self-authored. The affection is visible in procedure: an ordinary ask gets treated like something worth verifying before handoff. The archive does not prove Lilly cooked it, locate the father's reputation, establish ethnicity/cuisine identity, or rank the relationship.",
    cast: ["Lilly", "Effie"]
  }
];
