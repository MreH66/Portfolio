import c from "./buttonComp.module.css";

function ButtonComp({ selected, text, fun, fun2, children }) {
  return (
    <>
      <button className={c.buttonMain}>
        <span
          onClick={() => {
            if (selected === text) {
              fun("");
              fun2(false);
              return;
            }
            fun(text);
            fun2(false);
          }}
          className={selected === text ? c.box + " " + c.buttonSelected : c.box}
        >
          {children}
        </span>
      </button>
    </>
  );
}

export default ButtonComp;
