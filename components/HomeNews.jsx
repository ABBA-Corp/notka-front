import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import NewsImg1 from '../assets/images/news1.png';
import NewsImg2 from '../assets/images/news2.png';
import { ChevronRight } from "@mui/icons-material";
import BackImg from '../assets/images/news-back.png';

function HomeNews() {

    const dataNews = [
        { id: 1, image: NewsImg1, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
        { id: 2, image: NewsImg2, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
        { id: 3, image: NewsImg1, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
        { id: 4, image: NewsImg2, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
        { id: 5, image: NewsImg1, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
        { id: 6, image: NewsImg2, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" }
    ]

    const settings = {
        speed: 2000,
        dots: false,
        // autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        cssEase: "linear",
        autoplaySpeed: 4000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className="HomeNews parent">
            <Image src={BackImg} priority alt="image" className="back-img" width={1000} height={500} />
            <div className="wrapper">
                <Slider {...settings} className="carousel">
                    {dataNews.map((data) => (
                        <div key={data.id} className="new-card">
                            <Link href={`/news/${data.id}`} className="body">
                                <Image src={data.image} priority alt="image" className="new-img" width={1000} height={500} />
                                <div className="texts">
                                    <h3 className="name">{data.name_uz.slice(0, 17)}...</h3>
                                    <p className="desc">{data.description_uz.slice(0, 46)}...</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
                <div className="bottom-texts col-12">
                    <div className="col-7 titles">
                        <h1 className="title">Yangiliklar</h1>
                        <p className="text">Korxonamizdagi barcha yangiliklarva Korxonamizdagi barcha yangiliklarva Korxonamizdagi barcha </p>
                    </div>
                    <div className="col-5 btns">
                        Batafsil
                        <Link href="/categories" className="explore"><ChevronRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeNews;