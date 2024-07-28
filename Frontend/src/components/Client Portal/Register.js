import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [registerData,setRegistrationData]=useState({
    userName:'',
    email:'',
    password:'',
  })
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!registerData.userName || !registerData.email || !registerData.password) {
      alert("Required All fields");
      return;
    }
  try{
    const response= await axios.post('http://localhost:4000/user/register',registerData)
  console.log(`${response.data} and its status is ${response.status}`)
  if(response.status==201){
    alert("you Registered successfully");
    navigate('/login');
  }
  if(response.status==200) {
    alert("Email Laready exist");
  }
  }
  catch(error){
    console.log(`while Registration error ${error}`);
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
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={registerData.password}
                name='password'
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
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
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <a href="/" className="flex items-center space-x-2">
              <img
                    className="block  w-[110px] mt-3 "
                    src="/images/Logo.jpg"
                    alt=""
                  />
              </a>
              <p className="mt-6 text-[#c7c4c4]">
                call / text: (+92) 317-7190178 <br />
                Wahabnadeem311@gmail.com
                <br />
                @Idealcity Gujranwala
              </p>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://www.instagram.com/wahabnadeem24?igsh=MWFyNmRhdTY1c3Nwdg%3D%3D&utm_source=qr"
                  className="flex items-center"
                >
                  <img
                    src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/625f2ceae51df17451f97fcf_59db4b22bcf399000193eb64_instagramiconWhite.svg"
                    loading="lazy"
                    width="23"
                    alt="Instagram"
                  />
                </a>
                <a href="#" className="flex items-center">
                  <img
                    src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/6258c0fb6e5319af43989fde_yelp.svg"
                    loading="lazy"
                    width="16"
                    alt="Yelp"
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/3ZPrQMwiWq9XViwB/?mibextid=LQQJ4d"
                  className="flex items-center"
                >
                  <img
                    src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/625f2e3f6e9f1d34fd023c00_facebook_icon.svg"
                    loading="lazy"
                    width="10"
                    alt="Facebook"
                  />
                </a>
                <a href="#" className="flex items-center">
                  <img
                    src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/6258c978f82597d4850e308a_Link.svg"
                    loading="lazy"
                    width="20"
                    alt="Link"
                  />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between text-[#c7c4c4]">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <a href="#" className="block mt-2">
                  About
                </a>
                <a href="#" className="block mt-2">
                  Professional cleaning services
                </a>
                <a href="#" className="block mt-2">
                  Cleaning services near me
                </a>
                <a href="#" className="block mt-2">
                  Blog
                </a>
                <a href="#" className="block mt-2">
                  FAQ
                </a>
                <a href="#" className="block mt-2">
                  Trabajo / Job
                </a>
                <a href="#" className="block mt-2">
                  Privacy policy
                </a>
              </div>
              <div className="w-full lg:w-1/2">
                <a href="/request-a-quote" className="block mt-2">
                  Request quote
                </a>
                <a
                  href="https://berryclean.launch27.com/login"
                  target="_blank"
                  className="block mt-2"
                >
                  Client portal
                </a>
                <a href="#" className="block mt-2">
                  Book now
                </a>
                <a href="/refer" className="block mt-2">
                  Refer a friend
                </a>
                <a href="/members" className="block mt-2">
                  Memberships
                </a>
                <a href="/cleaning-gift-card" className="block mt-2">
                  Gift cards
                </a>
              </div>
            </div>
          </div>
          <hr className="mt-8 text-[#c7c4c4]" />
          <div className="mt-8 flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
              <p>Copyright ©2024 IdealCity</p>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-right">
              <p>
                Powered by{" "}
                <a href="http://www.withsimba.com" target="_blank">
                  Wahab & Tahir
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Register;
