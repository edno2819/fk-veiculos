import React, { useContext } from "react"

import { DadosContatos } from '../contexts/ContactContext'

import './Footer.css'


const Footer = () => {
    const { contact, setContact } = useContext(DadosContatos)

    return (
        <iframe src={contact.linkLocalizacao}
        class='map-location' id="localizacao" loading="lazy" title='localização da loja' referrerpolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default Footer
