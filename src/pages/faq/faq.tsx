import { FC } from "react";
import { AccordionUI } from "./../../components/ui/accordion";
import { getFaqList } from "../../services/slices/services/servicesSlice";
import { useSelector } from "react-redux";
import styles from "./faq.module.css";

export const FaQ: FC = () => {
  const faqList = useSelector(getFaqList);

  return (
    <div className={styles.faq}>
      <h2 className={styles.title}>
        Часто задаваемые вопросы
      </h2>
      <div className={styles.list}>
      {faqList.map((item, index) => (
        <AccordionUI
          title={item.title}
          content={item.content}
          key={index}
        ></AccordionUI>
      ))}</div>
    </div>
  );
};
