import React, { useState } from 'react'
import DisneyImages from '../images';
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus ,HiDotsVertical} from "react-icons/hi";
import Disneystrings from '../Constant/Strings';
import Headeritems from './Headeritems';

const Header = () => {
//disney-->imdb password
//vigneshpandian--->username
  const [toggle ,setToggle] = useState(false);
  const menu = [
    {
      name:Disneystrings.menu.home,
      icone:<HiHome/>
    },
    {
      name:Disneystrings.menu.search,
      icone:<HiMagnifyingGlass/>
    },
    {
      name:Disneystrings.menu.watchls,
      icone:<HiPlus />
    },
    {
      name:Disneystrings.menu.org,
      icone:<HiStar/>
    },
    {
      name:Disneystrings.menu.mv,
      icone:<HiPlayCircle/>
    },
    {
      name:Disneystrings.menu.series,
      icone:<HiTv/>
    },
  ]
  return (
    <div className='DisneyHeader flex items-center justify-between gap-8 p-5'>
      <div className='flex gap-8 items-center'>
        <img src={DisneyImages.DsnyLogo} className='w-[85px] md:w-[115px] object-cover'></img>
        <div className='hidden md:flex gap-8'>
          {menu.map((mu,key)=>{
            // console.log(mu)
            return <Headeritems name={mu.name} Icon ={mu.icone}/>
          })}
        </div>
        <div className='md:hidden flex gap-5'>
          {menu.map((mu,key)=>key < 3 &&(
            // console.log(mu)
             <Headeritems name={""} Icon ={mu.icone}/>
          ))}
        </div>
        <div className='md:hidden relative'onClick={()=>setToggle(!toggle)}>
          <Headeritems name={""} Icon ={<HiDotsVertical/>}/> 
          {toggle?   
            <div className='smallscreen_options absolute mt-3 bg-[#121212] border-[1px] border-gray-800 p-3 px-3 py-4 rounded-lg'>
                  {menu.map((mu,key)=>key > 2 &&(
                  // console.log(mu)
                  <Headeritems name={mu.name} Icon ={mu.icone}/>
                  ))}
              </div> 
              :
              ""}
        </div>
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full cursor-pointer'/>
    </div>
  )
}

export default Header;