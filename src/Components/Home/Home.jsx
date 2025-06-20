import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import Tools from "../IndustyTools/Tools";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/Anup.png";
import { Button } from "../Button/Button";
import About from "../About/About";
import { projects } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import GitHub from "../Calender/calender";
import Experiences from "../Experiences/Experiences";

const Home = ({ scrollRef }) => {
  const [projectArray, setProjectArray] = useState(projects.slice(0, 4));
  const { newTheme } = React.useContext(ThemeContext);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(0);
  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleButton = () => {};

  console.log(offset);
  const handleShowMoreBtn = () => {
    if (projects.length === projectArray.length) {
      setProjectArray(projects.slice(0, 4));
      window.scrollTo(0, location);
    } else {
      setProjectArray(projects);
      setLocation(offset);
    }
  };

  return (
    <div ref={scrollRef} className={styles.suraj}>
      <SideIcons />
      <div
        id="home"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        <div
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{
            color: `${newTheme.para}`,
            transform: `translateX(-${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
        >
          <h1>
            <span>Hey👋, I'm </span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Anup Kamble.
            </div>
          </h1>
          <h1>
            <a href="https://git.io/typing-svg">
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Secular+One&weight=900&size=27&pause=1000&color=8993B1&width=435&lines=FULL-STACK+WEB+DEVELOPER;M+E+R+N"
                alt="Typing SVG"
              />
            </a>
          </h1>
          <div className={styles.btn}>
            <a
              href="https://drive.google.com/file/d/1u3c9WyUdNXdJWjsQ1fJ8HBZJBOPZFu1b/view"
              target="_blank"
              rel="noreferrer"
            >
              {/* resume link have to update above */}
              <Button
                text={
                  <span className={styles.resumeBtn}>
                    <span>Resume</span> <i className="fas fa-file-download"></i>
                  </span>
                }
                handleButton={handleButton}
              />
            </a>
          </div>
        </div>

        <div
          style={{
            transform: `translateX(${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
          className={styles.profileImage}
        >
          <img src={img1} alt="Profile pic" />
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experience}
      >
        <About />
      </div>

      <div id="techStacks" className={styles.techStacks}>
        <TechStacks />
      </div>

      <div id="techStacks" className={styles.techStacks}>
        <Tools />
      </div>

      <div
        id="experience"
        className={styles.experiences}
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          style={{ color: `${newTheme.para}` }}
        >
          <Experiences />
        </div>
      </div>

      <div>
        <GitHub />
      </div>

      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Few Things I've Build
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <Button
          text={
            projects.length !== projectArray.length ? "Show More" : "Show Less"
          }
          handleButton={handleShowMoreBtn}
        />
      </div>

      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
