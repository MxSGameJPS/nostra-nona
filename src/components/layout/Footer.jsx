import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <h3>Endereço</h3>
            <div className={styles.location}>
              <address>
                <p>Rua da Pizza, 1004</p>
                <p>(11) 5051-1229</p>
                <p>(11) 94023-8329</p>
                <p>contato@nostranona.com.br</p>
              </address>
            </div>
          </div>

          <div className={styles.footerNav}>
            <h3>Links Rápidos</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/menu">Cardápio</Link>
              </li>
              <li>
                <Link href="/pedidos">Delivery</Link>
              </li>
              <li>
                <Link href="/reservas">Reservas</Link>
              </li>
              <li>
                <Link href="/trabalheconosco">Trabalhe Conosco</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerNewsletter}>
            <h3>Fique por dentro</h3>
            <p>Inscreva-se para receber promoções e novidades</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Seu e-mail" required />
              <button type="submit">Inscrever</button>
            </form>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5511950511229"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.businessHours}>
            <h4>Horário de Funcionamento</h4>
            <p>
              <strong>De Segunda-feira a Sábado:</strong>
              <br />
              Das 18:00 às 00:00
            </p>
            <p>
              <strong>Domingo:</strong>
              <br />
              Das 18:00 às 00:00
            </p>
          </div>

          <div className={styles.copyright}>
            <p>
              &copy; {new Date().getFullYear()} Nostra Nona Pizzaria. Todos os
              direitos reservados.
            </p>
            <p>CNPJ: 30.303.209/0001-95</p>
          </div>

          <div className={styles.paymentMethods}>
            <h4>Formas de Pagamento</h4>
            <div className={styles.paymentIcons}>
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PIX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
