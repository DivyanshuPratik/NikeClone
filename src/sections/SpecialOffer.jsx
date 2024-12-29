import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section>
      <div className="flex gap-8 max-[1175px]:flex-col-reverse">
        <div className="flex max-[1175px]:justify-center">
          <img src={offer} className="object-contain xl:max-w-[620px] min-[1175px]:max-w-[500px]" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[48px] font-semibold font-montserrat max-[1175px]:mb-3"><span className="text-coral-red">Special</span> Offer</p>
          <p className="info-text">Embark on a shopping journey that redefines your experience with
           unbeatable deals. From premier selections to incredible savings, we offer 
           unparalleled value that sets us apart.</p>
           <br />
          <p className="info-text max-[1175px]:mb-3">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
          <div className="flex w-full gap-6 mt-8 mb-8">
            <button className="flex justify-evenly gap-3 font-montserrat px-8 py-3 text-white bg-coral-red rounded-full border-coral-red">
              Shop Now
              <img src={arrowRight} className="rounded-full" />
            </button>
            <button className="font-montserrat px-8 py-3 text-slate-gray ring-1 ring-slate-gray rounded-full">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
