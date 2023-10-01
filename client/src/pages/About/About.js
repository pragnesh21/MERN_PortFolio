import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://lh3.googleusercontent.com/pw/ADCreHfT_qJ16khHdb38CPZoAAwpgK-DKM0g6TdrQ3LMq8t96_qCQVNNWUeFBRB_818J3qK5O3PQ5YgxWy9Nz01DS5GCAhrmVgwD5YxSqnUcaCtMnhrC7Pcx60QbWL1K5gNS9G-YwE8KEusQUQiOpEp6L-EM=w684-h857-s-no?authuser=0"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              A motivated person with a strong passion for technology and a solid foundation in programming languages and concepts. Skilled in problem-solving
              and collaborating with teams to deliver effective solutions. Eager to apply theoretical knowledge gained through coursework and practical experience
              to contribute to the success of an organization. A proactive learner with excellent communication skills and a strong work ethic. I am seeking an
              entry-level position in IT to utilize and further develop my skills in a professional environment.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
