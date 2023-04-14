import {useEffect, useState} from "react"
import GithubUser from "./GithubUser"

export function GithubUserList(){
    const [inputValue,setInputValue] = useState("")
    const [list, setList] = useState([])

    function handleInputChange(event){
        setInputValue(event.target.value);
    }

    function handleAddItem(){
        setList([...list, inputValue]);
        setInputValue("");
    }

    const itemList = list.map((item, index) => (
        <li key={index}>
            <GithubUser username={item}/>
        </li>
    ))

    return(
        <div className="userlist">
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <button onClick={handleAddItem}>Add User</button>
            <ul>
                {itemList}
            </ul>
        </div>
    )
}