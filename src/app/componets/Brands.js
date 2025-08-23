"use client"
import brandImg1 from "../../../public/Images/brand1.webp";
import brandImg2 from "../../../public/Images/brand2.webp";
import brandImg3 from "../../../public/Images/brand3.webp";
import brandImg4 from "../../../public/Images/brand4.webp";
import brandImg5 from "../../../public/Images/brand5.webp";
import brandImg6 from "../../../public/Images/brand6.webp";
import brandImg7 from "../../../public/Images/brand7.webp";
import brandImg8 from "../../../public/Images/brand8.webp";
import React from 'react';
import Image from 'next/image';
import "../../../public/sass/pages/brand.scss";
import { useRef } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Brand = () => {
  const swiperRef = useRef(null);
  return (
    <section className="orginal_brand">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="h3_brand">
              <h3>Original Brands</h3>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={40}
              slidesPerView={7}
              className="brand_Swiper"
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }} 
              breakpoints={{
                // Smaller phones
                320: { slidesPerView: 3, spaceBetween: 10 },

                // 361px - 575px
                361: { slidesPerView: 3, spaceBetween: 15 },

                // 576px - 767px
                576: { slidesPerView: 4, spaceBetween: 20 },

                // 768px - 991px (tablets)
                768: { slidesPerView:  5, spaceBetween: 20 },

                // 992px - 1199px (mewdium desktops)
                992: { slidesPerView:  5, spaceBetween: 25 },

                // 1200px - 1299px
                1200: { slidesPerView: 6, spaceBetween: 25 },

                // 1300px - 1399px
                1300: { slidesPerView: 6, spaceBetween: 30 },

                // 1400px - 1599px
                1400: { slidesPerView: 6, spaceBetween: 30 },

                // 1600px - 1679px
                1600: { slidesPerView: 6, spaceBetween: 35 },

                // 1680px - 1919px
                1680: { slidesPerView: 6, spaceBetween: 35 },

                // 1920px and above
                1920: { slidesPerView: 7, spaceBetween: 40 },
              }}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
              allowTouchMove={false}
            >

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg1} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg2} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg3} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg4} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg5} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg6} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg7} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg8} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
      {/* <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={7}
        className="brand_Swiper"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      > */}
      {/* <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={7}
        className="brand_Swiper"
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      > */}
    </section>
  )
}

export default Brand;