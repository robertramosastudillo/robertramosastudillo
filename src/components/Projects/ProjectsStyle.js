import styled from "styled-components"
import { device } from "../../themes/device"

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 40px auto;
  /* border: 1px solid red; */

  /* @media ${device.laptopL} {
    height: 100%;
    justify-content: center;
  } */
`

const ProjectsArea = styled.div`
  width: 100%;
  height: auto;
  column-count: 2;
  margin-top: 20px;
  column-gap: 20px;
  /* border: 1px solid red; */

  @media ${device.tablet} {
    column-count: 3;
  }

  @media ${device.laptop} {
    column-count: 4;
  }
`
const Image = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  /* object-position: top; */
`

const Project = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 16px;
  background-color: #fff;
  /* box-shadow: 0 5px 25px #d4d4d4; */
  /* border: 1px solid red; */
  break-inside: avoid;
`
const Title = styled.h4`
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  color: #3a3c46;
  font-weight: 500;
  padding: 10px 0;
`

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #3a3c46;
  font-weight: 500;
  padding: 10px 0;
`

export { ProjectsContainer, ProjectsArea, Project, Image, Title, Text }
