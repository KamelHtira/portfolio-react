import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  // const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Desktop",
    BRAND: "Mobile",
    PHOTOS: "Web",
  };

  const projectsData = [
    {
      title: "Spring Security Template ",
      projectInfo:
        "I love Spring Boot a lot, but the one thing that bothers me is every time i work on project i need to spend so much time setting up the server. Configuring Spring Security, Swagger, and JWT authentication with a database can take 2 to 3 hours time that could be spent building actual features.",
      technologies: "Spring Boot, Spring Security, JWT, Swagger, PostgreSQL",
      url: {
        name: "https://github.com/KamelHtira/spring-security-template",
        link: "https://github.com/KamelHtira/spring-security-template",
      },
      thumbImage: "images/projects/SpringbootTemplate/springboot.png",
      date: "02/2025",
      categories: [filters.PHOTOS],
    },
    {
      title: "Petra AB Nodejs Socket.io Backend Server",
      projectInfo:
        "I contributed a Node.js server for flutter to handle all the socket.io connections and manage the chat between users. The server is responsible for handling all the chat messages, storing them in the database, and sending them to the appropriate users.",
      technologies: "Node.js, Express.js, Socket.io, MongoDB",
      thumbImage: "images/projects/petra/petra.png",
      date: "01/2025",
      categories: [filters.PHOTOS],
    },
    {
      title: "Ruby on Rails project to learn Rails Ecosystem",
      projectInfo:
        "I have strong experience with JavaScript and Java, but I hadn’t worked with Ruby before. To expand my skill set, I decided to create a simple project using Ruby on Rails. This project features an SQLite database, Bulma CSS framework for styling, and Chart.js for data visualization. Additionally, I implemented session-based authentication to deepen my understanding of the Ruby on Rails ecosystem, including concepts like Pin Imports, hosting, and the MVC architecture.",
      technologies: "Ruby, Ruby on Rails, Bulma (CSS Framework), Chart.js, SQLite, JavaScript",
      url: {
        name: "https://github.com/KamelHtira/demo-ruby-on-rails",
        link: "https://github.com/KamelHtira/demo-ruby-on-rails",
      },
      thumbImage: "images/projects/rails/rails.png",
      date: "12/2024",
      categories: [filters.PHOTOS],
    },
    {
      title: "BTS Bank Management Platform",
      projectInfo:
        "I contributed a user-friendly platform for managing transactions and bank accounts, implementing a microservices architecture with WSO2 API Gateway for seamless API integrations. I also focused on secure authentication to protect financial operations and user access.",
      technologies: "Java, Angular, WSO2 API Gateway, Typescript, PostgreSQL",
      thumbImage: "images/projects/bts/bts.png",
      date: "11/2024",
      categories: [filters.PHOTOS],
    },
    {
      title: "Digital Transformation for Tunisian Customs",
      projectInfo:
        "I contributed to a project for Tunisian Customs to reduce paperwork and streamline administrative processes, using a monolithic architecture with a Java backend and React frontend. I also developed high-performance C++ modules and optimized deployment with Docker containerization.",
      technologies: "Java, React.js, C++, Docker, PostgreSQL",
      thumbImage: "images/projects/customs/customs.png",
      date: "07/2024",
      categories: [filters.PHOTOS],
    },
    {
      title: "LET-VENUE Booking Website",
      projectInfo:
        "I contributed a Node.js-based architecture with a server, services, and multiple databases (MySQL, MongoDB, Redis). I built the frontend using Next.js, integrated APIs via the KrakenD API Gateway, and ensured efficient service delivery through Docker-based deployment.",
      technologies: "Javascript, Node.js, Next.js, KrakenD, Docker",
      thumbImage: "images/projects/letvenue/letvenue.png",
      date: "03/2024",
      categories: [filters.PHOTOS],
    },
    {
      title: "MedVizor Desktop App",
      projectInfo: `The project is a Desktop Application designed to simplify patient
        management and online appointment booking for physicians. The project created in collaboration with local tunisian doctors and base on their needs. The application is designed to be user-friendly and easy to navigate, allowing doctors to manage their patients' records efficiently and effectively.`,
      technologies: "NodeJS, Express.js, Next.js, Tauri.js, MongoDB",
      url: {
        name: "https://github.com/KamelHtira/medvizor-desktop-offline",
        link: "https://github.com/KamelHtira/medvizor-desktop-offline",
      },
      thumbImage: "images/projects/DocDashboard/dashboard.png",
      date: "02/2023",
      categories: [filters.BRAND],
    },
    {
      title: "Java Server for Electronic Signing Service",
      projectInfo:
        "I created an electronic signature solution allow users to sign and generate contracts electronically also I utilize advanced cryptography libraries to ensure data security using Java Spring Boot 3 and Javascript for backend development and React.js for frontend integration",
      technologies: "Spring Boot, JWT, MySQL, DSS (Digital Signature Services)",
      thumbImage: "images/projects/esig/etafakna.png",
      date: "10/2022",
      categories: [filters.PHOTOS],
    },
  ];
  

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  // useEffect(() => {
  //   if (imagesLoaded) {
  //     filterKey === "*"
  //       ? isotope.current.arrange({ filter: `*` })
  //       : isotope.current.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [filterKey, imagesLoaded]);

  // const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            {/* <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li> */}
            {/* {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))} */}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            style={{ color: "transparent" }}
                            className="popup-ajax stretched-link"
                            href="#a"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            a
                          </a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
