import styles from "./TextField.module.css";
export function TextField(props) {
  return (
    <div className={styles.divTextField}>
      <label htmlFor={props.htmlFor}>{props.children}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        autoComplete="off"
        required="true"
      />
    </div>
  );
}
