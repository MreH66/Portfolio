// import c from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import Backgound from "./components/back-ground/backGround";
import Header from "./components/header/header";
import MainPage from "./components/mainComp/mainPage";
import WebsitePage from "./components/webshopPage/webShop";

// WEBSHOP
import MainPic from "./pictures/webshop/webshop1.jpg";
import SecondPic from "./pictures/webshop/webshop2.jpg";
import ThridPic from "./pictures/webshop/webshop3.jpg";
import ForthPic from "./pictures/webshop/webshop4.jpg";

//Landing page
import LandingPageImg from "./pictures/secondWebsite/WebSite1.jpg";
import LandginPageSecondImg from "./pictures/secondWebsite/LandingPage.jpg";

// WEBSHOP
const webShopPic = [
  { pic: MainPic, num: 0 },
  { pic: ForthPic, num: 1 },
  { pic: ThridPic, num: 2 },
  { pic: SecondPic, num: 3 },
];
const textWebShop = {
  title: "Web shop",
  about:
    "Dynamic web shop with functionality for admin to post new items to shop",
  skills:
    " HTML , CSS , JavaScript , React , React router dom , Firebase (Firestore, Authentication , storage) ...",
};

// LANDING PAGE
const landingPagePic = [
  { pic: LandingPageImg, num: 0 },
  { pic: LandginPageSecondImg, num: 1 },
];

const textLendingPage = {
  title: "Landing Page",
  about: "Site made to show my basic skills in front-end web development",
  skills: "HTML , CSS , JavaScript , Next.js",
};

function App() {
  return (
    <>
      <Backgound>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainPage />
              </>
            }
          />
          <Route
            path="/webshop"
            element={
              <>
                <WebsitePage pics={webShopPic} text={textWebShop} />
              </>
            }
          />
          <Route
            path="/website"
            element={
              <>
                <WebsitePage pics={landingPagePic} text={textLendingPage} />
              </>
            }
          />
        </Routes>
      </Backgound>
    </>
  );
}

export default App;
