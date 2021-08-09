import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { signup } from '../actions';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

const SignUp = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const PostData = (e) =>{
        e.preventDefault();
        const user = {
            name,
            email,
            password,
          };
        dispatch(signup(user));
    }
    if(auth.signUp) {
        return <Redirect to={`/signin`} />;
    }
    return (
        <form>
            <h3>Sign Up</h3>

            <div className="form-group mt-3">
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Enter Name" />
            </div>

            <div className="form-group mt-3">
                <label>Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group mt-3">
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button onClick={(e) => PostData(e)} type="submit" className="btn btn-primary btn-block mt-3" >Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <Link to="signin">Sign in</Link>
            </p>
        </form>
    )
}

export default SignUp
