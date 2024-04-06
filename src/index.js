import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HeroSection from './Home/HeroSection';
import reportWebVitals from './reportWebVitals';
import SignIn from './SignIn/SignIn';
import Footer from './Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroSection />
    <SignIn role = "mentee"/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
