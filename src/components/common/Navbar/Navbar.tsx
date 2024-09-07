import logo from "@/assets/images/logo/BI Logo.png";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image src={logo} alt="logo" width={75} height={75} />
    </nav>
  );
}
