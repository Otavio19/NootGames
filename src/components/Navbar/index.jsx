import logo from '../../assets/noot-logo.png'
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.navBar}>
            <a href="https://www.noot.com.br/">
                <img className={styles.imgLogo} src={logo} alt="" />
            </a>
            <ul className={styles.listMenu}>
                <li className={styles.itemMenu}>
                    <a href="#home">
                        home
                    </a>
                </li>
                <li className={styles.itemMenu}>
                    <a href="#sobre">
                        sobre
                    </a>
                </li>
                <li className={styles.itemMenu}>
                    <a href="#funcionalidades">
                        funcionalidades
                    </a>
                </li>
                <li className={styles.itemMenu}>
                    <a href="#clientes">
                        clientes
                    </a>
                </li>
            </ul>
            <button className={styles.btnMenu}>
                ESTOU SOBRE LOREM IPSUN
            </button>
        </nav>
    )
}

export default Navbar