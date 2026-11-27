import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const zyrcantId = "zyrcant";

if (!allCharacters.some((character) => character.id === zyrcantId)) {
  const zyrcant: ExtendedCharacter = {
    id: zyrcantId,
    name: "Zyrcant",
    aliases: ["Akariel™", "akariel_star"],
    billing: "legacy",
    role: "Archive-era Daycare cast",
    era: "2021",
    logline:
      "Zyrcant has the extremely UL habit of volunteering for public embarrassment and then acting scandalized when the room actually cashes the check. `put me on the wall of shame 😩` is followed months later by an auction bit where Tofu prices the exhibit at five cents and Zyrcant answers with one gasp, one worried face, and three crying cats. Dignity is technically present; participation keeps winning.",
    tags: [
      "Archive cast",
      "Daycare",
      "Wall-of-shame culture",
      "Expressive reactions",
      "Comfortable teasing",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Tofu",
        note:
          "Tofu can turn Zyrcant's July 2021 post into `Starting bid: 5¢`, and Zyrcant answers forty-three seconds later entirely in shared reaction language: a gasp, a worried emote, and three crying cats. There is no defensive explanation and no exit from the bit. The lowball only works because Zyrcant keeps the joke alive long enough for Mugen, Ren, and Gilli to pile into the auction chorus.",
        href: "/characters/tofu",
      },
    ],
    quotes: [
      "put me on the wall of shame 😩",
      ":Raja_gasp: :8046_ZeroWorried: :CatCry: :CatCry: :CatCry:",
    ],
    claims: [
      "Stable account 257294164746698763 is Zyrcant / Akariel™ / akariel_star in the reviewed Daycare handoff.",
      "On January 17, 2021 Zyrcant says `put me on the wall of shame 😩`. By July 3, after Zyrcant posts an attachment, Tofu true-replies `Starting bid: 5¢`; Zyrcant answers forty-three seconds later with one gasp, one worried emote, and three crying cats, while Mugen, Ren, and Gilli continue the auction bit. The recurring character read is active exposure-culture participation followed by theatrical wounded disbelief when the room uses exactly the permission Zyrcant keeps giving it.",
      "The auction pocket is socially legible without needing literal stakes: Tofu lowballs the exhibit, Zyrcant protests in reaction language, and the room understands the joke well enough to extend it without explanation.",
    ],
    antiFanon: [
      "The July 3 attachment is POSTED BY Zyrcant only. The image itself was not inspected in this integration pass, so do not assign maker, capture, subject, or depicted-person credit from the post alone.",
      "`Starting bid: 5¢` and the follow-on `Auction wars` / money-bid reactions are a room joke, not evidence of a real sale, auction, payment, or valuation.",
      "Zyrcant's willingness to feed a public embarrassment bit supports comfortable participation in that humor mechanism; it does not establish romance, family status, formal role, or a ranked friendship tier with Tofu or the surrounding chorus.",
      "The January `wall of shame` request supports self-directed participation in the running culture; it is not an origin claim for the Wall or proof that every later filing involving Zyrcant was requested.",
    ],
  };

  allCharacters.push(zyrcant);
  characterById.set(zyrcantId, zyrcant);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(zyrcantId)) {
    archiveCastGroup.characterIds.push(zyrcantId);
  }
}
