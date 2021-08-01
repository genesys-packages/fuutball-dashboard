import { FiPlus } from "react-icons/fi";

import styles from "../styles/components/DevForm.module.scss";

function AsideForm() {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <div className={styles.inputBlock}>
          <label htmlFor="time_a">Time A</label>
          <input name="time_a" id="time_a" required />
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="time_b">Time B</label>
          <input name="time_b" id="time_b" required />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputBlock}>
          <label htmlFor="latitude">A - Goals</label>
          <input type="number" name="latitude" id="latitude" required />
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="longitude">B - Goals</label>
          <input type="number" name="longitude" id="longitude" required />
        </div>
      </div>

      <div className={styles.inputBlock}>
        <label htmlFor="time_b">Time vencedor</label>
        <input name="time_b" id="time_b" required />
      </div>

      <div className={styles.metadataContainer}>
        <h3>Metadata</h3>

        <div className={styles.inputGroup}>
          <div className={styles.inputBlock}>
            <label htmlFor="event">Evento</label>
            <input type="text" name="event" id="event" required />
          </div>

          <div className={styles.inputBlock}>
            <label htmlFor="date">Data</label>
            <input type="date" name="date" id="date" required />
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
            <input type="text" name="code01" id="code01" required />
          </div>

          <div>
            <label htmlFor="code02">code: </label>
            <input type="text" name="code02" id="code02" required />
          </div>
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export { AsideForm };
