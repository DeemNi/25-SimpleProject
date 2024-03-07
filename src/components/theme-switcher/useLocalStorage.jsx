import { useEffect } from "react";
import { useState } from "react";


export default function useLocalStorage(key, defaultValue){

    const [value, setValue] = useState(() => {
        let currenValue;

        try{

            currenValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));

        }catch(error){
            console.log(error);
            currenValue = currenValue;
        }

        return currenValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[key, value])

    return [value,setValue];

}