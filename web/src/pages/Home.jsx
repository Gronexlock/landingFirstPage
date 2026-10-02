import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <div className="home-eyebrow">
              <BadgeCheck aria-hidden="true" />
              Corredor oficial de seguros
            </div>
            <h1 id="home-title">
              Protegemos lo que importa, <span>con claridad.</span>
            </h1>
            <p className="home-lead">
              Comparamos opciones para personas y empresas, y te acompañamos en cada paso. Así eliges con confianza y sin complicaciones.
            </p>
            <div className="home-hero-actions">
              <Link to="/contacto" className="btn btn-primary btn-lg">
                Cotiza con un asesor <ArrowRight aria-hidden="true" />
              </Link>
              <Link to="/seguros" className="home-text-link">
                Explorar seguros <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <p className="home-reassurance">
              <ShieldCheck aria-hidden="true" /> Asesoría personalizada, sin compromiso
            </p>
          </div>

          <section className="home-audience-card" aria-labelledby="audience-title">
            <p className="home-card-eyebrow">Soluciones para cada etapa</p>
            <h2 id="audience-title">¿Qué quieres proteger?</h2>
            <Link to="/seguros#personas" className="home-audience-link">
              <span className="home-audience-icon"><UserRound aria-hidden="true" /></span>
              <span className="home-audience-copy">
                <strong>Personas</strong>
                <span>Auto, hogar, vida y salud</span>
              </span>
              <ArrowUpRight aria-hidden="true" className="home-audience-arrow" />
            </Link>
            <Link to="/seguros#empresas" className="home-audience-link">
              <span className="home-audience-icon"><BriefcaseBusiness aria-hidden="true" /></span>
              <span className="home-audience-copy">
                <strong>Empresas</strong>
                <span>Protección para tu negocio</span>
              </span>
              <ArrowUpRight aria-hidden="true" className="home-audience-arrow" />
            </Link>
            <div className="home-card-note">
              <span className="home-note-dot" />
              Alternativas de distintas compañías
            </div>
          </section>
        </div>
      </section>

      <section className="home-trust" aria-label="Nuestra experiencia">
        <div className="container home-trust-grid">
          <div className="home-trust-intro">Experiencia que te respalda</div>
          <div className="home-trust-item"><strong>+20</strong><span>Años de experiencia</span></div>
          <div className="home-trust-item"><strong>+3.000</strong><span>Clientes atendidos</span></div>
          <div className="home-trust-item"><strong>+15</strong><span>Compañías aseguradoras</span></div>
        </div>
      </section>

    </>
  );
}

