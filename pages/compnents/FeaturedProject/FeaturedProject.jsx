import React, { useRef, useState } from 'react'
import styles from '../../../styles/FeaturedProject.module.css'
import Arrow from '../../../public/assets/arrow-up-right.png'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Marquee from '../../compnents/Marquee/Marquee'
import 'swiper/css'
import 'swiper/css/pagination';
import Button from '../Buttons/Button/Button'
import Heading from '../Heading/Heading'

const FeaturedProject = ({ data, marqueeText, heading }) => {
  const swiper = useSwiper()
  const [dataIndex, setDataIndex] = useState(0)
  const swiperRef = useRef()
  const projectData = data[dataIndex] || {}

  return (
    <>
      <div className={styles.featured_project_section}>
        <Marquee>{marqueeText}</Marquee>
        <div className={styles.featured_project_wrapper}>
          <div className={styles.featured_project_content}>
            <Heading> featured project </Heading>
            <div className={styles.featured_project_content_two}>
              <div className={styles.featured_project_content_two_left}>
                <div
                  className={styles.featured_project_content_two_left_heading}
                >
                  <h2>
                    <span>{projectData.title || ''}</span> <br />
                    {projectData.subtitle || ''}
                  </h2>
                  <p>{projectData.description || ''}</p>
                </div>
                <Button>our featured themes</Button>
              </div>
              <div className={styles.featured_project_content_two_right}>
                <h1>{projectData.heading || ''}</h1>
                <div
                  className={styles.featured_project_content_two_right_image}
                >
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper)}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    pagination={true}
                    direction='horizontal'
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper
                    }}
                    onRealIndexChange={(e) => {
                      setDataIndex(e.activeIndex)
                    }}
                  >
                    <SwiperSlide>
                      <img src='/assets/portfolio1.jpeg' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/assets/postfolio2.jpeg' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/assets/LogoPortfolio3.png' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/assets/VideoPortfolio5.png' alt='' />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div
                  className={styles.featured_project_content_two_right_arrow_left}
                  onClick={() => {
                    swiperRef?.current?.slidePrev()
                  }}
                >
                  <img src='/assets/arrowLeft.png' alt='' />
                </div>

                <div
                  className={styles.featured_project_content_two_right_arrow_right}
                  onClick={() => {
                    swiperRef?.current?.slideNext()
                  }}
                >
                  <img src='/assets/arrowRight.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProject