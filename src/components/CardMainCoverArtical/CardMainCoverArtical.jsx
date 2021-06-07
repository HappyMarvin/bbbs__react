import Card from "../Card/Card.jsx";
import CardTitle from "../Card/CardTitle/CardTitle.jsx";
import CardLink from "../Card/CardLink/CardLink.jsx";
import "./CardMainCoverArtical.css";

function CardMainCoverArtical({
  cover,
  coverTitle,
  coverTitleText,
  coverLink,
  coverLinkText,
}) {
  return (
    <Card mix="card-main-cover-artical" {...cover}>
      <CardTitle mix="card-main-cover-artical__title" {...coverTitle}>
        {coverTitleText}
      </CardTitle>
      <CardLink mix="card-main-cover-artical__link" {...coverLink}>
        {coverLinkText}
      </CardLink>
    </Card>
  );
}

export default CardMainCoverArtical;
