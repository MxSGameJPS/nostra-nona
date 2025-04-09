"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function TrabalheConoscoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    experiencia: "",
    mensagem: "",
    arquivo: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        arquivo: file,
      }));
      setFileName(file.name);
    }
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
          cargo: "",
          experiencia: "",
          mensagem: "",
          arquivo: null,
        });
        setFileName("");
      }, 3000);
    }, 1500);
  };

  return (
    <div className={styles.trabalheConoscoPage}>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1>Trabalhe Conosco</h1>
          <p>Faça parte do time da Nostra Nona Pizzaria</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.pageGrid}>
          <div className={styles.formSection}>
            <h2>Candidate-se</h2>
            <p className={styles.formIntro}>
              Estamos sempre em busca de pessoas apaixonadas por gastronomia e
              que queiram fazer parte da nossa história. Preencha o formulário
              abaixo e envie seu currículo.
            </p>

            {formSuccess && (
              <div className={styles.successMessage}>
                <i className="fas fa-check-circle"></i>
                <p>
                  Sua candidatura foi enviada com sucesso! Entraremos em contato
                  se seu perfil for compatível com nossas vagas.
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

              <div className={styles.formGroup}>
                <label htmlFor="cargo">Cargo desejado*</label>
                <select
                  id="cargo"
                  name="cargo"
                  required
                  value={formData.cargo}
                  onChange={handleChange}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="atendente">Atendente</option>
                  <option value="auxiliar-cozinha">Auxiliar de Cozinha</option>
                  <option value="pizzaiolo">Pizzaiolo</option>
                  <option value="motoboy">Entregador</option>
                  <option value="gerente">Gerente</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="experiencia">Experiência*</label>
                <select
                  id="experiencia"
                  name="experiencia"
                  required
                  value={formData.experiencia}
                  onChange={handleChange}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="sem-experiencia">Sem experiência</option>
                  <option value="6-meses">Até 6 meses</option>
                  <option value="1-ano">Até 1 ano</option>
                  <option value="2-anos">1 a 2 anos</option>
                  <option value="3-mais">3 anos ou mais</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensagem">
                  Por que deseja trabalhar conosco?
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte-nos um pouco sobre você e por que deseja trabalhar na Nostra Nona"
                  rows="4"
                  value={formData.mensagem}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className={styles.fileUpload}>
                <label htmlFor="arquivo">
                  Enviar currículo (PDF, DOC ou DOCX)*
                </label>
                <div className={styles.fileInputWrapper}>
                  <input
                    type="file"
                    id="arquivo"
                    name="arquivo"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className={styles.fileInput}
                  />
                  <div className={styles.customFileUpload}>
                    <i className="fas fa-upload"></i>
                    <span>{fileName || "Selecionar arquivo"}</span>
                  </div>
                </div>
                <p className={styles.fileInfo}>Tamanho máximo: 5MB</p>
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
                  "Enviar Candidatura"
                )}
              </button>
            </form>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.benefitsCard}>
              <h3>Benefícios</h3>
              <ul className={styles.benefitsList}>
                <li>
                  <i className="fas fa-utensils"></i>
                  <div>
                    <h4>Refeição no local</h4>
                    <p>Alimentação durante o horário de trabalho</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-bus"></i>
                  <div>
                    <h4>Vale-transporte</h4>
                    <p>Auxílio para deslocamento</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <h4>Treinamento</h4>
                    <p>Capacitação e desenvolvimento profissional</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-chart-line"></i>
                  <div>
                    <h4>Plano de carreira</h4>
                    <p>Possibilidade de crescimento profissional</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.imageCard}>
              <Image
                src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&auto=format&fit=crop"
                alt="Equipe Nostra Nona"
                width={600}
                height={400}
                className={styles.teamImage}
              />
              <div className={styles.imageCaption}>
                <h3>Nosso Time</h3>
                <p>
                  Valorizamos a paixão pela gastronomia italiana, o trabalho em
                  equipe e a dedicação aos nossos clientes. Buscamos pessoas que
                  compartilhem nossos valores e queiram crescer conosco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
