import e from "express";
import { collectionName, connection } from "./dbconfig.js";

const app = e();

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
            success:false
        })
    }
})


app.listen(3200)