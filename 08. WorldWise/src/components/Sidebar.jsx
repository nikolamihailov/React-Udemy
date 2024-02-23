import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles["sidebar"]}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles["footer"]}>
        <p className={styles["footer"]}>
          &copy; Copyright {new Date().getFullYear()} by WorlWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
