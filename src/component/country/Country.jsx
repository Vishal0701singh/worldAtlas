import React, { useEffect, useRef, useState } from 'react';
import { getCountryData } from '../../api/postCountry';
import './Country.css'
import CountryCard from '../../ui/layput/CountryCard';
import { useNavigation } from 'react-router-dom';
import Loader from '../../ui/layput/Loader';

export default function Country() {
  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState("");
  const [newApiData, setNewApiData] = useState([]);
  const [ascData, setascData] = useState(false);
  const [loading, setLoading]=useState(true);
 


  const getdata = async () => {
    const Countrydata = await getCountryData();
    const { data } = Countrydata;
    // setApidata(data);
    setNewApiData(data);
    setLoading(false);
  }

  useEffect(() => {
    getdata();

  }, [])

  // on change function 
  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }
  const handleSelectOn = (e) => {
    e.preventDefault();
    setFilter(e.target.value);

  }
  // console.log(filter);

  const search = (curEle) => {
    if (input) {
      return curEle.name.common.toLowerCase().includes(input.toLowerCase());
    }
    return curEle;
  }


  const filterRegion = (curEle) => {
    if (filter === 'all') return curEle;
    return curEle.region === filter;
  }

  const afterSearchData = newApiData.filter((curEle) => search(curEle) && filterRegion(curEle));


  const handlAscbtn = (e) => {
    const asc = [...newApiData].sort(function (a, b) {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });
    // console.log(asc);
    setascData(!ascData);
    setNewApiData(asc);

  }
  const handlDecbtn = (e) => {
    const dec = [...newApiData].sort(function (a, b) {
      if (a.name.common > b.name.common) {
        return -1;
      }
      if (a.name.common < b.name.common) {
        return 1;
      }
      return 0;
    });
    // console.log(dec);
    setascData(dec);
    setNewApiData(dec);
  }

if(loading){
  return <Loader/>
}

  return (
    <div className='flex w70 commonMrgin colomn'>
      <div className='flex  wrap filter' >
        <input
          type="text"
          className='inputfield'
          placeholder='Search'
          value={input}
          onChange={handleOnChange}


        />
        <button className='btn' value='asc' onClick={handlAscbtn} >Asc</button>
        <button className='btn' value='dec' onClick={handlDecbtn} >Dec</button>
        <select
          className="select-section btn"
          value={filter}
          onChange={handleSelectOn}

        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <ul className='commonMrgin flex center aboutCard'>
        {
          afterSearchData.map((curEle, index) => {
            return <CountryCard key={index} curEle={curEle} />
          })
        }
      </ul>
    </div>
  );
}
