import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./TechStacks.module.css";

const TechStacks = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Proficiencies
      </h1>
      <div className={styles.borderBottom} />
      {/* <h2
				style={{ color: `${newTheme.para}` }}
				className={styles.heading}
			>
				Frontened
			</h2> */}
      <div className={styles.container}>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-html5-plain colored" />
          <span>HTML</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-css3-plain colored" />
          <span>CSS</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-javascript-plain colored" />
          <span>Javascript</span>
        </div>

		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-typescript-plain colored" />
          <span>Typescript</span>
        </div>

        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-react-original colored" />
          <span>React</span>
        </div>
      

        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#7248B6" }} className="devicon-redux-original" />
          <span>Redux</span>
        </div>

		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-jquery-plain colored' />
          <span>Juery</span>
        </div>

		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i className="devicon--plain colored" /> */}
          <span>NextJS</span>
        </div>


		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i className="devicon--plain colored" /> */}
          <span>Zustand</span>
        </div>

		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-materialui-plain colored' />
          <span>Material UI</span>
        </div>

		
		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-chakraui-plain colored' />
          <span>Chakra UI</span>
        </div>



		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-tailwind-plain colored' />
          <span>Tailwind CSS</span>
        </div>

		
		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-vite-plain colored' />
          <span>Vite</span>
        </div>

		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-json-plain colored' />
          <span>JSON</span>
        </div>


		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-npm-plain colored' />
          <span>NPM</span>
        </div>




        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#509941" }} className="devicon-nodejs-plain" />
          <span>Node</span>
        </div>

		


        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-express-original" />
          <span>Express</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-mongodb-plain colored" />
          <span>MongoDB</span>
        </div>


        
		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-java-plain colored' />
          <span>Java</span>
        </div>


		<div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className='devicon-python-plain colored' />
          <span>Python</span>
        </div>

        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i className='devicon-mongodb-plain colored' /> */}
          <span>Data Structures And Algorithms</span>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
