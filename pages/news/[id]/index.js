import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { dataNews } from "../../api/Api";
import { ChevronRight } from "@mui/icons-material";

function News(props) {

    const lang = props.locale;
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="News parent">
            <div className="wrapper">
                {id != 0 &&
                    <h1 className="title">News and information</h1>
                }
                {id != 0 &&
                    <div className="links">
                        <Link legacyBehavior href="/">
                            <a className="link">Home</a>
                        </Link>
                        <ChevronRight className="chevron" />
                        <a href="#" className="link">News</a>
                    </div>
                }
                {dataNews.filter((c) => c.id == id).map((item) => (
                    <div key={item.id} className="body">
                        <Image src={item.image} priority alt="image" className="new-img col-12" width={1000} height={500} />
                        <h3 className="name">{lang == "uz" ? item.name_uz : lang == "ru" ? item.name_ru : item.name_en}</h3>
                        <p className="desc">{lang == "uz" ? item.description_uz : lang == "ru" ? item.description_ru : item.description_en}</p>
                    </div>
                ))}
                {id != 0 ?
                    <h3 className="other-title">Bizning boshqa yangiliklar</h3> :
                    <h3 className="other-title mt-0">Barcha yangiliklar</h3>
                }
                <div className="other-news">
                    {dataNews.filter((c) => c.id != id).map((item) => (
                        <div key={item.id} className="new col-3">
                            <Image src={item.image} priority alt="image" className="new-img" width={1000} height={500} />
                            <h3 className="name">{lang == "uz" ? item.name_uz : lang == "ru" ? item.name_ru : item.name_en}</h3>
                            <p className="desc">{lang == "uz" ? item.description_uz : lang == "ru" ? item.description_ru : item.description_en}</p>
                            <Link legacyBehavior href={`/news/${item.id}`}>
                                <a className="explore">Batafsil</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default News;