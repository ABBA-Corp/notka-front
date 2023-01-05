import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { useQuery } from "react-query";
import { Skeleton } from "@mui/material";
import BackImg from '../assets/images/slide-back.png';
import TextBack from '../assets/images/text-back.png';
import { dataCategories, fetchCategoriesApi } from "../pages/api/Api";

function SliderCategories({ lang }) {

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        speed: 2000,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        cssEase: "linear",
        centerPadding: "22%",
        autoplaySpeed: 4000,
        className: "center",
        pauseOnHover: false,
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerPadding: "19%",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: "10%",
                }
            },
            {
                breakpoint: 400,
                settings: {
                    centerPadding: "5%",
                }
            }
        ]
    };

    // data of header-slider

    const { isLoading, data } = useQuery('header-slider', fetchCategoriesApi);

    // skeleton loading

    if (isLoading) {
        return (
            <div className="SliderCategories parent">
                <Slider {...settings} className="carousel">
                    {[1, 2, 3, 4, 5].map((data, index) => (
                        <div key={index} className="category">
                            <div className={`body bg-white`}>
                                <div className="col-8 tools">
                                    <div className="texts">
                                        <p className="slogan">
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                                        </p>
                                        <h3 className="name">
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                                        </h3>
                                    </div>
                                    <div className="links col-12">
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                                    </div>
                                </div>
                                <div className="col-5 imgs">
                                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} width="80%" height="80%" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }

    return (
        <div className="SliderCategories parent">
            <Slider {...settings} className="carousel">
                {dataCategories.map((data) => (
                    <div key={data.id} className="category">
                        <div className={`body ${dataCategories.indexOf(data) == slideIndex && "active-body"}`}>
                            <div className="col-8 tools">
                                <Image src={BackImg} priority alt="image" className="back-img" width={1000} height={500} />
                                <div className="texts">
                                    <p className="slogan">yangi konfet bizda!</p>
                                    <h3 className="name">{lang == "uz" ? data.name_uz : lang == "ru" ? data.name_ru : data.name_en}</h3>
                                    <Image src={TextBack} priority alt="image" className="back-img" width={1000} height={500} />
                                </div>
                                <div className="links col-12">
                                    <Link href={`/category/${data.id}`} className="explore">batafsil tanishish</Link>
                                </div>
                            </div>
                            <div className="col-5 imgs">
                                <Image src={data.slide_image} priority alt="image" className="img" width={1000} height={500} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
};

export default SliderCategories;