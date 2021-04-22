import styled from "styled-components"
import { Link } from "gatsby"

const Header = styled.header`
  position: relative;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin: 0 auto;
  background-color: #000;
`

const Ul = styled.ul`
  display: flex;
  justify-content: center;
`

const Li = styled.li`
  margin: 0 20px;
  font-weight: bold;
  list-style: none;
`

const activeClassName = "active"
const RouterLink = styled(Link).attrs({
  activeClassName: activeClassName,
})`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &.${activeClassName} {
    color: #49c7d8;
    text-decoration: underline;
  }
  &:hover {
    color: #49c7d8;
    text-decoration: underline;
  }
`

export { Header, Nav, Ul, Li, RouterLink }
