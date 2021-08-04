import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";

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
  id?: string;
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

  async function handleAddGame(
    formEvent: FormEvent<HTMLFormElement>,
    {
      timeAName,
      timeBName,
      timeAGoals,
      timeBGoals,
      winner,
      event,
      date,
    }: fuutballArgs
  ) {
    formEvent.preventDefault();

    try {
      const { data } = await api.post<FuutballMatchProps>("/new/fuutball", {
        times: {
          a: {
            name: timeAName,
            goals: timeAGoals,
          },
          b: {
            name: timeBName,
            goals: timeBGoals,
          },
        },
        winner,
        metadata: {
          event,
          date,
        },
        twitters: [],
      });

      setGame((oldGames) => [data, ...oldGames]);
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
            {game ? (
              game.map((match) => <DevItem key={match.id} match={match} />)
            ) : (
              <h1>Comece criando nova partida de futebol</h1>
            )}
          </ul>
        </main>
      </main>
    </div>
  );
}
