
const Subscribe = () => {
  return (
    <section className="max-container">
      <div className="flex max-lg:flex-col max-lg:gap-16 max-sm:text-left max-lg:text-center justify-between items-center">
        <div className="lg:max-w-md w-full">
          <p className="font-palanquin text-4xl font-bold">Sign Up for <span className="text-coral-red">Updates</span> & newsletter</p>
        </div>
        <div className="max-sm:hidden w-[43%] max-lg:w-[83%] flex items-center p-2.5 rounded-full border-slate-gray border-[1px] h-[75px] justify-between">
          <input type="text" placeholder="subscribe@nike.com" className="text-slate-gray outline-none ml-5"/>
          <button className="bg-coral-red text-white font-montserrat text-[18px] px-10 py-3 rounded-full">Sign Up</button>
        </div>
        <div className="hidden w-full max-sm:flex flex-col items-center">
          <input type="text" placeholder="subscribe@nike.com" className=" input w-[90%] text-slate-gray mb-6"/>
          <button className="w-[90%] bg-coral-red text-white font-montserrat text-[18px] px-10 py-3 rounded-full">Sign Up</button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
