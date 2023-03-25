import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';

function Loader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const names = ["dialogue.", "thrive.", "engage.", "explore.", "quality.", "feel."];


  useEffect(() => {
    if (currentIndex === names.length - 1) {
      console.log("stopping");
      return;
    }
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

    
  return (
    <div className='h-[100vh] w-[100%] bg-white text-black overflow-hidden relative flex justify-center items-start text-[6rem] font-sans font-bold'>
    <div className='absolute z-2 grid grid-cols-5 h-[100%] w-[100%]'>
     <motion.div
     initial={{height: 0}}
     animate={{height: "100%"}}
     transition={{duration:0.8, delay: 6, }}
     className=' bg-black z-2 h-[100%] '></motion.div>
     <motion.div
     initial={{height: 0}}
     animate={{height: "100%"}}
     transition={{duration:0.8, delay: 6.2, }}
     className=' bg-black z-2 h-[100%] '></motion.div>
     <motion.div
     initial={{height: 0}}
     animate={{height: "100%"}}
     transition={{duration:0.8, delay: 6.4, }}
     className=' bg-black z-2 h-[100%] '></motion.div>
     <motion.div
     initial={{height: 0}}
     animate={{height: "100%"}}
     transition={{duration:0.8, delay: 6.6, }}
     className=' bg-black z-2 h-[100%] '></motion.div>
     <motion.div
     initial={{height: 0}}
     animate={{height: "100%"}}
     transition={{duration:0.8, delay: 6.8, }}
     className=' bg-black z-2 h-[100%] '></motion.div>
    </div>
      
    <div className='h-[100%] absolute z-1 flex items-center justify-center'>
    <h1 className='text-[3rem]'>{names[currentIndex]}</h1> 
    </div>
    
     
    </div>
  )
}

export default Loader