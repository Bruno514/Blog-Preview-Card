import "./Card.scss";
import IllustrationArticle from "./assets/images/illustration-article.svg";
import AvatarImage from "./assets/images/image-avatar.webp";

function Card() {
  return (
    <article className="card">
      <img src={IllustrationArticle} alt="Article preview image" />
      <div className="card-tag">Learning</div>
      <p className="card-date">Published 19 Oct 2024</p>
      <section>
        <h1>HTML & CSS foundations</h1>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation
        </p>
      </section>
      <div className="avatar">
        <img src={AvatarImage} className="avatar-image"></img>
        <div className="avatar-name">Greg Hooper</div>
      </div>
    </article>
  );
}

export default Card;
