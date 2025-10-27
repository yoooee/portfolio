import { motion } from "framer-motion";
import { getYearsOfExperience } from "./utils";
import Photo from "../../assets/photo.jpeg";

import "./home.scss";

function Home() {
  const startDate = new Date("1999-08-01");
  const yearsOfExperience = getYearsOfExperience(startDate);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <motion.div
        className="home"
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        <h1>Welcome</h1>
        <article>
          <section>
            <p>
              My name is Josef Staroba and I am a software designer/developer
              with over {yearsOfExperience} years of professional experience.
              While I'm a jack of all trades, I find the most enjoyment in
              working with frontend technologies.
            </p>
            <p>
              On this site, you will find a small sampling of both my
              professional and personal work over the span of my career.
            </p>
          </section>
          <img src={Photo} alt="Josef Staroba" />
        </article>
      </motion.div>
      <motion.aside
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.025,
          delay: 0.05,
          type: "spring",
          stiffness: 100,
        }}
      >
        All code for this site is accessible on{" "}
        <a
          href="https://github.com/yoooee/portfolio"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>

        . <small>Copyright &copy; {currentYear}.</small>{" "}
      </motion.aside>
    </>
  );
}

export default Home;
