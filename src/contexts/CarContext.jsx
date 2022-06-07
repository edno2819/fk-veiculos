import React, { createContext, useState, useEffect } from "react"

import api from '../api'

export const DadosCarros = createContext();


export default function CarContext({ children }) {
    const [carros, setCarros] = useState([])


    useEffect(() => {
        api.get("carros/Disponível" + "?format=json").then(({ data }) => {
            setCarros(data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <DadosCarros.Provider value={{ carros, setCarros }}>
            {children}
        </DadosCarros.Provider>
    )
}
