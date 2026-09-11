import { allCharacters, characterById } from "./cast";
import { allCharacters as baseCharacters } from "./cast-base";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
const seedWoosung = baseCharacters.find((character) => character.id === "woosung");

if (woosungIndex < 0 || !seedWoosung) {
  throw new Error("Run 864 expected canonical Woosung seed; refusing an identity repair without it");
}

const canonicalWoosung: ExtendedCharacter = {
  ...seedWoosung,
  aliases: ["Woo Woo", "WOO"],
  roles: ["VIP"],
  tags: [...new Set([...(seedWoosung.tags ?? []), "Platelet"])],
  claims: [
    "Mugs confirms canonical Woosung is a woman and the female cousin of Mugen's ex. Woosung is not Mugen's ex.",
    "A 2020 Daycare window contains one stable account appearing as WOO / shyranri while a different overlapping stable account appears as The Woosung. Display-name similarity therefore cannot bridge those two accounts by itself.",
  ],
  antiFanon: [
    "Do not use the display name WOO alone as an identity bridge. The Daycare export contains an overlapping separate WOO account, so source-local WOO material must stay unassigned to canonical Woosung unless an independent bridge resolves the account.",
    "The old `_woo_woo` alias and the later WOO-derived Gabu, Gilli, Nobu, Moon, Ren, Ricochet, Wall, QOTD, Royal Guard, and long-form-sharing overlays were previously attached to canonical Woosung through the now-contradicted account merge. They are intentionally withheld from this dossier pending a safe identity bridge rather than silently reassigned to another person.",
    "Current-canon VIP / Platelet placement is not a license to backdate Staff, Royal Guard, or other export-time role arrays into appointment chronology.",
  ],
};

allCharacters[woosungIndex] = canonicalWoosung;
characterById.set("woosung", canonicalWoosung);
