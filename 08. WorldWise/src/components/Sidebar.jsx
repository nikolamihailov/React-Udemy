import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles["sidebar"]}>
      <Logo />
      <p>List of cities</p>
      <footer className={styles["footer"]}>
        <p className={styles["footer"]}>
          &copy; Copyright {new Date().getFullYear()} by WorlWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
