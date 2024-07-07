import "./GenericModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const GenericModal = ({ isOpen, onClose, children }) => {

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
