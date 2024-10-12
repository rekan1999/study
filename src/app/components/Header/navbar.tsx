import { MdMovie } from "react-icons/md";
import Link from "next/link";
import Module from "./header.module.css";
import { TiThMenuOutline } from "react-icons/ti";
const Navbar = () => {
  return (
    <nav className={Module.navbar}>
        <div className={Module.menu}>
          <TiThMenuOutline />
        </div>
        <div className={Module.logo}>
          <Link href={"/"}>
            Cinema
            <MdMovie />
            Space
          </Link>
        </div>
        <ul className={Module.navlinks}>
          <Link href={"/films"} className={Module.navlink}>Films</Link>
          <Link href={"/drama"} className={Module.navlink}>Drama</Link>
          <Link href={"/aboute"} className={Module.navlink}>Aboute</Link>
        </ul>
      </nav>
  )
}

export default Navbar