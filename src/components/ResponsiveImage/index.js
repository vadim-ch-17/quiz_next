
const ResponsiveImage = ({ src, alt, type, height, width, ...props }) => {
    return (
        <picture>
            <source srcSet={`${src}?webp`} type={`image/${type || 'webp'}`} />
            <img src={src} alt={alt} height={height} width={width} className={props.classes || ''} loading={props.loadImg || 'lazy'} />
        </picture>
    );
}

export default ResponsiveImage;