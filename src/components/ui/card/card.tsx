import { FC, memo, useState } from "react";

import styles from "./card.module.css";

import { TCardUIProps } from "./type";

export const CardUI: FC<TCardUIProps> = memo(({ author, date, content }) => {
    return (
    <article className={styles.item}>
      <p className={styles.author}>{author}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.content}>{content}</p>
    </article>
  );
});
