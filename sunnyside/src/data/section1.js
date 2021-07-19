import { v4 as uuidv4 } from "uuid";
import { transform, standout } from "../images/imageConfig";

export const section1 = [
	{
		id: uuidv4(),
		image: transform,
		title: "Transform your brand",
		desc: "We are a full service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
		button: "Learn More",
	},
	{
		id: uuidv4(),
		image: standout,
		title: "Stand our to the right audience",
		desc: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
		button: "Learn More",
	},
];
