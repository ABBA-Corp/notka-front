import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useQuery } from "react-query";
import { Skeleton } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import BackImg from '../assets/images/news-back.png';
import { dataNews, fetchNewsApi } from "../pages/api/Api";

function HomeNews({ lang }) {

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

    // data of news

    const { isLoading, data } = useQuery('news', fetchNewsApi);

    // skeleton loading

    if (isLoading) {
        return (
            <div className="HomeNews parent">
                <div className="wrapper">
                    <Slider {...settings} className="carousel">
                        {[1, 2, 3, 4, 5, 6].map((data, index) => (
                            <div key={index} className="new-card">
                                <div className="body">
                                    <Skeleton variant='rectangle' sx={{ bgcolor: 'grey.600' }} width="100%" height="10vw" />
                                    <div className="texts">
                                        <h1 className="name">
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.600' }} width="100%" />
                                        </h1>
                                        <p className="desc">
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.600' }} width="100%" />
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.600' }} width="80%" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    }

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
                                    <h3 className="name">{lang == "uz" ? data.name_uz.slice(0, 17) : lang == "ru" ? data.name_ru.slice(0, 17) : data.name_en.slice(0, 17)}...</h3>
                                    <p className="desc">{lang == "uz" ? data.description_uz.slice(0, 46) : lang == "ru" ? data.description_ru.slice(0, 46) : data.description_en.slice(0, 46)}...</p>
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