
import styles from './Home.module.css'
import logo from '../../assets/svg1.svg'
import macaco from '../../assets/svg3-macaco.svg'
import steve from '../../assets/svg2-steve.svg'
import steveCorrendo from '../../assets/svg4-steveCorrendo.svg'

function Home(){
    return(
        <div className={styles.container} id='home'>
            {/* Primeira Grid */}
            <div className={styles.fristBox}>
                <img className={styles.boxImg} src={logo} alt="" />
                <div className={styles.boxImg3}>
                <img className={styles.monkeyImg} src={macaco} alt="" />
                    <div className={styles.frame}>
                        <div className={styles.reflex}></div>
                    </div>
                    
                </div>
            </div>

            {/*Segunda GRID*/}
            <div className={styles.secondBox}>
                <div className={styles.title}>
                LOREM IPSUM E MAIS QUE UM TEXTO SALVA VIDAS.
                </div>
                <div className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <a href='https://www.noot.com.br/'>
                    <button className={styles.btnHome}>
                        Cadastrar-se
                    </button>
                </a>
                
            </div>

            {/*Terceira GRID*/}
            <div className={styles.thirdBox}>
                <div className={styles.boxImgs}>
                    <div className={styles.frameSteve}></div>
                    <img src={steve} alt="" />
                </div>
                <img className={styles.imgSteveCorrendo} src={steveCorrendo} alt="" />
            </div>
        </div>
    )
}

export default Home