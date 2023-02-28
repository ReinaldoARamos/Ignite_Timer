 import styled, {css} from "styled-components";

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

  background-color: ${props => props.theme.secondary} //aplicando no theme a cor primary que ele acessa dentro do theme
/*
  ${props => {
    return css`background-color: ${buttonVariant[props.variant]};
    coli
    ` //colocamos o props, ele percurre o objeto button
    //variants, pega as cores e aplica dentro do props.variant o background color, no caso, o props variant sao primary
    //secondary etc
  }}
  */
`;
