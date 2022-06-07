import { React, useState, useContext } from "react"
import Modal from "react-modal"
import Slider from "react-slick";
import CloseButton from 'react-bootstrap/CloseButton';
import InforCar from './InforCar'

import { DadosCarros } from '../../contexts/CarContext'

import styles from './CarDetail.module.css'
import './style.css'

Modal.setAppElement('#root')


const CarDetail = ({ info_car }) => {
    const [ModalIsOpen, setModal] = useState(false)
    const { carros, setCarros } = useContext(DadosCarros)
    console.log(info_car)


    function handleSetModalOpen() {
        setModal(true)
    }

    function handleSetModalClose() {
        setModal(false)
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
                        {info_car.imagens.map((link) => {
                            return (
                                <div className={styles.cardCar}>
                                    <img src={link.picture} alt='car' />
                                </div>
                            )
                        })}

                    </Slider>

                    <InforCar info_car={info_car} />

                </div>

            </Modal>
        </>
    )
}

export default CarDetail


