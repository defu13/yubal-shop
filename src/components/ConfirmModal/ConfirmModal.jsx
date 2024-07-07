import GenericModal from "../GenericModal/GenericModal";
import "./ConfirmModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <GenericModal isOpen={isOpen} onClose={onClose}>
            <div className="confirm-modal">
                <div className="confirm-modal-header">
                    <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="icon-warning"
                    />
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
