import React, { useState } from 'react'
import Button from '../Buttons/Button/Button'
import styles from '../../../styles/Banner.module.css'
import PlayReel from '../HeroSection/PlayReel'
import VideoModal from '../VideoModal/VideoModal'
import Video from '../../../public/assets/video/DipixelsAllServices.mp4'
import OrderForm from '../../compnents/Forms/OrderForm'
import Link from 'next/link'
const Banner = () => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const openVideoModal = () => {
    setVideoModalOpen(true)
  }
  const closeVideoModal = () => {
    setVideoModalOpen(false)
  }
  const openFormModal = () => {
    setIsFormModalOpen(true)
  }
  const closeFormModal = () => {
    setIsFormModalOpen(false)
  }
  return (
    <>
      {isFormModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <div onClick={closeFormModal} className='modal_close'>
              <img src='/assets/CloseIcon.svg' alt='' />
            </div>
            <OrderForm
              closeModal={closeFormModal}
              isUserComingFromHome={true}
            />
          </div>
        </div>
      )}
      <div className={styles.Banner_section}>
        <div className={styles.Banner_section_wrapper}>
          <div className={styles.background_video_container}>
            <img src='/assets/Banner_new.gif' alt='' />
          </div>
          <div className={styles.Banner_section_content}>
            <h1>
              <span> we are </span> dipixels
            </h1>
            <p>
              Build a unique identity for your brand and allow it to thrive in
              the marketplace. Our customised logo designs capture the true
              essence of what you stand for. We make sure every detail is
              on-brand and one of kind because
              <span> you deserve the best.</span>
            </p>
          </div>
          <div className={styles.Banner_ButtonsDiv}>
            <div
              onClick={() => {
                openFormModal()
              }}
            >
              <Button> get a quote </Button>
            </div>

            {/* <Button>case study </Button> */}
          </div>
          <div className={styles.dipixels_header_Reel} onClick={openVideoModal}>
            <PlayReel />
          </div>
        </div>
        <div className={styles.Banner_section_content_links}>
          <div className={styles.Banner_section_content_links_facebook}>
            <Link href=' https://www.facebook.com/Dipixels.LLC/'>
              <img src='/assets/facebook.svg' alt='' />
              <p>facebook</p>
            </Link>
          </div>
          <div className={styles.Banner_section_content_links_twitter}>
            <Link href='https://twitter.com/Dipixels_/ '>
              <img src='/assets/twitter.png' alt='' />
              <p>twitter</p>
            </Link>
          </div>
          <div className={styles.Banner_section_content_links_instagram}>
            <Link href=''>
              <img src='/assets/instagram.png' alt='' />
              <p>instagram</p>
            </Link>
          </div>
          <div className={styles.Banner_section_content_links_linkedin}>
            <Link href='https://www.linkedin.com/company/dipixels'>
              <img
                src='/assets/linkedin-in.png'
                alt=''
                width='15'
                height='15'
              />
              <p>linkedin</p>
            </Link>
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className='videoOverlay'>
          <div className='videoModal'>
            <div onClick={closeVideoModal} className='modal_close'>
              <img src='/assets/CloseIcon.svg' alt='' />
            </div>
            <VideoModal videoLink={Video} />
          </div>
        </div>
      )}
    </>
  )
}

export default Banner

