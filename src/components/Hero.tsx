export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-tag-line"></span>
          <span className="hero-tag-text">Centro de Beleza Premium</span>
        </div>
        <h1 className="hero-title">
          <span>ONDE A BELEZA</span>
          <span>ENCONTRA </span>
          <span className="title-stroke">A EXCLUSIVIDADE</span>
        </h1>
        <p className="hero-desc">
          Entre em um mundo onde cada detalhe é pensado para você. Nossas especialistas unem técnicas consagradas com as
          principais tendências para revelar sua melhor versão.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#booking">
            <span>Agendar Horário</span>
            <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em"
              role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </a>
          <a className="btn-outline" href="#services">
            <span>Nossos Serviços</span>
            <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em"
              role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img alt="Atendimento exclusivo" className="" loading="eager"
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80" />
      </div>
    </section>
  );
}
