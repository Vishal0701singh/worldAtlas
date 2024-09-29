import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();
    const error= useRouteError();


    const handleNavigate =()=>{
        navigate(-1);
    }
  return (
    <div>
        <h1>Oops!!! Error occured</h1>
        {error && <p>{error.data}</p> }
      <button className='btn' onClick={handleNavigate}>Go back</button>
    </div>
  );
}
