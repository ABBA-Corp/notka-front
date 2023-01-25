import Link from "next/link";
import Image from "next/image";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { fetchCategoriesApi, fetchProductsApi } from "../../api/Api";



function Category() {

    const router = useRouter();
    const { id } = router.query;

    // api data

    const { data } = useQuery('categories', fetchCategoriesApi);
    const dataProducts = useQuery('products', fetchProductsApi);

    return (
        <div className='Category parent'>
            <div className="wrapper">
                <div className="col-3 categories">
                    {data?.data.map((item) => (
                        <Link key={item.id} legacyBehavior href={`/category/${item.id}`}>
                            <a className={`tool ${item.id == id && "active-tool"}`}>
                                {router.locale == "uz" ? item.title_uz : router.locale == "ru" ? item.title_ru : item.title_en}
                            </a>
                        </Link>
                    ))}
                </div>
                <div className="col-9">
                    <h1 className="title col-12">Bizning shirinliklar</h1>
                    <div className="products">
                        {dataProducts.data?.data.filter((c) => id != 0 ? c.category == id : c).map((item) => (
                            <div key={item.id} className="col-3 product">
                                <div className="body">
                                    <div className="imgs">
                                        <Image loader={() => `${item.photo}?w=500&q=500`} src={item.photo} priority alt="image" className="img" width={500} height={500} />
                                    </div>
                                    <p className="name">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</p>
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