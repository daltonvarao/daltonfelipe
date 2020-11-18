import {
  SiGmail,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

import { FiChevronRight } from "react-icons/fi";

import Header from "../../components/Header";
import { ProfileContainer, Title, TitleLight } from "../../styles";
import {
  Contact,
  ContactContainer,
  ContactLabel,
  Container,
  Content,
} from "../../styles/contatos";

export default function Contatos() {
  return (
    <Container>
      <Header page="Contatos" />
      <Content>
        <ProfileContainer>
          <TitleLight>Ola seja bem vindo(a),</TitleLight>
          <Title>Eu sou Dalton Felipe</Title>
        </ProfileContainer>

        <ContactContainer>
          <Contact
            hoverColor="#1da1f2"
            href="https://twitter.com/daltonvarao"
            target="_blank"
          >
            <SiTwitter size={32} color="#f8f8f2" />
            <ContactLabel>Twitter</ContactLabel>
            <FiChevronRight size={32} color="#f8f8f2" />
          </Contact>

          <Contact
            hoverColor="rgba(0, 112, 728, 1)"
            href="https://www.linkedin.com/in/daltonvarao"
            target="_blank"
          >
            <SiLinkedin size={32} color="#f8f8f2" />
            <ContactLabel>Linkedin</ContactLabel>
            <FiChevronRight size={32} color="#f8f8f2" />
          </Contact>

          <Contact
            hoverColor="#ea4135"
            href="mailto://daltonphellipe@gmail.com"
            target="_blank"
          >
            <SiGmail size={32} color="#f8f8f2" />
            <ContactLabel>Gmail</ContactLabel>
            <FiChevronRight size={32} color="#f8f8f2" />
          </Contact>

          <Contact
            hoverColor="#ed4956"
            href="https://instagram.com/daltonvarao"
            target="_blank"
          >
            <SiInstagram size={32} color="#f8f8f2" />
            <ContactLabel>Instagram</ContactLabel>
            <FiChevronRight size={32} color="#f8f8f2" />
          </Contact>

          <Contact
            hoverColor="#24292e"
            href="https://github.com/daltonvarao"
            target="_blank"
          >
            <SiGithub size={32} color="#f8f8f2" />
            <ContactLabel>Github</ContactLabel>
            <FiChevronRight size={32} color="#f8f8f2" />
          </Contact>
        </ContactContainer>
      </Content>
    </Container>
  );
}
