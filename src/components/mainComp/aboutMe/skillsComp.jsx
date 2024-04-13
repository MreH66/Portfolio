import c from "./skillsComp.module.css";

function SkillsComp({ skill, title }) {
  return (
    <>
      <h3 className={c.skillsType}>{title}</h3>
      {skill.map((item) => {
        return (
          <div key={item} className={c.sketchy}>
            <p className={c.textOne}>{item}</p>
          </div>
        );
      })}
    </>
  );
}

export default SkillsComp;
