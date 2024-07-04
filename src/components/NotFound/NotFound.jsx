import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound(){
    return(
        <div className="not-found-container">
            <h1 className="not-found-title">Page not found&nbsp;&nbsp;:(</h1>
            <Link to="/" className="not-found-link">Volver a la página principal</Link>
        </div>
    )
}

export default NotFound;