import "./GenericModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const GenericModal = ({ isOpen, onClose, children }) => {

    // Logica para cerrar el modal al hacer click fuera de él

    // useEffect(() => {
    //     const handleOutsideClick = (event) => {
    //         if (event.target.classList.contains("modal-overlay")) {
    //             onClose();
    //         }
    //     };

    //     document.addEventListener("click", handleOutsideClick);
    //     return () => {
    //         document.removeEventListener("click", handleOutsideClick);
    //     };
    // }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default GenericModal;
