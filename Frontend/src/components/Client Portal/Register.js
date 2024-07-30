// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [registerData,setRegistrationData]=useState({
//     userName:'',
//     email:'',
//     password:'',
//   })
//   const navigate = useNavigate();
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setRegistrationData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!registerData.userName || !registerData.email || !registerData.password) {
//       alert("All fields are required");
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:4000/user/register', registerData);
//       console.log(response.data);
//       if (response.status === 201) {
//         alert("You registered successfully");
//         navigate('/login');
//       } else if (response.data.status === 'failed' && response.data.message === 'Email already exists') {
//         alert("Email already exists");
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       alert("An error occurred while registering. Please try again later.");
//     }
//   };
  

//   return (
//     <>
//       <div className='p-5 h-screen'>
//         <div className="max-w-md mx-auto my-10 p-5 border border-gray-300 rounded-md shadow-md">
//           <h2 className="text-center text-2xl mb-6 text-gray-800">Sign Up</h2>
//           <form onSubmit={handleSubmit}>
            
//           <div className="mb-4">
//               <label className="block text-gray-700">Username</label>
//               <input
//                 type="text"
//                 value={registerData.userName}
//                 onChange={handleChange}
//                 name='userName'
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 value={registerData.email}
//                 name='email'
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Password</label>
//               <input
//                 type="password"
//                 value={registerData.password}
//                 name='password'
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
//               />
//             </div>
           
//             <button type="submit" className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Sign Up</button>
//           </form>
//           <div className="text-center mt-4">
//             <p className="text-gray-700">
//               <Link to="/login">
//                 <button className="text-red-500 hover:underline">
//                   Already have an account? <br/> Sign In
//                 </button>
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>  
      
//     </>
//   );
// };

// export default Register;
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Import eye icons, for example, from FontAwesome
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { message } from 'antd';  

const Register = () => {
  const [registerData, setRegistrationData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameRegex = /^[a-zA-Z0-9_]{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!registerData.userName || !registerData.email || !registerData.password) {
      message.error("All fields are required");
      return;
    }

    if (!usernameRegex.test(registerData.userName)) {
      message.error("Username must be at least 5 characters long and can only contain letters, numbers, and underscores.");
      return;
    }

    if (!emailRegex.test(registerData.email)) {
      message.error("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(registerData.password)) {
      message.error("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/user/register', registerData);
      console.log(response.data);
      if (response.status === 201) {
        message.success("You registered successfully");
        navigate('/login');
      } else if (response.data.status === 'failed' && response.data.message === 'Email already exists') {
        message.error("Email already exists");
      }
    } catch (error) {
      console.error("Registration error:", error);
      message.error("An error occurred while registering. Please try again later.");
    }
  };

  return (
    <>
      <div className='p-5 h-screen'>
        <div className="max-w-md mx-auto my-10 p-5 border border-gray-300 rounded-md shadow-md">
          <h2 className="text-center text-2xl mb-6 text-gray-800">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                value={registerData.userName}
                onChange={handleChange}
                name='userName'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={registerData.email}
                name='email'
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={registerData.password}
                name='password'
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 pt-5 flex items-center text-sm leading-5"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
           
            <button type="submit" className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Sign Up</button>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-700">
              <Link to="/login">
                <button className="text-red-500 hover:underline">
                  Already have an account? <br/> Sign In
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Register;