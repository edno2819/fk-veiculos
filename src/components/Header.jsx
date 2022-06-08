import React, { useContext } from "react"

import styles from './Header.module.css'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import { DadosContatos } from '../contexts/ContactContext'


const Header = () => {
    const { contact, setContact } = useContext(DadosContatos)

    const moveToContact = () => {
        document.getElementById("contact").scrollIntoView();
        window.scrollBy(0, -100);
    }

    return (
        <div className={styles.Navbar}>
            <nav>
                <a>

                </a>
                <img className={styles.logo} src={process.env.PUBLIC_URL + '/static/icons/logo.png'} alt="icone" />

                <div className={styles.menu}>
                    <a href="#home">Home</a>
                    <a href="#carros">Carros</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#localizacao">Localização</a>
                    <DropdownButton className={styles.dropdowm} id="dropdown-variants-Danger" variant='danger' title="MAIS">
                        <Dropdown.Item href="#contact">contato</Dropdown.Item>
                        <Dropdown.Item href="https://fkaveiculos-backend.herokuapp.com/admin">Admin</Dropdown.Item>
                    </DropdownButton>
                </div>

                <DropdownButton className={styles.dropdowmAll} id="dropdown-variants-Danger" variant='danger' title="all">
                    <Dropdown.Item href="#home">Home</Dropdown.Item>
                    <Dropdown.Item href="#carros">Carros</Dropdown.Item>
                    <Dropdown.Item href="#sobre">Sobre</Dropdown.Item>
                    <Dropdown.Item href="#contact">contato</Dropdown.Item>
                    <Dropdown.Item href="#localizacao">Localização</Dropdown.Item>
                    <Dropdown.Item href="https://fkaveiculos-backend.herokuapp.com/admin">Admin</Dropdown.Item>
                </DropdownButton>


                <div className={styles.contato}>
                    <a href={`https://wa.me/55${contact.whats}`} target="_blank" rel="noreferrer">
                        <i target="_blank" className='fab fa-whatsapp fa-2x '></i>
                        <div className={styles.mensagem}>
                            <span>Converse por</span>
                            <p>WHATSAPP</p>
                        </div>
                    </a>
                </div>

                <div className={styles.contato}>
                    <a href={`https://www.instagram.com/${contact.insta}`} target="_blank" rel="noreferrer">
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
                            <p>{contact.telefone}</p>
                        </div>
                    </a>
                </div>

            </nav>
        </div>
    )
}

export default Header


