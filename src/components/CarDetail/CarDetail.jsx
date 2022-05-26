import { React, useState } from "react"
import Modal from "react-modal"
import Slider from "react-slick";
import CloseButton from 'react-bootstrap/CloseButton';
import InforCar from './InforCar'


import styles from './CarDetail.module.css'
import './style.css'

Modal.setAppElement('#root')

const links_car = [
    'https://s3.amazonaws.com/adset.images/e84b0b57-f622-40e1-8ff7-e9cff8b4d74720220523124727.jpeg',
    'https://s3.amazonaws.com/adset.images/fc03a91a-15e5-4909-b63e-83f379bc497c20220523124727.jpeg',
    'https://s3.amazonaws.com/adset.images/1e634e5b-d95e-4764-89e8-d50709fcc66c20220523124728.jpeg',
    'https://s3.amazonaws.com/adset.images/fc98c11f-26dd-4cf6-9314-b374414155b920220523124728.jpeg',
    'https://s3.amazonaws.com/adset.images/7d00b7fb-653e-4734-92bb-f76e1f87a98e20220523124728.jpeg',
    'https://s3.amazonaws.com/adset.images/a2cad158-a8bf-46f1-afd3-a0d9be814b9920220523124728.jpeg',
    'https://s3.amazonaws.com/adset.images/24b18d10-ff44-4787-8051-76a76fbecca420220523124729.jpeg',
    'https://s3.amazonaws.com/adset.images/9d35da02-6c79-4047-b031-edea80db941620220523124729.jpeg',

]



const CarDetail = () => {
    const [ModalIsOpen, setModal] = useState(false)

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
                    <img src={links_car[i]} alt='' />
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
                    <CloseButton className={styles.CloseButton} onClick={handleSetModalClose} variant='white' />

                    <Slider className={styles.slider} {...settings}>
                        {links_car.map((link) => {
                            return (
                                <div className={styles.cardCar}>
                                    <img src={link} alt='car' />
                                </div>
                            )
                        })}

                    </Slider>
                    
                    <InforCar />

                </div>

            </Modal>
        </>
    )
}

export default CarDetail


