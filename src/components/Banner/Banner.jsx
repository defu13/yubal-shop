import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./Banner.css";

function Banner() {
    const { user, isLoggedIn } = useAuth();
    const [bannerText, setBannerText] = useState("");

    const bannerMessages = {
        nologged: "¡Crea una cuenta para obtener descuentos!",
        logged: "¡" + user.name + " ,aprovechaté de un descuento del 20%!",
    };

    useEffect(() => {
        if (isLoggedIn) {
            setBannerText(bannerMessages.logged);
        } else {
            setBannerText(bannerMessages.nologged);
        }
    }, [isLoggedIn]);

    return (
        <div className="discount-banner">
            <h2 className="banner-text">{bannerText}</h2>
        </div>
    );
}
export default Banner;
