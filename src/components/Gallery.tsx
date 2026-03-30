export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <div className="section-tag reveal" style={{ justifyContent: 'center' }}>
          <span className="section-tag-line"></span>
          <span className="section-tag-text">Portfólio</span>
          <span className="section-tag-line"></span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">A <span className="italic">Arte</span> EM DETALHE</h2>
      </div>
      <div className="gallery-grid">
        <div className="gallery-item reveal">
          <img alt="Corte e Estilo" src="https://github.com/leonvpetri/Imagens/raw/main/assets/Esta-1.avif" />
          <div className="gallery-overlay">
            <span className="gallery-overlay-text">CABELO &amp; ESTILO</span>
          </div>
        </div>
        <div className="gallery-item reveal reveal-delay-1">
          <img alt="Beleza e Estética" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80" />
          <div className="gallery-overlay">
            <span className="gallery-overlay-text">BELEZA &amp; ESTÉTICA</span>
          </div>
        </div>
        <div className="gallery-item reveal reveal-delay-2">
          <img alt="Bem-estar" src="https://images.unsplash.com/photo-1544161515-4af6b1d4b1b2?auto=format&fit=crop&w=800&q=80" />
          <div className="gallery-overlay">
            <span className="gallery-overlay-text">BEM-ESTAR</span>
          </div>
        </div>
        <div className="gallery-item reveal reveal-delay-1">
          <img alt="Atmosfera do Studio" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80" />
          <div className="gallery-overlay">
            <span className="gallery-overlay-text">A EXPERIÊNCIA</span>
          </div>
        </div>
        <div className="gallery-item reveal reveal-delay-2">
          <img alt="Toques finais" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80" />
          <div className="gallery-overlay">
            <span className="gallery-overlay-text">TOQUES DE SOFISTICAÇÃO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
