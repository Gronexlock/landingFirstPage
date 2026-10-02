import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, X } from 'lucide-react';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top or hash on route change
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        // slight delay to ensure render is complete
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <header id="main-header" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="header-inner">
            <NavLink to="/" className="logo-wrap" aria-label="Alan Gálvez - Corredor Oficial de Seguros" onClick={() => setMobileOpen(false)}>
              <img src="/Logos/AlanGalvez-01.png" alt="Alan Gálvez Corredor Oficial de Seguros" />
            </NavLink>
            <nav id="mobile-navigation" className={`main-nav${mobileOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMobileOpen(false)}>Inicio</NavLink>
              <Link to="/seguros#personas" className={location.pathname === '/seguros' && location.hash !== '#empresas' ? 'active' : ''} onClick={() => setMobileOpen(false)}>Seguros Personas</Link>
              <Link to="/seguros#empresas" className={location.pathname === '/seguros' && location.hash === '#empresas' ? 'active' : ''} onClick={() => setMobileOpen(false)}>Seguros Empresas</Link>
              <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMobileOpen(false)}>Nosotros</NavLink>
              <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMobileOpen(false)}>Contacto</NavLink>
            </nav>
            <div className="header-actions">
              <a href="tel:+5699999999" className="btn btn-ghost" id="btn-header-tel">+56 9 XXXX XXXX</a>
              <a href="https://wa.me/5699999999" className="btn btn-wa" id="btn-header-wa" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <button
                type="button"
                className="mobile-menu-toggle"
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/Logos/AlanGalvez-03.png" alt="Alan Gálvez Corredor Oficial de Seguros" />
              <p>Corredor independiente de seguros. Buscamos la mejor cobertura al mejor precio para personas y empresas en Chile.</p>
              <div className="footer-cmf">
                <strong>CMF N° XXXX</strong> &nbsp;·&nbsp; Verifica en <a href="https://cmfchile.cl" target="_blank" rel="noopener noreferrer">cmfchile.cl</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Seguros</h4>
              <ul>
                <li><NavLink to="/seguros#personas">Personas</NavLink></li>
                <li><NavLink to="/seguros#empresas">Empresas</NavLink></li>
                <li><NavLink to="/seguros#auto">Auto y Motos</NavLink></li>
                <li><NavLink to="/seguros#hogar">Hogar</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Servicio</h4>
              <ul>
                <li><a href="#">Denuncia de siniestros</a></li>
                <li><a href="#">Pago de pólizas</a></li>
                <li><NavLink to="/nosotros">Quiénes somos</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Términos y Condiciones</a></li>
                <li><a href="https://cmfchile.cl" target="_blank" rel="noopener noreferrer">Registro CMF</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Alan Gálvez — Todos los derechos reservados</span>
            <div className="footer-social">
              <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="#" className="social-btn" aria-label="Instagram">ig</a>
              <a href="https://wa.me/5699999999" className="social-btn" aria-label="WhatsApp">wa</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a href="https://wa.me/5699999999" className="wa-float" aria-label="Contactar por WhatsApp" target="_blank" rel="noopener noreferrer">
        <MessageCircle color="#fff" size={26} />
      </a>
    </>
  );
}
