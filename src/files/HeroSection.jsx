import { Link } from "react-router-dom";
import "./custom.css";
export function HeroSection() {
  return (
    <>
      <section
        id="herosection"
        className="text-gray-600 body-font"
        aria-label="Hero Section"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <header className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              id="herosection-heading"
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            >
              <span className="text-green-400 font-bold">MI-Network</span>:
              Innovative Web Solutions for Your Business
            </h1>
            <p className="mb-8 leading-relaxed " id="hero-text-p">
              Minetwork is a dynamic software company specializing in creating
              innovative websites that enhance your online presence and drive
              success. We help businesses stand out online.
            </p>
            <div className="flex justify-center">
              <Link
                to="/services"
                className="button ml-4 inline-flex text-gray-700 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg"
                title="Services"
              >
                services
              </Link>
            </div>
          </header>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>
    </>
  );
}
