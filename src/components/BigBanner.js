
import { useSnapCarousel } from "react-snap-carousel";
import { useState } from "react";
import './BigBanner.css'





function BigBanner() {

    const bannerData = [
        { image: "/img/BigBanner_images/belem.jpg", caption: "Torre de Belém reaberta ao público a partir deste fim de semana", id: 0 },
        { image: "/img/BigBanner_images/cintra.jpg", caption: "Palácio de Sintra considerado Património Mundial da Humanidade", id: 1 },
        { image: "/img/BigBanner_images/falesia.jpg", caption: "Conheça as dez melhores praias secretas de Portugal", id: 2 },
        { image: "/img/BigBanner_images/nazare.jpg", caption: "As melhores receitas tradicionais de peixe da Nazaré desvendadas", id: 3 },
        { image: "/img/BigBanner_images/porto.jpg", caption: "Os melhores sítios para ficar numas férias na Cidade Invicta", id: 4 }
    ];

    const [news, setNews] = useState(bannerData[0]);
   
    const { scrollRef, next, prev } = useSnapCarousel();


    return (
        <div className="BigBanner">

            <div className="big-image">
                <img src={news.image} alt="news" />

                <div className="news-box">
                    <p className="news-caption">{news.caption}</p>
                    <br className="news-break"/>
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
                    <img src= "/img/carouselarrow_left.png" alt="arrow left"  onClick={() => prev()} />
                    <img src= "/img/carouselarrow_right.png" alt="arrow right"  onClick={() => next()} />

                </div>
            </div>

        </div>
    );
}

export default BigBanner;