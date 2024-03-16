import { useRef } from "react";
import useFetch from "../useFetch"


export default function ScrollToTopAndBOttom(){

    const bottomRef = useRef(null);
    
    const {data, error, pending} = useFetch(
        'https://dummyjson.com/products?limit=100', 
        {}
    );

    if(error){
        return <h1>Error. Plese try again</h1>
    }

    if(pending){
        return <h1>Loading...</h1>
    }

    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'});
    }    

    function handleScrollToTop(){
        window.scrollTo(
            {top: 0, left: 0, behavior: 'smooth'}
        )
    }

    return (
        <div>
           <h1>Scroll To Top And Bottom Feature</h1>
           <h3>This is the top section</h3>
           <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
           <ul style={{listStyle: 'none'}}>
            {
                data && data.products && data.products.length ?
                data.products.map((item) => <li>{item.title}</li>)
                : null
            }
           </ul>
           <button onClick={handleScrollToTop}>Scroll To Top</button>
           <div ref={bottomRef}></div>
           <h3>This is the bottom of the page</h3>
            </div>
    )
}