import { FC, memo } from "react";
import styles from "./master-card.module.css";
import { MastersCardProps } from "./type";

export const MastersCard: FC<MastersCardProps> = memo(
  ({ name, category, experience, photo, achievements, quote }) => {
    return (
      <div className={styles.content}>
        <img className={styles.img} alt="фотография мастера" src={photo} />
        <div>
          <h3 className="text text_type_main-medium mt-2 mb-4">{name}</h3>
          <p className={`text mb-2 ${styles.text}`}>{category}</p>
          <p className={`text mb-2 ${styles.text}`}>{experience}</p>
          <p className={`text mb-2 ${styles.text}`}>{achievements}</p>
          <p className={`text mb-2 ${styles.text}`}>{quote}</p>
        </div>
      </div>
    );
  }
);