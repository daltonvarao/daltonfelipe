import styled from "styled-components";

export const Content = styled.div`
  height: calc(100% - 100px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`;

export const Contact = styled.a<{ hoverColor: string }>`
  display: flex;
  justify-content: space-between;
  background: #44475a;
  border-radius: 12px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 2rem;
  align-items: center;
  width: 340px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    width: 300px;
  }

  :hover {
    cursor: pointer;
    background: ${(props) => props.hoverColor};

    svg {
      color: #f8f8f2 !important;
      transition: none;
    }

    svg:last-child {
      transform: rotate(90deg);
    }
  }
`;

export const ContactLabel = styled.h2`
  color: #f8f8f2;
`;
