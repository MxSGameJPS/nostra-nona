"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();
  const isPedidosPage = pathname === "/pedidos";
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

  useEffect(() => {
    // Função para atualizar o contador do carrinho
    const updateCartCount = () => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("carrinho");
        if (savedCart) {
          const cartItems = JSON.parse(savedCart);
          setCartCount(cartItems.length);
        } else {
          setCartCount(0);
        }
      }
    };

    // Atualizar o contador ao montar o componente
    updateCartCount();

    // Adicionar event listener para atualizações do localStorage
    window.addEventListener("storage", updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  // Fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className={styles.contactInfo}>
            <span>
              <i className="fas fa-phone"></i> (11) 99999-9999
            </span>
            <span>
              <i className="fas fa-map-marker-alt"></i> São Paulo, SP
            </span>
          </div>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <span className={styles.logo}>
                {isPedidosPage && isMobile ? "Faça seu Pedido" : "Nostra Nonna"}
              </span>
            </Link>
          </div>

          <div className={styles.navCartContainer}>
            <div
              className={styles.mobileMenuToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i
                className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}
              ></i>
            </div>

            <nav
              className={`${styles.mainNav} ${
                mobileMenuOpen ? styles.open : ""
              }`}
            >
              <ul>
                <li>
                  <Link href="/" onClick={handleLinkClick}>
                    NOSTRA NONA
                  </Link>
                </li>
                {!isPedidosPage && (
                  <li>
                    <Link href="/menu" onClick={handleLinkClick}>
                      DELIVERY
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="/reservas" onClick={handleLinkClick}>
                    RESERVAS
                  </Link>
                </li>
                <li>
                  <Link href="/trabalheconosco" onClick={handleLinkClick}>
                    TRABALHE CONOSCO
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={styles.cartContainer}>
              <Link href="/carrinho" className={styles.cartLink}>
                <i className="fas fa-shopping-cart"></i>
                <span className={`${styles.cartCount} cartCount`}>
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      {mobileMenuOpen && (
        <div
          className={styles.menuOverlay}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
