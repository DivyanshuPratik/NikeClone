import React from 'react'

const ButtonWithLogo = ({text,imgURL}) => {
  return (
    <button className='flex justify-evenly gap-3 font-montserrat px-8 py-3 text-white bg-coral-red rounded-full border-coral-red'>
        {text}
        <img src={imgURL} className='rounded-full'/>
    </button>
  )
}

export default ButtonWithLogo
