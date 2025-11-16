import type { ProjectDetail } from "../types/ProjectDetail";
import CarRacingImg from "../images/projects/car-racing.gif";
import MusicFinderImg from "../images/projects/musicfinder.webp";
import GameFinderImg from "../images/projects/gamefinder copy.webp"
export const projectsDetails: ProjectDetail[] = [
  // ----------------------
  // 1. DDQN CAR RACING
  // ----------------------
  {
    id: "car-racing",
    title: "DDQN Agent Reaching Superhuman Scores in CarRacing-v2",
    shortTitle: "DDQN on CarRacing",
    category: "Reinforcement Learning",
    img: CarRacingImg,
    repo: "CarRacing-DQN-CNN",
    date: "2025"
  },

  // ----------------------
  // 2. MUSICFINDER
  // ----------------------
  {
    id: "musicfinder",
    title: "MusicFinder — Spotify-Powered Music Discovery Platform",
    shortTitle: "MusicFinder",
    category: "Full Stack / Spotify API",
    img: MusicFinderImg,
    date: "2025",
    repo: "MusicFinder"
  },
  

  // ----------------------
  // 3. GAMEFINDER
  // ----------------------
  {
    id: "gamefinder",
    title: "GameFinder — Full Stack MERN + Game Discovery Engine",
    shortTitle: "GameFinder",
    category: "Full-Stack Development",
    img: GameFinderImg,
    date: "2024",
    repo: "GameFinder"
  },
];
