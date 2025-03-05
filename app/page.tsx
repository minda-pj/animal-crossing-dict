import { DetailModal } from "./components/DetailModal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <DetailModal />
    </div>
  );
}
