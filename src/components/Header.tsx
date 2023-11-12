import styles from './Header.module.css';

import desafioLogo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={desafioLogo} alt="Logotipo do desafio 1 do Ignite" />
    </header>
  );
}