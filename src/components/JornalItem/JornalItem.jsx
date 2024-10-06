import styles from "./JornalItem.module.css";

export const JornalItem = ({ title, description, date }) => {
  return (
    <div className={styles.jornelItem}>
      <h3>{title}</h3>
      <div>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
