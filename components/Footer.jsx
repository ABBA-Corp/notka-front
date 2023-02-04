import Link from "next/link";
import Image from "next/image";
import Logo from '../assets/images/logo.png';
import { useTranslation } from "next-i18next";

function Footer() {

    // i18next

    const { t } = useTranslation();

    return (
        <div className="Footer parent">
            <div className="top-footer">
                <div className="col-5 tool res-main">
                    <Link href='/' onClick={() => window.scrollTo(0, 0)}>
                        <Image src={Logo} priority alt="logo" className="logo" width={1000} height={500} />
                    </Link>
                    <p className="text">{t("footerdesc")}</p>
                    <div className="icons">
                        <a href="#" className="icon">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="col-7 tool links">
                    <div className="col-4 res-logo">
                        <Link href='/' onClick={() => window.scrollTo(0, 0)}>
                            <Image src={Logo} priority alt="logo" className="logo" width={1000} height={500} />
                        </Link>
                        <p className="text">{t("footerdesc")}</p>
                        <div className="icons">
                            <a href="#" target="blank" className="icon">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" target="blank" className="icon">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                            <a href="#" target="blank" className="icon">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <ul className="col-4">
                        <li className="title-li">Company</li>
                        <li>
                            <Link href="/#about" className="link" scroll={false}>About Us</Link>
                        </li>
                        <li>
                            <Link href="/#tour" className="link" scroll={false}>Show Room</Link>
                        </li>
                        <li>
                            <Link href="/#infografics" className="link" scroll={false}>Infografics</Link>
                        </li>
                        <li>
                            <Link href="/#news" className="link" scroll={false}>News/Blog</Link>
                        </li>
                    </ul>
                    <ul className="col-4">
                        <li className="title-li">Necessary</li>
                        <li>
                            <Link href="/#categories" className="link" scroll={false}>Categories</Link>
                        </li>
                        <li>
                            <Link href="/#topproduct" className="link" scroll={false}>Top Products</Link>
                        </li>
                        <li>
                            <Link href="/#adv" className="link" scroll={false}>Advantages</Link>
                        </li>
                        <li>
                            <Link href="/#gallery" className="link" scroll={false}>Galleries</Link>
                        </li>
                    </ul>
                    <ul className="col-4">
                        <li className="title-li">Contact</li>
                        <li>
                            <a href="#" className="link">Toshkent shahar, Uchtepa tumani, Foziltepa 82b uy</a>
                        </li>
                        <li>
                            <a href="tel:+99871-217-40-00" className="link">+998 71 217 40 00</a>
                        </li>
                        <li>
                            <a href="tel:+99890-943-38-38" className="link">+998 90 943-38-38</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-footer">
                Copyright © NOTKA | Designed by <a href="https://www.instagram.com/abba.uz/" target="blank" className="brand">abba marketing</a> - Powered by <a href="https://www.instagram.com/abba.uz/" target="blank" className="brand">ABBA</a>
            </div>
        </div>
    )
};

export default Footer;