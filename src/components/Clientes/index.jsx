import styles from './Clientes.module.css'
import jesse from '../../assets/svg-jesse.svg'
import bgMinecraft from '../../assets/svg-bgMinecraft.svg'
import bgGta from '../../assets/svg-bgGta.svg'

function Clientes(){
    return(
        <section className={styles.container} id='clientes'>
            <div  className={styles.firstBox}>
                <div className={styles.firstDivision}>
                    <div className={styles.titleClient}>
                        Somos uma Extensão em Lorem Ipsum
                    </div>
                    <div className={styles.textClient}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                     nisi ut aliquip ex ea commodo consequa.
                    </div>
                </div>
                <div className={styles.secondDivision}>
                    <div className={styles.frameBox}>
                        <div className={styles.frame}></div>
                        <img src={jesse} alt="" />
                    </div>
                    <img className={styles.bgMinecraft} src={bgMinecraft} alt="" />
                </div>
            </div>
            <div  className={styles.secondBox}>
                <div className={styles.secondDivision}>
                    <img className={styles.bgGta} src={bgGta} alt="" />
                    <div className={styles.frameGta}></div>
                </div>
                <div className={styles.firstDivision}>
                    <div className={styles.titleClient}>
                        Somos uma Extensão em Lorem Ipsum
                    </div>
                    <div className={styles.textClient}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                     nisi ut aliquip ex ea commodo consequa.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clientes