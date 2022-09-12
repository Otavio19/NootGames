import styles from './Sobre.module.css'
import outplay from './../../assets/svg-outplay.svg'
import enxada from './../../assets/svg-enxada.svg'
import alta from './../../assets/svg-alta.svg'
import neepHost from './../../assets/svg-neppHost.svg'
import gamersClub from './../../assets/svg-gamersClub.svg'
import fx from './../../assets/svg-fx.svg'

import escudo from './../../assets/svg-escudo.svg'
import foguete from './../../assets/svg-foguete.svg'
import block from './../../assets/svg-block.svg'
import aplique from './../../assets/svg-aplique.svg'
import meteoro from './../../assets/svg-meteoro.svg'
import astronauta from './../../assets/svg-astronauta.svg'

function Sobre(){
    return(
        <>
        <section className={styles.aboutContent} id='sobre'>
            <div className={styles.container}>
                <div className={styles.firstBox}>
                    <div className={styles.firstTitle}>
                        Até Lorem Ipsum, Confia.
                    </div>
                    <div className={styles.subTitle}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.
                    </div>
                </div>
                <div className={styles.secondBox}>
                <div className={styles.card}>
                    <img src={outplay} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={enxada} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={alta} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={neepHost} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={gamersClub} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={fx} alt="" />
                </div>
                </div>
            </div>
            <div className={styles.secondContainer}>
                <div  className={styles.secondTitle}>
                    Proteção Para Ataques<br />
                    De Lorem Ipsum.
                </div>
                <div className={styles.secondSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className={styles.cardBox}>
                    <div className={styles.secondCard}>
                        <div className={styles.iconCard}>
                            <img src={escudo} alt="" />
                        </div>
                            <div className={styles.textCard}>
                                Controle tudo pelo nosso lorem ipsum.
                            </div>
                    </div>
                    <div className={styles.secondCard}>
                        <div className={styles.iconCard}>
                            <img src={foguete} alt="" />
                        </div>
                            <div className={styles.textCard}>
                                Configure regras lorem ipsum.
                            </div>
                    </div>
                    <div className={styles.secondCard}>
                        <div className={styles.iconCard}>
                            <img src={block} alt="" />
                        </div>
                            <div className={styles.textCard}>
                                Bloqueie portas não utilizadas em lorem ipsum.
                            </div>
                    </div>
                    <div className={styles.secondCard}>
                        <div className={styles.iconCard}>
                            <img src={aplique} alt="" />
                        </div>
                            <div className={styles.textCard}>
                                Aplique loremi psum e muito mais.
                            </div>
                    </div>
                    <div className={styles.secondCard}>
                        <div className={styles.iconCard}>
                            <img src={meteoro} alt="" />
                        </div>
                            <div className={styles.textCard}>
                                Capacidade alta em lorem ipsum.
                            </div>
                    </div>
                    <div className={styles.secondCard}>
                        <div className={styles.iconCard}>
                            <img src={astronauta} alt="" />
                        </div>
                            <div className={styles.textCard}>
                                Interconexões comlorem ipsum.
                            </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Sobre