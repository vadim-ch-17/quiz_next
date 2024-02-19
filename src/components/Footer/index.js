
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="container">
            <p>&copy; {currentYear}, All rights reserved</p>
        </footer>
    );
}

export default Footer;