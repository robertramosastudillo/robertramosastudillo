import * as React from "react"
import Profile from "../components/Profile/Profile"
import Seo from "../components/Seo"
import BasicLayout from "../layouts/BasicLayout"
import { Container } from "../themes/global-style"

const IndexPage = () => (
  <BasicLayout>
    <Seo title="Inicio" />
    <Container>
      <Profile />
    </Container>
  </BasicLayout>
)

export default IndexPage
