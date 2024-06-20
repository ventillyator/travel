import User from "../models/user.js";
import bcrypt from 'bcrypt';



export  const  register = async(req , res )=>{
    try {
        const {name , password  , email } = req.body
        const hashPassword = await bcrypt.hash(password , 10)
        const newUser = new User({
            name ,
            password : hashPassword,
            email
        })
        await newUser.save()

        res.json(newUser)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const login = async (req , res )=>{
    try {
        const {email , password } = req.body
        const user = await User.findOne({email})
        console.log(user);
        if (!user) {
            res.status(404).json({message : 'Пользователь не найден'})
        }
        const pass = await bcrypt.compare(password , user.password)

        if (!pass) {
            res.status(404).json({message : 'Не верный пароль '})
        }

        res.json(user)

    } catch (e) {
        res.status(500).json({message : 'ошибка сервера '})
    }
}
