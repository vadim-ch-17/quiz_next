
const Slide = ({ slide, font }) => {
    return (
        <div className="slide">
            <h2>{slide.name}</h2>
            <p>{slide.review}</p>
        </div>
    );
}

export default Slide;