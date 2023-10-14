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
    title: "The DataKirk",
    imgSrc: "project-imgs/datakirk.png",
    code: "https://github.com/lesalami/datakirk_frontend",
    projectLink: "https://community.thedatakirk.org.uk/auth",
    tech: ["React", "MUI", "RTK Query", "Typescript", "Django", "Python", "Vitest", "Vite", "RTL"],
    description:
      "A talent matching platform for data professionals in the UK",
    modalContent: (
      <>
        <p>
          Datakirk is a talent matching platform for data professionals in the UK.
          This frontend was built solely by me.
        </p>
        <p>
          The tech stack is based on top of React and Material ui,
          connected to a Python & Django backend, with data stored in Postgres,
          deployed on AWS.
        </p>

        <p>
         Users can sign up as either a company or a talent. Companies can search for talents based on skills, experience levels etc. Talents can also search for jobs posted by companies and apply various filters to the search. Talents can save the jobs they like to check out later.
        </p>
        
      </>
    ),
  },
  {
    title: "LegalFind",
    imgSrc: "project-imgs/legalfind.png",
    code: "https://github.com/lesalami/legalfind_web",
    projectLink: "https://trylegalfind.com/",
    tech: ["React", "Javascript", "MUI", "Jest", "Vite", "Vitest", "RTL"],
    description:
      "Legalfind is a smart search engine for legal matters in Ghana.",
    modalContent: (
      <>
        <p>
        Legalfind is a smart search engine for legal matters in Ghana.
        </p>
        <p>
          I work primarily on the frontend which is built with react and styled with material ui.
        </p>
        <p>
         The application features a search engine for searching for cases using advanced filters. Users can also create folders to store related legal cases. Users can also highlight and comment on legal cases
        </p>
      </>
    ),
  },
  {
    title: "Built",
    imgSrc: "project-imgs/built.png",
    code: "#",
    projectLink: "https://built.africa/",
    tech: ["React", "Next", "Vue", "Javascript", "Vuetify", "MUI"],
    description:
      "All-in-One Finance Platform for SMEs in Africa",
    modalContent: (
      <>
        <p>
        All-in-One Finance Platform for SMEs in Africa
        </p>
        <p>
          Unlimited Invoicing, payment, payroll and more for your business  
        </p>
        
      </>
    ),
  },
  {
    title: "DNA Analyzer",
    imgSrc: "project-imgs/dna.jpeg",
    code: "https://github.com/Echis65/mystery-organism",
    projectLink: "#",
    tech: ["Javascript"],
    description:
      "A program used for analyzing DNA strands of organisms",
    modalContent: (
      <>
        <p>
        A program used for analyzing DNA strands of organisms
        </p>
      </>
    ),
  },
  {
    title: "Film Finder",
    imgSrc: "project-imgs/finder.jpeg",
    code: "https://github.com/Echis65/Film-finder",
    projectLink: "https://echis65.github.io/",
    tech: ["Javascript"],
    description:
      "In this project, I’ll use my knowledge of HTTP requests and asynchronous JavaScript to create a movie discovery app that will recommend random movies by genre.",
    modalContent: (
      <>
        <p>
        In this project, I’ll use my knowledge of HTTP requests and asynchronous JavaScript to create a movie discovery app that will recommend random movies by genre.
        </p>
        <p>
        You’ll be able to choose from several genres, and like or dislike a movie to get another suggestion. I used The Movie Database API for this project
        </p>
      </>
    ),
  },
  {
    title: "Credit Card Checker",
    imgSrc: "project-imgs/credit.jpeg",
    code: "https://github.com/Echis65/Credit-card-checker",
    projectLink: "#",
    tech: ["Javascript"],
    description:
      "A program that checks the Validity of a credit card using the Luhn Algorithm",
    modalContent: (
      <>
        <p>
        A program that checks the Validity of a credit card using the Luhn Algorithm
        </p>
      </>
    ),
  },
];
