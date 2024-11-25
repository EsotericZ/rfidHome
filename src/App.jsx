import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { SideNav } from './components/navigation/SideNav';
// import Cookies from 'universal-cookie';
// import { useUserContext } from './context/UserContext';

import { Home } from './views/Home';
import { Logs } from './views/Logs';

export const App = () => {
  // const { setCookieData } = useUserContext();
  // const [loggedIn, setLoggedIn] = useState(!!new Cookies().get('jwt'));

  return (
    <Router>
      {/* <SideNav loggedIn={loggedIn}> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/logs' element={<Logs />} />
        </Routes>
      {/* </SideNav> */}
    </Router>
  );
}