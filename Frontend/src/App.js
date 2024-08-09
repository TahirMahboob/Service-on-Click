// // import './App.css';
// // import React from 'react';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';

// // import Ourcleaning from './components/Our Cleaning/Ourcleaning';
// // import Book from './components/Book/Book';
// // import Colony from './components/Services Area/Colony';
// // import Town from './components/Services Area/Town';
// // import Ghakhar from './components/Services Area/Ghakhar';
// // import Sattelite from './components/Services Area/Sattelite';
// // import FAQComponent from './components/About/FAQComponent';
// // import Blog from './components/About/Blog';
// // import Login from './components/Client Portal/Login';
// // import Register from './components/Client Portal/Register';
// // import ForgetPassword from './components/Client Portal/ForgetPassword';

// // import Dashboard from './pages/Dashboard';
// // import MainLayout from './components/MainLayout';
// // import Services from './pages/Services';
// // import Customers from './pages/Customers';
// // import UserContextProvider from '../src/components/Context/UserContextProvider'
// // function App() {
 
// //   return (
// //     <UserContextProvider>
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Ourcleaning />} />
// //           <Route path="/book" element={<Book />} />
// //           <Route path="/colony" element={<Colony />} />
// //           <Route path="/Town" element={<Town />} />
// //           <Route path="/Ghakhar" element={<Ghakhar />} />
// //           <Route path="/sattelite" element={<Sattelite />} />
// //           <Route path="/faq" element={<FAQComponent />} />
// //           <Route path="/blog" element={<Blog />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route path="/forgetpassword" element={<ForgetPassword />} />
// //           <Route path="/admin" element={<MainLayout />}>
// //             <Route index element={<Dashboard />} />
// //             <Route path="services" element={<Services />} />
// //             <Route path="Customers" element={<Customers />} />
// //           </Route>
// //         </Routes>
// //       </BrowserRouter>
// //     </UserContextProvider>
// //   );
// // }

// // export default App;


// // App.js
// import './App.css';
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Ourcleaning from './components/Our Cleaning/Ourcleaning';
// import Book from './components/Book/Book';
// import Colony from './components/Services Area/Colony';
// import Town from './components/Services Area/Town';
// import Ghakhar from './components/Services Area/Ghakhar';
// import Sattelite from './components/Services Area/Sattelite';
// import FAQComponent from './components/About/FAQComponent';
// import Blog from './components/About/Blog';
// import Login from './components/Client Portal/Login';
// import Register from './components/Client Portal/Register';
// import ForgetPassword from './components/Client Portal/ForgetPassword';
// import Verify from './components/Client Portal/Verify';
// import Dashboard from './pages/Dashboard';
// import MainLayout from './components/MainLayout';
// import Services from './pages/Services';
// import Customers from './pages/Customers';
// import UserContextProvider from './components/Context/UserContextProvider';
// import PrivateRoute from './components/PrivateRoute';
// import ChangePassword from './components/Client Portal/ChangePassword'

// function App() {
//   return (
//     <UserContextProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Ourcleaning />} />
//           <Route path="/book" element={<Book />} />
//           <Route path="/colony" element={<Colony />} />
//           <Route path="/Town" element={<Town />} />
//           <Route path="/Ghakhar" element={<Ghakhar />} />
//           <Route path="/sattelite" element={<Sattelite />} />
//           <Route path="/faq" element={<FAQComponent />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgetpassword" element={<ForgetPassword />} />
//           <Route path="/verify" element={<Verify/>}/>
//           <Route path="/ChangePassword" element={<ChangePassword/>}/>

//           {/* Admin Route */}
//           <Route
//             path="/admin/*"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <MainLayout />
//               </PrivateRoute>
//             }
//           >
//             <Route index element={<Dashboard />} />
//             <Route path="services" element={<Services />} />
//             <Route path="customers" element={<Customers />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </UserContextProvider>
//   );
// }

// export default App;



// App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Ourcleaning from './components/Our Cleaning/Ourcleaning';
import Book from './components/Book/Book';
import Colony from './components/Services Area/Colony';
import Town from './components/Services Area/Town';
import Ghakhar from './components/Services Area/Ghakhar';
import Sattelite from './components/Services Area/Sattelite';
import FAQComponent from './components/About/FAQComponent';
import Verify from './components/Client Portal/Verify';
import Blog from './components/About/Blog';
import Login from './components/Client Portal/Login';
import Register from './components/Client Portal/Register';
import ForgetPassword from './components/Client Portal/ForgetPassword';
import ChangePassword from './components/Client Portal/ChangePassword';

import Dashboard from './pages/Dashboard';
import MainLayout from './components/MainLayout';
import Services from './pages/Services';
import Customers from './pages/Customers';
import UserContextProvider from './components/Context/UserContextProvider';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>


          <UserContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Ourcleaning />} />
                <Route path="/book" element={<Book />} />
                <Route path="/colony" element={<Colony />} />
                <Route path="/Town" element={<Town />} />
                <Route path="/Ghakhar" element={<Ghakhar />} />
                <Route path="/sattelite" element={<Sattelite />} />
                <Route path="/faq" element={<FAQComponent />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path="/verify" element={<Verify/>}/>

                {/* Admin Route */}
                <Route
                  path="/admin/*"
                  element={
                    <PrivateRoute requiredRole="admin">
                      <MainLayout />
                    </PrivateRoute>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="services" element={<Services />} />
                  <Route path="customers" element={<Customers />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </UserContextProvider>
        </PersistGate>
      </Provider>
    </div>

  );
}

export default App;