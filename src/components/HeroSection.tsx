import Info from "./HeroSection/Info";
import Social from "./HeroSection/Social";
import Photo from "./HeroSection/Photo";

const HeroSection = () => {
  return (
    <section className="relative mb-16 mt-16 sm:mb-0 sm:h-screen md:mt-0">
      <div className="flex w-full flex-col justify-center gap-10 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 md:flex-row">
        <div className="order-2 flex flex-col justify-center gap-5 md:order-none md:w-1/2 lg:w-1/3">
          <div className="flex min-w-[305px] flex-col space-y-5 text-center md:text-left">
            <Info />
          </div>
          <div className="mx-auto">
            <Social />
          </div>
        </div>
        <div className="order-1 mx-auto rounded-full md:order-none md:mx-0">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
