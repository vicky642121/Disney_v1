import React from 'react'

const Headeritems = ({name,Icon}) => {
  return (
    <div className='HeaderItems flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
        {Icon}
        <h2 className='md:block'>{name}</h2>
    </div>
  )
}
export default Headeritems;