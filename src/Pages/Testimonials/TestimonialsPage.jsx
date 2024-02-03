import React from "react";
import "./testimonials.scss";
import NavBar from "../../Components/NavBar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const TestimonialsPage = () => {
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
                "--swiper-pagination-color": "#6C22A6",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div className="eachItemContainer">
                  <div className="eachItemWrapper">
                    <h1 className="testimonialName">John smilga</h1>
                    <h3>Coding Addict</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam rerum architecto cumque. Pariatur maxime velit
                      quod recusandae libero est.dolor sit amet consectetur
                      adipisicing elit. Aperiam rerum architecto cumque.
                      Pariatur maxime velit quod recusandae libero est.
                    </p>
                    <h2>Web developer at coding addict</h2>
                  </div>
                  <img
                    src="https://www.shutterstock.com/image-photo/headshot-close-portrait-latin-confident-600nw-2303502257.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eachItemContainer">
                  <div className="eachItemWrapper">
                    <h1 className="testimonialName">John smilga</h1>
                    <h3>Coding Addict</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam rerum architecto cumque. Pariatur maxime velit
                      quod recusandae libero est.dolor sit amet consectetur
                      adipisicing elit. Aperiam rerum architecto cumque.
                      Pariatur maxime velit quod recusandae libero est.
                    </p>
                    <h2>Web developer at coding addict</h2>
                  </div>
                  <img
                    src="https://www.shutterstock.com/image-photo/headshot-close-portrait-latin-confident-600nw-2303502257.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eachItemContainer">
                  <div className="eachItemWrapper">
                    <h1 className="testimonialName">John smilga</h1>
                    <h3>Coding Addict</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam rerum architecto cumque. Pariatur maxime velit
                      quod recusandae libero est.dolor sit amet consectetur
                      adipisicing elit. Aperiam rerum architecto cumque.
                      Pariatur maxime velit quod recusandae libero est.
                    </p>
                    <h2>Web developer at coding addict</h2>
                  </div>
                  <img
                    src="https://www.shutterstock.com/image-photo/headshot-close-portrait-latin-confident-600nw-2303502257.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eachItemContainer">
                  <div className="eachItemWrapper">
                    <h1 className="testimonialName">John smilga</h1>
                    <h3>Coding Addict</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam rerum architecto cumque. Pariatur maxime velit
                      quod recusandae libero est.dolor sit amet consectetur
                      adipisicing elit. Aperiam rerum architecto cumque.
                      Pariatur maxime velit quod recusandae libero est.
                    </p>
                    <h2>Web developer at coding addict</h2>
                  </div>
                  <img
                    src="https://www.shutterstock.com/image-photo/headshot-close-portrait-latin-confident-600nw-2303502257.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="eachItemContainer">
                  <div className="eachItemWrapper">
                    <h1 className="testimonialName">John smilga</h1>
                    <h3>Coding Addict</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam rerum architecto cumque. Pariatur maxime velit
                      quod recusandae libero est.dolor sit amet consectetur
                      adipisicing elit. Aperiam rerum architecto cumque.
                      Pariatur maxime velit quod recusandae libero est.
                    </p>
                    <h2>Web developer at coding addict</h2>
                  </div>
                  <img
                    src="https://www.shutterstock.com/image-photo/headshot-close-portrait-latin-confident-600nw-2303502257.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <div className="slider-controler">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
