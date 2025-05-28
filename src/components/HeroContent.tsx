import { motion } from 'framer-motion';

const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 1,
      },
    },
  };

  const glowVariants = {
    initial: { 
      textShadow: "0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda" 
    },
    animate: {
      textShadow: [
        "0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda",
        "0 0 20px #64ffda, 0 0 30px #64ffda, 0 0 40px #64ffda",
        "0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative z-10 flex items-center min-h-screen px-8 md:px-16 lg:px-24">
      <motion.div
        className="max-w-4xl mx-auto text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title with Glow Effect */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={titleVariants}
        >
          Bringing Your{' '}
          <motion.span
            className="text-cyan-400 inline-block"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          >
            Digital Vision
          </motion.span>
          <br />
          To Life
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl leading-relaxed"
          variants={itemVariants}
        >
          We design and develop stunning websites that engage users and achieve your business goals. 
          Let's transform your brand's online presence together.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-cyan-600 text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(100, 255, 218, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ boxShadow: "0 5px 15px rgba(100, 255, 218, 0.2)" }}
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Button text */}
            <span className="relative z-10 uppercase tracking-wider">
              Explore Services
            </span>
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 border-2 border-cyan-400/50 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -right-20 top-20 w-20 h-20 border border-cyan-400/30 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute -left-16 bottom-32 w-12 h-12 border border-cyan-400/20 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeroContent;