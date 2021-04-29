import styled from "styled-components"

const ProfessionalSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 40px auto;
`

const ProfessionalSkillsArea = styled.div`
  width: 100%;
  margin: 40px auto 0 auto;
  display: grid;
  gap: 10px;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(70px, 140px));
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
