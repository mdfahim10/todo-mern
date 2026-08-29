import e from "express";
import cors from "cors"
import { collectionName, connection } from "./dbconfig.js";
import { ObjectId } from "mongodb";
const app = e();

app.use(cors());
app.use(e.json());
app.post("/add-task", async (req, res) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if (result) {
        res.send({
            message: "new task added",
            success: true,
            result
        })
    } else {
        res.send({
            message: "task not added",
            success: false,
        })
    }
})

app.get("/tasks", async (req, res) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.find().toArray();
    if (result) {
        res.send({
            message: "Task List fetched",
            success: true,
            result
        })
    } else {
        res.send({
            message: "Error!try again later",
            success: false,
        })
    }
})


app.delete("/delete/:id", async (req, res) => {
    const db = await connection();
    const id=req.params.id
    const collection = await db.collection(collectionName);
    const result = await collection.deleteOne({_id:new ObjectId(id)});
    if (result) {
        res.send({
            message: "Task Deleted",
            success: true,
            result
        })
    } else {
        res.send({
            message: "Error!try again later",
            success: false,
        })
    }
})




app.listen(3200);