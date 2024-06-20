import React, { useState } from "react";
import axios from "axios";

export default function AddTravel() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState("");
    const [culture, setCulture] = useState(false); 
    const [move, setMove] = useState("");
    const [security, setSecurity] = useState("");
    const [population, setPopulation] = useState("");
    const [flora, setFlora] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTravel = {
            title,
            description,
            price,
            photo,
            culture,
            move,
            security,
            population,
            flora
        };
        axios.post('http://localhost:4444/addTravel' , newTravel)
        .then(res=>console.log(res.data))
    };

    return (
        <div className="container">
            <h1>Добавить путешествие</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок" />
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" />
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" />
                <input type="text" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Фотография" />
                <label>Это культурное наследие?</label>
                <input type="checkbox" name="culture" checked={culture} onChange={(e) => setCulture(e.target.checked)} />
                <input type="text" name="move" value={move} onChange={(e) => setMove(e.target.value)} placeholder="Оценка удобства передвижения" />
                <input type="text" name="security" value={security} onChange={(e) => setSecurity(e.target.value)} placeholder="Оценка безопасности" />
                <input type="text" name="population" value={population} onChange={(e) => setPopulation(e.target.value)} placeholder="Оценка населения" />
                <input type="text" name="flora" value={flora} onChange={(e) => setFlora(e.target.value)} placeholder="Оценка растительности" />
                <input type="submit" value="Отправить" />
            </form>
        </div>
    );
}
