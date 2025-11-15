import { useState, createContext, type ReactNode } from "react";
import { aboutMeData } from "../data/aboutMeData";

type AboutMeItem = {
  id: number;
  bio: string;
};

interface AboutMeContextType {
  aboutMe: AboutMeItem[];
  setAboutMe: React.Dispatch<React.SetStateAction<AboutMeItem[]>>;
}

export const AboutMeContext = createContext<AboutMeContextType>({
  aboutMe: [],
  setAboutMe: () => {},
});

export const AboutMeProvider = ({ children }: { children: ReactNode }) => {
  const [aboutMe, setAboutMe] = useState<AboutMeItem[]>(aboutMeData);

  return (
    <AboutMeContext.Provider value={{ aboutMe, setAboutMe }}>
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
