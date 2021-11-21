/* How to create tagging system for site? */

type ProjectVariant = "open_source" | "commercial" | "hobby";

enum ETech {
  REACT = "react",
  TYPESCRIPT = "typescript",
  FIREBASE = "firebase"
}

export type Project = {
  date: Date;
  description: string[];
  name: string;
  nameEmployer: string;
  techStack: ETech[];
  url: string;
  variant: ProjectVariant;
};

/* Include article and description as well? */
export const myProjects: Project[] = [
  {
    date: new Date(),
    description: [""],
    name: "iMAL German",
    nameEmployer: "iMAL AS",
    techStack: [],
    url: "https://www.imalabc.de",
    variant: "commercial"
  }
];
