import React, { useEffect } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Head from './components/head/Head';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  })

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
