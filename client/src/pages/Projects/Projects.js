import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        During my academic journey, I completed projects for both formal assessment and self-driven learning. Academic projects were meticulously crafted to meet specific criteria, showcasing theoretical understanding and practical application. Conversely, self-directed projects were fueled by curiosity and passion, enabling exploration of innovative ideas and hands-on experimentation. These personal endeavors enriched my understanding, extending beyond classroom confines, and deepened my dedication to lifelong learning and growth.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack</span>
                  <img
                    src="https://lh3.googleusercontent.com/pw/ADCreHc85IKg6QV3yLumv1RDaY569FUShBoeJMcv8ahJVbdP6WZpDJOeXDov3aFGRIxjdyXFy0EFFTs3CkInVYNKHWUBNsXauxzDdySfaMMp-PJGht05VBfGnaCZSnU-GrypN53qAySMqXoAMhe5xlUHxzJW=w480-h250-s-no?authuser=0"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Node</span>
               
                                                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Graduate Momos Wala
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://graduatemomoswlamernapp.vercel.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Web3 Blockchain</span>
                  <img
                    src="https://lh3.googleusercontent.com/pw/ADCreHfMgpfW19B-N980Zq-Lc3K0o4ipyY_V0quDREfsi9YzKMxhYop0X214oxsg6Ic17t4kzszXg_AzSunYQUpYqDtqa9_PUHEv9k7I5ut_hg8sCtTXkF0mLqHtkKmrfNpi2lzWfIcAsDRud3URtLzVFuhz=w478-h253-s-no?authuser=0"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Blockchain technology </span>

                  <span className="card-detail-badge">Next.js</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">CrowdFundingby Web3</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://web3app-by-pjm.vercel.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MY Portfolio</span>
                  <img
                    src="https://lh3.googleusercontent.com/pw/ADCreHfHleT41_ri_OWASIjpyy7SUNyQxrZ_W0dsMz8VLAxtX0l5HfmyUZJfzLuQ2QI7sN5lKAeLKwjE8hqi9hVMf3EgSnPfPl95trdwgvDsLZaDca4Zb7zbH44vxA6zrihh9ZBbaLpg_hPtFHrrGkXe4DwU=w480-h242-s-no?authuser=0"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">MY PORTFOLIO</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
