import styled from "styled-components";

export const AlertContainer = styled.div<{ type: "error" | "success" }>`
  background: ${(props) => (props.type === "error" ? "#ff5555" : "#50fa7b")};
  padding: 1rem 1.25rem;
  border-radius: 8px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);

  min-width: 200px;

  color: #f2f2f8;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 2rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: 0;
    font-weight: bold;
    font-size: 20px;
    color: #f2f2f8;
    outline: none;
    margin-left: 24px;
  }

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;
