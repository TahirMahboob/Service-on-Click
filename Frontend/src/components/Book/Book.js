import React, { useState, useEffect } from 'react';
  import Hero from '../../common/Hero';
  import BlogImage from '../../assests/images/blog.jpg';
  import Footer from '../../common/Footer';
 import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Book() {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setMapLoaded(true);
        },
        (error) => {
          console.error('Error getting the location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const validateEmail = (email) => {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

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
                      onChange={handleEmailChange}
                    />
                    {emailError && <span className="text-red-500">{emailError}</span>}
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
                    <label htmlFor="Services" className="mb-2">Services*</label>
                    <select
                      id="Services"
                      name="Services"
                      data-name="Services"
                      required
                      className="form-select w-full p-2 border border-gray-300 rounded"
                    >
                      <option className="text-gray-500" value="" disabled selected>select services</option>
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
                    <label htmlFor="Gujranwala-area" className="mb-2">Select Area *</label>
                    <select
                      id="Gujranwala-area"
                      name="Gujranwala-area"
                      data-name="Gujranwala area"
                      required
                      className="form-select w-full p-2 border border-gray-300 rounded"
                    >
                      <option className="text-gray-500" value="" disabled selected>Select Area</option>
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
                      <option value="Gujranwala Cantt">Rahwali Cantt</option>
                      <option value="Eminabad">Eminabad</option>
                      <option value="Qila Didar Singh">Qila Didar Singh</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="Address" className="mb-2">Address *</label>
                    <input
                      className="form-input w-full p-2 border border-gray-300 rounded"
                      maxLength="256"
                      name="Address"
                      data-name="address"
                      placeholder="Address"
                      type="text"
                      id="Address"
                      required
                    />
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
            
            <div className="my-8">
              {mapLoaded && (
                  <div className="my-8">
                  {mapLoaded && (
                    <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAj6ogEuBJVVLKzWIYMgXHasjvxk_x_asQ">
                      <GoogleMap
                        mapContainerStyle={{ height: '400px', width: '100%' }}
                        center={{ lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) }}
                        zoom={15}
                      >
                        <Marker position={{ lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) }} />
                      </GoogleMap>
                    </LoadScript>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Book;
