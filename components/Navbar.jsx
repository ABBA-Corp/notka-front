import Link from "next/link";
import Image from "next/image";
import Bar from '../assets/images/bar.png';
import Logo from '../assets/images/logo.png';
import { useEffect, useState } from "react";

const Navbar = () => {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10 ? true : false)
        })
    }, [])

    return (
        <div className={`Navbar ${scroll && "scroll-navbar"}`}>
            <nav className="navbar">
                <Link href="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
                    <Image src={Logo} priority={true} alt="logo" className="img" />
                </Link>
                <div className="stick">|</div>
                <div className="menu">
                    <Image src={Bar} priority={true} alt="bar" className="menu-bar" /> MENU
                </div>
            </nav>
        </div>
    );
};

export default Navbar;