import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Inicio">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-tag">Inscritos CMF N° XXXX</div>
              <h1>Tu seguro,<br />sin <span>complicaciones</span>.</h1>
              <p className="lead">Comparamos coberturas de las principales compañías y te acompañamos en cada etapa del proceso, incluso cuando necesitas cobrar.</p>
              <div className="hero-ctas">
                <Link to="/contacto" className="btn btn-green btn-lg">Cotizar sin compromiso</Link>
                <Link to="/seguros" className="btn-outline-white">Ver seguros</Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><strong>+20</strong><span>Años de experiencia</span></div>
                <div className="hero-stat"><strong>+3.000</strong><span>Clientes activos</span></div>
                <div className="hero-stat"><strong>+15</strong><span>Aseguradoras</span></div>
              </div>
            </div>
            <div className="quote-card" role="form" aria-label="Formulario de cotización rápida">
              <h3>Cotiza en minutos</h3>
              <p className="sub">Sin compromiso — respuesta en el día</p>
              <form>
                <div className="form-group">
                  <label htmlFor="hero-nombre">Nombre completo</label>
                  <input type="text" id="hero-nombre" placeholder="Ej: María González" />
                </div>
                <div className="form-group">
                  <label htmlFor="hero-tel">Teléfono / WhatsApp</label>
                  <input type="tel" id="hero-tel" placeholder="+56 9 XXXX XXXX" />
                </div>
                <div className="form-group">
                  <label htmlFor="hero-tipo">Tipo de seguro</label>
                  <select id="hero-tipo" defaultValue="">
                    <option value="" disabled>Selecciona...</option>
                    <option>Seguro de Auto</option>
                    <option>Seguro de Hogar</option>
                    <option>Seguro de Vida</option>
                    <option>Salud Complementario</option>
                    <option>Responsabilidad Civil</option>
                    <option>Seguro para Empresa</option>
                    <option>Otro</option>
                  </select>
                </div>
                <button type="submit" className="btn-submit">Solicitar cotización gratuita</button>
                <p className="form-legal">Al enviar aceptas nuestra <a href="#">política de privacidad</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </section>



      <div className="stats-bar" aria-label="Cifras de la empresa">
        <div className="container">
          <div className="stats-inner">
            <div className="stat-item"><strong>+20</strong><span>Años de experiencia</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><strong>+3.000</strong><span>Clientes atendidos</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><strong>+15</strong><span>Compañías</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><strong>CMF</strong><span>N° XXXX</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><strong>ACOSEG</strong><span>Miembro activo</span></div>
          </div>
        </div>
      </div>

      <section className="bg-light" aria-labelledby="testimonios-title">
        <div className="container">
          <div className="section-head">
            <div className="section-label">Testimonios</div>
            <h2 className="section-title" id="testimonios-title">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <blockquote>"En menos de una hora tenía mi cotización con opciones bien explicadas. Contratamos sin complicaciones y a buen precio."</blockquote>
              <div className="t-author">
                <strong>Carlos Fernández</strong>
                <span>Gerente General, Transportes CF</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <blockquote>"Cuando tuve un siniestro, ellos gestionaron todo el proceso. Me llamaban para avisarme cómo iba. Muy tranquilizador."</blockquote>
              <div className="t-author">
                <strong>Ana Muñoz</strong>
                <span>Clienta particular</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <blockquote>"Llevamos 5 años trabajando juntos para los seguros de nuestra empresa. Siempre encuentran las mejores opciones del mercado."</blockquote>
              <div className="t-author">
                <strong>Pablo Rodríguez</strong>
                <span>Director, Constructora PR</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
