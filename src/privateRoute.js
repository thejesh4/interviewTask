import React from "react";

import { connect } from 'react-redux';

import Login from './login'; 

function PrivateRoute({ children, isLogin }) {
  if (!isLogin) {
      return <Login />
  }

  return children;
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  }
};

export default connect(mapStateToProps)(PrivateRoute);
