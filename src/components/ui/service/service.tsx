import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './service.module.css';

import { TServiceUIProps } from './type';

export const ServiceUI: FC<TServiceUIProps> = memo(
  ({ service, locationState }) => {
    const { name, description, price, image } = service;

    return (
      <li className={styles.container}>
        <Link
          className={styles.article}
          to={`/services/${name}`}
          state={locationState}
        >

          <img className={styles.img} src={image} alt='картинка услуги.' />
          <div className={`${styles.cost} mt-2 mb-2`}>
            <p className='text text_type_digits-default mr-2'>{price}</p>
          </div>
          <p className={`text text_type_main-default ${styles.text}`}>{name}</p>
        </Link>
      </li>
    );
  }
);
