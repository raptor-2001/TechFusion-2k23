import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/EventSlider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const EventSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="w-full h-[50vh] my-auto bg-img1 p-9 ">
      
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />{" "}
          <div className="absolute bottom-4 text-left text-white w-1/3 left-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              iusto!
            </p>
            <h2 className="font-semibold text-lg">
              {/* <Link to={"#"}>See More</Link> */}
              <p>See More</p>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <div className="absolute bottom-4 text-left text-white w-1/3 left-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              iusto!
            </p>
            <h2 className="font-semibold text-lg">
              {/* <Link to={"#"}>See More</Link> */}
              <p>See More</p>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div className="absolute bottom-4 text-left text-white w-1/3 left-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              iusto!
            </p>
            <h2 className="font-semibold text-lg">
              {/* <Link to={"#"}>See More</Link> */}
              <p>See More</p>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="absolute bottom-4 text-left text-white w-1/3 left-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              iusto!
            </p>
            <h2 className="font-semibold text-lg">
              {/* <Link to={"#"}>See More</Link> */}
              <p>See More</p>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          <div className="absolute bottom-4 text-left text-white w-1/3 left-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              iusto!
            </p>
            <h2 className="font-semibold text-lg">
              {/* <Link to={"#"}>See More</Link> */}
              <p>See More</p>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventSlider;
