import "./GenericModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const GenericModal = ({ isOpen, onClose, children }) => {

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modalVariants = {
        hidden: { opacity: 0, y: "-100vh" },
        visible: { opacity: 1, y: "0" },
        exit: { opacity: 0, y: "-100vh" },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close-button"
                            onClick={onClose}
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GenericModal;
