import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, font }) => {
    return (
        <div className="pt-[84px] lg:pt-0">
            <Header emptyNav={false} font={font} />
            <main className={font.mulish.className}>{children}</main>
            <Footer font={font} />
        </div>
    );
}

export default Layout;