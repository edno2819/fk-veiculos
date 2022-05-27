import { React, useState } from "react"
import Slider from "react-slick";

import styles from './AvalibleCars.module.css'

import CarDetail from '../CarDetail/CarDetail'



const links_car = [
    'https://s3.amazonaws.com/adset.images/59bde6e8-e3cd-448b-9faa-71dd8a13974720220110201503.jpeg',
    'https://s3.amazonaws.com/adset.images/d55c216f-2a77-4cce-9de9-78b9a8ab85a220211217202535.jpeg',
    'https://s3.amazonaws.com/adset.images/ab8e7681-4234-4162-a49d-35811364887020220114201308.jpeg',
    'https://s3.amazonaws.com/adset.images/ae6bd363-6b8c-4c61-8e46-9312feec2ec420220104200545.jpeg'
]



const AvalibleCars = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.divMain}>

            <div className={styles.title}>
                <h1>Carros Disponíveis</h1>
            </div>

            <Slider className={styles.slider} {...settings}>
                {links_car.map((link) => {
                    return (
                        <div className={styles.cardCar}>
                            <img src={link} alt='car' />
                            <div className={styles.infosCard}>
                                <span className={styles.nameInfo}>Civic honda 3.2 2016</span>
                                <CarDetail />
                            </div>
                        </div>
                    )
                })}

            </Slider>

        </div>
    )
}

export default AvalibleCars


