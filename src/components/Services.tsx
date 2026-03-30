import { useState, useRef } from 'react';

const galleryData: Record<string, { src: string; alt: string }[]> = {
  'CABELO & ESTILO': [
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/Esta-1.avif', alt: 'Corte e Estilo 1' },
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/Esta-2.avif', alt: 'Corte e Estilo 2' },
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/Esta-3.avif', alt: 'Corte e Estilo 3' },
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/Esta-4.avif', alt: 'Corte e Estilo 4' },
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/Esta-6.avif', alt: 'Corte e Estilo 5' },
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/esta-9.avif', alt: 'Corte e Estilo 6' }
  ],
  'BELEZA & ESTÉTICA': [
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/estetica-1.avif', alt: 'Beleza e Estética 1' },
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/estetica-2.jfif', alt: 'Beleza e Estética 2' },
    { src: 'https://github.com/leonvpetri/Imagens/raw/main/assets/estetica-3.jfif', alt: 'Beleza e Estética 3' }
  ],
  'EXPERIÊNCIAS & BEM-ESTAR': [
    { src: 'https://images.unsplash.com/photo-1544161515-4af6b1d4b1b2?auto=format&fit=crop&w=800&q=80', alt: 'Bem-estar 1' },
    { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80', alt: 'Bem-estar 2' },
    { src: 'https://images.unsplash.com/photo-1519415510236-8559b1985622?auto=format&fit=crop&w=800&q=80', alt: 'Bem-estar 3' }
  ]
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const hiddenGalleryRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      return;
    }
    setActiveCategory(category);
    
    setTimeout(() => {
      if (hiddenGalleryRef.current) {
        const offset = hiddenGalleryRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, 300);
  };

  const closeGallery = () => {
    setActiveCategory(null);
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = servicesSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const activeImages = activeCategory ? galleryData[activeCategory] : [];

  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
          <div className="section-tag reveal">
            <span className="section-tag-line"></span>
            <span className="section-tag-text">O Que Oferecemos</span>
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            NOSSOS <span className="italic">Serviços</span><br />PREMIUM
          </h2>
        </div>
      </div>
      <div className="services-grid">
        <div className="service-card reveal" onClick={() => handleServiceClick('CABELO & ESTILO')}>
          <svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:scissors-bold" height="1em"
            role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.654 1.633a.75.75 0 0 0-1.308.735l5.794 10.304l-2.708 4.815a3.751 3.751 0 1 0-.136 3.303L12 14.202l3.704 6.588a3.75 3.75 0 1 0-.136-3.303l-2.708-4.815l5.794-10.304a.75.75 0 0 0-1.308-.735L12 11.142z"
              fill="currentColor"></path>
          </svg>
          <svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear"
            height="1em" role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
          <h3 className="service-name">CABELO &amp; ESTILO</h3>
          <p className="service-desc">Corte, escova, coloração, mechas/luzes, tratamentos capilares (hidratação, nutrição,
            reconstrução), alisamentos, progressivas e penteados.</p>
          <div className="service-price-row">
            <span className="service-price">Agendar Avaliação</span>
            <span className="service-duration"></span>
          </div>
        </div>
        <div className="service-card reveal reveal-delay-1" onClick={() => handleServiceClick('BELEZA & ESTÉTICA')}>
          <svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:face-scan-circle-bold"
            height="1em" role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
              <path
                d="M10.801 2.57a.71.71 0 0 1-.555.838a8.78 8.78 0 0 0-6.838 6.838a.71.71 0 1 1-1.394-.283a10.2 10.2 0 0 1 7.949-7.949a.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555a8.78 8.78 0 0 0 6.838 6.838a.71.71 0 1 1-.283 1.394a10.2 10.2 0 0 1-7.948-7.949a.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556a10.2 10.2 0 0 1 7.949 7.949a.711.711 0 0 1-1.394.283a8.78 8.78 0 0 0-6.838-6.838a.71.71 0 0 1-.555-.838m8.231 10.629a.71.71 0 0 1 .556.838a10.2 10.2 0 0 1-7.949 7.949a.711.711 0 0 1-.283-1.394a8.78 8.78 0 0 0 6.838-6.838a.71.71 0 0 1 .838-.555">
              </path>
              <path
                d="M12 19.583a7.583 7.583 0 1 0 0-15.166a7.583 7.583 0 0 0 0 15.166m-3.06-5.044a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69a.71.71 0 1 1 .846 1.142a4.87 4.87 0 0 1-2.911.97a4.87 4.87 0 0 1-2.911-.97a.71.71 0 0 1-.148-.994m6.377-4.139c0 .688-.37 1.245-.829 1.245s-.83-.557-.83-1.245c0-.687.372-1.244.83-1.244s.83.557.83 1.244m-5.805 1.245c.458 0 .83-.557.83-1.245c0-.687-.372-1.244-.83-1.244s-.83.557-.83 1.244c0 .688.372 1.245.83 1.245">
              </path>
            </g>
          </svg>
          <svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear"
            height="1em" role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
          <h3 className="service-name">BELEZA &amp; ESTÉTICA</h3>
          <p className="service-desc">Manicure e pedicure, design de sobrancelhas, maquiagem profissional, alongamento de
            cílios e microblading.</p>
          <div className="service-price-row">
            <span className="service-price">Agendar Avaliação</span>
            <span className="service-duration"></span>
          </div>
        </div>
        <div className="service-card reveal reveal-delay-2" onClick={() => handleServiceClick('EXPERIÊNCIAS & BEM-ESTAR')}>
          <svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:waterdrop-bold"
            height="1em" role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd"
              d="M11.612 22C6.855 22 3 18.057 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22zm.454-16.039a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.692-2.186 2.206-3.993 4.17-4.901a.75.75 0 0 1 .996.365"
              fill="currentColor" fillRule="evenodd"></path>
          </svg>
          <svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear"
            height="1em" role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
          <h3 className="service-name">EXPERIÊNCIAS &amp; BEM-ESTAR</h3>
          <p className="service-desc">Terapias holísticas, massagens relaxantes, spa de pés, tratamentos faciais
            revitalizantes e o exclusivo Dia da Noiva.</p>
          <div className="service-price-row">
            <span className="service-price">Agendar Avaliação</span>
            <span className="service-duration"></span>
          </div>
        </div>
      </div>
      
      {/* Hidden Gallery Section */}
      <div 
        className={`hidden-gallery-wrapper ${activeCategory ? 'active' : ''}`} 
        id="hidden-gallery"
        ref={hiddenGalleryRef}
      >
        <div className="hidden-gallery-content">
          <div className="hidden-gallery-header">
            <h3 className="hidden-gallery-title" id="hidden-gallery-title">{activeCategory || 'PORTFÓLIO'}</h3>
            <button className="close-gallery" id="close-gallery" aria-label="Fechar galeria" onClick={closeGallery}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="hidden-gallery-grid" id="hidden-gallery-grid">
            {activeImages.map((item, index) => (
              <div className="hidden-gallery-item" key={index}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>
          {activeCategory === 'BELEZA & ESTÉTICA' && (
            <div className="hidden-gallery-video" style={{ marginTop: '2rem', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
              <video 
                src="https://github.com/leonvpetri/Imagens/raw/main/assets/video-estetica-2.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline 
                style={{ width: '100%', height: '50vh', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
              />
            </div>
          )}
          {activeCategory === 'CABELO & ESTILO' && (
            <div className="hidden-gallery-video" style={{ marginTop: '2rem', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
              <video 
                src="https://github.com/leonvpetri/Imagens/raw/main/assets/video-corte-1.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline 
                style={{ width: '100%', height: '50vh', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
