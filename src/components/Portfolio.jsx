import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Desktop",
    BRAND: "Mobile",
    PHOTOS: "Web",
  };

  const projectsData = [
    {
      title: "Doctor Admin Dashboard App",
      projectInfo:
        `The project is a Desktop Application designed to simplify patient
        management and online appointment booking for physicians. The intuitive
        admin dashboard enables efficient management of patient data and
        appointments.`,
      // client: "Ruby Clinton",
      technologies: "NodeJS, NextJS, ReactJS, ElectronJS",
        industry: "Software Engineering",
        date: "6/8/2023",
      url: {
        name: "Download Electron App",
        link: "https://mega.nz/file/c39whKKZ#xSR9rnVjN6UJUdkjtTlRMxZ7j1CvR1faRDAWJwKgE-g",
      },
      socialLinks: {  
        // facebook: "http://www.facebook.com/",
        // twitter: "http://www.twitter.com/",
        // google: "http://www.google.com/",
        // instagram: "http://www.instagram.com/",
        // mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/DocDashboard/dashboard.png",
      sliderImages: [
        "images/projects/DocDashboard/Capture.png",
        "images/projects/DocDashboard/Capture1.png",
        "images/projects/DocDashboard/Capture2.png",
        "images/projects/DocDashboard/Capture3.png",
        "images/projects/DocDashboard/Capture4.png",
        "images/projects/DocDashboard/Capture5.png",
        "images/projects/DocDashboard/Capture6.png",
        "images/projects/DocDashboard/Capture7.png",
        "images/projects/DocDashboard/Capture9.png",
        "images/projects/DocDashboard/Capture10.png",
        "images/projects/DocDashboard/Capture11.png",
        "images/projects/DocDashboard/Capture12.png",
        "images/projects/DocDashboard/Capture13.png",
        "images/projects/DocDashboard/Capture14.png",
        "images/projects/DocDashboard/Capture15.png",
        "images/projects/DocDashboard/Capture16.png",
        "images/projects/DocDashboard/Capture17.png",
        "images/projects/DocDashboard/Capture18.png",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Patients Mobile App",
      projectInfo:
        "The mobile application enables users to effortlessly schedule appointments with doctors, conveniently search for medical professionals, receive timely notifications, and enjoy other useful features.",
      client: "Ruby Clinton",
      technologies: "Flutter, Dart",
      industry: "Mobile Development",
      date: "1/7/2023",
      // url: {
      //   // name: "www.example.com",
      //   // link: "https://www.example.com",
      // },
      socialLinks: {
        // facebook: "http://www.facebook.com/",
        // twitter: "http://www.twitter.com/",
        // google: "http://www.google.com/",
        // instagram: "http://www.instagram.com/",
        // mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/DocFlutter/0.png",
      sliderImages: [
        "images/projects/DocFlutter/1.png",
        "images/projects/DocFlutter/2.png",
        "images/projects/DocFlutter/3.png",
        "images/projects/DocFlutter/4.png",
        "images/projects/DocFlutter/5.png",
        "images/projects/DocFlutter/6.png","images/projects/DocFlutter/7.png",
        "images/projects/DocFlutter/8.png",
        "images/projects/DocFlutter/9.png"

      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Patients Mobile App",
      projectInfo:
        "The mobile application enables users to effortlessly schedule appointments with doctors, conveniently search for medical professionals, receive timely notifications, and enjoy other useful features.",
      client: "Ruby Clinton",
      technologies: "Flutter, Dart",
      industry: "Mobile Development",
      date: "1/7/2023",
      // url: {
      //   // name: "www.example.com",
      //   // link: "https://www.example.com",
      // },
      socialLinks: {
        // facebook: "http://www.facebook.com/",
        // twitter: "http://www.twitter.com/",
        // google: "http://www.google.com/",
        // instagram: "http://www.instagram.com/",
        // mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/DocFlutter/0.png",
      sliderImages: [
        "images/projects/DocFlutter/1.png",
        "images/projects/DocFlutter/2.png",
        "images/projects/DocFlutter/3.png",
        "images/projects/DocFlutter/4.png",
        "images/projects/DocFlutter/5.png",
        "images/projects/DocFlutter/6.png","images/projects/DocFlutter/7.png",
        "images/projects/DocFlutter/8.png",
        "images/projects/DocFlutter/9.png"

      ],
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
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

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
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
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
            ))}
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
                          style={{color:"transparent"}}
                            className="popup-ajax stretched-link"
                            href="#a"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >a</a>
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
