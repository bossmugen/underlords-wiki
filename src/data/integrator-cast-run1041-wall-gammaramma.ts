import { allCharacters, characterById, type Character } from './wiki-content';

type ExtendedCharacter = Character & {
  portraits?: string[];
  sourceNotes?: string[];
  claims?: Array<{
    claim: string;
    confidence: 'A' | 'B' | 'C';
    source: string;
    sourceRefs?: string[];
  }>;
  antiFanon?: string[];
};

const character: ExtendedCharacter = {
  id: 'gammaramma',
  name: 'gammaramma',
  slug: 'gammaramma',
  category: 'Characters',
  group: 'the-underlords',
  role: 'Archive-era cast',
  era: '2021',
  logline:
    'A low-prose Wall regular whose surviving footprint is mostly amusement: one reaction-state appearance, one full-capital LMAO, and very little interest in explaining the joke.',
  bio: `gammaramma barely needs a sentence to register in the room. One October Wall thread ends with gammaramma among the final \`frognod\` reactors; a few weeks later, \`LMAO\` is the entire authored contribution. The second beat lands near a crying-cat post, but it is structurally standalone, so the exact target of the laugh stays open. What survives is smaller and more useful than a manufactured episode: somebody quiet in prose who still shows up when the room turns ridiculous.`,
  currentStatus: 'Archive-era cast',
  featured: false,
  tags: ['Wall', 'low-prose presence', 'reaction shorthand', 'Petty Crimes'],
  relationships: [],
  episodes: [],
  runningGags: [
    'Petty Crimes: registering amusement with a reaction or one-word laugh instead of filing a paragraph.',
  ],
  quotes: ['LMAO'],
  locations: ['Wall'],
  gallery: [],
  aliases: [],
  portraits: [],
  sourceNotes: [
    'archive-intake/wall-shame-fame-2020-2026-20260819-1857-pdt/checkpoint-addendum-2026-09-13-1907-pdt.md',
    'archive-intake/wall-shame-fame-2020-2026-20260819-1857-pdt/findings-addendum-2026-09-13-1907-pdt.md',
    'archive-intake/wall-shame-fame-2020-2026-20260819-1857-pdt/forensic-receipts-addendum-2026-09-13-1907-pdt.md',
  ],
  claims: [
    {
      claim:
        'Stable account 283290211524411394 is anchored to the authored gammaramma Wall object used in this dossier.',
      confidence: 'A',
      source:
        'archive-intake/wall-shame-fame-2020-2026-20260819-1857-pdt/forensic-receipts-addendum-2026-09-13-1907-pdt.md',
    },
    {
      claim:
        'On 2021-10-12, gammaramma appears among the final frognod reactors on Sye/ƐℲı˥ saying “Like mother Like daughter.” This is final reaction membership only; click time is not preserved.',
      confidence: 'A',
      source:
        'archive-intake/wall-shame-fame-2020-2026-20260819-1857-pdt/forensic-receipts-addendum-2026-09-13-1907-pdt.md',
    },
    {
      claim:
        'On 2021-11-05, gammaramma authors standalone “LMAO” 12m33s after a pooled Deleted User crying-cat media post; there is no stored reply edge tying the laugh to that post.',
      confidence: 'A',
      source:
        'archive-intake/wall-shame-fame-2020-2026-20260819-1857-pdt/forensic-receipts-addendum-2026-09-13-1907-pdt.md',
    },
  ],
  antiFanon: [
    'Do not turn Sye’s “Like mother Like daughter” joke-family wording into literal biological, adoptive, or formal family history.',
    'Do not claim gammaramma’s standalone LMAO replies to, endorses, describes, or identifies the nearby crying-cat image; no reply edge survives.',
    'The nearby attachment is POSTED BY its author only. Maker, capture, subject, featured-person, and edit provenance remain unresolved.',
    'Two low-prose traces support a small social read, not a fabricated relationship edge, role, or standalone episode.',
  ],
};

allCharacters.push(character);
characterById[character.id] = character;
