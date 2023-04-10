import './NewsCard.css';



const NewsCard = (props) => {

    const cardData = props.item;

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
                    Ver mais <i><img src= "/img/smallrightarrow.png" alt="link arrow" /></i>
                </a>
            </div>


        </div>
    );
}

export default NewsCard;