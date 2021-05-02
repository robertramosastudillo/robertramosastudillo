import styled from "styled-components"
import { device } from "../../themes/device"

const TechnicalSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 40px auto;
  /* border: 1px solid red; */
  @media ${device.laptopL} {
    height: 100%;
    justify-content: center;
  }
`

const TechnicalSkillsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

const Skill = styled.div`
  position: relative;
  margin: 5px;

  &:last-child {
    display: none;
  }
`

const SkillTitle = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`

const SkillBar = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 14px;
  z-index: -1;
  border-radius: 100px;
  position: absolute;
`

const SkillFill = styled.div`
  background-color: #49c7d8;
  height: 14px;
  border-radius: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  overflow: hidden;
  animation: html 2s;
  width: ${props => props.percent};

  @keyframes html {
    from {
      width: 0;
    }
    to {
      width: ${props => props.percent};
    }
  }
`

const SkillPercent = styled.span`
  font-size: 12px;
  color: #fff;
`

export {
  TechnicalSkillsContainer,
  TechnicalSkillsArea,
  Skill,
  SkillTitle,
  SkillBar,
  SkillFill,
  SkillPercent,
}
