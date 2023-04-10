import belem from "../img/BigBanner_images/belem.jpg";
import cintra from "../img/BigBanner_images/cintra.jpg";
import falesia from "../img/BigBanner_images/falesia.jpg";
import nazare from "../img/BigBanner_images/nazare.jpg";
import porto from "../img/BigBanner_images/porto.jpg";
import carouselarrow_left from "../img/carouselarrow_left.png";
import carouselarrow_right from "../img/carouselarrow_right.png";

import { useSnapCarousel } from "react-snap-carousel";
import { useState } from "react";
import './BigBanner.css'





function BigBanner() {


    // Array 'hardcoded' apenas para fins de demonstração.
    const bannerData = [
        { image: "/img/BigBanner_images/belem.jpg", caption: "Torre de Belém reaberta ao público a partir deste fim de semana", id: 0 },
        { image: "/img/BigBanner_images/cintra.jpg", caption: "Palácio de Sintra considerado Património Mundial da Humanidade", id: 1 },
        { image: "/img/BigBanner_images/falesia.jpg", caption: "Conheça as dez melhores praias secretas de Portugal", id: 2 },
        { image: "/img/BigBanner_images/nazare.jpg", caption: "As melhores receitas tradicionais de peixe da Nazaré desvendadas", id: 3 },
        { image: "/img/BigBanner_images/porto.jpg", caption: "Os melhores sítios para ficar numas férias na Cidade Invicta", id: 4 }
    ];

    const [news, setNews] = useState(bannerData[0]);
    // Isto significa: NESTE MOMENTO a variável news é igual a bannerData[0] (i.e. o primeiro elemento da array), 
    //mas eu (o React) fico atento a qualquer alteração do valor desta variável para reagir em tempo real 
    //onde quer que ela apareça no DOM

    // const { scrollRef, pages, activePageIndex, next, prev } = useSnapCarousel();
    const { scrollRef, next, prev } = useSnapCarousel();


    return (
        <div className="BigBanner">

            <div className="big-image">
                <img src={news.image} alt="news" />

                <div className="news-box">
                    <p className="news-caption">{news.caption}</p>
                    <br />
                    <a href="/">SABER MAIS</a>
                </div>

                <div className="news-carousel">
                    <ul ref={scrollRef}>


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
                                <img src={newsItem.image} alt="carousel thumbnail" height="101" onClick={() => setNews(bannerData[newsItem.id])} />
                            </li>
                        ))}
                    </ul>



                </div>
                <div className="scroll-arrows">
                    {/* <button onClick={() => prev()}>Prev</button>
                    <button onClick={() => next()}>Next</button> */}
                    <img src= "/img/carouselarrow_left.png" alt="arrow left"  onClick={() => prev()} />
                    <img src= "/img/carouselarrow_right.png" alt="arrow right"  onClick={() => next()} />

                </div>
            </div>






        </div>
    );
}

export default BigBanner;