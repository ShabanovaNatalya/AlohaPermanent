import { FC } from "react";
import { useSelector } from "react-redux";
import { MastersCard } from "./../../components/master-card";
import { getMastersList } from "../../services/slices/masters/mastersSlice";

export const Masters: FC = () => {

  const mastersList = useSelector(getMastersList);
  return (
    <>
      <h3 className={`pb-6 text text_type_main-large`}>Masters</h3>
            {mastersList.map((item, index) => (
              <MastersCard
                name={item.name}
                category={item.category}
                experience={item.experience}
                photo={item.photo}
                achievements={item.achievements}
                quote={item.quote}
                key={index}
              ></MastersCard>
            ))}
    </>
  );
};
