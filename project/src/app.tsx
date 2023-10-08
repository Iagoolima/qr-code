import { useState } from "react";
import QRCode from "react-qr-code";
import './app.css'



export default function App(){

    const [textValue, setTextValue] = useState<string>("")
    const [inputView, setInputView] = useState<boolean>(true)

    return(
        <div className="container-main">

            <div className="box-input">

                <h1 onClick={()=>setInputView(!inputView)}>QR CODE <span className="span-color">MISTERIOSO</span></h1>

                {inputView && <input
                type="text" 
                placeholder="Digite..."
                onChange={(e) => setTextValue(e.target.value)}
                className="input-text"/>
                }

            </div>

            <div className="box-qrcode">
                <QRCode value={textValue}
                 style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
            </div>

            <p>Desenvolvido por Iago Silva</p>
        </div>
    )
}