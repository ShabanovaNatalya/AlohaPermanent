import React, { useEffect } from 'react';

import {
  Masters,
  Contacts,
  Feedback,
  Home,
  School,
  Services,
  NotFound404,
  FaQ,
} from './../../pages/index';

import styles from './app.module.css';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useMatch
} from 'react-router-dom';
import { AppHeader } from './../app-header/index';
import { AppFooter } from '../app-footer/index';
// import { ModalUI } from '@ui';
// import { useDispatch } from '../../services/store';
// import { loadIngredientList } from '../../services/slices/ingredients/ingredientSlice';
// import { checkUserAuth } from '../../services/slices/user/userSlice';
// import { loadFeeds } from '../../services/slices/feed/feedSlices';

function App() {
  const location = useLocation();

  const navigate = useNavigate();
  const locationState = location.state as { background?: Location };
  const backgroundLocation = locationState && locationState.background;
  const onCloseModal = () => navigate(-1);


  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <Routes location={backgroundLocation || location}>
          <Route path='/' element={<Home/>} />
          <Route path='/school' element={<School/>} />
          <Route path='/masters' element={<Masters/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/faq' element={<FaQ/>} />
          <Route path='*' element={<NotFound404/>}/>
        </Routes>
        <AppFooter/>
      </div>
    </>
  );
}

export default App;
