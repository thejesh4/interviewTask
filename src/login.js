import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navigate } from "react-router-dom";
import {
  getToken
} from './utils';


import * as actionsreators from './actions';

function Login(props){
  const [credential, setCredential] = useState({});
  const [Login, setLogin] = useState(getToken());
  const { loginAction } = props.actions;

  const getCredential = (e) => {
      const login = {
          ...credential,
          [e.target.name]: e.target.value
      };
      setCredential(login);
  }

  const login = () => {
      fetch('http://restapi.adequateshop.com/api/authaccount/login', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(credential)
      }).then((resp) => resp.json()).then((data) => {
          loginAction({token: data.data.Token});
          setLogin(true);
      });
  }
    // {
    //     "email":"Developer5@gmail.com",
    //     "password":123456
    // }
  const getNav = () => {
    if (Login) {
        return <Navigate to='/home' replace={true} />
    } else {
        return (<div className="container">
        <div className="row">
            <div className="col-4">
                <form>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input
                            id="email"
                            type="text" 
                            className='form-control'
                            placeholder="email address"
                            name='email'
                            onChange={(e) => {
                                getCredential(e); 
                            } }
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input
                            id="password"
                            type="password" 
                            className='form-control'
                            placeholder="password"
                            name='password'
                            onChange={(e) => {
                                getCredential(e); 
                            } }
                        />
                    </div>
                    <button onClick={() => {
                        login();
                    }}
                    className="btn btn-primary"
                    type="button"
                    >
                        login
                    </button>
                </form>
            </div>
        </div>
        <figure class="text-end">
            <blockquote class="blockquote">
                <p>login credential</p>
            </blockquote>
            <figcaption class="blockquote-footer">
            <p>{`"email":"Developer5@gmail.com"`}</p>
            <p>{`"password":123456`}</p>
            </figcaption>
        </figure>
    </div>)
    }
  };
  return (<>
  {getNav()}
  </>)
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionsreators, dispatch)
  }
};

//   const mapStateToProps = (state) => {
//     return {
//         isLogin: state.isLogin
//     }
// };

export default connect(null, mapDispatchToProps)(Login);
