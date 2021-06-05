const CardCaption = ({ mix, ...props }) => (
  <span class={`card__caption ${mix || ""}`}>{props.children}</span>
);

export default CardCaption;
