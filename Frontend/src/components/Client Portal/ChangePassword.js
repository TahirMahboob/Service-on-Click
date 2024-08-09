import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log({ password });
      // Add your form submission logic here
    } else {
      console.error('Passwords do not match');
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-center text-2xl mb-6 text-gray-800">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <label className="block text-gray-700">New Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 pt-5 flex items-center text-sm leading-5"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 pt-5 flex items-center text-sm leading-5"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Change Password
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-700">
          <Link to="/login">
            <button className="text-red-500 hover:underline">
              Go back to login
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
