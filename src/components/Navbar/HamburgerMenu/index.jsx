import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../../Context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const HamburgerMenu = ({ setShow }) => {
  const { totalQuantity } = useSelector((state) => state.AllCart);
  const { menu, setMenu } = useContext(ContextProvider);
  const { t } = useTranslation();

  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };
  const DivScrollTop = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  return (
    <div>
      {menu ? (
        <motion.div
          ref={ref2}
          variants={textScrollVariants}
          initial="hidden"
          className="bg-zinc-900 w-[100%] h-[100%] duration-500 fixed right-[200px]
          z-50 flex flex-col  gap-y-[10%] px-[10%] lg:hidden"
          animate={controls2}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0, 0.701, 0.5, 1.01],
          }}
        >
          <div className="flex items-center lg:mt-[50%] mt-[20%] justify-between">
            <motion.div
              onClick={() => setShow(true)}
              ref={ref}
              variants={DivScrollTop}
              initial="hidden"
              className="flex text-center cursor-pointer items-center gap-x-2 relative top-[-50px] z-50"
              animate={controls}
              transition={{
                duration: 1.8,
                delay: 2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
              </svg>
              <p className="text-white text-[20px] phone:text-[25px]">
                {t("Navbar.welcome.search")}
              </p>
            </motion.div>
            <Link onClick={() => setMenu(false)} to="./cart">
              <motion.div
                ref={ref}
                variants={DivScrollTop}
                initial="hidden"
                className="flex items-center gap-x-1 relative top-[50px] z-50"
                animate={controls}
                transition={{
                  duration: 1.8,
                  delay: 2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <p className="text-white font-bold upad:text-[30px] text-[20px] phone:text-[25px]">
                  {t("Navbar.welcome.selection")}
                  <span className="text-green-600 z-50">({totalQuantity})</span>
                </p>
              </motion.div>
            </Link>
          </div>
          <div className=" flex flex-col gap-y-[50px] items-center font-semibold mt-5 phone:mt-0">
            <Link onClick={() => setMenu(false)} to="/Watches">
              <motion.ul
                ref={ref}
                variants={DivScrollTop}
                initial="hidden"
                className="menu relative top-[-200px] z-50"
                animate={controls}
                transition={{
                  duration: 1.8,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <li className="li-text">
                  <a className="A-text" href="#0">
                    <p className="text-white text-[25px] upad:text-[30px]">
                      {t("Navbar.welcome.watches")}
                    </p>
                  </a>
                </li>
              </motion.ul>
            </Link>
            <Link onClick={() => setMenu(false)} to="/Rolex">
              <motion.ul
                ref={ref}
                variants={DivScrollTop}
                initial="hidden"
                className="menu relative top-[-200px]"
                animate={controls}
                transition={{
                  duration: 2,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <li className="li-text">
                  <a className="A-text" href="#0">
                    <p className="text-white text-[25px] upad:text-[30px]">
                      {t("Navbar.welcome.worold")}
                    </p>
                  </a>
                </li>
              </motion.ul>
            </Link>
            <Link onClick={() => setMenu(false)} to="/StoreLocator">
              <motion.ul
                ref={ref}
                variants={DivScrollTop}
                initial="hidden"
                className="menu relative top-[-200px]"
                animate={controls}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <li className="li-text">
                  <a className="A-text" href="#0">
                    <p className="text-white text-[25px] upad:text-[30px]">
                      {t("Navbar.welcome.store")}
                    </p>
                  </a>
                </li>
              </motion.ul>
            </Link>
          </div>
        </motion.div>
      ) : (
        <motion.div
          ref={ref2}
          variants={textScrollVariants}
          initial="hidden"
          className="bg-zinc-900 w-[0%] h-[100%] duration-500 fixed lg:hidden"
          animate={controls2}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0, 0.701, 0.5, 1.01],
          }}
        ></motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;
