import Section from "../Section/Section";
import Info from "./Info";
import Social from "./Social";
import Photo from "./Photo";

const Hero = () => {
  return (
    <Section
      id="Home"
      className="h-[calc(100vh-65px)] pt-0"
      // className="relative my-0 mb-16 block sm:my-0 sm:h-[calc(100vh-65px)]"
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row">
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
    </Section>
  );
};

export default Hero;
