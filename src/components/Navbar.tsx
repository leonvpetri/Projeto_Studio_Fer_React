import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <a
          className="nav-logo"
          href="#"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
        >
          <video
            src="https://github.com/leonvpetri/Imagens/raw/main/assets/video-fer-logo.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ height: '180px' }}
          />
          <div style={{ textAlign: 'center', marginTop: '5px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--display)', fontSize: '1.6rem', letterSpacing: '0.1em', color: 'var(--white)' }}>
              STUDIO <span style={{ color: 'var(--gold)' }}>FERNANDA</span> VALENTINA
            </span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">O Studio</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#team">Especialistas</a></li>
          <li><a href="#testimonials">Avaliações</a></li>
        </ul>
        <a className="nav-cta" href="#booking">Agendar</a>
        <div className={`nav-hamburger ${isMobileNavOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-nav ${isMobileNavOpen ? 'active' : ''}`} id="mobileNav">
        <a href="#about" onClick={closeMobileNav}>O Studio</a>
        <a href="#services" onClick={closeMobileNav}>Serviços</a>
        <a href="#gallery" onClick={closeMobileNav}>Galeria</a>
        <a href="#team" onClick={closeMobileNav}>Especialistas</a>
        <a href="#testimonials" onClick={closeMobileNav}>Avaliações</a>
        <a href="#booking" onClick={closeMobileNav}>Agendar</a>
      </div>
    </>
  );
}
