import Image from "next/image";
import styles from "./page.module.css";

export default function SobrePage() {
  return (
    <div className={styles.sobrePage}>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Sobre Nós</h1>
          <p>Conheça a história da Nostra Nona Pizzaria</p>
        </div>
      </div>

      <section className={styles.historiaSection}>
        <div className="container">
          <div className={styles.historiaContent}>
            <div className={styles.historiaImagem}>
              <Image
                src="https://images.unsplash.com/photo-1516697073-419b2bd079db?w=800&auto=format&fit=crop"
                alt="História da Nostra Nona"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.historiaTexto}>
              <h2>Nossa História</h2>
              <p>
                A Nostra Nona nasceu em 1958, quando a família Tarallo migrou da
                Itália para o Brasil, trazendo consigo as receitas tradicionais
                napolitanas transmitidas por gerações.
              </p>
              <p>
                Inicialmente, era uma pequena cantina no coração de São Paulo,
                onde os avós preparavam as massas e molhos como faziam em
                Nápoles. Com o passar dos anos, a reputação da autenticidade e
                qualidade das nossas pizzas cresceu, tornando a Nostra Nona uma
                referência gastronômica na cidade.
              </p>
              <p>
                Hoje, contamos com duas unidades e mantemos viva a tradição
                italiana, com a mesma dedicação e amor pela culinária que nossos
                ancestrais. Cada prato que servimos carrega a essência da Itália
                e a história da nossa família.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valoresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nossos Valores</h2>
          <div className={styles.valoresGrid}>
            <div className={styles.valorCard}>
              <div className={styles.valorIcon}>
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Autenticidade</h3>
              <p>
                Mantemos as receitas originais trazidas da Itália, preservando a
                autenticidade dos sabores e técnicas tradicionais.
              </p>
            </div>
            <div className={styles.valorCard}>
              <div className={styles.valorIcon}>
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Qualidade</h3>
              <p>
                Utilizamos apenas ingredientes frescos e selecionados,
                garantindo a excelência em cada prato que servimos.
              </p>
            </div>
            <div className={styles.valorCard}>
              <div className={styles.valorIcon}>
                <i className="fas fa-users"></i>
              </div>
              <h3>Família</h3>
              <p>
                Acreditamos que a refeição é um momento de união, e queremos que
                cada cliente se sinta parte da nossa família.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.equipeSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nossa Equipe</h2>
          <div className={styles.equipeGrid}>
            <div className={styles.membroCard}>
              <div className={styles.membroImagem}>
                <Image
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop"
                  alt="Chef executivo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3>Marco Tarallo</h3>
              <p>Chef Executivo</p>
              <p>
                Com formação na Itália, é o guardião das receitas de família e
                responsável pela manutenção da autenticidade dos nossos pratos.
              </p>
            </div>
            <div className={styles.membroCard}>
              <div className={styles.membroImagem}>
                <Image
                  src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=800&auto=format&fit=crop"
                  alt="Gerente"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3>Sofia Tarallo</h3>
              <p>Gerente Geral</p>
              <p>
                Neta dos fundadores, Sofia traz o equilíbrio perfeito entre a
                tradição familiar e a inovação necessária para os tempos
                modernos.
              </p>
            </div>
            <div className={styles.membroCard}>
              <div className={styles.membroImagem}>
                <Image
                  src="https://images.unsplash.com/photo-1607631568431-f9234e39654e?w=800&auto=format&fit=crop"
                  alt="Pizzaiolo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3>Antonio Russo</h3>
              <p>Pizzaiolo Chefe</p>
              <p>
                Com 15 anos de experiência, Antonio domina a arte da verdadeira
                pizza napolitana e lidera nossa equipe de pizzaiolos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
