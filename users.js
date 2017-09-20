import models from '../models';
import bcrypt from 'bcrypt';

const users = models.users;
const userController = {

    Signin (req, res) {
        if (!req.body.username) {
           res.status(400).send({
               message: 'please enter your email or username'
           })
        } else if (!req.body.password) {
            res.status(400).send({
                 message: 'please enter your password'
            })
        } else {
            return users
            .findOne({
                 where: {
                     $or: [
                        { username: req.body.username },
                        { email: req.body.username }
                     ]
                 }
             }).then(foundUser => {
                 //console.log(found) 
                 if (!foundUser) {
                     res.status(400).send({
                         message: 'user does NOT exist!'
                     })
                 } else if(bcrypt.compareSync(req.body.password, foundUser.password)){
                    if (foundUser) {
                        return res.status(200).send({
                             message: 'Signin Successful!'
                            //  role: foundUser.role,
                            //  Token: token
                         }) 
                         } else {
                        res.status(401).send({
                            ERrOR: 'Incorrect Password'
                            })
                     }
                 }
                 //{
                    // // console.log(foundUser.role)
                    // const token = jwt.Signin({role: foundUser.role}, process.env.SECRET_KEY, {
                    //     expiresIn: 60 * 60 * 24 // Token expires in 24 hours
                })
            } 
                // .catch(err => {
                //     console.log(err)
                //     res.status(500).send({
                //         message: 'some error occured!'
                //     })
                // }),
}
}
export default userController;