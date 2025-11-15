import type { ProjectDetail } from "../types/ProjectDetail";
import CarRacingImg from "../images/projects/car-racing.webp";
import Ros2Img from "../images/projects/ros2-franka.webp";
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
    date: "2024",
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
  // 2. ROS2 ROBOT ARM
  // ----------------------
  {
    id: "ros2-arm",
    title: "Programming and Controlling a Virtual Franka Emika Arm in ROS2 + MoveIt2",
    category: "Robotics / Motion Planning",
    img: Ros2Img,
    date: "2024",
    sections: [
      {
        title: "Overview",
        body:
          "I developed and controlled a virtualized Franka Emika robotic arm in Gazebo using ROS2 Humble and MoveIt2. The project included kinematics, planning, grasping, and executing trajectories for pick-and-place tasks.",
      },
      {
        title: "Technical Details",
        body:
          "Implemented motion planning pipelines using OMPL, configured joint limits, added collision objects, and integrated MoveIt's Planning Scene. Also configured inverse kinematics, joint controllers, and executed trajectories in Gazebo using FollowJointTrajectory.",
      },
      {
        title: "What I Learned",
        body:
          "This project solidified understanding of modern robotic middleware, TF transforms, controllers, URDF/XACRO modeling, and full motion-planning stacks. It’s a strong demonstration of robotics engineering + software development.",
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
