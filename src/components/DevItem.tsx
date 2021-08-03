/* eslint-disable @next/next/no-img-element */

import styles from "../styles/components/DevItem.module.scss";

function DevItem() {
  return (
    <li className={styles.devItem}>
      <header>
        <div className={styles.circle} />

        <div className={styles.userInfo}>
          <strong>Barcelona VS Real Madrid</strong>
          <span>World Cup, 12 de Agosto 2021</span>
        </div>
      </header>

      <div className={styles.winner}>
        <h1>2 - 1</h1>
      </div>

      <a href="https://github.com/eliasallex">Excluir partida de futebol</a>
    </li>
  );
}

export { DevItem };
