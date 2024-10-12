import Link from "next/link";
import Module from "./header.module.css";
import Navbar from "./navbar";
const Header = () => {
  return (
    <header className={Module.header}>
      <Navbar />
      <div className={Module.right}>
        <Link href={"/login"} className={Module.btn}>login</Link>
        <Link href={"/register"} className={Module.btn}>register</Link>
      </div>
    </header>
  );
};

export default Header;
