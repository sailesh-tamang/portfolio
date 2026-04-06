import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative flex flex-col items-center gap-8">
          {/* Pulsing ring */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-500/50"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '120px', height: '120px', top: '-10px', left: '-10px' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-violet-400/30"
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              style={{ width: '120px', height: '120px', top: '-10px', left: '-10px' }}
            />

            {/* Logo circle */}
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center shadow-2xl"
              style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'backOut' }}
            >
              <motion.span
                className="text-3xl font-black text-white tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                ST
              </motion.span>
            </motion.div>
          </div>

          {/* Name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold gradient-text tracking-wide">
              Sailesh Kumar Tamang
            </h1>
            <p className="text-gray-500 text-sm mt-1 tracking-widest uppercase">
              Portfolio
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 via-violet-400 to-purple-600 rounded-full"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 1 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
