import React from "react";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";

import { Container, HeaderTitle } from "./styles";

interface HeaderProps {
  page: string;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.back()}>
      <FiChevronLeft size={32} color="#fff" />
      <HeaderTitle>{page}</HeaderTitle>
    </Container>
  );
};

export default Header;
