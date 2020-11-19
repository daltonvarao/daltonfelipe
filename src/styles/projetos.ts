import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;

  max-width: 860px;
  margin: 0 auto;
  margin-bottom: 2rem;
  position: relative;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  background: #44475a;
  border: 0;
  border-radius: 5px;

  color: #f8f8f2;
  font-weight: bold;
  font-family: Montserrat, sans-serif;

  :focus {
    outline-color: #6272a4;
  }

  ::-webkit-input-placeholder {
    color: #999;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
  }

  + input,
  + textarea,
  + label,
  + div {
    margin-top: 1rem;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;

  + input {
    margin-top: 0.5rem;
  }
`;

export const TechContainer = styled.span`
  background: #f8f8f2;
  padding: 0.5rem;
  color: #333;
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;

  display: flex;
  align-items: center;

  button {
    border-radius: 50%;
    background: #bbb4;
    border: 0;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #676767;

    outline: none;
  }

  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const ButtonLink = styled.button`
  text-align: right;
  background: transparent;
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  color: #f8f8f2;
  font-size: 11px;
  outline: none;
  padding: 0 0.5rem;
`;

export const PreviewImageContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

export const PreviewImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const FileInputLabel = styled.label`
  width: 100%;
  color: #f8f8f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 4px dashed #f8f8f2;
  border-radius: 12px;
  cursor: pointer;

  font-weight: bold;

  svg {
    margin-bottom: 1rem;
  }
`;

export const Label = styled.label`
  color: #f8f8f2;
  margin: 1rem 0 0.5rem 0;
  display: block;
  font-size: 14px;
  font-weight: bold;
`;

export const LabelButton = styled.label`
  background-color: #bd93f9;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);

  svg {
    margin-left: 6px;
  }
`;

export const RemoveImgButton = styled.label`
  background-color: #ff5555;
  padding: 0.65rem 0.8rem;
  border-radius: 5px;
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  svg {
    margin-left: 6px;
  }
`;

export const Button = styled.button`
  text-align: center;
  display: block;
  background: transparent;
  border: 0;
  font-weight: bold;
  color: #333;
  font-size: 18px;
  outline: none;
  padding: 1rem 0.75rem;
  background: #50fa7b;
  width: 100%;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);

  border-radius: 5px;
`;

export const Projects = styled.div``;

export const ProjectContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column-reverse;

  @media screen and (max-width: 768px) {
    div:first-child {
      border-radius: 0 0 12px 12px;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;

    :nth-child(even) {
      flex-direction: row-reverse;

      div:first-child {
        border-radius: 0 12px 12px 0;
      }
    }

    div:first-child {
      border-radius: 12px 0 0 12px;
    }
  }
`;

export const ProjectCard = styled.div`
  padding: 2rem;
  background: #44475a;
  height: fit-content;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

export const ProjectName = styled.h1`
  color: #50fa7b;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    text-align: left;
  }
`;

export const ProjectDescription = styled.p`
  color: #f2f2f8;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ProjectTechs = styled.ul`
  display: flex;
  align-items: center;
`;

export const ProjectTech = styled.li`
  font-size: 10px;
  color: #aaa;
  list-style-type: none;
  list-style-position: inside;
  margin-right: 12px;
  margin-bottom: 1rem;
  font-weight: bold;

  :first-child {
    list-style: none;
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  a {
    margin-left: 12px;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 70%;
  border-radius: 12px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 100%;

    border-radius: 12px 12px 0 0;
  }
`;
