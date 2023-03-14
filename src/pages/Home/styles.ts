import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }

  button {
  }
`;

export const BaseCountDownButton = styled.button`
  width: 100%;

  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  padding: 1rem;

  font-weight: bold;

  background-color: ${(props) => props.theme["green-500"]};

  color: ${(props) => props.theme["gray-100"]};
  transition: 0.2s;

  &:disabled {
    background-color: ${(props) => props.theme["green-700"]};
    color: ${(props) => props.theme["gray-700"]};
    cursor: not-allowed;
    #teste {
      color: ${(props) => props.theme["gray-700"]};
      transition: 0.2s;
    }
  }
`;

export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme["red-500"]};

  &:hover {
    background-color: ${(props) => props.theme["red-700"]};
  }
  &:not(::disabled):hover {
    color: ${(props) => props.theme["green-700"]};
  }
`;

export const StartCountDownButton = styled(BaseCountDownButton)``;
