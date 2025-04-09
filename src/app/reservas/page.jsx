"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pessoas: "",
    data: "",
    horario: "",
    observacoes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    // Simulando envio para um servidor
    setTimeout(() => {
      console.log("Dados enviados:", formData);
      setIsSubmitting(false);
      setFormSuccess(true);

      // Resetar o form após 3 segundos
      setTimeout(() => {
        setFormSuccess(false);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          pessoas: "",
          data: "",
          horario: "",
          observacoes: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className={styles.reservasPage}>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1>Reservas</h1>
          <p>Reserve sua mesa na Nostra Nona</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.reservasGrid}>
          <div className={styles.reservasForm}>
            <h2>Faça sua reserva</h2>
            <p className={styles.formIntro}>
              Preencha o formulário abaixo para reservar sua mesa. Recomendamos
              reservar com pelo menos 2 horas de antecedência.
            </p>

            {formSuccess && (
              <div className={styles.successMessage}>
                <i className="fas fa-check-circle"></i>
                <p>
                  Sua reserva foi enviada com sucesso! Entraremos em contato
                  para confirmação.
                </p>
              </div>
            )}

            {formError && (
              <div className={styles.errorMessage}>
                <i className="fas fa-exclamation-circle"></i>
                <p>{formError}</p>
              </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome completo*</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">E-mail*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="telefone">Telefone*</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(11) 99999-9999"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="pessoas">Número de pessoas*</label>
                  <select
                    id="pessoas"
                    name="pessoas"
                    required
                    value={formData.pessoas}
                    onChange={handleChange}
                  >
                    <option value="">Quantas pessoas?</option>
                    <option value="1">1 pessoa</option>
                    <option value="2">2 pessoas</option>
                    <option value="3">3 pessoas</option>
                    <option value="4">4 pessoas</option>
                    <option value="5">5 pessoas</option>
                    <option value="6">6 pessoas</option>
                    <option value="7">7 pessoas</option>
                    <option value="8">8 pessoas</option>
                    <option value="mais">Mais de 8 pessoas</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="data">Data*</label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.data}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="horario">Horário*</label>
                <select
                  id="horario"
                  name="horario"
                  required
                  value={formData.horario}
                  onChange={handleChange}
                >
                  <option value="">Selecione um horário</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                  <option value="22:30">22:30</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="observacoes">Observações</label>
                <textarea
                  id="observacoes"
                  name="observacoes"
                  placeholder="Aniversário, preferência de local, acessibilidade, etc."
                  rows="3"
                  value={formData.observacoes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className={styles.formPolicy}>
                <p>
                  Ao enviar este formulário, você concorda com nossa{" "}
                  <a href="/politica-privacidade">Política de Privacidade</a>.
                </p>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>
                    <i className="fas fa-spinner fa-spin"></i> Processando...
                  </span>
                ) : (
                  "Confirmar Reserva"
                )}
              </button>
            </form>
          </div>

          <div className={styles.reservasInfo}>
            <div className={styles.infoCard}>
              <h3>Informações importantes</h3>
              <ul className={styles.infoList}>
                <li>
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Horário de funcionamento</h4>
                    <p>Segunda a Domingo: 18:00 às 00:00</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-info-circle"></i>
                  <div>
                    <h4>Tolerância</h4>
                    <p>
                      Reservamos sua mesa por até 15 minutos após o horário
                      marcado
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-users"></i>
                  <div>
                    <h4>Grupos grandes</h4>
                    <p>
                      Para grupos acima de 8 pessoas, entre em contato por
                      telefone
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-credit-card"></i>
                  <div>
                    <h4>Taxas</h4>
                    <p>Não cobramos taxa de reserva ou cancelamento</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.restaurantCard}>
              <div className={styles.restaurantImage}>
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
                  alt="Nostra Nona Pizzaria"
                  width={500}
                  height={300}
                  className={styles.locationImg}
                />
              </div>
              <div className={styles.restaurantInfo}>
                <h3>Nostra Nona Pizzaria</h3>
                <address>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> Rua da Pizza, 1004
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> (11) 5051-1229
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i>{" "}
                    contato@nostranona.com.br
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
