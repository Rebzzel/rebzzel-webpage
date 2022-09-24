import { motion } from 'framer-motion'

function Component(props) {
    const motions = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.div
            variants={motions}
            transition={{ duration: 0.3 }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            {...props}
        />
    )
}

export default Component
