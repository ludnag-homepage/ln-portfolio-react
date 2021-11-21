import { Box } from "@chakra-ui/react";

type ProjectVariant = "open_source" | "commercial" | "hobby";

enum ETech {
  REACT = "react",
  TYPESCRIPT = "typescript"
}

type Project = {
  name: "";
  url: string;
  nameEmployer: string;
  date: Date;
  variant: ProjectVariant;
  techStack: ETech[];
};

const myProjects: Project[] = [
  {
    date: new Date(),
    name: "",
    nameEmployer: "",
    techStack: [],
    url: "",
    variant: "hobby"
  }
];

/* Allow to split between commercial and hobby projects. */
export const Projects = () => {
  return <Box>Projects!</Box>;
};
