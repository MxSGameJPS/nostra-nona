"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function CarrinhoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    pontoReferencia: "",
    pagamento: "",
    precisaTroco: "nao",
    valorTroco: "",
  });

  const [cartItems, setCartItems] = useState([]);

  const [showCardModal, setShowCardModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const router = useRouter();

  // Carregar itens do localStorage na montagem do componente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("carrinho");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, []);

  // Atualizar localStorage quando o carrinho mudar
  useEffect(() => {
    if (typeof window !== "undefined" && cartItems.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Calcular total quando os itens do carrinho mudarem
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.preco * item.quantidade,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  // Atualizar o contador no header
  useEffect(() => {
    const cartCountElement = document.querySelector(".cartCount");
    if (cartCountElement) {
      cartCountElement.textContent = cartItems.length.toString();
    }
  }, [cartItems]);

  const handleQuantityChange = (id, tamanho, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.tamanho === tamanho) {
        return { ...item, quantidade: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("carrinho", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const handleRemoveItem = (id, tamanho) => {
    const updatedCart = cartItems.filter(
      (item) => !(item.id === id && item.tamanho === tamanho)
    );
    setCartItems(updatedCart);
    localStorage.setItem("carrinho", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const limparCarrinho = () => {
    setCartItems([]);
    localStorage.removeItem("carrinho");
    window.dispatchEvent(new Event("storage"));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Se mudar o método de pagamento, reseta alguns campos
    if (name === "pagamento") {
      if (value !== "dinheiro") {
        setFormData((prev) => ({
          ...prev,
          pagamento: value,
          precisaTroco: "nao",
          valorTroco: "",
        }));
      }

      // Mostrar modal para cartão
      if (value === "cartao") {
        setShowCardModal(true);
      } else {
        setShowCardModal(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    setIsSubmitting(true);

    // Simulando envio para um servidor
    setTimeout(() => {
      console.log("Pedido enviado:", {
        cliente: formData,
        itens: cartItems,
        total: total.toFixed(2),
      });

      setIsSubmitting(false);
      setFormSuccess(true);

      // Limpar carrinho após o pedido
      if (typeof window !== "undefined") {
        localStorage.removeItem("carrinho");
      }

      // Resetar após 3 segundos
      setTimeout(() => {
        setFormSuccess(false);
        setFormData({
          nome: "",
          telefone: "",
          endereco: "",
          pontoReferencia: "",
          pagamento: "",
          precisaTroco: "nao",
          valorTroco: "",
        });
        setCartItems([]);
      }, 3000);
    }, 1500);
  };

  const handleCloseModal = () => {
    setShowCardModal(false);
  };

  // Função para voltar à página do menu
  const voltarParaMenu = () => {
    router.push("/menu");
  };

  return (
    <div className={styles.carrinhoPage}>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1>Seu Carrinho</h1>
          <p>Confira seus itens e finalize seu pedido</p>
        </div>
      </div>

      <div className={styles.container}>
        {formSuccess ? (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Pedido Realizado com Sucesso!</h2>
            <p>
              Seu pedido foi recebido e está sendo preparado. Em breve você
              receberá uma confirmação por telefone.
            </p>
            <Link href="/menu" className={styles.btnSecondary}>
              Voltar para o Cardápio
            </Link>
          </div>
        ) : (
          <div className={styles.carrinhoGrid}>
            <div className={styles.carrinhoItens}>
              <h2>Itens do Pedido</h2>

              {cartItems.length === 0 ? (
                <div className={styles.emptyCart}>
                  <i className="fas fa-shopping-cart"></i>
                  <p>Seu carrinho está vazio</p>
                  <Link href="/menu" className={styles.btnSecondary}>
                    Ver Cardápio
                  </Link>
                </div>
              ) : (
                <div className={styles.itemsList}>
                  {cartItems.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className={styles.cartItem}
                    >
                      <div className={styles.itemImage}>
                        <Image
                          src={item.imagem}
                          alt={item.nome}
                          width={80}
                          height={80}
                          className={styles.productImage}
                        />
                      </div>
                      <div className={styles.itemInfo}>
                        <h3>{item.nome}</h3>
                        <p>Tamanho: {item.tamanho}</p>
                        <p className={styles.itemPrice}>
                          R$ {item.preco.toFixed(2)}
                        </p>
                      </div>
                      <div className={styles.itemActions}>
                        <div className={styles.quantityControl}>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                item.tamanho,
                                item.quantidade - 1
                              )
                            }
                            className={styles.quantityBtn}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className={styles.quantity}>
                            {item.quantidade}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                item.tamanho,
                                item.quantidade + 1
                              )
                            }
                            className={styles.quantityBtn}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            handleRemoveItem(item.id, item.tamanho)
                          }
                          className={styles.removeBtn}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className={styles.cartSummary}>
                    <div className={styles.summaryRow}>
                      <span>Subtotal:</span>
                      <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span>Taxa de entrega:</span>
                      <span>Grátis</span>
                    </div>
                    <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                      <span>Total:</span>
                      <span>R$ {total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className={styles.cartActions}>
                    <button
                      className={`${styles.clearCart} ${
                        cartItems.length === 0 ? styles.disabled : ""
                      }`}
                      onClick={limparCarrinho}
                      disabled={cartItems.length === 0}
                      type="button"
                    >
                      Limpar Carrinho
                    </button>
                    <button
                      className={styles.continueShopping}
                      onClick={voltarParaMenu}
                      type="button"
                    >
                      Continuar Comprando
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.checkoutForm}>
              <h2>Dados para Entrega</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="nome">Nome completo*</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="telefone">Telefone*</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="endereco">Endereço completo*</label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    placeholder="Rua, número, bairro, complemento, CEP"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="pontoReferencia">Ponto de referência</label>
                  <input
                    type="text"
                    id="pontoReferencia"
                    name="pontoReferencia"
                    value={formData.pontoReferencia}
                    onChange={handleChange}
                    placeholder="Próximo a..."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Forma de pagamento*</label>
                  <div className={styles.pagamentoOptions}>
                    <div className={styles.pagamentoOption}>
                      <input
                        type="radio"
                        id="pagCartao"
                        name="pagamento"
                        value="cartao"
                        checked={formData.pagamento === "cartao"}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="pagCartao">
                        <i className="fas fa-credit-card"></i> Cartão
                      </label>
                    </div>

                    <div className={styles.pagamentoOption}>
                      <input
                        type="radio"
                        id="pagPix"
                        name="pagamento"
                        value="pix"
                        checked={formData.pagamento === "pix"}
                        onChange={handleChange}
                      />
                      <label htmlFor="pagPix">
                        <i className="fas fa-qrcode"></i> PIX
                      </label>
                    </div>

                    <div className={styles.pagamentoOption}>
                      <input
                        type="radio"
                        id="pagDinheiro"
                        name="pagamento"
                        value="dinheiro"
                        checked={formData.pagamento === "dinheiro"}
                        onChange={handleChange}
                      />
                      <label htmlFor="pagDinheiro">
                        <i className="fas fa-money-bill-wave"></i> Dinheiro
                      </label>
                    </div>
                  </div>
                </div>

                {formData.pagamento === "dinheiro" && (
                  <div className={styles.trocoOptions}>
                    <div className={styles.formGroup}>
                      <label>Precisa de troco?</label>
                      <div className={styles.radioGroup}>
                        <div className={styles.radioOption}>
                          <input
                            type="radio"
                            id="trocoSim"
                            name="precisaTroco"
                            value="sim"
                            checked={formData.precisaTroco === "sim"}
                            onChange={handleChange}
                          />
                          <label htmlFor="trocoSim">Sim</label>
                        </div>
                        <div className={styles.radioOption}>
                          <input
                            type="radio"
                            id="trocoNao"
                            name="precisaTroco"
                            value="nao"
                            checked={formData.precisaTroco === "nao"}
                            onChange={handleChange}
                          />
                          <label htmlFor="trocoNao">Não</label>
                        </div>
                      </div>
                    </div>

                    {formData.precisaTroco === "sim" && (
                      <div className={styles.formGroup}>
                        <label htmlFor="valorTroco">Troco para quanto?</label>
                        <div className={styles.trocoInputWrapper}>
                          <span className={styles.currencySymbol}>R$</span>
                          <input
                            type="number"
                            id="valorTroco"
                            name="valorTroco"
                            value={formData.valorTroco}
                            onChange={handleChange}
                            placeholder="0,00"
                            min={total}
                            step="0.01"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {formData.pagamento === "pix" && (
                  <div className={styles.pixInfo}>
                    <p>
                      <i className="fas fa-info-circle"></i> Após confirmar o
                      pedido, você receberá as instruções para pagamento via
                      PIX.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.btnPrimary}
                  disabled={isSubmitting || cartItems.length === 0}
                >
                  {isSubmitting ? (
                    <span>
                      <i className="fas fa-spinner fa-spin"></i> Processando...
                    </span>
                  ) : (
                    "Finalizar Pedido"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Cartão */}
      {showCardModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.cardModal}>
            <button className={styles.closeModal} onClick={handleCloseModal}>
              <i className="fas fa-times"></i>
            </button>
            <h3>Dados do Cartão</h3>
            <div className={styles.cardForm}>
              <div className={styles.formGroup}>
                <label htmlFor="cardNumber">Número do Cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  maxLength="19"
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="cardName">Nome no Cartão</label>
                  <input
                    type="text"
                    id="cardName"
                    placeholder="Nome como está no cartão"
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="cardExpiry">Validade (MM/AA)</label>
                  <input
                    type="text"
                    id="cardExpiry"
                    placeholder="MM/AA"
                    maxLength="5"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="cardCVC">CVV</label>
                  <input
                    type="text"
                    id="cardCVC"
                    placeholder="123"
                    maxLength="3"
                  />
                </div>
              </div>
              <button className={styles.btnPrimary} onClick={handleCloseModal}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
