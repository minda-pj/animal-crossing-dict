import Villagers from "./components/Villagers";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      동물의 숲
      <Villagers />
    </div>
  );
}
