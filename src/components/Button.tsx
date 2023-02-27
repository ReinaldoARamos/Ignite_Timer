import styles from "../components/Button.module.css";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger" | "neutral";
}
export function Button({ color = "primary" }: ButtonProps) {
  return (
    <>
      <button className={styles.button}>Enviar</button>
    </>
  );
}
