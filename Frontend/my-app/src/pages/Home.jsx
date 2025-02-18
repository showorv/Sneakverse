import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import ShoeCardSlider from '../components/CommonFolder/ShoeCardSlider';


export const Home = () => {

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.5 }
    })
  };
  return (
    <section >
      {/* hero section  */}
      <div className='relative'>
       <img src="/images/hero2.jpg" alt="hero image" className=' w-full h-[25rem] object-cover opacity-50 md:h-[60rem]' />

  



<motion.div
  initial="hidden"
  animate="visible"
  className='absolute top-[5rem] md:top-[10rem] w-full flex flex-col justify-center items-center gap-4'>
  
  <motion.h2 
    className='text-white uppercase text-[50px] leading-[50px] px-[20px] font-extrabold text-center 
              sm:text-[70px] sm:leading-[60px] sm:px-[40px] 
              md:text-[80px] md:leading-[70px] md:px-[60px] 
              lg:text-[130px] lg:leading-[110px] lg:px-[130px]'
    variants={sectionVariants}
    custom={2}
  >
    hottest <br /> 
    <span className='text-blue-700'>sneaker</span> <br />
    drops.
  </motion.h2>

  <motion.p 
    className='text-blue-300 px-[20px] text-center mt-3 text-[10px] 
              sm:text-[16px] sm:px-[40px] 
              md:text-[18px] md:px-[60px] 
              lg:text-[17px] lg:px-[60px]'
    variants={sectionVariants}
    custom={3}
  >
    Secure your next grail. Sneaker pre-orders available.
  </motion.p>

  <motion.div
    variants={sectionVariants}
    custom={4}
  >
    <NavLink to="/products">
      <button className='bg-blue-950 px-10 py-1 rounded-md cursor-pointer text-lg text-center'>Shop now</button>
    </NavLink>
  </motion.div>
  
</motion.div>

        </div>

    <div>
      <ShoeCardSlider />
    </div>

    </section>
  )
}
