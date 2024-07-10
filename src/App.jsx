import {
  PopularProduct,
  CustomerReview,
  Footer,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQualityproduct,
  Hero,
} from "./Section";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav />

    <section className=" xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding ">
      <PopularProduct />
    </section>
    <section className="padding ">
      <SuperQualityproduct />
    </section>
    <section className="padding-x py-10 ">
      <Services />
    </section>
    <section className="padding ">
      <SpecialOffer />
    </section>
    <section className="padding bg-pink-200 shadow-2xl rounded-lg mr-4 ml-4 ">
      <CustomerReview />{" "}
    </section>
    <section className="padding-x py-16 sm:py-32 w-full ">
      <Subscribe />{" "}
    </section>
    <section className="padding-x padding-t pb-8 bg-black ">
      <Footer />{" "}
    </section>
  </main>
);
export default App;
