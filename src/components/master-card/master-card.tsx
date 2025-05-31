import { FC, memo } from "react";
import styles from "./master-card.module.css";
import { MastersCardProps } from "./type";

export const MastersCard: FC<MastersCardProps> = memo(
  ({ name, category, experience, photo, achievements, quote }) => {
    return (
      <div className={styles.content}>
        <img
          className={styles.img}
          alt="Фотография мастера"
          src="/images/masterAD.png"
        />
        <div className={styles.text}>
          <h3>{name}</h3>

          <p className={styles.category}>{category}</p>
          <p className={styles.experience}>{experience}</p>
          <p className={styles.achievements}>{achievements}</p>

          <p className={styles.quote}>{quote}</p>
          <button> Страница мастера </button>
        </div>
      </div>
    );
  }
);
