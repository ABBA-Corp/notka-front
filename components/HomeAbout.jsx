import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { useState } from 'react';
import { dataLenta } from '../pages/api/Api';
import BackImg from '../assets/images/about.png';
import { East, PlayArrowRounded } from '@mui/icons-material';

function HomeAbout() {

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

    // video

    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <div className="HomeAbout parent" id='about'>
                <div className="wrapper">
                    <Image src={BackImg} priority alt="image" className="back-img" width={1000} height={500} />
                    <div className="col-6 texts">
                        <h1 className="about-title">O наши компани</h1>
                        <p className="desc">
                            World Textile Marketing Agency основан
                            в 2019 году молодыми специалистами
                            в области маркетинга, текстильной индустрии, веб-программирования, организации мероприятий, дизайна одежды и  полиграфии.

                            Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки.World Textile Marketing Agency основан
                            в 2019 году молодыми специалистами
                            в области маркетинга, текстильной индустрии, веб-программирования, организации мероприятий, дизайна одежды и  полиграфии.

                            Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки.
                        </p>
                        <div className="btns">
                            <Link href='/about' className="explore"><East className='icon' />Подробнее</Link>
                            <div className="explore" onClick={() => setShowVideo(true)}><PlayArrowRounded className='icon' /> Видео ролик</div>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className="lenta">
                    {dataLenta.map((data) => (
                        <div key={data.id} className="partner">
                            <Image src={data.image} priority alt="image" className="lenta-img" width={1000} height={500} />
                        </div>
                    ))}
                </Slider>
            </div>
            {showVideo &&
                <div className="media">
                    <div className="contrast" onClick={() => setShowVideo(false)}></div>
                    <div className="video col-6">
                        <iframe src="https://www.youtube.com/embed/f_MJhnGuSMM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </>
    )
};

export default HomeAbout;