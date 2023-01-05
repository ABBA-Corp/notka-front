import Link from "next/link";
import Image from "next/image";
import Logo from '../assets/images/logo.png';

function Footer() {
    return (
        <div className="Footer parent">
            <div className="top-footer">
                <div className="col-5 tool res-main">
                    <Link href='/' onClick={() => window.scrollTo(0, 0)}>
                        <Image src={Logo} priority alt="logo" className="logo" width={1000} height={500} />
                    </Link>
                    <p className="text">Quo is the most easier way for transaction with your friends and family, No matter where are you. An exceptional way for make your life one step easier.</p>
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
                        <p className="text">Quo is the most easier way for transaction with your friends and family, No matter where are you. An exceptional way for make your life one step easier.</p>
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
                            <a href="#" className="link">84/E/2  West Jafrabad, Liverpool, Uk</a>
                        </li>
                        <li>
                            <a href="#" className="link">+8801757410907</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-footer">
                Copyright © PERO | Designed by <a href="https://www.instagram.com/abba.uz/" target="blank" className="brand">abba marketing</a> - Powered by <a href="https://www.instagram.com/abba.uz/" target="blank" className="brand">ABBA</a>
            </div>
        </div>
    )
};

export default Footer;