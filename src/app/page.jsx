"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar no carregamento inicial
    checkDeviceSize();

    // Adicionar listener para mudanças de tamanho de tela
    window.addEventListener("resize", checkDeviceSize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Nostra Nona Pizzaria</h1>
          <h2>A autêntica pizza italiana em São Paulo</h2>
          <div className={styles.heroCtas}>
            {isMobile ? (
              <Link href="/pedidos" className={styles.primaryBtn}>
                Faça seu Pedido <i className="fas fa-arrow-right"></i>
              </Link>
            ) : (
              <Link href="/menu" className={styles.primaryBtn}>
                Ver Cardápio <i className="fas fa-arrow-right"></i>
              </Link>
            )}
            <Link href="/reservas" className={styles.secondaryBtn}>
              RESERVAR MESA
            </Link>
          </div>
        </div>
      </section>

      {/* Cardápio Destaque */}
      <section className={`${styles.menuHighlights} ${styles.section}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nosso Cardápio</h2>
          <div className={styles.menuGrid}>
            <div className={styles.menuItem}>
              <div className={styles.menuImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop"
                  alt="Pizza Margherita"
                  width={400}
                  height={300}
                  className={styles.menuImage}
                />
              </div>
              <h3>Margherita</h3>
              <p>
                A clássica italiana com molho de tomate, muçarela, manjericão
                fresco e azeite.
              </p>
              <Link href="/menu" className={styles.menuLink}>
                Saiba Mais
              </Link>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop"
                  alt="Calabresa"
                  width={400}
                  height={300}
                  className={styles.menuImage}
                />
              </div>
              <h3>Calabresa</h3>
              <p>Molho de tomate, muçarela, calabresa fatiada e cebola.</p>
              <Link href="/menu" className={styles.menuLink}>
                Saiba Mais
              </Link>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop"
                  alt="Quatro Queijos"
                  width={400}
                  height={300}
                  className={styles.menuImage}
                />
              </div>
              <h3>Quatro Queijos</h3>
              <p>
                Molho de tomate, muçarela, provolone, parmesão e gorgonzola.
              </p>
              <Link href="/menu" className={styles.menuLink}>
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programa de Fidelidade */}
      <section className={`${styles.loyaltyProgram} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.loyaltyContent}>
            <div className={styles.loyaltyText}>
              <h2>Programa de Fidelidade</h2>
              <p>
                Inscreva-se em nosso programa de fidelidade, aproveite nossas
                promoções exclusivas e concorra a brindes.
              </p>
              <Link href="/fidelidade" className={styles.primaryBtn}>
                Inscreva-se
              </Link>
            </div>
            <div className={styles.loyaltyImage}>
              <Image
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop"
                alt="Programa de Fidelidade"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className={`${styles.testimonials} ${styles.section}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Depoimentos</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>
                  "A melhor pizza que já comi em São Paulo! Massa perfeita,
                  ingredientes frescos e um atendimento excepcional."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>Maria Silva</h4>
                <p>Cliente desde 2015</p>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>
                  "O ambiente é incrivelmente acolhedor e a comida é
                  simplesmente divina. Meu lugar favorito para levar a família."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>João Santos</h4>
                <p>Cliente desde 2018</p>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>
                  "A Pastiera di Grano é de outro mundo! Vale cada centavo. Uma
                  experiência gastronômica incrível."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>Ana Oliveira</h4>
                <p>Cliente desde 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservas CTA */}
      <section className={`${styles.reservationCta} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Faça sua Reserva</h2>
            <p>
              Garanta sua mesa e venha desfrutar de uma experiência gastronômica
              única.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/reservas" className={styles.primaryBtn}>
                Reservar Mesa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
