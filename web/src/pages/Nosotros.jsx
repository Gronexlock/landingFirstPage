export default function Nosotros() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" style={{ padding: '120px 0' }}>
      <div className="container">
        <div className="section-head">
          <div className="section-label">Nuestra propuesta</div>
          <h2 className="section-title" id="nosotros-title">¿Por qué trabajar con nosotros?</h2>
          <p className="section-desc">Somos corredores independientes. Trabajamos para ti, no para las aseguradoras.</p>
        </div>
        <div className="why-grid">
          <div className="why-item">
            <div className="why-num">01</div>
            <div className="why-content">
              <h4>Comparamos el mercado por ti</h4>
              <p>Cotizamos con múltiples compañías y te presentamos las mejores opciones en cobertura y precio, sin que tengas que llamar a nadie.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-num">02</div>
            <div className="why-content">
              <h4>Sin letra chica, sin sorpresas</h4>
              <p>Te explicamos con claridad qué cubre tu póliza y qué no, antes de que firmes cualquier documento.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-num">03</div>
            <div className="why-content">
              <h4>Te acompañamos en los siniestros</h4>
              <p>Cuando más nos necesitas, gestionamos tu siniestro directamente con la compañía para que cobres lo que te corresponde.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-num">04</div>
            <div className="why-content">
              <h4>Atención directa y personalizada</h4>
              <p>Siempre hablas con una persona real. Sin bots, sin call centers, sin derivaciones. Tu corredor, siempre disponible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
