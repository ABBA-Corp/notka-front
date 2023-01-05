import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { dataProducts } from "../../api/Api";

function Product(props) {

    const lang = props.locale;
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="Product parent">
            <div className="wrapper">
                {dataProducts.filter((c) => c.id == id).map((item) => (
                    <div key={item.id} className="col-12">
                        <div className="product col-5">
                            <h1 className="title">{lang == "uz" ? item.name_uz : lang == "ru" ? item.name_ru : item.name_en}</h1>
                            <Image src={item.image2} priority alt="image" className="res-img" width={1000} height={500} />
                            <div className="composition col-12">
                                <h3 className="value-title">Пищевая ценность</h3>
                                <div className="col-12 cards">
                                    <div className="value col-4">
                                        <p>Калории</p>
                                        <div>{item.calory} kkal</div>
                                    </div>
                                    <div className="value col-4">
                                        <p>Углеводы</p>
                                        <div>{item.uglevod} gr</div>
                                    </div>
                                    <div className="value col-4">
                                        <p>Жиры</p>
                                        <div>{item.fat} gr</div>
                                    </div>
                                </div>
                            </div>
                            <div className="desc1 col-12">
                                <h3 className="value-title">Описание товара</h3>
                                <div className="col-12 cards">
                                    <div className="keys">
                                        <div className="key">Страна:</div>
                                        <div className="key">Тип упаковки:</div>
                                        <div className="key">Вес:</div>
                                        <div className="key">Масса нетто:</div>
                                    </div>
                                    <div className="values">
                                        <div className="value">
                                            Россия
                                        </div>
                                        <div className="value">
                                            флоу-пак
                                        </div>
                                        <div className="value">
                                            0.16 кг
                                        </div>
                                        <div className="value">
                                            5 кг в пачке
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 imgs">
                            <div className="col-5">
                                <Image src={item.image3} priority alt="image" className="img" width={1000} height={500} />
                                <div className="gradient"></div>
                            </div>
                        </div>
                        <div className="col-12 desc2">
                            <h3 className="value-title">Описание товара</h3>
                            <div className="cards">
                                {lang == "uz" ? item.description_uz : lang == "ru" ? item.description_ru : item.description_en}
                            </div>
                        </div>
                        <div className="other-products col-12">
                            <h3 className="value-title">Oxshash tovarlar</h3>
                            <div className="cards">
                                {dataProducts.filter((k) => k.category_id == item.category_id && k.id != id).map((post) => (
                                    <div key={post.id} className="product1">
                                        <div className="body">
                                            <div className="imgs1">
                                                <Image src={post.image2} priority alt="image" className="img" width={1000} height={500} />
                                            </div>
                                            <p className="name">{lang == "uz" ? post.name_uz : lang == "ru" ? post.name_ru : post.name_en}</p>
                                            <Link legacyBehavior href={`/product/${post.id}`}>
                                                <a className="explore">Batafsil</a>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Product;