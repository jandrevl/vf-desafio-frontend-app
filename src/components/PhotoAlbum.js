import './PhotoAlbum.css';
import { useSnapCarousel } from 'react-snap-carousel';
import { ReactComponent as RightArrow } from '../resources/rightarrow.svg';

const randomIndex = Math.floor(Math.random() * 100 + 1);
const imageAlbum1 = [];
for (var j = 0; j < 10; j++) {
    imageAlbum1.push(
        {
            imageURL: "https://picsum.photos/id/" + (randomIndex + j) + "/1200/800",
            title: "image number " + (randomIndex + j)
        })

}



const PhotoAlbum = () => {


    const { scrollRef, next, prev } = useSnapCarousel();

    return (
        <div className='photo-album-component'>

            <div className="image-slider">
                <ul ref={scrollRef}>
                    {imageAlbum1.map(({ imageURL, title }, index) => (

                        <li>
                            <img className='photo-item' src={imageURL} alt={title} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="album-name-and-buttons">
                <div className="album-name">
                    <div className="name"> <span>Album de Fotos Várias</span> </div>
                    <div> <RightArrow height={13} width={26} fill='whitesmoke' /> </div>
                </div>
                <div className="scroll-buttons">
                    <div className="previous-button" onClick={prev}><RightArrow className='previous-arrow' /></div>
                    <div className="next-button" onClick={next}><RightArrow className='next-arrow' /></div>
                </div>
            </div>

        </div>
    );
}

export default PhotoAlbum;