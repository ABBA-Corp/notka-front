import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { dataLenta } from "./api/Api";
import Modal from "../components/Modal";
import Contacts from "../components/Contacts";
import Side1 from '../assets/images/category1.png';
import Side2 from '../assets/images/category2.png';

function About(props) {

    const settings = {
        speed: 5000,
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 7,
        autoplaySpeed: 0,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    };

    // modal

    const [showModal, setShowModal] = useState(false)

    function changeModal() {
        setShowModal(!showModal)
    }

    return (
        <div className="About parent">
            <Image src={Side1} priority alt="image" className="side-img1" width={1000} height={500} />
            <Image src={Side2} priority alt="image" className="side-img2" width={1000} height={500} />
            <div className="wrapper">
                <h1 className="title">NOTKA kompaniyasi haqida</h1>
                <p className="desc">
                    World Textile Marketing Agency основан
                    в 2019 году молодыми специалистами
                    в области маркетинга, текстильной индустрии, веб-программирования, организации мероприятий, дизайна одежды и  полиграфии.

                    Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки.World Textile Marketing Agency основан
                    в 2019 году молодыми специалистами
                    в области маркетинга, текстильной индустрии, веб-программирования, организации мероприятий, дизайна одежды и  полиграфии.

                    Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки.
                </p>
                <div className="video col-10">
                    <iframe src="https://www.youtube.com/embed/f_MJhnGuSMM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <Slider {...settings} className="lenta">
                {dataLenta.map((data) => (
                    <div key={data.id} className="partner">
                        <Image src={data.image} priority alt="image" className="lenta-img" width={1000} height={500} />
                    </div>
                ))}
            </Slider>
            <Contacts changeModal={changeModal} />
            {showModal &&
                <Modal lang={props.locale} changeModal={changeModal} />
            }
        </div>
    )
};

export default About;