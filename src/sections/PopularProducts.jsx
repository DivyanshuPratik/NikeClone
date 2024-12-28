import { products } from "../data/data";
import { shoe4,shoe5,shoe6,shoe7 } from "../assets/images";
import { star } from "../assets/icons";
import tailwindConfig from "../../tailwind.config";
const PopularProducts = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-5">
        <p className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</p>
        <div><p className="font-montserrat text-lg text-slate-gray mt-3 mb-8">Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.</p></div>
      </div>
      <div className="flex gap-8 flex-wrap w-full">
        {products.map((item)=>{
          return <div className="w-[20%] min-w-[180px] flex-col">
            <img src={item.imgURL} className="mb-6"/>
            <p className={"before:content-star before:align-middle font-montserrat text-md font-medium text-slate-gray mb-3"}>    ({item.stars})</p>
            <p className="font-montserrat font-semibold text-lg">{item.name}</p>
            <p className="text-coral-red font-palanquin text-3xl font-extrabold"> {item.price}</p>
          </div>
        })}
      </div>
    </section>
  )
}

export default PopularProducts
