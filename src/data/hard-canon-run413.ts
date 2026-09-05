import "./canonicalize-cast";
import { allCharacters, characterById, primaryGroupByCharacterId, castGroups } from "./cast";

const zyrcant = allCharacters.find((character) => character.id === "zyrcant");
if (zyrcant) {
  zyrcant.aliases = (zyrcant.aliases ?? []).filter((alias) => !["Akariel", "Akariel™", "akariel_star"].includes(alias));
  zyrcant.role = "VIP · Amaurot";
  zyrcant.logline = "UL VIP and recurring Amaurot-side extended cast member. Kept separate from Akariel; similar archive neighborhoods do not collapse two people into one.";
  zyrcant.tags = ["VIP", "Amaurot"];
  zyrcant.relationships = (zyrcant.relationships ?? []).filter((relationship) => relationship.name !== "Rich");
}

const amexistir = allCharacters.find((character) => character.id === "ame");
if (amexistir) {
  amexistir.name = "Amexistir";
  amexistir.aliases = ["Ame"];
  amexistir.role = "Game Officer";
  amexistir.era = "2022–present";
  amexistir.logline = "The later stable account other people directly call Ame: Spanish-first Lobby exchanges, a 2023 return for a chill club, then the Officer room finding him anyway. Not silently merged with the separate 2022 `ame._.` account or the unresolved 2020 Junior Officer Ame.";
  amexistir.tags = ["Game Officer", "2022", "2023", "Identity guard"];
}

characterById.clear();
for (const character of allCharacters) characterById.set(character.id, character);

primaryGroupByCharacterId.clear();
for (const group of castGroups) {
  for (const id of group.characterIds) primaryGroupByCharacterId.set(id, group);
}
