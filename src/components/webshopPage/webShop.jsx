import c from "./webShop.module.css";

import { useEffect, useState } from "react";

import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function WebsitePage({ pics, text }) {
  const [picNumber, setPicNumber] = useState(0);
  const [linkText, setLinkText] = useState("");

  useEffect(() => {
    if (location.pathname.substring(1) === "webshop") {
      setLinkText("https://web-shop1.vercel.app/");
    } else if (location.pathname.substring(1) === "website") {
      setLinkText("https://basics1-drab.vercel.app/");
    }
  });

  function handleClick(side) {
    switch (side) {
      case "left":
        if (picNumber === 0) {
          setPicNumber(pics.length - 1);
          return;
        }
        setPicNumber(picNumber - 1);
        break;
      case "right":
        if (picNumber === pics.length - 1) {
          setPicNumber(0);
          return;
        }
        setPicNumber(picNumber + 1);
        break;
    }
  }

  return (
    <>
      <div className={c.holePage}>
        <Link className={c.mainLinkWebSite} to="/">
          <IoArrowBackSharp className={c.iconBack} size={80} />
        </Link>

        <Link className={c.mainLinkWebSite} target="_blank" to={linkText}>
          <h2 className={c.mainHeader + " " + c.mainLinkWidth}>{text.title}</h2>
        </Link>

        <div className={c.mainDiv}>
          <div className={c.mainTextInfoDiv}>
            <div>
              <h3 className={c.textHeaderSecond}>About</h3>
              <p className={c.mainText}>{text.about}</p>
            </div>
            <div>
              <h3 className={c.textHeaderSecond}>Technologies used</h3>
              <p className={c.mainText}>{text.skills}</p>
            </div>
          </div>
          <div className={c.imgDiv}>
            <div
              onClick={() => {
                handleClick("left");
              }}
              className={c.divIconsRight}
            >
              <GoChevronLeft size={80} className={c.icon} />
            </div>
            <img className={c.mainImg} src={pics[picNumber].pic} />
            <div
              onClick={() => {
                handleClick("right");
              }}
              className={c.divIconsLeft}
            >
              <GoChevronRight size={80} className={c.icon} />
            </div>
          </div>
          <div className={c.divDots}>
            {pics.map((item) => {
              return (
                <p
                  key={item.num}
                  className={
                    item.num === picNumber ? c.dot + " " + c.colorDot : c.dot
                  }
                >
                  .
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WebsitePage;
