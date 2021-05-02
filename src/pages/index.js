import * as React from "react"
import Profile from "../components/Profile/Profile"
import BasicLayout from "../layouts/BasicLayout"
import { Container } from "../themes/global-style"

const IndexPage = () => (
  <BasicLayout>
    <Container>
      <Profile />
    </Container>
  </BasicLayout>
)

export default IndexPage
