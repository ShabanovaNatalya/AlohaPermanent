import { FC } from "react";
import styles from "./home.module.css";

export const Home: FC = () => (
  <>
    <div className={styles.home}>
      <div className={styles.about}>
        <h1 className={styles.title}>
          Школа - студия <br /> перманентного макияжа <br /> Алёны Децюк
        </h1>
        <h2 className={styles.subtitle}>
          Топ-мастер и основатель студии перманентного макияжа
        </h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            В сфере перманентного макияжа более 4-ех лет
          </li>
          <li className={styles.li}>
            Участница самой крупной всемирной конференции «Эволюшен 2023»
          </li>
          <li className={styles.li}>Официальный партер пигментов «Фэйс»</li>
          <li className={styles.li}>
            Официальный партнер института дополнительного образования КМИДО{" "}
            <br /> с лицензией на деятельность
          </li>
          <li className={styles.li}>Выпускница бизнес курса Юлии Евенко</li>
        </ul>
        <button className={styles.button}>
          <a
            href={"https://api.whatsapp.com/send/?phone=79261031213"}
            target="_blank"
            className={styles.a}
          >
            Записаться
          </a>
        </button>
      </div>
      <img className={styles.img} alt="Фотография" src={"/images/hotAP.png"} />
    </div>
  </>
);
