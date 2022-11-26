import Link from "next/link";

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="navbar">
                <Link href="/" className="logo">LOGO</Link>
            </nav>
        </div>
    );
};

export default Navbar;