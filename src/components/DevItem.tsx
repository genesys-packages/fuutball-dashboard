/* eslint-disable @next/next/no-img-element */

import styles from "../styles/components/DevItem.module.scss";

type TimesProps = {
  a: {
    name: string;
    goals: number;
  };
  b: {
    name: string;
    goals: number;
  };
};

type FuutballMatchProps = {
  id?: string;
  times: TimesProps;
  winner: string;
  metadata: {
    event: string;
    date: string;
  };
  twitters: [];
};

type DevItemProps = {
  match: FuutballMatchProps;
};

function DevItem({ match }: DevItemProps) {
  return (
    <li className={styles.devItem}>
      <header>
        <div className={styles.circle} />

        <div className={styles.userInfo}>
          <strong>
            {match?.times.a.name} VS {match?.times.b.name}d
          </strong>
          <span>
            {match?.metadata.event}, {match?.metadata.date}
          </span>
        </div>
      </header>

      <div className={styles.winner}>
        <h1>
          {match.times.a.goals} - {match.times.b.goals}
        </h1>
      </div>

      <a href="https://github.com/eliasallex">Excluir partida de futebol</a>
    </li>
  );
}

export { DevItem };
