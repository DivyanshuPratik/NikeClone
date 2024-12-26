import React, { useState } from 'react'
import ButtonWithLogo from '../components/ButtonWithLogo'
import { arrowRight } from '../assets/icons'
import { statistics,shoes } from '../data/data'
import { bigShoe1,bigShoe2,bigShoe3 } from '../assets/images'

const Hero = () => {
	const [activeImagePath,setImagePath] = useState(bigShoe1);
	const handleThumbnail = (data) =>{
		console.log(data);
		setImagePath(data.bigShoe);
	}
  return (
    <div className='xl:flex max-xl:flex-col gap-4'>
    <section className='pt-28 xl:flex-row flex-col h-screen xl:w-2/5 max-xl:w-full '>
      <div className='flex-col '>
        <p className='font-montserrat text-xl text-coral-red pb-8'>Our Summer collections</p>
        <span className='relative z-10 text-8xl font-palanquin font-bold whitespace-nowrap bg-white'>The New Arrival</span><br />
        <div className='mb-4'><span className='text-8xl font-palanquin font-bold text-coral-red'>Nike </span>
        <span className='text-[90px] font-palanquin font-bold'>Shoes</span></div>
        <p className='font-montserrat text-slate-gray text-xl mb-1 pl-1'>Discover stylish Nike arrivals, quality</p>
        <p className='font-montserrat text-slate-gray text-xl pl-1 mb-14'>comfort, and innovation for your active life.</p>
        <ButtonWithLogo text="Shop Now" imgURL={arrowRight}/>
        <div className='flex flex-wrap gap-16 mt-4'>
          {statistics.map((item)=>{
            return <div>
              <p className='text-[48px] font-bold font-palanquin'>{item.value}</p>
              <p className='font-montserrat text-slate-gray'>{item.label}</p>
            </div>
          })}          
        </div>
      </div>
      
    </section>
    <div className='flex justify-center max-xl:mt-4 h-screen xl:w-full  bg-[#ECEEFF] px-4'>
			<img src={activeImagePath} width={610} height={502} className='md:h-[502px] relative self-center max-md:h-[400px] max-md:w-[480px]'/>
			<div className='flex absolute gap-4 max-xl:top-[1400px] xl:top-[650px] max-xl:left-1/2 max-xl:-translate-x-1/2'>
				{shoes.map((item)=>{
					return <div onClick={()=>handleThumbnail(item)} className={`bg-[#c1c4de] w-[160px] h-[160px] flex justify-center items-center rounded-lg ${(item.bigShoe===activeImagePath)?"border-2 border-coral-red":"border-2 border-gray-400"}`}>
						<img src={item.thumbnail} width={127} height={105}/>
					</div>
				})}
			</div>
    </div>
	</div>
  ) 
}

export default Hero
