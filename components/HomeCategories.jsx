import Link from "next/link";
import Image from "next/image";
import Hover1 from '../assets/images/hover1.png';
import Hover2 from '../assets/images/hover2.png';
import Hover3 from '../assets/images/hover3.png';
import { ChevronRight } from "@mui/icons-material";
import CategImg1 from '../assets/images/category1.png';
import CategImg2 from '../assets/images/category2.png';
import CategImg3 from '../assets/images/category3.png';

function HomeCategories() {

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

    return (
        <div className="HomeCategories parent">
            <div className="wrapper">
                <div className="cards">
                    {dataCategories.slice(0, 6).map((data) => (
                        <div key={data.id} className="category col-4">
                            <Image src={Hover1} priority alt="image" className="hover1" width={1000} height={500} />
                            <Image src={Hover2} priority alt="image" className="hover2" width={1000} height={500} />
                            <Image src={Hover3} priority alt="image" className="hover3" width={1000} height={500} />
                            <Link legacyBehavior href={`/categories/${data.id}`}>
                                <a className={`body`} style={{ backgroundColor: `${data.color}` }}>
                                    <Image src={data.image} priority alt="image" className="img" width={1000} height={500} />
                                    <h3 className="name">{data.name_uz}</h3>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="bottom-texts col-12">
                    <div className="col-7 titles">
                        <h1 className="title">Bizning tovarlarimiz</h1>
                        <p className="text">Biz tovarlarimiz sonini ko`paytirishda sonini ortirishda davom etamiz</p>
                    </div>
                    <div className="col-5 btns">
                        barcha tovarlar
                        <Link href="/categories" className="explore"><ChevronRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeCategories