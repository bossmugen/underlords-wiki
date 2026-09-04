import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { jasNarrativeCharacterBios } from "./character-biographies-jas";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

export const jas1426NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  jas: withSection(jasNarrativeCharacterBios.jas, {
    period: "Gilli / embarrassment court",
    title: "The defendant would like to object to the resolution",
    paragraphs: [
      "Jas does not react to public embarrassment by leaving the scene. He starts litigating it. In April 2021, after Gilli announces that Jas `literally died like 8 times to my 1` and helpfully adds `Everybody witnessed it`, Tae offers the mildest possible mercy: both of them were struggling. Jas immediately treats this as favorable witness testimony—`Thank you Tae`—until Tae clarifies `I aint defending you`. Jas's response collapses from courtroom confidence to `Delete that-` and `I-`. The joke works because he is still there, trying to win on procedure after the underlying facts have already become communal property.",
      "Gilli later brings a screenshot with `Caught in 4k`, and Jas once again attacks the exhibit instead of the relationship. First offense: `YOOO WHAT'S THIS LIGHT MOOODEE`. Once the work-related explanation lands, he accepts it—`LMAO okok`—and then immediately finds a new technical objection: `254x77px ain't 4K tho 😐`. Gilli supplies the receipt; Jas cross-examines the presentation. It is a very comfortable roast lane. He does not need Gilli to stop filing him. He apparently just needs the prosecution to use accurate terminology.",
      "The contradiction shows up when he is genuinely stuck. In an older game-help scene Jas does not perform a defense at all: `Help`, `Please`, `I'm stuck`. Snow asks what is wrong and the bit stays practical. That difference matters. Jas can become theatrically argumentative when the problem is embarrassment, but actual need gets stripped down to the request. He is not too proud to ask for help; he is simply much more interested in appellate procedure when Gilli has already put his dignity on the projector."
    ],
  }),
};
