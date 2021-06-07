const CardImg = ({ src, alt, mix }) => (
  <img class={`card__img ${mix || ""}`} src={src} alt={alt} />
);

export default CardImg;
