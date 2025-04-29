import { Location } from 'react-router-dom';
// import { TService } from '@utils-types';

export type TService = {
  name:string;
  description:string;
  price:string;
  image:string;
}

export type TServiceUIProps = {
  service: TService;
  locationState: { background: Location };
};
