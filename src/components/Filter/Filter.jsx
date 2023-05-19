import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.container}>
      Filter
      <input className={styles.input} type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;