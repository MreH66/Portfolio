import c from "./aboutMe.module.css";

import MainImgWebShop from "../../../pictures/webshop/webshop1.jpg";
import ImgSecondSite from "../../../pictures/secondWebsite/WebSite1.jpg";
import SkillsComp from "./skillsComp";

const mainArr = [
  { title: "Markup,styling and presentation", skills: ["HTML", "CSS", "SASS"] },
  {
    title: "Programming languages",
    skills: ["JavaScript", "TypeScipt"],
  },
  {
    title: "Library and frameworks",
    skills: ["Bootstrap", "React", "Next.js"],
  },
  { title: "Back-end", skills: ["Firebase"] },
];

function AbouteMe({ infoType }) {
  if (!infoType) {
    return (
      <>
        <div className={c.mainDivOnlyTextMainPage}>
          <p className={c.textFirstMainPage}>Welcome to my portfolio</p>
          <p></p>
        </div>
      </>
    );
  } else if (infoType === "about") {
    return (
      <>
        <div className={c.textDivScrollOnly}>
          <div className={c.mainDivOnlyText}>
            <p className={c.textFirst}>About me</p>
            <p className={c.textSecond}>
              I started programing in 2022 so far it was amazing journey, always
              ready for new challenges
            </p>
          </div>
        </div>
      </>
    );
  } else if (infoType === "skills") {
    return (
      <>
        <div className={c.scrollDiv}>
          <div className={c.mainDivScroll}>
            {mainArr.map((item) => {
              return (
                <div key={Math.random()}>
                  <SkillsComp skill={item.skills} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else if (infoType === "work") {
    return (
      <>
        <div className={c.mainDivSecond}>
          <p className={c.projectsText}>Projects</p>
          <div className={c.gridProjects}>
            <div>
              <h3 className={c.textImage}>Web shop</h3>
              <img className={c.imgWebShop} src={MainImgWebShop} />
              <div className={c.buttonDiv}>
                <button className={c.buttonLink}>
                  <a className={c.mainLinks} href="/webshop">
                    <span className={c.spanMain}>More</span>
                  </a>
                </button>
              </div>
            </div>
            <div>
              <h3 className={c.textImage}>Lending page</h3>
              <img className={c.imgWebShop} src={ImgSecondSite} />
              <div className={c.buttonDiv}>
                <button className={c.buttonLink}>
                  <a className={c.mainLinks} href="website">
                    <span className={c.spanMain}>More</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <p className={c.projectsText}>Find more on my github</p>
        </div>
      </>
    );
  }
}

export default AbouteMe;
