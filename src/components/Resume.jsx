import React from "react";
// import resumeFile from "../documents/KAMEL_HTIRA_CV.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2024 - 2026",
      title: "Master’s degree in Computer Science for Software and Service Architecture",
      place: "Eötvös Loránd University (ELTE)",
      desc: "I am honored to have been awarded the prestigious Stipendium Hungaricum scholarship, which has allowed me to pursue a Master’s degree in Computer Science for Software and Service Architecture at Eötvös Loránd University (ELTE), one of Hungary's leading institutions.",
    },
    {
      yearRange: "2023 - 2020",
      title: "Bachelor's Degree in Multimedia Computing",
      place: "Higher Institute of Arts and Multimedia Manouba (ISAMM)",
      desc: "Bachelor's Degree in Multimedia Computing with excellent honors, specializing in data structures, web development, and multimedia design.",
    },
    {
      yearRange: "2019 - 2020",
      title: "Baccalaureate Degree in computer science",
      place: "Hight School Hamida Bakir",
      desc: "I attended Haamida Bakir High School, specializing in computer science.",
    }
  ];

  const experienceDetails = [
    {
      yearRange: "10/2023 - 9/2024",
      title: "Backend Engineer",
      place: "Medianet",
      desc: "In my full-time role at the consulting company Medianet, I work on developing and maintaining microservices and other gateway solutions. My responsibilities include designing and implementing scalable, high-performance applications, ensuring robust security measures, and integrating various technologies to enhance system efficiency and reliability.",
    },
    {
      yearRange: "4/2023 - 9/2023",
      title: "Java Backend Developer Part-time",
      place: "E-Tafakna Legal",
      desc: "I worked with E-tafakna on an electronic signature solution for users to sign and generate contracts using nodejs and spring boot.",
    },
    {
      yearRange: "Summer 2023",
      title: "Software Engineer Intern",
      place: "Medianet",
      desc: `During my internship with Medianet, I contributed to a desktop and mobile application designed to streamline patient management and online appointment scheduling for doctors. The intuitive admin dashboard allows for efficient management of patient data and appointments, ensuring a user-friendly experience for both healthcare providers and patients.`,
    },
    {
      yearRange: "Summer 2022",
      title: "Full Stack Web Developer Intern",
      place: "Opuslab",
      desc: `During my internship with Opuslab, I contributed to a desktop and mobile application designed to the HR manage students and teachers efficiently.`,
    },
  ];

  const skills = {
    programmingLanguages: [
      { name: "Java", percent: 0 },
      { name: "JavaScript", percent: 0 },
      { name: "TypeScript", percent: 0 },
      { name: "Python", percent: 0 },
      { name: "Ruby", percent: 0 },
      { name: "C++", percent: 0 },
      { name: "Dart", percent: 0 },
      { name: "SQL", percent: 0 },
      { name: "Rust", percent: 0 },
      { name: "Go", percent: 0 },
    ],
    frameworksTechnologies: [
      { name: "Spring Boot", percent: 0 },
      { name: "React JS", percent: 0 },
      { name: "Next.js", percent: 0 },
      { name: "Node.js", percent: 0 },
      { name: "Ruby on Rails", percent: 0 },
      { name: "Angular", percent: 0 },
      { name: "Tauri", percent: 0 },
      { name: "Jest", percent: 0 },
      { name: "Flutter", percent: 0 },
      { name: "Pandas", percent: 0 },
      { name: "Numpy", percent: 0 },
      { name: "Torch", percent: 0 },
      { name: "KrakenD Gateway", percent: 0 },
      { name: "WSO2 Gateway", percent: 0 },
      { name: "Agile Scrum", percent: 0 },
    ],
    databases: [
      { name: "PostgreSQL", percent: 0 },
      { name: "MySQL", percent: 0 },
      { name: "MongoDB", percent: 0 },
      { name: "Redis", percent: 0 },
      { name: "MariaDB", percent: 0 },
      { name: "Oracle", percent: 0 },
    ],
    toolsPlatforms: [
      { name: "Git", percent: 0 },
      { name: "Docker", percent: 0 },
      { name: "VS Code", percent: 0 },
      { name: "Eclipse", percent: 0 },
      { name: "IntelliJ", percent: 0 },
      { name: "Android Studio", percent: 0 },
      { name: "MATLAB", percent: 0 },
      { name: "Visual Studio", percent: 0 },
    ],
  };

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>

        <div className="row gx-4 gy-2  justify-content-center">
          {/* Programming Languages */}
          <h5 className={darkTheme ? "text-light" : "text-dark"}>
            Programming Languages
          </h5>
          <div className="d-flex flex-wrap">
            {skills.programmingLanguages.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: darkTheme ? "#333" : "#f8f9fa",
                  color: darkTheme ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "10px 15px",
                  margin: "5px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Frameworks & Technologies */}
          <h5 className={darkTheme ? "text-light" : "text-dark"}>
            Frameworks & Technologies
          </h5>
          <div className="d-flex flex-wrap">
            {skills.frameworksTechnologies.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: darkTheme ? "#333" : "#f8f9fa",
                  color: darkTheme ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "10px 15px",
                  margin: "5px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Databases */}
          <h5 className={darkTheme ? "text-light" : "text-dark"}>Databases</h5>
          <div className="d-flex flex-wrap">
            {skills.databases.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: darkTheme ? "#333" : "#f8f9fa",
                  color: darkTheme ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "10px 15px",
                  margin: "5px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Tools & Platforms */}
          <h5 className={darkTheme ? "text-light" : "text-dark"}>
            Tools & Platforms
          </h5>
          <div className="d-flex flex-wrap">
            {skills.toolsPlatforms.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: darkTheme ? "#333" : "#f8f9fa",
                  color: darkTheme ? "#fff" : "#000",
                  borderRadius: "20px",
                  padding: "10px 15px",
                  margin: "5px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Resume;
