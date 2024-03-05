import QRCode from 'react-qr-code'
import './style.css'
import { useState } from 'react'

export default function QrGenerator() {



    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode(){
        setQrCode(input)
    }

    return (
        <div>
            <h1>Qr Code Generator</h1>
            <div>
                <input type="text" onChange={(e) => setInput(e.target.value)} name='qr-code' placeholder='Enter your value here' />
                <button onClick={handleGenerateQrCode} disabled={input && input.trim() !== '' ? false : true}>Generate</button>
            </div>
            <div>
                <QRCode
                    id='qr-code-value'
                    value={qrCode}
                    size={400}
                    bgColor='#fff'
                />
            </div>
        </div>
    )
}