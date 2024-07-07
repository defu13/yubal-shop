import { motion } from "framer-motion";
import "./PageTransitionWrapper.css";

const PageTransitionWrapper = ({ children }) => {
    return (
        <motion.div
            className="page-transition-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransitionWrapper;
