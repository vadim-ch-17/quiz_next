
const ResponsiveImage = ({ src, alt, type, ...props }) => {
    return (
        <picture>
            <source srcSet={`${src}?webp`} type={`image/${type || 'webp'}`} />
            <img src={src} alt={alt} className={props.classes || ''} loading={props.loadImg || 'lazy'} />
        </picture>
    );
}

export default ResponsiveImage;