import type { Project } from "../types/Project";
import CarRacingImg from "../images/projects/car-racing.webp";
import MusicFinderImg from "../images/projects/musicfinder.webp";
import GameFinderImg from "../images/projects/gamefinder copy.webp"


export const projectsData: Project[] = [
  {
    id: "car-racing",
    title: "DDQN CarRacing",
    category: "Reinforcement Learning",
    img: CarRacingImg,
  },
  {
    id: "musicfinder",
    title: "MusicFinder",
    category: "Full Stack / Spotify API",
    img: MusicFinderImg,
  },
  {
    id: "gamefinder",
    title: "GameFinder",
    category: "Full-Stack Development",
    img: GameFinderImg,
  },
];
