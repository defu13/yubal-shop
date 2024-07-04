import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
    return (
        <>
            <Link to="/" className="back-button-link">
                <div className="back-button">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <p>Atrás</p>
                </div>
            </Link>
        </>
    );
}

export default BackButton;
