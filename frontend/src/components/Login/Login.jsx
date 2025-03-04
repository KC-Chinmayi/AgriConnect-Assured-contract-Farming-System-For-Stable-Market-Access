import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from '../../utils/constant';
import { toast } from 'sonner';
import axios from 'axios';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-scroll';
import { setLoading, setUser } from '../../redux/authSlice';
import { Loader2 } from 'lucide-react';
import Navbar3 from '../Navbar3/Navbar3';

const Login = () => { 
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    const navigate = useNavigate();
    const dispatch=useDispatch();
    const {loading}=useSelector(store=>store.auth);

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`,input, {
                headers: {
                    "Content-type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/Page2");
                toast.success(res.data.message);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
        }finally{
            dispatch(setLoading(false));
        }
    };

    return (
        <div>
   <Navbar3/>
       
        <div className="login-container">
         
            <div className="form-wrapper">
                <form onSubmit={submitHandler}>
                    <h1 className="form-heading">Login</h1>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="aaa@gmail.com"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                        />
                    </div>
                    
                    <div className="radio-group">
                        <li className="radio-option">
                            <input 
                                type="radio"
                                name="role"
                                value="farmer" 
                                checked={input.role === 'farmer'}
                                onChange={changeEventHandler}
                            />
                            <label>farmer</label>
                        </li>
                        <li className="radio-option">
                            <input 
                                type="radio" 
                                name="role" 
                                value="company"
                                checked={input.role === 'company'}
                                onChange={changeEventHandler} 
                            />
                            <label>company</label>
                        </li>
                    </div>
                    {
                       
                        <button type="submit" className="button">Login</button>
                    
                    }
                   
                    <span className="signup-link">Don't have an account? <Link to="/signup">Signup</Link></span>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
