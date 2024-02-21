export const toAnchor = (e) => {
    e.preventDefault();
    const href = e.target.dataset.anchor;
    const element = document.querySelector("#" + href);

    if (element) {
        const top = element.offsetTop;

        window.scrollTo({
            top: top - 150,
            behavior: "smooth",
        });
    } else {
        console.error(`Element with selector "${href}" not found`);
    }
};