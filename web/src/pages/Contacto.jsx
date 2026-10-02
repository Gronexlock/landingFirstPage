export default function Contacto() {
  return (
    <section id="contacto" className="contact-bg" aria-labelledby="contacto-title" style={{ padding: '120px 0' }}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-label">Contáctanos</div>
            <h2 id="contacto-title">Hablemos de tu seguro</h2>
            <p>Sin compromiso. Te respondemos el mismo día hábil.</p>
            <div className="contact-channels">
              <div className="channel-row">
                <div className="channel-dot"></div>
                <div className="channel-text">
                  <strong>WhatsApp</strong>
                  <span>+56 9 XXXX XXXX</span>
                </div>
              </div>
              <div className="channel-row">
                <div className="channel-dot"></div>
                <div className="channel-text">
                  <strong>Teléfono</strong>
                  <span>+56 2 XXXX XXXX &nbsp;·&nbsp; Lun–Vie 9:00–18:00</span>
                </div>
              </div>
              <div className="channel-row">
                <div className="channel-dot"></div>
                <div className="channel-text">
                  <strong>Correo electrónico</strong>
                  <span>contacto@alangalvez.cl</span>
                </div>
              </div>
              <div className="channel-row">
                <div className="channel-dot"></div>
                <div className="channel-text">
                  <strong>Oficina</strong>
                  <span>Av. Principal 1234, Of. 502 — Santiago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-box">
            <h3>Envíanos un mensaje</h3>
            <p className="sub">Respuesta garantizada en el día hábil</p>
            <form>
              <div className="form-group">
                <label htmlFor="c-nombre">Nombre</label>
                <input type="text" id="c-nombre" placeholder="Tu nombre completo" />
              </div>
              <div className="form-group">
                <label htmlFor="c-email">Email</label>
                <input type="email" id="c-email" placeholder="tu@email.cl" />
              </div>
              <div className="form-group">
                <label htmlFor="c-tel">Teléfono</label>
                <input type="tel" id="c-tel" placeholder="+56 9 XXXX XXXX" />
              </div>
              <div className="form-group">
                <label htmlFor="c-asunto">Motivo de consulta</label>
                <textarea id="c-asunto" placeholder="Ej: Necesito cotizar seguro de hogar"></textarea>
              </div>
              <button type="submit" className="btn-submit">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
