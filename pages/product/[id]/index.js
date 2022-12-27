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
                    <div className="product">
                        <h1 className="title">{lang == "uz" ? item.name_uz : lang == "ru" ? item.name_ru : item.name_en}</h1>
                        <div className="comosition">
                            <h3 className="value-title">Пищевая ценность</h3>
                            <div className="col-12 cards">
                                <div className="value">
                                    <p>Калории</p>
                                    <div>{item.uglevod}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Product;