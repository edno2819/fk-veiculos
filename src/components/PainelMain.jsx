import React from "react"

import styles from './PainelMain.module.css'


const PainelMain = () => {

    return (
        <div id='home' className={styles.divMain}>
            <div className={styles.bannerImg}>
                <img src={process.env.PUBLIC_URL + 'static/img/back-car.png'} alt=''/>
            </div>

            <div className={styles.bannerText}>
                <h2>Os melhores na revenda de carros em São luis</h2>
            </div>
        </div>
    )
}

export default PainelMain


