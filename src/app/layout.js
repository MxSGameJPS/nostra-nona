"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
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

  // Em dispositivos móveis na rota /pedidos, mostrar o Header mas não o Footer
  const showHeader = true; // Sempre mostrar o Header
  const showFooter = !(isPedidosPage && isMobile);

  // Adicionar classe ao body quando estiver na página de pedidos em mobile
  useEffect(() => {
    if (isPedidosPage && isMobile) {
      document.body.classList.add("pedidos-mobile-page");
    } else {
      document.body.classList.remove("pedidos-mobile-page");
    }
  }, [isPedidosPage, isMobile]);

  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className="layout-wrapper" style={{ position: "relative" }}>
          {showHeader && <Header />}
          <main className={isPedidosPage && isMobile ? "pedidos-content" : ""}>
            {children}
          </main>
          {showFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}
