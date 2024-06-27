import { ProductModel } from "../Schema.js";
import express from 'express'
import HashFunction from "../HashFunction.js";

const ProductRouter = express.Router()

ProductRouter.get('/', async(req, res)=>{
    const result = await ProductModel.find({})
    if (!result){
        return res.status(401).json({
            "msg":"No products found"
        })
    }
    return res.send(result)
})
ProductRouter.get('/:id', async(req, res)=>{
    const id = req.params.id
    const result = await ProductModel.find({_id:id})
    if (!result){
        return res.status(401).json({
            "msg":"No products found"
        })
    }
    return res.send(result)
})

ProductRouter.put('/:id', async(req, res)=>{
    const id = req.params.id
    const pdt = req.body
    const result = await ProductModel.findById(id)
    if (!result){
        return res.json("The product does not exist").status(401)
    }
    const update = await ProductModel.findByIdAndUpdate(id, pdt)
    if(!update){
        return res.status(400).json({
            "msg":"Update unsuccessfull"
        })
    }
    return res.status(200).json({
        "msg":"Update successfull"
    })
})

ProductRouter.post('/', async(req, res)=>{
    if (!req.body.Name || !req.body.HsnNo || !req.body.quan || !req.body.mrp || !req.body.gst || !req.body.rrp ){
        res.status(400).json({
            "msg":"Error missing fields"
        })
    }
    const id = HashFunction(req.body.Name)
    const result = await UserModel.find({_id:id})
    if (result.length != 0 ){
        return res.status(401).json({
            "msg":"Product already exist"
        })
    }
    const newUser = {
        "_id":id,
        "Name":req.body.Name,
        "HsnNo":req.body.HsnNo,
        "quan":req.body.quan,
        "mrp":req.body.mrp,
        "rrp":req.body.rrp,
        "gst":req.body.gst
    }
    const newPdtData = new ProductModel(newUser)
    newPdtData.save()
    return res.status(200).json({
        "msg":"New user added successfully"
    }) 
})

ProductRouter.delete('/:id', async(req, res)=>{
    const id = req.params.id
    const result = await ProductRouter.findById(id)
    if (!result){
        return res.status(401).json({
            "msg":"the product does not exist"
        })
    }
    const deletion = await ProductRouter.findByIdAndDelete(id)
    if (!deletion){
        return res.status(401).json({
            "msg":"Deletion unsuccessfull"
        })
    }
    return res.status(200).json({
        "msg":"Deletion success"
    })
})

export default ProductRouter