import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://aniruddhanarasimman:Anis301004@kgsaha.lzsfm4n.mongodb.net/Amul').catch((err)=>{console.error(err)})
.then(console.log('connected'))