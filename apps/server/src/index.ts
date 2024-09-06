import express,{Request,Response} from "express";
import dotenv from "dotenv"


dotenv.config()
const app=express()

const PORT =process.env.PORT

app.get("/",(req:Request,res:Response)=>{
  res.send(`Hallo Love!`)
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})