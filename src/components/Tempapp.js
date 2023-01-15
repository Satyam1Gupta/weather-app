import React,{useEffect, useState} from 'react';
//import { FaStreetView } from "react-icons/fa";
import  "./css/style.css";

export const Tempapp = () => {
    const[city, setCity] = useState(null);
    const[search, setSearch] = useState(null );
    useEffect( ()=>{
        const fetchApi=async()=>{
            const url= ` http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a35064674451f5d56c6b812cc3903ce4`
           const response= await fetch(url);
           const resJson = await response.json();
           //console.log(resJson);
           setCity(resJson.main);
        };
        fetchApi();
    }, [search])
    return (
        <>
        <div className='box'>
            <div className="inputData">
                <input type="search" 
                className="inputField"
                placeholder='Enter City Name'
                 onChange={(event) =>{ 
                  setSearch(event.target.value)
                 }}
                />
            </div>
            {
                !city ? (
                    <h4 className='noData'>No Data Found</h4>
                ):( 
                    <div>
                    <div className='info'>
                    <h2 className='location'   >
                    <br></br>
                    <br></br>
                    {/* <FaStreetView/> */}
                        {search}
                        </h2>
                        
                    <h1 className='temp'>
                        {city.temp}°cel
                    </h1>
                    <p className='tempmin_max'>
                     min: {city.temp_min}°cel | max: {city.temp_max}°cel
                    </p>
                   </div>
                 
                   </div>
                )
            }
              <div className='wave'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
            <div className='four'></div>
            </div>
        </div> 
        </>
    )
}
export default Tempapp;
