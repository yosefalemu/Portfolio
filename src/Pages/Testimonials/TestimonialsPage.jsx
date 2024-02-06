import React from "react";
import "./testimonials.scss";
import NavBar from "../../Components/NavBar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import data from "../../utils/data/index.json";

const TestimonialsPage = () => {
  const testimonials = data.testimonials;
  return (
    <div>
      <NavBar />
      <div className="testimonialContainer">
        <h1>Testimonials</h1>
        <div className="testimonialWrapper">
          <div className="wholeContainer">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              style={{
                "--swiper-navigation-color": "#00abfa",
                "--swiper-navigation-size": "18px",
                "--swiper-pagination-color": "#00abfa",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="eachItemContainer" key={index}>
                    <div className="eachItemWrapper">
                      <h1 className="testimonialName">{item.name}</h1>
                      <h3>{item.workingPlace}</h3>
                      <p>{item.text}</p>
                      <h2>{item.role}</h2>
                    </div>
                    <img src={item.photo} alt="" />
                  </div>
                </SwiperSlide>
              ))}
              <div className="slider-controler">
                <div className="sliderWrapper">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
