import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Layout({ children }) {

    // loader

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 2000);
    }, [])

    return (
        <>
            {showLoader &&
                <Loader />
            }
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;