import './PhotoAlbum.css';
import { useState } from "react";
import Slider from "react-touch-drag-slider";

const randomIndex = Math.floor(Math.random() * 200 + 201);
const imageAlbum1 = [];
    for (var j = 0; j < 10; j++) {
        imageAlbum1.push(
            {
                imageURL: "https://picsum.photos/id/" + (randomIndex + j) + "/1200/800",
                title: "image number " + (randomIndex + j)
            })
    }

// const imageAlbum1 = [
//     { imageURL: "/img/BigBanner_images/belem.jpg", title: "Torre de Belém reaberta ao público a partir deste fim de semana", id: 0 },
//     { imageURL: "/img/BigBanner_images/cintra.jpg", title: "Palácio de Sintra considerado Património Mundial da Humanidade", id: 1 },
//     { imageURL: "/img/BigBanner_images/falesia.jpg", title: "Conheça as dez melhores praias secretas de Portugal", id: 2 },
//     { imageURL: "/img/BigBanner_images/nazare.jpg", title: "As melhores receitas tradicionais de peixe da Nazaré desvendadas", id: 3 },
//     { imageURL: "/img/BigBanner_images/porto.jpg", title: "Os melhores sítios para ficar numas férias na Cidade Invicta", id: 4 }
// ];



const PhotoAlbum = () => {

    
    const [index, setIndex] = useState(1);

    const setFinishedIndex = (i) => {
        console.log("finished dragging on slide", i);
        setIndex(i);
    };

    const next = () => {
        if (index < imageAlbum1.length - 1) setIndex(index + 1);
    };

    const previous = () => {
        if (index > 0) setIndex(index - 1);
    };


    return (
        <div className='photo-album-component'>
            {/* <img src={imageAlbum1[0].imageURL} alt="teste" /> */}
            <div className="image-slider">
                <Slider
                    onSlideComplete={setFinishedIndex}
                    onSlideStart={(i) => {
                        console.clear();
                        console.log("started dragging on slide", i);
                    }}
                    activeIndex={index}
                    threshHold={100}
                    transition={0.2}
                    scaleOnDrag={true}
                >
                    {imageAlbum1.map(({ imageURL, title }, index) => (
                        <img src={imageURL} key={index} alt={title} />
                    ))}
                </Slider>
            </div>
            <button onClick={previous}>Button 1</button>
            <button onClick={next}>Button 2</button>


        </div>
    );
}

export default PhotoAlbum;