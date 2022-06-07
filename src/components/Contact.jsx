import React, { useState, useContext } from "react"
import { DadosContatos } from '../contexts/ContactContext'
import api from '../api'

import './Contact.css'


const Contact = () => {
    const { contact, setContact } = useContext(DadosContatos)
    const [valueForm, setvalueForm] = useState({})


    function handleChange(e) {
        const { name, value } = e.target
        setvalueForm({ ...valueForm, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        api.post('mensagens', data)
            .catch(response => { console.log(response) })
        setvalueForm({})
    }

    return (
        <section id="contact">

            <h1 className="section-header">Contato</h1>

            <div className="contact-wrapper">

                <form id="contact-form" onSubmit={handleSubmit} className="form-horizontal">

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" onChange={handleChange} className="form-control" id="name" placeholder="NOME" name="nome" value={valueForm['nome'] || ''} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="tel" onChange={handleChange} className="form-control" placeholder="WHATSAPP" name="whats" value={valueForm['whats'] || ''} />
                        </div>
                    </div>

                    <textarea onChange={handleChange} className="form-control" rows="10" placeholder="MENSAGEM" name="mensagem" value={valueForm['mensagem'] || ''} />

                    <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                        <div className="alt-send-button">
                            <i className="fa fa-paper-plane"></i><span className="send-text">ENVIAR</span>
                        </div>

                    </button>

                </form>

                <div className="direct-contact-container">
                    <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">São Luis,
                            Ma</span></i></li>

                        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a
                            href="tel:1-212-555-5555" title="Give me a call">(98) {contact.telefone}</a></span></i></li>

                        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a
                            href="mailto:#" title="Send me an email">{contact.email}</a></span></i></li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default Contact


