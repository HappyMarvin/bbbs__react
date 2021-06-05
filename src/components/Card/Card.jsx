const Card = ({ cardColor, mix, ...props }) => (
  <div class={`card ${mix || ""}`} style={{ backgroundColor: cardColor }}>
    {props.children}
  </div>
);

export default Card;
