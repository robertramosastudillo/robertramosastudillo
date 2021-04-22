import React from "react"
import { Header, Nav, Ul, Li, RouterLink } from "./MenuStyle"

const Menu = () => {
  return (
    <Header>
      <Nav>
        <Ul>
          <Li>
            <RouterLink to="/">Inicio</RouterLink>
          </Li>
          <Li>
            <RouterLink to="/skills">Skills</RouterLink>
          </Li>
          <Li>
            <RouterLink to="/projects">Proyectos</RouterLink>
          </Li>
        </Ul>
      </Nav>
    </Header>
  )
}

export default Menu
