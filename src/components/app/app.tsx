import  { Suspense } from "react";

import {
  Masters,
  Contacts,
  Feedback,
  Home,
  School,
  Services,
  NotFound404,
  FaQ,
} from "./../../pages/index";

import styles from "./app.module.css";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AppHeader } from "./../app-header/index";
import { AppFooter } from "../app-footer/index";


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
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes location={backgroundLocation || location}>
            <Route path="/" element={<Home />} />
            <Route path="/school" element={<School />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/services" element={<Services />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FaQ />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Suspense>
        <AppFooter />
      </div>
    </>
  );
}

export default App;
