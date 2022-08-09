import type { NextPage } from "next";
import { ISkills } from "../typings";
import { Skill } from "./Skill";

interface ISKillsProps {
  skills: ISkills[];
}

export const Skills: NextPage<ISKillsProps> = ({ skills }) => {
  const languages = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "languages");
  const backend = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "backend");
  const frontend = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "frontend");
  const headlessCms = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "headless cms");
  const testing_tools = skills?.filter(
    skill =>
      skill?.fieldType?.toLowerCase() === "testing" || skill?.fieldType?.toLowerCase() === "tools"
  );
  // const familiar = skills?.filter(skill => skill?.proficient === false);

  return (
    <>
      <h1 className="skills_heading">Skills</h1>
      <div className="skills_box">
        <Skill skills={languages} skill="Languages" />
        <Skill skills={backend} skill="Backend" />
        <Skill skills={frontend} skill="Frontend" />
        <Skill skills={headlessCms} skill="Headless CMS" />
        <Skill skills={testing_tools} skill="Tools" />

      </div>
    </>
  );
};
