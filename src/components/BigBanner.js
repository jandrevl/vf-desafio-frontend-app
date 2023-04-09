import belem from "../img/BigBanner_images/belem.jpg";
import cintra from "../img/BigBanner_images/cintra.jpg";
import falesia from "../img/BigBanner_images/falesia.jpg";
import nazare from "../img/BigBanner_images/nazare.jpg";
import porto from "../img/BigBanner_images/porto.jpg";
import { useSnapCarousel } from "react-snap-carousel";
import { useState } from "react";
import './BigBanner.css'





function BigBanner() {

    // Numa utilização real, esta array seria definida utilizando um hook 'useState', e as imagens não estariam offline
    // mas sim online possivelmente numa API. Isto é só para fins de demonstração.
    const bannerData = [
        { image: belem, caption: "Torre de Belém reaberta ao público a partir deste fim de semana", id: 0 },
        { image: cintra, caption: "Palácio de Sintra considerado Património Mundial da Humanidade", id: 1 },
        { image: falesia, caption: "Conheça as dez melhores praias secretas de Portugal", id: 2 },
        { image: nazare, caption: "As melhores receitas tradicionais de peixe da Nazaré desvendadas", id: 3 },
        { image: porto, caption: "Os melhores sítios para ficar numas férias na Cidade Invicta", id: 4 }
    ];

    const [news, setNews] = useState(bannerData[0]);
    // Isto significa: NESTE MOMENTO a variável news é igual a bannerData[0] (i.e. o primeiro elemento da array), mas eu (o React) fico atento a qualquer alteração 
    // do valor desta variável para reagir em tempo real onde quer que ela apareça no DOM

    const { scrollRef, pages, activePageIndex, next, prev } = useSnapCarousel();


    return (
        <div className="BigBanner">

            <div className="big-image">
                <img src={news.image} alt="news" />
            </div>

            <div className="news-box">
                <p className="news-caption">{news.caption}</p>
                <br />
                <a href="/">SABER MAIS</a>
            </div>

            <div className="news-carousel">
                <ul ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflow: 'auto',
                        scrollSnapType: 'x mandatory'
                    }}
                >

                    {bannerData.map((newsItem) => (
                        <li
                            style={{

                                flexShrink: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 5
                            }}
                            key={newsItem.id}>
                            <img src={newsItem.image} alt="carousel thumbnail" width="166" height="101" onClick={() => setNews(bannerData[newsItem.id])}/>
                        </li>
                    ))}
                </ul>

                
                <button onClick={() => prev()}>Prev</button>
                <button onClick={() => next()}>Next</button>
            </div>

        </div>
    );
}

export default BigBanner;