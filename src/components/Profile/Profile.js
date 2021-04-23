import React from "react"
import {
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
} from "./ProfileStyle"
import avatar from "../../images/avatar.jpg"

const socialMedia = [
  {
    icon: <IcInstagram />,
    link: "https://www.instagram.com/robertramosastudillo",
  },
  {
    icon: <IcGitHub />,
    link: "https://github.com/robertramosastudillo",
  },
  {
    icon: <IcLinkedin />,
    link: "https://www.linkedin.com/in/robert-andres-ramos-astudillo-161b8316b",
  },
  {
    icon: <IcWeb />,
    link: "#",
  },
]

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
      <SocialMediaContainer>
        {socialMedia.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {social.icon}
          </Link>
        ))}
      </SocialMediaContainer>
      <TextContainer>
        <Parrafo>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam maxime
          neque sunt dolorem, aliquam voluptatem ipsa consequuntur natus
          laboriosam quas quia enim nihil. Quasi assumenda voluptate voluptatem
          veritatis harum ducimus!
        </Parrafo>
      </TextContainer>
      <ButtonContainer>
        <Button>Descargar CV</Button>
      </ButtonContainer>
    </ProfileContainer>
  )
}

export default Profile
