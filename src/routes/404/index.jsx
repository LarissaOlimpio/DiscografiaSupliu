import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

export function FourOFour() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Página não encontrada</p>
      <button className="blue" onClick={handleClick}>Voltar para a Home</button>
    </div>
  );
}
