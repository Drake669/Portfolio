import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi, I’m Evans. I’m a software engineer from Accra, Ghana with a
              strong focus on fullstack development, specializing in frontend
              technologies like React, Vue, and NextJS, while also working with
              backend tools such as Node.js, Express, and Golang.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work as a Fullstack Developer at Kwame AI, where I
              collaborate with AI and data engineers to build tools for legal
              professionals and students. My work includes creating a drafting
              feature for legal documents, implementing real-time AI streaming,
              and developing a WhatsApp-integrated bot that enables students to
              prepare for exams directly from their phones.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I enjoy building personal projects such as a Go
              interpreter and backend systems, while also spending time
              configuring Neovim (yes, I’m that guy who loves reading
              documentation for new plugins).
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I’m seeking new opportunities where I can merge my love for
              building software with my curiosity for learning new technologies.
              If you have an opening that sounds like a good fit, let’s connect.
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
