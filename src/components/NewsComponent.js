import NewsCard from './NewsCard';
import './NewsComponent.css';


const NewsComponent = () => {

    const randomIndex = Math.floor(Math.random() * 200);

    const newsItems = [
        {
            image: "https://picsum.photos/id/" + randomIndex + "/342/191",
            newsDate: "27 - 07 - 2020",
            newsDescription: "O que acontece quando o texto é grande demais para caber em três linhas apenas e temos de o truncar para o cartão não ficar esquisito",
            categories: ["Categorias", "De Vários", "Tamanhos diferentes"]
        },
        {
            image: "https://picsum.photos/id/" + (randomIndex + 1) + "/342/191",
            newsDate: "03 - 04 - 2023",
            newsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            categories: ["Categoria2"]
        },
        {
            image: "https://picsum.photos/id/" + (randomIndex + 2) + "/342/191",
            newsDate: "26 - 07 - 2022",
            newsDescription: "Lorem ipsum dolor sit amet",
            categories: ["Categoria1", "Categoria3"]
        },
        {
            image: "https://picsum.photos/id/" + (randomIndex + 3) + "/342/191",
            newsDate: "26 - 11 - 2021",
            newsDescription: "consectetur adipiscing elit",
            categories: ["Categoria3"]
        },
        {
            image: "https://picsum.photos/id/" + (randomIndex + 4) + "/342/191",
            newsDate: "19 - 05 - 2020",
            newsDescription: "O que acontece quando o texto",
            categories: ["Categoria2", "Categoria3"]
        },

    ]

    return (
        <div className='news-component'>
            <div className='noticias-component-header'>
                <p className='component-title-font'>NOTÍCIAS</p>
                <a href="/"> VER TODAS</a>
            </div>
            <div className="component-title-underline"></div>

            <div className="card-collection">
                <NewsCard item={newsItems[0]} />
                <NewsCard item={newsItems[1]} />
                <NewsCard item={newsItems[2]} />
            </div>

            <div className='mobile-link'>
                <br />
                <p><a href="/">VER TODAS</a></p>
                
            </div>

        </div>);
}

export default NewsComponent;