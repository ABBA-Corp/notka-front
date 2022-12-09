import Image from 'next/image';
import Slider from 'react-slick';
import GalleryImg from '../assets/images/gallery.png';

function Gallery() {

    const dataGallery = [
        { id: 1, image: GalleryImg },
        { id: 2, image: GalleryImg },
        { id: 3, image: GalleryImg },
        { id: 4, image: GalleryImg }
    ]

    const settings = {
        speed: 2000,
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplaySpeed: 4000,
        pauseOnHover: false,
    };

    return (
        <div className="Gallery parent">
            <Slider {...settings} className='carousel'>
                {dataGallery.map((data) => (
                    <div key={data.id} className="img">
                        <Image src={data.image} priority alt="image" className="gallery-img" width={1000} height={500} />
                    </div>
                ))}
            </Slider>
        </div>
    )
};

export default Gallery;