import Link from "next/link";
import Image from "next/image";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { fetchProductsApi } from "../../api/Api";

function Product() {

    const router = useRouter();
    const { id } = router.query;

    // api data

    const { data } = useQuery('products', fetchProductsApi);

    return (
        <div className="Product parent">
            <div className="wrapper">
                {data?.data.filter((c) => c.id == id).map((item) => (
                    <div key={item.id} className="col-12">
                        <div className="product col-5">
                            <h1 className="title">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h1>
                            <Image loader={() => `${item.photo ? item.photo : ""}?w=500&q=500`} src={item.photo ? item.photo : ""} priority alt="image" className="res-img" width={1000} height={500} />
                            <div className="composition col-12">
                                <h3 className="value-title">Пищевая ценность</h3>
                                <div className="col-12 cards">
                                    <div className="value col-4">
                                        <p>Калории</p>
                                        <div>{item.calories} kkal</div>
                                    </div>
                                    <div className="value col-4">
                                        <p>Углеводы</p>
                                        <div>{item.carbohydrates} gr</div>
                                    </div>
                                    <div className="value col-4">
                                        <p>Жиры</p>
                                        <div>{item.fats} gr</div>
                                    </div>
                                </div>
                            </div>
                            <div className="desc1 col-12">
                                <h3 className="value-title">Описание товара</h3>
                                <div className="col-12 cards">
                                    <div className="keys">
                                        <div className="key">Страна:</div>
                                        <div className="key">Artikul:</div>
                                        <div className="key">Вес:</div>
                                        <div className="key">Масса нетто:</div>
                                    </div>
                                    <div className="values">
                                        <div className="value">
                                            Uzbekistan
                                        </div>
                                        <div className="value">
                                            {item.artikul}
                                        </div>
                                        <div className="value">
                                            {item.weight} gr
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
                                <Image loader={() => `${item.photo ? item.photo : ""}?w=500&q=500`} src={item.photo ? item.photo : ""} priority alt="image" className="img" width={1000} height={500} />
                                <div className="gradient"></div>
                            </div>
                        </div>
                        <div className="col-12 desc2">
                            <h3 className="value-title">Описание товара</h3>
                            <div className="cards">
                                {router.locale == "uz" ? item.description_uz : router.locale == "ru" ? item.description_ru : item.description_en}
                            </div>
                        </div>
                        <div className="other-products col-12">
                            <h3 className="value-title">Oxshash tovarlar</h3>
                            <div className="cards">
                                {data?.data.filter((k) => k.category == item.category && k.id != id).map((post) => (
                                    <div key={post.id} className="product1">
                                        <div className="body">
                                            <div className="imgs1">
                                                <Image loader={() => `${post.photo}?w=500&q=500`} src={post.photo} priority alt="image" className="img" width={500} height={500} />
                                            </div>
                                            <p className="name">{router.locale == "uz" ? post.name_uz : router.locale == "ru" ? post.name_ru : post.name_en}</p>
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