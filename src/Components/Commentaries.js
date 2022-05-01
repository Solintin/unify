import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Book1 from "./Book1";
// import Book2 from "./Book2";
import feature3 from "../Assets/Svg/feature3.svg";
import feature4 from "../Assets/Svg/feature4.svg";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Component-styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Commentaries = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);
  return (
    <div className="text-black mx-8">
      <Swiper
        slidesPerView={windowWidth > 760 ? 3 : 1}
        
        spaceBetween={30}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        swipeable={false}
        autoPlay={false}
        showIndicators={true}
        infiniteLoop={false}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="commentaries-1 flex flex-col space-y-6 my-5 ">
            <h1 className="font-bold text-left">Awesome</h1>
            <div className="text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              proin pellentesque nibh id nunc, enim, vestibulum consectetur.
              Nisl posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce
              mattis facilisis est tortor ornare venenatis sagittis.”
            </div>
            <div className="text-right">
              <p className="font-bold mb-3">Adebayo Akinnusi</p>
              <p className="">Lecturer,Harvard</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="commentaries-2 flex flex-col space-y-6 my-5 ">
            <h1 className="font-bold text-left">Awesome</h1>
            <div className="text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              proin pellentesque nibh id nunc, enim, vestibulum consectetur.
              Nisl posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce
              mattis facilisis est tortor ornare venenatis sagittis.”
            </div>
            <div className="text-right">
              <p className="font-bold mb-3">Adebayo Akinnusi</p>
              <p className="">Lecturer,Harvard</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="commentaries-3 flex flex-col space-y-6 my-5 ">
            <h1 className="font-bold text-left">Awesome</h1>
            <div className="text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              proin pellentesque nibh id nunc, enim, vestibulum consectetur.
              Nisl posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce
              mattis facilisis est tortor ornare venenatis sagittis.”
            </div>
            <div className="text-right">
              <p className="font-bold mb-3">Adebayo Akinnusi</p>
              <p className="">Lecturer,Harvard</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="commentaries-1 flex flex-col space-y-6 my-5  ">
            <h1 className="font-bold text-left">Awesome</h1>
            <div className="text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              proin pellentesque nibh id nunc, enim, vestibulum consectetur.
              Nisl posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce
              mattis facilisis est tortor ornare venenatis sagittis.”
            </div>
            <div className="text-right">
              <p className="font-bold mb-3">Adebayo Akinnusi</p>
              <p className="">Lecturer,Harvard</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="commentaries-2 flex flex-col space-y-6  my-5">
            <h1 className="font-bold text-left">Awesome</h1>
            <div className="text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              proin pellentesque nibh id nunc, enim, vestibulum consectetur.
              Nisl posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce
              mattis facilisis est tortor ornare venenatis sagittis.”
            </div>
            <div className="text-right">
              <p className="font-bold mb-3">Adebayo Akinnusi</p>
              <p className="">Lecturer,Harvard</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="commentaries-3 flex flex-col space-y-6  my-5">
            <h1 className="font-bold text-left">Awesome</h1>
            <div className="text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              proin pellentesque nibh id nunc, enim, vestibulum consectetur.
              Nisl posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce
              mattis facilisis est tortor ornare venenatis sagittis.”
            </div>
            <div className="text-right">
              <p className="font-bold mb-3">Adebayo Akinnusi</p>
              <p className="">Lecturer,Harvard</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="commentaries-2 flex flex-col space-y-6  my-5">
            <h1 className="font-bold text-left">Awesome</h1>
            <div className="text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              proin pellentesque nibh id nunc, enim, vestibulum consectetur.
              Nisl posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce
              mattis facilisis est tortor ornare venenatis sagittis.”
            </div>
            <div className="text-right">
              <p className="font-bold mb-3">Adebayo Akinnusi</p>
              <p className="">Lecturer,Harvard</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="commentaries-1 flex flex-col space-y-6  my-5">
            <h1 className="font-bold text-left">Awesome</h1>
            <div className="text-xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              proin pellentesque nibh id nunc, enim, vestibulum consectetur.
              Nisl posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce
              mattis facilisis est tortor ornare venenatis sagittis.”
            </div>
            <div className="text-right">
              <p className="font-bold mb-3">Adebayo Akinnusi</p>
              <p className="">Lecturer,Harvard</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default Commentaries;
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
