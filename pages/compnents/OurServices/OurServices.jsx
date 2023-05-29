import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import Marquee from '../../compnents/Marquee/Marquee'
import Heading from '../Heading/Heading'
import styles from '../../../styles/OurServices.module.css'
const servicesData = [
  {
    title: 'app designs',
    image: '/assets/ServiceFour.png',
  },
  {
    title: 'web designs',
    image: '/assets/ServiceThree.png',
  },
  {
    title: 'logo designs',
    image: '/assets/ServiceTwo.png',
  },
  {
    title: 'video animation',
    image: '/assets/ServiceOne.png',
  },
  {
    title: 'app designs',
    image: '/assets/ServiceFour.png',
  },
  {
    title: 'web designs',
    image: '/assets/ServiceThree.png',
  },
  {
    title: 'logo designs',
    image: '/assets/ServiceTwo.png',
  },
  {
    title: 'video animation',
    image: '/assets/ServiceOne.png',
  },
]

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleServiceHover = (index) => {
    setHoveredIndex(index)
  }

  const handleServiceLeave = () => {
    setHoveredIndex(null)
  }
  return (
    <>
      <div className={styles.our_services_section}>
        <Marquee>Our Services Our Services</Marquee>
        <div className={styles.our_services_wrapper}>
          <div className={styles.our_services_content}>
            <Heading>our services</Heading>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween= {10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              // When window width is >= 640px
              640: {
                slidesPerView: 2,
              },
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // When window width is >= 1024px
              1024: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              1251: {
                slidesPerView: 3,
              },
              1660: {
                slidesPerView: 3,
              },
              1661: {
                slidesPerView: 4,
              }
            }}
          >
            <div className={styles.our_services_content_slider}>
              {servicesData.map((item, index) => {
                const isEvenIndex = index % 2 === 0
                return (
                  <SwiperSlide>
                    <div
                      className={`${
                        styles.our_services_content_sliders_images
                      } ${hoveredIndex === index ? styles.hovered : ''}`}
                      key={index}
                      onMouseEnter={() => handleServiceHover(index)}
                      onMouseLeave={handleServiceLeave}
                      style={{ marginTop: !isEvenIndex ? '70px' : '0px' }}
                    >
                      <img src={item.image} alt='' />
                      <div className={styles.overlay}></div>
                      <div
                        className={styles.title}
                        style={{
                          position: 'absolute',
                          zIndex: '99',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        className={
                          styles.our_services_content_sliders_images_gradient
                        }
                      ></div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default OurServices
