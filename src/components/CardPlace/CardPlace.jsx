import Card from "../Card/Card.jsx";
import CardTag from "../Card/CardTag/CardTag.jsx";
import CardTitle from "../Card/CardTitle/CardTitle.jsx";
import CardCaption from "../Card/CardCaption/CardCaption.jsx";
import CardImg from "../Card/CardImg/CardImg.jsx";
import CardLink from "../Card/CardLink/CardLink.jsx";
import "./CardPlace.css";

function CardPlace({
  cover,
  tagText,
  coverTitle,
  coverCaption,
  coverImg,
  coverLink,
  coverLinkText,
  description,
  descriptionCaption,
  descriptionText,
}) {
  return (
    <div className="card-place">
      <Card mix="card-place__cover" {...cover}>
        <CardTag mix="card-place__tag">{tagText}</CardTag>
        <CardTitle mix="card-place__title">{coverTitle}</CardTitle>
        <CardCaption mix="card-place__caption-cover">
          {coverCaption}
        </CardCaption>
        <CardImg mix="card-place__img" {...coverImg} />
        <CardLink mix="card-place__link" {...coverLink}>
          {coverLinkText}
        </CardLink>
      </Card>
      <Card mix="card-place__description" {...description}>
        <CardCaption mix="card-place__caption-description">
          {descriptionCaption}
        </CardCaption>
        <p className="card-place__description-text">{descriptionText}</p>
      </Card>
    </div>
  );
}

export default CardPlace;
