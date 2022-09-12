import styles from './Funcionalidades.module.css'
import meninaDragao from './../../assets/svg-meninaDragao.svg'
import guerreiro from './../../assets/svg-guerreiro.svg'
import divisaoUm from './../../assets/svg-divisaoUm.svg'

function funcionalidades(){
    return(
        <section className={styles.containerFunc} id='funcionalidades'>
            <div className={styles.divisaoUm}></div>
            <div className={styles.firstBox}>
                <img src={meninaDragao} alt="" />
            </div>
            <div className={styles.secondBox}>
                <div className={styles.textBox}>
                    <div className={styles.titleFunc}>
                    TUDO É FEITO EM LOREM IPSUM SEM PROBLEMA ALGUM.
                    </div>
                    <div className={styles.textFunc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu.
                    </div>
                    <a href="https://www.noot.com.br/">
                        <button className={styles.btnFunc}>
                            CADASTRAR-SE
                        </button>
                    </a>
                    
                </div>
            </div>
            <div className={styles.iconBox}>
                <div className={styles.frame}></div>
                <img src={guerreiro} alt="" />
            </div>
            <div className={styles.divisaoDois}></div>
        </section>
    )
}

export default funcionalidades