import Image from 'next/image';
import { useState } from 'react';
import BackImg from '../assets/images/contacts.png';

function Contacts({ changeModal }) {

    // input values

    const [textValue, setTextValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");

    // invalid input states

    const [invalidText, setInvalidText] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);

    // change values and invalids functions

    function changeNumber(item) {
        setNumberValue(item);
        setInvalidNumber(false);
    };

    function changeName(item) {
        setNameValue(item);
        setInvalidName(false);
    };

    function changeText(item) {
        setTextValue(item);
        setInvalidText(false);
    };

    // send message to telegram bot

    let bot = {
        TOKEN: "5651183806:AAGLLjzZg2z-17CMoozAfMt6th2zUEjHzTI",
        chatID: "-1001684710266",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AXabar: ${textValue}`
    };

    function sendMessage() {
        if (nameValue === "") {
            setInvalidName(true)
        } else if (numberValue === "") {
            setInvalidNumber(true)
        } else {
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method: "GET"
            })
                .then(success => {
                    console.log('send message')
                }, error => {
                    console.log(error)
                })

            changeModal();
            setNameValue("");
            setTextValue("");
            setNumberValue("");
        }
    };

    return (
        <div className="Contacts parent">
            <Image src={BackImg} priority alt="image" className="back-img" width={1000} height={500} />
            <div className="wrapper">
                <div className="forms col-7">
                    <h1 className="title">Savol va takliflar</h1>
                    <p className="text">Malumotlar havfsizligi biz tomonimizdan taminlanadi</p>
                    <div className="col-12 forms-control">
                        <input className={`${invalidName && "red-line"}`} type="text" value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder='Ismingiz va Familiyangz' />
                    </div>
                    <div className="col-12 forms-control">
                        <input className={`${invalidNumber && "red-line"}`} type="number" value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder='Telefon raqamingiz' />
                    </div>
                    <div className="col-12 forms-control">
                        <textarea className={`${invalidText && "red-line"}`} rows="6" value={textValue} onChange={(e) => changeText(e.target.value)} placeholder='Habaringizni yozib qoldirin'></textarea>
                    </div>
                    <div className="button col-12">
                        <button onClick={() => sendMessage()}>yuborish</button>
                        <button>jaoylashuv</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contacts;