import { FC } from "react";
import styles from "./contacts.module.css";

export const Contacts: FC = () => (
  <div className={styles.contacts}>
    <h2 className={styles.title}>Наши контакты</h2>
    <p>
      Режим работы <br />
      Пн - Вс, 10:00-20:00
    </p>
    <address>
      Телефон: <a href="tel:+79261031213">+7 (926) 103-12-13</a>
    </address>
    <h2 className={styles.title}>Наш адрес</h2>
    <p>Адрес: Октябрьский проспект, 5к2, Люберцы, Московская область</p>
    <iframe
      src="https://yandex.ru/map-widget/v1/org/aloha_permanent/69235006749/gallery/?ll=37.859417%2C55.697896&z=17"
      width="560"
      height="400"
    ></iframe>
  </div>
);
