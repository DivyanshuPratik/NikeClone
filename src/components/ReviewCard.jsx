import React from 'react'

const ReviewCard = ({imgURL,review,rating,name}) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={imgURL} className='h-[120px] w-[120px] rounded-full'/>
      <p className='info-text max-w-sm text-center'>{review}</p>
      <p className='before:content-star text-[20px] font-montserrat text-slate-gray'>   ({rating})</p>
      <p className='text-[28px] font-semibold'>{name}</p>
    </div>
  )
}

export default ReviewCard
