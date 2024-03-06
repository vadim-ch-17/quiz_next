export const setTrimWords = (readMore, setOpenRewiew) => {
    !readMore ? setOpenRewiew(true)
        : setTimeout(() => {
            setOpenRewiew(false);
        }, 300);
}


export const readMoreHundler = (setReadMore, readMore, setOpenRewiew) => {
    setReadMore(!readMore);
    setTrimWords(readMore, setOpenRewiew)

};

export const getReviewImage = (setImageExists, user_avatar, name) => {
    const url = user_avatar.split("?")[0];


    const image = new Image();

    image.onload = function () {
        setImageExists(true);
    };

    image.onerror = function () {
        setImageExists(false);
    };

    image.src = url;

};