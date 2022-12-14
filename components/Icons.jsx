import Image from 'next/image';
import Icon1 from '../assets/images/icon1.png';
import Icon2 from '../assets/images/icon2.png';
import Icon3 from '../assets/images/icon3.png';

function Icons() {
    return (
        <div className="Icons parent">
            <div className="wrapper">
                <div className="col-4 icon">
                    <div className="body">
                        <div className="img">
                            <Image src={Icon1} priority alt="image" className="icon-img" width={1000} height={500} />
                        </div>
                        <div className="texts">
                            <h1 className="name">Удобны при ношении</h1>
                            <p className="desc">Уникальные край линзы Мунленз делает ношение линзы более комфортным. Пациенты</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 icon">
                    <div className="body">
                        <div className="img">
                            <Image src={Icon2} priority alt="image" className="icon-img" width={1000} height={500} />
                        </div>
                        <div className="texts">
                            <h1 className="name">Простота уходаи использования</h1>
                            <p className="desc">Мунленз легко надеть и снять. Уход за линзами не отличаетсяот ухода за другими ЖКЛ линзами</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 icon">
                    <div className="body">
                        <div className="img">
                            <Image src={Icon3} priority alt="image" className="icon-img eye" width={1000} height={500} />
                        </div>
                        <div className="texts">
                            <h1 className="name">Длительный срок службы</h1>
                            <p className="desc">Линзы носятся 1 год, по истечении года требуется замена на новую пару линз</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Icons;