export default function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="booking-inner">
        <div className="booking-image reveal">
          <img alt="Agende sua visita" src="/assets/agenda-visita-1.webp" />
        </div>
        <div className="booking-form-wrapper">
          <div className="section-tag reveal">
            <span className="section-tag-line"></span>
            <span className="section-tag-text">Reserve seu Momento</span>
          </div>
          <h2 className="section-title reveal reveal-delay-1">AGENDE SUA <span className="italic">Visita</span></h2>
          <form className="booking-form reveal reveal-delay-2" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Nome</label>
                <input placeholder="Maria" type="text" />
              </div>
              <div className="form-group">
                <label>Sobrenome</label>
                <input placeholder="Silva" type="text" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>E-mail</label>
                <input placeholder="maria@email.com" type="email" />
              </div>
              <div className="form-group">
                <label>WhatsApp / Telefone</label>
                <input placeholder="(11) 99999-9999" type="tel" />
              </div>
            </div>
            <div className="form-group">
              <label>Selecione o Serviço</label>
              <select>
                <option value="">Escolha um serviço...</option>
                <option value="signature">Cabelo &amp; Estilo -- Sob Consulta</option>
                <option value="shave">Beleza &amp; Estética -- Sob Consulta</option>
                <option value="beard">Experiências &amp; Bem-Estar -- Sob Consulta</option>
                <option value="royal">Dia da Noiva -- Premium</option>
              </select>
            </div>
            <div className="form-group">
              <label>Especialista Preferencial</label>
              <select>
                <option value="">Sem preferência</option>
                <option value="james">Fernanda Valentina</option>
                <option value="marcus">Glaucimar Martins</option>
                <option value="david">Camila Alves</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Data</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Horário</label>
                <input type="time" />
              </div>
            </div>
            <button className="btn-submit" type="submit">
              <span>Confirmar Agendamento</span>
              <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em"
                role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
