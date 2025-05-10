import { TCategory } from "src/utils/types";

export type MastersCardProps = {
  category: TCategory;
  name: string;
  photo: string;
  experience: string;
  achievements: string[];
  quote: string;
};
