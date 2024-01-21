import React, { useEffect, useRef, useState } from 'react'
import AxoApi from "../Constant/Api"
import { HiChevronLeft,HiChevronRight  } from "react-icons/hi";
const screenWidth =window.innerWidth;
const Slider = () => {

  const imageurl = import.meta.env.VITE_TMDB_IMGURL;
  const [movieList , setMovieList]= useState([]);
  const elementRef = useRef();
  useEffect(()=>{
      getTrendingMovies();
  },[])


  const getTrendingMovies = async()=>{
      await AxoApi.getTrendingVideos.then(response=>{
          setMovieList(response.data.results);
      })
  }
  const SliderRight =(element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const SliderLeft =(element)=>{
    element.scrollLeft-=screenWidth-110
  }
  return (
    <div className='flex'>
      <HiChevronLeft className='hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>SliderLeft(elementRef.current)}/>
      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {
          movieList.map((item,index)=>(
            <img src={imageurl+item.backdrop_path} alt='trending movie' className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-600 transition-all duration-100 ease-out'/>
          ))
        }
      </div>
      <HiChevronRight className='hidden md:block  text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'  onClick={()=>SliderRight(elementRef.current)}/>
    </div>

  )
}

export default Slider;