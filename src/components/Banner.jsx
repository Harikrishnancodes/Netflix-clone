import React, { useEffect, useState } from 'react'
import axios from '../ axios'
import {api_Key,imageUrl} from '../constants/constants'
import "./Banner.css"


function Banner() {
  const [movie, setMovie] = useState({});
  const [Api,setApi]=useState('efc00bd97fa775937e99cd1a53382d4c')
  useEffect(() => {
   axios.get(`trending/all/week?api_key=${api_Key}&language=en-US`).then((response)=>{
    const responseData = response.data.results;
      const randomIndex = Math.floor(Math.random() * responseData.length);
      
      console.log(responseData[randomIndex]);
      
      setMovie(responseData[randomIndex]);
    });
  }, [api_Key]);
  
  return (
   
    <div  style ={{backgroundImage:`url(${movie ? imageUrl +  movie.backdrop_path :""}`}}    className='banner'>
        <div className="content">
            <h1 className='title'>{movie ? movie.title :""}</h1>
             <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
             </div>

               <h2 className='description'>{movie ? movie.overview :''} </h2>
        </div>
            <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner