import express from 'express'
import { LogModel, UserModel } from '../Schema'

const LogRouter = express.Router()

LogRouter.post('/:id', async(req, res)=>{
    const u_id = req.params.id
    const result = await UserModel.findById(u_id)
    if (!result){
        return res.status(401).json({
            "msg":"User not found"
        })
    }
    const newLog = {
        "u_id":u_id
    }
    const newlog = new LogModel(newLog)
    newlog.save()
    return res.status(200).json({
        "msg":"Log updated successfully"
    })
})