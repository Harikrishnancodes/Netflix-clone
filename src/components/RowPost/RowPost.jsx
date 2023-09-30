import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../ axios'
import {api_Key, imageUrl} from "../../constants/constants"
import YouTube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])

  const [urlId, seturlId] = useState({})




  useEffect(() => {
 axios.get(props.url).then((response)=>{
  console.log(response.data);
 setMovies(response.data.results)
 })
  }, [])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?l \&api_key=${api_Key}`).then(response=>{
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      
      }
    })
    
    
  }
  
  return (
    <div className='raw'>
        <h2 >{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img  onClick={()=>handleMovie(obj.id)}     className = {props.isSmall ? "smallPoster" :   "poster"} src= {`${imageUrl+obj.backdrop_path }`}    alt="" />
            )}
        </div>
    
      
          </div>
  )
}

export default RowPost