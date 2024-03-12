import { useEffect } from "react";
import { useState } from "react"
import User from "./user";
import './style.css'


export default function GitChecker(){

    const [userName, setUserName] = useState('sangammukherjee');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    function handleSubmit(){
        fetchGithubUserData();
    }

    async function fetchGithubUserData(){
        setLoading(true);
        const responce = await fetch(`https://api.github.com/users/${userName}`);

        const data = await responce.json();

        if(data){
            setUserData(data);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if(loading){
        return (
            <h1>
                Loading...
            </h1>
        )
    }

    return (
        <div className='github-profile-container'>
            <div className="input-wrapper">
                <input 
                type="text" 
                name="search-by-username" 
                placeholder="Search Github Username..."
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData}/> : null
            }
        </div>
    )

}