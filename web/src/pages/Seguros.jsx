import { Link } from 'react-router-dom';

export default function Seguros() {
  return (
    <section className="bg-light" aria-labelledby="populares-title" style={{ padding: '120px 0', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-head">
          <div className="section-label">Coberturas a tu medida</div>
          <h2 className="section-title" id="populares-title">Nuestros Seguros</h2>
          <p className="section-desc">Soluciones integrales para proteger tu patrimonio, salud y negocio.</p>
        </div>
        
        <div style={{ marginBottom: '60px' }} id="personas">
            <h3 style={{ fontSize: '24px', color: 'var(--brand-blue)', marginBottom: '20px' }}>Seguros para Personas</h3>
            <div className="insurance-grid">
                <div className="insurance-item" id="seg-auto">
                <div className="ins-type">Personas</div>
                <h4>Seguro de Auto</h4>
                <p>Cobertura para tu vehículo particular o comercial ante robo, colisión y más.</p>
                <Link to="/contacto" className="ins-link">Cotizar →</Link>
                </div>
                <div className="insurance-item" id="seg-hogar">
                <div className="ins-type">Personas</div>
                <h4>Seguro de Hogar</h4>
                <p>Protege tu casa o departamento ante incendio, robo y daños de agua.</p>
                <Link to="/contacto" className="ins-link">Cotizar →</Link>
                </div>
                <div className="insurance-item" id="seg-vida">
                <div className="ins-type">Personas</div>
                <h4>Seguro de Vida</h4>
                <p>Protección financiera para tu familia en caso de fallecimiento o invalidez.</p>
                <Link to="/contacto" className="ins-link">Cotizar →</Link>
                </div>
                <div className="insurance-item" id="seg-viaje">
                <div className="ins-type">Personas</div>
                <h4>Asistencia en Viaje</h4>
                <p>Viaja tranquilo con cobertura médica y de emergencias a nivel internacional.</p>
                <Link to="/contacto" className="ins-link">Cotizar →</Link>
                </div>
            </div>
        </div>

        <div id="empresas">
            <h3 style={{ fontSize: '24px', color: 'var(--brand-blue)', marginBottom: '20px' }}>Seguros para Empresas</h3>
            <div className="insurance-grid">
                <div className="insurance-item" id="seg-salud">
                <div className="ins-type">Empresas</div>
                <h4>Salud Complementario Colectivo</h4>
                <p>Reembolso de gastos médicos por sobre lo que cubre Fonasa o Isapre para tus empleados.</p>
                <Link to="/contacto" className="ins-link">Cotizar →</Link>
                </div>
                <div className="insurance-item" id="seg-rc">
                <div className="ins-type">Empresas</div>
                <h4>Responsabilidad Civil</h4>
                <p>Cubre los daños que tu actividad o empresa pueda causar a terceros.</p>
                <Link to="/contacto" className="ins-link">Cotizar →</Link>
                </div>
                <div className="insurance-item" id="seg-flotas">
                <div className="ins-type">Empresas</div>
                <h4>Flotas de Vehículos</h4>
                <p>Asegura todos los vehículos de tu empresa bajo una sola póliza con mejores condiciones.</p>
                <Link to="/contacto" className="ins-link">Cotizar →</Link>
                </div>
                <div className="insurance-item" id="seg-incendio">
                <div className="ins-type">Empresas</div>
                <h4>Incendio Sismo y Robo</h4>
                <p>Protege la infraestructura, mercadería y maquinarias de tu negocio.</p>
                <Link to="/contacto" className="ins-link">Cotizar →</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
