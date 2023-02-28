
import { ButtonContainer } from "./Button.styled";


interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "neutral";
}
export function Button({ variant = "primary" }: ButtonProps) {
  return (
    <>
      <ButtonContainer variant={color}>Enviar</ButtonContainer>
    </>
  );
}
