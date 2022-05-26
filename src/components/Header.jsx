import React from "react"

import styles from './Header.module.css'
import whats from '../static/icons/whatsapp.png'; 


const Header = () => {

    return (
        <div className={styles.Navbar}>
            <nav>
                <img className={styles.logo} src={process.env.PUBLIC_URL + '/static/icons/logo.png'} alt="icone"/>
                {console.log(process.env.PUBLIC_URL)}


                    <div className={styles.menu}>
                        <a href="#contact">Home</a>
                        <a href="#contact">Sobre</a>
                        <a href="#contact">Contato</a>
                        <a href="#localizacao">Localização</a>
                    </div>

                    <div className={styles.contato}>
                        <a href='https://wa.me/5598999054639' target="_blank" rel="noreferrer">
                            {/* <img src={whats} alt=""/> */}
                            <i target="_blank" className='fab fa-whatsapp fa-2x '></i>
                            <div className={styles.mensagem}>
                                <span>Converse por</span>
                                <p>WHATSAPP</p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.contato}>
                        <a href='https://wa.me/5598999054639' target="_blank" rel="noreferrer">
                            <i target="_blank" className='fab fa-instagram fa-2x '></i>
                            <div className={styles.mensagem}>
                                <span>Nós siga no</span>
                                <p>instagram</p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.contato}>
                        <a href='https://wa.me/5598999054639' target="_blank" rel="noreferrer">
                            <i className="fas fa-phone-volume fa-2x "></i>
                            <div className={styles.mensagem}>
                                <span>Lige para nós</span>
                                <p>999054639</p>
                            </div>
                        </a>
                    </div>

            </nav>
        </div>
    )
}

export default Header


