import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import About from '../about/About';

export default function Home() {
  return (
    <>
      <div className='common w70 flex center hero-section'>
        <div className=' flex textSection'>
          <h1>Explore the world, One <br />Country at a time.</h1>
          <p>Discover the history, culture and beauty of every nation. Sort, search and filter through countries as per your need</p>
          <NavLink className="decorationNone" to="country"><button className='btn flex'>Start Exploring <FaLongArrowAltRight /></button></NavLink>

        </div>
        <div className=' imgSection'>
          <img src="world.png" alt="wrold.png" />
        </div>
      </div>
    <About/>
    </>
  );
}
