import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/Navbar.scss";
import { useTranslation } from "react-i18next";
const textScrollVariants = {
  visible: { opacity: 1, top: 0 },
  hidden: { opacity: 0 },
};
const Modal = ({ show, CloseModal }) => {
  const { t, i18n } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (!show) return null;
  return ReactDOM.createPortal(
    <motion.div
      ref={ref}
      variants={textScrollVariants}
      initial="hidden"
      className="modal"
      animate={controls}
    >
      <div className="content1">
        <div className="Rolex_1">
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 59"
            aria-hidden="true"
            alt=""
            height="50px"
          >
            <path d="M39.4,10.7c0.2,0,0.3,0,0.4-0.1L45,28h0c0.6,1.9,3.4,3.4,6.8,3.4c3.4,0,6.2-1.5,6.8-3.4h0l5.1-17.4c0.1,0,0.3,0,0.4,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.7,0.4,1.3,1,1.6l-5.9,12.7l1-17.1c0,0,0,0,0,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.8,0.6,1.5,1.3,1.7l-3.9,16.7L52,4.3c0.9-0.1,1.5-0.9,1.5-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.9,0.7,1.7,1.5,1.8l-1.9,18.4L45.7,6C46.5,5.8,47,5.1,47,4.3c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c0,0,0,0,0,0l1,17.1l-5.9-12.7c0.6-0.3,1-0.9,1-1.6c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8C37.6,9.9,38.4,10.7,39.4,10.7z M51.8,26.5c3.1,0,5.6,0.8,5.6,1.8c0,1-2.5,1.8-5.6,1.8c-3.1,0-5.6-0.8-5.6-1.8C46.1,27.3,48.7,26.5,51.8,26.5z"></path>
            <g>
              <path d="M19.6,55.2l-1.1-3.3c-0.5-1.5-0.9-2.1-1.7-2.9c-0.5-0.5-1.3-0.7-1.9-0.9c2.1-0.3,3.7-2.2,3.7-4.4c0-2.4-2-4.4-4.4-4.4c0,0-0.1,0-0.1,0v0H7.4h-4H1v1.3h2.4v14.6H0.9v1.3h6.4l0,0h2.5v-1.3H7.4v-7h1.9c0.1,0,0.1,0,0.2,0h0.4c0.6,0,1.1,0.1,1.6,0.2c0.4,0.1,0.9,0.3,1.2,0.5c0.4,0.3,0.9,0.7,1.3,1.3c0.1,0.2,0.2,0.4,0.3,0.5c0.7,1.4,1.2,3.3,1.7,5.7h3v0h2.7v-1.3L19.6,55.2L19.6,55.2z M11.6,46.9H7.4v-6.3h4.2c1.8,0.1,3.2,1.3,3.2,3.1S13.4,46.8,11.6,46.9z"></path>
              <path d="M31.9,38.7c-5.2,0-9.3,4.2-9.3,9.2c0,5,4.2,9.2,9.3,9.2c5.2,0,9.3-4.2,9.3-9.2C41.2,42.9,37.1,38.7,31.9,38.7zM35.8,53.2c-0.3,0.4-0.7,0.8-1.1,1.1c-0.7,0.5-1.5,0.9-2.3,0.9c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0c-0.8,0-1.6-0.4-2.3-0.9c-0.4-0.3-0.8-0.7-1.1-1.1c-1-1.3-1.6-3.2-1.6-5.3c0-2,0.5-3.7,1.4-5.1c0.5-0.9,1.2-1.6,2.2-2c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.4-0.1c0.4-0.1,0.9-0.2,1.3-0.2c0.5,0,0.9,0.1,1.3,0.2c0.1,0,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0c0.9,0.4,1.7,1.1,2.2,2c0.9,1.3,1.4,3.1,1.4,5.1C37.4,50,36.8,51.9,35.8,53.2z"></path>
              <path d="M59.7,49.8h-1.3v2.6c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4h-1.5V40.6h2.5v-1.3h-2.5l0,0h-0.3h-6.2v1.3h2.5v14.6h-2.5v1.3h14.9h1.1h0.1h0.1v0h0v-4.2h0V49.8z"></path>
              <path d="M79.5,39.4L79.5,39.4h-0.1h-4H62.5v1.3h2.5v14.6h-2.5v1.3v0h12.9h2.9h1.1h0.1h0h0.1v-4.2v-1.9h-1.3v2l0,0c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4.6v0H69h-0.1v-7V48h1.3c0,0,0,0,0,0H71l0,0c1.2,0,2.1,1,2.1,2.1c0,0,0,0,0,0h0v0.7l0,0v0.3h1.2V51V48v0v-1.1v0V44v-0.1h-1.2v0.8h0c0,0,0,0,0,0c0,1.2-0.9,2-2.1,2l0,0h-0.8h-0.8h-0.5v-6.2H69h3.7c0,0,0,0,0.1,0h2.6c1.6,0,2.8,1.3,2.9,2.8l0,0v1.8h1.3v-1.7L79.5,39.4L79.5,39.4L79.5,39.4z"></path>
              <path d="M101.8,55.3c-1.2,0-1.5-0.4-2.5-1.5l-5.7-7.1l3.8-4.5v0c1-1.2,1.3-1.6,2.6-1.6h0.8h0.2v-1.3h-0.2H97h-0.2h-2.7H94v1.3h0.2h1.4v0c0,0,0,0,0,0c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.2-0.1,0.3l-3.3,4L90,42.3l-0.5-0.7c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.3,0.3-0.6,0.6-0.6h1.5v-1.3h-2.7h-3.9h-2.1v1.3h0.4c1.1,0.1,1.4,0.4,2.3,1.4l5,6.3L86,53.7v0c-1,1.2-1.3,1.6-2.6,1.6h-0.8h-0.3v1.3h0.3h4.3h0.3h2.3h0.3v-1.3h-0.3h-1.6v0c0,0,0,0,0,0c-0.3,0-0.6-0.3-0.6-0.6c0-0.1,0.1-0.3,0.1-0.4l4-4.8l3.3,4.2l0.5,0.6c0.1,0.1,0.1,0.2,0.1,0.4c0,0.3-0.3,0.6-0.6,0.6c0,0,0,0,0,0l0,0h-1.6v1.3h0v0h9.3v-1.3L101.8,55.3L101.8,55.3z"></path>
            </g>
          </svg>
          <svg
            onClick={CloseModal}
            className="Rolex_1_svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </div>
        <h1 className="py-[5%]">{t("Search.page3.search")}</h1>
        <div className="Rolex_2">
          <div className="group">
            <input required="" type="text" className="input" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="Label_Store">Find a jeweler</label>
          </div>
          <button className="Button_search">
            <svg
              className="Svg_button_search"
              viewBox="0 0 11 11"
              aria-hidden="true"
              alt=""
              role="img"
            >
              <path d="m11 5.5-4.3 4.2-1.4-1.5 1.8-1.7h-7.1v-2h7.1l-1.8-1.7 1.4-1.4z"></path>
            </svg>
          </button>
        </div>

        <div className="flex mt-5">
          <svg
            height="20"
            width="20"
            fill="green"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <path
              d="m12.3 4.8c0-2.7-2.2-4.8-4.8-4.8-2.7 0-4.8 2.2-4.8 4.8s0 0 0 0c0 1.2.3 2.3.9 3.2.7 1.2 4 6.9 4 6.9s3.1-5.3 3.9-6.8c.5-1 .8-2 .8-3.3 0 .1 0 .1 0 0zm-2 0c0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.3 2.8 2.8z"
              id="marker"
            ></path>
          </svg>
          <p>{t("Search.page3.jeweler")}</p>
        </div>
      </div>
    </motion.div>,
    document.getElementById("portal")
  );
};

export default Modal;
