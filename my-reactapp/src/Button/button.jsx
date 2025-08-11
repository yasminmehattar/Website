import styles from "./button.module.css"
function Button({onClick}){
    return(
        <button className={styles.button} onClick={onClick}>Click Me</button>
    )
}
export default Button