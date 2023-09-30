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
                src="https://lh3.googleusercontent.com/pw/ADCreHcMuKhY2g4UD2RA6em12JMXSt6XKjCKiL9ES4G39hmpJlZAoa7EqQ7_dkpzOuG3z1_Kcywd6SsaqcGE2n2vVLDzJHK6dT7PNCFosCiFYaTzejwwMwlwcNBrYRo-lzrd5Yv3p2NMA8dxXGsKeCfOP44sdmv7xIayJBkAfiKHsWVzSqbnbwuT0pc_ROXfEcSQ7KA_J-CDKV4XEzLmYASGnLbLsm4T1w_NtFsY-MA2I9BWwfCXvrl56MKhihRUHXXZb5Bj1E8jicVEQEZ-JmDUoFgxtN-nVwHEmdk7eQjVWvAUxE-8r4jnXds2xNPC11CAz7k_0aBUfayJyLOnw1v9AgmavlOtSWw7atPBgHRCw4LV3HMdm7K-s3hxi_S1uODVoCrPLvY0sD2Zbqd3Bucj_-OYBNYr5gQr8yFZRn64cIIq6pfBIyyqjJjp-LpczDfHhwM9IF4pVTQPL68REXmYHpjwCr4fUUhI8QBGhi71h2hmRtETRAmuxGMT0_Ls2ejgZ695TbA8ZQrbywOVkqE6Zk-XLESoMCIionkWAgO7t9taXoWfFC3OILaqjMnb8ipJuC6Gmq8qk1FzoGYE5x8c_ClxTLYd7EqKQWHtqERMCRUJBuu8pu1Xso9_P_QBuSZ8KEjmCaxHETUXIrukZnTDsshVI0nJNLTfbUn9tTj4Bw3ElqDkXwPQf1rvF4gNdbQ6Zw6HVH3VUnFrrdL9NEZiLFnQcVGDUXZiIOPvTDcXjyQz78-BDfxtWKU1CF-7Y7hWSe1bj_zV_Cgq8lJ5_SvysHTwhoGP7CXd9ixGIDue5iMFGIUryaBq9myJj_0sSjV-uI6l7zWmOR7WUcC7bGc7y7wfPnbkTOy9T9aOW-_oJlHuuEOFebFMpiB4gp1sRxvsX7JG0Vv2yx6xziqypd8c7w=w684-h857-s-no?authuser=0"
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
