import './NewsCard.css';



const NewsCard = (props) => {

    const cardData = props.item;
    console.log(cardData.categories)
    console.log("cardData length is: " + cardData.length)
    let category2 = cardData.categories.length >=2? (
        <div className="category-tag">{ cardData.categories[1] }</div>
    ) : null;
    let category3 = cardData.categories.length >2? (
        <div className="category-tag">{ cardData.categories[2] }</div>
    ) : null;


    return (
        <div className="NewsCard">

            <div className="card-image">
                <img src={cardData.image} alt="card thumbnail" />
                <div className="category-header">
                    <div className="category-tag">{ cardData.categories[0] }</div>
                    { category2 }
                    { category3 }
                    

                </div>
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