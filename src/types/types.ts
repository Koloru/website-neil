import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface library {
	name: string;
	icon: ReactNode;
	link: string;
}

export interface tech {
	name: string;
	icon: ReactNode;
	libraries: library[];
}

export interface company {
	name: string;
	location: string;
	title: string;
	period: string;
	tasks: string[];
}
