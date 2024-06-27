import { UserModel } from "../Schema.js";
import express from 'express'
import HashFunction from "../HashFunction.js";

const UserRouter = express.Router()

UserRouter.get('/', async(req, res)=>{
    const result = await UserModel.find({})
    res.send(result)
})

UserRouter.get('/:id', async(req, res)=>{
    const id = req.params.id
    const result = await UserModel.findById(id)
    if (!result){
        return res.status(401).json({
            "msg":"User not found"
        })
    }
    return res.send(result)
})

UserRouter.post('/', async(req, res)=>{
    if (!req.body.Name || !req.body.Phone || !req.body.Address){
        res.status(400).json({
            "msg":"Error missing fields"
        })
    }
    const id = HashFunction(req.body.Name)
    const result = await UserModel.find({_id:id})
    if (result.length != 0 ){
        return res.status(401).json({
            "msg":"User already exist"
        })
    }
    const newUser = {
        "_id":id,
        "Name":req.body.Name,
        "Email":req.body.Email,
        "Phone":req.body.Phone,
        "Address":req.body.Address,
        "GST":req.body.GST
    }
    const newUserData = new UserModel(newUser)
    newUserData.save()
    return res.status(200).json({
        "msg":"New user added successfully"
    })

})

UserRouter.put('/:id', async(req, res)=>{
    const id = req.params.id
    const user = req.body
    const result = await UserModel.find({_id:id})
    if (result.length == 0){
        return res.status(401).json({
            "msg":"user does not exist"
        })
    }
    
    const update = await UserModel.findByIdAndUpdate(id, user)
    
    if (!update){
        return res.status(401).json({
            "msg":"error in update"
        })
    }
    
    return res.status(200).json({
        "msg":"user updated successfully"
    })
})

UserRouter.delete('/:id',async(req, res)=>{
    const id = req.params.id
    const result = await UserModel.find({})
    if (result.length === 0){
        return res.status(400).json({
            "msg":"Error: following user does not exist"
        })
    }
    const response = await UserModel.findByIdAndDelete(id)

    if (!response){
        return res.status(400).json({
            "msg":"Deletion unsuccessfull"
        })
    }
    return res.status(200).json({
        "msg":"Deletion successfull"
    })
} )

export default UserRouter