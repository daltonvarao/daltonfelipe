import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.h1`
  color: #50fa7b;
  margin-left: 12px;
`;
