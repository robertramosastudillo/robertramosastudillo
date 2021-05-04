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
  },
  {
    title: "Trabajo en Equipo",
    percent: 90,
  },
  {
    title: "Proactivo",
    percent: 75,
  },
  {
    title: "Pensamiento Critico",
    percent: 85,
  },
  {
    title: "Organización",
    percent: 85,
  },
  {
    title: "Comunicación eficaz",
    percent: 85,
  },
  {
    title: "Iniciativa",
    percent: 75,
  },
  {
    title: "Creatividad",
    percent: 80,
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
                  styles={buildStyles({
                    pathTransition:
                      percentage === 0
                        ? "none"
                        : "stroke-dashoffset 2s ease 0s",
                    textColor: "#000",
                    trailColor: "#ccc",
                    pathColor: "#49c7d8",
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
