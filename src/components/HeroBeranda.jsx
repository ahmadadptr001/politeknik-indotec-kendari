import Carousel from "../UI/Carousel";

export default function HeroBeranda() {
  return (
    <div className="">
      <Carousel
        baseWidth={300}
        autoplay={true}
        autoplayDelay={5000}
        pauseOnHover={true}
        loop={true}
        round={false}
      />
    </div>
  );
}
