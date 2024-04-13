import c from "./backGround.module.css";

function Backgound({ children }) {
  return (
    <>
      <div className={c.mainDiv}>{children}</div>

      <div className={c.area}>
        <ul className={c.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Backgound;
