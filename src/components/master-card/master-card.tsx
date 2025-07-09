import { FC, memo } from "react";
import styles from "./master-card.module.css";
import { MastersCardProps } from "./type";

export const MastersCard: FC<MastersCardProps> = memo(
  ({ name, category, experience, photo, achievements, quote }) => {
    return (
      <div className={styles.content}>
        <img className={styles.img} alt="Фотография мастера" src={photo} />
        <div className={styles.info}>
          <div className={styles.text}>
            <h3>{name}</h3>

            <p className={styles.category}>{category}</p>
            <p className={styles.experience}>{experience}</p>
            <ul className={styles.achievementslist}>
              {achievements.map((item, index) => (
                <li key={index}> {item}</li>
              ))}
            </ul>
            <p className={styles.quote}>{quote}</p>
          </div>
          <button> Страница мастера </button>
        </div>
      </div>
    );
  }
);
