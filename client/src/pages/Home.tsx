/*
Design philosophy for this file: reprodução literal do mockup original enviado pelo usuário.
Prioridades: fidelidade visual absoluta, zero reinterpretação e uso do mockup inteiro como composição final da homepage.
Pergunta-guia: esta decisão deixa a página mais idêntica ao layout original enviado?
*/

const fullMockupImage = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029287777/an7oxzKqnxkyFzJzYJYqjg/page_main_38d464ad.png";

export default function Home() {
  return (
    <div className="mockup-page-shell">
      <main className="mockup-single-page" aria-label="Homepage reproduzida exatamente a partir do mockup original">
        <img
          src={fullMockupImage}
          alt="Homepage original da Um Mais Um reproduzida fielmente"
          className="mockup-full-image"
          loading="eager"
        />
      </main>
    </div>
  );
}
