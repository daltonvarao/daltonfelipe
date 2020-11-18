import React, { useState } from "react";
import { NextPage } from "next";
import { IoMdEye } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import api from "../../services/api";

import Header from "../../components/Header";
import {
  Container,
  ProjectActions,
  ProjectCard,
  ProjectContainer,
  ProjectDescription,
  ProjectImage,
  ProjectName,
  Projects,
  ProjectTech,
  ProjectTechs,
} from "../../styles/projetos";
import { Title } from "../../styles";

interface Project {
  _id: string;
  name: string;
  description: string;
  github_url: string;
  techs: string[];
  demo_url: string;
  img_secure_url: string;
  img_public_id: string;
}

interface ProjectProps {
  data: Project;
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  return (
    <ProjectContainer>
      <ProjectCard>
        <ProjectName>{data.name}</ProjectName>
        <ProjectDescription>{data.description}</ProjectDescription>
        <ProjectTechs>
          {data.techs.map((tech, index) => (
            <ProjectTech key={index}>{tech}</ProjectTech>
          ))}
        </ProjectTechs>

        <ProjectActions>
          <a target="_blank" href={data.demo_url} title="Abrir demonstração">
            <IoMdEye color="#f8f8f2" size={32} />
          </a>
          <a target="_blank" href={data.github_url} title="Github">
            <SiGithub color="#f8f8f2" size={24} />
          </a>
        </ProjectActions>
      </ProjectCard>
      <ProjectImage src={data.img_secure_url} />
    </ProjectContainer>
  );
};

interface Props {
  projetos?: Project[];
}

const Projetos: NextPage<Props> = ({ projetos }) => {
  if (!projetos) {
    return <div className="loader" />;
  }

  return (
    <Container>
      <Header page="Projetos" />

      {projetos.length === 0 && <Title>Não existem projetos ainda :/ </Title>}

      <Projects>
        {projetos.map((data) => (
          <Project key={data._id} data={data} />
        ))}
      </Projects>
    </Container>
  );
};

Projetos.getInitialProps = async (ctx) => {
  const { data: projetos } = await api.get("/projetos");

  return { projetos };
};

export default Projetos;
