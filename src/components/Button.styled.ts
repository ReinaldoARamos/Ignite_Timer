import styled from "styled-components";

type ButtonVariant = "primary" | "secondary" | "danger" | "neutral"; //criando tipos para passar a cor no variant
interface ButtonContainerProps {
  variant: ButtonVariant;
}
export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
`;
