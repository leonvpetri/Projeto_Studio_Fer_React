export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-images reveal">
        <img alt="Interior do Studio" className="about-img-main"
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80" />
        <img alt="Equipamentos de alta qualidade" className="about-img-secondary"
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" />
      </div>
      <div className="about-content">
        <div className="section-tag reveal">
          <span className="section-tag-line"></span>
          <span className="section-tag-text">Nossa História</span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          MAIS QUE UM<br />STUDIO.<br />UM <span className="italic">Legado.</span>
        </h2>
        <p className="about-text reveal reveal-delay-2">
          Fundado no coração da cidade, o Studio Fernanda Valentina nasceu da paixão pela beleza autêntica e da crença de
          que cada mulher merece uma experiência que vá além do comum. Nosso espaço é um santuário — um lugar onde a
          excelência é honrada e cada detalhe importa.
        </p>
        <p className="about-text reveal reveal-delay-3">
          Dos toques iniciais aos toques finais de sofisticação, cada visita é coreografada com perfeição. Não apenas
          realçamos a beleza; construímos confiança, uma cliente por vez.
        </p>
        <div className="about-stats reveal reveal-delay-4">
          <div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Anos de Excelência</div>
          </div>
          <div>
            <div className="stat-number">15K+</div>
            <div className="stat-label">Clientes Felizes</div>
          </div>
          <div>
            <div className="stat-number">12</div>
            <div className="stat-label">Especialistas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
