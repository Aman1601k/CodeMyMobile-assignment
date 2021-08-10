import React, { useState } from 'react'
import '../index.css'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../actions';
import { Redirect } from "react-router";

const SignIn = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const PostData = (e) =>{
        e.preventDefault()
        const user = {
          email,
          password,
        };
        dispatch(login(user));
    }
    if (auth?.authenticate) {
        return <Redirect to={`/`} />;
      }
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">


        <form>
                <h3>Sign In</h3>

                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group mt-3">
                    <label>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={(e) => PostData(e)} type="submit" className="btn btn-primary btn-block mt-3">Submit</button>
                <p className="forgot-password text-right">
                Don't have an account?<Link to="signup"> Sign up</Link>
                </p>
            </form>
        </div>
        </div>
    )
}

export default SignIn


