import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useQuery } from "react-query";
import { Skeleton } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { dataProducts, fetchProductsApi } from "../pages/api/Api";

function TopProducts({ lang }) {

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

    // data of products

    const { isLoading, data } = useQuery('products', fetchProductsApi);

    // skeleton loading

    if (isLoading) {
        return (
            <div className="TopProducts parent">
                <div className="wrapper">
                    <h1 className="title d-flex justify-content-center">
                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                    </h1>
                    <div className="carousel">
                        <div className="product col-12">
                            <div className="col-6 imgs">
                                <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} width="70%" height="20vw" />
                            </div>
                            <div className="col-6 texts">
                                <h1 className="name">
                                    <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                                    <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                                </h1>
                                <div className="top-type col-12">
                                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} width="80%" height="5vw" />
                                </div>
                                <div className="desc">
                                    <div className="keys col-12">
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="70%" />
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="70%" />
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="70%" />
                                    </div>
                                </div>
                                <div className="btns">
                                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} width="50%" height="3vw" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

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
                                <h1 className="name">{lang == "uz" ? data.name_uz : lang == "ru" ? data.name_ru : data.name_en}</h1>
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