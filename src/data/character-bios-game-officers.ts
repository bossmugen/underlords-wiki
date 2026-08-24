import { narrativeCharacterBios } from "./character-biographies-narrative";
import { ameNarrativeCharacterBios } from "./character-biographies-ame";
import { chibiterasuNarrativeCharacterBios } from "./character-biographies-chibiterasu";
import { yelikNarrativeCharacterBios } from "./character-biographies-yelik";
import { noetherNarrativeCharacterBios } from "./character-biographies-noether";
import { yassrNarrativeCharacterBios } from "./character-biographies-yassr";

// Game Officer narratives register into the shared fallback registry so the live
// character page receives the person-first biography before dossier/themed material.
Object.assign(
  narrativeCharacterBios,
  ameNarrativeCharacterBios,
  chibiterasuNarrativeCharacterBios,
  yelikNarrativeCharacterBios,
  noetherNarrativeCharacterBios,
  yassrNarrativeCharacterBios
);

const priorityGameOfficerNarratives = ["ame", "chibiterasu", "yelik", "noether", "yassr"] as const;
for (const id of priorityGameOfficerNarratives) {
  const narrative = narrativeCharacterBios[id];
  const wordCount = narrative
    ? [
        ...narrative.intro,
        ...narrative.sections.flatMap((section) => section.paragraphs),
        ...(narrative.closing ?? [])
      ].join(" ").split(/\s+/).filter(Boolean).length
    : 0;
  if (!narrative || wordCount < 900) {
    throw new Error(`Priority Game Officer ${id} lost the substantive person-first biography (${wordCount} words).`);
  }
}

export const gameOfficerCharacterBios = {
  ame: {
    dek:"Game Officer, Amexistir, and the recurring front-door case where UL stops asking the person to fit the form and starts making the form usable for the person.",
    overview:[
      "Ame / Amexistir is a current Game Officer. His clean surviving character file is unusually good at separating institutional fact from social texture: the rank is canon, while the person appears most clearly in repeated Lobby scenes where language and account procedure keep getting negotiated around him.",
      "In November 2022 Ame says he understands little English. Ren immediately switches the practical onboarding exchange into Spanish, and Ame answers the remaining age question with a joking self-description built around `tata` instead of a sterile form value. The historical age number stays backstage, and the wiki preserves `tata` without pretending one English gloss is canonical.",
      "The same stable account passes through the Bouncer again in 2023. By November, Anayss simply writes `Hola Ame! Bienvenido de vuelta!` — the bot sees another door event; the human in the room sees a return."
    ],
    history:[
      {date:"November 23, 2022",title:"The room switches languages",text:"Ame says he understands little English; Ren explains the intake process in Spanish. Ame answers the age field with a joking `tata` self-description. The scene supports accommodation and voice, not nationality or a closeness ranking; the historical age number is intentionally not republished here."},
      {date:"June 9, 2023",title:"Same account, same front door",text:"Ame is carded again, answers the requested support field tersely, then begins a follow-up with `Hola, ty` while identifying himself as Amexistir and naming Club Dragon. Ren again handles the practical packet in Spanish. The repeated welcome is not a second origin story."},
      {date:"November 17, 2023",title:"Welcome back beats welcome",text:"MEE6 produces another generic welcome. Anayss answers `Hola Ame! Bienvenido de vuelta!`, explicitly restoring the social meaning of the event as a return."}
    ],
    characterNotes:[
      {title:"`tata`, not a census category",text:"Ame's answer to a bureaucratic age field is the strongest early voice beat. Keep the Spanish word in context; do not turn a regional term or an old age field into a fake permanent identity label."},
      {title:"The Bouncer keeps forgetting the plot",text:"Repeated intake cards are useful because the humans around them keep supplying the continuity the software cannot."}
    ],
    roleNotes:["Current primary shelf: Game Officers.","Game Officer appointment date remains unresolved; do not derive it from export-time role arrays."],
    canonNotes:["Ame = Amexistir.","Spanish-language exchanges do not establish nationality, first language, or only language.","`Hola, ty` is one mixed-register intake response, not proof of a universal code-switching style or broad fluency claim.","Historical age fields are not current demographic facts and are intentionally withheld from the person-first biography.","Repeated Lobby welcomes do not prove departures or re-joins."]
  },

  chibiterasu: {
    dek:"Game Officer, Parterre Gardener, Chibiterasu/Chuutan/Chubi, and a smaller file whose strongest evidence is identity continuity rather than a personality invented from job titles.",
    overview:[
      "Chibiterasu is a current Game Officer with the specialist appointment Parterre Gardener. Chuutan, Chuu~tan, Chubi, Chuubi, and Chibi belong to the same character file rather than spawning an entire Chu cinematic universe.",
      "The clean archival bridge starts in March 2022 when the stable Chubi account answers Lobby intake with the in-game name `chibiterasu` and club Underlords. In March 2023 Mugen names `@Chubi` among the anniversary `Nitro Snipers`; in May 2024 the same stable account passes through the door again and answers as `Chuu~tan, Underlords`.",
      "Sye's immediate `chu chu` after the 2024 check-in supplies just enough human recognition to keep the scene from reading like anonymous paperwork. Historical age fields stay backstage, and the wiki refuses to invent a personality from one nickname, a Gardener title, or repeated Lobby cards."
    ],
    history:[
      {date:"March 9, 2022",title:"Chubi identifies Chibiterasu",text:"The stable Discord account answers the Bouncer with the in-game name Chibiterasu and Underlords club identity. The historical age field is intentionally withheld here. This is a clean identity receipt, not automatically a first-ever membership date."},
      {date:"March 31, 2023",title:"Nitro Sniper for the anniversary, not the shelf",text:"Mugen includes `@Chubi` in the anniversary `Nitro Snipers` roll call. The announcement proves participation and public recognition, but it does not identify Chubi's exact qualifying artifact and does not create a formal/current Sniper role."},
      {date:"May 13, 2024",title:"Chuu~tan comes through the door",text:"The same account gives `Chuu~tan, Underlords`; Sye follows with `chu chu`. The alias bridge gets stronger while the reason for the new Lobby cycle stays unresolved."}
    ],
    characterNotes:[
      {title:"One person, many Chus",text:"The alias pile is provenance, not extra cast members. The stable account and current canon keep Chibiterasu / Chuutan / Chuu~tan / Chubi / Chuubi / Chibi together."},
      {title:"Thin on purpose",text:"This is a real evidence gap. The page carries what the archive earns and refuses to manufacture a botanical personality from Parterre Gardener."}
    ],
    roleNotes:["Current primary shelf: Game Officers.","Parterre Gardener is a specialist appointment.","Appointment chronology remains unresolved."],
    canonNotes:["Repeated Lobby cards are not proof of leaving and rejoining.","Historical age fields are intentionally not republished as current demographic facts.","Sye's `chu chu` is recognition, not a closeness ranking.","The 2023 `Nitro Sniper` wording is an anniversary participation label, not formal/current Sniper shelf placement.","The Gardener title does not by itself establish hobbies, profession, or frequency of gardening." ]
  },

  yelik: {
    dek:"Game Officer, Parterre Gardener, and human push notification for Dragon Raja opportunities with coordinates, countdowns, and a recurring sense that everybody needs to move right now.",
    overview:[
      "Yelik is a current Game Officer and Parterre Gardener. The archive earns a much better character hook than simply calling Yelik `the gardener`: the stable account repeatedly finds short-lived game opportunities and converts them into instructions another person can use before the window disappears.",
      "The florist alerts include coordinates and expiration times. The committed dossier also preserves a run of locally attributed limited-time event notices across 2022 and into 2023. The useful pattern is not `likes flowers` or `likes pets`; it is where / how long / go now. Other UL members also post event alerts, so none of this becomes an exclusive office or personality monopoly.",
      "Mugen's May 2022 Wall line that Yelik spends more time in her garden than she does is funny on its own, and even more useful chronologically because it predates Yelik's surviving May 18 Lobby card. The person was already socially legible before the Bouncer tried to introduce Yelik."
    ],
    history:[
      {date:"May 12, 2022",title:"Already in Mugen's garden",text:"Mugen jokes that Yelik is spending more time in her garden than Mugen does. Six days later the Bouncer cards Yelik, proving why Lobby cannot be treated as a first-join ledger here."},
      {date:"June 26–27, 2022",title:"Florist radar",text:"Yelik posts exact florist locations with shrinking windows — twenty minutes for one, five for another. The information is shaped for immediate use."},
      {date:"2022–August 2023",title:"The disappearing opportunity",text:"The committed dossier preserves locally attributed limited-time event notices across more than a year. Because Anayss, Gilli and others also post similar alerts elsewhere, the wiki treats the behavior as shared house labor rather than assigning Yelik ownership of the category."},
      {date:"August 10, 2023",title:"The Siberian shark case",text:"Yelik describes spending three days trying to catch the last fish while already using the rod the game says is required. Funny, direct, and still one scene rather than a new lifelong fishing identity."}
    ],
    characterNotes:[
      {title:"Dragon Raja forgot push notifications",text:"Editorial shorthand for a recurring authored behavior: Yelik repeatedly relays expiring or newly available opportunities before they vanish."},
      {title:"Garden before paperwork",text:"The Mugen garden joke predates the surviving Lobby card, a clean reminder that social history can be older than account-intake procedure."}
    ],
    roleNotes:["Current primary shelf: Game Officers.","Parterre Gardener is a specialist appointment.","The alert run does not create a separate Event Director or Party Director role."],
    canonNotes:["Do not infer personality solely from the Gardener title.","`@Staff` identifies the audience of an alert, not appointment chronology.","Shared alert language across multiple UL members is not evidence of exclusive ownership or rank.","The Siberian shark scene remains a one-off unless later evidence makes fishing recur." ]
  },

  noether: {
    dek:"Game Officer, Wall taxonomist, dessert prosecutor, and the person whose mock scarcity investigation eventually develops an actual cake department.",
    overview:[
      "Noether is a current Game Officer and is not a current Sniper in the corrected roster. Her strongest surviving character period has very little to do with rank: it begins when Anayss throws an `Unsugar hami` premise onto the Wall and Noether keeps extending the fake economy after the opening joke should have died.",
      "By February 2022 the taxonomy has become dessert court. Noether accuses HamitteY of hoarding desserts, then later posts that she made strawberry ice cream because the desserts were not being shared. In July, Anayss calls Noether and Hami `so much material`; weeks later Anayss reports meeting Noether offline and receiving a cake Noether baked.",
      "That sequence earns the contradiction without requiring a fake `Baker` title: the prosecutor has a catering arm. Noether is funniest here because mock enforcement turns into provision."
    ],
    history:[
      {date:"October 28, 2021",title:"The clean Lobby identity",text:"Noether checks in through the Lobby. On December 23 the Bouncer cards the same person again and Anayss replies `wb ❤️`, making the second event a recognized return rather than a new origin. Historical age data from the old intake stays backstage."},
      {date:"November–December 2021",title:"Unsugar acquires a tax code",text:"Anayss launches `Unsugar hami`; Noether keeps the wording alive and expands it into `Unsugared snow`, `sugar daddy`, and `unsugar boiii` joke categories. None of those phrases are literal relationship claims."},
      {date:"February 3, 2022",title:"Dessert court supplies its own evidence",text:"Noether accuses Hami of not sharing desserts, then later says she made strawberry ice cream because he did not share. The 23m52s message interval is not treated as a cooking timer."},
      {date:"July 7–29, 2022",title:"The franchise gets peer recognition and then cake",text:"Anayss calls Noether + Hami `so much material`; later Slice records Anayss saying she met Noether and Noether baked a cake for her. Noether replies `A date with ana`. The meetup is real; romance is not inferred."}
    ],
    characterNotes:[
      {title:"The prosecutor has a catering arm",text:"Archive-earned contradiction: dessert scarcity accusations are followed by Noether introducing strawberry ice cream and, months later, a cake into the record."},
      {title:"Premise extender",text:"Noether's useful recurring mechanism is uptake and categorization. Another person can throw the first joke; Noether keeps finding subclauses for it."}
    ],
    roleNotes:["Current primary shelf: Game Officers.","Noether is not a current Sniper.","No baker/chef/caterer title is inferred from two dessert-making scenes."],
    canonNotes:["Sugar-economy language is scene-local joke language, not romance, finance, or family evidence.","`A date with ana` does not establish romance with Anayss.","Uninspected media is not visually described."]
  },

  yassr: {
    dek:"Game Officer, Sniperwolfxx, and late-game manual event radar who keeps routing things people can do now — then lets the bot take the countdown shift once the existing automation is pointed out.",
    overview:[
      "Yassr is a current Game Officer. Sniperwolfxx / `sniperr_wolfxx` belongs to the name trail, but a username containing `Sniper` does not move Yassr onto the current Sniper shelf.",
      "The strongest stable direct run currently comes from late 2024: Conquest in twenty-five minutes, Demo Club in an hour, Scourge can now be done as a five-person team. Each message has the same practical center — something is becoming actionable, so tell the room before the information goes stale.",
      "The best tiny character beat comes when Sye thanks Yassr and explains that Saber already auto-reminds Staff shortly before scheduled events. Yassr answers `Thank you!`. The archive does not need to diagnose a personality from two words; it can safely observe that the existing workflow is accepted and other useful game information is relayed later."
    ],
    history:[
      {date:"October 22–23, 2024",title:"Manual event radar",text:"The late stable account posts Conquest and Demo Club countdowns to Staff. Sye directly calls the account Yassr, providing the clean bridge for the username."},
      {date:"October 23, 2024",title:"Saber already has that shift",text:"Sye thanks Yassr, points out the automated ten-minute Staff reminder, and says manual pings are unnecessary. Yassr replies `Thank you!`; the archive shows a workflow handoff, not a territorial dispute."},
      {date:"November 21, 2024",title:"Scourge can take five now",text:"Yassr tells everyone they can now run Scourge as a five-person team and urges them to take advantage. The recurring function is opportunity relay, not merely calendar countdowns."}
    ],
    characterNotes:[
      {title:"Useful before prestigious",text:"The surviving run is all practical actionability: start time, remaining window, newly available team setup. No extra formal event title is needed."},
      {title:"The bot can have the timer",text:"Sye's Saber handoff works because the next Yassr scene shows the broader behavior continuing elsewhere. The recurring function was never ownership of one notification mechanism."}
    ],
    roleNotes:["Current primary shelf: Game Officers.","Sniperwolfxx is an alias, not evidence of current Sniper shelf placement.","No Event Director / Party Director appointment is inferred from reminder behavior."],
    canonNotes:["The late 2024 evidence does not backfill a 2020–2023 personality arc.","Sye's workflow note is not treated as conflict or reprimand.","Game Officer appointment chronology remains unresolved.","The current source set does not establish pronouns strongly enough for the wiki to guess them." ]
  }
} as const;