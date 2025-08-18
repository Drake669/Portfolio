import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Eskwai",
    imgSrc: "project-imgs/eskwai.png",
    code: "",
    projectLink: "https://eskwai.kwame.ai",
    tech: [
      "NextJS",
      "Tailwind",
      "Tanstack Query",
      "Typescript",
      "NodeJs",
      "Express",
      "MongoDB",
      "Playwright",
      "Jest",
      "GCP",
      "Azure OpenAI",
    ],
    description:
      "A trustworthy legal AI assistant for Lawyers in Ghana and the UK",
    modalContent: (
      <>
        <p>
          Kwame AI is an AI-powered platform designed for legal professionals
          and students. I worked across the fullstack, contributing to both the
          frontend and backend development.
        </p>
        <p>
          The tech stack is built on the MERN stack and deployed on GCP,
          ensuring scalability and reliability.
        </p>
        <p>
          Users can ask legal questions and receive precise answers backed by
          inline citations and references to actual cases and
          legislation—eliminating the issue of AI hallucinations.
        </p>
      </>
    ),
  },
  {
    title: "Adesua",
    imgSrc: "project-imgs/adesua.png",
    code: "",
    projectLink: "https://adesua.kwame.ai",
    tech: ["NodeJs", "Express", "MongoDB", "Azure OpenAI", "Jest"],
    description:
      "A WhatsApp chatbot that helps students learn and prepare for exams",
    modalContent: (
      <>
        <p>
          Adesua is a WhatsApp-integrated chatbot designed to help students with
          learning and exam preparation.
        </p>
        <p>
          The bot was built using Express, Node.js, MongoDB, and Azure OpenAI.
        </p>
        <p>
          Students can ask Integrated Science questions and receive instant
          answers with reliable explanations. They can also take both timed and
          untimed quizzes directly from their phones, making learning accessible
          and interactive anytime and anywhere.
        </p>
      </>
    ),
  },
  {
    title: "The DataKirk",
    imgSrc: "project-imgs/datakirk.png",
    code: "",
    projectLink: "https://community.thedatakirk.org.uk/auth",
    tech: [
      "React",
      "MUI",
      "RTK Query",
      "Typescript",
      "Django",
      "Python",
      "Vitest",
      "Vite",
      "RTL",
    ],
    description: "A talent matching platform for data professionals in the UK",
    modalContent: (
      <>
        <p>
          Datakirk is a talent matching platform for data professionals in the
          UK. This frontend was built solely by me.
        </p>
        <p>
          The tech stack is based on top of React and Material ui, connected to
          a Python & Django backend, with data stored in Postgres, deployed on
          AWS.
        </p>

        <p>
          Users can sign up as either a company or a talent. Companies can
          search for talents based on skills, experience levels etc. Talents can
          also search for jobs posted by companies and apply various filters to
          the search. Talents can save the jobs they like to check out later.
        </p>
      </>
    ),
  },
  {
    title: "LegalFind",
    imgSrc: "project-imgs/legalfind.png",
    code: "",
    projectLink: "https://trylegalfind.com/",
    tech: ["React", "Javascript", "MUI", "Jest", "Vite", "Vitest", "RTL"],
    description:
      "Legalfind is a smart search engine for legal matters in Ghana.",
    modalContent: (
      <>
        <p>Legalfind is a smart search engine for legal matters in Ghana.</p>
        <p>
          I worked primarily on the frontend which is built with react and
          styled with material ui.
        </p>
        <p>
          The application features a search engine for searching for cases using
          advanced filters. Users can also create folders to store related legal
          cases. Users can also highlight and comment on legal cases
        </p>
      </>
    ),
  },
  {
    title: "Built",
    imgSrc: "project-imgs/built.png",
    code: "",
    projectLink: "https://built.africa/",
    tech: ["React", "NextJS", "Vue", "Javascript", "Vuetify", "MUI"],
    description: "All-in-One Finance Platform for SMEs in Africa",
    modalContent: (
      <>
        <p>All-in-One Finance Platform for SMEs in Africa</p>
        <p>Unlimited Invoicing, payment, payroll and more for your business</p>
      </>
    ),
  },
];
