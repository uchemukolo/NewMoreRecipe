import models from '../models';
import bcrypt from 'bcrypt';

const users = models.users;
const userController = {
    Signup (req, res) {
        const {email, username, password, confirmPassword} = req.body;
        if (!email) {
            res.status(400).send({
                message: 'please enter your email'
            })
        } else if(!username) {
            res.status(400).send({
                message: 'please enter your username'
            })
        } else if (!password) {
            res.status(400).send({
                message: 'please enter your password'

            })
        } else if(password !== confirmPassword) {
            res.status(400).send({
                message: 'password does not match'
            })
        } else {
        
            users.find({
                where:{
                    $or: [
                        { email: email },
                        { username: username },
                    ]
                }
            }).then(foundUser => {
                if (!foundUser) {
                    return users
                    .create({
                        email: email,
                        username: username,
                        password: bcrypt.hashSync(password, 10)
                    }).then(signup => {
                        res.status(201).send(signup)
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).send({
                            message: 'some error occured!'
                        })
                    })
                } else if(foundUser.email) {
                    res.status(400).send({
                        message: 'email already exists'
                    })
                } else if (foundUser.username) {
                    res.status(400).send({
                        message: 'user name already exists'
                    })
                }
            }) 
        } 
    }
}
export default userController;