import React from 'react';
import './CountryCard.css';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function CountryCard({ curEle }) {
  // console.log(curEle);
  const { capital, flags, name, population, region } = curEle;
  const countryName = (name.common).length > 10 ? ((name.common.slice(0, 10).trim()) + "...") : (name.common);

  return (
    <div >
      <div className='flex wrap center backCard CountrybackCardWH'>
        <div className='flex colomn card CountryCardWH'>
          <div className="imageContainer wrap flex center">
            <img className='countryLogo' src={flags.svg} alt="" />
          </div>

          <h2>{countryName}</h2>
          <p><span className='spn fwait'>Population: </span> <span className='fwait'>{population}</span></p>
          <p><span className='spn fwait'>Region: </span> <span className='fwait'>{region}</span></p>
          <p><span className='spn fwait'>Capital: </span> <span className='fwait'>{capital[0]}</span></p>
          <NavLink to={`/country/${name.common}`}><button className='btn flex'> Read More <FaLongArrowAltRight /></button></NavLink>
        </div>
      </div>
    </div>
  );
}

