import { East, PlayArrowRounded } from '@mui/icons-material';
import Image from 'next/image';
import Slider from 'react-slick';
import BackImg from '../assets/images/about.png';
import Lenta1 from '../assets/images/lenta1.png';
import Lenta2 from '../assets/images/lenta2.png';

function HomeAbout() {

    const dataLenta = [
        { id: 1, image: Lenta1 },
        { id: 2, image: Lenta2 },
        { id: 3, image: Lenta1 },
        { id: 4, image: Lenta2 },
        { id: 5, image: Lenta1 },
        { id: 6, image: Lenta2 },
        { id: 7, image: Lenta1 },
        { id: 8, image: Lenta2 }
    ]

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
    };

    return (
        <div className="HomeAbout parent">
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
                        <div className="explore"><East className='icon' /> Подробнее</div>
                        <div className="explore"><PlayArrowRounded className='icon' /> Видео ролик</div>
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
    )
};

export default HomeAbout;