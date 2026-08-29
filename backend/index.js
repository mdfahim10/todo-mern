import e from "express";
import cors from "cors"
import { collectionName, connection } from "./dbconfig.js";
const app=e();

app.use(cors());
app.use(e.json());
app.post("/add-task", async (req,res) => {
    const db= await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if(result){
        res.send({
            message:"new task added",
            success:true,
            result
        })
    }else{
        res.send({
            message:"task not added",
            success:false,
        })
    }
})

app.get("/",(req,res)=>{
    res.send({
        message:"Basic API working ... ",
        success:true
    })
})
app.listen(3200);