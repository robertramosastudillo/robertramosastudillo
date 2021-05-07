import React from "react"
import Projects from "../components/Projects/Projects"
import BasicLayout from "../layouts/BasicLayout"
import { Container } from "../themes/global-style"
import Seo from "../components/Seo"

const ProjectsPage = () => (
  <BasicLayout>
    <Seo title="Proyectos" />
    <Container>
      <Projects />
    </Container>
  </BasicLayout>
)

export default ProjectsPage
