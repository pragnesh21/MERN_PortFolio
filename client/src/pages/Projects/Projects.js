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
                    src="https://lh3.googleusercontent.com/pw/ADCreHd_sk-FEAFXvQhoBj18kVPb1pCgEsiYZdV5aUpB73pCsBo7YTmV8RaJlQBFDEt9XSBm_Me239fhH6nq9v0mgvfXhf60Nt6oOsauw4jwicVCEXHUAPDzfseqxOBmsyYIWNQtjZf9MXl9xZFedgT9FNJNkT0KQThwnzM9n91mOrhvPQdMFU5R2tUbHLDCZxrFuRqeYJpfAKSD4eJkQSjoQ5iekJkSuVRAd7CfBZ4Cv7TmgK7M3JKENaFvx4P6iNQrn2NJrg3OCYyNR_OCV_gXmcxm9hL23oQP4-yBFl3UMEh6qgC8rFDEFc6bvXh12Ph_4w3OeOl_axiRj5Sd9KL3qpnB-RVGSUhEZtMie2lo25zCNhBWhSUog6RM4bKcOJKa2evOniu-xJJC_0svnhpEX7yT3K1msbmo1c2fKI9Hqf6O_UHOFFvrCo_tv8EWWBEGNWx9ub5j6LyRCv7S7AWH_B7edEJhVu5bBpYfQUkdvumzziw87-9Z23wexQE6NcBlB_Fcvt2G-g8k2SWUF6OXpA_bUlg2KGxYsldXBRg0U3Y8Y70LIughVlWWJFP91Qo5Pgj-An8MM1PubcddlwgDKN_JqASJz3Uuzm20XvMBRpE8CXoyQuq9I8H-n32drHUOTo9Xb-xih6_MTm8cqfzJxg8pAaEapFpp0ODmCsstvgM1LU7jiUV7frVUWlgjlJCOvVExuUxJTGNkcH9s8w75WDG2-M05tcgeh8WOJgUmDKZcMQX6bKdVbNVaiuuzLuYyd9JfLK0idZoUdCmbHbK-tXy2UimQZHV2nYqf5QAxxl1e2f01CTgg9A39X7AUiU8b37pnK6PbmBZpm26KLzhSXphfK3FLVTtZtTOpe0ITd9XOT-ts7hwH2msI0N483v4gk5dum-wN_97-wpQlKqNMuA=w480-h250-s-no?authuser=0"
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
                    src="https://lh3.googleusercontent.com/pw/ADCreHcL52nhpckcxD0GfqP3SHvQ-EvrCH3NgQq24g3DbDILX8IAMzYpIf0xcXvbXYMQc93HmafqmvO1dihk_QMQyElNsOU4O2ndCeidRd3rmXaTXJGY8aFofM1pa-ctVIqxy8oXQD2h5_XsjmVzlc45dwTYtw9X4ejLSz-0jxSqkuE_0gvJzr6qk-swW32l0hZU5jYLWJGt6bmtjdTvjp7eXSsoJ_zYtc-RbiVF6JpSt9DhCyb0EMKIcJajwIs6Rl4p2dI9OMzWTq3LPz9DSWKULrhIvPCvQ7g3Pnpcvg12Pu5hgtTe72hiri-9_L6G8yMyYn5uThtQL4DihIU8Aq-__r0sTibEHHxuCqwW0bz_TdKTFANaaVv08voRYnJ4kEowEwNXgyjNCM0pDTR4K5VDjLR59Ll6q1u4_dAJ2626g7thmLdOmuFC1GvxuiPGgbFLCqLBQyeYdI30NpBaNEG5eFvfB7Jd_hsTiCMOby4w2Y4V1d4QMcsGg_hlzb0g1getU_4PNwb4Aq6r21Gw58HS1wr7yN9RQ5Cbjnt4yX7_-IwqNSFip2eQ16RI9v-BL-qbCbidFU5hTe1D7g7bDBCa2q2JbfVptHNdxlP-FbFB2oR_Tkc3gDGrgSx-RDvDU2gZxRC_IAugcgfiXP8Vp4YStN51jRVjnAdDeJdNIF2qYQXLh6U9jtk0JVsVRfubRnm9bGFatAK1Q31cALTFNPc3RIISCYRbITvb6yMPZ0GLyFwh0LzuQo2pxtcsVozWKtxAgs4aju0X6lWvP33d9yesmAabEDw_hSRyoO5Z2BfriTEU6oxawZ8r18WjfH68LS7Rq4CZDo3QSzkO0AqKTATypqCUu92YGxKVo4nZp4FlDO-kMrRSub5E0Lk-EAVGhLORA1yaODOx3cpd5FXObDYC_w=w478-h253-s-no?authuser=0"
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
                    src="https://lh3.googleusercontent.com/pw/ADCreHcbAeI9_ffVzQNvhQMjJR7TOwqf9baupAtiXzMg6PTBosRRw9P1G8sP4N7AP9p9tPXTSw00J3G2vWH4tZBGRqLg3ylEYLqI13bbGRHnIzHnmeA8Rs5gbGjDwOQ-eulcUsVDusw7oPCMhhe4iNMeceaEfz895asthavkPCzHltAYGxJr3P6QMFZzYw5a-wq_b3fOS24BlCv9RCoa-lKk11oEp2S4576cvkeDAPUQPVC1ROYyPeZcgGVAUO34DEfUk5OUMh2hvlYcsLwGwXeYd8aAAuh-X8G30q1OLzJuOrDmdsKd-xfmOcGPfESpA9EgUNkvY-WdmT1NmvsX2fOl1klHihGQT8CaSp7xiDSH2AABb044c_uF2vfLd4mIA0pl4QHpx5Z-1I-aSdbjmbdW5YJqPinlpeI6DtpYylJRtk4-yBLrnV7ZWzFleTdTFEJW8r3TKR8WZRah5zxoQRba6QMH9CniFhq5edBfT26D73oBOdTD5-tYGf7eVj7tGLrnODxta5KDVvmbA1T02FVMbSbGDkESJLSHGrDRrGfI6W6mnp2CnBeEG5kEZkD4JosBNK0Fc_A26l1mwynll3GN4TNXiUwamrDh3TfoKTsQDWa6AQHC27x_FHldvkt8LVupu5-oDQvQSJb3u6wDb9oAN1CRsBqog_8KKWWhMA3ByhwDnpQ-Errnw2BTpPoKHot6mw0ye6Tg91jDYSrnPfI_ewDGgnvOpRo9n0bxhLP2oQSXjfgn5MgPiQlhtammKx0lw6gRjD0VHgUYUQ0MURHA5xIltR08IHNjh_i1GpeyDT3qm1Z6afSrPTbAbFW0mPZ1nE4cCrQXM78sfVv-Ftf7xESBmQb80TqWgu1H32ksYoDFlraXAsajObbM9uU4kIbghi9Ca1TCVLy29Zooa9RrEQ=w480-h242-no?authuser=0"
                    alt="project1"
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
