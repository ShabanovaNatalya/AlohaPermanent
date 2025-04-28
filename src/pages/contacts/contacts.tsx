import { FC } from "react";

export const Contacts: FC = () => (
  <>
    <h2>Контакты1</h2>
    <address>
      Телефон: <a href="tel:+79261031213">+7 (926) 103-12-13</a>
      <p>
        Адрес: Октябрьский проспект, 5к2, Люберцы, Московская область
      </p>
    </address>
    <section >
      <div >
        <a
          href="https://yandex.ru/maps/org/aloha_permanent/69235006749/?utm_medium=mapframe&utm_source=maps"
        >
          Aloha Permanent
        </a>
        <a
          href="https://yandex.ru/maps/10738/lubercy/category/permanent_makeup_studio/243767624613/?utm_medium=mapframe&utm_source=maps"
          
        >
          Студия перманентного макияжа в Люберцах
        </a>
        <a
          href="https://yandex.ru/maps/10738/lubercy/category/eyebrow_and_eyelash_salon/7407769291/?utm_medium=mapframe&utm_source=maps"
          
        >
          Салон бровей и ресниц в Люберцах
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/org/aloha_permanent/69235006749/gallery/?ll=37.859417%2C55.697896&z=17"
          width="560"
          height="400"

          
        ></iframe>
      </div>
      <div >
        <iframe
          
          src="https://yandex.ru/maps-reviews-widget/69235006749?comments"
        ></iframe>
        <a
          href="https://yandex.ru/maps/org/aloha_permanent/69235006749/"
          target="_blank"
        >
          Aloha Permanent на карте Люберец — Яндекс Карты
        </a>
      </div>
    </section>
  </>
);
