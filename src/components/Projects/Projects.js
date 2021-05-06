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
import mernTask from "../../images/projects/MernTask.png"
import buscaRecetas from "../../images/projects/BuscaRecetas.png"
import buscaCanciones from "../../images/projects/BuscaCanciones.png"
import buscaImagenes from "../../images/projects/BuscaImagenes.png"
import cotizadorCriptomonedas from "../../images/projects/CotizadorCriptomonedas.png"
import climaApp from "../../images/projects/ClimaApp.png"
import frasesBreakingBad from "../../images/projects/FrasesBreakingBad.png"

const Projects = () => {
  const projects = [
    {
      img: mernTask,
      title: "Administra tareas por proyecto",
      url: "https://gifted-blackwell-15a5d7.netlify.app/",
      text: "Crea y asigna tareas a uno ó mas proyectos",
      height: "160",
    },
    {
      img: buscaRecetas,
      title: "Recetas de Bebidas",
      url: "https://adoring-engelbart-f0ab8a.netlify.app/",
      text: "Busca la receta de una bebida por Categoria o Ingrediente",
      height: "160",
    },
    {
      img: buscaCanciones,
      title: "Busca letras de canciones",
      url: "https://lucid-villani-fe2c73.netlify.app/",
      text:
        "Busca la biografia de tu artista y la letra de tus canciones favoritas",
      height: "160",
    },
    {
      img: buscaImagenes,
      title: "Buscador de Imagenes",
      url: "https://vigorous-mccarthy-c5be8d.netlify.app/",
      text: "Busca cualquier imagen y descargala gratis",
      height: "160",
    },
    {
      img: cotizadorCriptomonedas,
      title: "Cotiza Cripto monedas al instante",
      url: "https://peaceful-hamilton-837fb5.netlify.app/",
      text:
        "Cotiza Cripto monedas al instante selecionando tu moneda y tu cripto moneda para realizar la conversión",
      height: "160",
    },
    {
      img: climaApp,
      title: "App del Clima",
      url: "https://laughing-morse-87742b.netlify.app/",
      text: "Mira el estado actualmente del clima de tu ciudad",
      height: "160",
    },
    {
      img: frasesBreakingBad,
      title: "Frases de Breaking Bad",
      url: "https://hopeful-lamarr-eba663.netlify.app/",
      text: "Obten una frase aleatoria de cualquier personaje de breaking bad",
      height: "160",
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
              <Title
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {project.title}
              </Title>
              <Text>{project.text}</Text>
            </Details>
          </Project>
        ))}
      </ProjectsArea>
    </ProjectsContainer>
  )
}

export default Projects
