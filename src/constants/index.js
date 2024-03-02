import * as assets from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: assets.frontend,
  },
  {
    title: 'UI/UX Design',
    icon: assets.ux,
  },
  {
    title: 'Software Prototyping',
    icon: assets.prototyping,
  },
  {
    title: 'Backend Developer',
    icon: assets.backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: assets.html,
  },
  // {
  //   name: 'CSS 3',
  //   icon: assets.css,
  // },
  {
    name: 'SASS',
    icon: assets.sass,
  },
  {
    name: 'Tailwind CSS',
    icon: assets.tailwind,
  },
  {
    name: 'JavaScript',
    icon: assets.javascript,
  },
  {
    name: 'TypeScript',
    icon: assets.typescript,
  },
  {
    name: 'React JS',
    icon: assets.reactjs,
  },
  {
    name: 'Next JS',
    icon: assets.nextjs,
  },
  {
    name: 'Vue JS',
    icon: assets.vuejs,
  },
  {
    name: 'Redux Toolkit',
    icon: assets.redux,
  },
  {
    name: 'Node JS',
    icon: assets.nodejs,
  },
  {
    name: 'Java',
    icon: assets.java,
  },
  {
    name: 'Java Springboot',
    icon: assets.javaspring,
  },
  {
    name: 'git',
    icon: assets.git,
  },
  {
    name: 'Jira',
    icon: assets.jira,
  },
  {
    name: 'Docker',
    icon: assets.docker,
  },
  {
    name: 'Figma',
    icon: assets.figma,
  },
];

const experiences = [
  {
    title: 'FRONTEND ASSOCIATE',
    company_name: 'Nathan Digital',
    icon: assets.nathan,
    iconBg: '#555555',
    date: 'Jan 2024 - Present',
  },
  {
    title: 'IT CONSULTANT',
    company_name: 'CVstudio Africa',
    icon: assets.cvstudiologo,
    iconBg: '#ffffff',
    date: 'Aug 2023 - Dec 2023',
  },
  {
    title: 'LEAD SOFTWARE ENGINEER',
    company_name: 'Ngamia Haulers Platform Ltd',
    icon: assets.ngamia,
    iconBg: '#ffffff',
    date: 'May 2022 - Dec 2023',
  },
  {
    title: 'WEB DEVELOPER',
    company_name: 'Ngamia Haulers Platform Ltd',
    icon: assets.ngamia,
    iconBg: '#ffffff',
    date: 'June 2021 - April 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Marquee Africa',
    description: 'An online advertising platform for African businesses.',
    image: assets.marquee,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://marquee.africa/',
  },
  {
    id: 'project-2',
    name: 'CVstudio Africa',
    description: 'A job site to connect employers with job seekers.',
    image: assets.cvstudio,
    demo: 'https://www.cvstudio.africa/',
  },
  {
    id: 'project-3',
    name: 'P-Smart',
    description:
      'An administartive dashboard for oil marketers to manage their business.',
    image: assets.psmart,
    demo: 'https://p-smart.africa/',
  },
];

export { services, technologies, experiences, projects };
