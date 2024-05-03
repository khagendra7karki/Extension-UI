import Login from './Login';
import Home from './Home'
import AuthProvider from './hooks/AuthProvider';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <Router>  
      <AuthProvider>
        <Routes>
          <Route path = '/login' element = {<Login />} />
          <Route element = {<PrivateRoute />}>
            <Route path = '/' element = {<Home/>}/>
            <Route path = "/home" element = {<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
    // <Home />
  );
}

export default App;
