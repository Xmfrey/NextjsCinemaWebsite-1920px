import styles from "./page.module.css";
import MainBlockHome from "./components/mainBlock/mainBlockHome";
import NewItemsList from "./components/New/NewItemsList";
import MostPopularList from "./components/MostPopular/MostPopularList";

const Home = () => {
  return (
    <main className={styles.main}>
      <MainBlockHome />
      <NewItemsList />
      <MostPopularList />
    </main>
  );
};

export default Home;
