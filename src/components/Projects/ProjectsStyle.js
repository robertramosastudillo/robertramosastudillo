import styled from "styled-components"
import { device } from "../../themes/device"

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 40px auto;
`

const ProjectsArea = styled.div`
  width: 100%;
  height: auto;
  column-count: 2;
  margin-top: 20px;
  column-gap: 20px;

  @media ${device.tablet} {
    column-count: 3;
  }

  @media ${device.laptop} {
    column-count: 4;
  }
`

const Project = styled.div`
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin-bottom: 20px;
  break-inside: avoid;

  /* &:hover { */
  /* background: #46bac9; */
  /* box-shadow: 0px 0px 16px #3996a3; */
  /* } */
`
const ImageContainer = styled.div`
  position: relative;
  &:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 16px 16px 0 0;
    background-color: #49c7d8;
    opacity: 0.1;
  }

  /* &:hover {
    &:after {
      opacity: 0.7;
    }
  } */
`

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  object-position: top;
`

const Details = styled.div`
  text-align: center;
  padding: 20px 10px;
  background: #151515;
  box-shadow: 0px 0px 16px #151515;
  border-radius: 0 0 16px 16px;
`

const Title = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fffcff;
  font-weight: 600;
  font-size: 18px;
  margin: 0px 0 15px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #49c7d8;
  }
`

const Text = styled.p`
  color: #fffcff;
  font-size: 14px;
  font-weight: 400;
`

export {
  ProjectsContainer,
  ProjectsArea,
  Project,
  ImageContainer,
  Image,
  Details,
  Title,
  Text,
}
