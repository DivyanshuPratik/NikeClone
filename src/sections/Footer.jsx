import { footerLogo } from "../assets/images"
import { socialMedia,footerLinks } from "../data/data"
const Footer = () => {
  return (
    <section className="max-container">
      <div className="pb-8 max-lg:flex-col flex gap-20 justify-between">
        <div className="flex flex-col">
          <div className="w-[150px] h-[50px]">
            <img src={footerLogo} className="hover:cursor-pointer"/>
          </div>    
          <p className="font-montserrat text-[16px] sm:max-w-sm text-white-400 mt-4">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>    
          <div className="flex gap-4 mt-8">
            {socialMedia.map((item)=>{
              return <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
                <img src={item.src} alt="" />
              </div>
            })}
          </div>
        </div>
        <div className="text-white flex gap-20 justify-evenly flex-1 flex-wrap max-lg:w-[80%]">
          {footerLinks.map((item)=>{
            return <div className="flex flex-col">
              <p className="font-montserrat text-2xl font-medium">{item.title}</p>
              {item.links.map((link)=>{
                return <a className="mt-3 font-montserrat text-white-400 hover:text-white" href={link.link}>{link.name}</a>
              })}
            </div>
          })}
        </div>
        
      </div>
      <div>
          <p className="text-white before:mr-2 before:pt-1.5 before:content-copyright font-montserrat text-md text-white-400 flex items-center">Copyright. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer
