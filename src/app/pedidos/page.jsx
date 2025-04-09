"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PedidosPage() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("pizzasTradicional");
  const [isDesktop, setIsDesktop] = useState(true);

  const router = useRouter();

  // Verificar se o dispositivo é mobile ou desktop
  useEffect(() => {
    const checkDeviceSize = () => {
      const isMobile = window.innerWidth < 768;
      setIsDesktop(!isMobile);

      // Se for desktop, redirecionar para a página de menu
      if (!isMobile) {
        router.push("/menu");
      }
    };

    // Verificar no carregamento inicial
    checkDeviceSize();

    // Adicionar listener para mudanças de tamanho de tela
    window.addEventListener("resize", checkDeviceSize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, [router]);

  const pizzasTradicional = [
    {
      id: 1,
      nome: "Margherita",
      ingredientes: "Molho de tomate, muçarela, manjericão fresco e azeite",
      imagem:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop",
      precos: {
        M: 39.9,
        G: 49.9,
        FM: 59.9,
      },
    },
    {
      id: 2,
      nome: "Pepperoni",
      ingredientes: "Molho de tomate, muçarela e pepperoni",
      imagem:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop",
      precos: {
        M: 45.9,
        G: 55.9,
        FM: 65.9,
      },
    },
    // Adicione mais pizzas tradicionais conforme necessário
  ];

  const pizzasPremium = [
    {
      id: 7,
      nome: "Quatro Estações",
      ingredientes:
        "Molho de tomate, muçarela, presunto, cogumelos, alcachofras, azeitonas e orégano",
      imagem:
        "https://images.pexels.com/photos/5639411/pexels-photo-5639411.jpeg?auto=compress&cs=tinysrgb&w=800",
      precos: {
        M: 49.9,
        G: 59.9,
        FM: 69.9,
      },
    },
    {
      id: 8,
      nome: "Parma",
      ingredientes:
        "Molho de tomate, muçarela, presunto de parma, rúcula, tomate cereja e parmesão",
      imagem:
        "https://images.pexels.com/photos/6531982/pexels-photo-6531982.jpeg?auto=compress&cs=tinysrgb&w=800",
      precos: {
        M: 52.9,
        G: 62.9,
        FM: 72.9,
      },
    },
    // Adicione mais pizzas premium conforme necessário
  ];

  const entradas = [
    {
      id: 1,
      nome: "Bruschetta Clássica",
      ingredientes:
        "Pão italiano, tomate, manjericão, alho e azeite extra virgem",
      imagem:
        "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 22.9,
    },
    {
      id: 2,
      nome: "Antepasto Misto",
      ingredientes:
        "Berinjela, abobrinha, pimentão, tomate seco e azeitonas marinadas",
      imagem:
        "https://images.pexels.com/photos/5639411/pexels-photo-5639411.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 36.9,
    },
    // Adicione mais entradas conforme necessário
  ];

  const bebidas = [
    {
      id: 1,
      nome: "Refrigerante",
      descricao: "Coca-Cola, Guaraná, Sprite (350ml)",
      imagem:
        "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 6.9,
    },
    {
      id: 2,
      nome: "Suco Natural",
      descricao: "Laranja, Limão, Abacaxi ou Maracujá (500ml)",
      imagem:
        "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 12.9,
    },
    // Adicione mais bebidas conforme necessário
  ];

  const sobremesas = [
    {
      id: 1,
      nome: "Tiramisù",
      descricao:
        "Clássica sobremesa italiana com biscoitos de champagne, café, mascarpone e cacau",
      imagem:
        "https://images.pexels.com/photos/6747303/pexels-photo-6747303.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 24.9,
    },
    {
      id: 2,
      nome: "Panna Cotta",
      descricao: "Creme de baunilha com calda de frutas vermelhas",
      imagem:
        "https://images.pexels.com/photos/6249412/pexels-photo-6249412.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 22.9,
    },
    // Adicione mais sobremesas conforme necessário
  ];

  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
    setShowSizeModal(true);
  };

  const closeModal = () => {
    setShowSizeModal(false);
    setSelectedPizza(null);
  };

  const addToCart = (tamanho) => {
    // Criar objeto do item para o carrinho
    const cartItem = {
      id: selectedPizza.id,
      nome: selectedPizza.nome,
      tamanho: tamanho,
      preco: selectedPizza.precos[tamanho],
      quantidade: 1,
      imagem: selectedPizza.imagem,
    };

    // Buscar carrinho atual do localStorage
    let currentCart = [];
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("carrinho");
      if (savedCart) {
        currentCart = JSON.parse(savedCart);
      }

      // Adicionar o novo item
      currentCart.push(cartItem);

      // Salvar no localStorage
      localStorage.setItem("carrinho", JSON.stringify(currentCart));

      // Disparar evento de storage para atualizar o Header
      window.dispatchEvent(new Event("storage"));
    }

    // Fechar o modal
    closeModal();

    // Redirecionar para o carrinho
    window.location.href = "/carrinho";
  };

  const addSimpleItemToCart = (item) => {
    // Criar objeto do item para o carrinho
    const cartItem = {
      id: item.id,
      nome: item.nome,
      tamanho: "Único",
      preco: item.preco,
      quantidade: 1,
      imagem: item.imagem,
    };

    // Buscar carrinho atual do localStorage
    let currentCart = [];
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("carrinho");
      if (savedCart) {
        currentCart = JSON.parse(savedCart);
      }

      // Adicionar o novo item
      currentCart.push(cartItem);

      // Salvar no localStorage
      localStorage.setItem("carrinho", JSON.stringify(currentCart));

      // Disparar evento de storage para atualizar o Header
      window.dispatchEvent(new Event("storage"));
    }

    // Redirecionar para o carrinho
    window.location.href = "/carrinho";
  };

  const renderActiveCategory = () => {
    switch (activeCategory) {
      case "pizzasTradicional":
        return (
          <>
            <h2 className={styles.categoryTitle}>Pizzas Tradicionais</h2>
            <div className={styles.mobileMenuGrid}>
              {pizzasTradicional.map((pizza) => (
                <div
                  key={pizza.id}
                  className={styles.mobileMenuItem}
                  onClick={() => handlePizzaClick(pizza)}
                >
                  <div className={styles.mobileMenuItemImage}>
                    <Image
                      src={pizza.imagem}
                      alt={pizza.nome}
                      width={120}
                      height={120}
                      className={styles.mobilePizzaImage}
                    />
                  </div>
                  <div className={styles.mobileMenuItemInfo}>
                    <h3>{pizza.nome}</h3>
                    <p className={styles.mobilePrice}>
                      A partir de R$ {pizza.precos.M.toFixed(2)}
                    </p>
                    <button className={styles.mobileOrderBtn}>Pedir</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "pizzasPremium":
        return (
          <>
            <h2 className={styles.categoryTitle}>Pizzas Premium</h2>
            <div className={styles.mobileMenuGrid}>
              {pizzasPremium.map((pizza) => (
                <div
                  key={pizza.id}
                  className={styles.mobileMenuItem}
                  onClick={() => handlePizzaClick(pizza)}
                >
                  <div className={styles.mobileMenuItemImage}>
                    <Image
                      src={pizza.imagem}
                      alt={pizza.nome}
                      width={120}
                      height={120}
                      className={styles.mobilePizzaImage}
                    />
                  </div>
                  <div className={styles.mobileMenuItemInfo}>
                    <h3>{pizza.nome}</h3>
                    <p className={styles.mobilePrice}>
                      A partir de R$ {pizza.precos.M.toFixed(2)}
                    </p>
                    <button className={styles.mobileOrderBtn}>Pedir</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "entradas":
        return (
          <>
            <h2 className={styles.categoryTitle}>Entradas</h2>
            <div className={styles.mobileMenuGrid}>
              {entradas.map((item) => (
                <div
                  key={item.id}
                  className={styles.mobileMenuItem}
                  onClick={() => addSimpleItemToCart(item)}
                >
                  <div className={styles.mobileMenuItemImage}>
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      width={120}
                      height={120}
                      className={styles.mobilePizzaImage}
                    />
                  </div>
                  <div className={styles.mobileMenuItemInfo}>
                    <h3>{item.nome}</h3>
                    <p className={styles.mobilePrice}>
                      R$ {item.preco.toFixed(2)}
                    </p>
                    <button className={styles.mobileOrderBtn}>Pedir</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "bebidas":
        return (
          <>
            <h2 className={styles.categoryTitle}>Bebidas</h2>
            <div className={styles.mobileMenuGrid}>
              {bebidas.map((item) => (
                <div
                  key={item.id}
                  className={styles.mobileMenuItem}
                  onClick={() => addSimpleItemToCart(item)}
                >
                  <div className={styles.mobileMenuItemImage}>
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      width={120}
                      height={120}
                      className={styles.mobilePizzaImage}
                    />
                  </div>
                  <div className={styles.mobileMenuItemInfo}>
                    <h3>{item.nome}</h3>
                    <p className={styles.mobilePrice}>
                      R$ {item.preco.toFixed(2)}
                    </p>
                    <button className={styles.mobileOrderBtn}>Pedir</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "sobremesas":
        return (
          <>
            <h2 className={styles.categoryTitle}>Sobremesas</h2>
            <div className={styles.mobileMenuGrid}>
              {sobremesas.map((item) => (
                <div
                  key={item.id}
                  className={styles.mobileMenuItem}
                  onClick={() => addSimpleItemToCart(item)}
                >
                  <div className={styles.mobileMenuItemImage}>
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      width={120}
                      height={120}
                      className={styles.mobilePizzaImage}
                    />
                  </div>
                  <div className={styles.mobileMenuItemInfo}>
                    <h3>{item.nome}</h3>
                    <p className={styles.mobilePrice}>
                      R$ {item.preco.toFixed(2)}
                    </p>
                    <button className={styles.mobileOrderBtn}>Pedir</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  if (isDesktop) {
    return null; // Não renderiza nada se for desktop, pois o usuário será redirecionado
  }

  return (
    <div className={styles.pedidosPage}>
      {/* Espaçador para compensar a altura do header fixo */}
      <div style={{ height: "60px" }}></div>

      <div className={styles.categoryTabsContainer}>
        <div className={styles.categoryTabs}>
          <button
            className={
              activeCategory === "pizzasTradicional" ? styles.activeTab : ""
            }
            onClick={() => setActiveCategory("pizzasTradicional")}
          >
            Tradicionais
          </button>
          <button
            className={
              activeCategory === "pizzasPremium" ? styles.activeTab : ""
            }
            onClick={() => setActiveCategory("pizzasPremium")}
          >
            Premium
          </button>
          <button
            className={activeCategory === "entradas" ? styles.activeTab : ""}
            onClick={() => setActiveCategory("entradas")}
          >
            Entradas
          </button>
          <button
            className={activeCategory === "bebidas" ? styles.activeTab : ""}
            onClick={() => setActiveCategory("bebidas")}
          >
            Bebidas
          </button>
          <button
            className={activeCategory === "sobremesas" ? styles.activeTab : ""}
            onClick={() => setActiveCategory("sobremesas")}
          >
            Sobremesas
          </button>
        </div>
      </div>

      <div className={styles.mobileContent}>{renderActiveCategory()}</div>

      {/* Modal de Seleção de Tamanho */}
      {showSizeModal && selectedPizza && (
        <div className={styles.mobileModalOverlay} onClick={closeModal}>
          <div
            className={styles.mobileSizeModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.mobileCloseModal} onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <h3>{selectedPizza.nome}</h3>
            <p className={styles.mobileIngredients}>
              {selectedPizza.ingredientes}
            </p>

            <div className={styles.mobileSizeOptions}>
              <div
                className={styles.mobileSizeOption}
                onClick={() => addToCart("M")}
              >
                <span className={styles.mobileSizeLabel}>Média</span>
                <span className={styles.mobileSizePrice}>
                  R$ {selectedPizza.precos.M.toFixed(2)}
                </span>
              </div>

              <div
                className={styles.mobileSizeOption}
                onClick={() => addToCart("G")}
              >
                <span className={styles.mobileSizeLabel}>Grande</span>
                <span className={styles.mobileSizePrice}>
                  R$ {selectedPizza.precos.G.toFixed(2)}
                </span>
              </div>

              <div
                className={styles.mobileSizeOption}
                onClick={() => addToCart("FM")}
              >
                <span className={styles.mobileSizeLabel}>Família</span>
                <span className={styles.mobileSizePrice}>
                  R$ {selectedPizza.precos.FM.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
