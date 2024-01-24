import Skill from "./Skill";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="lightblue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Node.js/Express.js" emoji="💪" color="orangered" />
      <Skill skill="PHP" emoji="👶" color="green" />
    </div>
  );
}
