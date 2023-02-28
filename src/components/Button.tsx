
import { ButtonContainer, ButtonVariant } from "./Button.styled"; //import do styles


interface ButtonProps {
  variant?: ButtonVariant; //vem de dentro dos estilos
}
export function Button({ variant = "primary" }: ButtonProps) { //colocamos variant como primary para caso nao
  //tenha cor definida ele passe como padrao a primaria
  return (
    <>
      <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    </>
  );
}
