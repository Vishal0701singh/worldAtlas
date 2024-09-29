import React from 'react';
import Header from '../HeaderFooter/Header';
import {Footer} from '../HeaderFooter/Footer';
import { Outlet } from 'react-router-dom';
import  { useEffect, useState } from 'react';
export default function Layout() {

  const [offset, setOffset] = useState(0);
  const [preOffset, setPreOffset] = useState(0);
 
  
  function MyApp () {
  
      
  
      useEffect(() => {
          const onScroll = () => setOffset((pre)=>{
           
             
              setPreOffset(pre);
            
            return (window.scrollY);
          });
          // clean up code
          window.removeEventListener('scroll', onScroll);
          window.addEventListener('scroll', onScroll, { passive: true });
          return () => window.removeEventListener('scroll', onScroll);
      }, []);
  
      console.log(offset); 
      console.log(preOffset);
  };
  MyApp()
  return (
    <>
    <Header
     offset={offset} 
     setOffset={setOffset} 
     preOffset={preOffset}
     setPreOffset={setPreOffset}
     />
    <Outlet/>
    <Footer/>
      
    </>
  );
}
