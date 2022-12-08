import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronRight } from "@mui/icons-material";
import CategImg1 from '../assets/images/category1.png';
import CategImg2 from '../assets/images/category2.png';

function TopProducts() {

    const dataProducts = [
        { id: 1, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
        { id: 2, image: CategImg2, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
        { id: 3, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
        { id: 4, image: CategImg2, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
        { id: 5, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
        { id: 6, image: CategImg2, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
        { id: 7, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
        { id: 8, image: CategImg2, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
        { id: 9, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" }
    ];

    const settings = {
        speed: 2000,
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        cssEase: "linear",
        autoplaySpeed: 4000,
        pauseOnHover: false,
    };

    return (
        <div className="TopProducts parent">
            <div className="wrapper">
                <div className="title">Top mahsulotlarimiz</div>
                <Slider {...settings} className="carousel">
                    {dataProducts.filter((c) => c.top === true).map((data) => (
                        <div key={data.id} className="product col-12">
                            <div className="col-6 imgs">
                                <Image src={data.image} priority alt="image" className="img" width={1000} height={500} />
                            </div>
                            <div className="col-6 texts">
                                <h1 className="name">{data.name_uz}</h1>
                                <div className="top-type col-12">
                                    <div className="body">
                                        <div className="circle">TOP 1</div>
                                        <p>10 t+ sotilgan</p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <div className="keys">
                                        <div className="key">oG'IRLIGI:</div>
                                        <div className="key">aRTIKUL:</div>
                                        <div className="key">Углеводы:</div>
                                    </div>
                                    <div className="values">
                                        <div className="value">{data.weight} kg</div>
                                        <div className="value">{data.artikul}</div>
                                        <div className="value">{data.uglevod} g</div>
                                    </div>
                                </div>
                                <div className="btns">
                                    Batafsil
                                    <Link href={`/products/${data.id}`} className="explore"><ChevronRight /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div >
        </div >
    )
};

export default TopProducts;