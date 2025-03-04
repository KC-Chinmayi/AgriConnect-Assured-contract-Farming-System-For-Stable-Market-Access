import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from '../../utils/constant';
import { toast } from 'sonner';
import Navbar from '../Navbar/Navbar';
import './Signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/authSlice';
import { Loader2 } from 'lucide-react';
import Navbar3 from '../Navbar3/Navbar3';

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  });
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { 'Content-Type': "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar3 />

      <div className="signup-container">
        <div className="form-wrapper">
          <form onSubmit={submitHandler}>
            <h1 className="form-heading">Sign Up</h1>

            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                placeholder="aaa"
                value={input.fullname}
                name="fullname"
                onChange={changeEventHandler}
              />
            </div>

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
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="8052556463"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder=""
                value={input.password}
                name="password"
                onChange={changeEventHandler}
              />
            </div>

            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  name="role"
                  value="farmer"
                  checked={input.role === 'farmer'}
                  onChange={changeEventHandler}
                />
                <label>Farmer</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  name="role"
                  value="company"
                  checked={input.role === 'company'}
                  onChange={changeEventHandler}
                />
                <label>Company</label>
              </div>
            </div>

            {/* <div className="file-input-group">
              <label>Profile</label>
              <input accept="image/*" type="file" onChange={changeFileHandler} />
            </div> */}

            {/* {loading ? (
              <button className="submit-button" disabled>
                <Loader2 className="w-full my-4 animate-spin" /> Please wait
              </button>
            ) : (
            )} */}

            <button type="submit" className="submit-button">Sign Up</button>
            <span>
              Already have an account?{" "}
              <Link to="/login" className="login-link">Login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
