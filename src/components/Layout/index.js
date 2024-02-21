import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header emptyNav={false} />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;