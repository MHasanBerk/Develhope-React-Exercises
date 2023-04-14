import { useEffect, useState } from "react"

export default function GithubUser({username}){
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    async function fetchGithubUser(username){
        setLoading(true);
        setData(null);
        
        try{
            const response = await fetch(`https://api.github.com/users/${username}`);

            if(!response.ok){
                throw new Error("Couldn't get the data");
            }

            const serverData = await response.json();
            setData(serverData);
        }
        catch(err){
            setData(null)
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGithubUser(username)
    }, [username])

    return(
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data && (
                <>
                    <h3>Username: {data.login}</h3>
                    <h3>Name: {data.name}</h3>
                    <h3>ID: {data.id}</h3>
                </>
            )}
        </div>
    )
}