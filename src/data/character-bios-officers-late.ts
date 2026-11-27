import type { CharacterBio } from "./character-bios";
import { renNarrativeCharacterBios } from "./character-biographies-ren";

const renNarrative = renNarrativeCharacterBios.ren;
const renNarrativeText = [
  ...renNarrative.intro,
  ...renNarrative.sections.flatMap((section) => section.paragraphs),
  ...(renNarrative.closing ?? [])
].join(" ");

if (renNarrativeText.length < 9000) {
  throw new Error("Priority Officer character ren lost its person-first narrative depth.");
}

export const lateOfficerCharacterBios: Record<string, CharacterBio> = {
  anthos: {
    dek:"Pit Boss, house-lore contagion event, quote magnet, deadline wrangler, and the woman whose name escaped containment and became a reusable noun.",
    overview:[
      "Anthos is a current Pit Boss / Minister. Her archive becomes much more legible once two separate facts are allowed to coexist: she is one of the people the room turns into mythology, and she is also one of the people quietly doing the calendar work that lets the room function.",
      "The mythology starts before the famous identity merger. On August 27, 2020, Ren simply tells her `Anthos i love your quotes`. Three weeks later Ren diagnoses Ansun as Anthos's voice twin, Gabu says `We all anthos`, Ansun starts assigning people to independent Anthos variants, and eventually `Anthos` stops behaving like one person's name and starts behaving like a category the room can apply to itself. By spring 2021 Ren can say `Anthos is the solution`; Ansun can escalate to `Anthos is the Father, The Son, and the HEYYYY MACARENA`; the joke has become portable house grammar.",
      "Anthos is not merely standing there while everybody does this to her. When the expanded taxonomy reaches `Ansun, RV, Gabu, (3 alter anthos)`, Anthos answers `aight bet`. That tiny acceptance matters. The archive shows a person willing to feed the nonsense, not a passive target permanently trapped inside somebody else's nickname joke.",
      "Meanwhile, the same person keeps knowing where things go and when they are due. Birthday wishes get routed to Slice. IRL photos belong in Slice and get pinned. Photo Submissions repeatedly gets openings, extensions, closing reminders, and compliance corrections carried forward by Anthos. The joke makes her atmospheric; the maintenance receipts show what she actually does with that embeddedness."
    ],
    history:[
      {date:"August 27, 2020",title:"The quote reputation comes first",text:"Before the voice-twin mythology, Ren tells Anthos `Anthos i love your quotes`. The line is peer characterization, not a formal quote-curator role, but it establishes that Anthos is already socially legible as somebody whose wording gets remembered."},
      {date:"September 18 – November 5, 2020",title:"Everybody becomes Anthos",text:"Ren names Ansun as Anthos's voice twin; Gabu says `We all anthos`; Ansun expands the category into independent Anthos variants, light/dark Anthos, alter Anthos, and finally `we are one being`. The joke moves from one synchronization problem into a room-wide identity grammar."},
      {date:"September 29, 2020",title:"Inside the joke, not merely under it",text:"As Ansun expands the mythology to `Ansun, RV, Gabu, (3 alter anthos)`, Anthos answers `aight bet`. The response is small but decisive: she sometimes accepts and feeds the construction herself."},
      {date:"August–September 2020",title:"House grammar is already ordinary",text:"Anthos routes Ryoko birthday wishes toward Slice, then explains that IRL photos are usually sent in Slice and pinned. These scenes support room literacy, not a formal Slice-management appointment."},
      {date:"January–September 2021",title:"The mythology gets a calendar job",text:"Anthos repeatedly carries Photo Submissions openings, extensions, deadline reminders, and date information. During the April Mafia round, Gilli identifies invalid cropping/name problems and Anthos folds the correction into the closing reminder. It is a clean maintenance handoff without a Director title being invented."},
      {date:"April 23–26, 2021",title:"Anthos is the solution",text:"Ren writes `Anthos is the solution`; Ansun turns Anthos into a mock trinity plus Macarena; days later Ren announces `Anthos arc, the rebelión of the anthos`. The original twin gag has escaped its point of origin and become reusable house mythology."}
    ],
    characterNotes:[
      {title:"A name becomes a category",text:"The strongest joke is not simply that Anthos and Ansun sounded alike. It is that the room learned to use `Anthos` as a social object other people could be assigned to, split into variants, or invoke as a solution."},
      {title:"Quotable before the mythology",text:"Ren's August 2020 line matters because it prevents the merger joke from being mistaken for the beginning of Anthos's social identity. The room was already listening to her wording."},
      {title:"Maintenance under the meme",text:"Birthday routing, room conventions, submission openings, extensions, and correction propagation show a practical operator beneath the atmospheric joke. The archive supports recurring maintenance, not an invented media-director title."},
      {title:"Ansun",text:"Ansun is the strongest recurring counterpart in the voice-twin / one-being bit, but the joke quickly grows beyond the pair. Twin language is comedy, not literal identity, romance, or a special rank."},
      {title:"Ren",text:"Ren repeatedly names Anthos's social meaning — quotes, voice twin, solution, rebellion. That makes Ren a strong peer narrator for Anthos without turning either person into the other's official archivist or closest friend."}
    ],
    roleNotes:[
      "Current Pit Boss / Minister.",
      "Photo Submissions maintenance and room-routing behavior are archive-visible work, not extra formal appointments.",
      "Current command rank must not be projected backward onto 2020–2021 scenes."
    ],
    canonNotes:[
      "Anthos is a woman; historical period jokes that split `Anthos (Male)` and `Anthos (female)` do not override current identity canon.",
      "`We all anthos`, alter-Anthos, one-being, trinity, solution, and rebellion language are archive-confirmed jokes, not literal identity, religion, politics, kinship, or romance.",
      "Repeated Photo Submissions maintenance does not establish a Media Director, Photo Director, or other invented formal title.",
      "Reaction participation, reply frequency, and saturation do not establish friendship or closeness ranking.",
      "Export-time role arrays do not date the Pit Boss appointment."
    ]
  },

  daya: {
    dek:"Pit Boss, Recruiter, front-door finisher, real-life-first enforcer, identity clerk, and recurring victim of the paperwork becoming evidence against the clerk.",
    overview:[
      "Daya is a current Pit Boss / Minister and holds the Recruiter appointment. Unlike many command files, one promotion date is actually archive-confirmed: Daya was promoted to Officer on May 14, 2022. That receipt is useful because it lets the page keep the rare dated role fact without pretending every later label has equally tidy chronology.",
      "The Recruiter title also has behavior behind it. August 2022 Lobby scenes catch Daya turning waiting time into useful orientation: here is the server map, here is Biodata, here are the rules, Whiskey is the main room, another Officer will finish the role step in this specific moment. On a return visit she recognizes the person has already done the rules and does not make them repeat the ceremony; later the surviving sequence closes with `role assigned!`. The procedure has a beginning, handoff, memory, and finish.",
      "That front-door style rhymes with one of Daya's clearest values receipts. In Slice, when somebody is trying to schedule college around Raja dailies, Daya says `dont stress. prioritize school, real life always first`. In both scenes, the system is allowed to bend around the person: school beats dailies; a returning member does not reread rules because bureaucracy enjoys hearing itself talk.",
      "Then the clerk becomes the exhibit. Daya correctly identifies HicUUOOOOGH as Kiro; Kiro asks `Who's kiro`; records management collapses. Ten days later Kiro posts a Daya Wall exhibit and Daya joins the Fat Wheeze reaction pile. The person trying to resolve identity has become evidence herself, which is extremely on brand for this house."
    ],
    history:[
      {date:"May 14, 2022",title:"A promotion date we can actually date",text:"The archive confirms Daya's promotion to Officer on May 14, 2022. That date belongs to the promotion receipt; it does not automatically date the later Pit Boss / Minister label."},
      {date:"2022",title:"Real life always first",text:"In Slice, Daya tells a member who is trying to arrange college around Raja dailies `dont stress. prioritize school, real life always first`. The line is direct value-in-action evidence rather than a motivational slogan detached from a situation."},
      {date:"August 18–27, 2022",title:"Recruiter becomes behavior",text:"Lobby catches Daya routing newcomers through Tour, Biodata, rules, and Whiskey; explicitly handing off the role step when another Officer is needed in one scene; recognizing a returner who has already read the rules; and later closing the loop with `role assigned!`. The useful pattern is follow-through without making procedure the protagonist."},
      {date:"2022–2023",title:"Gilli adds another song to Spotify",text:"Daya hears another Gilli track and says `u giving me more songs for my spotify`. The moment is small, but it gives the file ordinary taste/collection texture without inventing a music-director identity or relationship rank."},
      {date:"2023",title:"The communal doodle should become official",text:"Daya wants the finished communal doodle, and later the banana version, used as the Raja poster. That supports enthusiasm for moving a group-made object onto an official surface; it does not make Daya the artist of everybody else's marks."},
      {date:"2023",title:"Kiro identity hearing",text:"Daya correctly identifies HicUUOOOOGH as Kiro. Kiro answers `Who's kiro`; Daya eventually gives up on the records-management problem. Ten days later Kiro posts a Daya Wall exhibit, and Daya joins the Fat Wheeze reactions. Clerk → exhibit, case closed by nobody."},
      {date:"July 8, 2022",title:"A new generation, noun unresolved",text:"Daya posts an attachment followed by `the start of a new generation for UL` and `a new era`. Targeted archive searches did not safely resolve who the cohort was. The exact statement can survive; the missing noun stays missing."}
    ],
    characterNotes:[
      {title:"Follow-through beats ceremony",text:"Daya's best Lobby scenes are not just welcome messages. She states what is pending, uses the wait productively, remembers completed steps, hands off when needed, and closes the loop."},
      {title:"Systems are for people",text:"`real life always first` and the returner onboarding scene rhyme because Daya repeatedly refuses to let a process become more important than the person moving through it."},
      {title:"Identity clerk becomes evidence",text:"The Kiro sequence is useful because Daya can be the person correctly resolving somebody else's identity and then, days later, be the object on the Wall herself. Administrative distance lasts approximately ten days."},
      {title:"Communal work should travel",text:"Wanting the group doodles used as Raja posters shows a recurring instinct to move participation onto a visible official surface. Desire for publication is not creator credit."},
      {title:"The unresolved `new generation`",text:"Daya's own `new generation` / `new era` language is real, but the archive does not safely identify the cohort. Leaving that hole open is better than manufacturing a class roster."}
    ],
    roleNotes:[
      "Current Pit Boss / Minister.",
      "Recruiter appointment.",
      "Archive-confirmed promotion to Officer: May 14, 2022.",
      "The 2022 Officer promotion does not automatically date the later Pit Boss title."
    ],
    canonNotes:[
      "Daya's August 2022 Lobby scenes prove front-door work and role follow-through; they do not prove she authored UL's shared welcome packet or personally recruited every arrival.",
      "A scene where Daya waits for another Officer to finish a role step does not prove Daya generally lacked role-assignment permission.",
      "Deleted User remains pooled/unresolved and must not be named from adjacency.",
      "Wanting a communal doodle used as a poster does not make Daya the creator of all contributions.",
      "Kiro's Wall post is POSTED BY Kiro; posting/caption evidence does not automatically resolve image maker, capturer, or featured-person provenance.",
      "The July 2022 `new generation` cohort remains unresolved. Do not invent who Daya meant.",
      "Reaction participation does not establish friendship, intimacy, or rank.",
      "Export-time role arrays do not date later command labels."
    ]
  },

  ren: {
    dek:"Officer, self-described yapping gremlin, quote keeper, social-memory menace, practical caretaker, otter fan, and owner of a hard drive that has become its own evidentiary hazard.",
    overview: renNarrative.intro,
    history: [
      ...renNarrative.sections.map((section) => ({
        date: section.period ?? "",
        title: section.title,
        text: section.paragraphs.join(" ")
      })),
      ...(renNarrative.closing?.length ? [{
        date: "Overall",
        title: "What stays Ren",
        text: renNarrative.closing.join(" ")
      }] : [])
    ],
    characterNotes: [
      {title:"`your gremlin officer who yaps a lot`",text:"Ren's 2025 self-description is unusually useful because the archive independently supports both parts: a chatty, deliberately unserious public voice and years of concrete Officer work underneath it."},
      {title:"Selective memory, not magical memory",text:"Ren keeps favorite quotes, old names, screenshots, room routes and account mappings. She also admits she cannot find things in the enormous photo pile. The human imperfection is part of the character; do not turn her into an infallible database."},
      {title:"Care arrives with a verb",text:"Flood warnings, hydration, grades, sleep and emergency guidance repeatedly come as specific next actions, often followed by a joke or mock threat. This is supported public behavior, not a diagnosis or a personality claim derived from her hospital-interpreter job."},
      {title:"Old media becomes ammunition",text:"Red Hot Chili Peppers, a Jurassic Park CD, a surviving VCR and the 2026 portable-CD-player gag give Ren ordinary taste and household texture. The archive supports the objects and preferences; it does not support factual age claims from the jokes built around them."},
      {title:"The receipt keeper is also evidence",text:"Ren saves everybody else's nonsense while repeatedly becoming Wall material herself. The joke works because she generally escalates with the room rather than pretending the archive is something she administers from outside it."}
    ],
    roleNotes: [
      "Current command snapshot: Officer — Caporegime / Secretary.",
      "The archive does not safely date every appointment; export-time role arrays are not appointment chronology.",
      "Quote keeping, screenshot saving, identity repair and room routing are recurring behaviors, not formal Archivist / Records Officer / Concierge appointments."
    ],
    canonNotes: [
      "User-confirmed background: Ren is a woman from Mexico and works as a hospital interpreter. Do not infer temperament, motives, medical expertise, or private history from occupation or geography.",
      "Reny V / RV / RΣN are Ren identity forms in the archive; identity bridges must still be source-grounded when attaching a new account or display name.",
      "Generic Deleted User remains pooled unless a local identity join is proven.",
      "Age / child / fountain-of-youth jokes are peer comedy, not demographic evidence.",
      "Fake-family and voice-twin language are house jokes, not literal kinship, romance, or identity merger.",
      "Woosung's retrospective trust language supports Woosung's experience of Ren; it does not establish a universal confidante role or closeness ranking.",
      "The unresolved 2023 `priority straight` parent attachment and 2024 `PLS REN` attachment remain undescribed until visually resolved.",
      "Ren's 2026 Rummy announcement restores social account continuity; it does not mean Ren recovered the hacked account or performed cybersecurity work.",
      "Mugen's public credit to Snow + Ren for the Mafia anniversary surprise supports collaborative credit, not an invented split of asset authorship.",
      "Current Caporegime / Secretary status must not be projected backward onto 2020–2023 scenes."
    ]
  }
};
