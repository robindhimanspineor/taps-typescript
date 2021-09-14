import Navbar from "./Navbar";
import styles from "../../styles/Layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
