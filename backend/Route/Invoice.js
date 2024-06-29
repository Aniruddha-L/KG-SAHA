import express from 'express'
import { InvoiceModel } from '../Schema.js'

const InvoiceRouter = express.Router()

InvoiceRouter.get('/', async(req, res)=>{
    const result = await InvoiceModel.find({})
    if (!result){
        return res.status(401).json({
            "msg":"No invoices found"
        })
    }
    return res.status(200).send(result)
})

InvoiceRouter.post('/', async(req, res)=>{
    const body = req.body
    if (!body.user_id || !body.pdt_id || !body.quantity || !body.total || !body.billAmt){
        return res.status(400).json({
            "msg":"Required details are missing"
        })
    }
    const NewInvoice = {
        "user_id":body.user_id,
        "pdt_id":body.pdt_id,
        "quantity":body.quantity,
        "total":body.total,
        "billAmt":body.billAmt
    }
    const newInvoice = new InvoiceModel(NewInvoice)
    newInvoice.save()
    return res.status(200).json({
        "msg":"New invoice created"
    })
})

export default InvoiceRouter