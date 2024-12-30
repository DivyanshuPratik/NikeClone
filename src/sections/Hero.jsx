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
    <div className='flex max-xl:flex-col gap-4 max-container'>
    <div className='pt-28 flex xl:flex-row flex-col h-screen xl:w-2/5 max-xl:w-full '>
      <div className='flex-col '>
        <p className='font-montserrat text-xl text-coral-red pb-8'>Our Summer collections</p>
        <span className='relative z-10 text-8xl font-palanquin font-bold xl:whitespace-nowrap xl:bg-white max-xl:-z-10 pr-4'>The New Arrival</span><br />
        <div className='mb-4'><span className='text-8xl font-palanquin font-bold text-coral-red'>Nike </span>
        <span className='text-[90px] font-palanquin font-bold'>Shoes</span></div>
        <p className='font-montserrat text-slate-gray text-xl mb-1 pl-1'>Discover stylish Nike arrivals, quality</p>
        <p className='font-montserrat text-slate-gray text-xl pl-1 mb-14'>comfort, and innovation for your active life.</p>
        <ButtonWithLogo text="Shop Now" imgURL={arrowRight}/>
        <div className='flex flex-wrap max-md:gap-6 gap-10 mt-4'>
          {statistics.map((item)=>{
            return <div>
              <p className='text-[48px] font-bold font-palanquin'>{item.value}</p>
              <p className='font-montserrat text-slate-gray'>{item.label}</p>
            </div>
          })}          
        </div>
      </div>
      
    </div>
    <div className='relative max-[440px]:top-[200px] max-[465px]:top-[110px] max-sm:right-[32px] sm:right-[64px] w-dvw max-[450px]:mt-[250px] max-xl:mt-4 max-[700px]:h-[90%] min-[700px]:h-screen xl:w-full bg-hero bg-cover max-[784px]:mt-28 max-[512px]:mt-[220px]'>
			<div className=' max-[400px]:top-20 w-[100%] h-full flex justify-center flex-col items-center'>
          <div><img src={activeImagePath} width={610} height={502} className='m-auto  md:h-[502px] max-md:h-[400px] max-md:w-[480px]'/></div>
          <div className='mb-auto flex justify-center gap-4 max-sm:bottom-[34%] max-xl:bottom-[45%] xl:bottom-[60%] max-xl:left-1/2  '>
            {shoes.map((item)=>{
              return <div onClick={()=>handleThumbnail(item)} className={`max-[550px]:w-[90px] max-[550px]:h-[90px] bg-card bg-cover w-[160px] max-sm:w-[100px]  max-sm:h-[100px] h-[160px] flex justify-center items-center rounded-lg ${(item.bigShoe===activeImagePath)?"border-2 border-coral-red":"border-2 border-gray-400"}`}>
                <img src={item.thumbnail} width={127} height={105} />
              </div>
            })}
          </div>        
      </div>
      
    </div>
	</div>
  ) 
}

export default Hero
