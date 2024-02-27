
const wow = () => {
    import("wowjs").then((wowjs) => {
        new wowjs.WOW({
            boxClass: "wow",
            offset: 100,
            mobile: false,
            live: false,
            callback: function (box) { },
            scrollContainer: null,
            resetAnimation: true,
        }).init();
    });
};

export default wow;