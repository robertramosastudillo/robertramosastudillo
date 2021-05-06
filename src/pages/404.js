import React from "react"
import NotFound from "../components/NotFound"
import BasicLayout from "../layouts/BasicLayout"
import { Container } from "../themes/global-style"

const NotFoundPage = () => (
  <BasicLayout>
    <Container>
      <NotFound />
    </Container>
  </BasicLayout>
)

export default NotFoundPage
