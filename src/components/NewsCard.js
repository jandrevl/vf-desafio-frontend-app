import './NewsCard.css';
import { ReactComponent as RightArrow } from '../resources/rightarrow.svg'



const NewsCard = (props) => {

    const cardData = props.item;
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
                    {/* Ver mais <i><img src= "/img/smallrightarrow.png" alt="link arrow" /></i> */}
                    Ver mais <RightArrow height={13} width={26} fill='#64ae87' />
                </a>
            </div>


        </div>
    );
}

export default NewsCard;