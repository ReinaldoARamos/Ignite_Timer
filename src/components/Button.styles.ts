 import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "neutral"; //criando tipos para passar a cor no variant
interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
    primary: 'purble',
    secondary: 'orange',
    danger: 'red',
    neutral: 'grey'
}
export const ButtonContainer  = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  margin: 8px;

  background-color: ${props => props.theme['green-500']};
  //aplicando no theme a cor primary que ele acessa dentro do theme
  color: ${props => props.theme['white']};
`;
