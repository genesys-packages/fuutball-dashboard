import Head from "next/head";
import { useEffect, useState } from "react";

import { AsideForm } from "../components/AsideForm";
import { DevItem } from "../components/DevItem";
import { api } from "../services/api";
import styles from "../styles/pages/Home.module.scss";

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
  id: string;
  times: TimesProps;
  winner: string;
  metadata: {
    event: string;
    date: string;
  };
  twitters: [];
};

type fuutballArgs = {
  timeAName: string;
  timeBName: string;
  timeAGoals: number;
  timeBGoals: number;
  winner: string;
  event: string;
  date: string;
};

export default function Home() {
  const [game, setGame] = useState<FuutballMatchProps[]>([]);

  async function handleAddGame({
    timeAName,
    timeBName,
    timeAGoals,
    timeBGoals,
    winner,
    event,
    date,
  }: fuutballArgs) {
    try {
      console.log(
        `ADD NEW GAME: ${
          timeAName +
          timeBName +
          timeAGoals +
          timeBGoals +
          winner +
          event +
          date
        }`
      );
    } catch (error) {
      alert(error.message);
    }
  }

  async function loadGames() {
    try {
      const { data } = await api.get<FuutballMatchProps[]>("/fuutball");

      setGame(data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | fuutball</title>
        <meta name="description" content="fuutball Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <aside>
          <strong>Cadastrar</strong>
          <AsideForm handleAddGame={handleAddGame} />
        </aside>

        <main>
          <ul>
            {game.map((match) => (
              <DevItem key={match.id} match={match} />
            ))}
          </ul>
        </main>
      </main>
    </div>
  );
}
