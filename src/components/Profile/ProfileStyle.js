import styled from "styled-components"
import { ReactComponent as SvgInstagram } from "../../images/icons/instagram.svg"
import { ReactComponent as SvgGitHub } from "../../images/icons/github.svg"
import { ReactComponent as SvgLinkedin } from "../../images/icons/linkedin.svg"
import { ReactComponent as SvgWeb } from "../../images/icons/web.svg"

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 60px auto;
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
`

const SubTitle = styled.p`
  text-align: center;
  color: #000;
  font-size: 16px;
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
`

const IcInstagram = styled(SvgInstagram)`
  width: 24px;
  height: 24px;
  color: #fff;
`

const IcGitHub = styled(SvgGitHub)`
  width: 24px;
  height: 24px;
  color: #fff;
`

const IcLinkedin = styled(SvgLinkedin)`
  width: 24px;
  height: 24px;
  color: #fff;
`

const IcWeb = styled(SvgWeb)`
  width: 24px;
  height: 24px;
  color: #fff;
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #49c7d8;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #49c7d890;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 40px auto;
  /* border: 1px solid red; */
`

const Parrafo = styled.p`
  text-align: center;
  font-size: 18px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
`

const Button = styled.button`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border: none;
  background-color: #49c7d8;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
    background-color: #49c7d890;
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
  Button,
}
