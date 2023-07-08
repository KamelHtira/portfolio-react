import React from "react";
import resumeFile from "../documents/KAMEL_HTIRA_CV.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2023 - 2020",
      title: "Bachelor's Degree in Multimedia Computing",
      place: "Higher Institute of Arts and Multimedia Manouba ( ISAMM )",
      desc: "Bachelor's Degree in Multimedia Computing with excellent honors, encompassing digital media production, web development, and multimedia design. Equipped to excel and contribute to multimedia computing advancements.",
    },
    {
      yearRange: "2019 - 2020",
      title: "Baccalaureate Degree in computer science",
      place: "Hight School Hamida Bakir",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    // {
    //   yearRange: "2009 - 2012",
    //   title: "Master Degree",
    //   place: "Harvard University",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
  ];

  const experienceDetails = [
    {
      yearRange: "2023 - Present",
      title: "Back-end Developer",
      place: "E-Tafakna Legal",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "Summer 2023",
      title: "End Of Study Internship",
      place: "Medianet",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "Summer 2022",
      title: "Front-end Developer",
      place: "Opuslab",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const skills = [
    {
      name: "React JS",
      percent: 0,
    },
    {
      name: "Next JS",
      percent: 0,
    },
    {
      name: "Node JS",
      percent: 0,
    },
    {
      name: "Express JS",
      percent: 0,
    },
    {
      name: "Typescript",
      percent: 0,
    },
    {
      name: "Bootstrap",
      percent: 0,
    },
    {
      name: "Electron JS",
      percent: 0,
    },
    {
      name: "Flutter",
      percent: 0,
    },
    {
      name: "Git",
      percent: 0,
    },
    {
      name: "MongoDB",
      percent: 0,
    },
    {
      name: "MySQL",
      percent: 0,
    },
    {
      name: "AWS / Azure",
      percent: 0,
    },
    
  ];

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
            {" "}
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
        <div className="row gx-5 justify-content-center">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} style={{border:"1px solid white",borderRadius:"10px",padding:"20px",margin:"10px",justifyContent:"center"}} className="col-md-2">
                <p
                style={{textAlign:"center", width:"100%"}}
                  className={
                    " fw-500 mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{/* <span className="float-end">{skill.percent}%</span> */}
                </p>
                {/* <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div> */}
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
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
        </div>
      </div>
    </section>
  );
};

export default Resume;
