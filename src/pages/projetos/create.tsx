import { useRouter } from "next/router";
import React, { useState, KeyboardEvent, ChangeEvent, FormEvent } from "react";
import { FiImage, FiRefreshCw, FiTrash } from "react-icons/fi";

import Header from "../../components/Header";

import axios from "axios";

import {
  Container,
  Input,
  TechList,
  TechContainer,
  Button,
  ButtonContainer,
  PreviewImage,
  FileInputLabel,
  PreviewImageContainer,
  Label,
  LabelButton,
  RemoveImgButton,
  ButtonLink,
} from "../../styles/projetos";
import api from "../../services/api";

interface TechProps {
  name: string;
  removeItem: () => void;
}

const Tech: React.FC<TechProps> = ({ name, removeItem }) => {
  return (
    <TechContainer>
      {name}
      <button onClick={() => removeItem()}>&times;</button>
    </TechContainer>
  );
};

const Create: React.FC = () => {
  const [techs, setTechs] = useState<string[]>([]);
  const [tech, setTech] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const [previewImage, setPreviewImage] = useState("");
  const [file, setFile] = useState<File>();

  const router = useRouter();

  function validateForm() {
    if (
      !(file && name && techs && description && name && demoUrl && githubUrl)
    ) {
      alert("Todos os campos são obrigatórios");
      return false;
    }

    return true;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    if (!validateForm()) return;

    const data = new FormData();

    data.append("name", name);
    data.append("description", description);
    data.append("github_url", githubUrl);
    data.append("demo_url", demoUrl);
    data.append("techs", techs.join());
    data.append("file", file);

    try {
      const response = await api.post("projetos", data);

      console.log(response.data);

      alert("Projeto cadastrado");

      router.replace("/projetos");
    } catch (error) {
      console.log(error.response);
    }
  }

  function handleKeyPressTech(ev: KeyboardEvent<HTMLInputElement>) {
    if (ev.key === "Enter") {
      const newState = [...techs, tech];

      setTechs(newState);
      setTech("");
    }
  }

  function removeTech(index: number) {
    const newState = [...techs];

    newState.splice(index, 1);

    setTechs(newState);
  }

  function handleSelectImage(ev: ChangeEvent<HTMLInputElement>) {
    const selectedFile = Array.from(ev.target.files)[0];

    setFile(selectedFile);

    if (selectedFile) {
      const imgUrl = URL.createObjectURL(selectedFile);

      setPreviewImage(imgUrl);
    }
  }

  function handleRemoveImage() {
    setPreviewImage("");
  }

  return (
    <Container>
      <Header page="New project" />

      <Label htmlFor="name">Name</Label>
      <Input
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        placeholder="Name"
      />
      <Label htmlFor="name">Description</Label>
      <Input
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
        placeholder="Description"
      />
      <Label htmlFor="name">Techs</Label>
      <Input
        placeholder="Techs"
        value={tech}
        onChange={(ev) => setTech(ev.target.value)}
        onKeyDown={handleKeyPressTech}
      />
      {techs.length > 1 && (
        <ButtonContainer>
          <ButtonLink onClick={() => setTechs([])}>Remove all</ButtonLink>
        </ButtonContainer>
      )}
      {techs.length > 0 && (
        <TechList>
          {techs.map((item, index) => (
            <Tech
              key={index}
              name={item}
              removeItem={() => removeTech(index)}
            />
          ))}
        </TechList>
      )}
      <Label htmlFor="name">Demo URL</Label>
      <Input
        value={demoUrl}
        onChange={(ev) => setDemoUrl(ev.target.value)}
        placeholder="Demo Url"
      />
      <Label htmlFor="name">Github URL</Label>
      <Input
        value={githubUrl}
        onChange={(ev) => setGithubUrl(ev.target.value)}
        placeholder="Github Url"
      />
      <Label htmlFor="img">Add imagem</Label>
      <input hidden type="file" onChange={handleSelectImage} id="img" />
      <PreviewImageContainer>
        {!previewImage && (
          <FileInputLabel htmlFor="img">
            <FiImage size={46} color="#f8f8f2" />
            Clique aqui para adicionar uma imagem
          </FileInputLabel>
        )}
        {previewImage && (
          <>
            <PreviewImage src={previewImage} />
            <LabelButton htmlFor="img">
              Trocar imagem
              <FiRefreshCw size={18} color="#f8f8f2" />
            </LabelButton>
            <RemoveImgButton onClick={handleRemoveImage}>
              Remover
              <FiTrash size={18} color="#f8f8f2" />
            </RemoveImgButton>
          </>
        )}
      </PreviewImageContainer>
      <Button onClick={handleSubmit}>Salvar</Button>
    </Container>
  );
};

export default Create;
