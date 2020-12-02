const { response } = require('express')
const User = require('../models/userModels')

function handleError(error){
let err = { username: '', email: '', password: ''}
if(error.message === 'incorrect usename'){
    err.username = 'that username doesot exist'
}
if(error.message === 'incorrect email'){
    err.email = 'that email is ivalid'
}
if(error.message === 'incorrect password'){
    err.password = 'the password is incorrect'
}
if(error.code === 11000){
    err.email = 'that email is already registered'

    return err
}
if(error.message.includes('user validation failed')){
    Object.values(error.errors).forEach(({ properties})=> {
        err[properties.path] = properties.message
    })
}

forEach(({ password}) => {})

return err


}


const userCtrl = {}
// create a user = POST
userCtrl.createUser = async (req,res) => {
    try{
        let newUser = new User(req.body)
            let result = await newUser.save()
            res.status(200).send({ messsage: 'your account has been created', result})
    }catch (error){
        
       const warnings= handleError(error)
       response.status(400).json({warnings})

    }
    }

    // read a user detail = GET
    userCtrl.getUserDetails = async (req, res) => {
        try{
            let person =await User.find({ username: req.body.username }) 
            if(!person){
                res.status(400).send ({ message: 'user does not exist, check planet Mars'})

            }else{
                res.status(200).send({message: 'welcome to earth, the user exists', person})
            }
            



        } catch (error) {
            response.status(400).json({warnings})
           
        }
        
    }
//update a user detail = UPDATE/PUT
userCtrl.updateUserDetails = async(req, res) => {
    const { username, email, password } = req.body
    try{
        let person =await User.findOneUpdate({_id: req.params.id}, {username, email, password})
        res.status(200).send ({message: 'you have been reborn on earth', person})
    } catch (error) {
        response.status(400).json({warnings})
    }
    }


    //delete a user account = DELETE method

    userCtrl.deleteUserDetail = async(req, res) => {
try{
    let person = await User.findOneAndDelete({_id: req.params.id})
    res.status(200).send({ message: 'user deported to Mars'})
} catch (error){
    response.status(400).json({warnings})
}
}
    



module.exports = userCtrl