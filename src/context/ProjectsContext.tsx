import { createContext, useState } from "react";
import { projectsData } from "../data/projectsData";
import type { Project } from "../types/Project";

interface ProjectsContextValue {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export const ProjectsContext = createContext<ProjectsContextValue>({
  projects: [],
  setProjects: () => {},
});

export const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(projectsData);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
