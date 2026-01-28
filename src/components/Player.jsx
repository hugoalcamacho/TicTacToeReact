import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let editOrInput = !isEditing ? <span className="player-name">{name}</span> : <input type="text" required></input>

    return (
        <li>
            <span className="player">
            {editOrInput}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>);
}