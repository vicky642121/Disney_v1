import React from 'react' 
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
import DisneyImages from '../images'

const ProductioHouse = () => {
    const list =[

        {
            id:1,
            image:DisneyImages.DsnyLogo2,
            vid:disneyV
        },
        {
            id:2,
            image:DisneyImages.DsnyPixar,
            vid:pixarV
        },
        {
            id:1,
            image:DisneyImages.DsnyMarvel,
            vid:marvelV
        },
        {
            id:1,
            image:DisneyImages.DsnyNational,
            vid:nationalGeographicV
        },
        {
            id:1,
            image:DisneyImages.DsnyStar,
            vid:starwarV
        },
    ]
  return (
    <div className='flex gap-2  md:gap-5 p-2 px-5 md:px-15'>
        {list.map((item,key)=>(
            <div className='border-[2px] border-gray-600 rounded-lg hover:scale-95 transition-all duration-100 ease-in cursor-pointer'>
                <video src={item.vid} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'></video>
                <img src={item.image} alt='production house' className='w-full z-[1]'/>
            </div>
        ))}
    </div>
  )
}

export default ProductioHouse;