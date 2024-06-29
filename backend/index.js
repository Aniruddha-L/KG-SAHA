import express from 'express'
import '../backend/Db.js'
import UserRouter from './Route/User.js'
import ProductRouter from './Route/Product.js'
import InvoiceRouter from './Route/Invoice.js'

const app = express()
app.use(express.json())
app.use('/user', UserRouter)
app.use('/product', ProductRouter)
app.use('/invoice', InvoiceRouter)
    
app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.listen(5555,()=>{
    console.log('listening at port 5555')
})