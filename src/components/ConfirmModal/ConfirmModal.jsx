import GenericModal from "../GenericModal/GenericModal";
import "./ConfirmModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faTimes } from "@fortawesome/free-solid-svg-icons";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <GenericModal isOpen={isOpen}>
            <div className="confirm-modal">
                <div className="confirm-modal-header">
                    <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="icon-warning"
                    />
                    <button className="modal-close-button" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className="confirm-modal-content">
                    <h1>
                        ¿Estás seguro?
                    </h1>
                </div>
                <div className="confirm-modal-footer">
                    <button className="confirm-button" onClick={onConfirm}>
                        Confirmar
                    </button>
                    <button className="cancel-button" onClick={onClose}>
                        Cancelar
                    </button>
                </div>
            </div>
        </GenericModal>
    );
};
export default ConfirmModal;
