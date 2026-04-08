/*
Design philosophy for this file: nostalgia delicada de catálogo infantil dos anos 2010 com acabamento digital refinado.
Prioridades: hero fotográfico dominante, vitrines horizontais comerciais, títulos rosados discretos, mosaico de categorias com tipografia azul e rodapé institucional marcante.
Pergunta-guia: esta decisão reforça a sensação de loja editorial clássica da marca?
*/

import type { ReactNode } from "react";
import { Search, Heart, ShoppingBag, Instagram, Facebook, MessageCircle, ChevronLeft, ChevronRight, Truck, CreditCard, BadgePercent, ShieldCheck } from "lucide-react";

const logoUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029287777/an7oxzKqnxkyFzJzYJYqjg/VN28PaF9aYIg_dc5b042d.webp";
const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029287777/an7oxzKqnxkyFzJzYJYqjg/ummaisum-hero-editorial-2H58ABnh2wRNzMD9A2AuMi.webp";
const knitwearImage = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029287777/an7oxzKqnxkyFzJzYJYqjg/ummaisum-category-knitwear-Qni3tjvqu272ZrtQiW9oor.webp";
const winterImage = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029287777/an7oxzKqnxkyFzJzYJYqjg/ummaisum-category-winter-7eNSdQKEcNs64zAmw5Pk8X.webp";
const partyImage = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029287777/an7oxzKqnxkyFzJzYJYqjg/ummaisum-category-party-Qp9AZAMThMCwAazDVCM4qr.webp";

const arrivals = [
  {
    title: "TSHIRT AMOR ELO",
    price: "R$ 279,00",
    image: "https://ummaisum.vtexassets.com/arquivos/ids/245448/897018-conjunto-cor-2-detalhe.jpg",
  },
  {
    title: "VESTIDO TRICOT SOFT",
    price: "R$ 229,00",
    image: "https://ummaisum.vtexassets.com/arquivos/ids/246619/891048b---shorts---cor-463.jpg",
  },
  {
    title: "CONJUNTO ESSENCE",
    price: "R$ 319,00",
    image: "https://ummaisum.vtexassets.com/arquivos/ids/246926/891060---conjunto---cor-475-2.jpg",
  },
  {
    title: "VESTIDO MIDI OFF",
    price: "R$ 289,00",
    image: "https://ummaisum.vtexassets.com/arquivos/ids/247110/891093---conjunto--cor-05.jpg",
  },
  {
    title: "TSHIRT AMOR ELO",
    price: "R$ 279,00",
    image: "https://ummaisum.vtexassets.com/arquivos/ids/247134-80-auto/891092---conjunto--cor-05-4.jpg",
  },
];

const bestSellers = [
  {
    title: "TSHIRT AMOR ELO",
    price: "R$ 279,00",
    image: "https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/8dc49066-64ec-42ac-87a1-cc5888ed4768___0a77988a4b0fd45b36e59b6a2bf9b432.jpg",
  },
  {
    title: "VESTIDO SOFT ROSE",
    price: "R$ 279,00",
    image: "https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/9ef549ec-4c38-4df9-8022-69b92f8aa255___775111989bf48018c5048094abcfdcfa.jpg",
  },
  {
    title: "JARDINEIRA DENIM",
    price: "R$ 299,00",
    image: "https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/a639522c-9ddd-4169-a7ae-57120a31962f___7b1abd1a04d3da834dc1edee6329ba17.jpg",
  },
  {
    title: "MACAQUINHO BRISA",
    price: "R$ 279,00",
    image: "https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/b0dcb740-f575-42dc-a7f3-73ec2f9d6511___b1c316288597b1e1e84fdd8c8f0e3dec.jpg",
  },
  {
    title: "VESTIDO OFF LIGHT",
    price: "R$ 279,00",
    image: "https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/c1f44336-f67e-41b5-8dfe-4113712d0d0e___84770a58dfb3718152ab17ac1ac339e4.jpg",
  },
];

const mosaicItems = [
  {
    title: "SALE",
    image: "https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/6996e7f2-03d6-45c9-ac9d-f32302b9fb50___5d3ee1d9b417312cf2bfa51c94b4bfd5.jpg",
    tall: false,
  },
  {
    title: "CONJUNTO",
    image: heroImage,
    tall: true,
  },
  {
    title: "VESTIDOS",
    image: "https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/f304d434-fc8f-45fc-90c7-8e40404934de___e0704f3d68d9e9ae2ea185fa52eed016.jpg",
    tall: false,
  },
  {
    title: "INVERNO",
    image: winterImage,
    tall: false,
  },
  {
    title: "ESTAMPADOS",
    image: "https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/c5bccf3d-53f9-442a-af57-eb3843ee0d9c___e4349c203d579fd10c4428b2ecba7a64.jpg",
    tall: false,
  },
  {
    title: "FESTA",
    image: partyImage,
    tall: false,
  },
];

function ProductCard({ title, price, image }: { title: string; price: string; image: string }) {
  return (
    <article className="group min-w-[180px] flex-1">
      <div className="relative overflow-hidden bg-[#f8f6f3] aspect-[4/5]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-1 px-1 pt-3 text-left">
        <h3 className="product-name">{title}</h3>
        <p className="product-price">{price}</p>
      </div>
    </article>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="section-title">{children}</h2>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#3b3b3b]">
      <div className="top-strip">FRETE GRÁTIS para todo o Brasil nas compras acima de R$789</div>

      <header className="border-b border-[#f2ece8] bg-white/95 backdrop-blur-sm">
        <div className="container">
          <div className="hidden items-center justify-between py-3 text-[10px] uppercase tracking-[0.26em] text-[#b9989a] lg:flex">
            <div className="flex items-center gap-4">
              <span>Baby</span>
              <span>Kids</span>
              <span>Fashion</span>
            </div>
            <div>Loja conceito moda infantil</div>
          </div>

          <div className="flex flex-col gap-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex items-center justify-between gap-6 lg:w-[220px] lg:justify-start">
              <img src={logoUrl} alt="Um Mais Um" className="site-logo h-20 w-auto object-contain" />
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#edd9df] text-[#7d6a70] lg:hidden">
                <Search size={16} />
              </button>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-medium text-[#3e3b3c] lg:flex-1 lg:justify-center">
              <a href="#" className="nav-link">Kids Meninas</a>
              <a href="#" className="nav-link">Kids Meninos</a>
              <a href="#" className="nav-link">Baby Meninas</a>
              <a href="#" className="nav-link">Baby Meninos</a>
              <a href="#" className="nav-link sale">Sale</a>
              <a href="#" className="nav-link">Lançamento</a>
            </nav>

            <div className="hidden items-center justify-end gap-3 lg:flex lg:w-[260px]">
              <div className="search-shell">
                <input aria-label="Buscar" placeholder="Buscar" className="search-input" />
                <Search size={15} className="text-[#c9aeb4]" />
              </div>
              <button className="icon-button"><Heart size={16} /></button>
              <button className="icon-button"><ShoppingBag size={16} /></button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="container pt-3 lg:pt-4">
          <div className="hero-frame">
            <img src={heroImage} alt="Coleção infantil Um Mais Um" className="hero-image" />
            <div className="hero-overlay" />
            <div className="hero-copy">
              <div className="hero-logo-mark">um mais um</div>
              <h1 className="hero-title">lá fora tem o mundo</h1>
              <p className="hero-subtitle">OUTONO | INVERNO 012</p>
              <a href="#" className="hero-cta">DESCUBRA A COLEÇÃO</a>
            </div>
          </div>
        </section>

        <section className="container py-6 lg:py-7">
          <div className="benefits-grid">
            <div className="benefit-item">
              <Truck size={22} strokeWidth={1.6} />
              <div>
                <strong>FRETE GRÁTIS</strong>
                <span>acima de R$789</span>
              </div>
            </div>
            <div className="benefit-item">
              <CreditCard size={22} strokeWidth={1.6} />
              <div>
                <strong>Parcelamento facilitado</strong>
                <span>em até 10x sem juros*</span>
              </div>
            </div>
            <div className="benefit-item">
              <MessageCircle size={22} strokeWidth={1.6} />
              <div>
                <strong>Atendimento personalizado</strong>
                <span>por WhatsApp</span>
              </div>
            </div>
            <div className="benefit-item">
              <BadgePercent size={22} strokeWidth={1.6} />
              <div>
                <strong>PRIMEIRA TROCA</strong>
                <span>GRÁTIS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-5 lg:pb-7">
          <SectionTitle>acabou de chegar!</SectionTitle>
          <div className="product-row">
            {arrivals.map((product) => (
              <ProductCard key={`${product.title}-${product.image}`} {...product} />
            ))}
          </div>
          <div className="mt-5 text-center">
            <a href="#" className="subtle-cta">COMPRE POR TAMANHO</a>
          </div>
          <div className="pagination-dots">
            {[4, 6, 8, 10, 12, 14].map((size, index) => (
              <button key={size} className={`page-dot ${index === 2 ? "active" : ""}`}>{size}</button>
            ))}
          </div>
        </section>

        <section className="container py-6 lg:py-8">
          <div className="category-mosaic">
            {mosaicItems.map((item, index) => (
              <article key={`${item.title}-${index}`} className={`mosaic-card ${item.tall ? "mosaic-card-large" : ""}`}>
                <img src={item.image} alt={item.title} className="mosaic-image" />
                <div className="mosaic-tint" />
                <h3 className="mosaic-title">{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="container py-6 lg:py-8">
          <SectionTitle>best sellers</SectionTitle>
          <div className="relative">
            <button className="carousel-arrow left-2"><ChevronLeft size={17} /></button>
            <div className="product-row product-row-spacious">
              {bestSellers.map((product) => (
                <ProductCard key={`${product.title}-${product.image}`} {...product} />
              ))}
            </div>
            <button className="carousel-arrow right-2"><ChevronRight size={17} /></button>
          </div>
        </section>

        <section className="container py-6 lg:py-8">
          <SectionTitle>curadoria do estilo</SectionTitle>
          <div className="curation-grid">
            <article className="curation-side">
              <img
                src="https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/61b73723-e7b5-495d-9dcf-3acc23df931f___41ae6aa1beb1f48a9dd6b8a46356ad55.jpg"
                alt="Looks em tricot"
                className="curation-image"
              />
            </article>
            <article className="curation-feature">
              <img src={knitwearImage} alt="Curadoria tricot" className="curation-image" />
              <div className="curation-copy">
                <h3>TRICOT</h3>
                <a href="#">CONFIRA NOSSA SELEÇÃO</a>
              </div>
            </article>
            <article className="curation-side">
              <img
                src="https://ummaisum.vtexassets.com/assets/vtex.file-manager-graphql/images/cb98b20a-f3cd-4290-a114-664b6f76bc68___d973a7d2f272b95a6d63f30e57b64a39.jpg"
                alt="Peças infantis sofisticadas"
                className="curation-image"
              />
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={logoUrl} alt="Um Mais Um" className="h-24 w-auto object-contain" />
            <div className="footer-socials">
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Pinterest"><Heart size={16} /></a>
              <a href="#" aria-label="WhatsApp"><MessageCircle size={16} /></a>
            </div>
          </div>

          <div>
            <h4>Pode conhecer</h4>
            <p>Institucional</p>
            <p>Sobre a marca</p>
            <p>Trocas e devoluções</p>
            <p>Frete e entregas</p>
            <p>Política de privacidade</p>
          </div>

          <div>
            <h4>E-mail</h4>
            <p>bazar@ummaisum.com.br</p>
            <h4 className="mt-5">Sac</h4>
            <p>(17) 2138-8444</p>
            <h4 className="mt-5">Horário de atendimento</h4>
            <p>Seg à Qui 08h às 17h</p>
            <p>Sex 08h às 16h</p>
          </div>

          <div>
            <h4>Formas de Pagamento</h4>
            <p>Cartões de crédito</p>
            <p>Pix</p>
            <p>Boleto bancário</p>
            <h4 className="mt-5">Selo de Segurança</h4>
            <div className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/55">
              <ShieldCheck size={18} />
            </div>
          </div>
        </div>
        <div className="container footer-note">
          B.M.D. Tavares Vulpini | CNPJ: 22.728.655/0004-66 | Av. Clóvis Oger, Nº 740, Distrito Industrial Waldemar de Oliveira Verdi - São José do Rio Preto – SP.
        </div>
      </footer>
    </div>
  );
}
