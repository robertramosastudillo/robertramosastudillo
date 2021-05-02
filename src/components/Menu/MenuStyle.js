import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../../themes/device"

const Header = styled.header`
  display: flex;
  width: 100%;
  position: relative;

  @media ${device.laptop} {
    width: 30%;
  }
`

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 4rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #000;

  @media ${device.laptop} {
    width: 100%;
    height: 100%;
  }
`

const Ul = styled.ul`
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: column;
  }
`

const Li = styled.li`
  margin: 0 20px;
  font-weight: bold;
  list-style: none;

  @media ${device.laptop} {
    margin: 20px auto;
  }
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

  @media ${device.laptop} {
    font-size: 36px;
  }
`

export { Header, Nav, Ul, Li, RouterLink }
