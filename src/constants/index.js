import * as assets from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: assets.frontend,
  },
  {
    title: "UI/UX Design",
    icon: assets.ux,
  },
  {
    title: "Software Prototyping",
    icon: assets.prototyping,
  },
  {
    title: "Backend Developer",
    icon: assets.backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: assets.html,
  },
  // {
  //   name: 'CSS 3',
  //   icon: assets.css,
  // },
  {
    name: "SASS",
    icon: assets.sass,
  },
  {
    name: "Tailwind CSS",
    icon: assets.tailwind,
  },
  {
    name: "JavaScript",
    icon: assets.javascript,
  },
  {
    name: "TypeScript",
    icon: assets.typescript,
  },
  {
    name: "React JS",
    icon: assets.reactjs,
  },
  {
    name: "Next JS",
    icon: assets.nextjs,
  },
  {
    name: "Vue JS",
    icon: assets.vuejs,
  },
  {
    name: "Redux Toolkit",
    icon: assets.redux,
  },
  {
    name: "Node JS",
    icon: assets.nodejs,
  },
  {
    name: "Java",
    icon: assets.java,
  },
  {
    name: "Java Springboot",
    icon: assets.javaspring,
  },
  {
    name: "git",
    icon: assets.git,
  },
  {
    name: "Jira",
    icon: assets.jira,
  },
  {
    name: "Docker",
    icon: assets.docker,
  },
  {
    name: "Figma",
    icon: assets.figma,
  },
];

const experiences = [
  {
    title: "APPLICATIONS DEVELOPER",
    company_name: "TitanQIO",
    icon: assets.titanqio,
    iconBg: "#ffffff",
    date: "June 2025 - Present",
  },
  {
    title: "SENIOR SOFTWARE ENGINEER",
    company_name: "Digicode Technologies",
    icon: assets.digicode,
    iconBg: "#ffffff",
    date: "Feb 2025 - May 2025",
  },
  {
    title: "SENIOR FRONTEND DEVELOPER",
    company_name: "Nathan Digital",
    icon: assets.nathan,
    iconBg: "#555555",
    date: "Jan 2024 - Jan 2025",
  },
  {
    title: "LEAD SOFTWARE ENGINEER",
    company_name: "Ngamia Haulers Platform Ltd",
    icon: assets.ngamia,
    iconBg: "#ffffff",
    date: "May 2022 - Dec 2023",
  },
  {
    title: "WEB DEVELOPER",
    company_name: "Ngamia Haulers Platform Ltd",
    icon: assets.ngamia,
    iconBg: "#ffffff",
    date: "May 2021 - April 2022",
  },
];

const projects = [
  {
    id: "project-1",
    name: "TitanTime",
    description:
      "A time-tracking and timesheet product suite: admin and client web portals, a Node.js backend, and a Flutter mobile app shipped to Android and iOS.",
    image: assets.titantime,
    demo: "https://titan-time.vercel.app/",
  },
  {
    id: "project-2",
    name: "ZetuMart",
    description:
      "An e-commerce marketplace with a customer storefront and admin platform, built with Nuxt 3 and Tailwind CSS and deployed with Docker.",
    image: assets.zetumart,
    demo: "https://zetumart.com/",
  },
  {
    id: "project-3",
    name: "Kikoba",
    description:
      "A digital accounting platform for savings groups: member contributions, loans, and reporting, with M-Pesa payment integration.",
    image: assets.kikoba,
    demo: "https://kikoba-ke.netlify.app/",
  },
  {
    id: "project-4",
    name: "Node API Template",
    description:
      "An open-source Node.js/TypeScript API template: Express, MongoDB, JWT auth, request validation, Swagger docs, and production-grade security and logging out of the box.",
    image: assets.nodetemplate,
    repo: "https://github.com/Mokurumi/abcd-be",
  },
  {
    id: "project-5",
    name: "NeuroDev",
    description:
      "The corporate website for NeuroDev Technologies, a software consultancy, built with Next.js and Tailwind CSS.",
    image: assets.neurodev,
    demo: "https://www.neurodevtechnologies.com/",
  },
];

export { services, technologies, experiences, projects };
