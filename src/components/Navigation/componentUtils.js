export const toAnchor = (e, setIsOpenNav, isOpenNav) => {
    e.preventDefault();
    setIsOpenNav && isOpenNav && setIsOpenNav(false);
    const href = e.target.dataset.anchor;
    const element = document.querySelector("#" + href);

    if (element) {

        const top = element.offsetTop;

        window.scrollTo({
            top: (window.matchMedia("(max-width: 768px)")).matches
                ? top - 450 : (window.matchMedia("(min-width: 769px) and (max-width: 991px)")).matches
                    ? top - 350 : (window.matchMedia("(min-width: 992px) ")).matches ? top - 50 : top,
            behavior: "smooth",
        });
    } else {
        console.error(`Element with selector "${href}" not found`);
    }
};