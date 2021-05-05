import React from "react"
import {
  ProfessionalSkillsArea,
  ProfessionalSkillsContainer,
  Skill,
  SkillTitle,
} from "./ProfessionalSkillsStyle"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

import ChangingProgressProvider from "./ChangingProgressProvider"

const professionalSkills = [
  {
    title: "Autodidacta",
    percent: 85,
    color: "#49c7d8",
  },
  {
    title: "Trabajo en Equipo",
    percent: 90,
    color: "#3FB4C3",
  },
  {
    title: "Proactivo",
    percent: 75,
    color: "#5ACFDF",
  },
  {
    title: "Pensamiento Critico",
    percent: 85,
    color: "#47B6C4",
  },
  {
    title: "Organización",
    percent: 85,
    color: "#59D3E2",
  },
  {
    title: "Comunicación eficaz",
    percent: 85,
    color: "#7DC2CB",
  },
  {
    title: "Iniciativa",
    percent: 75,
    color: "#77D0DC",
  },
  {
    title: "Creatividad",
    percent: 80,
    color: "#59ACB8",
  },
]

const ProfessionalSkills = () => {
  return (
    <ProfessionalSkillsContainer>
      <h2>Hablidades Profesionales</h2>
      <ProfessionalSkillsArea>
        {professionalSkills.map((professionalSkill, index) => (
          <Skill key={index}>
            <ChangingProgressProvider values={[0, professionalSkill.percent]}>
              {percentage => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  strokeWidth={9}
                  styles={buildStyles({
                    pathTransition:
                      percentage === 0
                        ? "none"
                        : "stroke-dashoffset 2s ease 0s",
                    textColor: "#000",
                    trailColor: "#ccc",
                    pathColor: professionalSkill.color,
                  })}
                />
              )}
            </ChangingProgressProvider>
            <SkillTitle>{professionalSkill.title}</SkillTitle>
          </Skill>
        ))}
      </ProfessionalSkillsArea>
    </ProfessionalSkillsContainer>
  )
}

export default ProfessionalSkills
