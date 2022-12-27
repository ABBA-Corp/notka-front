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
                        <Image src={Logo} priority alt="logo" className="logo" width={1000} height={500} />
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
                            <a href="#" className="link">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="link">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className="link">Support</a>
                        </li>
                        <li>
                            <a href="#" className="link">News/Blog</a>
                        </li>
                    </ul>
                    <ul className="col-4">
                        <li className="title-li">Terms</li>
                        <li>
                            <a href="#" className="link">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="link">Terms of Usage</a>
                        </li>
                        <li>
                            <a href="#" className="link">Areas of coverage</a>
                        </li>
                        <li>
                            <a href="#" className="link">News/Blog</a>
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
                Copyright © PERO | Designed by <div className="brand">abba marketing</div> - Powered by <div className="brand">ABBA</div>
            </div>
        </div>
    )
};

export default Footer;