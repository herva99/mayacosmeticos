import Barra from "../../componentes/barralateral/barra";
import CardList from "../../componentes/cardList/cardList";
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Barra/>
            <CardList/>
        </div>
    )
}
