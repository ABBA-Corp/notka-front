import Image from 'next/image';
import BackImg from '../assets/images/about.png';

function HomeAbout() {
    return (
        <div className="HomeAbout parent">
            <Image src={BackImg} priority alt="image" className="back-img" width={1000} height={500} />
            <div className="wrapper"></div>
        </div>
    )
};

export default HomeAbout;