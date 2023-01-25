import Link from "next/link";
import Image from "next/image";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { fetchNewsApi } from "../../api/Api";
import { ChevronRight } from "@mui/icons-material";

function News() {

    const router = useRouter();
    const { id } = router.query;

    // api data

    const { data } = useQuery('news', fetchNewsApi);

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
                {data?.data.filter((c) => c.id == id).map((item) => (
                    <div key={item.id} className="body">
                        <Image loader={() => `${item.photo ? item.photo : ""}?w=500&q=500`} src={item.photo ? item.photo : ""} priority alt="image" className="new-img col-12" width={1000} height={500} />
                        <h3 className="name">{router.locale == "uz" ? item.title_uz : router.locale == "ru" ? item.title_ru : item.title_en}</h3>
                        <p className="desc">{router.locale == "uz" ? item.description_uz : router.locale == "ru" ? item.description_ru : item.description_en}</p>
                    </div>
                ))}
                {id != 0 ?
                    <h3 className="other-title">Bizning boshqa yangiliklar</h3> :
                    <h3 className="other-title mt-0">Barcha yangiliklar</h3>
                }
                <div className="other-news">
                    {data?.data.filter((c) => c.id != id).map((item) => (
                        <div key={item.id} className="new col-3">
                            <Image loader={() => `${item.photo ? item.photo : ""}?w=500&q=500`} src={item.photo ? item.photo : ""} priority alt="image" className="new-img" width={1000} height={500} />
                            <h3 className="name">{router.locale == "uz" ? item.title_uz : router.locale == "ru" ? item.title_ru : item.title_en}</h3>
                            <p className="desc">{router.locale == "uz" ? item.description_uz : router.locale == "ru" ? item.description_ru : item.description_en}</p>
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