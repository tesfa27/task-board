import { icons } from "./taskData";

export const tasks = [
  {
    id: 1,
    name: "Task in progress",
    description: "Work on Challenge on devchallenges.io, learn Typescript",
    icon: "📋",
    status: "Completed"
  },
  {
    id: 2,
    name: "Morning Coffee",
    description: "Relax and prepare for the day ahead.",
    icon: icons[2], // ☕
    status: "Will Not Do"
  },
  {
    id: 3,
    name: "Daily Coding",
    description: "Practice React and Tailwind CSS for 2 hours.",
    icon: icons[0], // 👨🏻‍💻
    status: "In Progress"
  },
  {
    id: 4,
    name: "Gym Session",
    description: "Upper body workout and cardio.",
    icon: icons[3], // 🏋️‍♂️
    status: "To Do"
  }
];