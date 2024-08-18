import React ,{useState}from 'react';
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar} id=''>
        <a href="/" className={styles.title}>
    <span>Dr</span> <span>Syed</span> <span>Zohaib</span> <span>Maroof</span> <span>Hussain</span>
</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen? getImageUrl('nav/closeIcon.png'):getImageUrl('nav/menuIcon.png')} alt="menu-button"
            onClick={()=> setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=> setMenuOpen(false)}>
                <li>
                    <a href="#biography">Biography</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#researches">Research</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}
