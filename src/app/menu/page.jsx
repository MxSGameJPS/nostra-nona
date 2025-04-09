"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MenuPage() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("pizzasTradicional");
  const router = useRouter();

  // Verificar se o dispositivo é mobile e redirecionar para /pedidos
  useEffect(() => {
    const checkDeviceSize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        router.push("/pedidos");
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
      nome: "Calabresa",
      ingredientes: "Molho de tomate, muçarela, calabresa fatiada e cebola",
      imagem:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
      precos: {
        M: 42.9,
        G: 52.9,
        FM: 62.9,
      },
    },
    {
      id: 3,
      nome: "Quatro Queijos",
      ingredientes:
        "Molho de tomate, muçarela, provolone, parmesão e gorgonzola",
      imagem:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop",
      precos: {
        M: 45.9,
        G: 55.9,
        FM: 65.9,
      },
    },
    {
      id: 4,
      nome: "Portuguesa",
      ingredientes:
        "Molho de tomate, muçarela, presunto, ovos, cebola, ervilha e azeitonas",
      imagem:
        "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=800&auto=format&fit=crop",
      precos: {
        M: 44.9,
        G: 54.9,
        FM: 64.9,
      },
    },
    {
      id: 5,
      nome: "Frango com Catupiry",
      ingredientes: "Molho de tomate, muçarela, frango desfiado e catupiry",
      imagem:
        "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=800&auto=format&fit=crop",
      precos: {
        M: 43.9,
        G: 53.9,
        FM: 63.9,
      },
    },
    {
      id: 6,
      nome: "Vegetariana",
      ingredientes:
        "Molho de tomate, muçarela, pimentão, cebola, champignon, milho e azeitonas",
      imagem:
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=800&auto=format&fit=crop",
      precos: {
        M: 41.9,
        G: 51.9,
        FM: 61.9,
      },
    },
  ];

  const pizzasPremium = [
    {
      id: 7,
      nome: "Quatro Estações",
      ingredientes:
        "Molho de tomate, muçarela, presunto, cogumelos, alcachofras, azeitonas e orégano",
      imagem:
        "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop",
      precos: {
        M: 52.9,
        G: 62.9,
        FM: 72.9,
      },
    },
    {
      id: 9,
      nome: "Salmão",
      ingredientes:
        "Molho branco, muçarela, salmão defumado, alcaparras, cream cheese e cebolinha",
      imagem:
        "https://images.pexels.com/photos/6406460/pexels-photo-6406460.jpeg?auto=compress&cs=tinysrgb&w=800",
      precos: {
        M: 54.9,
        G: 64.9,
        FM: 74.9,
      },
    },
    {
      id: 10,
      nome: "Tartufo",
      ingredientes:
        "Molho branco, muçarela, cogumelos frescos, azeite de trufa e parmesão",
      imagem:
        "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800",
      precos: {
        M: 56.9,
        G: 66.9,
        FM: 76.9,
      },
    },
    {
      id: 11,
      nome: "Camarão",
      ingredientes:
        "Molho de tomate, muçarela, camarões salteados, alho, tomate cereja e manjericão",
      imagem:
        "https://images.pexels.com/photos/12843239/pexels-photo-12843239.jpeg?auto=compress&cs=tinysrgb&w=800",
      precos: {
        M: 58.9,
        G: 68.9,
        FM: 78.9,
      },
    },
    {
      id: 12,
      nome: "Mediterrânea",
      ingredientes:
        "Molho de tomate, muçarela, berinjela, abobrinha, pimentão, tomate cereja e azeitonas",
      imagem:
        "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800",
      precos: {
        M: 51.9,
        G: 61.9,
        FM: 71.9,
      },
    },
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
    {
      id: 3,
      nome: "Burrata",
      ingredientes:
        "Burrata fresca, tomate, rúcula, pesto de manjericão e pão italiano",
      imagem:
        "https://images.pexels.com/photos/6531982/pexels-photo-6531982.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 48.9,
    },
    {
      id: 4,
      nome: "Carpaccio",
      ingredientes:
        "Fatias finas de carne bovina, rúcula, alcaparras, parmesão e molho de mostarda e mel",
      imagem:
        "https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 42.9,
    },
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
    {
      id: 3,
      nome: "Água Mineral",
      descricao: "Com ou sem gás (500ml)",
      imagem:
        "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 4.9,
    },
    {
      id: 4,
      nome: "Cerveja Artesanal",
      descricao: "IPA, Pilsen, Weiss ou Stout (600ml)",
      imagem:
        "https://images.pexels.com/photos/1269043/pexels-photo-1269043.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 18.9,
    },
    {
      id: 5,
      nome: "Vinho Tinto",
      descricao: "Cabernet Sauvignon, Merlot ou Malbec (taça 150ml)",
      imagem:
        "https://images.pexels.com/photos/66636/pexels-photo-66636.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 22.9,
    },
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
    {
      id: 3,
      nome: "Cannoli Siciliano",
      descricao:
        "Massa crocante recheada com creme de ricota e gotas de chocolate",
      imagem:
        "https://images.pexels.com/photos/8180543/pexels-photo-8180543.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 18.9,
    },
    {
      id: 4,
      nome: "Gelato Italiano",
      descricao:
        "Três bolas de sorvete italiano (chocolate, pistache, baunilha ou creme)",
      imagem:
        "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=800",
      preco: 19.9,
    },
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
            <p className={styles.categoryDescription}>
              Nossas pizzas tradicionais são preparadas seguindo receitas
              autênticas italianas, com massa fermentada naturalmente por 48
              horas e ingredientes selecionados de primeira qualidade.
            </p>

            <div className={styles.menuGrid}>
              {pizzasTradicional.map((pizza) => (
                <div
                  key={pizza.id}
                  className={styles.menuItem}
                  onClick={() => handlePizzaClick(pizza)}
                >
                  <div className={styles.menuItemImage}>
                    <Image
                      src={pizza.imagem}
                      alt={pizza.nome}
                      width={300}
                      height={200}
                      className={styles.pizzaImage}
                    />
                  </div>
                  <div className={styles.menuItemInfo}>
                    <h3>{pizza.nome}</h3>
                    <p className={styles.ingredients}>{pizza.ingredientes}</p>
                    <div className={styles.priceRow}>
                      <div className={styles.sizes}>
                        <span>Média</span>
                        <span>Grande</span>
                        <span>Família</span>
                      </div>
                      <div className={styles.prices}>
                        <span>R$ {pizza.precos.M.toFixed(2)}</span>
                        <span>R$ {pizza.precos.G.toFixed(2)}</span>
                        <span>R$ {pizza.precos.FM.toFixed(2)}</span>
                      </div>
                    </div>
                    <button className={styles.orderButton}>Pedir Agora</button>
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
            <p className={styles.categoryDescription}>
              Nossas pizzas premium são feitas com ingredientes especiais e
              combinações exclusivas, criadas pelo nosso Chef especializado em
              culinária italiana.
            </p>

            <div className={styles.menuGrid}>
              {pizzasPremium.map((pizza) => (
                <div
                  key={pizza.id}
                  className={styles.menuItem}
                  onClick={() => handlePizzaClick(pizza)}
                >
                  <div className={styles.menuItemImage}>
                    <Image
                      src={pizza.imagem}
                      alt={pizza.nome}
                      width={300}
                      height={200}
                      className={styles.pizzaImage}
                    />
                  </div>
                  <div className={styles.menuItemInfo}>
                    <h3>{pizza.nome}</h3>
                    <p className={styles.ingredients}>{pizza.ingredientes}</p>
                    <div className={styles.priceRow}>
                      <div className={styles.sizes}>
                        <span>Média</span>
                        <span>Grande</span>
                        <span>Família</span>
                      </div>
                      <div className={styles.prices}>
                        <span>R$ {pizza.precos.M.toFixed(2)}</span>
                        <span>R$ {pizza.precos.G.toFixed(2)}</span>
                        <span>R$ {pizza.precos.FM.toFixed(2)}</span>
                      </div>
                    </div>
                    <button className={styles.orderButton}>Pedir Agora</button>
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
            <p className={styles.categoryDescription}>
              Deliciosas entradas para começar sua experiência gastronômica
              italiana com estilo e sabor. Perfeitas para compartilhar.
            </p>

            <div className={styles.menuGrid}>
              {entradas.map((item) => (
                <div
                  key={item.id}
                  className={styles.menuItem}
                  onClick={() => addSimpleItemToCart(item)}
                >
                  <div className={styles.menuItemImage}>
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      width={300}
                      height={200}
                      className={styles.pizzaImage}
                    />
                  </div>
                  <div className={styles.menuItemInfo}>
                    <h3>{item.nome}</h3>
                    <p className={styles.ingredients}>{item.ingredientes}</p>
                    <div className={styles.singlePrice}>
                      <span>R$ {item.preco.toFixed(2)}</span>
                    </div>
                    <button className={styles.orderButton}>Pedir Agora</button>
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
            <p className={styles.categoryDescription}>
              Refrescantes opções de bebidas para acompanhar seu pedido e tornar
              sua refeição ainda mais completa.
            </p>

            <div className={styles.menuGrid}>
              {bebidas.map((item) => (
                <div
                  key={item.id}
                  className={styles.menuItem}
                  onClick={() => addSimpleItemToCart(item)}
                >
                  <div className={styles.menuItemImage}>
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      width={300}
                      height={200}
                      className={styles.pizzaImage}
                    />
                  </div>
                  <div className={styles.menuItemInfo}>
                    <h3>{item.nome}</h3>
                    <p className={styles.ingredients}>{item.descricao}</p>
                    <div className={styles.singlePrice}>
                      <span>R$ {item.preco.toFixed(2)}</span>
                    </div>
                    <button className={styles.orderButton}>Pedir Agora</button>
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
            <p className={styles.categoryDescription}>
              Para finalizar com chave de ouro, nossas sobremesas tradicionais
              italianas são preparadas diariamente com ingredientes frescos.
            </p>

            <div className={styles.menuGrid}>
              {sobremesas.map((item) => (
                <div
                  key={item.id}
                  className={styles.menuItem}
                  onClick={() => addSimpleItemToCart(item)}
                >
                  <div className={styles.menuItemImage}>
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      width={300}
                      height={200}
                      className={styles.pizzaImage}
                    />
                  </div>
                  <div className={styles.menuItemInfo}>
                    <h3>{item.nome}</h3>
                    <p className={styles.ingredients}>{item.descricao}</p>
                    <div className={styles.singlePrice}>
                      <span>R$ {item.preco.toFixed(2)}</span>
                    </div>
                    <button className={styles.orderButton}>Pedir Agora</button>
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

  return (
    <div className={styles.menuPage}>
      <div className={styles.menuHero}>
        <div className={styles.container}>
          <h1>Nosso Cardápio</h1>
          <p>As melhores pizzas autênticas italianas de São Paulo</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.menuNavigation}>
          <button
            className={
              activeCategory === "pizzasTradicional"
                ? styles.activeCategory
                : ""
            }
            onClick={() => setActiveCategory("pizzasTradicional")}
          >
            Pizzas Tradicionais
          </button>
          <button
            className={
              activeCategory === "pizzasPremium" ? styles.activeCategory : ""
            }
            onClick={() => setActiveCategory("pizzasPremium")}
          >
            Pizzas Premium
          </button>
          <button
            className={
              activeCategory === "entradas" ? styles.activeCategory : ""
            }
            onClick={() => setActiveCategory("entradas")}
          >
            Entradas
          </button>
          <button
            className={
              activeCategory === "bebidas" ? styles.activeCategory : ""
            }
            onClick={() => setActiveCategory("bebidas")}
          >
            Bebidas
          </button>
          <button
            className={
              activeCategory === "sobremesas" ? styles.activeCategory : ""
            }
            onClick={() => setActiveCategory("sobremesas")}
          >
            Sobremesas
          </button>
        </div>

        <div className={styles.menuSection}>{renderActiveCategory()}</div>
      </div>

      {/* Modal de Seleção de Tamanho */}
      {showSizeModal && selectedPizza && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.sizeModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeModal} onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <h3>Escolha o tamanho da pizza</h3>
            <p className={styles.pizzaName}>{selectedPizza.nome}</p>

            <div className={styles.sizeOptions}>
              <div className={styles.sizeOption} onClick={() => addToCart("M")}>
                <div className={styles.sizeCircle}>
                  <span className={styles.sizeLabel}>M</span>
                </div>
                <span className={styles.sizeDescription}>Média</span>
                <span className={styles.sizePrice}>
                  R$ {selectedPizza.precos.M.toFixed(2)}
                </span>
              </div>

              <div className={styles.sizeOption} onClick={() => addToCart("G")}>
                <div className={styles.sizeCircle}>
                  <span className={styles.sizeLabel}>G</span>
                </div>
                <span className={styles.sizeDescription}>Grande</span>
                <span className={styles.sizePrice}>
                  R$ {selectedPizza.precos.G.toFixed(2)}
                </span>
              </div>

              <div
                className={styles.sizeOption}
                onClick={() => addToCart("FM")}
              >
                <div className={styles.sizeCircle}>
                  <span className={styles.sizeLabel}>FM</span>
                </div>
                <span className={styles.sizeDescription}>Família</span>
                <span className={styles.sizePrice}>
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
