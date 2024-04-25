import { TagHintColor } from "./enums";
import { skill } from "./types";

export const frontend: skill[] = [
  {
    name: "React",
  },
  {
    name: "Vite",
  },
  {
    name: "NextJS",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "SCSS",
  },
  {
    name: "Redux",
  },
  {
    name: "Tauri",
  },
  {
    name: "HTML5",
  },
  {
    name: "CSS3",
  },
];

export const backend: skill[] = [
  {
    name: "NestJS",
  },
  {
    name: "Rocket",
    color: TagHintColor.YELLOW,
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "SQL",
  },
  {
    name: "MySQL",
  },
  {
    name: "MongoDB",
    color: TagHintColor.YELLOW,
  },
  {
    name: "Socket.IO",
  },
  {
    name: "Redis",
  },
];

export const devops: skill[] = [
  {
    name: "Docker",
  },
  {
    name: "Docker-compose",
  },
  {
    name: "Portainer",
  },
  {
    name: "Linux",
  },
  {
    name: "Nginx",
  },
  {
    name: "GitOps",
  },
];

export const launguages: skill[] = [
  {
    name: "TypeScript",
  },
  {
    name: "JavaScript",
  },
  {
    name: "Rust",
  },
  {
    name: "C#",
    color: TagHintColor.YELLOW,
  },
  {
    name: "C++",
    color: TagHintColor.YELLOW,
  },
  {
    name: "Java",
    color: TagHintColor.YELLOW,
  },
];

export const educations: skill[] = [
  {
    name: "Информационные системы (по отраслям)",
    color: TagHintColor.YELLOW,
  },
  {
    name: "Информационные системы и программирование",
    color: TagHintColor.YELLOW,
  },
];
