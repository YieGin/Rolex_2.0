import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import "./style/Rolex.css";
import Twitter from "../../svgs/twitter.svg";
const Rolex = (props) => {
  const { t, i18n } = useTranslation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id={props.theme} className="Rolex_main">
      <div className="Rolex_11">
        <video
          className="Video_Rolex2"
          autoPlay
          muted
          loop
          src="https://content.rolex.com/dam/world-of-rolex/hub/videos/world-of-rolex-cover.mp4
"
        ></video>
        <div className="World_div">
          <h1 className="World">{t("World.page6.1")}</h1>
          <h1 className="Worldd">{t("World.page6.2")}</h1>
        </div>
      </div>
      <div className="py-10">
        <h1 className="Rolex3">{t("World.page6.3")}</h1>
        <p className="Rolex4">{t("World.page6.4")}</p>
      </div>
      <p className="Rolex5">{t("World.page6.5")}</p>
      <div className="container4">
        <div className="box4">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-watchmaking-sponsoring_ao18jb_853.jpg?imwidth=1350"
          />
          <span className="Rolex_down4">{t("World.page6.6")}</span>
        </div>
      </div>
      <div className="Helper"></div>
      <div className="container4">
        <div className="box4">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_tennis_rg19ac_0055.jpg?imwidth=1350"
          />
          <span className="Rolex_down4">{t("World.page6.7")}S</span>
        </div>
      </div>
      <div className="Helper"></div>
      <div className="container2">
        <div className="box2">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_equestrianism_chig19ps_0109_r.jpg?imwidth=640"
          />
          <span className="Rolex_down">{t("World.page6.8")}</span>
        </div>
        <div className="box2">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_golf_push_ukpga19ct_0658a.jpg?imwidth=640"
          />
          <span className="Rolex_down">{t("World.page6.9")}</span>
        </div>
        <div className="box2">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_motor-sports_f1abud19js_448.jpg?imwidth=640"
          />
          <span className="Rolex_down">{t("World.page6.10")}</span>
        </div>
        <div className="box2">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_yachting_syho19ka_0754.jpg?imwidth=640"
          />
          <span className="Rolex_down">{t("World.page6.11")}</span>
        </div>
      </div>
      <p className="Rolex6">{t("World.page6.12")}</p>
      <div className="container3">
        <div className="box3">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/world-of-rolex-hub-rolex-and-cinema-2022.jpg?imwidth=640"
          />
          <span className="Rolex_down">{t("World.page6.13")}</span>
        </div>
        <div className="box3">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_architecture_che13cw-58.jpg?imwidth=640"
          />
          <span className="Rolex_down">{t("World.page6.14")}</span>
        </div>
        <div className="box3">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_arts_damekiri_13at_0024.jpg?imwidth=640"
          />
          <span className="Rolex_down">{t("World.page6.15")}</span>
        </div>
        <div className="box3">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_rmp_2019_01_10_rolex_david_adjaye_mariam_kamara_518.jpg?imwidth=640"
          />
          <span className="Rolex_down">{t("World.page6.16")}</span>
        </div>
      </div>
      <p className="Rolex5">{t("World.page6.17")}</p>
      <div className="container4">
        <div className="box4">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_exploration_cory_richards_ng_cc69_1587746.jpg?imwidth=1350"
          />
          <span className="Rolex_down4">{t("World.page6.18")}</span>
        </div>
      </div>
      <div className="Helper"></div>
      <div className="container4">
        <div className="box4">
          <img
            className="Rolex_Image1"
            src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor-rae-2021.jpg?imwidth=1350"
          />
          <span className="Rolex_down4">{t("World.page6.19")}</span>
        </div>
      </div>
      <div id={props.theme} className="share_div mt-[10%] upad:mt-[0%]">
        <h1 className="Share_social">{t("LandingPage.Page1.74")}</h1>
      </div>
      <div id={props.theme} className="social-icons">
        <a className="social-icon social-icon--codepen">
          <i className="fa fa-codepen">
            <img src={Twitter} />
          </i>
          <div className="tooltip">twitter</div>
        </a>
        <a className="social-icon social-icon--codepen">
          <i className="fa fa-codepen">
            <svg
              className="Svg_social"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </i>
          <div className="tooltip">facebook</div>
        </a>
        <a className="social-icon social-icon--codepen">
          <i className="fa fa-codepen">
            <svg
              className="Svg_social"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.084,3.163,9.426,7.627,11.174c-0.105-0.949-0.2-2.406,0.042-3.442 c0.218-0.936,1.407-5.965,1.407-5.965s-0.359-0.719-0.359-1.781c0-1.669,0.967-2.914,2.171-2.914c1.024,0,1.518,0.769,1.518,1.69 c0,1.03-0.655,2.569-0.994,3.995c-0.283,1.195,0.599,2.169,1.777,2.169c2.133,0,3.772-2.249,3.772-5.495 c0-2.873-2.064-4.882-5.012-4.882c-3.414,0-5.418,2.561-5.418,5.208c0,1.031,0.397,2.137,0.893,2.739 c0.098,0.119,0.112,0.223,0.083,0.344c-0.091,0.379-0.293,1.194-0.333,1.361c-0.052,0.22-0.174,0.266-0.401,0.16 c-1.499-0.698-2.436-2.889-2.436-4.649c0-3.785,2.75-7.262,7.929-7.262c4.163,0,7.398,2.966,7.398,6.931 c0,4.136-2.608,7.464-6.227,7.464c-1.216,0-2.359-0.632-2.75-1.378c0,0-0.602,2.291-0.748,2.853 c-0.271,1.042-1.002,2.349-1.492,3.146C12.57,26.812,13.763,27,15,27c6.627,0,12-5.373,12-12S21.627,3,15,3z"></path>
            </svg>
          </i>
          <div className="tooltip">pinterest</div>
        </a>
        <a className="social-icon social-icon--codepen">
          <i className="fa fa-codepen">
            <svg
              className="Svg_social"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
            </svg>
          </i>
          <div className="tooltip">linkedin</div>
        </a>
        <a className="social-icon social-icon--codepen">
          <i className="fa fa-codepen">
            <svg
              className="Svg_social"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
            </svg>
          </i>
          <div className="tooltip">Email</div>
        </a>
        <a className="social-icon social-icon--codepen">
          <i className="fa fa-codepen">
            <svg
              className="Svg_social"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
            >
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
          </i>
          <div className="tooltip">instagram</div>
        </a>
      </div>
    </div>
  );
};

export default Rolex;
