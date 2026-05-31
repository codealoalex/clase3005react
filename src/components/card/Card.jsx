import { useState } from "react";
import "./Card.css";

export default function Card({ title, description }) {
    const [select, setSelect] = useState(false);
    
    const selectMovie = () => {
        setSelect(prev=>!prev);
    }

    return (
        <div className="card card-style">
            <img src="/favicon.svg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className={`card-button ${select?"card-button-delete":""}`} onClick={selectMovie}>
                    {select?"Eliminar ✖":"Me encanta🤍"}
                </button>
            </div>
        </div>
    )
}