import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "O Studio Fernanda Valentina não é apenas um salão — é uma experiência. Desde o momento em que você entra, sente a atenção aos detalhes. Fernanda e sua equipe são verdadeiras artistas.",
    name: "MICHELE ANTUNES",
    title: "Cliente desde 2022"
  },
  {
    quote: "The Royal package is worth every penny. Hot towel shave, the perfect fade, and a scalp massage that melts your stress away. This is what premium grooming should feel like. Best barbershop in the city, hands down.",
    name: "ROBERT CASTELLANO",
    title: "Client since 2020"
  },
  {
    quote: "I've been to barbershops all over the world, and Blade & Co. ranks among the very best. The atmosphere, the skill, the conversation -- everything comes together perfectly. Marcus shaped my beard into a work of art.",
    name: "ALEXANDER HUNT",
    title: "Client since 2021"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial-bg-text">AVALIAÇÕES</div>
      <div className="testimonials-header">
        <div className="section-tag reveal" style={{ justifyContent: 'center' }}>
          <span className="section-tag-line"></span>
          <span className="section-tag-text">Depoimentos</span>
          <span className="section-tag-line"></span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">O QUE NOSSAS <span className="italic">Clientes</span> DIZEM</h2>
      </div>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}>
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
                </svg>
              ))}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author-name">{testimonial.name}</div>
            <div className="testimonial-author-title">{testimonial.title}</div>
          </div>
        ))}
      </div>
      <div className="testimonial-nav" id="testimonialNav">
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`} 
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
