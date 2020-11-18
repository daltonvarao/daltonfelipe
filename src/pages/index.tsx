import Link from "next/link";

import {
  Card,
  CardDescription,
  Cards,
  CardTitle,
  Container,
  ProfileContainer,
  Title,
  TitleLight,
} from "../styles";

export default function Home() {
  return (
    <Container>
      <ProfileContainer>
        <TitleLight>Ola seja bem vindo(a),</TitleLight>
        <Title>Eu sou Dalton Felipe</Title>
      </ProfileContainer>
      <Cards>
        <Card>
          <CardTitle>Projetos</CardTitle>
          <CardDescription>
            Trabalhos que tenho desenvolvido ou finalizado.
          </CardDescription>

          <Link href="/projetos">Ver mais</Link>
        </Card>

        <Card>
          <CardTitle>Contatos</CardTitle>
          <CardDescription>
            Entre em contato, mande um email ou mensagem.
          </CardDescription>

          <Link href="/contatos">Ver mais</Link>
        </Card>
      </Cards>
    </Container>
  );
}
