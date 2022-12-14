import Slider from 'react-slick';
import CountUp from 'react-countup';
import { useEffect, useRef, useState } from 'react';

function Infografics({ lang }) {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);

    const observer = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > observer.current.offsetTop - window.innerHeight / 2) {
                setNumber1(1000);
                setNumber2(300);
                setNumber3(600);
                setNumber4(150);
            } else if (window.scrollY < observer.current.offsetTop - window.innerHeight) {
                setNumber1(0);
                setNumber2(0);
                setNumber3(0);
                setNumber4(0);
            }
        })
    }, []);

    let dataNumbers = [
        { id: 0, number: number1, text_uz: "Етказилган юклар сони", text_en: "Етказилган юклар сони", text_ru: "Етказилган юклар сони", description_uz: "We1 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials.", description_en: "We1 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials.", description_ru: "We1 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials." },
        { id: 1, number: number2, text_uz: "Етказилган юклар сони", text_en: "Етказилган юклар сони", text_ru: "Етказилган юклар сони", description_uz: "We2 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials.", description_en: "We2 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials.", description_ru: "We2 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials." },
        { id: 2, number: number3, text_uz: "Етказилган юклар сони", text_en: "Етказилган юклар сони", text_ru: "Етказилган юклар сони", description_uz: "We3 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials.", description_en: "We3 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials.", description_ru: "We3 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials." },
        { id: 3, number: number4, text_uz: "Етказилган юклар сони", text_en: "Етказилган юклар сони", text_ru: "Етказилган юклар сони", description_uz: "We4 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials.", description_en: "We4 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials.", description_ru: "We4 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials." }
    ];

    const [activeId, setActiveId] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        speed: 2000,
        pauseOnHover: false,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear",
        beforeChange: (current, next) => setActiveId(next),
    };

    return (
        <div className="Infografics parent" id='infografics' ref={observer}>
            <div className="wrapper">
                <div className="rectangle"></div>
                <div className="numbers">
                    {dataNumbers.map((data) => (
                        <div key={data.id} className="number col-3">
                            <div className="body" onClick={() => setActiveId(data.id)}>
                                <h1 className={`count ${activeId == data.id && "active"}`}>
                                    <CountUp start={0} end={data.number} duration={4} />
                                </h1>
                                <p className={`text ${data.id != activeId && "d-none"}`}>{lang == "uz" ? data.text_uz : lang == "ru" ? data.text_ru : data.text_en}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Slider {...settings} className='carousel'>
                    {dataNumbers.map((data) => (
                        <p key={data.id} className="desc">{lang == "uz" ? data.description_uz : lang == "ru" ? data.description_ru : data.description_en}</p>
                    ))}
                </Slider>
            </div>
        </div>
    )
};

export default Infografics;