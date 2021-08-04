import { FormEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";

import styles from "../styles/components/DevForm.module.scss";

type fuutballArgs = {
  timeAName: string;
  timeBName: string;
  timeAGoals: number;
  timeBGoals: number;
  winner: string;
  event: string;
  date: string;
};

type AsideFormProps = {
  handleAddGame: (
    formEvent: FormEvent<HTMLFormElement>,
    data: fuutballArgs
  ) => void;
};

function AsideForm({ handleAddGame }: AsideFormProps) {
  const [timeAName, setTimeAName] = useState("");
  const [timeBName, setTimeBName] = useState("");
  const [timeAGoals, setTimeAGoals] = useState(0);
  const [timeBGoals, setTimeBGoals] = useState(0);
  const [winner, setWinner] = useState("");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");

  return (
    <form
      className={styles.formContainer}
      onSubmit={(e) =>
        handleAddGame(e, {
          timeAName,
          timeBName,
          timeAGoals,
          timeBGoals,
          winner,
          event,
          date,
        })
      }
    >
      <div className={styles.inputGroup}>
        <div className={styles.inputBlock}>
          <label htmlFor="time_a">Time A</label>
          <input
            value={timeAName}
            onChange={(e) => setTimeAName(e.target.value)}
            name="time_a"
            id="time_a"
            required
          />
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="time_b">Time B</label>
          <input
            value={timeBName}
            onChange={(e) => setTimeBName(e.target.value)}
            name="time_b"
            id="time_b"
            required
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputBlock}>
          <label htmlFor="latitude">A - Goals</label>
          <input
            value={timeAGoals}
            onChange={(e) => setTimeAGoals(Number(e.target.value))}
            type="number"
            name="latitude"
            id="latitude"
            required
          />
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="longitude">B - Goals</label>
          <input
            value={timeBGoals}
            onChange={(e) => setTimeBGoals(Number(e.target.value))}
            type="number"
            name="longitude"
            id="longitude"
            required
          />
        </div>
      </div>

      <div className={styles.inputBlock}>
        <label htmlFor="time_b">Time vencedor</label>
        <input
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
          name="time_b"
          id="time_b"
          required
        />
      </div>

      <div className={styles.metadataContainer}>
        <h3>Metadata</h3>

        <div className={styles.inputGroup}>
          <div className={styles.inputBlock}>
            <label htmlFor="event">Evento</label>
            <input
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              type="text"
              name="event"
              id="event"
              required
            />
          </div>

          <div className={styles.inputBlock}>
            <label htmlFor="date">Data</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              name="date"
              id="date"
              required
            />
          </div>
        </div>
      </div>

      <div className={styles.twitterContainer}>
        <div className={styles.header}>
          <h3>Twitters</h3>
          <button type="button">
            <FiPlus />
          </button>
        </div>

        <div className={styles.twitterComponentGroup}>
          <div>
            <label htmlFor="code01">code: </label>
            <input type="text" name="code01" id="code01" />
          </div>

          <div>
            <label htmlFor="code02">code: </label>
            <input type="text" name="code02" id="code02" />
          </div>
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export { AsideForm };
