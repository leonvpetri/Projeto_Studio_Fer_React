export default function Instagram() {
  return (
    <section className="instagram">
      <div className="instagram-header reveal">
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <span className="section-tag-line"></span>
          <span className="section-tag-text">Siga-nos</span>
          <span className="section-tag-line"></span>
        </div>
        <h2 className="section-title" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
          @STUDIOFERNANDAVALENTINA
        </h2>
        <a className="instagram-handle" href="https://instagram.com/studiofernandavalentina" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:camera-linear" height="1.2em" role="img" viewBox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            <path d="M3 8.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 1.8 7.16 1.8 9.4 1.8h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 4.84 21 5.96 21 8.2v7.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 22.2 16.84 22.2 14.6 22.2H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 19.16 3 18.04 3 15.8V8.2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
          ACOMPANHE NOSSO DIA A DIA
        </a>
      </div>
      <div className="instagram-grid">
        <a className="instagram-item reveal" href="#" target="_blank" rel="noopener noreferrer">
          <img alt="Instagram post 1" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80" />
        </a>
        <a className="instagram-item reveal reveal-delay-1" href="#" target="_blank" rel="noopener noreferrer">
          <img alt="Instagram post 2" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80" />
        </a>
        <a className="instagram-item reveal reveal-delay-2" href="#" target="_blank" rel="noopener noreferrer">
          <img alt="Instagram post 3" src="https://images.unsplash.com/photo-1544161515-4af6b1d4b1b2?auto=format&fit=crop&w=400&q=80" />
        </a>
        <a className="instagram-item reveal reveal-delay-3" href="#" target="_blank" rel="noopener noreferrer">
          <img alt="Instagram post 4" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80" />
        </a>
        <a className="instagram-item reveal reveal-delay-4" href="#" target="_blank" rel="noopener noreferrer">
          <img alt="Instagram post 5" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=400&q=80" />
        </a>
        <a className="instagram-item reveal reveal-delay-5" href="#" target="_blank" rel="noopener noreferrer">
          <img alt="Instagram post 6" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80" />
        </a>
      </div>
    </section>
  );
}
