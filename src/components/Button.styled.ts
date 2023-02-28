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
`;
