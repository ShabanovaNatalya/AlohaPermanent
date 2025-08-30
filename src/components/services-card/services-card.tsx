import { FC, memo } from "react";
import styles from "./services-card.module.css";
import { ServicesCardProps } from "./type";

export const ServicesCard: FC<ServicesCardProps> = memo(({ name, photo }) => {
  return (
    <div className={styles.content}>
      {/* <button className={styles.content}> */}
      <img className={styles.img} alt="Фотография услуги" src={photo} />
      <p className={styles.text}>{name}</p>
      {/*</button> */}
    </div>
  );
});
