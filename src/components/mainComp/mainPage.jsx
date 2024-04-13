import { useState } from "react";
import c from "./mainPage.module.css";

import MainImg from "../../assets/mainImage.jpg";

import AbouteMe from "./aboutMe/aboutMe";

import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import { Link } from "react-router-dom";
import ButtonComp from "./buttonComp";

function MainPage() {
  const [changeInfo, setChangeInfo] = useState("");

  const [popUpText, setPopUpText] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText("mrehehe");
    setPopUpText(true);
    setTimeout(() => {
      setPopUpText(false);
    }, 4000);
  }

  return (
    <>
      <div className={popUpText ? c.popUpDiv : c.popUpDelete}>
        <p className={popUpText ? c.popUpText : c.popUpDelete}>
          discord id copyed to clipboard
        </p>
      </div>

      <p className={c.mainTextInfo}>Self taught front-end web developer</p>

      <div className={c.infoMainDiv}>
        <div className={c.iconShowOptions}>
          <FiAlignCenter
            onClick={() => {
              setShowInfo(!showInfo);
            }}
            className={c.iconOptions}
            size={50}
          />
        </div>
        <div className={c.bigScreens}>
          <div className={c.gridInfo}>
            <ButtonComp
              fun={setChangeInfo}
              fun2={() => {}}
              selected={changeInfo}
              text={"about"}
            >
              About me
            </ButtonComp>

            <ButtonComp
              fun={setChangeInfo}
              fun2={() => {}}
              selected={changeInfo}
              text={"skills"}
            >
              Skills
            </ButtonComp>

            <ButtonComp
              fun={setChangeInfo}
              fun2={() => {}}
              selected={changeInfo}
              text={"work"}
            >
              my work
            </ButtonComp>
          </div>
        </div>
      </div>
      <div className={c.mainDiv}>
        <div className={c.aboutMe}>
          <div className={showInfo ? c.show : c.dontShow}>
            <div className={c.buttonsPhone}>
              <ButtonComp
                fun={setChangeInfo}
                fun2={setShowInfo}
                selected={changeInfo}
                text={"about"}
              >
                About me
              </ButtonComp>

              <ButtonComp
                fun={setChangeInfo}
                fun2={setShowInfo}
                selected={changeInfo}
                text={"skills"}
              >
                Skills
              </ButtonComp>

              <ButtonComp
                fun={setChangeInfo}
                fun2={setShowInfo}
                selected={changeInfo}
                text={"work"}
              >
                my work
              </ButtonComp>
            </div>
          </div>
          {showInfo ? null : (
            <>
              <AbouteMe infoType={changeInfo} />
            </>
          )}
        </div>

        <div className={c.MainLinksAndImgDiv}>
          <div className={changeInfo !== "" ? c.hideImage : c.divImg}>
            <img
              className={c.mainImg}
              src={MainImg}
              alt="picture of boy coding"
            />
          </div>

          <div
            className={
              changeInfo !== "" ? c.postionWithOutImg : c.positionLinksGrid
            }
          >
            <div
              className={
                popUpText
                  ? c.gridLinks + " " + c.onlyOneDiv
                  : c.gridLinks + " " + c.twoDivs
              }
            >
              <Link
                className={c.up1}
                target="_blank"
                to={"https://github.com/MreH66"}
              >
                <div className={c.colorDiv + " " + c.up1}>
                  <FaGithub className={c.icon} />
                </div>
              </Link>

              <div onClick={handleClick} className={c.colorDiv + " " + c.up2}>
                <FaDiscord className={c.icon2} />
              </div>

              <Link
                className={c.down1}
                target="_blank"
                to="https://www.linkedin.com/in/marko-gvozdenov-0a74012a1/"
              >
                <div className={c.colorDiv + " " + c.down1}>
                  <FaLinkedin className={c.icon3} size={65} />
                </div>
              </Link>

              <div className={c.colorDiv + " " + c.down2}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
