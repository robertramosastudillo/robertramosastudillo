import styled from "styled-components"
import { ReactComponent as SvgInstagram } from "../../images/icons/instagram.svg"
import { ReactComponent as SvgGitHub } from "../../images/icons/github.svg"
import { ReactComponent as SvgLinkedin } from "../../images/icons/linkedin.svg"
import { ReactComponent as SvgWeb } from "../../images/icons/web.svg"
import { device } from "../../themes/device"

const ProfileContainer = styled.div`
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
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
`

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;

  @media ${device.laptop} {
    font-size: 36px;
    width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`

const SubTitle = styled.p`
  text-align: center;
  color: #000;
  font-size: 16px;
  @media ${device.laptop} {
    font-size: 24px;
  }
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
`

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px auto;

  @media ${device.laptop} {
    width: 50%;
  }
`

const IcInstagram = styled(SvgInstagram)`
  width: 24px;
  height: 24px;
  color: #fff;

  @media ${device.laptop} {
    width: 31px;
    height: 31px;
  }
`

const IcGitHub = styled(SvgGitHub)`
  width: 24px;
  height: 24px;
  color: #fff;

  @media ${device.laptop} {
    width: 31px;
    height: 31px;
  }
`

const IcLinkedin = styled(SvgLinkedin)`
  width: 24px;
  height: 24px;
  color: #fff;

  @media ${device.laptop} {
    width: 31px;
    height: 31px;
  }
`

const IcWeb = styled(SvgWeb)`
  width: 24px;
  height: 24px;
  color: #fff;

  @media ${device.laptop} {
    width: 31px;
    height: 31px;
  }
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent linear-gradient(180deg, #49c7d8 0%, #3996a3 100%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    background: #46bac9;
    box-shadow: 0px 0px 16px #3996a3;
  }

  @media ${device.laptop} {
    width: 62px;
    height: 62px;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 40px auto;
`

const Parrafo = styled.p`
  text-align: center;
  font-size: 18px;

  @media ${device.laptop} {
    font-size: 24px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;

  @media ${device.laptop} {
    width: 50%;
  }
`

const ButtonLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  background: transparent linear-gradient(180deg, #49c7d8 0%, #3996a3 100%);
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  width: 100%;

  &:hover {
    text-decoration: underline;
    background: #46bac9;
    box-shadow: 0px 0px 16px #3996a3;
  }
`

export {
  ProfileContainer,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  SubTitle,
  SocialMediaContainer,
  IcInstagram,
  IcGitHub,
  IcLinkedin,
  IcWeb,
  Link,
  TextContainer,
  Parrafo,
  ButtonContainer,
  ButtonLink,
}
