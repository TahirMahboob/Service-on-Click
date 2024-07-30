import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message, Spin } from 'antd';  // Added Spin component for loading state

import UserContext from '../Context/UserContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);  // Added loading state

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      message.error('All fields are required');
      return;
    }

    if (/\s/.test(loginData.email)) {
      message.error('Email should not contain spaces');
      return;
    }

    setLoading(true);  // Set loading to true when submitting

    try {
      const response = await axios.post(`http://localhost:4000/user/login`, {
        email: loginData.email,
        password: loginData.password,
      });

      setLoading(false);  // Set loading to false after the response

      if (response.data.status === 'success') {
        // Save tokens and user data
        const { token, refreshToken, user } = response.data;
        localStorage.setItem('auth', JSON.stringify({ token, refreshToken, user }));

        // Set user data in context
        setUser(user);

        // Redirect based on user role
        navigate(user.role === 'admin' ? '/admin' : '/');
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);  // Set loading to false if there's an error
      console.error('Error during login:', error);
      message.error('An error occurred during login, please try again');
    }
  };

  return (
    <div className="p-5 h-screen">
      <div className="max-w-md mx-auto my-10 p-5 border border-gray-300 rounded-md shadow-md">
        <h2 className="text-center text-2xl mb-6 text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 pt-5 flex items-center text-sm leading-5"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            {loading ? <Spin /> : 'Sign In'}  {/* Show loading spinner if loading */}
          </button>
        </form>
        <div className="flex justify-center mt-4 space-x-4">
          <Link to="/register">
            <button className="text-red-500 hover:underline">Sign Up</button>
          </Link>
          <Link to="/forgetpassword">
            <button className="text-red-500 hover:underline">Forget Password</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
