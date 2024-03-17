import { useRef } from "react"



export function ScrollToSection() {

    const ref = useRef();

    const data = [
        {
            label: 'Frist Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'black'
            }
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'gray'
            }
        },
    ]

    function handleScrollTOSection(){
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <h1>Scroll to particular section</h1>
            <button onClick={handleScrollTOSection}>Click to Scroll</button>
            {
                data.map((dataItem, index) => <div ref={index === 0 ? ref : null}style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                </div>)
            }
        </div>
    )
}