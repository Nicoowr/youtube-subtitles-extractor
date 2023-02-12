import {type Cue} from "./types";
import {type Dependencies} from "../dependencies/buildDependencies";

// TODO: here the domain is coupled to VTT format. Should I make the conversion in the API ?
export const convertVttInputToCues = ({parseVttInput}: Dependencies) => (
  input: string,
): Cue[] => {
  const cues = parseVttInput(input);

  const cleanCues = cues.map(cue => ({...cue, text: cue.text.replace(/\n/g, " ")}))

  return [{start: 0, text: cleanCues.map(cue => cue.text).join(" ")}]

};
