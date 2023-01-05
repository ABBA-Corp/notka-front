import Image from 'next/image';
import Slider from 'react-slick';
import { dataGallery } from '../pages/api/Api';

function Gallery() {

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
        <div className="Gallery parent" id='gallery'>
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