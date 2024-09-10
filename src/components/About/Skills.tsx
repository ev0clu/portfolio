import { skillsConfig } from "@/config/skills";
import SkillTooltip from "./SkillTooltip";

const Skills = () => {
  return (
    <div className="my-5 grid min-w-[300px] grid-cols-3 justify-items-center gap-10 sm:grid-cols-5">
      {skillsConfig.map((skill) => (
        <SkillTooltip
          key={skill.name}
          Icon={skill.icon}
          tileClassName={
            "h-20 w-20 sm:h-24 sm:w-24 rounded-md bg-accent p-5 hover:text-emerald-500 hover:cursor-default"
          }
          tooltipClassName={
            "bg-stone-500 border-0 text-emerald-300 font-semibold"
          }
          tooltipText={skill.name}
        />
      ))}
    </div>
  );
};

export default Skills;
