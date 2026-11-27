import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { deepAnayssOfficerCharacterBios } from "./character-bios-officers-anayss-deep";
import { rummyNarrativeCharacterBios } from "./character-biographies-rummy";
import { syeNarrativeCharacterBios } from "./character-biographies-sye";

// Run 388 Gabu material was folded into the canonical deep officer owner. This routed
// module remains the small safe landing pad for later person-first overlays that need
// the already-registered run363 path without reopening the giant resolver.

const rummyBase = rummyNarrativeCharacterBios.rummy;
const rummyMagazineSections = rummyBase.sections.map((section) => {
  if (section.title === "BL KNOWLEDGE HAS APPARENTLY BECOME A LICENSED PROFESSION") {
    return {
      ...section,
      paragraphs: [
        "The fake-magazine file pushes that reputation back another year. In 2022, a FASHION RAJA cover built around Mochii/Rummy already describes her as `Known to read a lot of BL`. By the time Marian, Daya, Tae and Moon are turning BL knowledge into a fake professional license in 2023–2024, the joke is not appearing out of nowhere. Rummy had already been publicly packaged with the taste as part of her own ridiculous magazine persona.",
        ...section.paragraphs,
      ],
    };
  }

  if (section.title === "PEOPLE KNOW WHERE TO FIND THE REACTION") {
    return {
      ...section,
      paragraphs: [
        ...section.paragraphs,
        "Cele belongs in the older relationship file too, and the fake magazine turns out to be telling the truth in UL's preferred criminal dialect. The 2022 FASHION RAJA mini-bio says `I was kidnapped by Cele and that how I arrive here`, then adds that Rummy `got adopted:D`. In QOTD, Rummy tells the longer version: Cele met her through dungeon runs, dailies and ladder, then `persuade (kidnapped)` her into UL. Cele does not dispute the charge; she answers `I also kidnap`, `I'd do it again`, and `No regrets`. So the kidnapping language stays a joke, but Cele's place in Rummy's recruitment story is no longer just magazine theater. Apparently this is what recruitment looks like when everybody involved would rather confess to a felony than say `she invited me to the club`.",
      ],
    };
  }

  if (section.title === "PETTY CRIMES") {
    return {
      ...section,
      paragraphs: [
        ...section.paragraphs,
        "The 2022 FASHION RAJA cover also calls her `pro in the kitchen`. Years later the room is litigating whether one of her pancakes has crossed the line from breakfast into charcoal. This is magazine-characterization rather than a culinary credential, but as self-mythology it is magnificent: apparently the kitchen reputation and the kitchen prosecution were both allowed to exist at once.",
      ],
    };
  }

  return section;
});

const syeBase = syeNarrativeCharacterBios.sye;
const mereTroublemaker: NarrativeSection = {
  period: "Dragon Raja relationship file",
  title: "MERE WAS LITERALLY WEARING `SYENITHA'S TROUBLEMAKER`",
  paragraphs: [
    "One surviving Raja profile stack puts the title `Syenitha's troublemaker` directly above `UnderLords` and `mere15`. Mere is her own early UL person; Syenitha is Sye. That makes the title useful relationship texture before anybody writes a single sentence about what kind of relationship it was. Mere was walking around the game with a Sye-specific troublemaker label attached to her character, which is an almost offensively efficient way to tell us there was already a private joke or social association worth wearing in public.",
    "The title does not choose the relationship category for us, and it does not need to. Friendship, flirtation, adopted-family nonsense, private shorthand, or some other Raja-era bit remain possible until the conversation around it turns up. The lived fact is smaller and better: somebody connected to Sye was comfortable enough to make `Syenitha's troublemaker` part of her visible character presentation. Sye's biography already shows that people carry her words and instructions around; Mere apparently carried the branding."
  ]
};

const anayssArchive = deepAnayssOfficerCharacterBios.anayss;
const anayssFirstScene: NarrativeSection = {
  period: "Early Raja",
  title: "SHE WENT LOOKING FOR A BOSS AND FOUND UNDERLORDS TAKING PICTURES",
  paragraphs: [
    "Anayss's entry story is somehow more Anayss than the old `she gets lost` shorthand was prepared for. Brand-new to Raja, she is DMing Gilli questions like `whats Core?` and whether she can delete all these gems. Gilli gives her a location in club chat; Anayss follows it expecting a boss spawn. What she actually finds is UL on balloons taking pictures. Anthos picks her up, and Gilli invites her into the Discord that same day. She went looking for game information and physically stumbled into a photoshoot. Of course she did.",
    "The later map-giver story gets much funnier once the entrance has a body. Anayss eventually says she was an overachiever who wanted to learn everything and that, once she understood more, she tried to help people with the same things she had once not understood. That is not a clean little incompetence-to-competence montage. It is somebody remembering exactly how stupid the doorway felt and becoming unusually willing to stand near doorways for other people.",
    "A surviving first Lobby appearance gives April 2020 as a safe early boundary, but Anayss's own `4th or 5th day` memory does not need to be converted into a ceremonial join date. The scene works without pretending the archive has issued her a birth certificate. What matters is the behavior: ask questions, follow directions, accidentally discover a gang on balloons, get picked up, later become the person handing everybody else a route."
  ]
};

const anayssNoether: NarrativeSection = {
  period: "Noether",
  title: "THE CAKE HAD A PREQUEL",
  paragraphs: [
    "Noether's later cake meetup with Anayss already made them memorable together; the older QOTD exchange finally explains why the warmth has roots. Replying directly to Anayss's origin story, Noether credits Anayss with picking her up when she was alone and did not really have a place to go, and with helping UL become fun at a point when Noether had stopped wanting to play. Anayss answers `TQM amiga`. Noether answers `Tambien te quiero`.",
    "That changes the emotional shape of the later ridiculousness without changing the relationship label. Their Wall collaboration and the offline cake are no longer isolated cute scenes floating in space. There is an earlier memory of Anayss noticing somebody on the edge of the game and pulling them toward people. Years later they can meet, bake cake, and joke about a `date` because there is already an older layer of being remembered and included underneath it. Affection is plenty; romance does not need to be invented to make the scene matter."
  ]
};

const anayssEvidenceGoblin: NarrativeSection = {
  period: "Wall of Shame / Fame",
  title: "THE RECEIPTS ARE APPARENTLY IN HER POCKET",
  paragraphs: [
    "Anayss has a second kind of wayfinding problem: sometimes the thing everybody is looking for is an old stupid receipt, and she is alarmingly likely to know where it went. When Momo declares `No receipts noh evidence!` in October 2020, Anayss answers simply `I do`. Mugen soon jokes that Ana will pull old material up again in three months. By winter, other people are not merely noticing the pattern; they are naming the job she keeps accidentally performing. Hishiro calls her `Evidence retriever`. Daya says she `just grab[s] the old evidence of people`, later announces `All these are from Ana's pocket`, and Kaede upgrades the reputation to `Evidence goblin`.",
    "The funniest part is that Anayss does not behave like a solemn keeper of records. When an old Cuttlefish screenshot comes back, her explanation is `I just wanted @CHIBIᵗᵉʳᵃˢᵘ to see it XD`; when the room starts spawning more evidence while she is at work, she complains about that too. The archive-memory loop is social before it is archival. She remembers an old bit because somebody would laugh at it now, digs it back up, and hands the past to the current room like conversational ammunition.",
    "That same appetite shows up without prosecution attached. In August 2021 she is loudly asking Mugen for `TBT ART`, then goes `HIGHKEY SALTY` over older 2020 pieces she missed. Anayss does not only remember people through embarrassing screenshots; she wants the old art, the old jokes, the pieces of the house that happened before she saw them. Her map-giving habit helps people find where to go next. This other habit keeps asking what the hell everybody did before she got there.",
    "None of that creates an Archivist office, and `Evidence goblin` remains exactly what it sounds like: a peer nickname for a recurring menace, not a governance title. The better character read is that Anayss repeatedly turns memory back into live social material. UL does not have to explain to her why an old receipt is funny. More often, everybody else is discovering that Ana already has the fucking thing."
  ]
};

export const run388GabuCharacterBios: Record<string, CharacterNarrative> = {
  rummy: {
    ...rummyBase,
    sections: rummyMagazineSections,
  },
  sye: {
    ...syeBase,
    sections: [syeBase.sections[0], mereTroublemaker, ...syeBase.sections.slice(1)],
  },
  anayss: {
    intro: [
      "Anayss's public story now has the scene it was missing: before the Underboss, Battle Leader, Game Officer, door-routing, countdown-yelling, evidence-retrieving version of her, there is a new Raja player asking Gilli what Core is, following a boss location, and discovering Underlords on balloons taking pictures instead. It is less a transformation story than an extremely specific origin for the habit she keeps repeating later: figure out where the next person is stuck, then tell them where the door actually is.",
      ...anayssArchive.overview,
    ],
    sections: [
      anayssFirstScene,
      anayssNoether,
      {
        title: "WHAT KEEPS HAPPENING",
        paragraphs: anayssArchive.characterNotes.map((note) => `${note.title}. ${note.text}`),
      },
      anayssEvidenceGoblin,
      {
        title: "SCENES THAT STUCK",
        paragraphs: anayssArchive.history.map((beat) => beat.text),
      },
    ],
  },
};
