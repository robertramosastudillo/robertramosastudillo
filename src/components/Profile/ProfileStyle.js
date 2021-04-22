import styled from "styled-components"

const Container = styled.div``

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 60px auto;
  border: 1px solid red;
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  border: 1px solid red;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  border: 1px solid red;
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
  background-color: #0098d3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
`

const Hola = styled.a`
  background-color: red;
`

export {
  Container,
  ProfileContainer,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  SubTitle,
  SocialMediaContainer,
}
