import React from "react"
import NotFound from "../components/NotFound"
import Seo from "../components/Seo"
import BasicLayout from "../layouts/BasicLayout"
import { Container } from "../themes/global-style"

const NotFoundPage = () => (
  <BasicLayout>
    <Seo title="404" />
    <Container>
      <NotFound />
    </Container>
  </BasicLayout>
)

export default NotFoundPage
