import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import Image from "next/image";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.headshotWrapper}>
        <Image
          src="/project-imgs/headshot-1.jpg"
          alt="Evans headshot"
          width={300}
          height={300}
          className={styles.headshot}
          priority
        />
      </div>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Node</span>
            <span className="chip">Express</span>
            <span className="chip">GCP</span>
            <span className="chip">Azure OpenAI</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Vue</span>
            <span className="chip">NextJS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Supabase</span>
            <span className="chip">Nuxt</span>
            <span className="chip">Redux</span>
            <span className="chip">RTK Query</span>
            <span className="chip">Tanstack Query</span>
            <span className="chip">Framer Motion</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Bun</span>
            <span className="chip">Go</span>
            <span className="chip">Prisma</span>
            <span className="chip">AnimeJs</span>
            <span className="chip">tRPC</span>
            <span className="chip">Drizzle</span>
            <span className="chip">Planetscale</span>
            <span className="chip">Keysely</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
