import React, { FC, useEffect } from "react";
import styles from "./app-footer.module.css";
import { TAppFooterProps } from "./type";
import logoIG from "./../../assets/icon/instagram.svg";
import logoVK from "./../../assets/icon/vk.svg";
import logoWhatsApp from "./../../assets/icon/whatsapp.svg";

import { NavLink, useLocation } from "react-router-dom";

export const AppFooter: FC<TAppFooterProps> = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p>
            Режим работы <br />
            Пн - Вс, 10:00-20:00
          </p>
          <address>
            <a href="tel:+79261031213">+7(926)103-12-13</a>
            <br />
            <span>Люберцы, Октябрьский просп., 5, корп. 2</span>
          </address>
        </div>

        <div className={styles.logo}>
          <h1 className={styles.heading}>
            ALOHA
            <br />
            PERMANENT
          </h1>
          <h2 className={styles.subtitle}>SCHOOL & STUDIO</h2>
        </div>
        {/* <iframe src="https://yandex.ru/sprav/widget/rating-badge/69235006749?type=rating&theme=white" className={styles.rating}></iframe> */}
        <div>
          <ul>
            <li>
              <a href="https://www.instagram.com/aloha_permanent" target="_blank">
                <img src={logoIG} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://vk.com/aloha_permanent" target="_blank">
                <img src={logoVK} alt="vkontakte" />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=79261031213"
                target="_blank"
              >
                <img src={logoWhatsApp} alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
