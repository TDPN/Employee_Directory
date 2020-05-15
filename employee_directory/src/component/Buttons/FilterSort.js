import React from "./node_modules/react"
import "./style.css"



function FilterSort(props) {
    return (
        <div>
        <div className="buttons">
            <button onClick={() => props.filterEmployee()} className="remove">Sort by Rank</button>
        </div>
        <div className="buttons">
            <button onClick={() => props.sortEmployee()} className="remove">Sort by Name</button>
        </div>
        </div>
    )
}

export default FilterSort