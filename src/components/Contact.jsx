import React from "react"

import './Contact.css'


const Contact = () => {

    return (
        <section id="contact">

            <h1 className="section-header">Contato</h1>

            <div className="contact-wrapper">

                <form id="contact-form" className="form-horizontal">

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" id="name" placeholder="NOME" name="name" value=""
                                required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value=""
                                required />
                        </div>
                    </div>

                    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="Mensagem" required></textarea>

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
                            href="tel:1-212-555-5555" title="Give me a call">(98) 99054639</a></span></i></li>

                        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a
                            href="mailto:#" title="Send me an email">fk_veiculos@hotmail.com</a></span></i></li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default Contact


