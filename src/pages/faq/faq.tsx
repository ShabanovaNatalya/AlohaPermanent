import { FC } from "react";
import { AccordionUI } from "./../../components/ui/accordion";
import { getFaqList } from "../../services/slices/services/servicesSlice";
import { useSelector } from "react-redux";

export const FaQ: FC = () => {
  const faqList = useSelector(getFaqList);

  return (
    <>
      <h2>
        Часто задаваемые вопросы
      </h2>
      <div>
      {faqList.map((item, index) => (
        <AccordionUI
          title={item.title}
          content={item.content}
          key={index}
        ></AccordionUI>
      ))}</div>
    </>
  );
};
