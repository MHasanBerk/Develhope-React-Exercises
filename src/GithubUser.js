import { useEffect, useState } from "react"
import { useGithubUser } from "./useGithubUser"

export default function GithubUser({username}){
    const {data, loading, error} = useGithubUser(username)

    return(
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data && (
                <>
                    <h3>Username: {data.login}</h3>
                    <h3>Name: {data.name}</h3>
                    <h3>ID: {data.id}</h3>
                    <hr />
                </>
            )}
        </div>
    )
}