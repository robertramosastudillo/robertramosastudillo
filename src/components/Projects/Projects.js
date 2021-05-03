import React from "react"
import {
  ProjectsContainer,
  ProjectsArea,
  Project,
  ImageContainer,
  Image,
  Details,
  Title,
  Text,
} from "./ProjectsStyle"

const Projects = () => {
  const projects = [
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "100",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "200",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "400",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "150",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "200",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "100",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "200",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "400",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "150",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
    {
      img:
        "https://images.pexels.com/photos/2416478/pexels-photo-2416478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "ChatApp",
      text:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eos.",
      height: "320",
    },
  ]

  return (
    <ProjectsContainer>
      <h2>Proyectos</h2>
      <ProjectsArea>
        {projects.map((project, index) => (
          <Project key={index}>
            <ImageContainer>
              <Image
                src={project.img}
                alt={project.title}
                className="grid-item"
                height={project.height}
              />
            </ImageContainer>
            <Details>
              <Title>{project.title}</Title>
              <Text>{project.text}</Text>
            </Details>
          </Project>
        ))}
      </ProjectsArea>
    </ProjectsContainer>
  )
}

export default Projects
