import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Dennis Jacques",
      position: "Upwork Client",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "One of the best web designer I've ever met. When it comes to solving problems I just need to say him once that we need to fix this. Later that day we discuss that problem is already resolved. I will definitely hiring him in the future for all the web design related projects.",
      rating: 5,
    },
    {
      name: "Jay Shah",
      position: "Upwork Client",
      src: "images/testimonial/client-sm-2.jpg",
      desc: "Kamel was an amazing freelancer to work with. Delivered more than I expected. He has great skills, communication, and most importantly extremely helpful and kept providing me with solutions. It is clear that he really cares and wants to submit only the best solution.",
      rating: 5,
    },
    // {
    //   name: "Patrick Cary",
    //   position: "Freelancer from USA",
    //   src: "images/testimonial/client-sm-2.jpg",
    //   desc: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
    //   rating: 5,
    // },
    // {
    //   name: "Chris Tom",
    //   position: "User from UK",
    //   src: "images/testimonial/client-sm-4.jpg",
    //   desc: "I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. Excellent.",
    //   rating: 5,
    // },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
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
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Client Speak
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    {/* <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    /> */}
                    <p className="ms-3 mb-0">
                      {/* <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong> */}

                      <span className="text-muted fw-500">
                      <strong style={{color:"white"}}>
                        {value.position}{" "}
                        </strong>                        
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
