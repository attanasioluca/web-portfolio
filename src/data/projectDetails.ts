import type { ProjectDetail } from "../types/ProjectDetail";
import CarRacingImg from "../images/projects/car-racing.webp";
import MusicFinderImg from "../images/projects/musicfinder.webp";
import GameFinderImg from "../images/projects/gamefinder copy.webp"
export const projectsDetails: ProjectDetail[] = [
  // ----------------------
  // 1. DDQN CAR RACING
  // ----------------------
  {
    id: "car-racing",
    title: "DDQN Agent Reaching Superhuman Scores in CarRacing-v2",
    category: "Reinforcement Learning",
    img: CarRacingImg,
    repo: "CarRacing-DQN-CNN",
    date: "2025",
    sections: [
      {
        title: "Overview",
        body:
          "I built a Deep Double Q-Network (DDQN) agent capable of outperforming the average human score in the CarRacing-v2 Gymnasium environment. The goal was achieving stable control with high sample efficiency while avoiding the common pitfalls of DQN instability in continuous environments.",
      },
      {
        title: "Technical Approach",
        body:
          "The model uses a CNN-based feature extractor, a DDQN architecture, and prioritized replay. The environment observations were normalized and frame-stacked (4 frames). Training used Adam optimizer with a slowly updated target network. The reward function was reshaped to discourage off-track behavior and reward smooth steering.",
      },
      {
        title: "Results",
        body:
          "The agent consistently reached scores above 900+, surpassing typical human average (~600). It learned smooth cornering, momentum control, and corrective behavior in skid situations. Training stabilized after ~350k steps.",
      },
    ],
  },

  // ----------------------
  // 2. MUSICFINDER
  // ----------------------
  {
    id: "musicfinder",
    title: "MusicFinder — Spotify-Powered Music Discovery Platform",
    category: "Full Stack / Spotify API",
    img: MusicFinderImg,
    date: "2025",
    repo: "MusicFinder",
    sections: [
      {
        title: "Overview",
        body:
          "MusicFinder is a full-stack web application that integrates with the Spotify Web API to authenticate users, sync their listening data, and provide personalized music discovery. The system stores user activity in MongoDB and offers curated recommendations alongside search, sorting, and filtering features.",
      },
      {
        title: "Core Features",
        body:
          "• Spotify OAuth authentication with access/refresh token handling.\n" +
          "• Automatic syncing of saved tracks, top artists, top genres, and recently played songs.\n" +
          "• MongoDB persistence for user data, listening history, and derived genre statistics.\n" +
          "• Ability to search tracks, filter by category, and browse personalized recommendations.\n" +
          "• Clean React front-end with responsive UI powered by Chakra UI.\n" +
          "• Work-in-progress Socket.io instant-messaging feature for friend-to-friend music sharing.",
      },
      {
        title: "Technical Details",
        body:
          "Built with React + TypeScript on the client and Node.js + Express on the backend. The backend manages Spotify OAuth, token refresh cycles, and all API communication. User data and generated insights are stored in MongoDB using Mongoose. The architecture is designed for modular expansion, including future external recommendation engines once Spotify API limitations are reached.",
      },
      {
        title: "What I Learned",
        body:
          "Deepened expertise in OAuth2 flows, external API rate-limit handling, and full-stack data pipelines. Strengthened backend API design, state management in React, and real-world data modeling in MongoDB. Also explored building scalable real-time features through Socket.io integration.",
      },
    ],
  },
  

  // ----------------------
  // 3. GAMEFINDER
  // ----------------------
  {
    id: "gamefinder",
    title: "GameFinder — Full Stack MERN + Game Discovery Engine",
    category: "Full-Stack Development",
    img: GameFinderImg,
    date: "2024",
    repo: "GameFinder",
    sections: [
      {
        title: "Overview",
        body:
          "GameFinder is a full-stack MERN application that fetches and filters video games via external APIs. It includes authentication, search, reviews, and category browsing with a clean React TypeScript UI.",
      },
      {
        title: "Backend",
        body:
          "The backend (Express + Node) handles user accounts, secure JWT auth, reviews, custom recommendation endpoints, and MongoDB data modeling using Mongoose.",
      },
      {
        title: "Frontend",
        body:
          "Built in React + TypeScript using Chakra UI for UI components, the frontend supports dynamic filters, search debouncing, animated transitions, and responsive UI patterns.",
      },
    ],
  },
];
