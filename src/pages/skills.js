import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import TechnicalSkills from "../components/TechnicalSkills"
import ProfessionalSkills from "../components/ProfessionalSkills/ProfessionalSkills"
import { Container } from "../themes/global-style"

const SkillsPage = () => (
  <BasicLayout>
    <Container>
      <TechnicalSkills />
      <ProfessionalSkills />
    </Container>
  </BasicLayout>
)

export default SkillsPage
