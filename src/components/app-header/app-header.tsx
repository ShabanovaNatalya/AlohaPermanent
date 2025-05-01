import React, { FC, useEffect } from "react";
import styles from "./app-header.module.css";
import { TAppHeaderProps } from "./type";

import { NavLink, useLocation } from "react-router-dom";

export const AppHeader: FC<TAppHeaderProps> = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.heading}>
            ALOHA<br></br>PERMANENT
          </h1>
          <h2 className={styles.subtitle}>SCHOOL & STUDIO</h2>
        </div>

        <nav className={`${styles.menu}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.link_active}`
                : ` ${styles.link} `
            }
          >
            {({ isActive }) => <p className="">О студии</p>}
          </NavLink>
          <NavLink
            to="/school"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.link_active}`
                : ` ${styles.link} `
            }
          >
            {({ isActive }) => <p className="">Обучение</p>}
          </NavLink>
          <NavLink
            to="/masters"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.link_active}`
                : ` ${styles.link} `
            }
          >
            {({ isActive }) => <p className="">Мастера</p>}
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.link_active}`
                : ` ${styles.link} `
            }
          >
            {({ isActive }) => <p className="">Услуги</p>}
          </NavLink>
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.link_active}`
                : ` ${styles.link} `
            }
          >
            {({ isActive }) => <p className="">Отзывы</p>}
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.contacts} ${styles.link_active}`
                : ` ${styles.link} ${styles.contacts}`
            }
          >
            {({ isActive }) => <p className="">Контакты</p>}
          </NavLink>
        </nav>
      </header>
    </>
  );
};
