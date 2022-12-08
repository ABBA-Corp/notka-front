import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import BackImg from '../assets/images/slide-back.png';
import TextBack from '../assets/images/text-back.png';
import CategImg1 from '../assets/images/category1.png';
import CategImg2 from '../assets/images/category2.png';
import CategImg3 from '../assets/images/category3.png';

function SliderCategories() {

    const dataCategories = [
        { id: 1, color: "#FFEDC3", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
        { id: 2, color: "#9FF8FF", image: CategImg2, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
        { id: 3, color: "#B5FF93", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
        { id: 4, color: "#FFEDC3", image: CategImg2, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
        { id: 5, color: "#9FF8FF", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
        { id: 6, color: "#B5FF93", image: CategImg2, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
        { id: 7, color: "#FFEDC3", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
        { id: 8, color: "#9FF8FF", image: CategImg2, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
        { id: 9, color: "#B5FF93", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" }
    ];

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
                                    <h3 className="name">{data.name_uz}</h3>
                                    <Image src={TextBack} priority alt="image" className="back-img" width={1000} height={500} />
                                </div>
                                <div className="links col-12">
                                    <Link href={`/categories/${data.id}`} className="explore">batafsil tanishish</Link>
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