import { FC, memo, useState } from "react";

import styles from "./accordion.module.css";

import { TAccordionUIProps } from "./type";

export const AccordionUI: FC<TAccordionUIProps> = memo(({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.item}>
        <div className={styles.title} onClick={() => setIsActive(!isActive)}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.btn}>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <p className={styles.content}>{content}</p>}
      </div>
    </>
  );
});
