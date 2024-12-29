import ButtonWithLogo from "../components/ButtonWithLogo"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section>
      <div className="flex max-lg:flex-col lg:justify-between">
        <div className="flex flex-col justify-center">
          <p className="font-palanquin text-4xl font-bold">We Provide You<br></br>
          <span className="text-coral-red">Super Quality</span> Shoes</p>
          <p className="mt-6 mb-6 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted 
          footwear is designed to elevate your experience, providing you with
          unmatched quality, innovation, and a touch of elegance.
          </p>
          <button className="bg-coral-red text-white px-8 py-3 font-montserrat font-medium rounded-full w-[175px]">
            View Details
          </button>
        </div>
        <div className="max-lg:flex justify-center max-lg:pt-16">
          <img src={shoe8} alt="" />
        </div>
      </div>
    </section>
  )
}

export default SuperQuality
