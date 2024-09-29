import React from 'react';
import countryData from '../../api/countryData.json';
import './About.css';

export default function About() {
  // console.log(countryData);
  const { id, countryName, capital, population, interestingFact } = countryData;
  return (
    <div className='flex center colomn'>
      <div className='commonMrgin w70 flex center colomn'>
        <h2>Here are the Interesting Facts </h2>
        <h2>we're proud of</h2>
      </div>
      <ul className='commonMrgin w70 flex center aboutCard wrap'>{
        countryData.map((curEle) => {
          return <li key={curEle.id} className='flex center backCard backCardWH'>
            <div className='flex colomn card cardWH'>
            <h3>{curEle.countryName}</h3>
            <p><span className='spn'>Capital:</span> {curEle.capital} </p>
            <p><span className='spn'>Population: </span> <span>{curEle.population}</span></p>
            <p><span className='spn'>InterestinFacts: </span> <span>{curEle.interestingFact}</span></p>
            </div>
          </li>
        })
      }

      </ul>
    </div>
  );
}
