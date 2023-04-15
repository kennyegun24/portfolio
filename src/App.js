import React, { useEffect, useState } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Head from './components/head/Head';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  const [isInitialized, setInitialized] = useState(false)
  useEffect(() => {
    if (!isInitialized) {
      AOS.init({ duration: 1000 })
      setInitialized(true)
    }
  }, [isInitialized])

  useEffect(() => {
    return () => {
      AOS.refreshHard(); // Removes all AOS classes from elements
      setInitialized(false); // Resets isInitialized state to false
    };
  }, []);

  return (
    <div className="App">
      <Head />
      <Body />
      <div className='appFooter'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
