import "./Navbar.css";
// import librifyLogo from "../iti-logo-letters-red.png";

export const Navbar = () => {

  return (
    <>
      <header className="navbar">
        <div className="max-width">
          <a href="http://localhost:3000/" className="logo-librify">
            {/* <img src={ITILogo} className="logo-iti" alt="Logo ITI" /> */}
            LIBRIFY
          </a>
          <ul className="menu">
            <li>
              <a
                href="http://localhost:3000/"
                className="menu-btn"
                aria-label="Go to ITI home page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="http://localhost:8800/productsByCategory/2"
                className="menu-btn"
                aria-label="Go to ITI men's clothing page"
              >
                Novedades
              </a>
            </li>
            <li>
              <a
                href="http://localhost:8800/productsByCategory/1"
                className="menu-btn"
                aria-label="Go to ITI women's clothing page"
              >
                Infantil
              </a>
            </li>
            <li>
              <a
                href="http://localhost:8800/productsByCategory/3"
                className="menu-btn"
                aria-label="Go to ITI jewelery page"
              >
                Empresarial
              </a>
            </li>
            <li>
              <a
                href="http://localhost:8800/productsByCategory/8"
                className="menu-btn"
                aria-label="Go to ITI electronics page"
              >
                Más vendidos
              </a>
            </li>
            <li>
              <a
                href="http://localhost:8800/productsByCategory/9"
                className="menu-btn"
                aria-label="Go to ITI electronics page"
              >
                Recomendados
              </a>
            </li>
          </ul>
          <div
            className="menu-btn bars-btn"
            aria-label="Press here to see menu button"
            role="button"
          >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};
