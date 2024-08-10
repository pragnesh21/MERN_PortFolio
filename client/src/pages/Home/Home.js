import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
 //import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "dark" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi... I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer!",
                    "MERN Stack Developer!",
                    "DotNet Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=+918780036665"
                rel="noreferrer"
                target="_blank"
              > 
WhatsApp Me 
              </a>
              <a style="display: none;"  className="btn btn-cv" href="https://drive.google.com/file/d/1cc_x9CWlI9R_Cy2FdnFuWEH_v88pMJnE/view?usp=sharing" download="Pragnesh_makwana.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
