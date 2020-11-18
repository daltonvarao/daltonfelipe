import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem 1.5rem;
  }
`;

export const ProfileContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`;

export const TitleLight = styled.h1`
  font-weight: 300;
  color: #f8f8f2;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Title = styled.h1`
  color: #f8f8f2;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const Card = styled.div`
  padding: 3rem 2rem;
  background: #44475a;
  border-radius: 5px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  min-width: 320px;
  max-width: 320px;

  a {
    text-decoration: none;
    color: #8be9fd;
    font-size: 14px;
    font-weight: 500;
    text-align: center;

    :hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    max-width: 100%;
    min-width: 100%;
  }
`;

export const CardTitle = styled.h1`
  color: #50fa7b;
  font-size: 24px;
  text-align: center;
  width: 100%;
  position: relative;
  margin-bottom: 3rem;
  transition: all 0.3s;

  ::after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: calc(50% - 25px);

    width: 50px;
    height: 4px;
    background: #f8f8f2;
    transition: all 0.3s;
  }

  :hover::after {
    content: "";
    right: calc(50% - 50px);
    width: 100px;
  }
`;

export const CardDescription = styled.p`
  color: #f8f8f2;
  font-size: 16px;
  text-align: center;
  margin-bottom: 2rem;
`;
