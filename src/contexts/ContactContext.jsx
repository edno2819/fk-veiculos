import React, { createContext, useState, useEffect } from "react"

import api from '../api'

export const DadosContatos = createContext();


export default function ContactContext({ children }) {
    const [contact, setContact] = useState({})
    const [carros, setCarros] = useState([])


    useEffect(() => {
        api.get("contatos" + "/?format=json").then(({ data }) => {
            setContact(data[0])
        }).catch((error) => {
            console.log(error)
        })

        api.get("carros/Indisponível" + "?format=json").then(({ data }) => {
            setCarros(data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <DadosContatos.Provider value={{ contact, setContact, carros, setCarros }}>
            {children}
        </DadosContatos.Provider>
    )
}
