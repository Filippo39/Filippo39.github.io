import { motion } from 'framer-motion'
import { styles } from '../styles'
import ComputersCanvas from './ui/Computers'

// TODO: move away
const DOT_BG_COLOR = 'bg-[#915eff]'
const NAME_COLOR = 'text-[#915eff]'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Dot */}
          <div className={`w-5 h-5 rounded-full ${DOT_BG_COLOR}`} />
          {/* Gradient line*/}
          <div className="w-1 sm:h-80 h-40 violet-gradient sm:text-[60px]" />
        </div>

        {/* Description */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className={NAME_COLOR}>Filippo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>TODO: What i do, lorem ipsum</p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll component */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex just items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
