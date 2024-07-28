// Login.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert('All fields are required');
      return;
    }

    if (/\s/.test(loginData.email)) {
      alert('Email should not contain spaces');
      return;
    }

    if (login(loginData.email, loginData.password)) {
      // Redirect based on user role
      const { role } = JSON.parse(localStorage.getItem('auth'));
      navigate(role === 'admin' ? '/admin' : '/');
    } else {
      alert('Invalid credentials');
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
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Sign In
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
