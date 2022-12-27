import Link from "next/link";
import Image from "next/image";
import { useQuery } from "react-query";
import { Skeleton } from "@mui/material";
import Hover1 from '../assets/images/hover1.png';
import Hover2 from '../assets/images/hover2.png';
import Hover3 from '../assets/images/hover3.png';
import { ChevronRight } from "@mui/icons-material";
import { dataCategories, fetchCategoriesApi } from "../pages/api/Api";

function HomeCategories({ lang }) {

    // data of categories

    const { isLoading, data } = useQuery('categories', fetchCategoriesApi);

    // skeleton loading

    if (isLoading) {
        return (
            <div className="HomeCategories parent">
                <div className="wrapper">
                    <div className="cards">
                        {[1, 2, 3, 4, 5, 6].map((data, index) => (
                            <div key={index} className="category col-4">
                                <div className="body">
                                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} width="100%" height="10vw" className="img" />
                                    <h1 className="name col-12">
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="HomeCategories parent">
            <div className="wrapper">
                <div className="cards">
                    {dataCategories.slice(0, 6).map((data) => (
                        <div key={data.id} className="category col-4">
                            <Image src={Hover1} priority alt="image" className="hover1" width={1000} height={500} />
                            <Image src={Hover2} priority alt="image" className="hover2" width={1000} height={500} />
                            <Image src={Hover3} priority alt="image" className="hover3" width={1000} height={500} />
                            <Link legacyBehavior href={`/category/${data.id}`}>
                                <a className={`body`} style={{ backgroundColor: `${data.color}` }}>
                                    <Image src={data.image} priority alt="image" className="img" width={1000} height={500} />
                                    <h3 className="name">{lang == "uz" ? data.name_uz : lang == "ru" ? data.name_ru : data.name_en}</h3>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="bottom-texts col-12">
                    <div className="col-5 btns res">
                        barcha tovarlar
                        <Link href="/categories" className="explore"><ChevronRight /></Link>
                    </div>
                    <div className="col-7 titles">
                        <h1 className="title">Bizning tovarlarimiz</h1>
                        <p className="text">Biz tovarlarimiz sonini ko`paytirishda sonini ortirishda davom etamiz</p>
                    </div>
                    <div className="col-5 btns res1">
                        barcha tovarlar
                        <Link href="/categories" className="explore"><ChevronRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeCategories