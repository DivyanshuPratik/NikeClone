import {services} from "../data/data"
import { truckFast,shieldTick,support } from "../assets/icons"
const Services = () => {
  
  return (
    <section className="max-container">      
      <div className="flex justify-center flex-wrap gap-8">
        {services.map((item)=>{
          return <div className="flex-1 sm:min-w-[350px] shadow-3xl w-full px-8 py-12 rounded-3xl">
            <div className='bg-coral-red w-8 h-8 flex justify-center items-center rounded-full'>
              <img src={item.imgURL} width={24} height={24} />
            </div>
            <p className="font-palanquin text-3xl font-semibold">{item.label}</p>
            <p className="info-text">{item.subtext}</p>
          </div>
        })}
      </div>
    </section>
  )
}

export default Services
