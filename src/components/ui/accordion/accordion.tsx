import { FC, memo, useState } from "react";

import styles from "./accordion.module.css";

import { TAccordionUIProps } from "./type";

export const AccordionUI: FC<TAccordionUIProps> = memo(({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.item}>
        <div className={styles.title} onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={styles.content}>{content}</div>}
      </div>
    </>
  );
});
