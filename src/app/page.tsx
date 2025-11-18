"use client"
import Navbar from "@/app/components/navbar/navbar";
import Body from "@/app/components/body/body";
import Footer from "@/app/components/footer/footer";
import Background from "@/app/components/background/background";
import {motion} from 'framer-motion'

export default function Home() {
  return (

    <div className="relative" style={{ minHeight: '100vh' }}>
        <Background/>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0,
          y:50,
        },
        visible:{
          scale: 1,
          opacity:1,
          transition: {
            delay: .5,
            duration: 1.25
          },
          y:0,
        }
      }}
      style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Body />
      </motion.div>
        <Footer />
    </div>
  );
}
