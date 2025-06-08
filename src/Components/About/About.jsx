import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/AnupKamble/PORTFOLIO/blob/master/public/aboutme-unscreen.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
        {/* <span style={{ color: `#00a0a0` }}>
          
        Hello!
        </span> */}
        A results-driven <b>MERN Full Stack Developer</b> with 2 years of experience in MERN full-stack web development. Proficient in <strong>JavaScript, TypeScript, ES6, React.js, Next.js, jQuery, Node.js, Express.js, MongoDB, PostgreSQL and MySQL</strong> with expertise in REST API development, authentication <b>(JWT, Passport.js)</b> and state management <b>(Redux (RTK), Zustand)</b>. Experienced in UI frameworks like <b>Tailwind CSS, Bootstrap, Shadcn UI, MUI and chakra UI</b> for responsive web design. <br /> <br />

Proficient in <b>AWS-EC2, Docker, Git, GitHub, Postman, Vercel, Netlify, Firebase, and Heroku</b> for development, testing, and deployment. Strong understanding of Agile methodologies, leveraging Jira and Confluence for efficient project management. Experienced in UI/UX design tools such as <b>Figma, Adobe Photoshop, Canva, and Google Web Designer (GWD)</b>. <br /> <br />

Experienced in leveraging AI-driven automation through Generative AI tools like Cursor AI, OpenAI (ChatGPT) and Gemini to streamline and enhance digital workflows. Passionate about building scalable web applications, optimizing digital content strategies, and driving seamless collaboration across teams. 🚀 
          <span style={{ color: `#00a0a0` }}>
          
            &nbsp; looking for an opportunity as a full stack web developer.
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
