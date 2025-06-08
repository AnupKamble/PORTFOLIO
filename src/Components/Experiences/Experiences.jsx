import React, { useContext } from "react";
// import styles from "./Experiences.module.css";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from './Experiences.module.css';

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className="ab">
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Experience
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div className={styles.position}>
          Software Engineer <a href=""> Hogarth Studios India(WPP), Gurugram</a>
        </div>
        <div className={styles.date}>April 2023 - Current</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilites </h3>
          </legend>
          <ul>
            <li>
            <b>Component Library Integration:</b> Integrated reusable UI components using Chakra UI and Bootstrap to maintain design consistency and accelerate development cycles.

            </li>
            <li>
           <b>Microservices Refactoring:</b> Modularized key backend services within the MERN stack, improving scalability and maintainability across distributed components. 

            </li>
            <li>
           <b>Role-Based Dashboards:</b> Engineered custom admin/user dashboards with role-based access control, 
            streamlining data visibility and management.
            </li>
            <li>
           <b> Database Optimization:</b> Refactored MongoDB queries and introduced indexing for high-traffic endpoints, reducing query response time by 40%.
            </li>
            <li>
            <b>Token-Based Auth System:</b> Built secure authentication flows using JWT and refresh tokens, including token
            expiration handling and protected route mechanisms.
            </li>
            <li>
            <b>Real-Time Activity Logs:</b> Developed a logging system for tracking user actions and backend operations, 
aiding in debugging and compliance monitoring.
            </li>

            <li>
            <b>User Feedback Integration:</b> Collected and analysed user feedback to drive iterative updates, improving 
UI/UX and increasing retention rates.
            </li>

            <li>
            <b>3rd-Party API Integrations:</b> Seamlessly integrated services like Plivo for call, Rook connection for smart 
            watches and SendGrid for transactional emails.
            </li>

            <li>
           <b>Unit and Integration Testing:</b> Wrote comprehensive test suites using Jest and Super test, achieving 85% code
            coverage across backend logic.
            </li>

            <li>
            <b>API Versioning and Documentation:</b> Introduced versioned APIs with Postman documentation, supporting 
            backward compatibility and easing onboarding for new developers.
            </li>

            <li>
            <b>User Feedback Integration:</b> Collected and analysed user feedback to drive iterative updates, improving 
            UI/UX and increasing retention rates. 
            </li>
          
          </ul>
        </fieldset>
      </div>

      <br />

      
    </div>
  );
};

export default Experiences;