import { FC } from "react";

import styles from "./school.module.css";

export const School: FC = () => {
  return (
    <div className={styles.school}>
      <h2 className={styles.title}>Программа обучения</h2>
      <div className={styles.section}>
        <div className={styles.program}>
          <div>
            <h3 className={styles.title}>1 ЭТАП</h3>
            <span>ONLINE ПОДГОТОВКА 7 ДНЕЙ </span>
            <br />
            <span>
              За неделю до старта базового курса открывается доступ к Онлайн
              платформе с короткими видео уроками.
            </span>
            <ul className={styles.ul}>
              <li>- Упражнения по постановкруке и и правильному штриху;</li>
              <li>- Схема построения эскизов;</li>
              <li>- Блок теоретической информации.</li>
            </ul>
            Сдача домашних заданий на проверку, обратная связь от преподавателя,
            ответы на любые вопросы.
          </div>
          <div>
            <h3 className={styles.title}>2 ЭТАП</h3>
            <span>ОЧНОЕ ОБУЧЕНИЕ 7 ДНЕЙ </span>
            <br />
            <span>
              Закрепление теоретического материала, отработка штрихов и техники
              на латексе до правильной постановки руки.
            </span>
            <ul className={styles.ul}>
              <li>- Демонстрационная работа от преподавателя;</li>
              <li>
                - Самостоятельная отработка на 6 моделях под руководством
                преподавателя.
              </li>
            </ul>
            Сдача домашних заданий на проверку, обратная связь от преподавателя,
            ответы на любые вопросы.
          </div>
          <div>
            <h3 className={styles.title}>3 ЭТАП</h3>
            <span>
              СТАЖИРОВКА <br /> (С учетом выбранного пакета обучения)
            </span>
            <br />
            <span>
              1-5 моделей для отработки полученных знаний.
              <br />
              Проходит после окончания базового курса, в студии.
              <br />
              Работа выполняется учеником самостоятельно, преподаватель
              контролирует и дает правки при необходимости.
            </span>
          </div>
        </div>
      </div>

      <h2 className={styles.title}>Cтоимость обучения</h2>
      <div className={styles.section}>
        <div>
          <div className={styles.price}>
            <div className={styles.priceItem}>
              <span>ИНДИВИДУАЛЬНОЕ</span>
              <br /> <br />
              <span>200 000 руб.</span>
            </div>
            <div className={styles.priceItem}>
              <span>
                ГРУППОВОЕ <br />
                (2-3 чел.)
              </span>
              <br />
              <span>150 000 руб.</span>
            </div>
          </div>
          <button className={styles.button}>
            <a
              href={"https://api.whatsapp.com/send/?phone=79261031213"}
              target="_blank"
              className={styles.a}
            >
              Записаться
            </a>
          </button>
          <h2 className={styles.title}>Включено в стоимость:</h2>
          <ul className={styles.ul}>
            <li>- 7 дней подготовка онлайн;</li>
            <li>- 7 дней оффлайн: теория, практика, отработка на латексе;</li>
            <li>- Предоставление всех расходных материалов во время курса;</li>
            <li>- Обеды;</li>
            <li>- Отработка на 6 моделях (по 2 на каждую зону);</li>
            <li>- Урок по удалению некачественного перманента ремувером;</li>
            <li>- 3 сертификата: брови, губы, веки;</li>
            <li>- Диплом гос.образца;</li>
            <li>- Стажировка в студии;</li>
            <li>- Авторское методическое пособие и тетрадь-тренажер;</li>
            <li>- Набор протоколов проведения процедуры;</li>
            <li>- Соглашение на процедуры;</li>
            <li>- Памятки по уходу;</li>
            <li>- Создание страницы в инстаграм и контент план на 30 дней;</li>
            <li>- Готовое портфолио;</li>
            <li>- Поддержка наставника 24/7 в течении 6 месяцев.</li>
          </ul>
        </div>
        <img
          className={styles.img}
          alt="Фотография"
          src={"/images/masterADSH.png"}
        />
      </div>
    </div>
  );
};
