import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionsreators from './actions';

function Header(props) {
  const { logoutAction } = props.actions;
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <a href="#">
              Home
          </a>
        </div>
        <div className="col-6 text-end">
          {props.isLogin? <a href="#" onClick={() => { logoutAction() }}>log out</a> : <a>login</a>}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionsreators, dispatch)
  }
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
