
import { ButtonContainer } from "./Button.styled"; //import do styles


interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "neutral";  //interface que recebe os valores das cores
}
export function Button({ variant = "primary" }: ButtonProps) { //colocamos variant como primary para caso nao
  //tenha cor definida ele passe como padrao a primaria
  return (
    <>
      <ButtonContainer variant={color}>Enviar</ButtonContainer>
    </>
  );
}
