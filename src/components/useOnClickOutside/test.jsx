import { useRef, useState } from "react"
import useOnClickOutside from ".";





export default function UseOnClickOutsideTest() {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setShowContent(false));

    return (
        <div>
            {
                showContent ? ( <div ref={ref}>
                    <h1>THis is a random content</h1>
                    <p>Please clikc outside of this to close this. It wont close if you click inside of this content</p>
                </div> ) : (<button onClick={() => setShowContent(true)}>Show content</button>)
            }
        </div>
    )
}