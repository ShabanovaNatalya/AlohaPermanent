export type TCategory= 'Мастер-преподаватель и основатель школы-студии' | 'Топ-мастер' | 'Ведущий-мастер'| 'Мастер';

export type TMasters = {
  category: TCategory;
  name: string;
  photo: string;
  experience: string;
  achievements: string[];
  quote: string;
};

export type TServices = {
  name: string;
  category: string;
  experience: string;
  photo: string;
  price: number;
};

