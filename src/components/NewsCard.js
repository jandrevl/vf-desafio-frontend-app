import './NewsCard.css';
import cardImage from "../img/NewsCardsImages/cardImage.jpg";
import smallrightarrow from "../img/smallrightarrow.png"


const NewsCard = () => {

    const cardData = { image: cardImage, newsDate: "27 - 07 - 2020", newsDescription: "Época das vindimas chegou. o que acontece   " };

    return (
        <div className="NewsCard">

            <div className="card-image">
                <img src={cardData.image} alt="card thumbnail" />
            </div>

            <div className="card-text">

                <p>{cardData.newsDate}</p>
                <h3>{cardData.newsDescription}</h3>


            </div>

            <div className="news-link">
                <a href='/'>
                    Ver mais <i><img src={smallrightarrow} alt="link arrow" /></i>
                </a>
            </div>


        </div>
    );
}

export default NewsCard;