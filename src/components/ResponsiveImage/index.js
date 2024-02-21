
const ResponsiveImage = ({ src, alt, ...props }) => {
    return (
        <picture>
            <source srcSet={`${src}?webp`} type="image/webp" />
            <img src={src} alt={alt} className={props.classes || ''} loading={props.loadImg || 'lazy'} />
        </picture>
    );
}

export default ResponsiveImage;