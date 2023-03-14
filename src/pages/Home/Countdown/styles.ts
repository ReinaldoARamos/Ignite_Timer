import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
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
