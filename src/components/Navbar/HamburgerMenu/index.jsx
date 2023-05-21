import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../../Context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const HamburgerMenu = () => {
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
      {menu && (
        <motion.div
          ref={ref2}
          variants={DivScrollTop}
          initial="hidden"
          className="bg-white w-[100%] h-[250px] top-[-20%] duration-100 fixed
          z-50 flex flex-col items-center justify-center mt-[22%] gap-y-5 sm:mt-[10%] phone:mt-[14%]"
          animate={controls2}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0, 0.701, 0.5, 1.01],
          }}
        >
          <div className=" flex flex-col gap-y-5 text-justify font-semibold mt-5 phone:mt-0">
            <Link onClick={() => setMenu(false)} to="/Watches">
              <motion.ul
                ref={ref}
                variants={DivScrollTop}
                initial="hidden"
                className="menu relative top-[-200px] z-50"
                animate={controls}
                transition={{
                  duration: 1.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <li className="li-text">
                  <a className="A-text" href="#0">
                    <p className="text-black text-[25px] upad:text-[30px]">
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
                  duration: 1.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <li className="li-text">
                  <a className="A-text" href="#0">
                    <p className="text-black text-[25px] upad:text-[30px]">
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
                  duration: 1.9,
                  delay: 1.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <li className="li-text">
                  <a className="A-text" href="#0">
                    <p className="text-black text-[25px] upad:text-[30px]">
                      {t("Navbar.welcome.store")}
                    </p>
                  </a>
                </li>
              </motion.ul>
            </Link>
          </div>
          <Link onClick={() => setMenu(false)} to="./cart">
            <motion.div
              ref={ref}
              variants={DivScrollTop}
              initial="hidden"
              className="flex items-center gap-x-1 relative top-[50px] z-50"
              animate={controls}
              transition={{
                duration: 1.8,
                delay: 1.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <p className="text-black font-bold text-[25px] upad:text-[30px]">
                {t("Navbar.welcome.selection")}
                <span className="text-green-600 z-50">({totalQuantity})</span>
              </p>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;
