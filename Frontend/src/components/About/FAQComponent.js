import React, { useState } from 'react';
import Hero from "../../common/Hero"
import Footer from '../../common/Footer';
import FaqImage from '../../assests/images/dcColony.jpg'



const faqs = [
  {
    question: 'Is Barry real?',
    answer: 'Yes he is! You can stop by any of our offices and if he isn\'t too busy working that day, he would love to meet you!',
    image: 'https://cdn.prod.website-files.com/6251a78116ff630d031a61a1/626bf31d1199b85c6adf8a9d_IMG_5902.JPG'
  },
  {
    question: 'What are your office hours?',
    answer: 'Our office hours are from 9 AM to 5 PM, Monday to Friday.'
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact support via email at support@example.com or call us at (123) 456-7890.'
  },
  {
    question: 'Do you offer remote consultations?',
    answer: 'Yes, we offer remote consultations via Zoom. Please schedule an appointment through our website.'
  },
  {
    question: 'Where are your offices located?',
    answer: 'We have offices located in New York, Los Angeles, and Chicago.'
  }
];

const FAQItem = ({ faq, index, isOpen, toggleOpen }) => {
  return (
    <div className={`border ${isOpen ? 'border-red-500' : 'border-gray-200'} rounded-lg mb-4 transition-all duration-300`}>
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleOpen(index)}>
        <h2 className="text-lg font-medium">{faq.question}</h2>
        <div className="transform transition-transform">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-red-500">
              <path fill="currentColor" d="M18.364 5.636l-1.414-1.414L12 9.172 7.05 4.222l-1.414 1.414L10.828 12l-5.192 5.192 1.414 1.414L12 14.828l4.95 4.95 1.414-1.414L13.172 12z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4  border-red-500 transition-all duration-300">
          <p>{faq.answer}</p>
          {faq.image && (
            <figure className="w-richtext-align-center w-richtext-figure-type-image">
              <div>
                <img src={faq.image} alt="Barry" loading="lazy" className="mt-4" />
              </div>
            </figure>
          )}
        </div>
      )}
    </div>
  );
};

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Hero text={"FAQ"} text1={"services"} image={FaqImage} />
      <h1 className="text-2xl md:text-6xl text-gray text-center m-5 p-5 font-bold mb-4 font-sans ">FAQ's</h1>
      <div className="max-w-2xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            isOpen={openIndex === index}
            toggleOpen={toggleOpen}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default FAQComponent;
