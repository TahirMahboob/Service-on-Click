import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Verify = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      let newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Verification code: ${code.join('')}`);
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-32">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Verify Your Code</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center mb-5 space-x-2">
            {code.map((num, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <Link to="/ChangePassword">
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg  "
          >
            Verify
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Verify;
