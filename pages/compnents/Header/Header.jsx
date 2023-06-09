import React, { useState, useEffect, useRef } from 'react'
import styles from '../../../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DropdownArrow from '/public/assets/dropdownArrow.svg'
import Image from 'next/image'
import Drawer from './Drawer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import StyledButton from '../Buttons/StyledButton/StyledButton'
// import useWindowSize from '../Hooks/useWindowSize'

const Header = () => {
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const drawerRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1400 });

    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.dipixels_header}>
        <div className={styles.wrapper}>
          <Link href='/' passHref>
            <div className={styles.dipixels_header_logo}>
              <img src='/assets/dipixelsLogo.png' alt='' />
            </div>
          </Link>

          <ul className={styles.dipixels_header_navbar}>
            {/* <li>
              <Link href="/" passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === "/" ? styles.active : ""
                  }`}
                >
                  Home
                </div>
              </Link>
            </li> */}
            <li>
              <Link href='/about' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/about' ? styles.active : ''
                  }`}
                >
                  About
                </div>
              </Link>
            </li>
            <li
              className={styles.service_dropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              // onClick={toggleDropdown} //onClick event for mobile screens
            >
              {/* <Link href='/services' passHref> */}
              <div
                className={`${styles.nav_link} ${
                  router.pathname === '/services' ? styles.active : ''
                }`}
              >
                {/* <Link href='/services' passHref> */} Services{' '}
                {/* </Link> */}
                <Image
                  src={DropdownArrow}
                  alt=''
                  width='10'
                  height='10'
                  onMouseEnter={() => setIsDropdownOpen(true)}
                />
              </div>
              {/* </Link> */}
              {isDropdownOpen && (
                <ul
                  data-aos='fade-up'
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className={`${styles.dropdown_menu} ${
                    isDropdownOpen ? 'open' : ''
                  }`}
                >
                  <li>
                    <Link href='/web-design-development' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/web-design-development'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Website
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/mobile-app-design-development' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/mobile-app-design-development'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Mobile Application
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/logo-design' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/logo-design'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Logo Design
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/video-animation-production' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/video-animation-production'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Video Animation
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/seo-services' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/seo-services'
                            ? styles.active
                            : ''
                        }`}
                      >
                        SEO
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/content-writing' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/content-writing'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Content Writing
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href='/work' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/work' ? styles.active : ''
                  }`}
                >
                  Work
                </div>
              </Link>
            </li>
            <li>
              <Link href='/packages' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/packages' ? styles.active : ''
                  }`}
                >
                  Packages
                </div>
              </Link>
            </li>
            <li>
              <Link href='/contact-us' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/contact-us' ? styles.active : ''
                  }`}
                >
                  Contact us
                </div>
              </Link>
            </li>
          </ul>

          <div className={styles.dipixels_header_button}>
            <Link href='./start-project'>
              <StyledButton>Start a project</StyledButton>
            </Link>
          </div>
          <div className={styles.dipixels_header_Triggermenu}>
            <img
              src='/assets/menu.svg'
              alt=''
              onClick={() => {
                setOpen((prevState) => !open)
              }}
            />
          </div>
          {open ? <Drawer setOpen={setOpen} open={open}  ref={drawerRef} /> : null}
        </div>
      </div>
    </>
  )
}

export default Header
