import type { Character } from "./wiki";
import {
  allCharacters,
  castGroups,
  characterById,
  primaryGroupByCharacterId,
  type CastGroup,
} from "./cast";

// Public character taxonomy is exactly:
// Leader · Officers · Retired Officers · DR Officers · Snipers · Executives · Staff · Platelets · VIPs.
// Historical is timeline context, never a tenth caste.

const additions: Character[] = [
  {
    id: "acoryuie",
    name: "Acoryuie",
    aliases: ["Cinders", "Juniper"],
    billing: "guest",
    role: "VIP",
    era: "2021",
    logline: "The same account comes through UL's door twice as Cinders and Juniper; Mugen's later `welcome back bb ... you know your way` proves familiarity, while the surviving club field is still incomplete.",
    tags: ["VIP", "Lobby", "Return"],
  },
  {
    id: "bishopthaguru",
    name: "BishopThaGuru",
    billing: "guest",
    role: "VIP",
    era: "2021",
    logline: "Mugen hands Bishop a server map; two minutes later Bishop announces `I get lost easily`, and the Wall immediately begins manufacturing an office file around him.",
    tags: ["VIP", "Lobby", "Wall"],
  },
  {
    id: "churro",
    name: "Churro",
    aliases: ["Suora"],
    billing: "legacy",
    role: "Staff",
    era: "2022–",
    logline: "Churro asks whether intake wants a main or alt; Gilli answers `Whichever is in UL lol`, Churro supplies Suora, and Ren immediately detonates into `SUORAA!!!!`.",
    tags: ["Staff", "UL member", "Lobby"],
  },
  {
    id: "crystalia",
    name: "Crystalia",
    aliases: ["Crystalia^-^", "PhóKingYouUp", "phokingyouup6617"],
    billing: "legacy",
    role: "Staff",
    era: "2021–",
    logline: "Historical Staff whose surviving file is mostly other people placing him: Mugen is glad he made it, the Wall casts him as UL's mermaid, and Anthos logs another dungeon run with him in the party.",
    tags: ["Staff", "Wall", "Dragon Raja"],
  },
  {
    id: "eos",
    name: "Eos",
    aliases: ["astarosa", "Eos~", "EnyoCal"],
    billing: "legacy",
    role: "Staff",
    era: "2020–2022+",
    logline: "The same account crosses UL paperwork as EnyoCal and Eos; later a lie game supplies the cleanest membership receipt when Eos says Gilli is why they joined UL.",
    tags: ["Staff", "UL member", "Wall"],
  },
  {
    id: "hamittey",
    name: "HamitteY",
    aliases: ["hamittey"],
    billing: "legacy",
    role: "Staff",
    era: "2021–",
    logline: "Historical Staff who finds an old screenshot and carries it into the Wall himself before Noether starts adjusting his sugar content and the room thanks them for the material.",
    tags: ["Staff", "Wall"],
  },
  {
    id: "jade",
    name: "Jade",
    aliases: ["jdiana", "蛋挞吃多了(JADE)"],
    billing: "guest",
    role: "VIP",
    era: "2021",
    logline: "A Dragon-club visitor who is on the Whiskey couch almost immediately, later offering the room a spontaneous Get Out watch link and refusing to compromise on Prince Caspian discourse.",
    tags: ["VIP", "Dragon", "Whiskey"],
  },
  {
    id: "jordayy",
    name: "Jordayy",
    aliases: ["j.nm"],
    billing: "guest",
    role: "VIP",
    era: "2021",
    logline: "Whiskey regular who likes reading everybody else's chaos, periodically announces another disappearance, then resurfaces with dog-catching clothes, a last-page screen share, and a haircut report.",
    tags: ["VIP", "Whiskey"],
  },
  {
    id: "korea-milk",
    name: "KOREA / Milk",
    aliases: ["『KOREA』", "Milk", "su.myeon"],
    billing: "guest",
    role: "VIP",
    era: "2021",
    logline: "Whiskey regular whose file runs from work lunch to Ren's cute-making campaign, Ghoulie's Wall residency, and Woohyuk becoming everybody's favorite pancake. This Milk is not Miihi/Milk.",
    tags: ["VIP", "Whiskey"],
  },
  {
    id: "milo",
    name: "Milo",
    aliases: ["milocal"],
    billing: "guest",
    role: "VIP",
    era: "2021",
    logline: "Whiskey regular who returns from an unspecified lab, trades flirt-coded nonsense with Gilli, and approaches possible Raja burnout with the least theatrical plan imaginable: `go f2p and slowly quit`.",
    tags: ["VIP", "Whiskey", "Dragon Raja"],
  },
  {
    id: "sarabunny",
    name: "SaraBunny",
    aliases: ["foxcat"],
    billing: "legacy",
    role: "Staff",
    era: "2021–2022+",
    logline: "Arrives at Discord already naming Underlords as her club, then uses the house for contest logistics, ordinary chat, `brr` social research, and eventually brief communication in cow.",
    tags: ["Staff", "UL member"],
  },
  {
    id: "tonytonychopper",
    name: "TonyTonyChopper",
    billing: "guest",
    role: "VIP",
    era: "2022",
    logline: "Arrives explicitly saying they have no current club; roughly three minutes after Discord paperwork Marian has already put them on the Wall and Tony is yelling that this did not need to be shared with the world.",
    tags: ["VIP", "Discord guest", "Wall"],
  },
  {
    id: "yaza",
    name: "Yaza",
    aliases: ["Yazaki", "Rosario17"],
    billing: "legacy",
    role: "Staff",
    era: "2020–2021+",
    logline: "Yaza enters by asking the sensible onboarding question about age disclosure; months later Gilli closes the membership question directly: `You are UL member` and therefore `You have a chapter.`",
    tags: ["Staff", "UL member", "Whiskey"],
  },
];

const metadataOverrides: Record<string, Partial<Character>> = {
  new: { role: "Staff", tags: ["Staff"] },
  aeshleen: { role: "Staff", tags: ["Staff", "Wall speedrun"] },
  "baby-lyssa": { role: "VIP", tags: ["VIP", "2021", "Wall", "Wall speedrun", "Screenshot jail"] },
  panda: {
    role: "Staff",
    logline: "Historical Staff member with a recurring edgelord register, Marian Kage identity trail, and a long Wall counterpart file with Eos.",
    tags: ["Staff"],
  },
  rose: {
    role: "Staff",
    logline: "Historical Staff whose stable account reappears across later returns, cooking/equipment posts, and Daycare continuity.",
    tags: ["Staff"],
  },
  may: { role: "Staff", tags: ["Staff", "UL member", "2020", "Mayvis", "Missing Sun Incident"] },
  erys: { role: "Platelet", tags: ["Platelet", "UL member", "2022", "Wall speedrun"] },
  nothien: { role: "Staff · returning Underlord", tags: ["Staff", "2020", "2023", "Return"] },
  akamin: { role: "Staff", tags: ["Staff", "UL member", "2020", "Tumbleweed"] },
  pride: { role: "Staff", tags: ["Staff", "UL member", "2020", "Wall", "Whiskey"] },
  xephy: { role: "Staff · returning Underlord", tags: ["Staff", "2020", "2026", "Return"] },
  ciphy: { role: "Staff", tags: ["Staff", "UL member", "2020", "Whiskey", "Recruitment"] },
  allenne: { role: "Staff", tags: ["Staff", "UL member", "2020", "Lobby", "Whiskey", "Onboarding"] },
  shiyax: { role: "Staff", tags: ["Staff", "UL member", "2020", "2021", "Whiskey", "Slice", "AUUUUU"] },
  jas: { role: "Staff · former Caelum leader", tags: ["Staff", "Caelum", "Absent father", "Fake family"] },
  lexi: { role: "VIP", tags: ["VIP", "LoliParadise", "2021", "Lobby", "Whiskey"] },
};

for (const addition of additions) {
  const existing = allCharacters.findIndex((character) => character.id === addition.id);
  if (existing >= 0) allCharacters[existing] = { ...allCharacters[existing], ...addition };
  else allCharacters.push(addition);
}

for (let index = 0; index < allCharacters.length; index += 1) {
  const character = allCharacters[index];
  const override = metadataOverrides[character.id];
  if (override) allCharacters[index] = { ...character, ...override };
}

const canonicalGroups: CastGroup[] = [
  { id: "leader", label: "Leader", note: "One Boss. Founder. The show starts here.", characterIds: ["mugen"] },
  { id: "officers", label: "Officers", note: "Current command cast.", characterIds: ["gabu","anayss","ansun","wolfphenix","sye","ren","gilli","oyasumi","snow","anthos","daya"] },
  { id: "retired-officers", label: "Retired Officers", note: "Former full Officers. Retirement does not delete the history.", characterIds: ["hyaluna","ritha","suzimasu","yumi","illien","key","nelph","kiro"] },
  { id: "game-officers", label: "DR Officers", note: "Dragon Raja authority, separate from social command.", characterIds: ["ame","chibiterasu","yelik","noether","yassr"] },
  { id: "snipers", label: "Snipers", note: "Applicant grabbers / recruitment-side cast.", characterIds: ["kaede","feli","lan","nemo","rummy"] },
  { id: "directors", label: "Executives", note: "Directors and specialist jobs.", characterIds: ["shiki","han","mia","nobu","moon"] },
  {
    id: "staff",
    label: "Staff",
    note: "UL Staff / adult members without a more specific primary role.",
    characterIds: [
      "hishiro","gengrey","lilly","momo","nhou","cookie","alkey","zepp","ten","ceen","ghostt","tofu","rooks","nuien",
      "new","aeshleen","panda","rose","may","nothien","akamin","pride","xephy","ciphy","allenne","shiyax","jas",
      "churro","crystalia","eos","hamittey","sarabunny","yaza",
    ],
  },
  {
    id: "platelets",
    label: "Platelets",
    note: "The under-18 designation. Once assigned, it stays part of the character file.",
    characterIds: ["scar","dyingfox","ryo","dean","tae","zoshaa","candy","cele","erys"],
  },
  {
    id: "vip",
    label: "VIPs",
    note: "Non-UL visitors / guests, plus files whose surviving evidence does not establish UL membership.",
    characterIds: [
      "zyrcant","rich","woohyuk","syv","woosung","beowulf",
      "baby-lyssa","lexi","acoryuie","bishopthaguru","jade","jordayy","korea-milk","milo","tonytonychopper",
    ],
  },
];

castGroups.splice(0, castGroups.length, ...canonicalGroups);

characterById.clear();
for (const character of allCharacters) characterById.set(character.id, character);

primaryGroupByCharacterId.clear();
for (const group of castGroups) {
  for (const id of group.characterIds) primaryGroupByCharacterId.set(id, group);
}
