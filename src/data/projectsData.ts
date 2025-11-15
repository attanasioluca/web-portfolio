import type { Project } from "../types/Project";
import CarRacingImg from "../images/projects/car-racing.webp";
import Ros2Img from "../images/projects/ros2-franka.webp";
import GameFinderImg from "../images/projects/gamefinder copy.webp"


export const projectsData: Project[] = [
  {
    id: "car-racing",
    title: "DDQN CarRacing Agent",
    category: "Reinforcement Learning",
    img: CarRacingImg,
  },
  {
    id: "ros2-arm",
    title: "Robot Arm Manipulation in ROS2",
    category: "Robotics / Control",
    img: Ros2Img,
  },
  {
    id: "gamefinder",
    title: "GameFinder Full-Stack App",
    category: "Full-Stack Development",
    img: GameFinderImg,
  },
];
