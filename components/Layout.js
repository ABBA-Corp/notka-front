import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <>
            {/* <Loader /> */}
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;