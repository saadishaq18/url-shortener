const USER = require('../model/userModel')
const bcrypt = require('bcrypt')


//Register new User
const handleUserRegister = async (req, res) => {
    const {name, email, password, confirmPassword} = req.body
    let errors = {}
    
    //Validation
    if(!name)  errors.name = "Name is required"

    if(!email) errors.email = "Email is required"
    else if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)) errors.email = "Invalid Email Format"

    if(!password) errors.password = "Password is required"
    else if(!((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password))){
        return errors.password  = "Invalid Password"
    }
    if(!confirmPassword) errors.confirmPassword = "Confirm password is required"

    let passwordtrim = password.trim()
    let confirmPasswordtrim = confirmPassword.trim()

    if(passwordtrim !== confirmPasswordtrim){
        errors.confirmPassword = 'Password does not match'
    }

    if(Object.keys(errors).length !== 0){
        return res.status(400).json({error: errors})
    }

    //Checking if the user already exist
    let existingUser = await USER.findOne({email})
    if(existingUser){
        return res.status(409).json({error: "User Already exist"})
    }

    //Encrypt the password
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT))
    let encryptPassword =  await bcrypt.hash(password, salt)


    //Register user in database
    try{
        const user = USER.create({
            name,
            email,
            password : encryptPassword,
        })
        if(!user){
            return res.status(400).json({error:"User not created"})
        }
        return res.status(201).json({message: "User created Successfully"})
    }
    catch(e){
        return res.status(500).json({error:"Internal Server Error"})
    }

}

//Login User
const handleUserLogin = async (req, res) =>{
    const {email, password} = req.body

    //Validation
    let errors = {}
    if(!email){
        errors.email = "Email is required"
    }
    if(!password){
        errors.password = "Password is required"
    }
    if(Object.keys(errors).length !==0 ){
        return res.status(400).json({error: errors})
    }

    //Attempting login
    try{
        let user = await USER.findOne({email})
        if(!user) return res.status(401).json({error:"Invalid Credential"})

        let passwordValid = await bcrypt.compare(password, user.password)

        if(!passwordValid) return res.status(401).json({error: "Invalid Credential"})

        return res.status(200).json({message:"Login Successfull"})
    }
    catch(e){
        return res.status(500).json({error: "Internal Server Error"})
    }
}

module.exports = {
    handleUserRegister,
    handleUserLogin
}