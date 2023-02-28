
import { ButtonContainer } from "./Button.styled";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger" | "neutral";
}
export function Button({ color = "primary" }: ButtonProps) {
  return (
    <>
      <ButtonContainer>Enviar</ButtonContainer>
    </>
  );
}
