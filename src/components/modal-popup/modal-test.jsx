import { useState } from "react"
import Modal from "./modal";
import './modal.css'


export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup(){
    setShowModalPopup(!showModalPopup);
    }

    function onClose(){
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open modal Popup</button>
            {
                showModalPopup && <Modal 
                id={'custom-id'}
                onClose={onClose}
                header={<h1>Customize Header</h1>}
                footer={<h1>Customize Footer</h1>}
                body={<div>Customized doby</div>}/>
            }
        </div>
    )
}