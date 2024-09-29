import React, { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import './Header.css'
import { TiThMenu } from "react-icons/ti";

export default function Header({offset, setOffset,preOffset}) { 
  const [show, setShow]=useState(false);

  const isShow= (offset<preOffset)&&(offset>100)?'fixed':'relative';
  console.log(isShow);

  const handlehamburger=()=>{
    setShow(!show);
  }
  return (
    <header className={`flex head ${isShow}`}>
      <div className='flex spaceBetween w70'>
        <div className='logo flex'>
          <h2>WorldAltas</h2>
        </div>
       <div className={show?"mobile":"web"}>
       <ul className='flex linkPages'>
          <li><NavLink to ="/" onClick={handlehamburger} className="decorationNone white">Home</NavLink></li>
          <li><NavLink to ="about" onClick={handlehamburger} className="decorationNone white">About</NavLink></li>
          <li><NavLink to ="country" onClick={handlehamburger} className="decorationNone white">Country</NavLink></li>
          <li><NavLink to ="contact" onClick={handlehamburger} className="decorationNone white">Contact</NavLink></li>
        </ul>
       </div>
        <div className='menuIcon'><button onClick={handlehamburger}><TiThMenu className='burgeri' /></button></div>
      </div>

    </header>
  );
}
