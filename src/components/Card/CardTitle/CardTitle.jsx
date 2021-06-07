const CardTitle = ({ size, mix, ...props }) => (
  <>
    {size === "l" ? (
      <h3 className={`card__title card__title_size_l ${mix || ""}`}>
        {props.children}
      </h3>
    ) : (
      <h2 className={`card__title ${mix || ""}`}>{props.children}</h2>
    )}
  </>
);

export default CardTitle;
