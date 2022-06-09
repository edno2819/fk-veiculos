import { React, useState } from "react"
import Modal from "react-modal"
import Slider from "react-slick";
import CloseButton from 'react-bootstrap/CloseButton';
import InforCar from './InforCar'
import Image from 'react-bootstrap/Image'

import styles from './CarDetail.module.css'
import './style.css'

Modal.setAppElement('#root')


const CarDetail = ({ info_car }) => {
    const [ModalIsOpen, setModal] = useState(false)


    function handleSetModalOpen() {
        setModal(true)
    }

    function handleSetModalClose() {
        setModal(false)
    }

    function checkImg(info_car) {
        console.log(info_car.imagens.length)
        if (info_car.imagens.length > 0) {
            const c = info_car.imagens.map((link) => {
                return (
                    <div className={styles.cardCar}>
                        <img src={link.picture} alt='car' />
                    </div>
                )
            })
            return c
        } else {
            const logo = require('../../static/img/error_car.png');

            return (
                <div className={styles.cardCar}>
                    <Image src={logo} thumbnail={true} fluid={true} />
                </div>
            )
        }
    }

    const settings = {
        customPaging: function (i) {
            return (
                <a className={styles.dotsImg}>
                    <img src={info_car.imagens[i].picture} alt='' />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>
            <button onClick={handleSetModalOpen} className={styles.infoButton}>Ver Detalhes</button>
            <Modal
                className={styles.Modal}
                isOpen={ModalIsOpen}
                onRequestClose={handleSetModalClose}
            >
                <div className={styles.modalDiv}>
                    <div className={styles.CloseButton}>
                        <CloseButton onClick={handleSetModalClose} variant='' />
                    </div>

                    <Slider className={styles.slider} {...settings}>
                        {checkImg(info_car)}
                    </Slider>

                    <InforCar info_car={info_car} />

                </div>

            </Modal>
        </>
    )
}

export default CarDetail


