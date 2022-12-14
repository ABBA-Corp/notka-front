function Modal({ lang, changeModal }) {
    return (
        <>
            <div className='Modal'>
                {lang == "en" &&
                    <h1>THANK YOU FOR YOUR APPEAL &#128522;</h1>
                }
                {lang == "ru" &&
                    <h1>СПАСИБО 3A ОБРАЩЕНИЕ &#128522;</h1>
                }
                {lang == "uz" &&
                    <h1>MUROJAATINGIZ UCHUN TASHAKKUR &#128522;</h1>
                }
                <button onClick={() => changeModal()}>OK</button>
            </div>
            <div className="contrast" onClick={() => changeModal()}></div>
        </>
    )
};

export default Modal;