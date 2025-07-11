import { FC } from "react";
import { useSelector } from "react-redux";
import { ServicesCard } from "../../components/services-card/index";
import styles from "./services.module.css";
import { getServicesList } from "../../services/slices/services/servicesSlice";



export const Services: FC = () =>{
  const mastersList = useSelector(getServicesList);
  return (
    <>
      <div className={styles.services}>
        <h3 className={styles.h}>Наши направления</h3>
        {mastersList.map((item, index) => (
          <ServicesCard
            name={item.name}
            photo={item.photo}
            key={index}
          ></ServicesCard>
        ))}
      </div>
    </>
  );
};
