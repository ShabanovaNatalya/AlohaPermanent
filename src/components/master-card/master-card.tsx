import { FC, memo } from "react";
import styles from "./ingredient-details.module.css";
import { MastersCardProps } from "./type";

export const MastersCard: FC<MastersCardProps> = memo(
  ({ name, category, experience, photo }) => {
    return (
      <div className={styles.content}>
        <h3 className="text text_type_main-medium mt-2 mb-4">{name}</h3>
        <img className={styles.img} alt="фотография мастера" src={photo} />
        <p className={`text mb-2 ${styles.text}`}>{category}</p>
        <p className={`text mb-2 ${styles.text}`}>{experience}</p>
      </div>
    );
  }
);
