import Nav from "./components/Nav"
import CustomerReview from "./sections/CustomerReview"
import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import Subscribe from "./sections/Subscribe"
import SuperQuality from "./sections/SuperQuality"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="padding-l padding-r ">
        <Hero></Hero>
      </section>
      <section className="padding max-[550px]:pt-10">
        <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffer></SpecialOffer>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview></CustomerReview>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer></Footer> 
      </section>
    </main>
  )
}

export default App
