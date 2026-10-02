import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CarFront,
  HeartHandshake,
  House,
  LifeBuoy,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const coverages = [
  {
    title: 'Auto',
    description: 'Protección para tu vehículo y cada trayecto.',
    icon: CarFront,
    href: '/seguros#seg-auto',
  },
  {
    title: 'Hogar',
    description: 'Cuida tu casa, tus cosas y a quienes más quieres.',
    icon: House,
    href: '/seguros#seg-hogar',
  },
  {
    title: 'Vida y salud',
    description: 'Bienestar y respaldo para ti y tu familia.',
    icon: HeartHandshake,
    href: '/seguros#seg-vida',
  },
];

const advantages = [
  {
    title: 'Asesoría independiente',
    description: 'Revisamos alternativas de distintas compañías para encontrar una cobertura acorde a ti.',
    icon: ShieldCheck,
  },
  {
    title: 'Acompañamiento cercano',
    description: 'Te orientamos desde la cotización hasta la contratación y durante la vigencia de tu póliza.',
    icon: HeartHandshake,
  },
  {
    title: 'Apoyo cuando importa',
    description: 'Si tienes un siniestro, te ayudamos a entender los pasos y gestionar el proceso.',
    icon: LifeBuoy,
  },
];

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

      <section className="home-coverages" aria-labelledby="coverages-title">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-section-kicker">Protección a tu medida</p>
              <h2 id="coverages-title">Encuentra tu seguro</h2>
              <p>Accede a algunas de las coberturas más consultadas.</p>
            </div>
            <Link to="/seguros" className="home-section-link">
              Ver todos los seguros <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="home-coverages-grid">
            {coverages.map(({ title, description, icon: Icon, href }) => (
              <Link to={href} className="home-coverage-card" key={title}>
                <span className="home-coverage-icon"><Icon aria-hidden="true" /></span>
                <span className="home-coverage-title">{title}</span>
                <span className="home-coverage-description">{description}</span>
                <span className="home-coverage-link">Conocer cobertura <ArrowRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-why" aria-labelledby="why-title">
        <div className="container">
          <div className="home-section-heading home-why-heading">
            <div>
              <p className="home-section-kicker">Un asesor a tu lado</p>
              <h2 id="why-title">Más que una póliza, tranquilidad.</h2>
            </div>
            <p className="home-why-intro">Te ayudamos a tomar una decisión informada y seguimos contigo cuando necesitas orientación.</p>
          </div>
          <div className="home-advantages-grid">
            {advantages.map(({ title, description, icon: Icon }) => (
              <article className="home-advantage" key={title}>
                <span className="home-advantage-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="home-contact-banner">
            <div>
              <p className="home-contact-kicker">Hablemos de lo que necesitas</p>
              <h2>Encuentra una cobertura con la que te sientas tranquilo.</h2>
            </div>
            <Link to="/contacto" className="btn home-contact-button">
              Contactar a un asesor <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

