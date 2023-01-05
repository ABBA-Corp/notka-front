import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { dataCategories, dataProducts } from "../../api/Api";

function Category(props) {

    const lang = props.locale;
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className='Category parent'>
            <div className="wrapper">
                <div className="col-3 categories">
                    {dataCategories.map((item) => (
                        <Link key={item.id} legacyBehavior href={`/category/${item.id}`}>
                            <a className={`tool ${item.id == id && "active-tool"}`}>
                                {lang == "uz" ? item.name_uz : lang == "ru" ? item.name_ru : item.name_en}
                            </a>
                        </Link>
                    ))}
                </div>
                <div className="col-9">
                    <h1 className="title col-12">Bizning shirinliklar</h1>
                    <div className="products">
                        {dataProducts.filter((c) => id != 0 ? c.category_id == id : c).map((item) => (
                            <div key={item.id} className="col-3 product">
                                <div className="body">
                                    <div className="imgs">
                                        <Image src={item.image2} priority alt="image" className="img" width={1000} height={500} />
                                    </div>
                                    <p className="name">{lang == "uz" ? item.name_uz : lang == "ru" ? item.name_ru : item.name_en}</p>
                                    <Link legacyBehavior href={`/product/${item.id}`}>
                                        <a className="explore">Batafsil</a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;