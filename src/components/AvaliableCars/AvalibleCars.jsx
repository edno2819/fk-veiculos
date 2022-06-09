import { React, useState, useContext } from "react"
import Slider from "react-slick";
import { DadosCarros } from '../../contexts/CarContext'

import styles from './AvalibleCars.module.css'


import CarDetail from '../CarDetail/CarDetail'


const AvalibleCars = () => {
    const { carros, setCarros } = useContext(DadosCarros)
    console.log(carros)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function checkImg(car) {
        try {
            return <img src={car.imagens[0].picture} alt='car' />

        } catch {
            return (
                <div style={{ background: 'white', width: '100%', height: '100%', textAlign: 'center' }}>
                    <h2 style={{paddinTop: '40%'}}>Sem Imagem</h2>
                </div>
            )
        }
    }

    return (
        <div id='carros' className={styles.divMain}>

            <div className={styles.title}>
                <h1>Carros Disponíveis</h1>
            </div>

            <Slider className={styles.slider} {...settings}>
                {carros.map((car) => {
                    return (
                        <div className={styles.cardCar}>
                            {checkImg(car)}
                            <div className={styles.infosCard}>
                                <span className={styles.nameInfo}>{car.titulo}</span>
                                <CarDetail info_car={car} />
                            </div>
                        </div>
                    )
                })}

            </Slider>

        </div>
    )
}

export default AvalibleCars


