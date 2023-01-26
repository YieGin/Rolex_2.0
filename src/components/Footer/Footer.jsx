import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./styles/Footer.css";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  });
  return (
    <div className="Footer_main1">
      <div style={{ display: "flex", alignItems: "center", columnGap: "20px" }}>
        <svg
          height="51"
          width="51"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          alt=""
          className="languages"
          name="search"
        >
          <path d="m13.05 11.9.06.25-.21.6-.21-.09.02-.5zm-3.31-5.06v.45l.33-.14.09-.14-.35-.65-.21.14.01.17-.2.23-.01.24h.24zm-2.28-1-.36-.1-.45.47.58 1.45.27.06.02-.47.19-.11.01-.18.19-.34-.14-.26zm-.57 5.8-.67-.48-.99-.09-.14.23-.2-.07-.1-.35-.3-.02.12-.34-.24-.02-.25.19-.17-.24.15-.4.67-.09.12.33.17-.02v-.32l.47-.62.59-.31.77-.32-.54-1.16-.25.14-.2-.52-.47.02-.12.93-.17.02-.72-.73.15-.38.74-.14v-.9l-1.85.18-.96-.54-.45.4-1.21-.64-.67.38.25.35h-.27l-.07.27.37.05-.37.28.12.4.32.07-.52.41.81-.38.44-.24.73.43.57.93v.83l.34.62.57.85.69.24.29.13.35.43.24-.04-.27.42.22.85.47.4-.57 2.2.2.47.57.14-.35-.36.47-.85 1.01-.83.08-.38.49-.07.49-.97-.87-.4zm11.79.17-.05.4-.35-.13.06-.22-.39-.03-.5.45-.53.19.13.7-.05.14.2.11.79-.19.31.17.15-.08.1.28.4.11.29-.17.16-.84-.44-.42zm-1.96-.4.42.08.19-.57-.11-.09-.57.34zm3.69-4.6.59-.32-.16-.43-4.29-.58s-2.6.27-4.04.41l-1.24-.22-.5.26-.2.46-.24.17-.01.39.13.08.27-.15.13.4.24-.09.16-.4-.16-.16.14-.3.17-.2.1.01-.1.24-.1.08.04.1-.01.01h.01l.23.59-.2-.07-.14.35-.51-.01-.09-.25-.12.15.04.16-.18.01-.22.3-.41.13.11.21.17.26-.54-.03.03.5.42.06.28-.41.39-.19.17.19.23.3.17-.19-.33-.21-.01-.2.16.07.26.2-.01.2.2.24.09-.3.25.29.44.08-.07.23-.17.1-.64-.16-.16.22-.42-.26-.07-.27-1.04.16-.53.63-.1.84.55.51.99-.06.29.87-.11.5.47 1.09.53-.09.53-.96.29-.22-.08-.67.52-.46.16-.54-.52.23-.53-1.16.11-.02.52.98 1-.58-.34-.25-.26.13-.16-.37.11-.06.23.18.78.14.32.37.29.7.23-.21v-.27l.63-.42.23.47.19-.05.04.47.19.34-.42-.2.31.42.34.31.81.14-.44-.17-.32-.11-.11-.5-.26-.28.01-.28.3.3.29-.23-.27-.39.13-.2.6-.03.27-.48-.19-.53.24-.25.18.23.07.29.21-.11-.08-.33.18-.25.29-.05.34-.9-.29-.2.4-.37.53.03.44-.34.34-.05-.55.64.01.56.42-.5-.02-.35zm-1.6.92h-.11l-.02.56-.29.59-.37.26-.02.24.68-.39.03-.4.23-.2-.18-.14.1-.33zm1.75 5.64.05.43-.5.45.32.03.29-.42.23-.29-.15-.01zm-2.54-2.11.44.43.25.02.11-.09.35.22-.14-.29-.67-.31z"></path>
        </svg>
        <div class="select">
          <select className="Box_en" onChange={onChangeLang}>
            <option style={{ color: "black" }} value="en" className="lang">
              EN
            </option>
            <option style={{ color: "black" }} value="fr" className="lang">
              FR
            </option>
            <option style={{ color: "black" }} value="de" className="lang">
              DE
            </option>
          </select>
        </div>
      </div>
      <div className="Footer_main">
        <ul className="Footer_ul_1">
          <h2 className="Footer_h2_1">Rolex Watches </h2>
          <hr />
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Rolex watches
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                New watches 2022
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Configure your watch
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Watch finder
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Men's watches
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Women's watches
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                History & Watchmaking
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                History & Watchmaking
              </a>
            </li>
          </ul>
          <h2 className="Footer_h2_1">World of Rolex</h2>
          <hr />
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Sports, Arts and Exploration
              </a>
            </li>
          </ul>
          <h2 className="Footer_h2_1">Services</h2>
          <hr />
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Buying a Rolex
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Find a jeweler
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Watch care & service
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Your selection
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Frequently Asked Questions Newsroom
              </a>
            </li>
          </ul>
        </ul>
        <ul className="Footer_ul_1">
          <h2 className="Footer_h2_1">The Collection </h2>
          <hr />
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Air-King
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Cosmograph Daytona
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Datejust
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Lady-Datejust
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Day-Date
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Explorer
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                GMT-Master II
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Milgauss
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Oyster Perpetual
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Sea-Dweller
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Sky-Dweller
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Submariner
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Yacht-Master
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="li-text">
              <a class="A-text" href="#0">
                Cellini
              </a>
            </li>
          </ul>
        </ul>
        <ul className="Footer_ul_1">
          <h2 className="Footer_h2_1">Official Channels</h2>
          <hr />
          <div className="Footer_svg">
            <svg
              className="svg_footer_fill"
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.5 0v2.25h-2.93c-.31 0-.57.32-.57.63v1.62h3.25l-.61 2.25h-2.64v8.25h-2.25v-8.25h-2.25v-2.25h2.25v-1.75c0-1.59 1.17-2.75 2.75-2.75z"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer_svg">
            <svg
              className="svg_footer_fill"
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m10.86 0h-6.72c-2.28 0-4.14 1.86-4.14 4.14v6.72c0 2.28 1.86 4.14 4.14 4.14h6.72c2.28 0 4.14-1.86 4.14-4.14v-6.72c0-2.28-1.86-4.14-4.14-4.14zm0 13.67h-6.72c-1.55 0-2.81-1.26-2.81-2.81v-6.72c0-1.55 1.26-2.81 2.81-2.81h6.72c1.55 0 2.81 1.26 2.81 2.81v6.72c0 1.55-1.26 2.81-2.81 2.81zm-3.36-10.13c-2.13 0-3.87 1.73-3.87 3.87 0 2.13 1.73 3.86 3.87 3.86 2.13 0 3.87-1.73 3.87-3.86 0-2.14-1.74-3.87-3.87-3.87zm0 6.4c-1.4 0-2.53-1.14-2.53-2.53 0-1.4 1.14-2.53 2.53-2.53s2.53 1.14 2.53 2.53-1.13 2.53-2.53 2.53zm4.72-7.25c.18.18.29.43.29.69s-.1.51-.29.69c-.18.18-.43.29-.69.29s-.51-.1-.69-.29c-.18-.18-.29-.43-.29-.69s.1-.51.29-.69c.18-.18.43-.29.69-.29.25.01.51.11.69.29z"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer_svg">
            <svg
              className="svg_footer_fill"
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m15 2.85c-.55.24-1.14.41-1.77.49.64-.38 1.12-.98 1.35-1.7-.6.35-1.25.61-1.96.75-.56-.6-1.36-.97-2.24-.97-1.7 0-3.08 1.38-3.08 3.08 0 .24.03.48.08.7-2.55-.14-4.82-1.37-6.34-3.23-.26.45-.41.98-.41 1.55 0 1.07.54 2.01 1.37 2.56-.51-.02-.98-.16-1.4-.39v.04c0 1.49 1.06 2.74 2.47 3.02-.26.07-.53.1-.81.1-.2 0-.39-.02-.58-.05.39 1.22 1.53 2.11 2.87 2.14-1.05.82-2.38 1.31-3.82 1.31-.25 0-.49-.01-.73-.04 1.36.87 2.98 1.38 4.72 1.38 5.66 0 8.75-4.69 8.75-8.75l-.01-.4c.61-.43 1.13-.97 1.54-1.59zm0 0"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer_svg">
            <svg
              className="svg_footer_fill"
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m15 2.85c-.55.24-1.14.41-1.77.49.64-.38 1.12-.98 1.35-1.7-.6.35-1.25.61-1.96.75-.56-.6-1.36-.97-2.24-.97-1.7 0-3.08 1.38-3.08 3.08 0 .24.03.48.08.7-2.55-.14-4.82-1.37-6.34-3.23-.26.45-.41.98-.41 1.55 0 1.07.54 2.01 1.37 2.56-.51-.02-.98-.16-1.4-.39v.04c0 1.49 1.06 2.74 2.47 3.02-.26.07-.53.1-.81.1-.2 0-.39-.02-.58-.05.39 1.22 1.53 2.11 2.87 2.14-1.05.82-2.38 1.31-3.82 1.31-.25 0-.49-.01-.73-.04 1.36.87 2.98 1.38 4.72 1.38 5.66 0 8.75-4.69 8.75-8.75l-.01-.4c.61-.43 1.13-.97 1.54-1.59zm0 0"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer_svg">
            <svg
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
              className="svg_footer_fill"
            >
              <path d="m13.5 5.34c0 3.18-2.04 5.75-4.87 5.75-.95 0-1.85-.49-2.15-1.06 0 0-.47 1.76-.59 2.2-.19.71-.65 1.57-1.02 2.18-.03.05-.06.11-.1.16-.02.03-.04.05-.05.08-.12.15-.25.29-.39.35 0 0-.16-.13-.25-.58 0-.03-.02-.07-.02-.1-.01-.09-.02-.19-.03-.3 0 0 0 0 0-.01-.06-.7-.08-1.58.07-2.24.17-.72 1.1-4.59 1.1-4.59s-.27-.56-.27-1.38c0-1.29.76-2.24 1.7-2.24.8 0 1.19.59 1.19 1.3 0 .79-.51 1.98-.78 3.08-.22.92.47 1.67 1.39 1.67 1.67 0 2.95-1.73 2.95-4.23 0-2.21-1.62-3.76-3.92-3.76-2.67 0-4.24 1.97-4.24 4.01 0 .79.31 1.65.7 2.11.07.09.08.17.06.26-.07.29-.23.92-.26 1.05-.04.17-.13.2-.31.12-1.18-.54-1.91-2.22-1.91-3.58 0-2.91 2.15-5.59 6.21-5.59 3.26 0 5.79 2.28 5.79 5.34z"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer_svg">
            <svg
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
              className="svg_footer_fill"
            >
              <path d="m15 8.91v5.74h-3.1v-5.36c0-1.34-.47-2.26-1.6-2.26-.86 0-1.39.62-1.62 1.22-.07.21-.11.51-.11.81v5.59h-3.1s.04-9.05 0-10h3.1v1.41c0 .01.01.01 0 .01v-.01c.48-.68 1.17-1.66 2.83-1.66 2.05 0 3.6 1.43 3.6 4.51zm-13.32-8.55c-1.02 0-1.68.72-1.68 1.66 0 .93.64 1.67 1.64 1.67h.02c1.03 0 1.68-.74 1.68-1.67-.03-.94-.65-1.66-1.66-1.66zm-1.44 14.28h2.86v-10h-2.86z"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer_svg">
            <svg
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
              className="svg_footer_fill"
            >
              <path d="m7.5 0c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13.06c-3.07 0-5.56-2.5-5.56-5.56s2.5-5.56 5.56-5.56 5.56 2.5 5.56 5.56-2.49 5.56-5.56 5.56zm-1.94-9.43 4.84 3.87-4.84 3.87z"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  Youku
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer_svg">
            <svg
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
              className="svg_footer_fill"
            >
              <path d="m10.16 5.34c.84 0 1.63.15 2.35.41.04-.24.07-.49.07-.74 0-2.76-2.82-5.01-6.29-5.01s-6.29 2.25-6.29 5.02c0 1.43.75 2.72 1.96 3.63l-.02-.01s.43.28.31.86-.22.99-.14 1.11.29-.02 1.19-.57c.41-.28.77-.29 1-.26.33-2.5 2.83-4.44 5.86-4.44zm-1.79-2.74c.48 0 .87.37.87.83s-.39.83-.87.83-.87-.37-.87-.83.39-.83.87-.83zm-5.04.83c0-.46.39-.83.87-.83s.87.37.87.83-.39.83-.87.83-.87-.37-.87-.83zm11.67 6.97c0-2.27-2.17-4.11-4.84-4.11s-4.84 1.84-4.84 4.11 2.17 4.11 4.84 4.11c.47 0 .91-.06 1.34-.16l-.01.01s.01 0 .02-.01c.06-.01.12-.03.18-.05.18-.03.46-.02.79.21.69.45.86.56.92.47.06-.1-.02-.43-.11-.91-.1-.48.24-.7.24-.7l-.01.01c.9-.76 1.48-1.81 1.48-2.98zm-6.44-.63c-.37 0-.67-.3-.67-.68s.3-.68.67-.68.67.3.67.68-.3.68-.67.68zm3.21 0c-.37 0-.67-.3-.67-.68s.3-.68.67-.68.67.3.67.68-.3.68-.67.68z"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  WeChat
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer_svg">
            <svg
              height="15"
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
              className="svg_footer_fill"
            >
              <path d="m11.07 7.59c-.25-.09-.33-.09-.25-.44.25-.62.25-1.24 0-1.59-.49-.71-1.8-.71-3.28 0 0 0-.49.27-.33-.18.25-.8.16-1.51-.16-1.86-.82-.89-2.95 0-4.84 2.04-1.39 1.5-2.21 3.09-2.21 4.51 0 2.66 3.11 4.43 6.15 4.43 4.02 0 6.64-2.75 6.64-4.7.08-1.24-.9-1.95-1.72-2.21zm-4.84 5.67c-2.46.27-4.51-.97-4.67-2.66-.17-1.77 1.64-3.37 4.1-3.63 2.46-.27 4.51.89 4.67 2.66s-1.64 3.36-4.1 3.63zm8.77-7.89c0-2.66-2.05-4.87-4.51-4.87-.33 0-.49.27-.49.53 0 .35.25.53.49.53 1.89 0 3.44 1.68 3.44 3.72 0 .35.25.53.49.53.42.18.58-.08.58-.44zm-2.05-.09c-.25-1.24-1.15-2.3-2.38-2.57-.24-.08-.57.18-.65.45s.16.62.41.71c.74.18 1.39.8 1.56 1.68.08.27.33.53.66.44.24-.08.48-.35.4-.71zm-7.95 3.46c-.98.18-1.64 1.06-1.48 1.95s1.07 1.42 2.05 1.24 1.64-1.06 1.48-1.95c-.16-.97-1.07-1.51-2.05-1.24z"></path>
            </svg>
            <ul class="menu">
              <li class="li-text">
                <a class="A-text" href="#0">
                  Weibo
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <h3 className="Copyright">
        © Copyright 2022 – Yie. All Rights Reserved.
      </h3>
    </div>
  );
};

export default Footer;
