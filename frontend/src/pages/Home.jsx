import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export default function Home (){
    const user = useSelector(state =>state.user)
    const [travels , setTravels] = useState()
    useEffect(()=>{
        axios.get('http://localhost:4444/travels')
        .then(res => setTravels(res.data))
        .catch(e=>console.log(e))
    },[])
    console.log(travels);
    return(
        <>
        <div className="container">
            <h1>Последнии путешествия : </h1>
            {travels && travels.map((travel , id )=>(
                <div key={id} className="travel">
                 <h3>   {travel.title} </h3>
                 <p>{travel.description} </p>
                 <h3>Рейтинг : </h3>
                <p>Флора  : {travel.flora } / 10</p>
                <p>Удобство перемещения : {travel.move} / 10</p>
                <p>Уровень населенности  : {travel.population} / 10</p>
                <p>Уровень безопастности : {travel.security}  / 10</p>
                <p><b>Цена : {travel.price}</b></p>
                <p></p>
                <img src={travel.photo} alt="" />
                </div>
            ))}
        </div>
        </>
    )
}