import React from 'react';
import Hero from "../../common/Hero"
import Footer from '../../common/Footer';
import BlogImage from '../../assests/images/blog.jpg'



const mediaItems = [
  { type: 'image', src: '/images/Card1.jpg' },
  { type: 'image', src: '/images/Card1.jpg' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { type: 'image', src: '/images/Card1.jpg' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { type: 'image', src: '/images/Card1.jpg' },
  { type: 'image', src: '/images/Card1.jpg' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { type: 'image', src: '/images/Card2.jpg' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { type: 'image', src: '/images/Card2.jpg' },
  { type: 'image', src: '/images/Card1.jpg' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { type: 'image', src: '/images/Card2.jpg' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

const Gallery = () => {

  return (
    <>
      <Hero text="Gallery" text1="services" image={BlogImage} />
      <h1 className="text-2xl md:text-6xl text-gray text-center m-5 p-5 font-bold mb-4 font-sans ">Gallery</h1>
      <div className="container mx-auto px-4 mb-[80px] mt-[20px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Media ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                  controls
                ></video>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
