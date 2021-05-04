import styled from "styled-components"
import { device } from "../../themes/device"

const ProfessionalSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 40px auto;
`

const ProfessionalSkillsArea = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  gap: 10px;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(60px, 120px));
  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(80px, 160px));
  }
`
const Skill = styled.div`
  text-align: center;
`

const SkillTitle = styled.div`
  font-size: 18px;
  margin: 10px;
`

export {
  ProfessionalSkillsContainer,
  ProfessionalSkillsArea,
  Skill,
  SkillTitle,
}
