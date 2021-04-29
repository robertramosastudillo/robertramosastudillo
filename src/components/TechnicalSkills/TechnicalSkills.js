import React from "react"
import {
  TechnicalSkillsArea,
  TechnicalSkillsContainer,
  Skill,
  SkillTitle,
  SkillBar,
  SkillFill,
  SkillPercent,
} from "./TechnicalSkillsStyle"

const TechnicalSkills = () => {
  const technicalSkills = [
    {
      title: "HTML",
      percent: "85%",
    },
    {
      title: "CSS",
      percent: "70%",
    },
    {
      title: "Javascript",
      percent: "90%",
    },
    {
      title: "React JS",
      percent: "75%",
    },
    {
      title: "Node JS",
      percent: "75%",
    },
    {
      title: "Gatsby JS",
      percent: "70%",
    },
    {
      title: "MondoDB",
      percent: "60%",
    },
    {
      title: "PostgreSQL",
      percent: "70%",
    },
    {
      title: "Test",
      percent: "100",
    },
  ]

  return (
    <TechnicalSkillsContainer>
      <h2>Habilidades Tecnicas</h2>
      <TechnicalSkillsArea>
        {technicalSkills.map((technicalSkill, index) => (
          <Skill key={index}>
            <SkillTitle>{technicalSkill.title}</SkillTitle>
            <SkillBar></SkillBar>
            <SkillFill percent={technicalSkill.percent}>
              <SkillPercent>{technicalSkill.percent}</SkillPercent>
            </SkillFill>
          </Skill>
        ))}
      </TechnicalSkillsArea>
    </TechnicalSkillsContainer>
  )
}

export default TechnicalSkills
