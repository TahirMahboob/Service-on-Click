import React, { useState, useEffect } from 'react';
import Hero from '../../common/Hero';
import BlogImage from '../../assests/images/blog.jpg';
import Footer from '../../common/Footer';

function Book() {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting the location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      <Hero text="Book" text1="Services Now" image={BlogImage} />
      <div className="page-wrapper">
        <div className="section-2">
          <div className="container mx-auto p-8">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Book Now</h1>
              </div>
            </div>
            <div id="Request-a-quote" className="w-full max-w-lg mx-auto">
              <form className="space-y-4 border 1px solid black p-5">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="First-name" className="mb-2">First Name *</label>
                    <input
                      className="form-input w-full p-2 border border-gray-300 rounded"
                      maxLength="256"
                      name="First-name"
                      data-name="First name"
                      placeholder="F-Name"
                      type="text"
                      id="First-name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Last-name" className="mb-2">Last Name *</label>
                    <input
                      className="form-input w-full p-2 border border-gray-300 rounded"
                      maxLength="256"
                      name="Last-name"
                      data-name="Last name"
                      placeholder="L-Name"
                      type="text"
                      id="Last-name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2">Email *</label>
                    <input
                      className="form-input w-full p-2 border border-gray-300 rounded"
                      maxLength="256"
                      name="email"
                      data-name="Email"
                      placeholder="Email"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Phone" className="mb-2">Phone *</label>
                    <input
                      className="form-input w-full p-2 border border-gray-300 rounded"
                      maxLength="256"
                      name="Phone"
                      data-name="Phone"
                      placeholder="+92--"
                      type="tel"
                      id="Phone"
                      required
                    />
                  </div>
                </div>



                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="Frequency" className="mb-2">Address *</label>
                    <input
                      className="form-input w-full p-2 border border-gray-300 rounded"
                      maxLength="256"
                      name="Address"
                      data-name="address"
                      placeholder="Address"
                      type="address"
                      id="address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="Gujranwala-area" className="mb-2">Select Gujranwala Area *</label>
                    <select
                      id="Gujranwala-area"
                      name="Gujranwala-area"
                      data-name="Gujranwala area"
                      required
                      className="form-select w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="" disabled selected>Select Area</option>
                      <option value="Satellite Town">Satellite Town</option>
                      <option value="Model Town">Model Town</option>
                      <option value="Peoples Colony">Peoples Colony</option>
                      <option value="Master City">Master City</option>
                      <option value="Citi Housing">Citi Housing</option>
                      <option value="Wapda Town">Wapda Town</option>
                      <option value="Garden Town">Garden Town</option>
                      <option value="Dc colony">Dc colony</option>
                      <option value="Ghakhar">Ghakhar</option>
                      <option value="Nowshera Virkan">Nowshera Virkan</option>
                      <option value="Kāmoke">Kāmoke</option>
                      <option value="Wazirabad">Wazirabad</option>
                      <option value="Gujranwala Cantt">Gujranwala Cantt</option>
                      <option value="Eminabad">Eminabad</option>
                      <option value="Qila Didar Singh">Qila Didar Singh</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="Gujranwala-area" className="mb-2">Select Services*</label>
                    <select
                      id="Services"
                      name="Services"
                      data-name="Services"
                      required
                      className="form-select w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="Paint Services">Paint Services</option>
                      <option value="House Cleaning Service">House Cleaning Service</option>
                      <option value="Electrician Service">Electrician Service</option>
                      <option value="Plumber Services">Plumber Services</option>
                      <option value="AC/Fridge Services">AC/Fridge Services</option>
                      <option value="Carpet Cleaning Services">Carpet Cleaning Services</option>
                    </select>
                  </div>
                </div>



                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="Location" className="mb-2">Current Location *</label>
                    <input
                      className="form-input w-full p-2 border border-gray-300 rounded"
                      maxLength="256"
                      name="Location"
                      data-name="Location"
                      placeholder="Location"
                      type="text"
                      id="Location"
                      value={` ${location.latitude}, ${location.longitude}`}
                      readOnly
                    />
                  </div>
                </div>
                <div className="p-2">
                  <div className="g-recaptcha" data-sitekey="6LcLJ5gpAAAAAGRCOYj8_OfHkZIY64tlHx9fd0LF"></div>
                </div>
                <div className="p-2">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="bg-[#FF0000] w-full text-white py-2 px-4 rounded cursor-pointer"
                    value="Submit form"
                  />
                </div>
              </form>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-4 md:ml-96">
              <img
                src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars.png"
                loading="lazy"
                width="115"
                height="auto"
                alt="5 stars rating"
                className="mb-2 md:mr-2 md:mb-0"
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
              <div className="text-lg text-center md:text-left">4.9 stars on</div>
              <img
                src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/660852c59db08fa48ef5ad0e_google.png"
                loading="lazy"
                alt="Google"
                height="5px"
                width="110px"
                className="mt-2 md:mt-0 md:ml-2 "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Book;
