import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-through-run1514";
import { applyRun1515 } from "./cast-run1515";
import { applyRun1518 } from "./cast-run1518";
import { applyRun1518Louvre } from "./cast-run1518-louvre";
import { applyRun1530BirthdaysCast } from "./cast-run1530-birthdays";
import { applyRun1531DaycareCast } from "./cast-run1531-daycare";
import { applyRun1531WallCast } from "./cast-run1531-wall";
import { applyRun1531WhiskeyCast } from "./cast-run1531-whiskey";
import { applyRun1531WallShiyaCast } from "./cast-run1531-wall-shiyax";
import { applyRun1533BirthdaysCast } from "./cast-run1533-birthdays";
import { applyRun1534WallWooCast } from "./cast-run1534-wall-woo";
import { applyRun1535IntegratorCast } from "./cast-run1535-integrator";
import { applyRun1535FollowupCast } from "./cast-run1535-followup";
import { applyRun1540 } from "./cast-run1540";
import { applyRun1540WallCast } from "./cast-run1540-wall";
import { applyRun1547WallErysCast } from "./cast-run1547-wall-erys";
import { applyRun1552WhiskeyCast } from "./cast-run1552-whiskey";
import { applyRun1553IllienCast } from "./cast-run1553-illien";
import { applyRun1553WhiskeyCast } from "./cast-run1553-whiskey";
import { applyRun1556IntegratorCast } from "./cast-run1556-integrator";
import { applyRun1556WallCeleCast } from "./cast-run1556-wall-cele";
import { applyRun1559IntegratorCast } from "./cast-run1559-integrator";
import { applyRun1575WallDeanCast } from "./cast-run1575-wall-dean";
import { applyRun1578LateCast } from "./cast-run1578-late";
import { applyRun1581RichCast } from "./cast-run1581-rich";
import { applyRun1581WallHamitteYCast } from "./cast-run1581-wall-hamittey";
import { applyRun1582WallShiyaVannessCast } from "./cast-run1582-wall-shiya-vanness";
import { applyRun1583BirthdaysWallCast } from "./cast-run1583-birthdays-wall";
import { applyRun1584DaycareWhiskeyCast } from "./cast-run1584-daycare-whiskey";
import { applyRun1586DaycareGhosttCast } from "./cast-run1586-daycare-ghostt";
import { applyRun1589DaycareLouvreCast } from "./cast-run1589-daycare-louvre";
import { applyRun1592DarkAsraiCast } from "./cast-run1592-darkasrai";
import { applyRun1592DaycareGhoulieCast } from "./cast-run1592-daycare-ghoulie";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-through-run1514";

export const allCharacters: Character[] = [...previousCharacters];

applyRun1515(allCharacters);
applyRun1518(allCharacters);
applyRun1518Louvre(allCharacters);
applyRun1530BirthdaysCast(allCharacters);
applyRun1531DaycareCast(allCharacters);
applyRun1531WallCast(allCharacters);
applyRun1531WhiskeyCast(allCharacters);
applyRun1531WallShiyaCast(allCharacters);
applyRun1533BirthdaysCast(allCharacters, previousGroups);
applyRun1534WallWooCast(allCharacters);
applyRun1535IntegratorCast(allCharacters, previousGroups);
applyRun1535FollowupCast(allCharacters);
applyRun1540(allCharacters);
applyRun1540WallCast(allCharacters);
applyRun1547WallErysCast(allCharacters);
applyRun1552WhiskeyCast(allCharacters);
applyRun1553IllienCast(allCharacters);
applyRun1553WhiskeyCast(allCharacters);
applyRun1556IntegratorCast(allCharacters);
applyRun1556WallCeleCast(allCharacters);
applyRun1559IntegratorCast(allCharacters);
applyRun1575WallDeanCast(allCharacters);
applyRun1578LateCast(allCharacters, previousGroups);
applyRun1581RichCast(allCharacters, previousGroups);
applyRun1581WallHamitteYCast(allCharacters);
applyRun1582WallShiyaVannessCast(allCharacters);
applyRun1583BirthdaysWallCast(allCharacters, previousGroups);
applyRun1584DaycareWhiskeyCast(allCharacters, previousGroups);
applyRun1586DaycareGhosttCast(allCharacters, previousGroups);
applyRun1589DaycareLouvreCast(allCharacters, previousGroups);
applyRun1592DarkAsraiCast(allCharacters, previousGroups);
applyRun1592DaycareGhoulieCast(allCharacters);

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
