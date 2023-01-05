import Image from "next/image";
import Degree from '../assets/images/degree.png';
import BackImg from '../assets/images/showroom.png';

function ShowRoom() {
    return (
        <div className="ShowRoom parent" id="tour">
            <Image src={BackImg} priority alt="image" className="back-img" width={1000} height={500} />
            <div className="circle">
                <Image src={Degree} priority alt="image" className="degree" width={1000} height={500} />
                <div>
                    Zavod boylab
                </div>
            </div>
        </div>
    )
};

export default ShowRoom;