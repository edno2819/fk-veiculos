import React from "react"
import styles from './InforCar.module.css'

import date from '../../static/icons/date.svg';
import fuel from '../../static/icons/fuel.svg';
import km from '../../static/icons/km.svg';
import transmission from '../../static/icons/transmission.svg';

import financiamento from '../../static/icons/financiamento.png';
import parcelas from '../../static/icons/parcelas.png';






const InforCar = () => {
    return (
        <div className={styles.infosDetail}>
            <h3 className={styles.Title}>HILUX 2.7 SRV 4X2 CD 16V FLEX 4P AUTOMÁTICO</h3>
            <p className={styles.Prices}>De: <b className={styles.PriceOld}>R$ 200.900,00</b></p>
            <p className={styles.Prices}>Por: <a className={styles.Price}>R$ 175.900,00</a></p>

            <h2 className={styles.Subtitle}><span>Detalhes do Veículo</span></h2>

            <div className={styles.InfoIcons}>
                <div>
                    <img src={date} alt='icone' />
                    2019/2019
                </div>
                <div>
                    <img src={km} alt='icone' />
                    53085 km
                </div>
                <div>
                    <img src={fuel} alt='icone' />
                    Flex
                </div>
                <div>
                    <img src={transmission} alt='icone' />
                    Automático
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
                        Até 15 Parcelas
                    </li>
                </ul>

            </div>


        </div>
    )
}

export default InforCar


