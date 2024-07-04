import "./MainSection.css";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../../router/index.jsx";

function MainSection({ searchQuery }) {
    
    

    return (
        <>
            

            <div className="main-container">
                <section className="main-section">
                    <RouterProvider router={router}/>
                </section>
            </div>
        </>
    );
}

export default MainSection;
