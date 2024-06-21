import "./Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-info-container">
                        <div className="footer-info">
                            <h2>Contacto</h2>
                            <p>Email: info@mitienda.com</p>
                            <p>Teléfono: +34 123 456 789</p>
                        </div>
                        <div className="footer-info">
                            <h2>Redes Sociales</h2>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                        <div className="footer-info">
                            <h2>Dirección</h2>
                            <p>Calle Principal, 123</p>
                            <p>Ciudad, País</p>
                        </div>
                    </div>
                    <hr />
                    <p className="rights">© 2023 MiTienda. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
