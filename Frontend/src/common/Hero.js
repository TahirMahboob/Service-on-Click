import React, { useContext, useState } from 'react';
import DropDown from '../common/DropDown';
import SmallDropDown from '../common/SmallDropDown';
import { Link } from 'react-router-dom';
import UserContext from '../../src/components/Context/UserContext';


function Hero({ text, text1, image }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser({
      userDetails: '',
      token: '',
    });
    window.localStorage.removeItem('auth');
    console.log(" now at logout uservalue", user);
  };
  console.log("uservalue", user);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const serviceArea = [{ name: 'Dc Colony', url: '/colony' }, { name: 'Model Town', url: '/town' }, { name: 'Ghakhar', url: '/Ghakhar' }, { name: 'Satellite Town', url: '/sattelite' },]
  const aboutSection = [{ name: 'FAQs', url: '/faq' }, { name: 'Blog', url: '/blog' }]
  const clientSection = [{ name: 'Login', url: '/login' }, { name: 'Register', url: '/register' }, { name: 'Book Now', url: '/book' },]
  return (
    <>
      <div className="relative">
        <nav className="absolute top-2 left-0 w-full bg-opacity-50 text-white z-10">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/" className="flex items-center space-x-2">
                    <img
                      className="block w-[100px] sm:w-[150px] lg:w-[90px] lg:mt-[5px] rounded-full"
                      src="/images/Logo.jpg"
                      alt="Logo"
                    />
                  </a>
                </div>

                <div className="hidden sm:block sm:ml-6 text-black">
                  <div className="flex space-x-4 ml-40">
                    <a
                      href="/"
                      className="text-lg font-medium text-white  hover:text-black  block px-3 py-2 rounded-md">
                      Services
                    </a>

                    <div className="relative group">
                      <button className="text-lg font-semibold hover:text-black text-white  px-3 py-2 rounded-md flex items-center">
                        Services areas
                        <svg
                          className="ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"


                          />
                        </svg>
                      </button>
                      <DropDown array={serviceArea} />


                    </div>

                    <div className="relative group">
                      <button className="text-lg font-semibold  hover:text-black text-white  px-3 py-2 rounded-md flex items-center">
                        About
                        <svg
                          className="ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <DropDown array={aboutSection} />




                    </div>

                    <div className="relative group">
                      <button className="text-lg font-semibold hover:text-black text-white px-3 py-2 rounded-md flex items-center ">
                        Client Portal
                        <svg
                          className="ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <DropDown array={clientSection} />
                    </div>

                  </div>
                </div>

              </div>

              <div className="hidden sm:block bg-[#FF0000] p-3 rounded-xl">
                <a
                  href="https://wa.me/923177190178"
                  className="button-4 w-button text-lg font-semibold text-white hover:text-white px-3 py-2 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </div>

              <div className="sm:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-blue-500 text-xl hover:text-gray-600 px-3 py-2 rounded-md"
                >
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white mt-[25px]">
                <a
                  href="/"
                  className="text-lg font-medium text-gray-500 hover:text-white block px-3 py-2 rounded-md "
                >
                  Services
                </a>

                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-lg font-medium text-gray-500 hover:text-gray-500 px-3 py-2 rounded-md flex items-center"
                  >
                    Service Area
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <SmallDropDown array={serviceArea} />

                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="text-lg font-medium text-gray-500 hover:text-gray-500 px-3 py-2 rounded-md flex items-center"
                  >
                    About
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isAboutOpen && (
                    <SmallDropDown array={aboutSection} />
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setIsClientPortalOpen(!isClientPortalOpen)}
                    className="text-lg font-medium text-gray-500 hover:text-gray-500 px-3 py-2 rounded-md flex items-center"
                  >
                    Client Portal
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isClientPortalOpen && (
                    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                      {user?.token ? (
                        <p
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                        >
                          Logout
                        </p>
                      ) : (
                        <>
                          <Link to="/login">
                            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                              Login
                            </p>
                          </Link>
                          <Link to="/register">
                            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                              Register
                            </p>
                          </Link>
                        </>
                      )}
                      <Link to="/book">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                          Book Now
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </nav >
      </div >


      {/* </>
  );
} */}

      <div
        className="relative w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 123, 255, 0.89) 25%, rgba(0, 123, 255, 0) 80%), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
       <div className="absolute inset-0 flex items-center justify-start px-8 mt-40">
  <div className="text-left">
    <h1 className="text-[1.75rem] md:text-6xl text-white font-bold  font-sans">
      {/* About our */} {text}
    </h1>
    <h1 className="text-[1.75rem] md:text-6xl text-white font-bold font-sans mb-4">
      {/* Services */} {text1}
    </h1>
    <p className="text-base md:text-xl text-white mb-8">
      Happiness Guaranteed. If you're not satisfied, we'll come back and
      <br /> make it right, free of charge.
    </p>
    <Link to="/Book">
      <button className="bg-[#FF0000] text-white px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105">
        Book Now
      </button>
      <div className="flex">
        <img
          src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars.png"
          loading="lazy"
          width="115"
          height="auto"
          alt="5 stars rating"
          className="mr-2 mt-4 transition-transform transform hover:scale-110"
          srcSet="
            https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-500.png 500w,
            https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-800.png 800w,
            https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-1080.png 1080w,
            https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-1600.png 1600w,
            https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-2000.png 2000w,
            https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars.png 2025w
          "
          sizes="115px"
        />
        <p className="mt-4 text-white">4.9 Stars</p>
      </div>
    </Link>
  </div>
</div>



      </div>
      {/* end of header */}
    </>
  );
}

export default Hero;
