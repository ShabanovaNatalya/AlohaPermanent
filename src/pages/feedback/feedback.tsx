import { FC } from "react";
import { CardUI } from "../../components/ui/card";
import { useSelector } from "react-redux";
import { getFeedbackList } from "../../services/slices/services/servicesSlice";
import styles from "./feedback.module.css";

export const Feedback: FC = () => {
  const feedbackList = useSelector(getFeedbackList);

  return (
    <div className={styles.feedback}>
      <h3 className={styles.title}>Ваши отзывы</h3>
      <div>
        <div className={styles.list}>
          {feedbackList.map((item, index) => (
            <CardUI
              author={item.author}
              date={item.date}
              content={item.content}
              key={index}
            ></CardUI>
          ))}
          <div className={styles.yandexFeedback}>
            <h3 className={styles.yandexTitle}>Ждем ваш отзыв:</h3>
            <iframe
              src="https://yandex.ru/maps-reviews-widget/69235006749?comments"
              width="446"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
