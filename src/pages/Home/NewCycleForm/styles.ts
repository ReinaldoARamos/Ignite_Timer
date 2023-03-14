import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap; //Caso a tela dimunua ele quebra os campos em mais linhas
`;
const BaseInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 3px solid;
  border-color: ${(props) => props.theme["gray-500"]};
  outline: none;
  color: ${(props) => props.theme["gray-100"]};
  margin-left: 1rem;
  margin-right: 1rem;
  height: 2.5rem;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  transition: 0.4s;

  &:disabled {
    border-color: ${(props) => props.theme["gray-700"]};
    cursor: not-allowed;
    color: ${(props) => props.theme["gray-700"]};
  }

  &:placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["green-500"]};
  }
`;
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmount = styled(BaseInput)`
  width: 4rem;
`;
