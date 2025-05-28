import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero relative h-screen flex items-center overflow-hidden">
        {/* Moving Lines Background */}
        <div className="lines absolute inset-0 pointer-events-none">
          {[10, 25, 40, 55, 70, 85].map((left, index) => (
            <div
              key={index}
              className="line absolute w-[1px] h-full top-0 opacity-20"
              style={{
                left: `${left}%`,
                background: 'linear-gradient(to bottom, transparent, #64ffda, transparent)',
                animationDelay: `${index}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 max-w-4xl ml-8 md:ml-16 lg:ml-24">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight uppercase tracking-wider"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Bringing Your{' '}
            <motion.span
              className="text-[#64ffda] inline-block"
              style={{
                textShadow: '0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda'
              }}
              animate={{
                textShadow: [
                  '0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda',
                  '0 0 20px #64ffda, 0 0 30px #64ffda, 0 0 40px #64ffda',
                  '0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Digital Vision
            </motion.span>
            <br />
            To Life
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            We design and develop stunning websites that engage users and achieve your business goals. 
            Let's transform your brand's online presence together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="#services"
              className="btn inline-block px-8 py-4 bg-gradient-to-r from-[#0a192f] to-[#64ffda] text-white font-semibold text-lg rounded-full uppercase tracking-widest border-2 border-transparent relative overflow-hidden group"
              style={{
                boxShadow: '0 5px 15px rgba(100, 255, 218, 0.3)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(100, 255, 218, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="relative z-10">Explore Services</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/20 to-[#64ffda]/40 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#64ffda]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-sm uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;