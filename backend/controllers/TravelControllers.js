import Travel from "../models/travel.js";

export const addTravel =async (req , res )=>{
    try {
        const { title,
            description,
            price,
            photo,
            culture,
            move,
            security,
            population,
            flora} = req.body
        const data = {   title,
            description,
            price,
            photo,
            culture,
            move,
            security,
            population,
            flora}

            const travel = new Travel(data)
            await travel.save()
            res.send(travel)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const travels = async(req , res )=>{
    try {
        const travels = await Travel.find()
        res.send(travels)
    } catch (e) {
        res.status(500).json(e)
    }
}