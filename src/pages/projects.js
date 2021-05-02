import React from "react"
import Projects from "../components/Projects/Projects"
import BasicLayout from "../layouts/BasicLayout"
import { Container } from "../themes/global-style"

const ProjectsPage = () => (
  <BasicLayout>
    <Container>
      <Projects />
    </Container>
  </BasicLayout>
)

export default ProjectsPage
