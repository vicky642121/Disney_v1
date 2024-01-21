import React, { useEffect } from 'react'
import AxoApi from "../Constant/Api"
const Slider = () => {

useEffect(()=>{
    getTrendingMovies();
},[])

const getTrendingMovies = async()=>{
    await AxoApi.getTrendingVideos.then(response=>{
        console.log(response)
    })
}
  return (
    <div>Slider</div>
  )
}

export default Slider;