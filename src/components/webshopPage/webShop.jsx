import c from "./webShop.module.css";

import { useEffect, useState } from "react";

import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function WebsitePage({ pics, text }) {
  const [linkText, setLinkText] = useState("");

  useEffect(() => {
    if (location.pathname.substring(1) === "webshop") {
      setLinkText("https://github.com/MreH66/web-shop1");
    } else if (location.pathname.substring(1) === "website") {
      setLinkText("https://basics1-drab.vercel.app/");
    }
  });

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
          <div className={c.imgDivSmallScreen}>
            <>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {pics.map((pic) => {
                  return (
                    <>
                      <SwiperSlide>
                        <img className={c.mainImg} src={pic.pic}></img>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebsitePage;