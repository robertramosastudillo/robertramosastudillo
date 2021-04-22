import React from "react"
import {
  ProfileContainer,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  SubTitle,
  SocialMediaContainer,
  Hola,
} from "./ProfileStyle"
import avatar from "../../images/avatar.jpg"
import { ReactComponent as IcInstagram } from "../../images/icons/instagram.svg"

const Profile = () => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <Image src={avatar} alt="Robert Andres Ramos Astudillo" />
      </ImageContainer>
      <InfoContainer>
        <Title>Robert Andres Ramos Astudillo</Title>
        <SubTitle>Full Stack Developer</SubTitle>
      </InfoContainer>
      {/* <SocialMediaContainer>
        <IcInstagram />
      </SocialMediaContainer> */}
    </ProfileContainer>
  )
}

export default Profile
