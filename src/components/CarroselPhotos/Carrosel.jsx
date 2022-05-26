import { useState } from "react";
import Slider from "react-slick";

import styles from './Carrosel.module.css'
import './styles.css'


import astronaut from "../../static/img/img1.jpeg";
import celebrating from "../../static/img/img2.jpeg";
import education from "../../static/img/img3.jpeg";
import taken from "../../static/img/img4.jpeg";



const links_car = [
    'https://s3.amazonaws.com/adset.images/59bde6e8-e3cd-448b-9faa-71dd8a13974720220110201503.jpeg',
    'https://s3.amazonaws.com/adset.images/d55c216f-2a77-4cce-9de9-78b9a8ab85a220211217202535.jpeg',
    'https://s3.amazonaws.com/adset.images/ab8e7681-4234-4162-a49d-35811364887020220114201308.jpeg',
    'https://s3.amazonaws.com/adset.images/ae6bd363-6b8c-4c61-8e46-9312feec2ec420220104200545.jpeg'
]



const images = [astronaut, celebrating, education, taken];

function Carrosel() {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        beforeChange: (current, next) => setImageIndex(next),
    };
    console.log(styles.slide)

    return (
        <div className={styles.displayMain}>
            <div className={styles.Carrosel}>
                <Slider className="CarroselPhotos" {...settings}>
                    {images.map((img, idx) => (
                        <div className={idx === imageIndex ? styles.activeSlide : styles.slide}>
                            <img src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}


export default Carrosel
