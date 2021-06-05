const CardTag = ({ mix, ...props }) => (
  <span class={`card__tag ${mix || ""}`}>{props.children}</span>
);

export default CardTag;
