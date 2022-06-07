import React from "react"
import styles from './InforCar.module.css'

import date from '../../static/icons/date.svg';
import fuel from '../../static/icons/fuel.svg';
import km from '../../static/icons/km.svg';
import transmission from '../../static/icons/transmission.svg';

import financiamento from '../../static/icons/financiamento.png';
import parcelas from '../../static/icons/parcelas.png';






const InforCar = ( {info_car} ) => {
    return (
        <div className={styles.infosDetail}>
            <h3 className={styles.Title}>{info_car.titulo}</h3>
            <p className={styles.Prices}>De: <b className={styles.PriceOld}>R$ {Math.round(info_car.preco*1.15)}</b></p>
            <p className={styles.Prices}>Por: <a className={styles.Price}>R$ {info_car.preco}</a></p>

            <h2 className={styles.Subtitle}><span>Detalhes do Veículo</span></h2>

            <div className={styles.InfoIcons}>
                <div>
                    <img src={date} alt='icone' />
                    {info_car.ano}
                </div>
                <div>
                    <img src={km} alt='icone' />
                    {info_car.km} km
                </div>
                <div>
                    <img src={fuel} alt='icone' />
                    {info_car.combustivel}
                </div>
                <div>
                    <img src={transmission} alt='icone' />
                    {info_car.direção}
                </div>

            </div>

            <br />

            <div className={styles.Payments}>
                <h2 className={styles.Subtitle}><span>Pagamentos</span></h2>

                <ul>
                    <li>
                        <img src={financiamento} alt='icone' />
                        Financiamento
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={parcelas} alt='icone' />
                        Até {info_car.parcelas} Parcelas
                    </li>
                </ul>

            </div>


        </div>
    )
}

export default InforCar


