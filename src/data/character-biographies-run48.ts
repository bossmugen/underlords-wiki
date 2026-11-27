import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run43NarrativeCharacterBios } from "./character-biographies-run43";

function beforeSection(base: CharacterNarrative, beforeTitle: string, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title === beforeTitle);
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index)],
  };
}

const mugenWithWallFavorite = beforeSection(run43NarrativeCharacterBios.mugen, "Overall character", {
  period: "May 2021",
  title: "The evidence clerk apparently had favorites",
  paragraphs: [
    "The Wall had already trained Mugen to rank receipts like a deranged little film festival. Elsewhere she uses direct labels such as `My favorites tonight` and `Tonight's personal favorite`; a May 2021 exchange gives one unusually concrete likely example. Korea announces `wait til i find the pineapple buttplug ss`. Thirty-four seconds later Mugen answers `Owo my favee`. Ren and Queen Shimoko later hard-reply Korea's exact screenshot-hunt message while remembering and reacting to the same incident.",
    "Mugen's line is not attached to Korea's message with a formal Discord Reply pointer, so the screenshot referent remains high-confidence contextual inference rather than a hard reply edge. But the local scene is unusually clean: one person names the old screenshot, Mugen recognizes something as `my favee` almost immediately, and two other people explicitly return to that exact parent as shared memory. Under the archive's normal human-reading standard, the pineapple-buttplug screenshot or incident was probably one of Mugs' remembered Wall favorites.",
    "The noun inside the screenshot hunt stays exactly where it belongs: inside a joke receipt. Nothing here says anything about Mugen's sex life, object ownership, use, desire, or sexual preference. What it says about Mugen is much safer and much more on brand. The woman preserving the evidence was not neutral about the evidence. Apparently she had rankings, remembered the classics, and could recognize a favorite before Korea had even finished digging the exhibit back out of storage."
  ],
});

const mugenWithThanksgiving = beforeSection(mugenWithWallFavorite, "Overall character", {
  period: "November 24, 2022",
  title: "She thinks gratitude that stays in your head is a gift you forgot to hand over",
  paragraphs: [
    "Mugen's Thanksgiving announcement is one of the cleanest receipts for what leadership looks like when she is trying very hard to be sincere and apparently still refuses to sound like anybody's president. She opens with food and hydration, then explains why the message exists at all: unexpressed thankfulness is like buying somebody a gift and keeping it instead of giving it to them. So she publicly says the thing. Staff, Strippers, Bartenders, Bouncers, Platelets, Tumbleweed family `past and present`, VIP visitors, Officers — each group gets thanked for a different way of being part of the house.",
    "The distinctions matter because she does not flatten belonging into membership. VIPs get told, explicitly, `You may not be a member but we feel your love through your nightly visits`. Officers get a separate thank-you for `tireless and constant care`, followed by the unusually direct line `Officer work goes mostly unrecognized, but I see your efforts`. That is Boss behavior without the résumé language: she is naming labor that is easy to disappear into the background and telling the people doing it that somebody noticed. Care here is not only a vibe floating around the server. Sometimes it is the person in charge saying the invisible work out loud.",
    "And then, because apparently sincerity is only legally admissible if UL can contaminate it, the same announcement remembers Covid companionship through Alabama jokes, kidnapped corpses, eating newbies, spelling crimes, booty-shaking and the rest of the house's own debris. Mugen can write `I love you all` and sign the exact same message `Your resident plutonian dumdum 👽`. The contradiction is the point. She does not have a solemn leadership voice that replaces the idiot one when the emotion becomes real. The idiot voice is one of the ways the emotion stays recognizably hers."
  ],
});

const mugenWithDoorway = beforeSection(mugenWithThanksgiving, "Overall character", {
  period: "December 2020 onward",
  title: "The front door does not make you a stranger",
  paragraphs: [
    "Mugen can do access-control paperwork without emotionally resetting the person in front of her. When radiance comes through the door in December 2020, Mugen's first move is an enormous `HIII`; the practical question is only which server UnderOath is on. Setup gets handled, the room map gets handed over, and radiance is invited straight into the Mafia game already in progress. The gate is real. So is the feeling that the person on the other side is already socially legible.",
    "That habit makes her later Thanksgiving line about VIP visitors feel less like ceremonial inclusivity and more like a rule Mugen was already living: `You may not be a member but we feel your love through your nightly visits`. Formal category and felt belonging can coexist without one cancelling the other. Mugs is perfectly capable of caring who has what access while also refusing to behave as though permissions are the entirety of the relationship.",
    "It is one of her better leadership contradictions. She likes systems. She also knows a role assignment is not a personality transplant. Somebody can need the front-desk treatment and still get greeted like somebody expected, then immediately get dragged toward whatever stupid thing the house is doing that night."
  ],
});

const mugenWithNames = beforeSection(mugenWithDoorway, "Overall character", {
  title: "Names get soft around Mugs",
  paragraphs: [
    "Familiarity around Mugen has a habit of deforming names. Dean becomes `deansprout`; Nelph becomes `NELPHIE`; Aeshleen and Mugen mutually participate in `aesh van gogb`; Cookie gets clipped into `cooks`; Cele gets `celery`; Qin-Mu can walk through the doorway and receive `Welcome Yo`. None of these needs to become somebody's official alias to matter. They are little verbal fingerprints: once Mugs is comfortable, names stop behaving like fixed property and start behaving like soft clay.",
    "The important part is reciprocity. Aeshleen plays inside the Van Gogh mutation instead of merely receiving it, while other shortened or warped names sit inside otherwise ordinary greetings. The effect is less *Mugen bestows titles* than *language gets looser when the relationship does*. Sometimes the result is affectionate. Sometimes it is culinary. Sometimes the person is apparently a vegetable now. The house survives.",
    "Her own dignity gets the same treatment. Snow once created a recurring Saber event called `Spank Mugs Booty`, and later maintainers kept the object alive. That is a very efficient reminder that Boss status did not produce a no-roasting perimeter. Mugen could be the person building systems and also the named target of one somebody else turned into durable infrastructure."
  ],
});

export const run48NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: mugenWithNames,
};

export { run49NarrativeCharacterBios } from "./character-biographies-run49";
export { run50NarrativeCharacterBios } from "./character-biographies-run50";
export { run55NarrativeCharacterBios } from "./character-biographies-run55";
