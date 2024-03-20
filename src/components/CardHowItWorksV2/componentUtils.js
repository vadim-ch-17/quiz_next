
const scrollToActive = (scrolled) => {
    const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;
    const ranges = isLargeScreen ? [0, 50, 90, 130, 170] : [0, 30, 60, 90, 120];
    const rangeBelow = isLargeScreen ? 38 : 28;
    const rotates = isLargeScreen ? [0, 40, 80, 120, 160]
        : (window.matchMedia("(min-width: 630px) and (max-width: 767px)").matches)
            ? [0, 30, 60, 90, 120] : [0, 28, 52, 80, 108];


    for (let i = 0; i < ranges.length; i++) {
        if (scrolled >= ranges[i] && scrolled <= ranges[i] + rangeBelow) {
            return rotates[i];
        }
    }

    return 0;
}

export const scrollPosition = (speedRotate, scrollBetween, fixedSection, slideContainer, e) => {
    const scroll = fixedSection.current ? Math.round(
        (window.pageYOffset - fixedSection.current.offsetTop + 55) / 10,
    ) : 0;

    const scrolled = (scroll * 100) / speedRotate;
    if (!slideContainer.current) return;
    if (scrolled >= scrollBetween[0] && scrolled <= scrollBetween[1]) {
        slideContainer.current.style.transform = `rotate(-${scrollToActive(scrolled)}deg)`;
    }
}