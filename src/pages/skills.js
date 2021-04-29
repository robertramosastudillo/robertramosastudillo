import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import TechnicalSkills from "../components/TechnicalSkills"
import ProfessionalSkills from "../components/ProfessionalSkills/ProfessionalSkills"

const SkillsPage = () => (
  <BasicLayout>
    <TechnicalSkills />
    <ProfessionalSkills />
  </BasicLayout>
)

export default SkillsPage
