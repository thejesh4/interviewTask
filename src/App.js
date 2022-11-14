import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Home from "./home";
import Login from "./login";
import Header from './header';
import Edit from "./edit";
import Add from './add';
import {
  getToken
} from "./utils";

function App() {
  const token = getToken();
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to='/' replace={true} />}/>
          <Route path="/add" element={<Add />} exact />
          <Route path="/edit/:id" element={<Edit />} exact />
          <Route path="/" element={<Login />} exact />
          <Route exact path="/home" element={ 
            <PrivateRoute>
                <>
                    <Home />
                </>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
