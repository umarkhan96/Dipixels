// import '../../../styles/Empowering.module.css'
import Marquee from '../Marquee/Marquee'
import Heading from '../Heading/Heading'

function Empowering() {
  return (
    <>
      <section className='empowering'>
        <Marquee>Streamlined Process</Marquee>
        <div style={{ textAlign: 'center', marginTop: '-50px' }}>
          <Heading>Empowering your success</Heading>
        </div>
        <div className='mincontainer'>
          <div className='content-1'>
            <h1>
              Our foremost goal is to provide you with innovative digital
              assistance, ensuring that you satisfy what your business craves.
            </h1>
          </div>
          <div className='content-2'>
            <p>
              At Dipixels, we highly prioritise working in collaboration with
              technology to serve you with excellence throughout the process of
              your business. High-quality and creative results are what we aim
              to provide to our valuable customers. In the fusion of processes
              we go through to deliver your product, a constant feedback loop is
              developed with clients to make sure of their substantial
              satisfaction.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Empowering
