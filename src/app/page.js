import styles from "./page.module.css";
import ListCards from "./ListCards";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}> Rick y Morty App</h1>
      <ListCards />
    </main>
  );
}
