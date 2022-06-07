import { React, useState, useContext } from "react"
import Slider from "react-slick";
import { DadosCarros } from '../../contexts/CarContext'

import styles from './AvalibleCars.module.css'


import CarDetail from '../CarDetail/CarDetail'


const AvalibleCars = () => {
    const { carros, setCarros } = useContext(DadosCarros)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div id='carros' className={styles.divMain}>

            <div className={styles.title}>
                <h1>Carros Disponíveis</h1>
            </div>

            <Slider className={styles.slider} {...settings}>
                {carros.map((car) => {
                    return (
                        <div className={styles.cardCar}>
                            <img src={car.imagens[0].picture} alt='car' />
                            <div className={styles.infosCard}>
                                <span className={styles.nameInfo}>{car.titulo}</span>
                                <CarDetail info_car={car}/>
                            </div>
                        </div>
                    )
                })}

            </Slider>

        </div>
    )
}

export default AvalibleCars


