import { Link } from "react-router-dom";

const CardLink = ({ localLink, link, mix, ...props }) => (
  <>
    {localLink ? (
      <Link to={link} className={`card__link ${mix || ""}`}>
        {props.children}
      </Link>
    ) : (
      <a href={link} className={`card__link ${mix || ""}`}>
        {props.children}
      </a>
    )}
  </>
);

export default CardLink;
