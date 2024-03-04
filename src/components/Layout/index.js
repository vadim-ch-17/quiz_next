import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, font }) => {
    return (
        <>
            <Header emptyNav={false} font={font} />
            <main className={font.mulish.className}>{children}</main>
            <Footer font={font} />
        </>
    );
}

export default Layout;