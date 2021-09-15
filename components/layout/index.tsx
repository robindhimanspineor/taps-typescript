import Navbar from "./Navbar";
import styles from "../../styles/Layout.module.css";

const Layout = ({ children ,...otherProps }: any) => {
  
  return (
    <div className={styles.container}>
      <Navbar {...otherProps} />
      {children}
    </div>
  );
};

export default Layout;
